import{aK as a,z as l,a2 as d,aL as m,j as s}from"./index.2818b27f.js";function c(t,e){function r(...n){t(()=>e.apply(this,n),{fn:e,thisArg:this,args:n})}return r}function p(t){let e;return n=>{const u=s(t);if(e&&clearTimeout(e),u<=0)return n();e=setTimeout(n,u)}}function T(t,e=!0){let r=0,n;const u=()=>{n&&(clearTimeout(n),n=void 0)};return i=>{const o=s(t),f=Date.now()-r;if(u(),o<=0)return r=Date.now(),i();f>o?(r=Date.now(),i()):e&&(n=setTimeout(()=>{u(),i()},o))}}function w(t,e=!0){a()?l(t):e?t():d(t)}function D(t){a()&&m(t)}function b(t,e=200){return c(p(e),t)}function x(t,e=200,r=!0){return c(T(e,r),t)}export{D as a,x as b,w as t,b as u};
