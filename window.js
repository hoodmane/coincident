const e="ff4815c7-7173-4373-a298-cdcd385cb381",t="M"+e,n="T"+e;var r=e=>({value:new Promise((t=>{let n=new Worker("data:application/javascript,onmessage%3D(%7Bdata%3Ab%7D)%3D%3E(Atomics.wait(b%2C0)%2CpostMessage(0))");n.onmessage=t,n.postMessage(e)}))})
/*! (c) Andrea Giammarchi - ISC */;const{Int32Array:s,Map:a,SharedArrayBuffer:o,Uint16Array:i}=globalThis,{BYTES_PER_ELEMENT:c}=s,{BYTES_PER_ELEMENT:f}=i,{isArray:l}=Array,{notify:p,wait:u,waitAsync:g}=Atomics,{fromCharCode:y}=String,w=(e,t)=>e?(g||r)(t,0):(u(t,0),{value:{then:e=>e()}}),h=new WeakSet,d=new WeakMap;let v=0;const b=(t,{parse:n,stringify:r}=JSON)=>{if(!d.has(t)){const u=(n,...r)=>t.postMessage({[e]:r},{transfer:n});d.set(t,new Proxy(new a,{has:(e,t)=>"string"==typeof t&&!t.startsWith("_"),get:(e,r)=>"then"===r?null:(...e)=>{const a=v++;let l=new s(new o(c)),p=[];h.has(e.at(-1)||p)&&h.delete(p=e.pop()),u(p,a,l,r,e);const g=t instanceof Worker;return w(g,l).value.then((()=>{const e=l[0];if(!e)return;const t=f*e;return l=new s(new o(t+t%c)),u([],a,l),w(g,l).value.then((()=>n(y(...new i(l.buffer).slice(0,e)))))}))},set(n,s,o){if(!n.size){const s=new a;t.addEventListener("message",(async t=>{const a=t.data?.[e];if(l(a)){t.stopImmediatePropagation();const[e,o,...c]=a;if(c.length){const[t,a]=c;if(!n.has(t))throw new Error(`Unsupported action: ${t}`);{const i=r(await n.get(t)(...a));i&&(s.set(e,i),o[0]=i.length)}}else{const t=s.get(e);s.delete(e);for(let e=new i(o.buffer),n=0;n<t.length;n++)e[n]=t.charCodeAt(n)}p(o,0)}}))}return!!n.set(s,o)}}))}return d.get(t)};b.transfer=(...e)=>(h.add(e),e);const m="object",E="function",P="number",M="string",k="undefined",A="symbol",{defineProperty:x,getOwnPropertyDescriptor:W,getPrototypeOf:S,isExtensible:T,ownKeys:O,preventExtensions:C,set:L,setPrototypeOf:R}=Reflect,{assign:D,create:_}=Object,B=S(Int8Array),$="isArray",j=(e,t)=>{const{get:n,set:r,value:s}=e;return n&&(e.get=t(n)),r&&(e.set=t(r)),s&&(e.value=t(s)),e},z=(e,t)=>[e,t],I=e=>t=>{const n=typeof t;switch(n){case m:if(null==t)return z("null",t);case E:return e(n,t);case"boolean":case P:case M:case k:case"bigint":return z(n,t);case A:if(N.has(t))return z(n,N.get(t))}throw new Error(`Unable to handle this ${n} type`)},N=new Map(O(Symbol).filter((e=>typeof Symbol[e]===A)).map((e=>[Symbol[e],e]))),U=e=>{for(const[t,n]of N)if(n===e)return t};function F(){return this}const K="apply",Y="construct",J="defineProperty",q="deleteProperty",G="get",H="getOwnPropertyDescriptor",Q="getPrototypeOf",V="has",X="isExtensible",Z="ownKeys",ee="preventExtensions",te="set",ne="setPrototypeOf",re="delete";var se=((e,t)=>{const n=t&&new WeakMap;if(t){const{addEventListener:e}=EventTarget.prototype;x(EventTarget.prototype,"addEventListener",{value(t,r,...s){return s.at(0)?.invoke&&(n.has(this)||n.set(this,new Map),n.get(this).set(t,[].concat(s[0].invoke)),delete s[0].invoke),e.call(this,t,r,...s)}})}const r=t&&(e=>{const{currentTarget:t,target:r,type:s}=e;for(const a of n.get(t||r)?.get(s)||[])e[a]()});return(n,s,a,...o)=>{let i=0;const c=new Map,f=new Map,{[a]:l}=n,p=o.length?D(_(globalThis),...o):globalThis,u=I(((e,t)=>{if(!c.has(t)){let e;for(;f.has(e=i++););c.set(t,e),f.set(e,t)}return z(e,c.get(t))})),g=new FinalizationRegistry((e=>{l(re,z(M,e))})),y=([e,n])=>{switch(e){case m:if(null==n)return p;if(typeof n===P)return f.get(n);if(!(n instanceof B))for(const e in n)n[e]=y(n[e]);return n;case E:if(typeof n===M){if(!f.has(n)){const e=function(...e){return t&&e.at(0)instanceof Event&&r(...e),l(K,z(E,n),u(this),e.map(u))},s=new WeakRef(e);f.set(n,s),g.register(e,n,s)}return f.get(n).deref()}return f.get(n);case A:return U(n)}return n},w={[K]:(e,t,n)=>u(e.apply(t,n)),[Y]:(e,t)=>u(new e(...t)),[J]:(e,t,n)=>u(x(e,t,n)),[q]:(e,t)=>u(delete e[t]),[Q]:e=>u(S(e)),[G]:(e,t)=>u(e[t]),[H]:(e,t)=>{const n=W(e,t);return n?z(m,j(n,u)):z(k,n)},[V]:(e,t)=>u(t in e),[X]:e=>u(T(e)),[Z]:e=>z(m,O(e).map(u)),[ee]:e=>u(C(e)),[te]:(e,t,n)=>u(L(e,t,n)),[ne]:(e,t)=>u(R(e,t)),[re](e){c.delete(f.get(e)),f.delete(e)}};return n[s]=(e,t,...n)=>{switch(e){case K:n[0]=y(n[0]),n[1]=n[1].map(y);break;case Y:n[0]=n[0].map(y);break;case J:{const[e,t]=n;n[0]=y(e);const{get:r,set:s,value:a}=t;r&&(t.get=y(r)),s&&(t.set=y(s)),a&&(t.value=y(a));break}default:n=n.map(y)}return w[e](y(t),...n)},{proxy:n,[e.toLowerCase()]:p,[`is${e}Proxy`]:()=>!1}}})("Window",!0),ae=(e=>{let t=0;const n=new Map,r=new Map,s=Symbol(),a=e=>typeof e===E?e():e,o=e=>typeof e===m&&!!e&&s in e,i=Array[$],c=I(((e,o)=>{if(s in o)return a(o[s]);if(e===E){if(!r.has(o)){let e;for(;r.has(e=String(t++)););n.set(o,e),r.set(e,o)}return z(e,n.get(o))}if(!(o instanceof B))for(const e in o)o[e]=c(o[e]);return z(e,o)}));return(t,f,l)=>{const{[f]:p}=t,u=new Map,g=new FinalizationRegistry((e=>{u.delete(e),p(re,c(e))})),y=e=>{const[t,n]=e;if(!u.has(n)){const r=t===E?F.bind(e):e,s=new Proxy(r,d),a=new WeakRef(s);u.set(n,a),g.register(s,n,a)}return u.get(n).deref()},w=e=>{const[t,n]=e;switch(t){case m:return typeof n===P?y(e):n;case E:return typeof n===M?r.get(n):y(e);case A:return U(n)}return n},h=(e,t,...n)=>w(p(e,a(t),...n)),d={[K]:(e,t,n)=>h(K,e,c(t),n.map(c)),[Y]:(e,t)=>h(Y,e,t.map(c)),[J]:(e,t,n)=>{const{get:r,set:s,value:a}=n;return typeof r===E&&(n.get=c(r)),typeof s===E&&(n.set=c(s)),typeof a===E&&(n.value=c(a)),h(J,e,c(t),n)},[q]:(e,t)=>h(q,e,c(t)),[Q]:e=>h(Q,e),[G]:(e,t)=>t===s?e:h(G,e,c(t)),[H]:(e,t)=>{const n=h(H,e,c(t));return n&&j(n,w)},[V]:(e,t)=>t===s||h(V,e,c(t)),[X]:e=>h(X,e),[Z]:e=>h(Z,e).map(w),[ee]:e=>h(ee,e),[te]:(e,t,n)=>h(te,e,c(t),c(n)),[ne]:(e,t)=>h(ne,e,c(t))};t[l]=(e,t,s,a)=>{switch(e){case K:return w(t).apply(w(s),a.map(w));case re:{const e=w(t);n.delete(r.get(e)),r.delete(e)}}};const v=new Proxy([m,null],d),b=v.Array[$];return x(Array,$,{value:e=>o(e)?b(e):i(e)}),{[e.toLowerCase()]:v,[`is${e}Proxy`]:o,proxy:t}}})("Window");const oe=new WeakMap,ie=(e,...r)=>{const s=b(e,...r);if(!oe.has(s)){const r=e instanceof Worker?se:ae;oe.set(s,r(s,t,n))}return oe.get(s)};ie.transfer=b.transfer;export{ie as default};
