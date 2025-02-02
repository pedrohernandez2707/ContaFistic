import{m as Qe,p as ue,g as R,q as m,s as Se,t as We,v as _e,x as ze,R as Fe,y as w,z as H,A as Oe,B as je,C as J,E as Ke,F as Z,G as Ue,H as He,I as ee,J as se,K as we,L as U,M as Xe,O as Ye,S as Ge,U as te,V as Je,W as K,X as Ze,Y as et,Z as G,$ as ce,a0 as Pe,a1 as de,a2 as tt,T as nt,a3 as at,a4 as rt,a5 as ot,a6 as it,a7 as lt}from"./index.762d07e4.js";import{Q as ut}from"./QResizeObserver.efb396f3.js";import{r as st,c as ct}from"./selection.a5915eb9.js";import{u as dt}from"./use-render-cache.3aae9b27.js";let vt=0;const ft=["click","keydown"],ht={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${vt++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function bt(e,a,v,c){const o=Qe(_e,ue);if(o===ue)return console.error("QTab/QRouteTab component needs to be child of QTabs"),ue;const{proxy:n}=Z(),i=R(null),p=R(null),B=R(null),D=m(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),g=m(()=>o.currentModel.value===e.name),E=m(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(g.value===!0?" q-tab--active"+(o.tabProps.value.activeClass?" "+o.tabProps.value.activeClass:"")+(o.tabProps.value.activeColor?` text-${o.tabProps.value.activeColor}`:"")+(o.tabProps.value.activeBgColor?` bg-${o.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&o.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||o.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(c!==void 0?c.linkClass.value:"")),b=m(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(o.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),y=m(()=>e.disable===!0||o.hasFocus.value===!0||g.value===!1&&o.hasActiveTab.value===!0?-1:e.tabindex||0);function q(l,k){if(k!==!0&&i.value!==null&&i.value.focus(),e.disable===!0){c!==void 0&&c.hasRouterLink.value===!0&&H(l);return}if(c===void 0){o.updateModel({name:e.name}),v("click",l);return}if(c.hasRouterLink.value===!0){const _=(P={})=>{let x;const I=P.to===void 0||Ue(P.to,e.to)===!0?o.avoidRouteWatcher=He():null;return c.navigateToRouterLink(l,{...P,returnRouterError:!0}).catch(M=>{x=M}).then(M=>{if(I===o.avoidRouteWatcher&&(o.avoidRouteWatcher=!1,x===void 0&&(M===void 0||M.message!==void 0&&M.message.startsWith("Avoided redundant navigation")===!0)&&o.updateModel({name:e.name})),P.returnRouterError===!0)return x!==void 0?Promise.reject(x):M})};v("click",l,_),l.defaultPrevented!==!0&&_();return}v("click",l)}function L(l){Oe(l,[13,32])?q(l,!0):je(l)!==!0&&l.keyCode>=35&&l.keyCode<=40&&l.altKey!==!0&&l.metaKey!==!0&&o.onKbdNavigate(l.keyCode,n.$el)===!0&&H(l),v("keydown",l)}function $(){const l=o.tabProps.value.narrowIndicator,k=[],_=w("div",{ref:B,class:["q-tab__indicator",o.tabProps.value.indicatorClass]});e.icon!==void 0&&k.push(w(J,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&k.push(w("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&k.push(e.alertIcon!==void 0?w(J,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):w("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),l===!0&&k.push(_);const P=[w("div",{class:"q-focus-helper",tabindex:-1,ref:i}),w("div",{class:b.value},Ke(a.default,k))];return l===!1&&P.push(_),P}const N={name:m(()=>e.name),rootRef:p,tabIndicatorRef:B,routeData:c};Se(()=>{o.unregisterTab(N)}),We(()=>{o.registerTab(N)});function F(l,k){const _={ref:p,class:E.value,tabindex:y.value,role:"tab","aria-selected":g.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:q,onKeydown:L,...k};return ze(w(l,_,$()),[[Fe,D.value]])}return{renderTab:F,$tabs:o}}var Rt=ee({name:"QTab",props:ht,emits:ft,setup(e,{slots:a,emit:v}){const{renderTab:c}=bt(e,a,v);return()=>c("div")}});function mt(e,a,v){const c=v===!0?["left","right"]:["top","bottom"];return`absolute-${a===!0?c[0]:c[1]}${e?` text-${e}`:""}`}const gt=["left","center","right","justify"];var Lt=ee({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>gt.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:a,emit:v}){const{proxy:c}=Z(),{$q:o}=c,{registerTick:n}=se(),{registerTick:i}=se(),{registerTick:p}=se(),{registerTimeout:B,removeTimeout:D}=we(),{registerTimeout:g,removeTimeout:E}=we(),b=R(null),y=R(null),q=R(e.modelValue),L=R(!1),$=R(!0),N=R(!1),F=R(!1),l=[],k=R(0),_=R(!1);let P=null,x=null,I;const M=m(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:mt(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),ne=m(()=>{const t=k.value,r=q.value;for(let u=0;u<t;u++)if(l[u].name.value===r)return!0;return!1}),ae=m(()=>`q-tabs__content--align-${L.value===!0?"left":F.value===!0?"justify":e.align}`),re=m(()=>`q-tabs row no-wrap items-center q-tabs--${L.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),s=m(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+ae.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),h=m(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),A=m(()=>e.vertical!==!0&&o.lang.rtl===!0),Q=m(()=>st===!1&&A.value===!0);U(A,j),U(()=>e.modelValue,t=>{oe({name:t,setCurrent:!0,skipEmit:!0})}),U(()=>e.outsideArrows,X);function oe({name:t,setCurrent:r,skipEmit:u}){q.value!==t&&(u!==!0&&e["onUpdate:modelValue"]!==void 0&&v("update:modelValue",t),(r===!0||e["onUpdate:modelValue"]===void 0)&&(Ae(q.value,t),q.value=t))}function X(){n(()=>{fe({width:b.value.offsetWidth,height:b.value.offsetHeight})})}function fe(t){if(h.value===void 0||y.value===null)return;const r=t[h.value.container],u=Math.min(y.value[h.value.scroll],Array.prototype.reduce.call(y.value.children,(C,f)=>C+(f[h.value.content]||0),0)),T=r>0&&u>r;L.value=T,T===!0&&i(j),F.value=r<parseInt(e.breakpoint,10)}function Ae(t,r){const u=t!=null&&t!==""?l.find(C=>C.name.value===t):null,T=r!=null&&r!==""?l.find(C=>C.name.value===r):null;if(u&&T){const C=u.tabIndicatorRef.value,f=T.tabIndicatorRef.value;P!==null&&(clearTimeout(P),P=null),C.style.transition="none",C.style.transform="none",f.style.transition="none",f.style.transform="none";const d=C.getBoundingClientRect(),S=f.getBoundingClientRect();f.style.transform=e.vertical===!0?`translate3d(0,${d.top-S.top}px,0) scale3d(1,${S.height?d.height/S.height:1},1)`:`translate3d(${d.left-S.left}px,0,0) scale3d(${S.width?d.width/S.width:1},1,1)`,p(()=>{P=setTimeout(()=>{P=null,f.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",f.style.transform="none"},70)})}T&&L.value===!0&&O(T.rootRef.value)}function O(t){const{left:r,width:u,top:T,height:C}=y.value.getBoundingClientRect(),f=t.getBoundingClientRect();let d=e.vertical===!0?f.top-T:f.left-r;if(d<0){y.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(d),j();return}d+=e.vertical===!0?f.height-C:f.width-u,d>0&&(y.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(d),j())}function j(){const t=y.value;if(t===null)return;const r=t.getBoundingClientRect(),u=e.vertical===!0?t.scrollTop:Math.abs(t.scrollLeft);A.value===!0?($.value=Math.ceil(u+r.width)<t.scrollWidth-1,N.value=u>0):($.value=u>0,N.value=e.vertical===!0?Math.ceil(u+r.height)<t.scrollHeight:Math.ceil(u+r.width)<t.scrollWidth)}function he(t){x!==null&&clearInterval(x),x=setInterval(()=>{Ie(t)===!0&&W()},5)}function be(){he(Q.value===!0?Number.MAX_SAFE_INTEGER:0)}function me(){he(Q.value===!0?0:Number.MAX_SAFE_INTEGER)}function W(){x!==null&&(clearInterval(x),x=null)}function Re(t,r){const u=Array.prototype.filter.call(y.value.children,S=>S===r||S.matches&&S.matches(".q-tab.q-focusable")===!0),T=u.length;if(T===0)return;if(t===36)return O(u[0]),u[0].focus(),!0;if(t===35)return O(u[T-1]),u[T-1].focus(),!0;const C=t===(e.vertical===!0?38:37),f=t===(e.vertical===!0?40:39),d=C===!0?-1:f===!0?1:void 0;if(d!==void 0){const S=A.value===!0?-1:1,V=u.indexOf(r)+d*S;return V>=0&&V<T&&(O(u[V]),u[V].focus({preventScroll:!0})),!0}}const Le=m(()=>Q.value===!0?{get:t=>Math.abs(t.scrollLeft),set:(t,r)=>{t.scrollLeft=-r}}:e.vertical===!0?{get:t=>t.scrollTop,set:(t,r)=>{t.scrollTop=r}}:{get:t=>t.scrollLeft,set:(t,r)=>{t.scrollLeft=r}});function Ie(t){const r=y.value,{get:u,set:T}=Le.value;let C=!1,f=u(r);const d=t<f?-1:1;return f+=d*5,f<0?(C=!0,f=0):(d===-1&&f<=t||d===1&&f>=t)&&(C=!0,f=t),T(r,f),j(),C}function ge(t,r){for(const u in t)if(t[u]!==r[u])return!1;return!0}function Be(){let t=null,r={matchedLen:0,queryDiff:9999,hrefLen:0};const u=l.filter(d=>d.routeData!==void 0&&d.routeData.hasRouterLink.value===!0),{hash:T,query:C}=c.$route,f=Object.keys(C).length;for(const d of u){const S=d.routeData.exact.value===!0;if(d.routeData[S===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:V,query:ie,matched:Ne,href:Ve}=d.routeData.resolvedLink.value,le=Object.keys(ie).length;if(S===!0){if(V!==T||le!==f||ge(C,ie)===!1)continue;t=d.name.value;break}if(V!==""&&V!==T||le!==0&&ge(ie,C)===!1)continue;const z={matchedLen:Ne.length,queryDiff:f-le,hrefLen:Ve.length-V.length};if(z.matchedLen>r.matchedLen){t=d.name.value,r=z;continue}else if(z.matchedLen!==r.matchedLen)continue;if(z.queryDiff<r.queryDiff)t=d.name.value,r=z;else if(z.queryDiff!==r.queryDiff)continue;z.hrefLen>r.hrefLen&&(t=d.name.value,r=z)}t===null&&l.some(d=>d.routeData===void 0&&d.name.value===q.value)===!0||oe({name:t,setCurrent:!0})}function $e(t){if(D(),_.value!==!0&&b.value!==null&&t.target&&typeof t.target.closest=="function"){const r=t.target.closest(".q-tab");r&&b.value.contains(r)===!0&&(_.value=!0,L.value===!0&&O(r))}}function Me(){B(()=>{_.value=!1},30)}function Y(){ye.avoidRouteWatcher===!1?g(Be):E()}function pe(){if(I===void 0){const t=U(()=>c.$route.fullPath,Y);I=()=>{t(),I=void 0}}}function De(t){l.push(t),k.value++,X(),t.routeData===void 0||c.$route===void 0?g(()=>{if(L.value===!0){const r=q.value,u=r!=null&&r!==""?l.find(T=>T.name.value===r):null;u&&O(u.rootRef.value)}}):(pe(),t.routeData.hasRouterLink.value===!0&&Y())}function Ee(t){l.splice(l.indexOf(t),1),k.value--,X(),I!==void 0&&t.routeData!==void 0&&(l.every(r=>r.routeData===void 0)===!0&&I(),Y())}const ye={currentModel:q,tabProps:M,hasFocus:_,hasActiveTab:ne,registerTab:De,unregisterTab:Ee,verifyRouteModel:Y,updateModel:oe,onKbdNavigate:Re,avoidRouteWatcher:!1};Xe(_e,ye);function Te(){P!==null&&clearTimeout(P),W(),I!==void 0&&I()}let Ce;return Se(Te),Ye(()=>{Ce=I!==void 0,Te()}),Ge(()=>{Ce===!0&&pe(),X()}),()=>w("div",{ref:b,class:re.value,role:"tablist",onFocusin:$e,onFocusout:Me},[w(ut,{onResize:fe}),w("div",{ref:y,class:s.value,onScroll:j},te(a.default)),w(J,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+($.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||o.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:be,onTouchstartPassive:be,onMouseupPassive:W,onMouseleavePassive:W,onTouchendPassive:W}),w(J,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(N.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||o.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:me,onTouchstartPassive:me,onMouseupPassive:W,onMouseleavePassive:W,onTouchendPassive:W})])}});const ve={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},pt=Object.keys(ve);ve.all=!0;function qe(e){const a={};for(const v of pt)e[v]===!0&&(a[v]=!0);return Object.keys(a).length===0?ve:(a.horizontal===!0?a.left=a.right=!0:a.left===!0&&a.right===!0&&(a.horizontal=!0),a.vertical===!0?a.up=a.down=!0:a.up===!0&&a.down===!0&&(a.vertical=!0),a.horizontal===!0&&a.vertical===!0&&(a.all=!0),a)}const yt=["INPUT","TEXTAREA"];function ke(e,a){return a.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof a.handler=="function"&&yt.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(a.uid)===-1)}function Tt(e){const a=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((v,c)=>{const o=parseFloat(v);o&&(a[c]=o)}),a}var Ct=Je({name:"touch-swipe",beforeMount(e,{value:a,arg:v,modifiers:c}){if(c.mouse!==!0&&K.has.touch!==!0)return;const o=c.mouseCapture===!0?"Capture":"",n={handler:a,sensitivity:Tt(v),direction:qe(c),noop:Ze,mouseStart(i){ke(i,n)&&et(i)&&(G(n,"temp",[[document,"mousemove","move",`notPassive${o}`],[document,"mouseup","end","notPassiveCapture"]]),n.start(i,!0))},touchStart(i){if(ke(i,n)){const p=i.target;G(n,"temp",[[p,"touchmove","move","notPassiveCapture"],[p,"touchcancel","end","notPassiveCapture"],[p,"touchend","end","notPassiveCapture"]]),n.start(i)}},start(i,p){K.is.firefox===!0&&ce(e,!0);const B=Pe(i);n.event={x:B.left,y:B.top,time:Date.now(),mouse:p===!0,dir:!1}},move(i){if(n.event===void 0)return;if(n.event.dir!==!1){H(i);return}const p=Date.now()-n.event.time;if(p===0)return;const B=Pe(i),D=B.left-n.event.x,g=Math.abs(D),E=B.top-n.event.y,b=Math.abs(E);if(n.event.mouse!==!0){if(g<n.sensitivity[1]&&b<n.sensitivity[1]){n.end(i);return}}else if(window.getSelection().toString()!==""){n.end(i);return}else if(g<n.sensitivity[2]&&b<n.sensitivity[2])return;const y=g/p,q=b/p;n.direction.vertical===!0&&g<b&&g<100&&q>n.sensitivity[0]&&(n.event.dir=E<0?"up":"down"),n.direction.horizontal===!0&&g>b&&b<100&&y>n.sensitivity[0]&&(n.event.dir=D<0?"left":"right"),n.direction.up===!0&&g<b&&E<0&&g<100&&q>n.sensitivity[0]&&(n.event.dir="up"),n.direction.down===!0&&g<b&&E>0&&g<100&&q>n.sensitivity[0]&&(n.event.dir="down"),n.direction.left===!0&&g>b&&D<0&&b<100&&y>n.sensitivity[0]&&(n.event.dir="left"),n.direction.right===!0&&g>b&&D>0&&b<100&&y>n.sensitivity[0]&&(n.event.dir="right"),n.event.dir!==!1?(H(i),n.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),ct(),n.styleCleanup=L=>{n.styleCleanup=void 0,document.body.classList.remove("non-selectable");const $=()=>{document.body.classList.remove("no-pointer-events--children")};L===!0?setTimeout($,50):$()}),n.handler({evt:i,touch:n.event.mouse!==!0,mouse:n.event.mouse,direction:n.event.dir,duration:p,distance:{x:g,y:b}})):n.end(i)},end(i){n.event!==void 0&&(de(n,"temp"),K.is.firefox===!0&&ce(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(!0),i!==void 0&&n.event.dir!==!1&&H(i),n.event=void 0)}};if(e.__qtouchswipe=n,c.mouse===!0){const i=c.mouseCapture===!0||c.mousecapture===!0?"Capture":"";G(n,"main",[[e,"mousedown","mouseStart",`passive${i}`]])}K.has.touch===!0&&G(n,"main",[[e,"touchstart","touchStart",`passive${c.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,a){const v=e.__qtouchswipe;v!==void 0&&(a.oldValue!==a.value&&(typeof a.value!="function"&&v.end(),v.handler=a.value),v.direction=qe(a.modifiers))},beforeUnmount(e){const a=e.__qtouchswipe;a!==void 0&&(de(a,"main"),de(a,"temp"),K.is.firefox===!0&&ce(e,!1),a.styleCleanup!==void 0&&a.styleCleanup(),delete e.__qtouchswipe)}});const wt={name:{required:!0},disable:Boolean},xe={setup(e,{slots:a}){return()=>w("div",{class:"q-panel scroll",role:"tabpanel"},te(a.default))}},Pt={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},qt=["update:modelValue","beforeTransition","transition"];function kt(){const{props:e,emit:a,proxy:v}=Z(),{getCache:c}=dt();let o,n;const i=R(null),p=R(null);function B(s){const h=e.vertical===!0?"up":"left";x((v.$q.lang.rtl===!0?-1:1)*(s.direction===h?1:-1))}const D=m(()=>[[Ct,B,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),g=m(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),E=m(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),b=m(()=>`--q-transition-duration: ${e.transitionDuration}ms`),y=m(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),q=m(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),L=m(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);U(()=>e.modelValue,(s,h)=>{const A=l(s)===!0?k(s):-1;n!==!0&&P(A===-1?0:A<k(h)?-1:1),i.value!==A&&(i.value=A,a("beforeTransition",s,h),tt(()=>{a("transition",s,h)}))});function $(){x(1)}function N(){x(-1)}function F(s){a("update:modelValue",s)}function l(s){return s!=null&&s!==""}function k(s){return o.findIndex(h=>h.props.name===s&&h.props.disable!==""&&h.props.disable!==!0)}function _(){return o.filter(s=>s.props.disable!==""&&s.props.disable!==!0)}function P(s){const h=s!==0&&e.animated===!0&&i.value!==-1?"q-transition--"+(s===-1?g.value:E.value):null;p.value!==h&&(p.value=h)}function x(s,h=i.value){let A=h+s;for(;A!==-1&&A<o.length;){const Q=o[A];if(Q!==void 0&&Q.props.disable!==""&&Q.props.disable!==!0){P(s),n=!0,a("update:modelValue",Q.props.name),setTimeout(()=>{n=!1});return}A+=s}e.infinite===!0&&o.length!==0&&h!==-1&&h!==o.length&&x(s,s===-1?o.length:-1)}function I(){const s=k(e.modelValue);return i.value!==s&&(i.value=s),!0}function M(){const s=l(e.modelValue)===!0&&I()&&o[i.value];return e.keepAlive===!0?[w(rt,q.value,[w(L.value===!0?c(y.value,()=>({...xe,name:y.value})):xe,{key:y.value,style:b.value},()=>s)])]:[w("div",{class:"q-panel scroll",style:b.value,key:y.value,role:"tabpanel"},[s])]}function ne(){if(o.length!==0)return e.animated===!0?[w(nt,{name:p.value},M)]:M()}function ae(s){return o=at(te(s.default,[])).filter(h=>h.props!==null&&h.props.slot===void 0&&l(h.props.name)===!0),o.length}function re(){return o}return Object.assign(v,{next:$,previous:N,goTo:F}),{panelIndex:i,panelDirectives:D,updatePanelsList:ae,updatePanelIndex:I,getPanelContent:ne,getEnabledPanels:_,getPanels:re,isValidPanelName:l,keepAliveProps:q,needsUniqueKeepAliveWrapper:L,goToPanelByOffset:x,goToPanel:F,nextPanel:$,previousPanel:N}}var It=ee({name:"QTabPanel",props:wt,setup(e,{slots:a}){return()=>w("div",{class:"q-tab-panel",role:"tabpanel"},te(a.default))}}),Bt=ee({name:"QTabPanels",props:{...Pt,...ot},emits:qt,setup(e,{slots:a}){const v=Z(),c=it(e,v.proxy.$q),{updatePanelsList:o,getPanelContent:n,panelDirectives:i}=kt(),p=m(()=>"q-tab-panels q-panel-parent"+(c.value===!0?" q-tab-panels--dark q-dark":""));return()=>(o(a),lt("div",{class:p.value},n(),"pan",e.swipeable,()=>i.value))}});export{Lt as Q,Rt as a,Bt as b,It as c};
