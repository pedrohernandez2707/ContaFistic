if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(s[f])return;let d={};const r=e=>a(e,f),b={module:{uri:f},exports:d,require:r};s[f]=Promise.all(c.map((e=>b[e]||r(e)))).then((e=>(i(...e),d)))}}define(["./workbox-37fde244"],(function(e){"use strict";e.setCacheNameDetails({prefix:"frontend-conta"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/axios.23fd2c5d.js",revision:"7099a5dbdadf3be9afeb57b87664a7fa"},{url:"assets/CargaComprasPage.3361b9df.js",revision:"abb87f10bc3a5336a93c133db3392686"},{url:"assets/CargaComprasPage.978df0da.css",revision:"eca0d4adb3d0ede8e80cd945eef32eef"},{url:"assets/CargaVentasPage.1bb1bfbf.js",revision:"aa04a83bd4875612ee66af29bec0d35f"},{url:"assets/CargaVentasPage.990c9240.css",revision:"9ae8917000c85d6443847704d659a50e"},{url:"assets/ClosePopup.995d2948.js",revision:"07d4cbf37c5b15279300818b3bcb7f93"},{url:"assets/ContadoresPage.47ac1023.js",revision:"8fde6babc3644255b5ff6fcf3d9e4897"},{url:"assets/ContribuyentePage.7b504d73.js",revision:"53a21eb6be6113ba911faabdb616073d"},{url:"assets/Cuentas1Page.ace842b4.js",revision:"34081d1df505366670218a6c19289462"},{url:"assets/Cuentas2Page.89d5248d.js",revision:"01f13bd5baed95d38658eef9884154d2"},{url:"assets/Cuentas3Page.48a38c05.js",revision:"92f63680fbedc83c43171f33de5581e7"},{url:"assets/Cuentas4Page.fbda06a8.js",revision:"6aa030ce946829a3951512c2eda8946c"},{url:"assets/CuentasxNivelPage.98b06b85.js",revision:"c23a2d63ba144fd5faa4055be7fdf9c4"},{url:"assets/EmpresaPage.f4187264.js",revision:"107fa7c53b4e832884dd158033ccc991"},{url:"assets/ErrorNotFound.6e2c853e.js",revision:"d479c4603f32c92150039129bbe893c6"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/IDPPage.d81e9471.js",revision:"fbb5c0b2d473949ee12ff89ad469ce86"},{url:"assets/ImpuestosPage.de931d24.js",revision:"b0a865b5a5cee15b4ecbee1f0a5e1bb3"},{url:"assets/index.a0127471.css",revision:"fdb8d35234aa61da626fff744ebf566d"},{url:"assets/index.de91045c.js",revision:"29f58e986c43d566f2a2f58a9a1b031e"},{url:"assets/IndexPage.e0862bcc.js",revision:"5a22a1fabbe61bbfce1c86dca5ed6c79"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/ListadoEmpresasPage.cea99f8e.js",revision:"e7943507fe1665aa153a17a235555d74"},{url:"assets/Login.3b705c44.css",revision:"77312aaedbb68e3bde4b35a46b2f5b71"},{url:"assets/Login.f5858917.js",revision:"a036b739bbbd068c2a5daf475c339612"},{url:"assets/MainLayout.a1329633.js",revision:"b87a0c1a73e4ce79d459f73e2236c535"},{url:"assets/MainLayout.ed804036.css",revision:"4192c42d7e8604bd2b268e456be38712"},{url:"assets/PartidasManuales.80865493.css",revision:"7be1bd8ca34749ff7d1ccfc9395fe8be"},{url:"assets/PartidasManuales.8fb9e574.js",revision:"30e693c495c510ebf3b73bcca3592a2f"},{url:"assets/QBar.9701de92.js",revision:"79a1688c2ad5d8d17c94ee2bf0778833"},{url:"assets/QBreadcrumbs.bb25b630.js",revision:"b9262f905de543e617f77f8ec9b304a1"},{url:"assets/QForm.a37c3e13.js",revision:"9b7aeff9dd834df155fc9968b949041d"},{url:"assets/QList.35154e5b.js",revision:"586d9d08414f0704c66dc42da06192a6"},{url:"assets/QPage.c00b98e2.js",revision:"e6cc3929bffad5d0ffaced3107294732"},{url:"assets/QResizeObserver.4fed0a9a.js",revision:"91d4aafb27e7e0bef9b0555c7c13111a"},{url:"assets/QSelect.2ed87d02.js",revision:"be2fda58948915f42377559d99421ac8"},{url:"assets/QSpinnerBall.16c3a4f2.js",revision:"523079dd1dff6f4acba091923b2612bb"},{url:"assets/QTable.ff5ff233.js",revision:"d561f7d977501f3f6ed634c4f337f475"},{url:"assets/QTabPanels.90c7ef57.js",revision:"c32eecce2ef436a58e36da64f554059e"},{url:"assets/ReportesPage.638550df.js",revision:"40968f2ef6e32ff2da605dc50a66802c"},{url:"assets/selection.4860df2b.js",revision:"77603263b67ea0cc09641aab994cb1a1"},{url:"assets/use-quasar.1288554d.js",revision:"f3a5b7b3f17564bdd33c569dc43d8b02"},{url:"assets/use-render-cache.3aae9b27.js",revision:"38cc2d5d6134dee46cbc1c43bd1add15"},{url:"assets/UsuariosPage.b3431608.js",revision:"0b130eb6c401c17fe596d1c74efbb642"},{url:"assets/xlsx.28f2cdde.js",revision:"2e980c96281ece48d7876e15016042da"},{url:"favicon.ico",revision:"f4facfeaed834544d622544acfbb7722"},{url:"icons/apple-icon-120x120.png",revision:"d082235f6e6d2109e84e397f66fa868d"},{url:"icons/apple-icon-152x152.png",revision:"3c728ce3e709b7395be487becf76283a"},{url:"icons/apple-icon-167x167.png",revision:"3fec89672a18e4b402ede58646917c2d"},{url:"icons/apple-icon-180x180.png",revision:"aa47843bd47f34b7ca4b99f65dd25955"},{url:"icons/favicon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/favicon-16x16.png",revision:"e4b046d41e08e6fa06626d6410ab381d"},{url:"icons/favicon-32x32.png",revision:"410858b01fa6d3d66b7bf21447c5f1fc"},{url:"icons/favicon-96x96.png",revision:"db2bde7f824fb4057ffd1c42f6ed756e"},{url:"icons/icon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/icon-192x192.png",revision:"7659f0d3e9602e71811f8b7cf2ce0e8e"},{url:"icons/icon-256x256.png",revision:"cf5ad3498fb6fda43bdafd3c6ce9b824"},{url:"icons/icon-384x384.png",revision:"fdfc1b3612b6833a27a7b260c9990247"},{url:"icons/icon-512x512.png",revision:"2c2dc987945806196bd18cb6028d8bf4"},{url:"icons/ms-icon-144x144.png",revision:"8de1b0e67a62b881cd22d935f102a0e6"},{url:"icons/safari-pinned-tab.svg",revision:"3e4c3730b00c89591de9505efb73afd3"},{url:"index.html",revision:"67138519747cd7c27523d80602d70f89"},{url:"manifest.json",revision:"fe0dcad76276b559d0e6cb331dc6994d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
