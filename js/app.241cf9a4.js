(function(){"use strict";var a={9079:function(a,e,t){var s=t(9242),n=t(1076),o=t(6423),r=t(5513),i=t.n(r),l=(t(2166),t(5708)),d=t(3990),c=t(579),u=t(2389),p=t(1618),m=t(3396);function g(a,e,t,s,n,o){const r=(0,m.up)("NavBar"),i=(0,m.up)("router-view"),l=(0,m.up)("FooTer");return(0,m.wg)(),(0,m.iD)(m.HY,null,[(0,m.Wm)(r),n.isRouterAlive?((0,m.wg)(),(0,m.j4)(i,{key:0,class:"body"})):(0,m.kq)("",!0),(0,m.Wm)(l)],64)}var b=t(7139);const f={class:"bg-dark sticky-top"},v={class:"container"},h={class:"navbar navbar-expand-lg bg-dark p-0 d-flex justify-content-between"},w={class:"m-0 navbar-brand"},_={class:"dropdown ms-auto order-lg-2 order-lg-3 mx-2 mx-lg-0"},x=(0,m._)("a",{class:"p-3",type:"button",id:"cart","data-bs-toggle":"dropdown","aria-expanded":"false"},[(0,m._)("i",{class:"bi bi-cart-fill"}),(0,m._)("span",{class:"d-none"},"1")],-1),k={class:"dropdown-menu dropdown-menu-end bg-light","aria-labelledby":"cart"},y={class:"px-2"},j={class:"table text-nowrap"},C=(0,m._)("thead",null,[(0,m._)("tr",{class:"text-center"},[(0,m._)("th",{scope:"col",colspan:"5",class:"fs-5 text-dark"},"購物車清單")])],-1),W={class:"text-dark"},L={class:"text-dark"},T={class:"text-right text-dark"},P=["onClick","disabled"],B=(0,m._)("i",{class:"bi bi-x"},null,-1),O=[B],E={class:"d-flex justify-content-end mx-2"},M=(0,m._)("button",{class:"navbar-toggler bg-warning",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo01","aria-controls":"navbarTogglerDemo01","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,m._)("span",{class:"navbar-toggler-icon"})],-1),U={class:"collapse navbar-collapse",id:"navbarTogglerDemo01"},D={class:"navbar-nav ms-lg-auto"},I={class:"nav-item mx-2"},H={class:"nav-item dropdown mx-2"},A=(0,m._)("a",{class:"nav-link dropdown-toggle fs-6 nav-style",href:"#",id:"navbarDropdownMenuLink",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}," 商品一覽 ",-1),S={class:"dropdown-menu","aria-labelledby":"navbarDropdownMenuLink"},Z={class:"nav-item mx-2"},$={class:"nav-item dropdown mx-2"},z=(0,m._)("a",{class:"nav-link dropdown-toggle nav-style",href:"#",id:"navbarDropdownMenuLink",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}," 購買相關 ",-1),R={class:"dropdown-menu","aria-labelledby":"navbarDropdownMenuLink"};function F(a,e,t,n,o,r){const i=(0,m.up)("router-link");return(0,m.wg)(),(0,m.iD)("div",f,[(0,m._)("div",v,[(0,m._)("nav",h,[(0,m._)("h1",w,[(0,m.Wm)(i,{to:"/",class:"hide-text"},{default:(0,m.w5)((()=>[(0,m.Uk)("TwoTIRE貳輪精品")])),_:1})]),(0,m._)("div",_,[x,(0,m._)("div",k,[(0,m._)("div",y,[(0,m._)("table",j,[C,(0,m._)("tbody",W,[((0,m.wg)(!0),(0,m.iD)(m.HY,null,(0,m.Ko)(o.cart.carts,(e=>((0,m.wg)(),(0,m.iD)("tr",{key:e.id},[(0,m._)("td",null,(0,b.zw)(e.product.title),1),(0,m._)("td",L,(0,b.zw)(e.qty)+"件",1),(0,m._)("td",T," $"+(0,b.zw)(a.$filters.currency(e.product.price)),1),(0,m._)("td",null,[(0,m._)("button",{class:"btn btn-outline-danger btn-sm",type:"button",onClick:a=>r.removeCartItem(e.id),disabled:e.id===o.status.loadingItem},O,8,P)])])))),128))])]),(0,m._)("div",E,[(0,m._)("a",{href:"#",class:(0,b.C_)(["btn btn-primary btn-block",{disabled:1==o.cartWarning}]),onClick:e[0]||(e[0]=(0,s.iM)(((...a)=>r.goBuy&&r.goBuy(...a)),["prevent"]))},"結帳去",2)])])])]),M,(0,m._)("div",U,[(0,m._)("ul",D,[(0,m._)("li",I,[(0,m.Wm)(i,{to:"/",class:"nav-link nav-style","active-class":"active"},{default:(0,m.w5)((()=>[(0,m.Uk)("首頁")])),_:1})]),(0,m._)("li",H,[A,(0,m._)("ul",S,[(0,m._)("li",null,[(0,m.Wm)(i,{to:"/product/All",class:"dropdown-item py-2 nav-style"},{default:(0,m.w5)((()=>[(0,m.Uk)("所有商品")])),_:1})]),(0,m._)("li",null,[(0,m.Wm)(i,{to:"/product/Helmet",class:"dropdown-item py-2",href:"#"},{default:(0,m.w5)((()=>[(0,m.Uk)("安全帽")])),_:1})]),(0,m._)("li",null,[(0,m.Wm)(i,{to:"/product/Jacket",class:"dropdown-item py-2",href:"#"},{default:(0,m.w5)((()=>[(0,m.Uk)("上衣")])),_:1})]),(0,m._)("li",null,[(0,m.Wm)(i,{to:"/product/Gloves",class:"dropdown-item py-2",href:"#"},{default:(0,m.w5)((()=>[(0,m.Uk)("手套")])),_:1})]),(0,m._)("li",null,[(0,m.Wm)(i,{to:"/product/Boots",class:"dropdown-item py-2",href:"#"},{default:(0,m.w5)((()=>[(0,m.Uk)("靴子")])),_:1})])])]),(0,m._)("li",Z,[(0,m.Wm)(i,{to:"/brand",class:"nav-link nav-style","aria-current":"page",href:"#"},{default:(0,m.w5)((()=>[(0,m.Uk)("關於我們")])),_:1})]),(0,m._)("li",$,[z,(0,m._)("ul",R,[(0,m._)("li",null,[(0,m.Wm)(i,{to:"/oderTracking",class:"dropdown-item py-2",href:"#"},{default:(0,m.w5)((()=>[(0,m.Uk)("訂單查詢")])),_:1})]),(0,m._)("li",null,[(0,m.Wm)(i,{to:"/problem",class:"dropdown-item py-2",href:"#"},{default:(0,m.w5)((()=>[(0,m.Uk)("常見問題")])),_:1})])])])])])])])])}t(560);var N=t(5820),q={data(){return{cart:[],status:{loadingItem:""},cartWarning:!0}},provide(){return{emitter:N.Z}},inject:["emitter"],methods:{getCart(){const a="https://vue3-course-api.hexschool.io/api/twotire-api/cart";this.isLoading=!0,this.$http.get(a).then((a=>{this.isLoading=!1,a.data.success&&(this.cart=a.data.data,0===this.cart.total?this.cartWarning=!0:this.cartWarning=!1)}))},removeCartItem(a){this.status.loadingItem=a;const e=`https://vue3-course-api.hexschool.io/api/twotire-api/cart/${a}`;this.isLoading=!0,this.$http.delete(e).then((()=>{this.getCart(),this.status.loadingItem="",this.isLoading=!1,N.Z.emit("updateCart")}))},goBuy(){this.$router.push("/cart")}},created(){N.Z.on("updateCart",(()=>{this.getCart()}))},mounted(){this.getCart()}},G=t(89);const Y=(0,G.Z)(q,[["render",F]]);var J=Y;const V={class:"bg-dark m-0 sticky-footer footer"},K=(0,m.uE)('<div class="text-center"><div class="py-2"><a href="#" class="link-warning mx-2"><span class="d-none">A</span><i class="bi bi-github fs-1"></i></a><a href="#" class="link-warning mx-2"><span class="d-none">B</span><i class="bi bi-instagram fs-1"></i></a><a href="#" class="link-warning mx-2"><span class="d-none">C</span><i class="bi bi-facebook fs-1"></i></a></div><p class="text-warning m-0 justify-content-center pb-2"> © 2024 TwoTIRE by Hatchi <br>本網頁僅練習使用，無任何商業用途 </p></div>',1),Q=[K];function X(a,e){return(0,m.wg)(),(0,m.iD)("div",V,Q)}const aa={},ea=(0,G.Z)(aa,[["render",X]]);var ta=ea,sa={name:"App",provide(){return{reload:this.reload}},data(){return{isRouterAlive:!0}},components:{NavBar:J,FooTer:ta},methods:{reload(){this.isRouterAlive=!1,this.$nextTick((()=>{this.isRouterAlive=!0}))}}};const na=(0,G.Z)(sa,[["render",g]]);var oa=na,ra=t(2483),ia=t.p+"media/background.9a0d18e7.mp4",la=t.p+"img/homeCard-1.a7962613.jpg",da=t.p+"img/homeCard-2.a3d7009b.jpg",ca=t.p+"img/homeCard-3.f7fc074f.jpg",ua=t.p+"img/homeCard-4.e6a78cdc.jpg",pa=t.p+"img/signboard-2.1b0cf585.jpg",ma=t.p+"img/signboard-3.5a0d88ef.jpg",ga=t.p+"img/signboard-6.f9ba67a4.jpg",ba=t.p+"img/signboard-4.0b097e2b.jpg",fa=t.p+"img/signboard-5.790cdd91.jpg",va=t.p+"img/signboard-7.c36e6ec3.jpg";const ha=(0,m.uE)('<div class="banner bg-dark d-none d-lg-block"><div class="bannerText rounded-4" data-aos="zoom-in" data-aos-delay="3000" data-aos-duration="3000" data-aos-easing="quad"><p class="text-warning fs-1 payBall p-5 text-center m-0">Rider Of Life</p></div><video autoplay muted loop class="m-0"><source src="'+ia+'"></video></div><div class="bg-success py-lg-4 parallax section"><div class="container"><div class="row"><div class="col-11 col-lg-5 mt-3 ms-3 ms-lg-6 p-lg-3" data-aos="fade-up" data-aos-duration="2000" data-aos-offset="350" data-aos-once="false"><h2 class="text-warning fst-italic fw-normal shadow-sm">騎車也是生活的一部份</h2><p class="m-0 fs-5 text-warning fst-italic fw-light lh-lg"> 當跨坐上車的瞬間，自由的靈魂伴隨著引擎聲馳騁在公路上，皮夾克流露出騎士的熱血，叛逆不羈的特質更能彰顯個性及品味。 </p></div></div></div></div>',2),wa={class:"bg-dark border-top border-bottom border-5 border-dark"},_a={class:"container pb-2"},xa=(0,m._)("div",{class:"row"},[(0,m._)("div",{class:"col"},[(0,m._)("h2",{class:"text-center my-4 text-warning payBall"},"Catagories")])],-1),ka={class:"row gy-3 gx-3 mb-2 mb-lg-4"},ya={class:"col-6 col-lg-3"},ja={class:"card bg-primary box shadow"},Ca=(0,m._)("img",{src:la,class:"card-img-top rounded-2",alt:"風格安全帽示意圖"},null,-1),Wa=(0,m._)("div",{class:"boxHover rounded-2"},[(0,m._)("p",{class:"payBall text-warning fs-3 mb-3 ms-4"},"Helmet")],-1),La={class:"col-6 col-lg-3"},Ta={class:"card bg-primary box shadow"},Pa=(0,m._)("img",{src:da,class:"card-img-top rounded-2",alt:"風格皮衣示意圖"},null,-1),Ba=(0,m._)("div",{class:"boxHover rounded-2"},[(0,m._)("p",{class:"payBall text-warning fs-3 mb-3 ms-4"},"Jacket")],-1),Oa={class:"col-6 col-lg-3"},Ea={class:"card bg-primary box shadow"},Ma=(0,m._)("img",{src:ca,class:"card-img-top rounded-2",alt:"風格手套示意圖"},null,-1),Ua=(0,m._)("div",{class:"boxHover rounded-2"},[(0,m._)("p",{class:"payBall text-warning fs-3 mb-3 ms-4"},"Gloves")],-1),Da={class:"col-6 col-lg-3"},Ia={class:"card bg-primary box shadow"},Ha=(0,m._)("img",{src:ua,class:"card-img-top rounded-2",alt:"風格車靴示意圖"},null,-1),Aa=(0,m._)("div",{class:"boxHover rounded-2"},[(0,m._)("p",{class:"payBall text-warning fs-3 mb-3 ms-4"},"Boots")],-1),Sa={class:"bg-success back py-2 py-lg-4"},Za={class:"container"},$a={class:"row d-flex justify-content-center gx-3 gx-lg-5"},za={class:"col-6 col-lg-4 mt-3","data-aos":"fade-right","data-aos-easing":"ease-in-sine","data-aos-once":"false","data-aos-anchor-placement":"top-center","data-aos-duration":"500"},Ra=(0,m._)("div",{class:"ms-2 ms-lg-4"},[(0,m._)("h2",{class:"text-warning animate__backInLeft"},"打造屬於自己的獨特風格"),(0,m._)("p",{class:"p-0 fs-4 text-warning payBall"},"Personal Style")],-1),Fa=(0,m._)("img",{src:pa,class:"rounded-3 image-fluid hoverImg",alt:""},null,-1),Na=(0,m._)("img",{src:ma,class:"rounded-3 image-fluid",alt:""},null,-1),qa=(0,m.uE)('<div id="carouselExampleSlidesOnly" class="carousel slide carousel-fade d-block d-lg-none mb-2" data-bs-ride="carousel" data-bs-touch="false" data-bs-wrap="true"><div class="carousel-inner"><div class="carousel-item active" data-bs-interval="3000"><img src="'+pa+'" class="d-block w-100 rounded-3" alt=""></div><div class="carousel-item" data-bs-interval="3000"><img src="'+ma+'" class="d-block w-100 rounded-3" alt=""></div><div class="carousel-item" data-bs-interval="3000"><img src="'+ga+'" class="d-block w-100 rounded-3" alt=""></div></div></div>',1),Ga={class:"col-6 col-lg-4","data-aos":"fade-left","data-aos-easing":"ease-in-sine","data-aos-once":"false","data-aos-anchor-placement":"top-center","data-aos-duration":"500"},Ya=(0,m._)("img",{src:ba,class:"rounded-3 image-fluid hoverImg",alt:""},null,-1),Ja=(0,m._)("img",{src:fa,class:"rounded-3 image-fluid",alt:""},null,-1),Va=(0,m.uE)('<div id="carouselExampleSlidesOnly" class="carousel slide carousel-fade d-block d-lg-none mt-4" data-bs-ride="carousel" data-bs-touch="false" data-bs-wrap="true"><div class="carousel-inner"><div class="carousel-item active" data-bs-interval="4000"><img src="'+ba+'" class="d-block w-100 rounded-3" alt=""></div><div class="carousel-item" data-bs-interval="4000"><img src="'+fa+'" class="d-block w-100 rounded-3" alt=""></div><div class="carousel-item" data-bs-interval="4000"><img src="'+va+'" class="d-block w-100 rounded-3" alt=""></div></div></div><div><p class="p-0 payBall text-warning text-end fs-5 mt-4 mt-lg-5"> Common person, <br>Uncommon affair </p></div>',2),Ka=(0,m.uE)('<div class="bg-dark"><div class="container"><p class="m-0 fs-4 py-2 neon d-flex align-item-center justify-content-center"> 門市新開幕<i class="bi bi-exclamation-lg"></i>全館商品<span class="fs-4 fw-bold mx-lg-1">9</span>折<i class="bi bi-exclamation-lg"></i><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"> 點我領取 </button></p><div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header bg-success"><h5 class="modal-title text-warning fw-bold" id="exampleModalLabel">領取折價券</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"><p class="p-0 text-dark"> 新門市開幕，全館商品<span class="fs-4 fw-bold mx-1">9</span>折。<br> 到店即享<span class="fs-4 fw-bold mx-1">9</span>折優惠，網路門市輸入折扣碼: <span class="fs-4 text-danger">rider777</span></p></div></div></div></div></div></div>',1),Qa={class:"bg-primary"},Xa={class:"container"},ae=(0,m._)("h2",{class:"text-center text-warning py-3 m-0 payBall"},"Classic Legend",-1),ee={class:"card h-100"},te=["onClick"],se=["src"],ne={class:"card-body"},oe={class:"card-title text-dark m-0"},re={class:"card-footer border-0"},ie=["onClick","disabled"],le={key:0,class:"spinner-border text-dark spinner-border-sm",role:"status"},de=(0,m._)("span",{class:"visually-hidden"},"Loading...",-1),ce=[de];function ue(a,e,t,n,o,r){const i=(0,m.up)("LoadingPlugin"),l=(0,m.up)("router-link"),d=(0,m.up)("routerLink"),c=(0,m.up)("swiper-slide"),u=(0,m.up)("swiper-container"),p=(0,m.up)("HomeStore");return(0,m.wg)(),(0,m.iD)(m.HY,null,[(0,m.Wm)(i,{active:o.isLoading},null,8,["active"]),ha,(0,m._)("div",wa,[(0,m._)("div",_a,[xa,(0,m._)("div",ka,[(0,m._)("div",ya,[(0,m._)("div",ja,[Ca,(0,m.Wm)(l,{to:"/product/Helmet"},{default:(0,m.w5)((()=>[Wa])),_:1})])]),(0,m._)("div",La,[(0,m._)("div",Ta,[Pa,(0,m.Wm)(l,{to:"/product/Jacket"},{default:(0,m.w5)((()=>[Ba])),_:1})])]),(0,m._)("div",Oa,[(0,m._)("div",Ea,[Ma,(0,m.Wm)(l,{to:"/product/Gloves"},{default:(0,m.w5)((()=>[Ua])),_:1})])]),(0,m._)("div",Da,[(0,m._)("div",Ia,[Ha,(0,m.Wm)(l,{to:"/product/Boots"},{default:(0,m.w5)((()=>[Aa])),_:1})])])])])]),(0,m._)("div",Sa,[(0,m._)("div",Za,[(0,m._)("div",$a,[(0,m._)("div",za,[Ra,(0,m.Wm)(d,{to:"/product/All",class:"hoverBox d-none d-lg-block"},{default:(0,m.w5)((()=>[Fa,Na])),_:1}),qa]),(0,m._)("div",Ga,[(0,m.Wm)(d,{to:"/product/All",class:"hoverBox d-none d-lg-block"},{default:(0,m.w5)((()=>[Ya,Ja])),_:1}),Va])])])]),Ka,(0,m._)("div",Qa,[(0,m._)("div",Xa,[ae,(0,m.Wm)(u,{"slides-per-view":"2",breakpoints:{768:{slidesPerView:5}},pagination:"true",speed:"500",loop:"true",class:"row row-cols-3 row-cols-lg-9 justify-content-center gx-2 pb-3"},{default:(0,m.w5)((()=>[((0,m.wg)(!0),(0,m.iD)(m.HY,null,(0,m.Ko)(o.filterProducts,(a=>((0,m.wg)(),(0,m.j4)(c,{class:"col-4 col-lg-2",key:a.id},{default:(0,m.w5)((()=>[(0,m._)("div",ee,[(0,m._)("a",{href:"#",onClick:(0,s.iM)((e=>r.goProduct(a.id)),["prevent"])},[(0,m._)("img",{src:a.imageUrl,class:"card-img-top",alt:"產品圖示"},null,8,se)],8,te),(0,m._)("div",ne,[(0,m._)("h5",oe,(0,b.zw)(a.title),1)]),(0,m._)("div",re,[(0,m._)("button",{class:"btn btn-primary w-100",onClick:e=>r.goProduct(a.id),disabled:this.status.loadingItem===a.id},[this.status.loadingItem===a.id?((0,m.wg)(),(0,m.iD)("div",le,ce)):(0,m.kq)("",!0),(0,m.Uk)(" 查看更多 ")],8,ie)])])])),_:2},1024)))),128))])),_:1})])]),(0,m.Wm)(p)],64)}var pe=t(1331),me=t(6905),ge=t.n(me),be={name:"HomeView",data(){return{products:[],filterProducts:[],isLoading:!1,status:{loadingItem:"",loadingItemBuy:""},id:""}},components:{HomeStore:pe.Z},methods:{getProducts(){const a="https://vue3-course-api.hexschool.io/api/twotire-api/products/all";this.isLoading=!0,this.$http.get(a).then((a=>{if(this.isLoading=!1,a.data.success){function e(a){return Math.floor(Math.random()*a)}this.products=a.data.products;const t=new Set([]);for(let s=0;t.size<(this.products.length<5?this.products.length:5);s+1){const n=e(this.products.length);t.add(n)}t.forEach((a=>{this.filterProducts.push(this.products[a])}))}}))},goProduct(a){this.$router.push(`/product/${a}`)}},created(){this.getProducts()},mounted(){ge().init()}};const fe=(0,G.Z)(be,[["render",ue]]);var ve=fe;const he=[{path:"/",name:"home",component:ve},{path:"/product",name:"product",component:()=>Promise.all([t.e(746),t.e(443)]).then(t.bind(t,557)),children:[{path:"All",component:()=>t.e(519).then(t.bind(t,7519))},{path:"Helmet",component:()=>t.e(286).then(t.bind(t,9286))},{path:"Jacket",component:()=>t.e(210).then(t.bind(t,7210))},{path:"Gloves",component:()=>t.e(959).then(t.bind(t,3959))},{path:"Boots",component:()=>t.e(964).then(t.bind(t,8964))}]},{path:"/brand",name:"brand",component:()=>t.e(454).then(t.bind(t,9547))},{path:"/oderTracking",name:"oderTracking",component:()=>t.e(690).then(t.bind(t,6690))},{path:"/problem",name:"problem",component:()=>t.e(154).then(t.bind(t,7154))},{path:"/cart",name:"cart",component:()=>t.e(969).then(t.bind(t,2969))},{path:"/order",name:"order",component:()=>t.e(929).then(t.bind(t,5929))},{path:"/checkout/:orderId",component:()=>t.e(349).then(t.bind(t,2887))},{path:"/login",name:"login",component:()=>t.e(91).then(t.bind(t,6091))},{path:"/dashboard",name:"dashboard",component:()=>Promise.all([t.e(746),t.e(830)]).then(t.bind(t,9830)),children:[{path:"products",component:()=>Promise.all([t.e(746),t.e(944),t.e(745)]).then(t.bind(t,5745))},{path:"coupons",component:()=>Promise.all([t.e(746),t.e(944),t.e(219)]).then(t.bind(t,7219))},{path:"orders",component:()=>Promise.all([t.e(746),t.e(944),t.e(344)]).then(t.bind(t,9344))}]},{path:"/product/:productId",component:()=>Promise.all([t.e(746),t.e(583)]).then(t.bind(t,8583))}],we=(0,ra.p7)({history:(0,ra.r5)(),linkActiveClass:"active",routes:he,scrollBehavior(){return{left:0,top:0}}});var _e=we;function xe(a){const e=parseInt(a,10);return`${e.toFixed(0).replace(/./g,((a,e,t)=>e&&"."!==a&&(t.length-e)%3===0?`, ${a}`.replace(/\s/g,""):a))}`}function ke(a){const e=new Date(1e3*a);return e.toLocaleDateString()}function ye(a,e="更新"){if(a.data.success)N.Z.emit("push-message",{style:"success",title:`${e}成功`});else{const t="string"===typeof a.data.message?[a.data.message]:a.data.message;N.Z.emit("push-message",{style:"danger",title:`${e}失敗`,content:t.join("、")})}}(0,l.aH)("required",d.C1),(0,l.aH)("email",d.Do),(0,l.aH)("min",d.VV),(0,l.jQ)({generateMessage:(0,c.NC)({zh_TW:u}),validateOnInput:!0}),(0,c.i_)("zh_TW");const je=(0,s.ri)(oa);je.config.globalProperties.$filters={currency:xe,date:ke},je.config.globalProperties.$httpMessageState=ye,je.component("LoadingPlugin",i()),je.use(o.Z,n.Z),(0,p.z2)(),je.component("Form",l.l0),je.component("Field",l.gN),je.component("ErrorMessage",l.Bc),je.use(_e),je.mount("#app")},5820:function(a,e,t){var s=t(1373);const n=(0,s.Z)();e.Z=n},1331:function(a,e,t){t.d(e,{Z:function(){return u}});var s=t(3396);const n={class:"bg-success"},o=(0,s._)("div",{class:"container"},[(0,s._)("h4",{class:"py-3 text-dark text-center"},"門市資訊"),(0,s._)("div",{class:"row pb-3 gx-4 flex-row-reverse"},[(0,s._)("div",{class:"col d-flex justify-content-start"},[(0,s._)("ul",{class:"list-unstyled fs-5"},[(0,s._)("li",{class:"text-dark mb-2"},[(0,s.Uk)(" 門市地址 : "),(0,s._)("a",{href:"https://maps.app.goo.gl/Qheibs8geGWYmhfW6",target:"_blank",class:"text-decoration-none link-warning"},[(0,s._)("i",{class:"bi bi-geo-alt-fill"}),(0,s.Uk)("高雄市前鎮區中華五路789號")])]),(0,s._)("li",{class:"text-dark mb-2"},[(0,s.Uk)(" 營業時間 : "),(0,s._)("br"),(0,s.Uk)(" 平日 : 11:00~21:00 "),(0,s._)("br"),(0,s.Uk)("假日 : 11:00~21:30 "),(0,s._)("br"),(0,s._)("span",{class:"fw-bold"},"週一店休")]),(0,s._)("li",{class:"text-dark mb-2"},[(0,s.Uk)(" 電話 : "),(0,s._)("a",{href:"#",class:"text-decoration-none link-warning"},"0938667788")]),(0,s._)("li",{class:"text-dark mb-2"},[(0,s.Uk)(" Mail : "),(0,s._)("a",{href:"#",class:"text-decoration-none link-warning"},"s345612s@gmail.com")])])]),(0,s._)("div",{class:"col d-flex justify-content-end"},[(0,s._)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29466.726408964885!2d120.32808327295105!3d22.603745388178687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e0372ebc9d327%3A0x92317d11de68daf9!2z57Wx5LiA5aSi5pmC5Luj6LO854mp5Lit5b-D!5e0!3m2!1szh-TW!2stw!4v1705055184194!5m2!1szh-TW!2stw",width:"500",height:"300",loading:"lazy",allowfullscreen:"false",referrerpolicy:"no-referrer-when-downgrade",title:"google-map",class:"mb-2"})])])],-1),r=[o];function i(a,e){return(0,s.wg)(),(0,s.iD)("div",n,r)}var l=t(89);const d={},c=(0,l.Z)(d,[["render",i]]);var u=c}},e={};function t(s){var n=e[s];if(void 0!==n)return n.exports;var o=e[s]={id:s,loaded:!1,exports:{}};return a[s].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}t.m=a,function(){t.amdO={}}(),function(){var a=[];t.O=function(e,s,n,o){if(!s){var r=1/0;for(c=0;c<a.length;c++){s=a[c][0],n=a[c][1],o=a[c][2];for(var i=!0,l=0;l<s.length;l++)(!1&o||r>=o)&&Object.keys(t.O).every((function(a){return t.O[a](s[l])}))?s.splice(l--,1):(i=!1,o<r&&(r=o));if(i){a.splice(c--,1);var d=n();void 0!==d&&(e=d)}}return e}o=o||0;for(var c=a.length;c>0&&a[c-1][2]>o;c--)a[c]=a[c-1];a[c]=[s,n,o]}}(),function(){t.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return t.d(e,{a:e}),e}}(),function(){t.d=function(a,e){for(var s in e)t.o(e,s)&&!t.o(a,s)&&Object.defineProperty(a,s,{enumerable:!0,get:e[s]})}}(),function(){t.f={},t.e=function(a){return Promise.all(Object.keys(t.f).reduce((function(e,s){return t.f[s](a,e),e}),[]))}}(),function(){t.u=function(a){return"js/"+(443===a?"about":a)+"."+{91:"e0ae1ea5",154:"10681490",210:"0bee8122",219:"8bd05eb3",286:"8520c24f",344:"8904e0a6",349:"b0aeae7e",443:"336bb33a",454:"b6b25656",519:"eb97eab3",583:"dfa45945",690:"e8382b78",745:"aa92bbfc",746:"f4380a37",830:"69d2372e",929:"8bea07ea",944:"b8fad92f",959:"82db8c16",964:"8d4e0c90",969:"b425c21c"}[a]+".js"}}(),function(){t.miniCssF=function(a){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){t.hmd=function(a){return a=Object.create(a),a.children||(a.children=[]),Object.defineProperty(a,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+a.id)}}),a}}(),function(){t.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)}}(),function(){var a={},e="new-project:";t.l=function(s,n,o,r){if(a[s])a[s].push(n);else{var i,l;if(void 0!==o)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var u=d[c];if(u.getAttribute("src")==s||u.getAttribute("data-webpack")==e+o){i=u;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,t.nc&&i.setAttribute("nonce",t.nc),i.setAttribute("data-webpack",e+o),i.src=s),a[s]=[n];var p=function(e,t){i.onerror=i.onload=null,clearTimeout(m);var n=a[s];if(delete a[s],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((function(a){return a(t)})),e)return e(t)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){t.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}}(),function(){t.p="/TwoTIRE/"}(),function(){var a={143:0};t.f.j=function(e,s){var n=t.o(a,e)?a[e]:void 0;if(0!==n)if(n)s.push(n[2]);else{var o=new Promise((function(t,s){n=a[e]=[t,s]}));s.push(n[2]=o);var r=t.p+t.u(e),i=new Error,l=function(s){if(t.o(a,e)&&(n=a[e],0!==n&&(a[e]=void 0),n)){var o=s&&("load"===s.type?"missing":s.type),r=s&&s.target&&s.target.src;i.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",i.name="ChunkLoadError",i.type=o,i.request=r,n[1](i)}};t.l(r,l,"chunk-"+e,e)}},t.O.j=function(e){return 0===a[e]};var e=function(e,s){var n,o,r=s[0],i=s[1],l=s[2],d=0;if(r.some((function(e){return 0!==a[e]}))){for(n in i)t.o(i,n)&&(t.m[n]=i[n]);if(l)var c=l(t)}for(e&&e(s);d<r.length;d++)o=r[d],t.o(a,o)&&a[o]&&a[o][0](),a[o]=0;return t.O(c)},s=self["webpackChunknew_project"]=self["webpackChunknew_project"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=t.O(void 0,[998],(function(){return t(9079)}));s=t.O(s)})();
//# sourceMappingURL=app.241cf9a4.js.map