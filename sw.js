if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,d)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let f={};const r=e=>a(e,i),b={module:{uri:i},exports:f,require:r};s[i]=Promise.all(c.map((e=>b[e]||r(e)))).then((e=>(d(...e),f)))}}define(["./workbox-37fde244"],(function(e){"use strict";e.setCacheNameDetails({prefix:"frontend-conta"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/axios.56cd7776.js",revision:"7d402ce71d2f00ddef32769e4f807760"},{url:"assets/CargaComprasPage.073bf879.js",revision:"42e8bd790d09c7128eb59e897c7ed843"},{url:"assets/CargaComprasPage.90f88588.css",revision:"4e48c8b7cabbdfaf35df12382ea1b513"},{url:"assets/CargaVentasPage.6b47287c.js",revision:"730e03b955fc0eed6ad02391979f6e36"},{url:"assets/CargaVentasPage.dcc56ccc.css",revision:"00a79097cf05d374197a884bd01cdff3"},{url:"assets/ClosePopup.84a65911.js",revision:"689c3e2c40052dbc107c5ebe68da5ec8"},{url:"assets/ContadoresPage.6521d0f7.js",revision:"ad5473f73c4a5ceb06aea1b8ce8e5d4e"},{url:"assets/ContribuyentePage.2a8499fb.js",revision:"b2d70ae2465e1c15f112f0780aed8b77"},{url:"assets/Cuentas1Page.5d210dab.js",revision:"bb1f128e8d9be710e0fa69a6107b164e"},{url:"assets/Cuentas2Page.b73d99c0.js",revision:"9b4173d5fcd6a5a0a5bee743370c0242"},{url:"assets/Cuentas3Page.32c2dab6.js",revision:"1809eca74188f6ff891a98f9ab2787a7"},{url:"assets/Cuentas4Page.70cc64ef.js",revision:"39c6026853cea489b7a18bb0a1e23769"},{url:"assets/CuentasxNivelPage.4889b3ea.js",revision:"82563795caa5ecd9d4f981e6c27b8cfe"},{url:"assets/EmpresaPage.214d57ad.js",revision:"9b4eba32ef1cc82da996bc6c02f38949"},{url:"assets/ErrorNotFound.7ca2d6bf.js",revision:"5a1a04dd3c4fae51dbc0a49bcf84e40a"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/IDPPage.ee6142a1.js",revision:"a28d7ea6795a7b1d88425621a4b0522a"},{url:"assets/ImpuestosPage.a84393a6.js",revision:"27c96bd853d6fa9f11fed7ebe899369f"},{url:"assets/index.a0127471.css",revision:"fdb8d35234aa61da626fff744ebf566d"},{url:"assets/index.bb4f25cd.js",revision:"adb2eb089d9d35d0ca332058737b132d"},{url:"assets/IndexPage.eeae942a.js",revision:"bd9e9f4dda873a1ac96d1668984fada6"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/ListadoEmpresasPage.14391dcc.js",revision:"122a118d53f058249146dd9fdd99dcab"},{url:"assets/Login.3b705c44.css",revision:"77312aaedbb68e3bde4b35a46b2f5b71"},{url:"assets/Login.9cd5c0e5.js",revision:"a1d8a9450f55365281bdc699f2ea45dc"},{url:"assets/MainLayout.bc0ae4ef.js",revision:"e24cba963642de9cb0882be8a3b4642b"},{url:"assets/MainLayout.ed804036.css",revision:"4192c42d7e8604bd2b268e456be38712"},{url:"assets/PartidasManuales.0a89d79d.js",revision:"aecce6320e58a8b731607c67aeafa416"},{url:"assets/PartidasManuales.71091555.css",revision:"8605835565e643aee302bc9503632da3"},{url:"assets/QBar.12c6d973.js",revision:"5e25dce7a50929468808c29e40c236dc"},{url:"assets/QBreadcrumbs.303160ea.js",revision:"4945cdbe37ef42344b6f1db083e884d9"},{url:"assets/QForm.85efcecc.js",revision:"8e2eb3a872565a5a9ba36f21c795dd80"},{url:"assets/QList.821f935d.js",revision:"5b5e6598a00dd75da5ec3cfa0f3bd7da"},{url:"assets/QPage.4580f26c.js",revision:"67880d2573bba828adbff9a7c0cbb365"},{url:"assets/QSelect.88e97e4b.js",revision:"c27860e2978410c65097f8d1a85fdf50"},{url:"assets/QSpinnerBall.2b73fa74.js",revision:"3f13a8f26f566f7f79894332572e55c9"},{url:"assets/QTable.5706489b.js",revision:"62643faac713b05bdd2e2dc40de7cb3b"},{url:"assets/QTabPanels.effad126.js",revision:"944a57472fb38895fa1ab6301062453b"},{url:"assets/QTr.ad652ebc.js",revision:"5ff7b3717e0230a788a4448dc9d8fb9b"},{url:"assets/ReportesPage.43199575.js",revision:"9ddb4a55de697b1f19a963d2ee098f0c"},{url:"assets/selection.32bb6442.js",revision:"50147ea89672042331a219cc9decd378"},{url:"assets/touch.70011ee4.js",revision:"0f4c9da8ef318c803233d64fff388b5d"},{url:"assets/use-quasar.b10c2e6a.js",revision:"10b0ec3fbfc432d04c4bdfd86aabd47b"},{url:"assets/use-render-cache.3aae9b27.js",revision:"38cc2d5d6134dee46cbc1c43bd1add15"},{url:"assets/UsuariosPage.2ebc0198.js",revision:"ccdaa1a84b36abbf1163bc60f325c0df"},{url:"assets/xlsx.4f7f7baa.js",revision:"a9403e98868cb9d8c214bc5a76f886a9"},{url:"favicon.ico",revision:"f4facfeaed834544d622544acfbb7722"},{url:"icons/apple-icon-120x120.png",revision:"d082235f6e6d2109e84e397f66fa868d"},{url:"icons/apple-icon-152x152.png",revision:"3c728ce3e709b7395be487becf76283a"},{url:"icons/apple-icon-167x167.png",revision:"3fec89672a18e4b402ede58646917c2d"},{url:"icons/apple-icon-180x180.png",revision:"aa47843bd47f34b7ca4b99f65dd25955"},{url:"icons/favicon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/favicon-16x16.png",revision:"e4b046d41e08e6fa06626d6410ab381d"},{url:"icons/favicon-32x32.png",revision:"410858b01fa6d3d66b7bf21447c5f1fc"},{url:"icons/favicon-96x96.png",revision:"db2bde7f824fb4057ffd1c42f6ed756e"},{url:"icons/icon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/icon-192x192.png",revision:"7659f0d3e9602e71811f8b7cf2ce0e8e"},{url:"icons/icon-256x256.png",revision:"cf5ad3498fb6fda43bdafd3c6ce9b824"},{url:"icons/icon-384x384.png",revision:"fdfc1b3612b6833a27a7b260c9990247"},{url:"icons/icon-512x512.png",revision:"2c2dc987945806196bd18cb6028d8bf4"},{url:"icons/ms-icon-144x144.png",revision:"8de1b0e67a62b881cd22d935f102a0e6"},{url:"icons/safari-pinned-tab.svg",revision:"3e4c3730b00c89591de9505efb73afd3"},{url:"index.html",revision:"7e310bfd5842db1d99f283c0fbdbb36f"},{url:"manifest.json",revision:"fe0dcad76276b559d0e6cb331dc6994d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
