import{y as e,I as s,a5 as c,a6 as p,q as u,U as l,F as d}from"./index.ad8d48bd.js";const m=e("div",{class:"q-space"});var q=s({name:"QSpace",setup(){return()=>m}}),v=s({name:"QBar",props:{...c,dense:Boolean},setup(a,{slots:r}){const{proxy:{$q:t}}=d(),n=p(a,t),o=u(()=>`q-bar row no-wrap items-center q-bar--${a.dense===!0?"dense":"standard"}  q-bar--${n.value===!0?"dark":"light"}`);return()=>e("div",{class:o.value,role:"toolbar"},l(r.default))}});export{v as Q,q as a};
