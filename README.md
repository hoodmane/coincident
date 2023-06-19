# coincident

<sup>**Social Media Photo by [bady abbas](https://unsplash.com/@bady) on [Unsplash](https://unsplash.com/)**</sup>

An [Atomics](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics) based [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) to simplify, and synchronize, [Worker](https://developer.mozilla.org/en-US/docs/Web/API/Worker) related tasks.

#### Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <script type="module">
      import coincident from 'https://unpkg.com/coincident';
      const worker = new Worker('./worker.js', {type: 'module'});
      // set a sync or async callback to return a serializable answer
      coincident(worker).input = value => prompt(value);
    </script>
  </head>
</html>
```

```js
// worker.js
import coincident from 'https://unpkg.com/coincident';

console.log('asking for an input');
// pauses in a non blocking way the worker until the answer has been received
console.log('input', coincident(self).input('what is 1 + 2 ?'));
console.log('input received');
```

## API

The module exports a utility/helper able to *Proxy* once a generic *worker* or *globalThis* / *self* context, adding an unobtrusive listener, providing orchestration out of the box for bootstrapped *workers* that use such module.

#### Worker -> Main

```js
import coincident from 'coincident';
// or const coincident = require('coincident');

// on the main thread
const worker = new Worker('./any-worker.js');
coincident(worker).enabler = async (...args) => {
  // do something sync or async with received args
  return {some: 'value'};
};

// on the worker side
const result = coincident(self).enabler('one', {or_more: 'args'});
console.log(result);
// {some: 'value'}
```

The second optional argument of the `coincident(context[, JSON])` helper can be any *JSON* like namespace able to `parse` and `stringify` data, such as [flatted](https://www.npmjs.com/package/flatted) or [@ungap/structured-clone/json](https://github.com/ungap/structured-clone/#tojson) (or use `coincident/structured`).

**Additionally**, the exported function has a `coincident.tranfer(...buffers)` helper that if used as last argument of any worker demanded task will transfer buffers instead of cloning/copying these.

#### Main -> Worker

This module can also communicate from a *main* thread to a *worker*, but in this case the *main* thread needs to `await` for results because [Atomics.wait() cannot be used in main](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/wait).

```html
<script type="module">
  // main thread
  import coincident from 'coincident';
  const worker = new Worker('./worker.js', {type: 'module'});

  document.body.textContent = await coincident(worker).compute(1, 2);
</script>
```

```js
// worker.js
import coincident from 'coincident';

// expose a specific function to the main thread
coincident(self).compute = (a, b) => (a + b);
```


### coincident/structured

This entry point exports the exact same module except it uses [@ungap/structured-clone/json](https://github.com/ungap/structured-clone/#tojson) `parse` and `stringify` functions, allowing more complex, or recursive, objects to be passed along as result to, or from, the *worker*.

Please keep in mind not all complex types are supported by the polyfill.


### coincident/global

This entry point exports the same `coincident` module (using *JSON* as default) **but** the *Worker* utility returns an obejct with 3 fields:

  * **proxy** it's the usual proxy utility to expose or invoke functions defined in the main counter-part
  * **global** it's the proxy that orchestrates access to the *main* world, including the ability to pass callbacks from the *Worker*, with the only caveat these will be inevitably executed asynchronously on the main thread, so that *Promise* or *thenable* work out of the box but *accessors* or defined callbacks will need to be awaited from the worker too. DOM listeners should be also handled with no issues but the `event` can't *preventDefault* or *stopPropagation* as the listener will be asynchronous too (also listeners are currently untested)
  * **isGlobal** is an utility that helps introspection of global proxies, callbacks, classes, or references

While the initial utility/behavior is preserved on both sides, the *Worker* can seamlessly use *global* / *main* thread to operate on DOM, *localStorage*, or literally anything else, included *Promise* based operations, DOM listeners, and so on.


```html
<!-- main page -->
<script type="module">
    import coincident from 'coincident/global';
    const proxy = coincident(new Worker('./worker.js', {type: 'module'}));
</script>
```

```js
// The worker.js !!!
import coincident from 'coincident/global';

const {proxy, global, isGlobal} = coincident(self);
// the proxy can expose or answer to main proxy counter part

// ... but here is the fun part ...
const {document} = global;
document.body.innerHTML = '<h1>Hello World!</h1>';

document.body.appendChild(
  document.createElement('div')
).textContent = '😱';
```

See the [test/global.js](./test/global.js) file or reach `http://localhost:8080/test/global.html` locally to play around this feature.
