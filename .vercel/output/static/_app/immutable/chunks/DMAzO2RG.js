import{R as B,S as M,T as N,V as U,W as g,L as C,X as G,g as s,f as h,Y as K,b as A,Z as V,_ as T,a0 as Z,a1 as $,a2 as z,a3 as W,a4 as X,a5 as j,a6 as F,a7 as L}from"./Bno5QJkD.js";let o=!1;function H(e){var r=o;try{return o=!1,[e(),o]}finally{o=r}}const J={get(e,r){if(!e.exclude.includes(r))return s(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,a){return r in e.special||(e.special[r]=Q({get[r](){return e.props[r]}},r,T)),e.special[r](a),L(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),L(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function k(e,r){return new Proxy({props:e,exclude:r,special:{},version:F(0)},J)}function D(e){var r;return((r=e.ctx)==null?void 0:r.d)??!1}function Q(e,r,a,d){var O;var I=(a&j)!==0,c=!C||(a&G)!==0,v=(a&K)!==0,w=(a&X)!==0,R=!1,l;v?[l,R]=H(()=>e[r]):l=e[r];var Y=U in e||g in e,_=v&&(((O=B(e,r))==null?void 0:O.set)??(Y&&r in e&&(n=>e[r]=n)))||void 0,i=d,p=!0,P=!1,m=()=>(P=!0,p&&(p=!1,w?i=A(d):i=d),i);l===void 0&&d!==void 0&&(_&&c&&V(),l=m(),_&&_(l));var t;if(c)t=()=>{var n=e[r];return n===void 0?m():(p=!0,P=!1,n)};else{var E=(I?h:N)(()=>e[r]);E.f|=M,t=()=>{var n=s(E);return n!==void 0&&(i=void 0),n===void 0?i:n}}if((a&T)===0)return t;if(_){var q=e.$$legacy;return function(n,f){return arguments.length>0?((!c||!f||q||R)&&_(f?t():n),n):t()}}var S=!1,b=W(l),u=h(()=>{var n=t(),f=s(b);return S?(S=!1,f):b.v=n});return v&&s(u),I||(u.equals=Z),function(n,f){if(arguments.length>0){const x=f?s(u):c&&v?$(n):n;if(!u.equals(x)){if(S=!0,z(b,x),P&&i!==void 0&&(i=x),D(u))return n;A(()=>s(u))}return n}return D(u)?u.v:s(u)}}export{k as l,Q as p};
