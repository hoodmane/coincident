var e="2f6fe6d4-8ba8-424a-83c5-8fadca1ea103",t=e=>({value:new Promise((t=>{let n=new Worker("data:application/javascript,"+encodeURIComponent("onmessage=({data:b})=>(Atomics.wait(b,0),postMessage(0))"));n.onmessage=t,n.postMessage(e)}))})
/*! (c) Andrea Giammarchi - ISC */;const{Int32Array:n,Map:r,SharedArrayBuffer:s,Uint16Array:a}=globalThis,{BYTES_PER_ELEMENT:o}=n,{BYTES_PER_ELEMENT:i}=a,{isArray:c}=Array,{notify:l,wait:f,waitAsync:p}=Atomics,{fromCharCode:u}=String,w=(e,n)=>e?(p||t)(n,0):(f(n,0),{value:{then:e=>e()}}),g=new WeakSet,y=new WeakMap;let d=0;const h=(t,{parse:f,stringify:p}=JSON)=>{if(!y.has(t)){const h=(n,...r)=>t.postMessage({[e]:r},{transfer:n});y.set(t,new Proxy(new r,{has:(e,t)=>"string"==typeof t&&!t.startsWith("_"),get:(e,r)=>"then"===r?null:(...e)=>{const c=d++;let l=new n(new s(o)),p=[];g.has(e.at(-1)||p)&&g.delete(p=e.pop()),h(p,c,l,r,e);const y=t instanceof Worker;return w(y,l).value.then((()=>{const e=l[0];if(!e)return;const t=i*e;return l=new n(new s(t+t%o)),h([],c,l),w(y,l).value.then((()=>f(u(...new a(l.buffer).slice(0,e)))))}))},set(n,s,o){if(!n.size){const s=new r;t.addEventListener("message",(async t=>{const r=t.data?.[e];if(c(r)){t.stopImmediatePropagation();const[e,o,...i]=r;if(i.length){const[t,r]=i;if(!n.has(t))throw new Error(`Unsupported action: ${t}`);{const a=p(await n.get(t)(...r));a&&(s.set(e,a),o[0]=a.length)}}else{const t=s.get(e);s.delete(e);for(let e=new a(o.buffer),n=0;n<t.length;n++)e[n]=t.charCodeAt(n)}l(o,0)}}))}return!!n.set(s,o)}}))}return y.get(t)};h.transfer=(...e)=>(g.add(e),e);const b="object",v="function",m="number",E="string",P="undefined",M="symbol",{defineProperty:k,getOwnPropertyDescriptor:x,getPrototypeOf:A,isExtensible:W,ownKeys:T,preventExtensions:S,set:R,setPrototypeOf:O}=Reflect,L=A(Int8Array),_=(e,t)=>{const{get:n,set:r,value:s}=e;return n&&(e.get=t(n)),r&&(e.set=t(r)),s&&(e.value=t(s)),e},C=(e,t)=>[e,t],D=e=>t=>{const n=typeof t;switch(n){case b:if(null==t)return C("null",t);case v:return e(n,t);case"boolean":case m:case E:case P:case"bigint":return C(n,t);case M:if(I.has(t))return C(n,I.get(t))}throw new Error(`Unable to handle this ${n} type`)},I=new Map(T(Symbol).filter((e=>typeof Symbol[e]===M)).map((e=>[Symbol[e],e]))),U=e=>{for(const[t,n]of I)if(n===e)return t},z="apply",B="construct",N="defineProperty",j="deleteProperty",F="get",K="getOwnPropertyDescriptor",Y="getPrototypeOf",$="has",G="isExtensible",J="ownKeys",q="preventExtensions",H="set",Q="setPrototypeOf",V="delete";let X=0;const Z=new Map,ee=new Map,te=new WeakMap;if(globalThis.window===globalThis){const{addEventListener:e}=EventTarget.prototype;k(EventTarget.prototype,"addEventListener",{value(t,n,...r){return r.at(0)?.invoke&&(te.has(this)||te.set(this,new Map),te.get(this).set(t,[].concat(r[0].invoke)),delete r[0].invoke),e.call(this,t,n,...r)}})}const ne=D(((e,t)=>{if(!Z.has(t)){let e;for(;ee.has(e=X++););Z.set(t,e),ee.set(e,t)}return C(e,Z.get(t))}));var re=(e,t,n)=>{const{[n]:r}=e,s=new FinalizationRegistry((e=>{r(V,C(E,e))})),a=([e,t])=>{switch(e){case b:if(null==t)return globalThis;if(typeof t===m)return ee.get(t);if(!(t instanceof L))for(const e in t)t[e]=a(t[e]);return t;case v:if(typeof t===E){if(!ee.has(t)){const e=function(...e){return e.at(0)instanceof Event&&(e=>{const{currentTarget:t,target:n,type:r}=e;for(const s of te.get(t||n)?.get(r)||[])e[s]()})(...e),r(z,C(v,t),ne(this),e.map(ne))},n=new WeakRef(e);ee.set(t,n),s.register(e,t,n)}return ee.get(t).deref()}return ee.get(t);case M:return U(t)}return t},o={[z]:(e,t,n)=>ne(e.apply(t,n)),[B]:(e,t)=>ne(new e(...t)),[N]:(e,t,n)=>ne(k(e,t,n)),[j]:(e,t)=>ne(delete e[t]),[Y]:e=>ne(A(e)),[F]:(e,t)=>ne(e[t]),[K]:(e,t)=>{const n=x(e,t);return n?C(b,_(n,ne)):C(P,n)},[$]:(e,t)=>ne(t in e),[G]:e=>ne(W(e)),[J]:e=>C(b,T(e).map(ne)),[q]:e=>ne(S(e)),[H]:(e,t,n)=>ne(R(e,t,n)),[Q]:(e,t)=>ne(O(e,t)),[V](e){Z.delete(ee.get(e)),ee.delete(e)}};return e[t]=(e,t,...n)=>{switch(e){case z:n[0]=a(n[0]),n[1]=n[1].map(a);break;case B:n[0]=n[0].map(a);break;case N:{const[e,t]=n;n[0]=a(e);const{get:r,set:s,value:o}=t;r&&(t.get=a(r)),s&&(t.set=a(s)),o&&(t.value=a(o));break}default:n=n.map(a)}return o[e](a(t),...n)},{proxy:e,window:globalThis,isWindowProxy:()=>!1}};let se=0;const ae=new Map,oe=new Map,ie=Symbol(),ce=e=>typeof e===v?e():e,le=e=>typeof e===b&&!!e&&ie in e,fe="isArray",pe=Array[fe],ue=D(((e,t)=>{if(ie in t)return ce(t[ie]);if(e===v){if(!oe.has(t)){let e;for(;oe.has(e=String(se++)););ae.set(t,e),oe.set(e,t)}return C(e,ae.get(t))}if(!(t instanceof L))for(const e in t)t[e]=ue(t[e]);return C(e,t)}));var we=(e,t,n)=>{const{[t]:r}=e,s=new Map,a=new FinalizationRegistry((e=>{s.delete(e),r(V,ue(e))})),o=e=>{const[t,n]=e;if(!s.has(n)){const r=t===v?ge.bind(e):e,o=new Proxy(r,l),i=new WeakRef(o);s.set(n,i),a.register(o,n,i)}return s.get(n).deref()},i=e=>{const[t,n]=e;switch(t){case b:return typeof n===m?o(e):n;case v:return typeof n===E?oe.get(n):o(e);case M:return U(n)}return n},c=(e,t,...n)=>i(r(e,ce(t),...n)),l={[z]:(e,t,n)=>c(z,e,ue(t),n.map(ue)),[B]:(e,t)=>c(B,e,t.map(ue)),[N]:(e,t,n)=>{const{get:r,set:s,value:a}=n;return typeof r===v&&(n.get=ue(r)),typeof s===v&&(n.set=ue(s)),typeof a===v&&(n.value=ue(a)),c(N,e,ue(t),n)},[j]:(e,t)=>c(j,e,ue(t)),[Y]:e=>c(Y,e),[F]:(e,t)=>t===ie?e:c(F,e,ue(t)),[K]:(e,t)=>{const n=c(K,e,ue(t));return n&&_(n,i)},[$]:(e,t)=>t===ie||c($,e,ue(t)),[G]:e=>c(G,e),[J]:e=>c(J,e).map(i),[q]:e=>c(q,e),[H]:(e,t,n)=>c(H,e,ue(t),ue(n)),[Q]:(e,t)=>c(Q,e,ue(t))};e[n]=(e,t,n,r)=>{switch(e){case z:return i(t).apply(i(n),r.map(i));case V:{const e=i(t);ae.delete(oe.get(e)),oe.delete(e)}}};const f=new Proxy([b,null],l),p=f.Array[fe];return k(Array,fe,{value:e=>le(e)?p(e):pe(e)}),{window:f,isWindowProxy:le,proxy:e,get global(){return console.warn("Deprecated: please access `window` field instead"),this.window},get isGlobal(){return function(e){return console.warn("Deprecated: please access `isWindowProxy` field instead"),this.isWindowProxy(e)}.bind(this)}}};function ge(){return this}const ye=e+"M",de=e+"T",he=new WeakMap,be=(e,...t)=>{const n=h(e,...t);if(!he.has(n)){const t=e instanceof Worker?re:we;he.set(n,t(n,ye,de))}return he.get(n)};be.transfer=h.transfer;export{be as default};
