const e="ff4815c7-7173-4373-a298-cdcd385cb381";var t=e=>({value:new Promise((t=>{let n=new Worker("data:application/javascript,onmessage%3D(%7Bdata%3Ab%7D)%3D%3E(Atomics.wait(b%2C0)%2CpostMessage(0))");n.onmessage=t,n.postMessage(e)}))})
/*! (c) Andrea Giammarchi - ISC */;const{Int32Array:n,Map:s,SharedArrayBuffer:a,Uint16Array:r}=globalThis,{BYTES_PER_ELEMENT:o}=n,{BYTES_PER_ELEMENT:i}=r,{isArray:c}=Array,{notify:f,wait:l,waitAsync:w}=Atomics,{fromCharCode:g}=String,d=(e,n)=>e?(w||t)(n,0):(l(n,0),{value:{then:e=>e()}}),h=new WeakSet,p=new WeakMap;let u=0;const E=(t,{parse:l,stringify:w}=JSON)=>{if(!p.has(t)){const E=(n,...s)=>t.postMessage({[e]:s},{transfer:n});p.set(t,new Proxy(new s,{has:(e,t)=>"string"==typeof t&&!t.startsWith("_"),get:(e,s)=>"then"===s?null:(...e)=>{const c=u++;let f=new n(new a(o)),w=[];h.has(e.at(-1)||w)&&h.delete(w=e.pop()),E(w,c,f,s,e);const p=t instanceof Worker;return d(p,f).value.then((()=>{const e=f[0];if(!e)return;const t=i*e;return f=new n(new a(t+t%o)),E([],c,f),d(p,f).value.then((()=>l(g(...new r(f.buffer).slice(0,e)))))}))},set(n,a,o){if(!n.size){const a=new s;t.addEventListener("message",(async t=>{const s=t.data?.[e];if(c(s)){t.stopImmediatePropagation();const[e,o,...i]=s;if(i.length){const[t,s]=i;if(!n.has(t))throw new Error(`Unsupported action: ${t}`);{const r=w(await n.get(t)(...s));r&&(a.set(e,r),o[0]=r.length)}}else{const t=a.get(e);a.delete(e);for(let e=new r(o.buffer),n=0;n<t.length;n++)e[n]=t.charCodeAt(n)}f(o,0)}}))}return!!n.set(a,o)}}))}return p.get(t)};E.transfer=(...e)=>(h.add(e),e);export{E as default};
