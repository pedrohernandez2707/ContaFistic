import{m as Qe,p as se,g as R,q as m,s as ke,t as We,v as Se,x as Ne,R as Fe,y as w,z as H,A as Ke,B as je,C as J,E as ze,F as Z,G as Oe,H as Ue,I as ee,J as ue,K as Ce,L as U,M as He,O as Xe,S as Ye,U as te,V as Ge,W as O,X as Je,Y as Ze,Z as G,$ as ce,a0 as we,a1 as ve,a2 as et,T as tt,a3 as nt,a4 as at,a5 as ot,a6 as rt,a7 as it}from"./index.64b8d3ad.js";import{Q as lt,g as Pe,s as qe}from"./touch.d7f4b935.js";import{r as st,c as ut}from"./selection.51153791.js";import{u as ct}from"./use-render-cache.3aae9b27.js";let vt=0;const dt=["click","keydown"],ft={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${vt++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function ht(e,u,h,c){const o=Qe(Se,se);if(o===se)return console.error("QTab/QRouteTab component needs to be child of QTabs"),se;const{proxy:n}=Z(),r=R(null),p=R(null),B=R(null),D=m(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),g=m(()=>o.currentModel.value===e.name),E=m(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(g.value===!0?" q-tab--active"+(o.tabProps.value.activeClass?" "+o.tabProps.value.activeClass:"")+(o.tabProps.value.activeColor?` text-${o.tabProps.value.activeColor}`:"")+(o.tabProps.value.activeBgColor?` bg-${o.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&o.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||o.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(c!==void 0?c.linkClass.value:"")),b=m(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(o.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),y=m(()=>e.disable===!0||o.hasFocus.value===!0||g.value===!1&&o.hasActiveTab.value===!0?-1:e.tabindex||0);function q(i,x){if(x!==!0&&r.value!==null&&r.value.focus(),e.disable===!0){c!==void 0&&c.hasRouterLink.value===!0&&H(i);return}if(c===void 0){o.updateModel({name:e.name}),h("click",i);return}if(c.hasRouterLink.value===!0){const _=(P={})=>{let k;const I=P.to===void 0||Oe(P.to,e.to)===!0?o.avoidRouteWatcher=Ue():null;return c.navigateToRouterLink(i,{...P,returnRouterError:!0}).catch(M=>{k=M}).then(M=>{if(I===o.avoidRouteWatcher&&(o.avoidRouteWatcher=!1,k===void 0&&(M===void 0||M.message!==void 0&&M.message.startsWith("Avoided redundant navigation")===!0)&&o.updateModel({name:e.name})),P.returnRouterError===!0)return k!==void 0?Promise.reject(k):M})};h("click",i,_),i.defaultPrevented!==!0&&_();return}h("click",i)}function L(i){Ke(i,[13,32])?q(i,!0):je(i)!==!0&&i.keyCode>=35&&i.keyCode<=40&&i.altKey!==!0&&i.metaKey!==!0&&o.onKbdNavigate(i.keyCode,n.$el)===!0&&H(i),h("keydown",i)}function $(){const i=o.tabProps.value.narrowIndicator,x=[],_=w("div",{ref:B,class:["q-tab__indicator",o.tabProps.value.indicatorClass]});e.icon!==void 0&&x.push(w(J,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&x.push(w("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&x.push(e.alertIcon!==void 0?w(J,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):w("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),i===!0&&x.push(_);const P=[w("div",{class:"q-focus-helper",tabindex:-1,ref:r}),w("div",{class:b.value},ze(u.default,x))];return i===!1&&P.push(_),P}const V={name:m(()=>e.name),rootRef:p,tabIndicatorRef:B,routeData:c};ke(()=>{o.unregisterTab(V)}),We(()=>{o.registerTab(V)});function K(i,x){const _={ref:p,class:E.value,tabindex:y.value,role:"tab","aria-selected":g.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:q,onKeydown:L,...x};return Ne(w(i,_,$()),[[Fe,D.value]])}return{renderTab:K,$tabs:o}}var St=ee({name:"QTab",props:ft,emits:dt,setup(e,{slots:u,emit:h}){const{renderTab:c}=ht(e,u,h);return()=>c("div")}});function bt(e,u,h){const c=h===!0?["left","right"]:["top","bottom"];return`absolute-${u===!0?c[0]:c[1]}${e?` text-${e}`:""}`}const mt=["left","center","right","justify"];var _t=ee({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>mt.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:u,emit:h}){const{proxy:c}=Z(),{$q:o}=c,{registerTick:n}=ue(),{registerTick:r}=ue(),{registerTick:p}=ue(),{registerTimeout:B,removeTimeout:D}=Ce(),{registerTimeout:g,removeTimeout:E}=Ce(),b=R(null),y=R(null),q=R(e.modelValue),L=R(!1),$=R(!0),V=R(!1),K=R(!1),i=[],x=R(0),_=R(!1);let P=null,k=null,I;const M=m(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:bt(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),ne=m(()=>{const t=x.value,a=q.value;for(let l=0;l<t;l++)if(i[l].name.value===a)return!0;return!1}),ae=m(()=>`q-tabs__content--align-${L.value===!0?"left":K.value===!0?"justify":e.align}`),oe=m(()=>`q-tabs row no-wrap items-center q-tabs--${L.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),s=m(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+ae.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),f=m(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),A=m(()=>e.vertical!==!0&&o.lang.rtl===!0),W=m(()=>st===!1&&A.value===!0);U(A,z),U(()=>e.modelValue,t=>{re({name:t,setCurrent:!0,skipEmit:!0})}),U(()=>e.outsideArrows,X);function re({name:t,setCurrent:a,skipEmit:l}){q.value!==t&&(l!==!0&&e["onUpdate:modelValue"]!==void 0&&h("update:modelValue",t),(a===!0||e["onUpdate:modelValue"]===void 0)&&(_e(q.value,t),q.value=t))}function X(){n(()=>{de({width:b.value.offsetWidth,height:b.value.offsetHeight})})}function de(t){if(f.value===void 0||y.value===null)return;const a=t[f.value.container],l=Math.min(y.value[f.value.scroll],Array.prototype.reduce.call(y.value.children,(C,d)=>C+(d[f.value.content]||0),0)),T=a>0&&l>a;L.value=T,T===!0&&r(z),K.value=a<parseInt(e.breakpoint,10)}function _e(t,a){const l=t!=null&&t!==""?i.find(C=>C.name.value===t):null,T=a!=null&&a!==""?i.find(C=>C.name.value===a):null;if(l&&T){const C=l.tabIndicatorRef.value,d=T.tabIndicatorRef.value;P!==null&&(clearTimeout(P),P=null),C.style.transition="none",C.style.transform="none",d.style.transition="none",d.style.transform="none";const v=C.getBoundingClientRect(),S=d.getBoundingClientRect();d.style.transform=e.vertical===!0?`translate3d(0,${v.top-S.top}px,0) scale3d(1,${S.height?v.height/S.height:1},1)`:`translate3d(${v.left-S.left}px,0,0) scale3d(${S.width?v.width/S.width:1},1,1)`,p(()=>{P=setTimeout(()=>{P=null,d.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",d.style.transform="none"},70)})}T&&L.value===!0&&j(T.rootRef.value)}function j(t){const{left:a,width:l,top:T,height:C}=y.value.getBoundingClientRect(),d=t.getBoundingClientRect();let v=e.vertical===!0?d.top-T:d.left-a;if(v<0){y.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(v),z();return}v+=e.vertical===!0?d.height-C:d.width-l,v>0&&(y.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(v),z())}function z(){const t=y.value;if(t===null)return;const a=t.getBoundingClientRect(),l=e.vertical===!0?t.scrollTop:Math.abs(t.scrollLeft);A.value===!0?($.value=Math.ceil(l+a.width)<t.scrollWidth-1,V.value=l>0):($.value=l>0,V.value=e.vertical===!0?Math.ceil(l+a.height)<t.scrollHeight:Math.ceil(l+a.width)<t.scrollWidth)}function fe(t){k!==null&&clearInterval(k),k=setInterval(()=>{Le(t)===!0&&N()},5)}function he(){fe(W.value===!0?Number.MAX_SAFE_INTEGER:0)}function be(){fe(W.value===!0?0:Number.MAX_SAFE_INTEGER)}function N(){k!==null&&(clearInterval(k),k=null)}function Ae(t,a){const l=Array.prototype.filter.call(y.value.children,S=>S===a||S.matches&&S.matches(".q-tab.q-focusable")===!0),T=l.length;if(T===0)return;if(t===36)return j(l[0]),l[0].focus(),!0;if(t===35)return j(l[T-1]),l[T-1].focus(),!0;const C=t===(e.vertical===!0?38:37),d=t===(e.vertical===!0?40:39),v=C===!0?-1:d===!0?1:void 0;if(v!==void 0){const S=A.value===!0?-1:1,Q=l.indexOf(a)+v*S;return Q>=0&&Q<T&&(j(l[Q]),l[Q].focus({preventScroll:!0})),!0}}const Re=m(()=>W.value===!0?{get:t=>Math.abs(t.scrollLeft),set:(t,a)=>{t.scrollLeft=-a}}:e.vertical===!0?{get:t=>t.scrollTop,set:(t,a)=>{t.scrollTop=a}}:{get:t=>t.scrollLeft,set:(t,a)=>{t.scrollLeft=a}});function Le(t){const a=y.value,{get:l,set:T}=Re.value;let C=!1,d=l(a);const v=t<d?-1:1;return d+=v*5,d<0?(C=!0,d=0):(v===-1&&d<=t||v===1&&d>=t)&&(C=!0,d=t),T(a,d),z(),C}function me(t,a){for(const l in t)if(t[l]!==a[l])return!1;return!0}function Ie(){let t=null,a={matchedLen:0,queryDiff:9999,hrefLen:0};const l=i.filter(v=>v.routeData!==void 0&&v.routeData.hasRouterLink.value===!0),{hash:T,query:C}=c.$route,d=Object.keys(C).length;for(const v of l){const S=v.routeData.exact.value===!0;if(v.routeData[S===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:Q,query:ie,matched:Ee,href:Ve}=v.routeData.resolvedLink.value,le=Object.keys(ie).length;if(S===!0){if(Q!==T||le!==d||me(C,ie)===!1)continue;t=v.name.value;break}if(Q!==""&&Q!==T||le!==0&&me(ie,C)===!1)continue;const F={matchedLen:Ee.length,queryDiff:d-le,hrefLen:Ve.length-Q.length};if(F.matchedLen>a.matchedLen){t=v.name.value,a=F;continue}else if(F.matchedLen!==a.matchedLen)continue;if(F.queryDiff<a.queryDiff)t=v.name.value,a=F;else if(F.queryDiff!==a.queryDiff)continue;F.hrefLen>a.hrefLen&&(t=v.name.value,a=F)}t===null&&i.some(v=>v.routeData===void 0&&v.name.value===q.value)===!0||re({name:t,setCurrent:!0})}function Be(t){if(D(),_.value!==!0&&b.value!==null&&t.target&&typeof t.target.closest=="function"){const a=t.target.closest(".q-tab");a&&b.value.contains(a)===!0&&(_.value=!0,L.value===!0&&j(a))}}function $e(){B(()=>{_.value=!1},30)}function Y(){pe.avoidRouteWatcher===!1?g(Ie):E()}function ge(){if(I===void 0){const t=U(()=>c.$route.fullPath,Y);I=()=>{t(),I=void 0}}}function Me(t){i.push(t),x.value++,X(),t.routeData===void 0||c.$route===void 0?g(()=>{if(L.value===!0){const a=q.value,l=a!=null&&a!==""?i.find(T=>T.name.value===a):null;l&&j(l.rootRef.value)}}):(ge(),t.routeData.hasRouterLink.value===!0&&Y())}function De(t){i.splice(i.indexOf(t),1),x.value--,X(),I!==void 0&&t.routeData!==void 0&&(i.every(a=>a.routeData===void 0)===!0&&I(),Y())}const pe={currentModel:q,tabProps:M,hasFocus:_,hasActiveTab:ne,registerTab:Me,unregisterTab:De,verifyRouteModel:Y,updateModel:re,onKbdNavigate:Ae,avoidRouteWatcher:!1};He(Se,pe);function ye(){P!==null&&clearTimeout(P),N(),I!==void 0&&I()}let Te;return ke(ye),Xe(()=>{Te=I!==void 0,ye()}),Ye(()=>{Te===!0&&ge(),X()}),()=>w("div",{ref:b,class:oe.value,role:"tablist",onFocusin:Be,onFocusout:$e},[w(lt,{onResize:de}),w("div",{ref:y,class:s.value,onScroll:z},te(u.default)),w(J,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+($.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||o.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:he,onTouchstartPassive:he,onMouseupPassive:N,onMouseleavePassive:N,onTouchendPassive:N}),w(J,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(V.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||o.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:be,onTouchstartPassive:be,onMouseupPassive:N,onMouseleavePassive:N,onTouchendPassive:N})])}});function gt(e){const u=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((h,c)=>{const o=parseFloat(h);o&&(u[c]=o)}),u}var pt=Ge({name:"touch-swipe",beforeMount(e,{value:u,arg:h,modifiers:c}){if(c.mouse!==!0&&O.has.touch!==!0)return;const o=c.mouseCapture===!0?"Capture":"",n={handler:u,sensitivity:gt(h),direction:Pe(c),noop:Je,mouseStart(r){qe(r,n)&&Ze(r)&&(G(n,"temp",[[document,"mousemove","move",`notPassive${o}`],[document,"mouseup","end","notPassiveCapture"]]),n.start(r,!0))},touchStart(r){if(qe(r,n)){const p=r.target;G(n,"temp",[[p,"touchmove","move","notPassiveCapture"],[p,"touchcancel","end","notPassiveCapture"],[p,"touchend","end","notPassiveCapture"]]),n.start(r)}},start(r,p){O.is.firefox===!0&&ce(e,!0);const B=we(r);n.event={x:B.left,y:B.top,time:Date.now(),mouse:p===!0,dir:!1}},move(r){if(n.event===void 0)return;if(n.event.dir!==!1){H(r);return}const p=Date.now()-n.event.time;if(p===0)return;const B=we(r),D=B.left-n.event.x,g=Math.abs(D),E=B.top-n.event.y,b=Math.abs(E);if(n.event.mouse!==!0){if(g<n.sensitivity[1]&&b<n.sensitivity[1]){n.end(r);return}}else if(window.getSelection().toString()!==""){n.end(r);return}else if(g<n.sensitivity[2]&&b<n.sensitivity[2])return;const y=g/p,q=b/p;n.direction.vertical===!0&&g<b&&g<100&&q>n.sensitivity[0]&&(n.event.dir=E<0?"up":"down"),n.direction.horizontal===!0&&g>b&&b<100&&y>n.sensitivity[0]&&(n.event.dir=D<0?"left":"right"),n.direction.up===!0&&g<b&&E<0&&g<100&&q>n.sensitivity[0]&&(n.event.dir="up"),n.direction.down===!0&&g<b&&E>0&&g<100&&q>n.sensitivity[0]&&(n.event.dir="down"),n.direction.left===!0&&g>b&&D<0&&b<100&&y>n.sensitivity[0]&&(n.event.dir="left"),n.direction.right===!0&&g>b&&D>0&&b<100&&y>n.sensitivity[0]&&(n.event.dir="right"),n.event.dir!==!1?(H(r),n.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),ut(),n.styleCleanup=L=>{n.styleCleanup=void 0,document.body.classList.remove("non-selectable");const $=()=>{document.body.classList.remove("no-pointer-events--children")};L===!0?setTimeout($,50):$()}),n.handler({evt:r,touch:n.event.mouse!==!0,mouse:n.event.mouse,direction:n.event.dir,duration:p,distance:{x:g,y:b}})):n.end(r)},end(r){n.event!==void 0&&(ve(n,"temp"),O.is.firefox===!0&&ce(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(!0),r!==void 0&&n.event.dir!==!1&&H(r),n.event=void 0)}};if(e.__qtouchswipe=n,c.mouse===!0){const r=c.mouseCapture===!0||c.mousecapture===!0?"Capture":"";G(n,"main",[[e,"mousedown","mouseStart",`passive${r}`]])}O.has.touch===!0&&G(n,"main",[[e,"touchstart","touchStart",`passive${c.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,u){const h=e.__qtouchswipe;h!==void 0&&(u.oldValue!==u.value&&(typeof u.value!="function"&&h.end(),h.handler=u.value),h.direction=Pe(u.modifiers))},beforeUnmount(e){const u=e.__qtouchswipe;u!==void 0&&(ve(u,"main"),ve(u,"temp"),O.is.firefox===!0&&ce(e,!1),u.styleCleanup!==void 0&&u.styleCleanup(),delete e.__qtouchswipe)}});const yt={name:{required:!0},disable:Boolean},xe={setup(e,{slots:u}){return()=>w("div",{class:"q-panel scroll",role:"tabpanel"},te(u.default))}},Tt={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},Ct=["update:modelValue","beforeTransition","transition"];function wt(){const{props:e,emit:u,proxy:h}=Z(),{getCache:c}=ct();let o,n;const r=R(null),p=R(null);function B(s){const f=e.vertical===!0?"up":"left";k((h.$q.lang.rtl===!0?-1:1)*(s.direction===f?1:-1))}const D=m(()=>[[pt,B,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),g=m(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),E=m(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),b=m(()=>`--q-transition-duration: ${e.transitionDuration}ms`),y=m(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),q=m(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),L=m(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);U(()=>e.modelValue,(s,f)=>{const A=i(s)===!0?x(s):-1;n!==!0&&P(A===-1?0:A<x(f)?-1:1),r.value!==A&&(r.value=A,u("beforeTransition",s,f),et(()=>{u("transition",s,f)}))});function $(){k(1)}function V(){k(-1)}function K(s){u("update:modelValue",s)}function i(s){return s!=null&&s!==""}function x(s){return o.findIndex(f=>f.props.name===s&&f.props.disable!==""&&f.props.disable!==!0)}function _(){return o.filter(s=>s.props.disable!==""&&s.props.disable!==!0)}function P(s){const f=s!==0&&e.animated===!0&&r.value!==-1?"q-transition--"+(s===-1?g.value:E.value):null;p.value!==f&&(p.value=f)}function k(s,f=r.value){let A=f+s;for(;A!==-1&&A<o.length;){const W=o[A];if(W!==void 0&&W.props.disable!==""&&W.props.disable!==!0){P(s),n=!0,u("update:modelValue",W.props.name),setTimeout(()=>{n=!1});return}A+=s}e.infinite===!0&&o.length!==0&&f!==-1&&f!==o.length&&k(s,s===-1?o.length:-1)}function I(){const s=x(e.modelValue);return r.value!==s&&(r.value=s),!0}function M(){const s=i(e.modelValue)===!0&&I()&&o[r.value];return e.keepAlive===!0?[w(at,q.value,[w(L.value===!0?c(y.value,()=>({...xe,name:y.value})):xe,{key:y.value,style:b.value},()=>s)])]:[w("div",{class:"q-panel scroll",style:b.value,key:y.value,role:"tabpanel"},[s])]}function ne(){if(o.length!==0)return e.animated===!0?[w(tt,{name:p.value},M)]:M()}function ae(s){return o=nt(te(s.default,[])).filter(f=>f.props!==null&&f.props.slot===void 0&&i(f.props.name)===!0),o.length}function oe(){return o}return Object.assign(h,{next:$,previous:V,goTo:K}),{panelIndex:r,panelDirectives:D,updatePanelsList:ae,updatePanelIndex:I,getPanelContent:ne,getEnabledPanels:_,getPanels:oe,isValidPanelName:i,keepAliveProps:q,needsUniqueKeepAliveWrapper:L,goToPanelByOffset:k,goToPanel:K,nextPanel:$,previousPanel:V}}var At=ee({name:"QTabPanel",props:yt,setup(e,{slots:u}){return()=>w("div",{class:"q-tab-panel",role:"tabpanel"},te(u.default))}}),Rt=ee({name:"QTabPanels",props:{...Tt,...ot},emits:Ct,setup(e,{slots:u}){const h=Z(),c=rt(e,h.proxy.$q),{updatePanelsList:o,getPanelContent:n,panelDirectives:r}=wt(),p=m(()=>"q-tab-panels q-panel-parent"+(c.value===!0?" q-tab-panels--dark q-dark":""));return()=>(o(u),it("div",{class:p.value},n(),"pan",e.swipeable,()=>r.value))}});export{_t as Q,St as a,Rt as b,At as c};
