var e="417f77a3-3f54-4e3f-95fa-50ee1cb1635d",t=e=>({value:new Promise((t=>{let n=new Worker("data:application/javascript,"+encodeURIComponent("onmessage=({data:b})=>(Atomics.wait(b,0),postMessage(0))"));n.onmessage=t,n.postMessage(e)}))})
/*! (c) Andrea Giammarchi - ISC */;const{Int32Array:n,Map:r,SharedArrayBuffer:s,Uint16Array:a}=globalThis,{BYTES_PER_ELEMENT:o}=n,{BYTES_PER_ELEMENT:l}=a,{isArray:i}=Array,{notify:c,wait:u,waitAsync:f}=Atomics,{fromCharCode:p}=String,d=(e,n)=>e?(f||t)(n,0):(u(n,0),{value:{then:e=>e()}}),g=new WeakSet,h=new WeakMap;let y=0;const w=(t,{parse:u,stringify:f}=JSON)=>{if(!h.has(t)){const w=(n,...r)=>t.postMessage({[e]:r},{transfer:n});h.set(t,new Proxy(new r,{get:(e,r)=>"then"===r?null:(...e)=>{const i=y++;let c=new n(new s(o)),f=[];g.has(e.at(-1)||f)&&g.delete(f=e.pop()),w(f,i,c,r,e);const h=t instanceof Worker;return d(h,c).value.then((()=>{const e=c[0];if(!e)return;const t=l*e;return c=new n(new s(t+t%o)),w([],i,c),d(h,c).value.then((()=>u(p(...new a(c.buffer).slice(0,e)))))}))},set(n,s,o){if(!n.size){const s=new r;t.addEventListener("message",(async t=>{const r=t.data?.[e];if(i(r)){t.stopImmediatePropagation();const[e,o,...l]=r;if(l.length){const[t,r]=l;if(!n.has(t))throw new Error(`Unsupported action: ${t}`);{const a=f(await n.get(t)(...r));a&&(s.set(e,a),o[0]=a.length)}}else{const t=s.get(e);s.delete(e);for(let e=new a(o.buffer),n=0;n<t.length;n++)e[n]=t.charCodeAt(n)}c(o,0)}}))}return!!n.set(s,o)}}))}return h.get(t)};w.transfer=(...e)=>(g.add(e),e);const m="object",b="function",v="number",E="string",k="undefined",x="symbol",{defineProperty:M,getOwnPropertyDescriptor:N,getPrototypeOf:A,isExtensible:C,ownKeys:S,preventExtensions:T,set:O,setPrototypeOf:P}=Reflect,$=(e,t)=>{const{get:n,set:r,value:s}=e;return n&&(e.get=t(n)),r&&(e.set=t(r)),s&&(e.value=t(s)),e},L=(e,t)=>[e,t],W=e=>t=>{const n=typeof t;switch(n){case m:if(null==t)return L("null",t);case b:return e(n,t);case"boolean":case v:case E:case k:case"bigint":return L(n,t);case x:if(R.has(t))return L(n,R.get(t))}throw new Error(`Unable to handle this ${n} type`)},R=new Map(S(Symbol).filter((e=>typeof Symbol[e]===x)).map((e=>[Symbol[e],e]))),B=e=>{for(const[t,n]of R)if(n===e)return t},_="apply",j="construct",z="defineProperty",D="deleteProperty",U="get",F="getOwnPropertyDescriptor",H="getPrototypeOf",I="has",K="isExtensible",Y="ownKeys",G="preventExtensions",J="set",q="setPrototypeOf",Q="delete";let V=0;const X=new Map,Z=new Map,ee=new WeakMap,{addEventListener:te}=EventTarget.prototype;M(EventTarget.prototype,"addEventListener",{value(e,t,...n){return n.at(0)?.invoke&&(ee.has(this)||ee.set(this,new Map),ee.get(this).set(e,[].concat(n[0].invoke)),delete n[0].invoke),te.call(this,e,t,...n)}});const ne=W(((e,t)=>{if(!X.has(t)){let e;for(;Z.has(e=V++););X.set(t,e),Z.set(e,t)}return L(e,X.get(t))}));var re=(e,t,n)=>{const{[n]:r}=e,s=new FinalizationRegistry((e=>{r(Q,L(E,e))})),a=([e,t])=>{switch(e){case m:return null==t?globalThis:typeof t===v?Z.get(t):t;case b:if(typeof t===E){if(!Z.has(t)){const e=function(...e){return e.at(0)instanceof Event&&(e=>{const{currentTarget:t,target:n,type:r}=e;for(const s of ee.get(t||n)?.get(r)||[])e[s]()})(...e),r(_,L(b,t),ne(this),e.map(ne))},n=new WeakRef(e);Z.set(t,n),s.register(e,t,n)}return Z.get(t).deref()}return Z.get(t);case x:return B(t)}return t},o={[_]:(e,t,n)=>ne(e.apply(t,n)),[j]:(e,t)=>ne(new e(...t)),[z]:(e,t,n)=>ne(M(e,t,n)),[D]:(e,t)=>ne(delete e[t]),[H]:e=>ne(A(e)),[U]:(e,t)=>ne(e[t]),[F]:(e,t)=>{const n=N(e,t);return n?L(m,$(n,ne)):L(k,n)},[I]:(e,t)=>ne(t in e),[K]:e=>ne(C(e)),[Y]:e=>L(m,S(e).map(ne)),[G]:e=>ne(T(e)),[J]:(e,t,n)=>ne(O(e,t,n)),[q]:(e,t)=>ne(P(e,t)),[Q](e){X.delete(Z.get(e)),Z.delete(e)}};return e[t]=(e,t,...n)=>{switch(e){case _:n[0]=a(n[0]),n[1]=n[1].map(a);break;case j:n[0]=n[0].map(a);break;case z:{const[e,t]=n;n[0]=a(e);const{get:r,set:s,value:o}=t;r&&(t.get=a(r)),s&&(t.set=a(s)),o&&(t.value=a(o));break}default:n=n.map(a)}return o[e](a(t),...n)},e};const se=e=>typeof e===b?e():e,ae=W(((e,t)=>{if(oe in t)return se(t[oe]);if(e===b){if(!ce.has(t)){let e;for(;ce.has(e=String(le++)););ie.set(t,e),ce.set(e,t)}return L(e,ie.get(t))}return L(e,t)})),oe=Symbol();let le=0;const ie=new Map,ce=new Map;var ue=(e,t,n)=>{const{[t]:r}=e,s=new Map,a=new FinalizationRegistry((e=>{s.delete(e),r(Q,ae(e))})),o=e=>{const[t,n]=e;if(!s.has(n)){const r=t===b?fe.bind(e):e,o=new Proxy(r,c),l=new WeakRef(o);s.set(n,l),a.register(o,n,l)}return s.get(n).deref()},l=e=>{const[t,n]=e;switch(t){case m:return typeof n===v?o(e):n;case b:return typeof n===E?ce.get(n):o(e);case x:return B(n)}return n},i=(e,t,...n)=>l(r(e,se(t),...n)),c={[_]:(e,t,n)=>i(_,e,ae(t),n.map(ae)),[j]:(e,t)=>i(j,e,t.map(ae)),[z]:(e,t,n)=>{const{get:r,set:s,value:a}=n;return typeof r===b&&(n.get=ae(r)),typeof s===b&&(n.set=ae(s)),typeof a===b&&(n.value=ae(a)),i(z,e,ae(t),n)},[D]:(e,t)=>i(D,e,ae(t)),[H]:e=>i(H,e),[U]:(e,t)=>t===oe?e:i(U,e,ae(t)),[F]:(e,t)=>{const n=i(F,e,ae(t));return n&&$(n,l)},[I]:(e,t)=>t===oe||i(I,e,ae(t)),[K]:e=>i(K,e),[Y]:e=>i(Y,e).map(l),[G]:e=>i(G,e),[J]:(e,t,n)=>i(J,e,ae(t),ae(n)),[q]:(e,t)=>i(q,e,ae(t))};return e[n]=(e,t,n,r)=>{switch(e){case _:return l(t).apply(l(n),r.map(l));case Q:{const e=l(t);ie.delete(ce.get(e)),ce.delete(e)}}},{proxy:e,global:new Proxy([m,null],c),isGlobal:e=>typeof e===m&&!!e&&oe in e}};function fe(){return this}const pe=e+"M",de=e+"T",ge=new WeakMap,he=(e,...t)=>{const n=w(e,...t);if(!ge.has(n)){const t=e instanceof Worker?re:ue;ge.set(n,t(n,pe,de))}return ge.get(n)};he.transfer=w.transfer;class ye extends WeakMap{set(e,t){return super.set(e,t),t}}
/*! (c) Andrea Giammarchi - ISC */const we=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,me=/<([a-z]+[a-z0-9:._-]*)([^>]*?)(\/?)>/g,be=/([^\s\\>"'=]+)\s*=\s*(['"]?)\x01/g,ve=/[\x01\x02]/g;var Ee=({document:e})=>{const{isArray:t,prototype:n}=Array,{indexOf:r}=n,{createDocumentFragment:s,createElement:a,createElementNS:o,createTextNode:l,createTreeWalker:i,importNode:c}=new Proxy({},{get:(t,n)=>e[n].bind(e)});let u;const f=(e,t)=>t?(e=>{u||(u=o("http://www.w3.org/2000/svg","svg")),u.innerHTML=e;const t=s();return t.append(...u.childNodes),t})(e):(e=>{const t=a("template");return t.innerHTML=e,t.content})(e),p=(t,n)=>111===t.nodeType?1/n<0?n?(({firstChild:t,lastChild:n})=>{const r=e.createRange();return r.setStartAfter(t),r.setEndAfter(n),r.deleteContents(),t})(t):t.lastChild:n?t.valueOf():t.firstChild:t,d=e=>null==e?e:e.valueOf(),g=(e,n)=>{let r,s,a=n.slice(2);return!(n in e)&&(s=n.toLowerCase())in e&&(a=s.slice(2)),n=>{const s=t(n)?n:[n,!1];r!==s[0]&&(r&&e.removeEventListener(a,r,s[1]),(r=s[0])&&e.addEventListener(a,r,s[1]))}},h=({childNodes:e},t)=>e[t],y=(e,t,n)=>((e,t,n,r,s)=>{const a=n.length;let o=t.length,l=a,i=0,c=0,u=null;for(;i<o||c<l;)if(o===i){const t=l<a?c?r(n[c-1],-0).nextSibling:r(n[l-c],0):s;for(;c<l;)e.insertBefore(r(n[c++],1),t)}else if(l===c)for(;i<o;)u&&u.has(t[i])||e.removeChild(r(t[i],-1)),i++;else if(t[i]===n[c])i++,c++;else if(t[o-1]===n[l-1])o--,l--;else if(t[i]===n[l-1]&&n[c]===t[o-1]){const s=r(t[--o],-1).nextSibling;e.insertBefore(r(n[c++],1),r(t[i++],-1).nextSibling),e.insertBefore(r(n[--l],1),s),t[o]=n[l]}else{if(!u){u=new Map;let e=c;for(;e<l;)u.set(n[e],e++)}if(u.has(t[i])){const s=u.get(t[i]);if(c<s&&s<l){let a=i,f=1;for(;++a<o&&a<l&&u.get(t[a])===s+f;)f++;if(f>s-c){const a=r(t[i],0);for(;c<s;)e.insertBefore(r(n[c++],1),a)}else e.replaceChild(r(n[c++],1),r(t[i++],-1))}else i++}else e.removeChild(r(t[i++],-1))}return n})(e.parentNode,t,n,p,e),w=(t,n)=>{switch(n[0]){case"?":return((e,t,n)=>r=>{const s=!!d(r);n!==s&&((n=s)?e.setAttribute(t,""):e.removeAttribute(t))})(t,n.slice(1),!1);case".":return((e,t)=>"dataset"===t?(({dataset:e})=>t=>{for(const n in t){const r=t[n];null==r?delete e[n]:e[n]=r}})(e):n=>{e[t]=n})(t,n.slice(1));case"@":return g(t,"on"+n.slice(1));case"o":if("n"===n[1])return g(t,n)}switch(n){case"ref":return(e=>{let t;return n=>{t!==n&&(t=n,"function"==typeof n?n(e):n.current=e)}})(t);case"aria":return(e=>t=>{for(const n in t){const r="role"===n?n:`aria-${n}`,s=t[n];null==s?e.removeAttribute(r):e.setAttribute(r,s)}})(t)}return((t,n)=>{let r,s=!0;const a=e.createAttributeNS(null,n);return e=>{const n=d(e);r!==n&&(null==(r=n)?s||(t.removeAttributeNode(a),s=!0):(a.value=n,s&&(t.setAttributeNodeNS(a),s=!1)))}})(t,n)};function m(e){const{type:n,path:r}=e,s=r.reduceRight(h,this);return"node"===n?(e=>{let n,r,s=[];const a=o=>{switch(typeof o){case"string":case"number":case"boolean":n!==o&&(n=o,r||(r=l("")),r.data=o,s=y(e,s,[r]));break;case"object":case"undefined":if(null==o){n!=o&&(n=o,s=y(e,s,[]));break}if(t(o)){n=o,0===o.length?s=y(e,s,[]):"object"==typeof o[0]?s=y(e,s,o):a(String(o));break}if(n!==o)if("ELEMENT_NODE"in o)n=o,s=y(e,s,11===o.nodeType?[...o.childNodes]:[o]);else{const e=o.valueOf();e!==o&&a(e)}break;case"function":a(o(e))}};return a})(s):"attr"===n?w(s,e.name):(e=>{let t;return n=>{const r=d(n);t!=r&&(t=r,e.textContent=null==r?"":r)}})(s)}const b=e=>{const t=[];let{parentNode:n}=e;for(;n;)t.push(r.call(n.childNodes,e)),e=n,({parentNode:n}=e);return t},v="isµ",E=new ye,k=/^(?:textarea|script|style|title|plaintext|xmp)$/,x=(e,t)=>{const n="svg"===e,r=((e,t,n)=>{let r=0;return e.join("").trim().replace(me,((e,t,r,s)=>{let a=t+r.replace(be,"=$2$1").trimEnd();return s.length&&(a+=n||we.test(t)?" /":"></"+t),"<"+a+">"})).replace(ve,(e=>""===e?"\x3c!--"+t+r+++"--\x3e":t+r++))})(t,v,n),s=f(r,n),a=i(s,129),o=[],l=t.length-1;let c=0,u=`${v}${c}`;for(;c<l;){const e=a.nextNode();if(!e)throw`bad template: ${r}`;if(8===e.nodeType)e.data===u&&(o.push({type:"node",path:b(e)}),u=`${v}${++c}`);else{for(;e.hasAttribute(u);)o.push({type:"attr",path:b(e),name:e.getAttribute(u)}),e.removeAttribute(u),u=`${v}${++c}`;k.test(e.localName)&&e.textContent.trim()===`\x3c!--${u}--\x3e`&&(e.textContent="",o.push({type:"text",path:b(e)}),u=`${v}${++c}`)}}return{content:s,nodes:o}},M=(e,t)=>{const{content:n,nodes:r}=E.get(t)||E.set(t,x(e,t)),s=c(n,!0);return{content:s,updates:r.map(m,s)}},N=(e,{type:t,template:n,values:r})=>{const s=A(e,r);let{entry:a}=e;a&&a.template===n&&a.type===t||(e.entry=a=((e,t)=>{const{content:n,updates:r}=M(e,t);return{type:e,template:t,content:n,updates:r,wire:null}})(t,n));const{content:o,updates:l,wire:i}=a;for(let e=0;e<s;e++)l[e](r[e]);return i||(a.wire=(e=>{const{firstChild:t,lastChild:n}=e;if(t===n)return n||e;const{childNodes:r}=e,s=[...r];return{ELEMENT_NODE:1,nodeType:111,firstChild:t,lastChild:n,valueOf:()=>(r.length!==s.length&&e.append(...s),e)}})(o))},A=({stack:e},n)=>{const{length:r}=n;for(let s=0;s<r;s++){const r=n[s];r instanceof C?n[s]=N(e[s]||(e[s]={stack:[],entry:null,wire:null}),r):t(r)?A(e[s]||(e[s]={stack:[],entry:null,wire:null}),r):e[s]=null}return r<e.length&&e.splice(r),r};class C{constructor(e,t,n){this.type=e,this.template=t,this.values=n}}const S=e=>{const t=new ye;return Object.assign(((t,...n)=>new C(e,t,n)),{for(n,r){const s=t.get(n)||t.set(n,new MapSet);return s.get(r)||s.set(r,(t=>(n,...r)=>N(t,{type:e,template:n,values:r}))({stack:[],entry:null,wire:null}))},node:(t,...n)=>N({stack:[],entry:null,wire:null},new C(e,t,n)).valueOf()})},T=new ye,O=S("html"),P=S("svg");return{Hole:C,render:(e,t)=>{const n="function"==typeof t?t():t,r=T.get(e)||T.set(e,{stack:[],entry:null,wire:null}),s=n instanceof C?N(r,n):n;return s!==r.wire&&(r.wire=s,e.replaceChildren(s.valueOf())),e},html:O,svg:P}};const ke=(e,...t)=>{const n=he(e,...t);return e instanceof Worker||(n.uhtml=Ee(n.global)),n};ke.transfer=he.transfer;export{ke as default};
