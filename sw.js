if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,f)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let r={};const d=e=>a(e,i),b={module:{uri:i},exports:r,require:d};s[i]=Promise.all(c.map((e=>b[e]||d(e)))).then((e=>(f(...e),r)))}}define(["./workbox-37fde244"],(function(e){"use strict";e.setCacheNameDetails({prefix:"frontend-conta"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/axios.fc123eb4.js",revision:"02371fe37e739a74b1278a3a5323b2bd"},{url:"assets/CargaComprasPage.c39e8e57.js",revision:"c7c877bd7510fa92a0680ec1f0c48697"},{url:"assets/CargaComprasPage.dea5d464.css",revision:"424b865da87c2767226bf6fd1b047bdb"},{url:"assets/CargaVentasPage.990c9240.css",revision:"9ae8917000c85d6443847704d659a50e"},{url:"assets/CargaVentasPage.c399b002.js",revision:"2aa951afd6b856aa9e8df4f46b880a4d"},{url:"assets/ClosePopup.559b274b.js",revision:"ffec3aecc366fd54f5c21c8bc14f6246"},{url:"assets/ContadoresPage.19d19bae.js",revision:"48d65b7a64a46a309105c71cd0389926"},{url:"assets/ContribuyentePage.19bcf9df.js",revision:"bfe271ed29e7c9ecd6c4696055cc00b8"},{url:"assets/Cuentas1Page.620f7c27.js",revision:"48371f26738fc36096a3bb60333c748e"},{url:"assets/Cuentas2Page.5d5f47b0.js",revision:"654176286a2966ba6397078c6e341060"},{url:"assets/Cuentas3Page.81bd0f8d.js",revision:"1edcc7d30b7404428cec4af94612ba8c"},{url:"assets/Cuentas4Page.17f98bd7.js",revision:"a4f4a6219646e97739fb8b4b60831b3e"},{url:"assets/CuentasxNivelPage.4158c105.js",revision:"d7e7c6c73d5434807a321b3b89a40720"},{url:"assets/EmpresaPage.871f33fb.js",revision:"ca9f64ece9e96525d7159aa6066c3328"},{url:"assets/ErrorNotFound.4059f33f.js",revision:"3844e0604d60ee524064760a9427447c"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/IDPPage.720d0fc4.js",revision:"ed36eb55a2ef364877c01cb01ecbd513"},{url:"assets/ImpuestosPage.6ac4a1eb.js",revision:"c91d0efb623cd2554750d6d42432efec"},{url:"assets/index.a0127471.css",revision:"fdb8d35234aa61da626fff744ebf566d"},{url:"assets/index.b7a0f49f.js",revision:"e1111c9f16fcef3b30311ea013a2dbe3"},{url:"assets/IndexPage.997d639f.js",revision:"bebffb0098164457672f9b012a9c5ff2"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/ListadoEmpresasPage.1ce92656.js",revision:"b5982d8b9b60eb9d8c0669dca74900ff"},{url:"assets/Login.3b705c44.css",revision:"77312aaedbb68e3bde4b35a46b2f5b71"},{url:"assets/Login.8fb3fa24.js",revision:"05fb37a7002842d046d3597011e77da2"},{url:"assets/MainLayout.3170762f.js",revision:"d63203e5ad7d1c5ff99a92641ba3b5fe"},{url:"assets/MainLayout.ed804036.css",revision:"4192c42d7e8604bd2b268e456be38712"},{url:"assets/PartidasManuales.09a1c5d1.js",revision:"fffbfdecf682396eb7d6c57451b36f70"},{url:"assets/PartidasManuales.80865493.css",revision:"7be1bd8ca34749ff7d1ccfc9395fe8be"},{url:"assets/QBar.360f72e1.js",revision:"7716dde638f683116cf525722fcc33dc"},{url:"assets/QBreadcrumbs.9dce50f8.js",revision:"5eaa23aa277ccf5cc012653d8d8843f0"},{url:"assets/QForm.b62cf44e.js",revision:"b23623043fdb8ff88cfdabb38be90486"},{url:"assets/QList.ded89f79.js",revision:"258422ff9c016f35002cfa1e8cce6a97"},{url:"assets/QPage.276c235c.js",revision:"b73f30d371b829e4502572ceee7d0880"},{url:"assets/QSelect.af203fe3.js",revision:"865b73bf98a3bf583185aff86953061d"},{url:"assets/QSpinnerBall.5106a101.js",revision:"a35a37f820772ce3ca819bdcf38dd9ec"},{url:"assets/QTable.ecc9fb65.js",revision:"79f4d9c6e207bbcaf75e444215f6e83d"},{url:"assets/QTabPanels.3f9cb303.js",revision:"cfefa52efcb68efdbe15c161c3ed45c3"},{url:"assets/QTr.42f3208e.js",revision:"905a2856f09f9cd362e78406d19509fe"},{url:"assets/ReportesPage.37a3ee5e.js",revision:"8e66880b6d8aa412c00ba5bdc9f1cf53"},{url:"assets/selection.826139a0.js",revision:"121325fb4bb2b4c7deb186024009d9a5"},{url:"assets/touch.2c331f22.js",revision:"3497e3dfee4094a470a78e955c6b4c03"},{url:"assets/use-quasar.a4da79c4.js",revision:"cd74d56c8b92a479c9aa89cedb298ec3"},{url:"assets/use-render-cache.3aae9b27.js",revision:"38cc2d5d6134dee46cbc1c43bd1add15"},{url:"assets/UsuariosPage.d52d337b.js",revision:"f2a46929959795e26b414a924df518d2"},{url:"assets/xlsx.dca9f824.js",revision:"6fce3af7c3c8c2d44559a8bcad605ff7"},{url:"favicon.ico",revision:"f4facfeaed834544d622544acfbb7722"},{url:"icons/apple-icon-120x120.png",revision:"d082235f6e6d2109e84e397f66fa868d"},{url:"icons/apple-icon-152x152.png",revision:"3c728ce3e709b7395be487becf76283a"},{url:"icons/apple-icon-167x167.png",revision:"3fec89672a18e4b402ede58646917c2d"},{url:"icons/apple-icon-180x180.png",revision:"aa47843bd47f34b7ca4b99f65dd25955"},{url:"icons/favicon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/favicon-16x16.png",revision:"e4b046d41e08e6fa06626d6410ab381d"},{url:"icons/favicon-32x32.png",revision:"410858b01fa6d3d66b7bf21447c5f1fc"},{url:"icons/favicon-96x96.png",revision:"db2bde7f824fb4057ffd1c42f6ed756e"},{url:"icons/icon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/icon-192x192.png",revision:"7659f0d3e9602e71811f8b7cf2ce0e8e"},{url:"icons/icon-256x256.png",revision:"cf5ad3498fb6fda43bdafd3c6ce9b824"},{url:"icons/icon-384x384.png",revision:"fdfc1b3612b6833a27a7b260c9990247"},{url:"icons/icon-512x512.png",revision:"2c2dc987945806196bd18cb6028d8bf4"},{url:"icons/ms-icon-144x144.png",revision:"8de1b0e67a62b881cd22d935f102a0e6"},{url:"icons/safari-pinned-tab.svg",revision:"3e4c3730b00c89591de9505efb73afd3"},{url:"index.html",revision:"1cf6dd571a2294e2ddec6864f81f4652"},{url:"manifest.json",revision:"fe0dcad76276b559d0e6cb331dc6994d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
