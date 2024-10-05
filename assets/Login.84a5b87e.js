import{d as c,_ as m,o as _,c as g,n as v,r as w,e,f as s,u as y,g as p,w as n,Q as V,a as f,P as h,T as k,h as Q,i as b,j as $,k as R}from"./index.0eec7d61.js";import{Q as C,a as x,b as B,c as T}from"./QTabPanels.3eb570ed.js";import{u as L}from"./use-quasar.1f64cd0a.js";import{a as N}from"./axios.fd32a7ae.js";import"./touch.69376c6d.js";import"./selection.4a7e3af3.js";import"./use-render-cache.3aae9b27.js";const P=c({name:"RectanguloRedondo",props:{width:{type:Number,default:100},color:{type:String,default:"#4daf6e"},rotate:{type:Number,default:0},top:{type:Number,default:0},right:{type:Number,default:0}},setup(){return{}},computed:{cssVars(){return{width:`${this.$props.width}px`,"background-color":this.color,rotate:`${this.$props.rotate}deg`,top:`${this.top}%`,right:`${this.right}%`}}}});function I(t,o,l,i,u,r){return _(),g("div",{class:"rec-border",style:v(t.cssVars)},null,4)}var U=m(P,[["render",I]]);const q=c({name:"BackgroundLogin",components:{RectanguloRedondo:U}}),S={class:"fit"},z=s("br",null,null,-1);function j(t,o,l,i,u,r){const d=w("RectanguloRedondo");return _(),g("div",S,[z,e(d,{width:1e3,rotate:150,top:-10,right:-39}),e(d,{width:1e3,rotate:150,top:-10,right:-39}),e(d,{width:1e3,rotate:150,top:-10,right:-25}),e(d,{width:1e3,rotate:150,top:-10,right:-53})])}var A=m(q,[["render",j]]);const F=c({name:"loginPage",components:{BackgroundLogin:A},setup(){const t=L(),o=y(),l=p(""),i=p(""),u=()=>{f.show(),N.post("usuarios/login",{user:l.value,password:i.value}).then(r=>{f.hide(),r.data.access_token!==null?(h.set("token",r.data.access_token),h.set("user",l.value),o.replace("/")):t.notify({message:r.data.msg,color:"negative",position:"top",icon:"warning",timeout:2500})})};return{tab:p("admin"),user:l,password:i,login:u}}}),E={class:"fullscreen"},O={class:"full-width"},D=s("br",null,null,-1),G=s("div",{class:"text-h6 text-center q-pb-none"},"Login",-1),H=s("br",null,null,-1),J=s("br",null,null,-1),K={class:"row justify-center"};function M(t,o,l,i,u,r){const d=w("BackgroundLogin");return _(),g("div",E,[e(d),e(V,{class:"fixed-center shadow-10 bg-grey-9 card-login q-pa-sm",style:{width:"30%"}},{default:n(()=>[s("div",O,[e(k,{appear:"","enter-active-class":"animated bounceIn",duration:3e3},{default:n(()=>[e(Q,{size:"70px","font-size":"50px",color:"dark","text-color":"white",icon:"person",class:"absolute",style:v(["top:-40px",t.$q.screen.width<=1400?"left:12vw":"left:13vw"])},null,8,["style"])]),_:1})]),e(b,null,{default:n(()=>[D,G]),_:1}),e(C,{modelValue:t.tab,"onUpdate:modelValue":o[0]||(o[0]=a=>t.tab=a),dense:""},{default:n(()=>[e(x,{name:"admin",icon:"pix",label:"CONTA-FISTIC"})]),_:1},8,["modelValue"]),e(B,{modelValue:t.tab,"onUpdate:modelValue":o[3]||(o[3]=a=>t.tab=a),animated:""},{default:n(()=>[e(T,{name:"admin"},{default:n(()=>[e(b,null,{default:n(()=>[e($,{modelValue:t.user,"onUpdate:modelValue":o[1]||(o[1]=a=>t.user=a),type:"text",label:"Usuario",standout:"",dense:"",rounded:""},null,8,["modelValue"]),H,e($,{modelValue:t.password,"onUpdate:modelValue":o[2]||(o[2]=a=>t.password=a),type:"text",label:"Contrase\xF1a",standout:"",dense:"",rounded:""},null,8,["modelValue"]),J,s("div",K,[e(R,{color:"primary",label:"Ingresar",onClick:t.login,rounded:""},null,8,["onClick"])])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})])}var ae=m(F,[["render",M]]);export{ae as default};
