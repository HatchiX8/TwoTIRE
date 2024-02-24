"use strict";(self["webpackChunknew_project"]=self["webpackChunknew_project"]||[]).push([[745],{1590:function(t,e,l){l.d(e,{Z:function(){return P}});var a=l(3396),o=l(7139),s=l(9242);const i={"aria-label":"Page navigation example"},n={class:"pagination justify-content-center"},r={class:"page-item"},d=(0,a._)("span",{"aria-hidden":"true"},"«",-1),c=[d],p=["onClick"],u={class:"page-item"},m=(0,a._)("span",{"aria-hidden":"true"},"»",-1),h=[m];function g(t,e,l,d,m,g){return(0,a.wg)(),(0,a.iD)("nav",i,[(0,a._)("ul",n,[(0,a._)("li",r,[(0,a._)("a",{class:(0,o.C_)(["page-link",{disabled:!1===l.pages.has_pre}]),href:"#","aria-label":"Previous",onClick:e[0]||(e[0]=(0,s.iM)((t=>g.updatePage(l.pages.current_page-1)),["prevent"]))},c,2)]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.pages.total_pages,(t=>((0,a.wg)(),(0,a.iD)("li",{class:(0,o.C_)(["page-item",{active:t===l.pages.current_page}]),key:t},[(0,a._)("a",{class:"page-link",href:"#",onClick:(0,s.iM)((e=>g.updatePage(t)),["prevent"])},(0,o.zw)(t),9,p)],2)))),128)),(0,a._)("li",u,[(0,a._)("a",{class:(0,o.C_)(["page-link",{disabled:!1===l.pages.has_next}]),href:"#","aria-label":"Next",onClick:e[1]||(e[1]=(0,s.iM)((t=>g.updatePage(l.pages.current_page+1)),["prevent"]))},h,2)])])])}var _={props:["pages"],methods:{updatePage(t){this.$emit("emit-pages",t)}}},b=l(89);const f=(0,b.Z)(_,[["render",g]]);var P=f},5745:function(t,e,l){l.r(e),l.d(e,{default:function(){return mt}});var a=l(3396),o=l(9242),s=l(7139);const i={class:"vh-100"},n={class:"text-end my-3 me-5"},r={class:"table"},d=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",{width:"120"},"分類"),(0,a._)("th",null,"產品名稱"),(0,a._)("th",{width:"100"},"引進價格"),(0,a._)("th",{width:"100"},"售價"),(0,a._)("th",{width:"100"},"是否啟用"),(0,a._)("th",{width:"200"},"編輯")])],-1),c={class:"text-right"},p={class:"text-right"},u={key:0,class:"text-success"},m={key:1,class:"text-muted"},h={class:"btn-group"},g=["onClick"],_=["onClick"];function b(t,e,l,b,f,P){const v=(0,a.up)("LoadingPlugin"),w=(0,a.up)("PaginationComponent"),y=(0,a.up)("ProductModal"),k=(0,a.up)("DelModal");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(v,{active:f.isLoading},null,8,["active"]),(0,a._)("div",i,[(0,a._)("div",n,[(0,a._)("button",{class:"btn btn-primary",type:"button",onClick:e[0]||(e[0]=(0,o.iM)((t=>P.openModal(!0)),["prevent"]))}," 新增品項 ")]),(0,a._)("table",r,[d,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(f.products,(e=>((0,a.wg)(),(0,a.iD)("tr",{key:e.id},[(0,a._)("td",null,(0,s.zw)(e.category),1),(0,a._)("td",null,(0,s.zw)(e.title),1),(0,a._)("td",c,(0,s.zw)(t.$filters.currency(e.origin_price)),1),(0,a._)("td",p,(0,s.zw)(t.$filters.currency(e.price)),1),(0,a._)("td",null,[1===e.is_enabled?((0,a.wg)(),(0,a.iD)("span",u,"啟用")):((0,a.wg)(),(0,a.iD)("span",m,"未啟用"))]),(0,a._)("td",null,[(0,a._)("div",h,[(0,a._)("button",{class:"btn btn-outline-primary btn-sm",onClick:(0,o.iM)((t=>P.openModal(!1,e)),["prevent"])}," 編輯 ",8,g),(0,a._)("button",{class:"btn btn-outline-danger btn-sm",onClick:(0,o.iM)((t=>P.openDelModal(e)),["prevent"])}," 刪除 ",8,_)])])])))),128))])]),(0,a.Wm)(w,{pages:f.pagination,onEmitPages:P.getProducts},null,8,["pages","onEmitPages"])]),(0,a.Wm)(y,{ref:"productModal",product:f.tempProduct,onUpdateProduct:P.updatedProduct},null,8,["product","onUpdateProduct"]),(0,a.Wm)(k,{ref:"delModal",item:f.tempProduct,onDelItem:P.delProduct},null,8,["item","onDelItem"])],64)}l(560);const f={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},P={class:"modal-dialog modal-xl",role:"document"},v={class:"modal-content border-0"},w=(0,a._)("div",{class:"modal-header bg-success text-white"},[(0,a._)("h5",{class:"modal-title",id:"exampleModalLabel"},[(0,a._)("span",null,"新增產品")]),(0,a._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),y={class:"modal-body"},k={class:"row"},x={class:"col-sm-4"},M={class:"mb-3"},C=(0,a._)("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),D={class:"mb-3"},U=(0,a._)("label",{for:"customFile",class:"form-label"},[(0,a.Uk)("或 上傳圖片 "),(0,a._)("i",{class:"fas fa-spinner fa-spin"})],-1),$=["src"],L={key:0,class:"mt-5"},V=["onUpdate:modelValue"],Z=["onClick"],j={key:0},F={class:"col-sm-8"},z={class:"mb-3"},H=(0,a._)("label",{for:"title",class:"form-label"},"標題",-1),I={class:"row gx-2"},N={class:"mb-3 col-md-6"},W=(0,a._)("label",{for:"category",class:"form-label"},"分類",-1),Y={class:"mb-3 col-md-6"},K=(0,a._)("label",{for:"price",class:"form-label"},"單位",-1),q={class:"row gx-2"},E={class:"mb-3 col-md-6"},O=(0,a._)("label",{for:"origin_price",class:"form-label"},"引進價格",-1),A={class:"mb-3 col-md-6"},B=(0,a._)("label",{for:"price",class:"form-label"},"販售價格",-1),G=(0,a._)("hr",null,null,-1),J={class:"mb-3"},Q=(0,a._)("label",{for:"description",class:"form-label"},"產品描述",-1),R={class:"mb-3"},S=(0,a._)("label",{for:"content",class:"form-label"},"說明內容",-1),T={class:"mb-3"},X={class:"form-check"},tt=(0,a._)("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),et={class:"modal-footer"},lt=(0,a._)("button",{type:"button",class:"btn btn-outline-primary","data-bs-dismiss":"modal"}," 取消 ",-1);function at(t,e,l,s,i,n){return(0,a.wg)(),(0,a.iD)("div",f,[(0,a._)("div",P,[(0,a._)("div",v,[w,(0,a._)("div",y,[(0,a._)("div",k,[(0,a._)("div",x,[(0,a._)("div",M,[C,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"image",placeholder:"請輸入圖片連結","onUpdate:modelValue":e[0]||(e[0]=t=>i.tempProduct.imageUrl=t)},null,512),[[o.nr,i.tempProduct.imageUrl]])]),(0,a._)("div",D,[U,(0,a._)("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:e[1]||(e[1]=(...t)=>n.uploadFile&&n.uploadFile(...t))},null,544)]),(0,a._)("img",{class:"img-fluid",alt:"",src:i.tempProduct.imageUrl},null,8,$),i.tempProduct.images?((0,a.wg)(),(0,a.iD)("div",L,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.tempProduct.images,((t,e)=>((0,a.wg)(),(0,a.iD)("div",{class:"mb-3 input-group",key:e},[(0,a.wy)((0,a._)("input",{type:"url",class:"form-control form-control",placeholder:"請輸入連結","onUpdate:modelValue":t=>i.tempProduct.images[e]=t},null,8,V),[[o.nr,i.tempProduct.images[e]]]),(0,a._)("button",{type:"button",class:"btn btn-outline-danger",onClick:t=>i.tempProduct.images.splice(e,1)}," 移除 ",8,Z)])))),128)),i.tempProduct.images[i.tempProduct.images.length-1]||!i.tempProduct.images.length?((0,a.wg)(),(0,a.iD)("div",j,[(0,a._)("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[2]||(e[2]=t=>i.tempProduct.images.push(""))}," 新增圖片 ")])):(0,a.kq)("",!0)])):(0,a.kq)("",!0)]),(0,a._)("div",F,[(0,a._)("div",z,[H,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"title",placeholder:"請輸入標題","onUpdate:modelValue":e[3]||(e[3]=t=>i.tempProduct.title=t)},null,512),[[o.nr,i.tempProduct.title]])]),(0,a._)("div",I,[(0,a._)("div",N,[W,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"category",placeholder:"請輸入分類","onUpdate:modelValue":e[4]||(e[4]=t=>i.tempProduct.category=t)},null,512),[[o.nr,i.tempProduct.category]])]),(0,a._)("div",Y,[K,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"unit",placeholder:"請輸入單位","onUpdate:modelValue":e[5]||(e[5]=t=>i.tempProduct.unit=t)},null,512),[[o.nr,i.tempProduct.unit]])])]),(0,a._)("div",q,[(0,a._)("div",E,[O,(0,a.wy)((0,a._)("input",{type:"number",class:"form-control",id:"origin_price",placeholder:"請輸入引進價格","onUpdate:modelValue":e[6]||(e[6]=t=>i.tempProduct.origin_price=t)},null,512),[[o.nr,i.tempProduct.origin_price]])]),(0,a._)("div",A,[B,(0,a.wy)((0,a._)("input",{type:"number",class:"form-control",id:"price",placeholder:"請輸入販售價格","onUpdate:modelValue":e[7]||(e[7]=t=>i.tempProduct.price=t)},null,512),[[o.nr,i.tempProduct.price]])])]),G,(0,a._)("div",J,[Q,(0,a.wy)((0,a._)("textarea",{type:"text",class:"form-control",id:"description",placeholder:"請輸入產品描述","onUpdate:modelValue":e[8]||(e[8]=t=>i.tempProduct.description=t)},null,512),[[o.nr,i.tempProduct.description]])]),(0,a._)("div",R,[S,(0,a.wy)((0,a._)("textarea",{type:"text",class:"form-control",id:"content",placeholder:"請輸入產品說明內容","onUpdate:modelValue":e[9]||(e[9]=t=>i.tempProduct.content=t)},null,512),[[o.nr,i.tempProduct.content]])]),(0,a._)("div",T,[(0,a._)("div",X,[(0,a.wy)((0,a._)("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,id:"is_enabled","onUpdate:modelValue":e[10]||(e[10]=t=>i.tempProduct.is_enabled=t)},null,512),[[o.e8,i.tempProduct.is_enabled]]),tt])])])])]),(0,a._)("div",et,[lt,(0,a._)("button",{type:"button",class:"btn btn-primary",onClick:e[11]||(e[11]=(0,o.iM)((e=>t.$emit("update-product",i.tempProduct)),["prevent"]))}," 確認 ")])])])],512)}var ot=l(1339),st={props:{product:{type:Object,default(){return{}}}},watch:{product(){this.tempProduct=this.product,this.tempProduct.images||(this.tempProduct.images=[])}},data(){return{modal:{},tempProduct:{}}},methods:{uploadFile(){const t=this.$refs.fileInput.files[0],e=new FormData;e.append("file-to-upload",t);const l="https://vue3-course-api.hexschool.io/api/twotire-api/admin/upload";this.$http.post(l,e).then((t=>{t.data.success&&(this.tempProduct.imageUrl=t.data.imageUrl)}))}},mixins:[ot.Z]},it=l(89);const nt=(0,it.Z)(st,[["render",at]]);var rt=nt,dt=l(6944),ct=l(1590),pt={data(){return{products:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1}},components:{ProductModal:rt,DelModal:dt.Z,PaginationComponent:ct.Z},inject:["emitter"],methods:{getProducts(t=1){const e=`https://vue3-course-api.hexschool.io/api/twotire-api/admin/products?page=${t}`;this.isLoading=!0,this.$http.get(e).then((t=>{this.isLoading=!1,t.data.success&&(this.products=t.data.products,this.pagination=t.data.pagination)}))},openModal(t,e){this.tempProduct=t?{}:{...e},this.isNew=t;const l=this.$refs.productModal;l.showModal()},updatedProduct(t){this.tempProduct=t;let e="https://vue3-course-api.hexschool.io/api/twotire-api/admin/product",l="post";this.isNew||(e=`https://vue3-course-api.hexschool.io/api/twotire-api/admin/product/${t.id}`,this.isLoading=!0,l="put");const a=this.$refs.productModal;this.$http[l](e,{data:this.tempProduct}).then((t=>{this.isLoading=!1,a.hideModal(),t.data.success?(this.getProducts(),this.emitter.emit("push-message",{style:"success",title:"更新成功"})):this.emitter.emit("push-message",{style:"danger",title:"更新失敗",content:t.data.message.join("、")})}))},openDelModal(t){this.tempProduct={...t};const e=this.$refs.delModal;e.showModal()},delProduct(){const t=`https://vue3-course-api.hexschool.io/api/twotire-api/admin/product/${this.tempProduct.id}`;this.isLoading=!0,this.$http.delete(t).then((()=>{this.isLoading=!1;const t=this.$refs.delModal;t.hideModal(),this.getProducts()}))}},created(){this.getProducts()}};const ut=(0,it.Z)(pt,[["render",b]]);var mt=ut}}]);
//# sourceMappingURL=745.aa92bbfc.js.map