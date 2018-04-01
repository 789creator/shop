webpackJsonp([6],{"P5+K":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("gyMJ"),n=a("0xDb"),o={data:function(){var e=this;return{visible:!1,dataForm:{id:0,type:1,name:"",parentId:0,parentName:"",url:"",perms:"",orderNum:0,icon:""},dataRule:{name:[{required:!0,message:"菜单名称不能为空",trigger:"blur"}],parentName:[{required:!0,message:"上级菜单不能为空",trigger:"change"}],url:[{validator:function(t,a,r){1!==e.dataForm.type||/\S/.test(a)?r():r(new Error("菜单URL不能为空"))},trigger:"blur"}]},menuList:[],menuListTreeProps:{label:"name",children:"children"}}},methods:{init:function(e){var t=this;this.dataForm.id=e||0,r.a.menu.select().then(function(e){var a=e.data;t.menuList=Object(n.d)(a.menuList,"menuId")}).then(function(){t.visible=!0,t.$nextTick(function(){t.$refs.dataForm.resetFields()})}).then(function(){t.dataForm.id?r.a.menu.info(t.dataForm.id).then(function(e){var a=e.data;t.dataForm.id=a.menu.menuId,t.dataForm.type=a.menu.type,t.dataForm.name=a.menu.name,t.dataForm.parentId=a.menu.parentId,t.dataForm.url=a.menu.url,t.dataForm.perms=a.menu.perms,t.dataForm.orderNum=a.menu.orderNum,t.dataForm.icon=a.menu.icon,t.menuListTreeSetCurrentNode()}):t.menuListTreeSetCurrentNode()})},menuListTreeCurrentChangeHandle:function(e,t){this.dataForm.parentId=e.menuId,this.dataForm.parentName=e.name},menuListTreeSetCurrentNode:function(){this.$refs.menuListTree.setCurrentKey(this.dataForm.parentId),this.dataForm.parentName=(this.$refs.menuListTree.getCurrentNode()||{}).name},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(t){if(t){var a={menuId:e.dataForm.id||void 0,type:e.dataForm.type,name:e.dataForm.name,parentId:e.dataForm.parentId,url:e.dataForm.url,perms:e.dataForm.perms,orderNum:e.dataForm.orderNum,icon:e.dataForm.icon};(e.dataForm.id?r.a.menu.update(a):r.a.menu.add(a)).then(function(t){var a=t.data;a&&0===a.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(a.msg)})}})}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:e.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[a("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"80px"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"类型",prop:"type"}},[a("el-radio-group",{model:{value:e.dataForm.type,callback:function(t){e.$set(e.dataForm,"type",t)},expression:"dataForm.type"}},[a("el-radio",{attrs:{label:0}},[e._v("目录")]),e._v(" "),a("el-radio",{attrs:{label:1}},[e._v("菜单")]),e._v(" "),a("el-radio",{attrs:{label:2}},[e._v("按钮")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"菜单名称",prop:"name"}},[a("el-input",{attrs:{placeholder:"菜单名称或按钮名称"},model:{value:e.dataForm.name,callback:function(t){e.$set(e.dataForm,"name",t)},expression:"dataForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"上级菜单",prop:"parentName"}},[a("el-popover",{ref:"menuListPopover",attrs:{placement:"bottom-end",trigger:"click"}},[a("el-tree",{ref:"menuListTree",attrs:{data:e.menuList,props:e.menuListTreeProps,"node-key":"menuId","default-expand-all":!0,"highlight-current":!0,"expand-on-click-node":!1},on:{"current-change":e.menuListTreeCurrentChangeHandle}})],1),e._v(" "),a("el-input",{directives:[{name:"popover",rawName:"v-popover:menuListPopover",arg:"menuListPopover"}],staticClass:"menu-list__input",attrs:{readonly:!0,placeholder:"点击选择上级菜单"},model:{value:e.dataForm.parentName,callback:function(t){e.$set(e.dataForm,"parentName",t)},expression:"dataForm.parentName"}})],1),e._v(" "),1===e.dataForm.type?a("el-form-item",{attrs:{label:"菜单URL",prop:"url"}},[a("el-input",{attrs:{placeholder:"菜单URL"},model:{value:e.dataForm.url,callback:function(t){e.$set(e.dataForm,"url",t)},expression:"dataForm.url"}})],1):e._e(),e._v(" "),0!==e.dataForm.type?a("el-form-item",{attrs:{label:"授权标识",prop:"perms"}},[a("el-input",{attrs:{placeholder:"多个用逗号分隔, 如: user:list,user:create"},model:{value:e.dataForm.perms,callback:function(t){e.$set(e.dataForm,"perms",t)},expression:"dataForm.perms"}})],1):e._e(),e._v(" "),2!==e.dataForm.type?a("el-form-item",{attrs:{label:"排序号",prop:"orderNum"}},[a("el-input-number",{attrs:{"controls-position":"right",min:0,label:"排序号"},model:{value:e.dataForm.orderNum,callback:function(t){e.$set(e.dataForm,"orderNum",t)},expression:"dataForm.orderNum"}})],1):e._e(),e._v(" "),2!==e.dataForm.type?a("el-form-item",{attrs:{label:"菜单图标",prop:"icon"}},[a("el-row",[a("el-col",{attrs:{span:22}},[a("el-input",{attrs:{placeholder:"菜单图标"},model:{value:e.dataForm.icon,callback:function(t){e.$set(e.dataForm,"icon",t)},expression:"dataForm.icon"}})],1),e._v(" "),a("el-col",{staticClass:"icon-tips",attrs:{span:2}},[a("el-tooltip",{attrs:{placement:"top",effect:"light"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("span",[e._v("获取图标: ")]),a("br"),e._v("\n              1. 暂时兼容旧版引入使用 "),a("a",{attrs:{href:"//fontawesome.io/icons/",target:"_blank"}},[e._v("fontawesome")]),a("br"),e._v("\n              2. 之后统一全站修改使用 "),a("a",{attrs:{href:"//github.com/daxiongYang/b2cshop-admin/blob/master/src/iconfont/index.js",target:"_blank"}},[e._v("iconfont")])]),e._v(" "),a("i",{staticClass:"el-icon-warning"})])],1)],1)],1):e._e()],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]};var m=a("46Yf")(o,i,!1,function(e){a("v1Pr")},null,null);t.default=m.exports},sx66:function(e,t,a){(e.exports=a("acE3")(!1)).push([e.i,"\n.mod-menu .menu-list__input > .el-input__inner {\n  cursor: pointer;\n}\n.mod-menu .icon-tips {\n  font-size: 18px;\n  text-align: center;\n  color: #e6a23c;\n  cursor: pointer;\n}\n",""])},v1Pr:function(e,t,a){var r=a("sx66");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("XkoO")("0d94b696",r,!0)}});
