import{m as v,ae as h,aG as C,c as n,h as r,Q as k,j as q,b7 as _,b8 as y,K as Q,z as S}from"./index.8a1bf270.js";var $=v({name:"QBreadcrumbsEl",props:{...h,label:String,icon:String,tag:{type:String,default:"span"}},emits:["click"],setup(e,{slots:s}){const{linkTag:u,linkAttrs:c,linkClass:o,navigateOnClick:d}=C(),l=n(()=>({class:"q-breadcrumbs__el q-link flex inline items-center relative-position "+(e.disable!==!0?"q-link--focusable"+o.value:"q-breadcrumbs__el--disable"),...c.value,onClick:d})),i=n(()=>"q-breadcrumbs__el-icon"+(e.label!==void 0?" q-breadcrumbs__el-icon--with-label":""));return()=>{const t=[];return e.icon!==void 0&&t.push(r(k,{class:i.value,name:e.icon})),e.label!==void 0&&t.push(e.label),r(u.value,{...l.value},q(s.default,t))}}});const x=["",!0];var E=v({name:"QBreadcrumbs",props:{..._,separator:{type:String,default:"/"},separatorColor:String,activeColor:{type:String,default:"primary"},gutter:{type:String,validator:e=>["none","xs","sm","md","lg","xl"].includes(e),default:"sm"}},setup(e,{slots:s}){const u=y(e),c=n(()=>`flex items-center ${u.value}${e.gutter==="none"?"":` q-gutter-${e.gutter}`}`),o=n(()=>e.separatorColor?` text-${e.separatorColor}`:""),d=n(()=>` text-${e.activeColor}`);return()=>{if(s.default===void 0)return;const l=Q(S(s.default));if(l.length===0)return;let i=1;const t=[],m=l.filter(a=>a.type!==void 0&&a.type.name==="QBreadcrumbsEl").length,g=s.separator!==void 0?s.separator:()=>e.separator;return l.forEach(a=>{if(a.type!==void 0&&a.type.name==="QBreadcrumbsEl"){const b=i<m,f=a.props!==null&&x.includes(a.props.disable),p=(b===!0?"":" q-breadcrumbs--last")+(f!==!0&&b===!0?d.value:"");i++,t.push(r("div",{class:`flex items-center${p}`},[a])),b===!0&&t.push(r("div",{class:"q-breadcrumbs__separator"+o.value},g()))}else t.push(a)}),r("div",{class:"q-breadcrumbs"},[r("div",{class:c.value},t)])}}});export{E as Q,$ as a};
