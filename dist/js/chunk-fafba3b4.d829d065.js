(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fafba3b4"],{"6eed":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"tableStyle"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,align:"center"}},[n("el-table-column",{attrs:{prop:"repository",label:"Repository",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("svg-icon",{attrs:{"icon-class":"repository"}}),n("span",{staticClass:"pointer hoverUnderline",staticStyle:{"margin-left":"10px"},on:{click:function(e){return t.newWindow()}}},[t._v(t._s(e.row.repository))])]}}])}),n("el-table-column",{attrs:{prop:"cla",label:"CLA",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{staticClass:"pointer hoverUnderline",on:{click:function(e){return t.checkCla()}}},[t._v(t._s(e.row.cla))])]}}])}),n("el-table-column",{attrs:{prop:"gist",label:"Gist"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("svg-icon",{staticStyle:{cursor:"pointer"},attrs:{"icon-class":"github"}})]}}])}),n("el-table-column",{attrs:{prop:"sharedGist",label:"Shared Gist"}}),n("el-table-column",{attrs:{prop:"contributors",label:"Contributors",align:"center"}}),n("el-table-column",{attrs:{prop:"status",align:"center",label:"Status"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("svg-icon",{staticClass:"pointer",attrs:{"icon-class":"link_active"}})]}}])}),n("el-table-column",{attrs:{align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Edit",placement:"bottom"}},[n("svg-icon",{staticClass:"pointer",staticStyle:{display:"inline-block","margin-right":".5rem"},attrs:{"icon-class":"edit"},on:{click:function(n){return t.editHandleClick(e)}}})],1),n("el-popover",{attrs:{width:"80",placement:"right"}},[n("div",{staticClass:"menuBT"},[n("el-button",{attrs:{type:"primary",size:"medium"}},[t._v("Import")]),n("el-button",{attrs:{type:"primary",size:"medium"}},[t._v("ReCheck PRs")]),n("el-button",{attrs:{type:"primary",size:"medium"}},[t._v("Get Badge")]),n("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(e){t.unLinkDialogVisible=!0}}},[t._v("Unlink ")])],1),n("el-tooltip",{attrs:{slot:"reference",effect:"dark",content:"More..",placement:"bottom"},slot:"reference"},[n("svg-icon",{staticClass:"pointer",attrs:{"icon-class":"menu"}})],1)],1)]}}])})],1)],1),n("div",{staticClass:"paginationClass"},[n("el-pagination",{attrs:{background:"","page-size":5,"pager-count":5,"hide-on-single-page":!0,"current-page":t.currentPage,layout:"prev, pager, next",total:t.tableTotal},on:{"current-change":t.changePage}})],1)])},o=[],r=(n("99af"),{name:"linkedRepo",data:function(){return{unLinkDialogVisible:!1,tableTotal:0,currentPage:1,tableData:[{repository:"ooo",cla:"test",sharedGist:"Yes",contributors:"0"},{repository:"ooo",cla:"test",sharedGist:"No",contributors:"0"}]}},methods:{unLinkRepository:function(){var t=this;this.linkDialogVisible=!1;var e={repositoryValue:this.repositoryValue,claValue:this.claValue};this.$axios({url:url.unLinkRepository,methods:"post",data:e,headers:{"Access-Token":this.access_token,"Refresh-Token":this.refresh_token,User:"".concat(this.platform,"/").concat(this.user.userName)}}).then((function(e){console.log(e),200===e.data.code&&(t.repositoryOptions=e.data.data,t.$message.success("解绑成功"),t.unLinkDialogVisible=!1)})).catch((function(t){console.log(t)}))},changePage:function(t){console.log(t)}}}),s=r,i=n("2877"),l=Object(i["a"])(s,a,o,!1,null,"3d90dcb0",null);e["default"]=l.exports},8418:function(t,e,n){"use strict";var a=n("c04e"),o=n("9bf2"),r=n("5c6c");t.exports=function(t,e,n){var s=a(e);s in t?o.f(t,s,r(0,n)):t[s]=n}},"99af":function(t,e,n){"use strict";var a=n("23e7"),o=n("d039"),r=n("e8b5"),s=n("861d"),i=n("7b0b"),l=n("50c4"),c=n("8418"),u=n("65f0"),p=n("1dde"),d=n("b622"),f=n("2d00"),b=d("isConcatSpreadable"),g=9007199254740991,h="Maximum allowed index exceeded",m=f>=51||!o((function(){var t=[];return t[b]=!1,t.concat()[0]!==t})),y=p("concat"),k=function(t){if(!s(t))return!1;var e=t[b];return void 0!==e?!!e:r(t)},v=!m||!y;a({target:"Array",proto:!0,forced:v},{concat:function(t){var e,n,a,o,r,s=i(this),p=u(s,0),d=0;for(e=-1,a=arguments.length;e<a;e++)if(r=-1===e?s:arguments[e],k(r)){if(o=l(r.length),d+o>g)throw TypeError(h);for(n=0;n<o;n++,d++)n in r&&c(p,d,r[n])}else{if(d>=g)throw TypeError(h);c(p,d++,r)}return p.length=d,p}})}}]);
//# sourceMappingURL=chunk-fafba3b4.d829d065.js.map