(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{341:function(t,n,e){var content=e(347);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(160).default)("07429bcb",content,!0,{sourceMap:!1})},343:function(t,n,e){var content=e(350);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(160).default)("348f63a5",content,!0,{sourceMap:!1})},344:function(t,n,e){"use strict";e(36);var o=e(0),l=(e(11),{data:function(){return{getYear:(new Date).getFullYear(),hotel:"",about:""}},computed:{URL:function(){return this.$store.state.API_URL}},methods:{setURL:function(){this.$store.commit("SET_URL",this.$config.API_URL)},getHotel:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.$axios.get("/hotel");case 3:e=n.sent,t.hotel=e.data.data[0],n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()},getAbout:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.$axios.get("/about");case 3:e=n.sent,t.about=e.data.data[0],n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()}},mounted:function(){this.getHotel(),this.getAbout(),this.setURL();var t=document.getElementById("script");null!=t&&document.body.removeChild(t);var script=document.createElement("script");script.type="text/javascript",script.src="/js/script.js",script.async=!0,script.id="script";var n=document.querySelector("#footer");n?n.appendChild(script):console.error("Could not find app node to append script element")}}),r=(e(346),e(61)),component=Object(r.a)(l,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"div-block-25",attrs:{id:"footer"}},[n("div",{staticClass:"custom-container"},[n("div",{staticClass:"custom-flex"},[n("div",{staticClass:"foot-row"},[n("div",{staticClass:"div-block-64"},[t._m(0),t._v(" "),t.about.content?n("div",{staticClass:"div-block-65"},[n("div",{staticClass:"custom-body-text light",domProps:{innerHTML:t._s("".concat(t.about.content.substring(0,300),"..."))}})]):t._e(),t._v(" "),t._m(1)]),t._v(" "),n("div",{staticClass:"div-block-64 center"},[t._m(2),t._v(" "),n("ul",{staticClass:"list w-list-unstyled",attrs:{role:"list"}},[n("li",{staticClass:"foot-links"},[n("nuxtLink",{staticClass:"custom-body-text light",attrs:{to:"about"}},[t._v("About")])],1),t._v(" "),n("li",{staticClass:"foot-links"},[n("nuxtLink",{staticClass:"custom-body-text light",attrs:{to:"restaurant"}},[t._v("Restaurant")])],1),t._v(" "),n("li",{staticClass:"foot-links"},[n("nuxtLink",{staticClass:"custom-body-text light",attrs:{to:"rooms"}},[t._v("Rooms & Suites")])],1),t._v(" "),n("li",{staticClass:"foot-links"},[n("nuxtLink",{staticClass:"custom-body-text light",attrs:{to:"event-center"}},[t._v("Spa & Wellness")])],1),t._v(" "),n("li",{staticClass:"foot-links"},[n("nuxtLink",{staticClass:"custom-body-text light",attrs:{to:"contact"}},[t._v("Contact")])],1)])]),t._v(" "),n("div",{staticClass:"div-block-64"},[t._m(3),t._v(" "),n("div",{staticClass:"div-block-65"},[t.hotel.social?n("div",{staticClass:"custom-body-text light"},[t._v("\n              "+t._s(t.hotel.social[0].title)+"\n            ")]):t._e()]),t._v(" "),t.hotel.social?n("div",{staticClass:"div-block-66"},[n("img",{staticClass:"image-5",attrs:{src:"".concat(t.URL,"/uploads/").concat(t.hotel.social[2].icon),loading:"lazy",width:"29",alt:""}}),n("a",{staticClass:"thick-text white",attrs:{href:"tel:+2348037971542"}},[t._v("\n              "+t._s(t.hotel.social[2].title)),n("br")])]):t._e(),t._v(" "),t.hotel.social?n("div",{staticClass:"div-block-67"},[n("a",{staticClass:"small-email",attrs:{href:"#"}},[t._v(t._s(t.hotel.social[1].title))])]):t._e(),t._v(" "),n("div",{staticClass:"div-block-68"},t._l(t.hotel.media,(function(e,i){return n("a",{key:i,staticClass:"footer-link w-inline-block",attrs:{href:"".concat(e.title),target:"_blank"}},[null!=e.icon?n("img",{staticClass:"foot-icons",attrs:{src:"".concat(t.URL,"/uploads/").concat(e.icon),loading:"lazy",alt:""}}):t._e()])})),0)])])])]),t._v(" "),n("div",{staticClass:"div-block-69"},[n("div",{staticClass:"custom-body-text light"},[t._v("\n      © Copyright "+t._s(t.getYear)+" by\n      "),n("span",{staticClass:"text-span"},[t._v("Kenny Tech Studios")])])])])}),[function(){var t=this._self._c;return t("div",[t("h3",{staticClass:"card-title white"},[this._v("About Hotel")])])},function(){var t=this,n=t._self._c;return n("div",{staticClass:"div-block-71"},[n("div",{staticClass:"dropdown w-dropdown",attrs:{"data-hover":"false","data-delay":"0"}},[n("div",{staticClass:"dropdown-toggle w-dropdown-toggle"},[n("div",{staticClass:"custom-body-text light"},[t._v("English")]),t._v(" "),n("img",{attrs:{src:"/img/world.svg",loading:"lazy",width:"18",alt:""}})])])])},function(){var t=this._self._c;return t("div",[t("h3",{staticClass:"card-title white"},[this._v("Explore")])])},function(){var t=this._self._c;return t("div",[t("h3",{staticClass:"card-title white"},[this._v("Contact")])])}],!1,null,null,null);n.a=component.exports},345:function(t,n,e){"use strict";var o=e(0),l=(e(17),e(38),e(39),e(356),e(225),e(11),{data:function(){return{}},methods:{toggleSignup:function(){this.$store.commit("toggleSignup")},logout:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$auth.logout();case 2:case"end":return n.stop()}}),n)})))()},checkPasswordReset:function(){var t=new URL(window.location.href).searchParams.get("token");t?(this.$store.commit("setToken",t),this.$store.commit("falseEmail"),this.$store.commit("falseShowSignup"),this.toggleSignup()):this.$store.commit("setToken","")}},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated},user:function(){return this.$store.getters.getUserInfo}},mounted:function(){this.checkPasswordReset()}}),r=(e(349),e(61)),component=Object(r.a)(l,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"div-block-4"},[n("nuxt-link",{staticClass:"w-nav-brand",attrs:{to:"/"}},[n("img",{attrs:{src:"/img/logo.png",loading:"lazy",width:"163",alt:""}})]),t._v(" "),n("nav",{staticClass:"nav-menu w-nav-menu",attrs:{role:"navigation"}},[n("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:"/"}},[t._v("HOME")]),t._v(" "),n("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:"/about"}},[t._v("ABOUT")]),t._v(" "),n("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:"/rooms"}},[t._v("ROOMS & SUITES")]),t._v(" "),n("div",{staticClass:"nav-link w-dropdown",attrs:{"data-hover":"false","data-delay":"0","data-w-id":"21edb091-b1d3-0555-7b99-8b03580d7d04"}},[t._m(0),t._v(" "),n("nav",{staticClass:"mega-menu w-dropdown-list"},[n("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:"/restaurant"}},[t._v("RESTAURANT")]),t._v(" "),n("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:"/event-center"}},[t._v("EVENT/CLUB")]),t._v(" "),n("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:"/extra"}},[t._v("EXTRAS")])],1)]),t._v(" "),n("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:"/news"}},[t._v("NEWS")]),t._v(" "),n("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:"/contact"}},[t._v("CONTACT")]),t._v(" "),t.isAuthenticated?n("div",{staticClass:"nav-link w-dropdown",attrs:{"data-hover":"false","data-delay":"0","data-w-id":"21edb091-b1d3-0555-7b99-8b03580d7d04"}},[t._m(1),t._v(" "),n("nav",{staticClass:"mega-menu w-dropdown-list"},[n("nuxt-link",{staticClass:"nav-link sign-in auth w-nav-link",attrs:{to:"/admin"}},[t._v("DASHBOARD")]),t._v(" "),n("a",{staticClass:"nav-link sign-in auth w-nav-link",attrs:{href:"#"},on:{click:t.logout}},[t._v("LOGOUT")]),t._v(" "),"Reception"==t.user.staffType?n("a",{staticClass:"nav-link sign-in auth w-nav-link",attrs:{href:"#"},on:{click:t.toggleSignup}},[t._v("SIGN IN")]):t._e()],1)]):n("a",{staticClass:"nav-link sign-in w-nav-link",attrs:{href:"#"},on:{click:t.toggleSignup}},[t._v("SIGN IN")])],1),t._v(" "),t._m(2)],1)}),[function(){var t=this,n=t._self._c;return n("div",{staticClass:"nav-toggle w-dropdown-toggle"},[n("div",{staticClass:"w-icon-dropdown-toggle"}),t._v(" "),n("div",[t._v("PAGES")])])},function(){var t=this,n=t._self._c;return n("div",{staticClass:"nav-toggle w-dropdown-toggle"},[n("div",{staticClass:"w-icon-dropdown-toggle"}),t._v(" "),n("div",[t._v("AUTHENTICATION")])])},function(){var t=this._self._c;return t("div",{staticClass:"menu-button w-nav-button"},[t("div",{staticClass:"w-icon-nav-menu"})])}],!1,null,null,null);n.a=component.exports},346:function(t,n,e){"use strict";e(341)},347:function(t,n,e){var o=e(159)(!1);o.push([t.i,".main-nav.w-nav{background:linear-gradient(180deg,rgba(0,0,0,.5),transparent)}",""]),t.exports=o},349:function(t,n,e){"use strict";e(343)},350:function(t,n,e){var o=e(159)(!1);o.push([t.i,".sign-in.w-nav-link.auth{width:100%;border-bottom:1px solid #f5f5f5}",""]),t.exports=o},595:function(t,n,e){"use strict";e.r(n);e(36);var o=e(0),l=(e(11),e(344)),r=e(345),c={components:{HomeFooter:l.a,HomeNav:r.a},data:function(){return{room:""}},methods:{getRoom:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var e,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.$route.params.id,n.next=3,t.$store.dispatch("pages/room/GET_ROOM",e);case 3:o=n.sent,t.room=o;case 5:case"end":return n.stop()}}),n)})))()}},computed:{URL:function(){return this.$store.state.API_URL}},mounted:function(){this.getRoom()}},d=e(61),component=Object(d.a)(c,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"room-details"},[n("div",{staticClass:"detail-hero"},[n("div",{staticClass:"slider-5 w-slider",attrs:{"data-delay":"4000","data-animation":"slide","data-autoplay":"false","data-easing":"ease","data-hide-arrows":"false","data-disable-swipe":"false","data-autoplay-limit":"0","data-nav-spacing":"3","data-duration":"500","data-infinite":"true"}},[n("div",{staticClass:"w-slider-mask"},t._l(t.room.roomPictures,(function(e){return n("div",{key:e,staticClass:"detail-slide w-slide",style:{backgroundImage:"url(".concat(t.URL,"/uploads/").concat(e,")")}},[n("div",{staticClass:"div-block-89"})])})),0),t._v(" "),n("div",{staticClass:"navbar-holder"},[n("div",{staticClass:"main-nav w-nav",attrs:{"data-animation":"default","data-collapse":"medium","data-duration":"400","data-easing":"ease","data-easing2":"ease",role:"banner"}},[n("div",{staticClass:"custom-container"},[n("HomeNav")],1)])]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"w-slider-nav w-round"})])]),t._v(" "),n("div",[n("div",{staticClass:"custom-container"},[n("div",{staticClass:"custom-flex"},[t._m(2),t._v(" "),t._m(3),t._v(" "),n("div",{staticClass:"div-block-91"},[n("h2",{staticClass:"first-title"},[t._v(t._s(t.room.roomName))])]),t._v(" "),n("div",{staticClass:"div-block-101"},[n("div",{staticClass:"div-block-96"},[n("div",{staticClass:"div-block-92"},[n("div",{staticClass:"custom-body-text",domProps:{innerHTML:t._s(t.room.roomDetails)}})]),t._v(" "),n("div",{staticClass:"div-block-97"},[n("nuxt-link",{staticClass:"link-block w-inline-block",attrs:{to:"/admin/book"}},[n("div",{staticClass:"text-block"},[t._v("CHECK NOW")])])],1)]),t._v(" "),n("div",{staticClass:"div-block-98"},[t._m(4),t._v(" "),t._l(t.room.roomFacilities,(function(e,o){return n("div",{key:o,staticClass:"div-block-102"},[n("div",{staticClass:"custom-body-text"},[n("img",{staticStyle:{width:"20px","margin-right":"20px"},attrs:{src:"".concat(t.URL,"/uploads/").concat(e.icon),alt:""}}),t._v("\n                "+t._s(e.title)+"\n              ")])])}))],2)])])])]),t._v(" "),n("HomeFooter")],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"left-arrow-6 w-slider-arrow-left"},[t("div",{staticClass:"w-icon-slider-left"})])},function(){var t=this._self._c;return t("div",{staticClass:"right-arrow-6 w-slider-arrow-right"},[t("div",{staticClass:"w-icon-slider-right"})])},function(){var t=this._self._c;return t("div",{staticClass:"div-block-99"},[t("div",{staticClass:"star-holder"},[t("img",{staticClass:"custom-star",attrs:{src:"/img/star.svg",loading:"lazy",width:"19",alt:""}}),t("img",{staticClass:"custom-star",attrs:{src:"/img/star.svg",loading:"lazy",width:"19",alt:""}}),t("img",{staticClass:"custom-star",attrs:{src:"/img/star.svg",loading:"lazy",width:"19",alt:""}}),t("img",{staticClass:"custom-star",attrs:{src:"/img/star.svg",loading:"lazy",width:"19",alt:""}}),t("img",{staticClass:"custom-star",attrs:{src:"/img/star.svg",loading:"lazy",width:"19",alt:""}})])])},function(){var t=this._self._c;return t("div",{staticClass:"div-block-100"},[t("div",{staticClass:"custom-condensed dark"},[this._v("LUXURY HOTEL")])])},function(){var t=this._self._c;return t("div",[t("h6",{staticClass:"card-title"},[this._v("Amenities")])])}],!1,null,null,null);n.default=component.exports}}]);