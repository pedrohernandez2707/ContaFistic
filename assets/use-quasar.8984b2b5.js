import{r as y,a7 as z,d as f,m as w,o as h,C as O,J as b,h as T,k as E,a8 as g,i as L,a9 as k}from"./index.636087c0.js";function C(){const t=y(!z.value);return t.value===!1&&f(()=>{t.value=!0}),{isHydrated:t}}const p=typeof ResizeObserver!="undefined",m=p===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var x=w({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(t,{emit:e}){let r=null,n,s={width:-1,height:-1};function u(i){i===!0||t.debounce===0||t.debounce==="0"?a():r===null&&(r=setTimeout(a,t.debounce))}function a(){if(r!==null&&(clearTimeout(r),r=null),n){const{offsetWidth:i,offsetHeight:o}=n;(i!==s.width||o!==s.height)&&(s={width:i,height:o},e("resize",s))}}const{proxy:d}=E();if(d.trigger=u,p===!0){let i;const o=l=>{n=d.$el.parentNode,n?(i=new ResizeObserver(u),i.observe(n),a()):l!==!0&&b(()=>{o(!0)})};return f(()=>{o()}),h(()=>{r!==null&&clearTimeout(r),i!==void 0&&(i.disconnect!==void 0?i.disconnect():n&&i.unobserve(n))}),O}else{let l=function(){r!==null&&(clearTimeout(r),r=null),o!==void 0&&(o.removeEventListener!==void 0&&o.removeEventListener("resize",u,g.passive),o=void 0)},v=function(){l(),n&&n.contentDocument&&(o=n.contentDocument.defaultView,o.addEventListener("resize",u,g.passive),a())};const{isHydrated:i}=C();let o;return f(()=>{b(()=>{n=d.$el,n&&v()})}),h(l),()=>{if(i.value===!0)return T("object",{class:"q--avoid-card-border",style:m.style,tabindex:-1,type:"text/html",data:m.url,"aria-hidden":"true",onLoad:v})}}}});const c={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},N=Object.keys(c);c.all=!0;function H(t){const e={};for(const r of N)t[r]===!0&&(e[r]=!0);return Object.keys(e).length===0?c:(e.horizontal===!0?e.left=e.right=!0:e.left===!0&&e.right===!0&&(e.horizontal=!0),e.vertical===!0?e.up=e.down=!0:e.up===!0&&e.down===!0&&(e.vertical=!0),e.horizontal===!0&&e.vertical===!0&&(e.all=!0),e)}const R=["INPUT","TEXTAREA"];function q(t,e){return e.event===void 0&&t.target!==void 0&&t.target.draggable!==!0&&typeof e.handler=="function"&&R.includes(t.target.nodeName.toUpperCase())===!1&&(t.qClonedBy===void 0||t.qClonedBy.indexOf(e.uid)===-1)}function D(){return L(k)}export{x as Q,H as g,q as s,D as u};
