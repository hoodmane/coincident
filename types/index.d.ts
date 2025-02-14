export default coincident;
/**
 * Create once a `Proxy` able to orchestrate synchronous `postMessage` out of the box.
 * @param {globalThis | Worker} self the context in which code should run
 * @param {{parse: (serialized: string) => any, stringify: (serializable: any) => string, transform?: (value:any) => any}} [JSON] an optional `JSON` like interface to `parse` or `stringify` content with extra `transform` ability.
 * @returns {ProxyHandler<globalThis> | ProxyHandler<Worker>}
 */
declare function coincident(self: typeof globalThis | Worker, { parse, stringify, transform }?: {
    parse: (serialized: string) => any;
    stringify: (serializable: any) => string;
    transform?: (value: any) => any;
}): ProxyHandler<typeof globalThis> | ProxyHandler<Worker>;
declare namespace coincident {
    function transfer(...args: any[]): any[];
}
