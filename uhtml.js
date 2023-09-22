const e="08401dd4-d0dc-43dd-8d53-610a0ea892c3",t="M"+e,n="T"+e;var r=e=>({value:new Promise((t=>{let n=new Worker("data:application/javascript,onmessage%3D(%7Bdata%3Ab%7D)%3D%3E(Atomics.wait(b%2C0)%2CpostMessage(0))");n.onmessage=t,n.postMessage(e)}))})
/*! (c) Andrea Giammarchi - ISC */;const{Int32Array:s,Map:o,SharedArrayBuffer:a,Uint16Array:i}=globalThis,{BYTES_PER_ELEMENT:l}=s,{BYTES_PER_ELEMENT:c}=i,{isArray:u}=Array,{notify:f,wait:p,waitAsync:d}=Atomics,{fromCharCode:h}=String;let g=()=>{};const y=(e,t)=>e?(d||r)(t,0):(function(e){for(;;)switch(p(e,0,0,50)){case"ok":return;case"timed-out":g()}}(t),{value:{then:e=>e()}}),w=new WeakSet,m=new WeakMap;let b=0;const v=(t,{parse:n,stringify:r,transform:p}=JSON)=>{if(!m.has(t)){const d=(n,...r)=>{t.postMessage({[e]:r},{transfer:n})};let g=!1;m.set(t,new Proxy(new o,{has:(e,t)=>"string"==typeof t&&!t.startsWith("_"),get:(e,r)=>"then"===r?null:(...e)=>{const o=b++;let u=new s(new a(l)),f=[];w.has(e.at(-1)||f)&&w.delete(f=e.pop()),d(f,o,u,r,p?e.map(p):e);const m=t!==globalThis;let v=0;return g&&m&&(v=setTimeout(console.warn,1e3,`💀🔒 - Possible deadlock if proxy.${r}(...args) is awaited`)),y(m,u).value.then((()=>{clearTimeout(v);const e=u[0];if(!e)return;const t=c*e;return u=new s(new a(t+t%l)),d([],o,u),y(m,u).value.then((()=>n(h(...new i(u.buffer).slice(0,e)))))}))},set(n,s,a){if(!n.size){const s=new o;t.addEventListener("message",(async t=>{const o=t.data?.[e];if(u(o)){t.stopImmediatePropagation();const[e,a,...l]=o;if(l.length){const[t,o]=l;if(!n.has(t))throw new Error(`Unsupported action: ${t}`);g=!0;try{const i=await n.get(t)(...o);if(void 0!==i){const t=r(p?p(i):i);s.set(e,t),a[0]=t.length}}finally{g=!1}}else{const t=s.get(e);s.delete(e);for(let e=new i(a.buffer),n=0;n<t.length;n++)e[n]=t.charCodeAt(n)}f(a,0)}}))}return!!n.set(s,a)}}))}return m.get(t)};v.transfer=(...e)=>(w.add(e),e),v.setInterruptHandler=function(e){g=e};const E="object",x="function",k="number",A="string",T="undefined",C="symbol",{defineProperty:M,getOwnPropertyDescriptor:N,getPrototypeOf:P,isExtensible:S,ownKeys:$,preventExtensions:O,set:L,setPrototypeOf:W}=Reflect,{assign:R,create:B}=Object,D=P(Int8Array),_="isArray",j=(e,t)=>{const{get:n,set:r,value:s}=e;return n&&(e.get=t(n)),r&&(e.set=t(r)),s&&(e.value=t(s)),e},H=(e,t)=>[e,t],I=e=>t=>{const n=typeof t;switch(n){case E:if(null==t)return H("null",t);if(t===globalThis)return H(E,null);case x:return e(n,t);case"boolean":case k:case A:case T:case"bigint":return H(n,t);case C:if(z.has(t))return H(n,z.get(t))}throw new Error(`Unable to handle this ${n} type`)},z=new Map($(Symbol).filter((e=>typeof Symbol[e]===C)).map((e=>[Symbol[e],e]))),F=e=>{for(const[t,n]of z)if(n===e)return t};function U(){return this}const K="apply",Y="construct",J="defineProperty",q="deleteProperty",G="get",Q="getOwnPropertyDescriptor",V="getPrototypeOf",X="has",Z="isExtensible",ee="ownKeys",te="preventExtensions",ne="set",re="setPrototypeOf",se="delete";var oe=((e,t)=>{const n=t&&new WeakMap;if(t){const{addEventListener:e}=EventTarget.prototype;M(EventTarget.prototype,"addEventListener",{value(t,r,...s){return s.at(0)?.invoke&&(n.has(this)||n.set(this,new Map),n.get(this).set(t,[].concat(s[0].invoke)),delete s[0].invoke),e.call(this,t,r,...s)}})}const r=t&&(e=>{const{currentTarget:t,target:r,type:s}=e;for(const o of n.get(t||r)?.get(s)||[])e[o]()});return(n,s,o,...a)=>{let i=0;const l=new Map,c=new Map,{[o]:u}=n,f=a.length?R(B(globalThis),...a):globalThis,p=I(((e,t)=>{if(!l.has(t)){let e;for(;c.has(e=i++););l.set(t,e),c.set(e,t)}return H(e,l.get(t))})),d=new FinalizationRegistry((e=>{u(se,H(A,e))})),h=([e,n])=>{switch(e){case E:if(null==n)return f;if(typeof n===k)return c.get(n);if(!(n instanceof D))for(const e in n)n[e]=h(n[e]);return n;case x:if(typeof n===A){if(!c.has(n)){const e=function(...e){return t&&e.at(0)instanceof Event&&r(...e),u(K,H(x,n),p(this),e.map(p))},s=new WeakRef(e);c.set(n,s),d.register(e,n,s)}return c.get(n).deref()}return c.get(n);case C:return F(n)}return n},g={[K]:(e,t,n)=>p(e.apply(t,n)),[Y]:(e,t)=>p(new e(...t)),[J]:(e,t,n)=>p(M(e,t,n)),[q]:(e,t)=>p(delete e[t]),[V]:e=>p(P(e)),[G]:(e,t)=>p(e[t]),[Q]:(e,t)=>{const n=N(e,t);return n?H(E,j(n,p)):H(T,n)},[X]:(e,t)=>p(t in e),[Z]:e=>p(S(e)),[ee]:e=>H(E,$(e).map(p)),[te]:e=>p(O(e)),[ne]:(e,t,n)=>p(L(e,t,n)),[re]:(e,t)=>p(W(e,t)),[se](e){l.delete(c.get(e)),c.delete(e)}};return n[s]=(e,t,...n)=>{switch(e){case K:n[0]=h(n[0]),n[1]=n[1].map(h);break;case Y:n[0]=n[0].map(h);break;case J:{const[e,t]=n;n[0]=h(e);const{get:r,set:s,value:o}=t;r&&(t.get=h(r)),s&&(t.set=h(s)),o&&(t.value=h(o));break}default:n=n.map(h)}return g[e](h(t),...n)},{proxy:n,[e.toLowerCase()]:f,[`is${e}Proxy`]:()=>!1}}})("Window",!0),ae=(e=>{let t=0;const n=new Map,r=new Map,s=Symbol(),o=e=>typeof e===x?e():e,a=e=>typeof e===E&&!!e&&s in e,i=Array[_],l=I(((e,a)=>{if(s in a)return o(a[s]);if(e===x){if(!r.has(a)){let e;for(;r.has(e=String(t++)););n.set(a,e),r.set(e,a)}return H(e,n.get(a))}if(!(a instanceof D))for(const e in a)a[e]=l(a[e]);return H(e,a)}));return(t,c,u)=>{const{[c]:f}=t,p=new Map,d=new FinalizationRegistry((e=>{p.delete(e),f(se,l(e))})),h=e=>{const[t,n]=e;if(!p.has(n)){const r=t===x?U.bind(e):e,s=new Proxy(r,w),o=new WeakRef(s);p.set(n,o),d.register(s,n,o)}return p.get(n).deref()},g=e=>{const[t,n]=e;switch(t){case E:return null===n?globalThis:typeof n===k?h(e):n;case x:return typeof n===A?r.get(n):h(e);case C:return F(n)}return n},y=(e,t,...n)=>g(f(e,o(t),...n)),w={[K]:(e,t,n)=>y(K,e,l(t),n.map(l)),[Y]:(e,t)=>y(Y,e,t.map(l)),[J]:(e,t,n)=>{const{get:r,set:s,value:o}=n;return typeof r===x&&(n.get=l(r)),typeof s===x&&(n.set=l(s)),typeof o===x&&(n.value=l(o)),y(J,e,l(t),n)},[q]:(e,t)=>y(q,e,l(t)),[V]:e=>y(V,e),[G]:(e,t)=>t===s?e:y(G,e,l(t)),[Q]:(e,t)=>{const n=y(Q,e,l(t));return n&&j(n,g)},[X]:(e,t)=>t===s||y(X,e,l(t)),[Z]:e=>y(Z,e),[ee]:e=>y(ee,e).map(g),[te]:e=>y(te,e),[ne]:(e,t,n)=>y(ne,e,l(t),l(n)),[re]:(e,t)=>y(re,e,l(t))};t[u]=(e,t,s,o)=>{switch(e){case K:return g(t).apply(g(s),o.map(g));case se:{const e=g(t);n.delete(r.get(e)),r.delete(e)}}};const m=new Proxy([E,null],w),b=m.Array[_];return M(Array,_,{value:e=>a(e)?b(e):i(e)}),{[e.toLowerCase()]:m,[`is${e}Proxy`]:a,proxy:t}}})("Window"),ie="function"==typeof Worker?Worker:class{};const le=new WeakMap,ce=(e,...r)=>{const s=v(e,...r);if(!le.has(s)){const r=e instanceof ie?oe:ae;le.set(s,r(s,t,n))}return le.get(s)};ce.transfer=v.transfer,ce.setInterruptHandler=v.setInterruptHandler;class ue extends WeakMap{set(e,t){return super.set(e,t),t}}
/*! (c) Andrea Giammarchi - ISC */const fe=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,pe=/<([a-z]+[a-z0-9:._-]*)([^>]*?)(\/?)>/g,de=/([^\s\\>"'=]+)\s*=\s*(['"]?)\x01/g,he=/[\x01\x02]/g;var ge=({document:e})=>{const{isArray:t,prototype:n}=Array,{indexOf:r}=n,{createDocumentFragment:s,createElement:o,createElementNS:a,createTextNode:i,createTreeWalker:l,importNode:c}=new Proxy({},{get:(t,n)=>e[n].bind(e)});let u;const f=(e,t)=>t?(e=>{u||(u=a("http://www.w3.org/2000/svg","svg")),u.innerHTML=e;const t=s();return t.append(...u.childNodes),t})(e):(e=>{const t=o("template");return t.innerHTML=e,t.content})(e),p=(t,n)=>111===t.nodeType?1/n<0?n?(({firstChild:t,lastChild:n})=>{const r=e.createRange();return r.setStartAfter(t),r.setEndAfter(n),r.deleteContents(),t})(t):t.lastChild:n?t.valueOf():t.firstChild:t,d=e=>null==e?e:e.valueOf(),h=(e,n)=>{let r,s,o=n.slice(2);return!(n in e)&&(s=n.toLowerCase())in e&&(o=s.slice(2)),n=>{const s=t(n)?n:[n,!1];r!==s[0]&&(r&&e.removeEventListener(o,r,s[1]),(r=s[0])&&e.addEventListener(o,r,s[1]))}},g=({childNodes:e},t)=>e[t],y=(e,t,n)=>((e,t,n,r,s)=>{const o=n.length;let a=t.length,i=o,l=0,c=0,u=null;for(;l<a||c<i;)if(a===l){const t=i<o?c?r(n[c-1],-0).nextSibling:r(n[i-c],0):s;for(;c<i;)e.insertBefore(r(n[c++],1),t)}else if(i===c)for(;l<a;)u&&u.has(t[l])||e.removeChild(r(t[l],-1)),l++;else if(t[l]===n[c])l++,c++;else if(t[a-1]===n[i-1])a--,i--;else if(t[l]===n[i-1]&&n[c]===t[a-1]){const s=r(t[--a],-1).nextSibling;e.insertBefore(r(n[c++],1),r(t[l++],-1).nextSibling),e.insertBefore(r(n[--i],1),s),t[a]=n[i]}else{if(!u){u=new Map;let e=c;for(;e<i;)u.set(n[e],e++)}if(u.has(t[l])){const s=u.get(t[l]);if(c<s&&s<i){let o=l,f=1;for(;++o<a&&o<i&&u.get(t[o])===s+f;)f++;if(f>s-c){const o=r(t[l],0);for(;c<s;)e.insertBefore(r(n[c++],1),o)}else e.replaceChild(r(n[c++],1),r(t[l++],-1))}else l++}else e.removeChild(r(t[l++],-1))}return n})(e.parentNode,t,n,p,e),w=(t,n)=>{switch(n[0]){case"?":return((e,t,n)=>r=>{const s=!!d(r);n!==s&&((n=s)?e.setAttribute(t,""):e.removeAttribute(t))})(t,n.slice(1),!1);case".":return((e,t)=>"dataset"===t?(({dataset:e})=>t=>{for(const n in t){const r=t[n];null==r?delete e[n]:e[n]=r}})(e):n=>{e[t]=n})(t,n.slice(1));case"@":return h(t,"on"+n.slice(1));case"o":if("n"===n[1])return h(t,n)}switch(n){case"ref":return(e=>{let t;return n=>{t!==n&&(t=n,"function"==typeof n?n(e):n.current=e)}})(t);case"aria":return(e=>t=>{for(const n in t){const r="role"===n?n:`aria-${n}`,s=t[n];null==s?e.removeAttribute(r):e.setAttribute(r,s)}})(t)}return((t,n)=>{let r,s=!0;const o=e.createAttributeNS(null,n);return e=>{const n=d(e);r!==n&&(null==(r=n)?s||(t.removeAttributeNode(o),s=!0):(o.value=n,s&&(t.setAttributeNodeNS(o),s=!1)))}})(t,n)};function m(e){const{type:n,path:r}=e,s=r.reduceRight(g,this);return"node"===n?(e=>{let n,r,s=[];const o=a=>{switch(typeof a){case"string":case"number":case"boolean":n!==a&&(n=a,r||(r=i("")),r.data=a,s=y(e,s,[r]));break;case"object":case"undefined":if(null==a){n!=a&&(n=a,s=y(e,s,[]));break}if(t(a)){n=a,0===a.length?s=y(e,s,[]):"object"==typeof a[0]?s=y(e,s,a):o(String(a));break}if(n!==a)if("ELEMENT_NODE"in a)n=a,s=y(e,s,11===a.nodeType?[...a.childNodes]:[a]);else{const e=a.valueOf();e!==a&&o(e)}break;case"function":o(a(e))}};return o})(s):"attr"===n?w(s,e.name):(e=>{let t;return n=>{const r=d(n);t!=r&&(t=r,e.textContent=null==r?"":r)}})(s)}const b=e=>{const t=[];let{parentNode:n}=e;for(;n;)t.push(r.call(n.childNodes,e)),e=n,({parentNode:n}=e);return t},v="isµ",E=new ue,x=/^(?:textarea|script|style|title|plaintext|xmp)$/,k=(e,t)=>{const n="svg"===e,r=((e,t,n)=>{let r=0;return e.join("").trim().replace(pe,((e,t,r,s)=>{let o=t+r.replace(de,"=$2$1").trimEnd();return s.length&&(o+=n||fe.test(t)?" /":"></"+t),"<"+o+">"})).replace(he,(e=>""===e?"\x3c!--"+t+r+++"--\x3e":t+r++))})(t,v,n),s=f(r,n),o=l(s,129),a=[],i=t.length-1;let c=0,u=`${v}${c}`;for(;c<i;){const e=o.nextNode();if(!e)throw`bad template: ${r}`;if(8===e.nodeType)e.data===u&&(a.push({type:"node",path:b(e)}),u=`${v}${++c}`);else{for(;e.hasAttribute(u);)a.push({type:"attr",path:b(e),name:e.getAttribute(u)}),e.removeAttribute(u),u=`${v}${++c}`;x.test(e.localName)&&e.textContent.trim()===`\x3c!--${u}--\x3e`&&(e.textContent="",a.push({type:"text",path:b(e)}),u=`${v}${++c}`)}}return{content:s,nodes:a}},A=(e,t)=>{const{content:n,nodes:r}=E.get(t)||E.set(t,k(e,t)),s=c(n,!0);return{content:s,updates:r.map(m,s)}},T=(e,{type:t,template:n,values:r})=>{const s=C(e,r);let{entry:o}=e;o&&o.template===n&&o.type===t||(e.entry=o=((e,t)=>{const{content:n,updates:r}=A(e,t);return{type:e,template:t,content:n,updates:r,wire:null}})(t,n));const{content:a,updates:i,wire:l}=o;for(let e=0;e<s;e++)i[e](r[e]);return l||(o.wire=(e=>{const{firstChild:t,lastChild:n}=e;if(t===n)return n||e;const{childNodes:r}=e,s=[...r];return{ELEMENT_NODE:1,nodeType:111,firstChild:t,lastChild:n,valueOf:()=>(r.length!==s.length&&e.append(...s),e)}})(a))},C=({stack:e},n)=>{const{length:r}=n;for(let s=0;s<r;s++){const r=n[s];r instanceof M?n[s]=T(e[s]||(e[s]={stack:[],entry:null,wire:null}),r):t(r)?C(e[s]||(e[s]={stack:[],entry:null,wire:null}),r):e[s]=null}return r<e.length&&e.splice(r),r};class M{constructor(e,t,n){this.type=e,this.template=t,this.values=n}}const N=e=>{const t=new ue;return Object.assign(((t,...n)=>new M(e,t,n)),{for(n,r){const s=t.get(n)||t.set(n,new MapSet);return s.get(r)||s.set(r,(t=>(n,...r)=>T(t,{type:e,template:n,values:r}))({stack:[],entry:null,wire:null}))},node:(t,...n)=>T({stack:[],entry:null,wire:null},new M(e,t,n)).valueOf()})},P=new ue,S=N("html"),$=N("svg");return{Hole:M,render:(e,t)=>{const n="function"==typeof t?t():t,r=P.get(e)||P.set(e,{stack:[],entry:null,wire:null}),s=n instanceof M?T(r,n):n;return s!==r.wire&&(r.wire=s,e.replaceChildren(s.valueOf())),e},html:S,svg:$}};const ye=(e,...t)=>{const n=ce(e,...t);return n.uhtml||(n.uhtml=ge(n.window)),n};ye.transfer=ce.transfer;export{ye as default};
