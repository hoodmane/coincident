const e="object"==typeof self?self:globalThis,t=t=>((t,r)=>{const n=(e,r)=>(t.set(r,e),e),s=o=>{if(t.has(o))return t.get(o);const[a,c]=r[o];switch(a){case 0:case-1:return n(c,o);case 1:{const e=n([],o);for(const t of c)e.push(s(t));return e}case 2:{const e=n({},o);for(const[t,r]of c)e[s(t)]=s(r);return e}case 3:return n(new Date(c),o);case 4:{const{source:e,flags:t}=c;return n(new RegExp(e,t),o)}case 5:{const e=n(new Map,o);for(const[t,r]of c)e.set(s(t),s(r));return e}case 6:{const e=n(new Set,o);for(const t of c)e.add(s(t));return e}case 7:{const{name:t,message:r}=c;return n(new e[t](r),o)}case 8:return n(BigInt(c),o);case"BigInt":return n(Object(BigInt(c)),o)}return n(new e[a](c),o)};return s})(new Map,t)(0),r="",{toString:n}={},{keys:s}=Object,o=e=>{const t=typeof e;if("object"!==t||!e)return[0,t];const s=n.call(e).slice(8,-1);switch(s){case"Array":return[1,r];case"Object":return[2,r];case"Date":return[3,r];case"RegExp":return[4,r];case"Map":return[5,r];case"Set":return[6,r]}return s.includes("Array")?[1,s]:s.includes("Error")?[7,s]:[2,s]},a=([e,t])=>0===e&&("function"===t||"symbol"===t),c=(e,{json:t,lossy:r}={})=>{const n=[];return((e,t,r,n)=>{const c=(e,t)=>{const s=n.push(e)-1;return r.set(t,s),s},u=n=>{if(r.has(n))return r.get(n);let[f,i]=o(n);switch(f){case 0:{let t=n;switch(i){case"bigint":f=8,t=n.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+i);t=null;break;case"undefined":return c([-1],n)}return c([f,t],n)}case 1:{if(i)return c([i,[...n]],n);const e=[],t=c([f,e],n);for(const t of n)e.push(u(t));return t}case 2:{if(i)switch(i){case"BigInt":return c([i,n.toString()],n);case"Boolean":case"Number":case"String":return c([i,n.valueOf()],n)}if(t&&"toJSON"in n)return u(n.toJSON());const r=[],l=c([f,r],n);for(const t of s(n))!e&&a(o(n[t]))||r.push([u(t),u(n[t])]);return l}case 3:return c([f,n.toISOString()],n);case 4:{const{source:e,flags:t}=n;return c([f,{source:e,flags:t}],n)}case 5:{const t=[],r=c([f,t],n);for(const[r,s]of n)(e||!a(o(r))&&!a(o(s)))&&t.push([u(r),u(s)]);return r}case 6:{const t=[],r=c([f,t],n);for(const r of n)!e&&a(o(r))||t.push(u(r));return r}}const{message:l}=n;return c([f,{name:i,message:l}],n)};return u})(!(t||r),!!t,new Map,n)(e),n},{parse:u,stringify:f}=JSON,i={json:!0,lossy:!0};var l=Object.freeze({__proto__:null,parse:e=>t(u(e)),stringify:e=>f(c(e,i))});
/*! (c) Andrea Giammarchi - ISC */const g="d1a65bf9-0d02-44be-99ff-a7259eb03f16",{Atomics:w,Int32Array:h,Map:p,SharedArrayBuffer:y,Uint16Array:d}=globalThis,{BYTES_PER_ELEMENT:b}=h,{BYTES_PER_ELEMENT:S}=d,{from:E,isArray:m}=Array,{notify:O,wait:A}=w,{fromCharCode:M}=String,j=new WeakSet,B=new WeakMap;let _=0;const N=(e,{parse:t,stringify:r}=JSON)=>{if(!B.has(e)){const n=(t,...r)=>e.postMessage({[g]:r},{transfer:t});B.set(e,new Proxy(new p,{get:(e,r)=>"then"===r?null:(...e)=>{const s=_++;let o=new y(b);const a=new h(o);let c=[];j.has(e.at(-1)||c)&&j.delete(c=e.pop()),n(c,s,o,r,e),A(a,0);const u=a[0],f=S*u;return o=new y(f+f%b),n([],s,o),A(new h(o),0),t(M(...new d(o).slice(0,u)))},set(t,n,s){if(!t.size){const n=new p;e.addEventListener("message",(async({data:e})=>{const s=e?.[g];if(m(s)){const[e,o,...a]=s,c=new h(o);if(a.length){const[s,o]=a;if(!t.has(s))throw new Error(`Unsupported action: ${s}`);{const a=r(await t.get(s)(...o));n.set(e,a),c[0]=a.length}}else{const t=n.get(e);n.delete(e);for(let e=new d(o),r=0;r<t.length;r++)e[r]=t.charCodeAt(r)}O(c,0)}}))}return!!t.set(n,s)}}))}return B.get(e)},T=e=>N(e,l);T.transfer=N.transfer=(...e)=>(j.add(e),e);export{T as default};
