"use strict";(self["webpackChunktesting"]=self["webpackChunktesting"]||[]).push([[654],{654:function(t,e,a){a.r(e),a.d(e,{default:function(){return P}});var n=a(3396),i=a(7139);const s=(0,n.uE)('<div class="container" style="margin-top:1rem;" data-v-83f8090c><div class="col-12 d-inline-flex" data-v-83f8090c><p class="col-3 text-center" data-v-83f8090c> Tìm kiếm học sinh :</p><div class="col-7" data-v-83f8090c><input type="text " class="form-control" placeholder="Nhập tên hoặc nickname của học sinh ở đây" data-v-83f8090c></div><div class="col-2 d-flex justify-content-between" data-v-83f8090c><button type="button" class="btn btn-info" data-v-83f8090c> Tìm kiếm</button></div></div></div>',1),o={class:"container"},c={type:"submit",class:"btn card-custom d-flex flex-column"},l=["src"],d={class:"text-center bolder"},u={class:"text-center"};function g(t,e,g,r,h,p){const v=(0,n.up)("Paging");return(0,n.wg)(),(0,n.iD)("div",null,[s,(0,n._)("div",o,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(h.listStudent,(t=>((0,n.wg)(),(0,n.iD)("div",{class:"card-wrap",onOnclick:e[0]||(e[0]=()=>{}),key:t},[(0,n._)("button",c,[(0,n._)("img",{src:t.avatar||a(9040),class:"rounded-circle",alt:""},null,8,l),(0,n._)("p",d,(0,i.zw)(t.name),1),(0,n._)("p",u,(0,i.zw)(t.nickname),1)])],32)))),128))]),this.isShowPaging?((0,n.wg)(),(0,n.j4)(v,{key:0,totalPage:this.totalPage,onOnClickToPage:p.onClickToPage},null,8,["totalPage","onOnClickToPage"])):(0,n.kq)("",!0)])}a(7658);var r=a(9550),h=a(3401),p=a(761),v=a(318),f=a(5548),S={name:"SupervisorListStudent",components:{Paging:r.Z},props:{},methods:{onClickToStudentId(){h.Z.push({path:"student-detail"})},updateLoadingState(t){this.$store.commit("setIsLoading",t)},updateListStudent(t){this.listStudent=[...t]},onClickToPage(t){this.getListStudent(t)},updateTotalPage(t){1==t?this.isShowPaging=!1:(this.isShowPaging=!0,this.totalPage=t)},getListStudent(t){let e=this.$cookies.get(f.F.TOKEN_TYPE_KEY),a=this.$cookies.get(f.F.TOKEN_KEY);this.updateLoadingState(!0),(0,p.b0)(v.Ds.GetStudentList+`/${t}/8`,v.n$.GET,{Content_Type:v.zc.JSON,Authorization:`${e} ${a}`},null,null,(t=>{"OK"===t.result&&(this.updateListStudent(t.data),this.updateTotalPage(t.totalPage)),this.updateLoadingState(!1)}))}},created(){this.getListStudent(0)},data(){return{listStudent:[],totalPage:0,isShowPaging:!1}}},k=a(89);const m=(0,k.Z)(S,[["render",g],["__scopeId","data-v-83f8090c"]]);var P=m}}]);
//# sourceMappingURL=654.b03537c2.js.map