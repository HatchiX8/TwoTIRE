"use strict";(self["webpackChunknew_project"]=self["webpackChunknew_project"]||[]).push([[219],{7219:function(o,t,e){e.r(t),e.d(t,{default:function(){return Y}});var n=e(3396),l=e(7139);const a={class:"vh-100"},s={class:"text-end mt-4"},i={class:"table mt-4"},p=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",null,"名稱"),(0,n._)("th",null,"折扣百分比"),(0,n._)("th",null,"到期日"),(0,n._)("th",null,"是否啟用"),(0,n._)("th",null,"編輯")])],-1),d={key:0,class:"text-success"},u={key:1,class:"text-muted"},c={class:"btn-group"},r=["onClick"],h=["onClick"];function m(o,t,e,m,_,b){const C=(0,n.up)("LoadingPlugin"),f=(0,n.up)("couponModal"),w=(0,n.up)("DelModal");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(C,{active:_.isLoading},null,8,["active"]),(0,n._)("div",a,[(0,n._)("div",s,[(0,n._)("button",{class:"btn btn-primary",onClick:t[0]||(t[0]=o=>b.openCouponModal(!0))},"建立新的優惠券")]),(0,n._)("table",i,[p,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(_.coupons,((t,e)=>((0,n.wg)(),(0,n.iD)("tr",{key:e},[(0,n._)("td",null,(0,l.zw)(t.title),1),(0,n._)("td",null,(0,l.zw)(t.percent)+"%",1),(0,n._)("td",null,(0,l.zw)(o.$filters.date(t.due_date)),1),(0,n._)("td",null,[1===t.is_enabled?((0,n.wg)(),(0,n.iD)("span",d,"啟用")):((0,n.wg)(),(0,n.iD)("span",u,"未起用"))]),(0,n._)("td",null,[(0,n._)("div",c,[(0,n._)("button",{class:"btn btn-outline-primary btn-sm",onClick:o=>b.openCouponModal(!1,t)}," 編輯 ",8,r),(0,n._)("button",{class:"btn btn-outline-danger btn-sm",onClick:o=>b.openDelCouponModal(t)}," 刪除 ",8,h)])])])))),128))])])]),(0,n.Wm)(f,{coupon:_.tempCoupon,ref:"couponModal",onUpdateCoupon:b.updateCoupon},null,8,["coupon","onUpdateCoupon"]),(0,n.Wm)(w,{item:_.tempCoupon,ref:"delModal",onDelItem:b.delCoupon},null,8,["item","onDelItem"])])}var _=e(9242);const b={class:"modal fade",id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},C={class:"modal-dialog",role:"document"},f={class:"modal-content"},w=(0,n._)("div",{class:"modal-header bg-warning"},[(0,n._)("h5",{class:"modal-title",id:"exampleModalLabel"},"優惠券"),(0,n._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),g={class:"modal-body"},v={class:"mb-3"},M=(0,n._)("label",{for:"title"},"標題",-1),y={class:"mb-3"},k=(0,n._)("label",{for:"coupon_code"},"優惠碼",-1),$={class:"mb-3"},D=(0,n._)("label",{for:"due_date"},"到期日",-1),x={class:"mb-3"},L=(0,n._)("label",{for:"price"},"折扣百分比",-1),U={class:"mb-3"},S={class:"form-check"},V=(0,n._)("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),N={class:"modal-footer"},Z=(0,n._)("button",{type:"button",class:"btn btn-outline-primary","data-bs-dismiss":"modal"}," Close ",-1);function j(o,t,e,l,a,s){return(0,n.wg)(),(0,n.iD)("div",b,[(0,n._)("div",C,[(0,n._)("div",f,[w,(0,n._)("div",g,[(0,n._)("div",v,[M,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":t[0]||(t[0]=o=>a.tempCoupon.title=o),placeholder:"請輸入標題"},null,512),[[_.nr,a.tempCoupon.title]])]),(0,n._)("div",y,[k,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control",id:"coupon_code","onUpdate:modelValue":t[1]||(t[1]=o=>a.tempCoupon.code=o),placeholder:"請輸入優惠碼"},null,512),[[_.nr,a.tempCoupon.code]])]),(0,n._)("div",$,[D,(0,n.wy)((0,n._)("input",{type:"date",class:"form-control",id:"due_date","onUpdate:modelValue":t[2]||(t[2]=o=>a.due_date=o)},null,512),[[_.nr,a.due_date]])]),(0,n._)("div",x,[L,(0,n.wy)((0,n._)("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":t[3]||(t[3]=o=>a.tempCoupon.percent=o),placeholder:"請輸入折扣百分比"},null,512),[[_.nr,a.tempCoupon.percent,void 0,{number:!0}]])]),(0,n._)("div",U,[(0,n._)("div",S,[(0,n.wy)((0,n._)("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":t[4]||(t[4]=o=>a.tempCoupon.is_enabled=o),id:"is_enabled"},null,512),[[_.e8,a.tempCoupon.is_enabled]]),V])])]),(0,n._)("div",N,[Z,(0,n._)("button",{type:"button",class:"btn btn-primary",onClick:t[5]||(t[5]=t=>o.$emit("update-coupon",a.tempCoupon))}," 更新優惠券 ")])])])],512)}var z=e(1339),I={name:"couponModal",props:{coupon:{}},data(){return{tempCoupon:{},due_date:""}},emits:["update-coupon"],watch:{coupon(){this.tempCoupon=this.coupon;const o=new Date(1e3*this.tempCoupon.due_date).toISOString().split("T");[this.due_date]=o},due_date(){this.tempCoupon.due_date=Math.floor(new Date(this.due_date)/1e3)}},mixins:[z.Z]},W=e(89);const O=(0,W.Z)(I,[["render",j]]);var P=O,T=e(6944),H={components:{CouponModal:P,DelModal:T.Z},props:{config:Object},data(){return{coupons:{},tempCoupon:{title:"",is_enabled:0,percent:100,code:""},isLoading:!1,isNew:!1}},methods:{openCouponModal(o,t){this.isNew=o,this.isNew?this.tempCoupon={due_date:(new Date).getTime()/1e3}:this.tempCoupon={...t},this.$refs.couponModal.showModal()},openDelCouponModal(o){this.tempCoupon={...o};const t=this.$refs.delModal;t.showModal()},getCoupons(){this.isLoading=!0;const o="https://vue3-course-api.hexschool.io/api/twotire-api/admin/coupons";this.$http.get(o,this.tempProduct).then((o=>{this.coupons=o.data.coupons,this.isLoading=!1}))},updateCoupon(o){if(this.isNew){const t="https://vue3-course-api.hexschool.io/api/twotire-api/admin/coupon";this.$http.post(t,{data:o}).then((o=>{this.$httpMessageState(o,"新增優惠券"),this.getCoupons(),this.$refs.couponModal.hideModal()}))}else{const o=`https://vue3-course-api.hexschool.io/api/twotire-api/admin/coupon/${this.tempCoupon.id}`;this.$http.put(o,{data:this.tempCoupon}).then((o=>{this.$httpMessageState(o,"新增優惠券"),this.getCoupons(),this.$refs.couponModal.hideModal()}))}},delCoupon(){const o=`https://vue3-course-api.hexschool.io/api/twotire-api/admin/coupon/${this.tempCoupon.id}`;this.isLoading=!0,this.$http.delete(o).then((o=>{this.$httpMessageState(o,"刪除優惠券");const t=this.$refs.delModal;t.hideModal(),this.getCoupons()}))}},created(){this.getCoupons()}};const K=(0,W.Z)(H,[["render",m]]);var Y=K}}]);
//# sourceMappingURL=219.8bd05eb3.js.map