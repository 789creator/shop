webpackJsonp([1,9,19,22],{"6f/g":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("4YfN"),s=n.n(a),i=n("8HvM"),r=n("jqh9"),o=n("sPSN"),u=n("gyMJ"),l=n("9rMa"),c={data:function(){return{loading:!0}},components:{Topbar:i.default,Sidebar:r.default,ContentTabs:o.default},computed:{siteWarpperClasses:function(){return[{"site-sidebar--collapse":this.$store.state.sidebarCollapse}]},siteContentWarpperStyles:function(){return[{minHeight:this.$store.state.documentClientHeight+"px"}]}},created:function(){this.getUserInfo()},mounted:function(){var e=this;this.resetDocumentClientHeight(),window.onresize=function(){e.resetDocumentClientHeight()}},methods:s()({resetDocumentClientHeight:function(){this.UPDATE_DOCUMENT_CLIENT_HEIGHT({height:document.documentElement.clientHeight})},getUserInfo:function(){var e=this;u.a.user.info().then(function(t){var n=t.data;n&&0===n.code&&(e.loading=!1,e.DELETE_CONTENT_TABS([]),e.UPDATE_USER_ID({id:n.user.userId}),e.UPDATE_USER_NAME({name:n.user.username}))})}},Object(l.b)(["UPDATE_DOCUMENT_CLIENT_HEIGHT","UPDATE_USER_ID","UPDATE_USER_NAME","DELETE_CONTENT_TABS"]))},d={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:this.loading,expression:"loading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"site-wrapper",class:this.siteWarpperClasses,attrs:{"element-loading-text":"拼命加载中"}},[this.loading?this._e():[t("topbar"),this._v(" "),t("sidebar"),this._v(" "),t("div",{staticClass:"site-content__wrapper",style:this.siteContentWarpperStyles},[t("router-view")],1)]],2)},staticRenderFns:[]},m=n("46Yf")(c,d,!1,null,null,null);t.default=m.exports},"8HvM":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("4YfN"),s=n.n(a),i=n("OHGg"),r=n("gyMJ"),o=n("9rMa"),u={data:function(){return{updatePassowrdVisible:!1}},components:{UpdatePassword:i.default},methods:s()({switchSidebarCollapseHandle:function(){this.SWITCH_SIDEBAR_COLLAPSE({collapse:!this.$store.state.sidebarCollapse})},updatePasswordHandle:function(){var e=this;this.updatePassowrdVisible=!0,this.$nextTick(function(){e.$refs.updatePassowrd.init()})},logoutHandle:function(){var e=this;this.$confirm("确定进行[退出]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){r.a.common.logout().then(function(t){var n=t.data;n&&0===n.code&&(e.DELETE_CONTENT_TABS([]),e.$cookie.delete("token"),e.$router.replace({name:"login"}))})})}},Object(o.b)(["SWITCH_SIDEBAR_COLLAPSE","DELETE_CONTENT_TABS"]))},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"site-topbar"},[a("div",{staticClass:"site-topbar__header"},[a("h1",{staticClass:"site-logo",on:{click:function(t){e.$router.push({name:"home"})}}},[a("a",{staticClass:"site-logo__lg",attrs:{href:"javascript:;"}},[e._v("人人快速开发平台")]),e._v(" "),a("a",{staticClass:"site-logo__mini",attrs:{href:"javascript:;"}},[e._v("人人")])])]),e._v(" "),a("div",{staticClass:"site-topbar__body clearfix"},[a("el-menu",{staticClass:"site-topbar__menu",attrs:{mode:"horizontal"}},[a("el-menu-item",{staticClass:"site-topbar__switch",attrs:{index:"1-1"},on:{click:function(t){e.switchSidebarCollapseHandle()}}},[a("icon-svg",{attrs:{name:"zhedie"}})],1)],1),e._v(" "),a("el-menu",{staticClass:"site-topbar__menu site-topbar__menu--right",attrs:{mode:"horizontal"}},[a("el-menu-item",{staticClass:"site-topbar__avatar",attrs:{index:"1-2"}},[a("el-dropdown",{attrs:{placement:"bottom","hide-on-click":!1}},[a("span",{staticClass:"el-dropdown-link"},[a("img",{attrs:{src:n("zQrT"),alt:e.$store.state.user.name}}),e._v("\n            "+e._s(e.$store.state.user.name)+"\n          ")]),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{nativeOn:{click:function(t){e.updatePasswordHandle()}}},[e._v("修改密码")]),e._v(" "),a("el-dropdown-item",{nativeOn:{click:function(t){e.logoutHandle()}}},[e._v("退出")])],1)],1)],1)],1)],1),e._v(" "),e.updatePassowrdVisible?a("update-password",{ref:"updatePassowrd"}):e._e()],1)},staticRenderFns:[]},c=n("46Yf")(u,l,!1,null,null,null);t.default=c.exports},jqh9:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("3cXf"),s=n.n(a),i=n("4YfN"),r=n.n(i),o=n("0xDb"),u={name:"sub-menu-nav",props:{menuNav:Object,required:!0},components:{SubMenuNav:c},methods:{gotoRouteHandle:function(e){var t=Object(o.a)(e);/\S/.test(t)&&this.$router.push({name:t})}}},l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.menuNav.list&&e.menuNav.list.length>=1?n("el-submenu",{attrs:{"data-idx":e.menuNav.menuId+"",index:e.menuNav.menuId+""}},[n("template",{attrs:{slot:"title"},slot:"title"},[n("i",{class:["site-sidebar__menu-icon",e.menuNav.icon?e.menuNav.icon:"fa fa-circle-o"]}),e._v(" "),n("span",[e._v(e._s(e.menuNav.name))])]),e._v(" "),e._l(e.menuNav.list,function(e){return n("sub-menu-nav",{key:e.menuId,attrs:{"menu-nav":e}})})],2):n("el-menu-item",{attrs:{index:e.menuNav.menuId+"","data-idx":e.menuNav.menuId+""},on:{click:function(t){e.gotoRouteHandle(e.menuNav.url)}}},[n("i",{class:["site-sidebar__menu-icon",e.menuNav.icon?e.menuNav.icon:"fa fa-circle-o"]}),e._v(" "),n("span",[e._v(e._s(e.menuNav.name))])])},staticRenderFns:[]},c=n("46Yf")(u,l,!1,null,null,null).exports,d=n("gyMJ"),m=n("9rMa"),_=n("Xo2K"),f=n.n(_),v={data:function(){return{menuNavActive:"1-1"}},components:{SubMenuNav:c},watch:{$route:"routeHandle"},created:function(){var e=this;this.getMenuNavList().then(function(){e.routeHandle(e.$route)})},methods:r()({getMenuNavList:function(){var e=this;return d.a.menu.nav().then(function(t){var n=t.data;n&&0===n.code?(e.UPDATE_MENU_NAV_LIST(n.menuList),sessionStorage.setItem("permissions",s()(n.permissions||"[]"))):(e.UPDATE_MENU_NAV_LIST([]),sessionStorage.setItem("permissions","[]"))})},routeHandle:function(e){if(/^\/n\/.*$/.test(e.path)){var t=this.$store.state.contentTabs.filter(function(t){return t.name===e.name})[0];if(f()(t)){var n=this.getMenuNavByRouteName(e.name,this.$store.state.menuNavList);f()(n)||(t={id:n.menuId,name:e.name,title:n.name,type:-1!==(window.SITE_CONFIG.nestIframeRouteNameList||[]).indexOf(e.name)?"iframe":"module",url:n.url},this.ADD_CONTENT_TAB(t))}this.menuNavActive=t.id+"",this.UPDATE_CONTENT_TABS_ACTIVE_NAME({name:e.name})}},getMenuNavByRouteName:function(e,t){for(var n=0;n<t.length;n++){if(t[n].list&&t[n].list.length>=1)return this.getMenuNavByRouteName(e,t[n].list);if(Object(o.a)(t[n].url)===e)return t[n]}}},Object(m.b)(["UPDATE_MENU_NAV_LIST","ADD_CONTENT_TAB","UPDATE_CONTENT_TABS_ACTIVE_NAME"]))},h={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("aside",{staticClass:"site-sidebar"},[n("div",{staticClass:"site-sidebar__inner"},[n("el-menu",{staticClass:"site-sidebar__menu",attrs:{"default-active":e.menuNavActive,collapse:e.$store.state.sidebarCollapse,"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"}},[n("el-menu-item",{attrs:{index:"1-1"},on:{click:function(t){e.$router.push({name:"home"})}}},[n("i",{staticClass:"site-sidebar__menu-icon fa fa-home"}),e._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[e._v("首页")])]),e._v(" "),e._l(e.$store.state.menuNavList,function(e){return n("sub-menu-nav",{key:e.menuId,attrs:{"menu-nav":e}})})],2)],1)])},staticRenderFns:[]},p=n("46Yf")(v,h,!1,null,null,null);t.default=p.exports},sPSN:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("4YfN"),s=n.n(a),i=n("Xo2K"),r=n.n(i),o=n("9rMa"),u={data:function(){return{}},computed:{tabActiveName:{get:function(){return this.$store.state.contentTabsActiveName},set:function(e){this.UPDATE_CONTENT_TABS_ACTIVE_NAME({name:e})}}},methods:s()({contentViewHeight:function(e){var t=this.$store.state.documentClientHeight;return t-=50,t-=40,t-=15,t-=15,t-=2,t+="px","iframe"===e.type?{height:t}:{minHeight:t}},getNestIframeUrl:function(e){return window.SITE_CONFIG.nestIframeUrl+e},selectedTabHandle:function(e){e=this.$store.state.contentTabs.filter(function(t){return t.name===e.name}),r()(e)||this.$router.push({name:e[0].name})},removeTabHandle:function(e){var t=this,n=this.$store.state.contentTabs.filter(function(t){return t.name!==e});e===this.tabActiveName&&this.$router.push({name:n[n.length-1].name},function(){t.tabActiveName=t.$route.name}),this.UPDATE_CONTENT_TABS(n)}},Object(o.b)(["UPDATE_CONTENT_TABS","UPDATE_CONTENT_TABS_ACTIVE_NAME"]))},l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"site-content site-content--tabs"},[n("el-tabs",{attrs:{closable:e.$store.state.contentTabs.length>1},on:{"tab-click":e.selectedTabHandle,"tab-remove":e.removeTabHandle},model:{value:e.tabActiveName,callback:function(t){e.tabActiveName=t},expression:"tabActiveName"}},e._l(e.$store.state.contentTabs,function(t){return n("el-tab-pane",{key:t.name,attrs:{label:t.title,name:t.name}},[n("el-card",{attrs:{"body-style":e.contentViewHeight(t)}},["iframe"===t.type?n("iframe",{attrs:{src:e.getNestIframeUrl(t.url),width:"100%",height:"100%",frameborder:"0",scrolling:"yes"}}):n("keep-alive",[t.name===e.tabActiveName?n("router-view"):e._e()],1)],1)],1)}))],1)},staticRenderFns:[]},c=n("46Yf")(u,l,!1,null,null,null);t.default=c.exports},zQrT:function(e,t,n){e.exports=n.p+"static/img/avatar.c58e465.png"}});