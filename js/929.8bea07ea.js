"use strict";(self["webpackChunknew_project"]=self["webpackChunknew_project"]||[]).push([[929],{9266:function(e,a,l){l.d(a,{Z:function(){return m}});var s=l(3396);const r={class:"checkout-banner"},o=(0,s._)("div",{class:"container"},[(0,s._)("div",{class:"d-flex justify-content-center align-items-center checkout-box flex-column","data-aos":"zoom-in","data-aos-duration":"3000","data-aos-easing":"quad"},[(0,s._)("h1",{class:"text-primary rounded-4 p-3 text-center payBall"},"You deserve to have")])],-1),t=[o];function n(e,a){return(0,s.wg)(),(0,s.iD)("div",r,t)}var d=l(89);const i={},c=(0,d.Z)(i,[["render",n]]);var m=c},5929:function(e,a,l){l.r(a),l.d(a,{default:function(){return P}});var s=l(3396),r=l(7139),o=l(9242);const t={class:"bg-warning"},n={class:"container"},d={class:"row row-cols-lg-10 d-flex justify-content-center py-4"},i=(0,s._)("div",{class:"col-lg-7"},null,-1),c={class:"col-lg-7 mt-3"},m={class:"bg-light px-2 py-3 rounded-3"},u=(0,s._)("h4",{class:"ps-2 fw-bold text-dark"},"填寫資料",-1),f={class:"mt-4 row justify-content-center"},p={class:"mb-3"},b=(0,s._)("label",{for:"name",class:"form-label"},"收件人姓名",-1),v={class:"mb-3"},_=(0,s._)("label",{for:"email",class:"form-label"},"Email",-1),h={class:"mb-3"},y=(0,s._)("label",{for:"tel",class:"form-label"},"收件人電話",-1),w={class:"mb-3"},g=(0,s._)("label",{for:"address",class:"form-label"},"收件人地址",-1),k={class:"mb-3"},V=(0,s._)("label",{for:"pay",class:"form-label"},"付款方式",-1),x=(0,s._)("option",{value:"",disabled:""},"請選擇付款方式",-1),W=(0,s._)("option",{value:"信用卡"},"信用卡",-1),C=(0,s._)("option",{value:"ATM轉帳"},"ATM轉帳",-1),U={class:"mb-3"},j=(0,s._)("label",{for:"message",class:"form-label"},"備註",-1),q={class:"d-flex justify-content-between"},Z={class:"text-end"},$=(0,s._)("div",{class:"text-end"},[(0,s._)("button",{class:"btn btn-outline-primary",type:"submit"},"下一步")],-1);function B(e,a,l,B,E,M){const A=(0,s.up)("CheckoutBanner"),D=(0,s.up)("Field"),F=(0,s.up)("ErrorMessage"),O=(0,s.up)("router-link"),P=(0,s.up)("Form");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(A),(0,s._)("div",t,[(0,s._)("div",n,[(0,s._)("div",d,[i,(0,s._)("div",c,[(0,s._)("div",m,[u,(0,s._)("div",f,[(0,s.Wm)(P,{class:"col-md-11",onSubmit:M.createOrder},{default:(0,s.w5)((({errors:e})=>[(0,s._)("div",p,[b,(0,s.Wm)(D,{id:"name",name:"姓名",type:"text",class:(0,r.C_)(["form-control",{"is-invalid":e["姓名"]}]),placeholder:"請輸入姓名",rules:"required",modelValue:E.form.user.name,"onUpdate:modelValue":a[0]||(a[0]=e=>E.form.user.name=e)},null,8,["class","modelValue"]),(0,s.Wm)(F,{name:"姓名",class:"invalid-feedback"})]),(0,s._)("div",v,[_,(0,s.Wm)(D,{id:"email",name:"email",type:"email",class:(0,r.C_)(["form-control",{"is-invalid":e["email"]}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:E.form.user.email,"onUpdate:modelValue":a[1]||(a[1]=e=>E.form.user.email=e)},null,8,["class","modelValue"]),(0,s.Wm)(F,{name:"email",class:"invalid-feedback"})]),(0,s._)("div",h,[y,(0,s.Wm)(D,{id:"tel",name:"電話",type:"tel",class:(0,r.C_)(["form-control",{"is-invalid":e["電話"]}]),placeholder:"請輸入電話",rules:M.isPhone,modelValue:E.form.user.tel,"onUpdate:modelValue":a[2]||(a[2]=e=>E.form.user.tel=e)},null,8,["class","rules","modelValue"]),(0,s.Wm)(F,{name:"電話",class:"invalid-feedback"})]),(0,s._)("div",w,[g,(0,s.Wm)(D,{id:"address",name:"地址",type:"text",class:(0,r.C_)(["form-control",{"is-invalid":e["地址"]}]),placeholder:"請輸入地址",rules:"required",modelValue:E.form.user.address,"onUpdate:modelValue":a[3]||(a[3]=e=>E.form.user.address=e)},null,8,["class","modelValue"]),(0,s.Wm)(F,{name:"地址",class:"invalid-feedback"})]),(0,s._)("div",k,[V,(0,s.Wm)(D,{id:"pay",as:"select",name:"付款方式",class:(0,r.C_)(["form-select",{"is-invalid":e["付款方式"]}]),rules:"required",modelValue:E.form.user.pay,"onUpdate:modelValue":a[4]||(a[4]=e=>E.form.user.pay=e)},{default:(0,s.w5)((()=>[x,W,C])),_:2},1032,["class","modelValue"]),(0,s.Wm)(F,{name:"付款方式",class:"invalid-feedback"})]),(0,s._)("div",U,[j,(0,s.wy)((0,s._)("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":a[5]||(a[5]=e=>E.form.message=e)},null,512),[[o.nr,E.form.message]])]),(0,s._)("div",q,[(0,s._)("div",Z,[(0,s.Wm)(O,{to:"cart",class:"btn btn-outline-primary",type:"button"},{default:(0,s.w5)((()=>[(0,s.Uk)("上一步")])),_:1})]),$])])),_:1},8,["onSubmit"])])])])])])])],64)}l(560);var E=l(6905),M=l.n(E),A=l(9266),D={data(){return{form:{user:{name:"",email:"",tel:"",address:"",pay:""},message:""}}},components:{CheckoutBanner:A.Z},methods:{createOrder(){const e="https://vue3-course-api.hexschool.io/api/twotire-api/order",a=this.form;this.$http.post(e,{data:a}).then((e=>{const a=e.data.orderId;this.$router.push(`/checkout/${a}`)}))},isPhone(e){if(!e)return"電話 為必填";const a=/^(09)[0-9]{8}$/;return!!a.test(e)||"電話 須為有效的電話號碼"}},mounted(){M().init()}},F=l(89);const O=(0,F.Z)(D,[["render",B]]);var P=O}}]);
//# sourceMappingURL=929.8bea07ea.js.map