/*! (c) Andrea Giammarchi - ISC */

import {CHANNEL} from './channel.js';
import waitAsyncFallback from './fallback.js';

// just minifier friendly for Blob Workers' cases
const {Int32Array, Map, SharedArrayBuffer, Uint16Array} = globalThis;

// common constants / utilities for repeated operations
const {BYTES_PER_ELEMENT: I32_BYTES} = Int32Array;
const {BYTES_PER_ELEMENT: UI16_BYTES} = Uint16Array;

const {isArray} = Array;
const {notify, wait, waitAsync} = Atomics;
const {fromCharCode} = String;

// automatically uses sync wait (worker -> main)
// or fallback to async wait (main -> worker)
const waitFor = (isAsync, sb) => isAsync ?
                  (waitAsync || waitAsyncFallback)(sb, 0) :
                  (wait(sb, 0), {value: {then: fn => fn()}});

// retain buffers to transfer
const buffers = new WeakSet;

// retain either main threads or workers global context
const context = new WeakMap;

// used to generate a unique `id` per each worker `postMessage` "transaction"
let uid = 0;

/**
 * Create once a `Proxy` able to orchestrate synchronous `postMessage` out of the box.
 * @param {globalThis | Worker} self the context in which code should run
 * @param {{parse: (serialized: string) => any, stringify: (serializable: any) => string, transform?: (value:any) => any}} [JSON] an optional `JSON` like interface to `parse` or `stringify` content with extra `transform` ability.
 * @returns {ProxyHandler<globalThis> | ProxyHandler<Worker>}
 */
const coincident = (self, {parse, stringify, transform} = JSON) => {
  // create a Proxy once for the given context (globalThis or Worker instance)
  if (!context.has(self)) {
    // ensure the CHANNEL and data are posted correctly
    const post = (transfer, ...args) => self.postMessage({[CHANNEL]: args}, {transfer});

    // prevent Harakiri https://github.com/WebReflection/coincident/issues/18
    let harakiri = false;

    context.set(self, new Proxy(new Map, {
      // there is very little point in checking prop in proxy for this very specific case
      // and I don't want to orchestrate a whole roundtrip neither, as stuff would fail
      // regardless if from Worker we access non existent Main callback, and vice-versa.
      // This is here mostly to guarantee that if such check is performed, at least the
      // get trap goes through and then it's up to developers guarantee they are accessing
      // stuff that actually exists elsewhere.
      has: (_, action) => typeof action === 'string' && !action.startsWith('_'),

      // worker related: get any utility that should be available on the main thread
      get: (_, action) => action === 'then' ? null : ((...args) => {
        // transaction id
        const id = uid++;

        // first contact: just ask for how big the buffer should be
        let sb = new Int32Array(new SharedArrayBuffer(I32_BYTES));

        // if a transfer list has been passed, drop it from args
        let transfer = [];
        if (buffers.has(args.at(-1) || transfer))
          buffers.delete(transfer = args.pop());

        // ask for invoke with arguments and wait for it
        post(transfer, id, sb, action, transform ? args.map(transform) : args);

        // helps deciding how to wait for results
        const isAsync = self !== globalThis;

        // warn users about possible deadlock still allowing them
        // to explicitly `proxy.invoke().then(...)` without blocking
        let deadlock = 0;
        if (harakiri && isAsync)
          deadlock = setTimeout(console.warn, 1000, `💀🔒 - Possible deadlock if proxy.${action}(...args) is awaited`);

        return waitFor(isAsync, sb).value.then(() => {
          clearTimeout(deadlock);

          // commit transaction using the returned / needed buffer length
          const length = sb[0];

          // filter undefined results
          if (!length) return;

          // calculate the needed ui16 bytes length to store the result string
          const bytes = UI16_BYTES * length;

          // round up to the next amount of bytes divided by 4 to allow i32 operations
          sb = new Int32Array(new SharedArrayBuffer(bytes + (bytes % I32_BYTES)));

          // ask for results and wait for it
          post([], id, sb);
          return waitFor(isAsync, sb).value.then(
            // transform the shared buffer into a string and return it parsed
            () => parse(fromCharCode(...new Uint16Array(sb.buffer).slice(0, length)))
          );
        });
      }),

      // main thread related: react to any utility a worker is asking for
      set(actions, action, callback) {
        // lazy event listener and logic handling, triggered once by setters actions
        if (!actions.size) {
          // maps results by `id` as they are asked for
          const results = new Map;
          // add the event listener once (first defined setter, all others work the same)
          self.addEventListener('message', async (event) => {
            // grub the very same library CHANNEL; ignore otherwise
            const details = event.data?.[CHANNEL];
            if (isArray(details)) {
              // if early enough, avoid leaking data to other listeners
              event.stopImmediatePropagation();
              const [id, sb, ...rest] = details;
              // action available: it must be defined/known on the main thread
              if (rest.length) {
                const [action, args] = rest;
                if (actions.has(action)) {
                  harakiri = true;
                  try {
                    // await for result either sync or async and serialize it
                    const result = await actions.get(action)(...args);
                    if (result !== void 0) {
                      const serialized = stringify(transform ? transform(result) : result);
                      // store the result for "the very next" event listener call
                      results.set(id, serialized);
                      // communicate the required SharedArrayBuffer length out of the
                      // resulting serialized string
                      sb[0] = serialized.length;
                    }
                  }
                  finally {
                    harakiri = false;
                  }
                }
                // unknown action should be notified as missing on the main thread
                else {
                  throw new Error(`Unsupported action: ${action}`);
                }
              }
              // no action means: get results out of the well known `id`
              else {
                const result = results.get(id);
                results.delete(id);
                // populate the SharedArrayBuffer with utf-16 chars code
                for (let ui16a = new Uint16Array(sb.buffer), i = 0; i < result.length; i++)
                  ui16a[i] = result.charCodeAt(i);
              }
              // release te worker waiting either the length or the result
              notify(sb, 0);
            }
          });
        }
        // store this action callback allowing the setter in the process
        return !!actions.set(action, callback);
      }
    }));
  }
  return context.get(self);
};

coincident.transfer = (...args) => (buffers.add(args), args);

export default coincident;
