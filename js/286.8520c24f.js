"use strict";(self["webpackChunknew_project"]=self["webpackChunknew_project"]||[]).push([[286],{9286:function(t,s,i){i.r(s),i.d(s,{default:function(){return C}});var a=i(3396),e=i(9242),o=i(7139);const r={class:"body"},d={class:"row row-cols-2 row-cols-lg-4 d-flex justify-content-start flex-wrap g-3 mt-2 mb-3"},n={class:"card h-100"},c=["onClick"],l=["src"],u={class:"card-body"},p={class:"card-title text-dark m-0"},h={class:"card-footer border-0"},g=["onClick","disabled"],m={key:0,class:"spinner-border text-warning spinner-border-sm",role:"status"},w=(0,a._)("span",{class:"visually-hidden"},"Loading...",-1),v=[w];function f(t,s,i,w,f,b){const k=(0,a.up)("LoadingPlugin");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(k,{active:f.isLoading},null,8,["active"]),(0,a._)("div",r,[(0,a._)("div",d,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(f.filterData,(t=>((0,a.wg)(),(0,a.iD)("div",{class:"col",key:t.id},[(0,a._)("div",n,[(0,a._)("a",{href:"#",onClick:(0,e.iM)((s=>b.getProduct(t.id)),["prevent"])},[(0,a._)("img",{src:t.imageUrl,class:"card-img-top",alt:"產品圖示"},null,8,l)],8,c),(0,a._)("div",u,[(0,a._)("h5",p,(0,o.zw)(t.title),1)]),(0,a._)("div",h,[(0,a._)("button",{type:"button",class:"btn btn-primary w-100 text-nowrap px-0",onClick:s=>b.addCart(t.id),disabled:this.status.loadingItem===t.id},[this.status.loadingItem===t.id?((0,a.wg)(),(0,a.iD)("div",m,v)):(0,a.kq)("",!0),(0,a.Uk)(" 加入購物車 ")],8,g)])])])))),128))])])],64)}i(560);var b=i(5820),k={data(){return{productsAll:[],pagination:{},filterData:[],isLoading:!1,status:{loadingItem:""}}},provide(){return{emitter:b.Z}},components:{},methods:{getProducts(){const t="https://vue3-course-api.hexschool.io/api/twotire-api/products/all";this.isLoading=!0,this.$http.get(t).then((t=>{this.isLoading=!1,t.data.success&&(this.productsAll=t.data.products,this.filterData=this.productsAll.filter((t=>"安全帽"===t.category)))}))},getProduct(t){this.$router.push(`/product/${t}`)},addCart(t){const s="https://vue3-course-api.hexschool.io/api/twotire-api/cart";this.status.loadingItem=t;const i={product_id:t,qty:1};this.$http.post(s,{data:i}).then((t=>{this.status.loadingItem="",this.$httpMessageState(t,"加入購物車"),b.Z.emit("updateCart")}))}},computed:{},mounted(){this.getProducts()}},_=i(89);const y=(0,_.Z)(k,[["render",f]]);var C=y}}]);
//# sourceMappingURL=286.8520c24f.js.map