const e="object"==typeof self?self:globalThis,t=t=>((t,n)=>{const r=(e,n)=>(t.set(n,e),e),s=a=>{if(t.has(a))return t.get(a);const[o,c]=n[a];switch(o){case 0:case-1:return r(c,a);case 1:{const e=r([],a);for(const t of c)e.push(s(t));return e}case 2:{const e=r({},a);for(const[t,n]of c)e[s(t)]=s(n);return e}case 3:return r(new Date(c),a);case 4:{const{source:e,flags:t}=c;return r(new RegExp(e,t),a)}case 5:{const e=r(new Map,a);for(const[t,n]of c)e.set(s(t),s(n));return e}case 6:{const e=r(new Set,a);for(const t of c)e.add(s(t));return e}case 7:{const{name:t,message:n}=c;return r(new e[t](n),a)}case 8:return r(BigInt(c),a);case"BigInt":return r(Object(BigInt(c)),a)}return r(new e[o](c),a)};return s})(new Map,t)(0),n="",{toString:r}={},{keys:s}=Object,a=e=>{const t=typeof e;if("object"!==t||!e)return[0,t];const s=r.call(e).slice(8,-1);switch(s){case"Array":return[1,n];case"Object":return[2,n];case"Date":return[3,n];case"RegExp":return[4,n];case"Map":return[5,n];case"Set":return[6,n]}return s.includes("Array")?[1,s]:s.includes("Error")?[7,s]:[2,s]},o=([e,t])=>0===e&&("function"===t||"symbol"===t),c=(e,{json:t,lossy:n}={})=>{const r=[];return((e,t,n,r)=>{const c=(e,t)=>{const s=r.push(e)-1;return n.set(t,s),s},u=r=>{if(n.has(r))return n.get(r);let[i,f]=a(r);switch(i){case 0:{let t=r;switch(f){case"bigint":i=8,t=r.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+f);t=null;break;case"undefined":return c([-1],r)}return c([i,t],r)}case 1:{if(f)return c([f,[...r]],r);const e=[],t=c([i,e],r);for(const t of r)e.push(u(t));return t}case 2:{if(f)switch(f){case"BigInt":return c([f,r.toString()],r);case"Boolean":case"Number":case"String":return c([f,r.valueOf()],r)}if(t&&"toJSON"in r)return u(r.toJSON());const n=[],l=c([i,n],r);for(const t of s(r))!e&&o(a(r[t]))||n.push([u(t),u(r[t])]);return l}case 3:return c([i,r.toISOString()],r);case 4:{const{source:e,flags:t}=r;return c([i,{source:e,flags:t}],r)}case 5:{const t=[],n=c([i,t],r);for(const[n,s]of r)(e||!o(a(n))&&!o(a(s)))&&t.push([u(n),u(s)]);return n}case 6:{const t=[],n=c([i,t],r);for(const n of r)!e&&o(a(n))||t.push(u(n));return n}}const{message:l}=r;return c([i,{name:f,message:l}],r)};return u})(!(t||n),!!t,new Map,r)(e),r},{parse:u,stringify:i}=JSON,f={json:!0,lossy:!0};var l=Object.freeze({__proto__:null,parse:e=>t(u(e)),stringify:e=>i(c(e,f))}),g="2f6fe6d4-8ba8-424a-83c5-8fadca1ea103",p=e=>({value:new Promise((t=>{let n=new Worker("data:application/javascript,"+encodeURIComponent("onmessage=({data:b})=>(Atomics.wait(b,0),postMessage(0))"));n.onmessage=t,n.postMessage(e)}))})
/*! (c) Andrea Giammarchi - ISC */;const{Int32Array:w,Map:h,SharedArrayBuffer:d,Uint16Array:y}=globalThis,{BYTES_PER_ELEMENT:b}=w,{BYTES_PER_ELEMENT:m}=y,{isArray:S}=Array,{notify:E,wait:A,waitAsync:M}=Atomics,{fromCharCode:O}=String,j=(e,t)=>e?(M||p)(t,0):(A(t,0),{value:{then:e=>e()}}),_=new WeakSet,v=new WeakMap;let B=0;const I=(e,{parse:t,stringify:n}=JSON)=>{if(!v.has(e)){const r=(t,...n)=>e.postMessage({[g]:n},{transfer:t});v.set(e,new Proxy(new h,{has:(e,t)=>"string"==typeof t&&!t.startsWith("_"),get:(n,s)=>"then"===s?null:(...n)=>{const a=B++;let o=new w(new d(b)),c=[];_.has(n.at(-1)||c)&&_.delete(c=n.pop()),r(c,a,o,s,n);const u=e instanceof Worker;return j(u,o).value.then((()=>{const e=o[0];if(!e)return;const n=m*e;return o=new w(new d(n+n%b)),r([],a,o),j(u,o).value.then((()=>t(O(...new y(o.buffer).slice(0,e)))))}))},set(t,r,s){if(!t.size){const r=new h;e.addEventListener("message",(async e=>{const s=e.data?.[g];if(S(s)){e.stopImmediatePropagation();const[a,o,...c]=s;if(c.length){const[e,s]=c;if(!t.has(e))throw new Error(`Unsupported action: ${e}`);{const c=n(await t.get(e)(...s));c&&(r.set(a,c),o[0]=c.length)}}else{const e=r.get(a);r.delete(a);for(let t=new y(o.buffer),n=0;n<e.length;n++)t[n]=e.charCodeAt(n)}E(o,0)}}))}return!!t.set(r,s)}}))}return v.get(e)},k=e=>I(e,l);k.transfer=I.transfer=(...e)=>(_.add(e),e);export{k as default};
