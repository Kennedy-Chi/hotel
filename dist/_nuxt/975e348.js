(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{342:function(t,e,n){var content=n(353);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(160).default)("74bce5e2",content,!0,{sourceMap:!1})},343:function(t,e,n){var content=n(356);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(160).default)("0cd5c38a",content,!0,{sourceMap:!1})},344:function(t,e,n){"use strict";n(36);var o=n(0),l=(n(11),{data:function(){return{getYear:(new Date).getFullYear(),hotel:"",about:""}},computed:{URL:function(){return this.$store.state.API_URL}},methods:{setURL:function(){this.$store.commit("SET_URL",this.$config.API_URL)},loadScript:function(){var t=document.getElementById("script");null!=t&&document.body.removeChild(t);var script=document.createElement("script");script.type="text/javascript",script.src="/js/script.js",script.async=!0,script.id="script";var e=document.querySelector("#footer");e?e.appendChild(script):console.error("Could not find app node to append script element")},getAbout:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/about");case 3:n=e.sent,t.about=n.data.data[0],e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getHotel:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/hotel");case 3:n=e.sent,t.hotel=n.data.data[0],t.loadScript(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}},mounted:function(){this.getAbout(),this.setURL(),this.getHotel()}}),c=(n(352),n(61)),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"div-block-25",attrs:{id:"footer"}},[e("div",{staticClass:"custom-container"},[e("div",{staticClass:"custom-flex"},[e("div",{staticClass:"foot-row"},[e("div",{staticClass:"div-block-64"},[t._m(0),t._v(" "),t.about.content?e("div",{staticClass:"div-block-65"},[e("div",{staticClass:"custom-body-text light",domProps:{innerHTML:t._s("".concat(t.about.content.substring(0,300),"..."))}})]):t._e(),t._v(" "),t._m(1)]),t._v(" "),e("div",{staticClass:"div-block-64 center"},[t._m(2),t._v(" "),e("ul",{staticClass:"list w-list-unstyled",attrs:{role:"list"}},[e("li",{staticClass:"foot-links"},[e("nuxtLink",{staticClass:"custom-body-text light",attrs:{to:"about"}},[t._v("About")])],1),t._v(" "),e("li",{staticClass:"foot-links"},[e("nuxtLink",{staticClass:"custom-body-text light",attrs:{to:"restaurant"}},[t._v("Restaurant")])],1),t._v(" "),e("li",{staticClass:"foot-links"},[e("nuxtLink",{staticClass:"custom-body-text light",attrs:{to:"rooms"}},[t._v("Rooms & Suites")])],1),t._v(" "),e("li",{staticClass:"foot-links"},[e("nuxtLink",{staticClass:"custom-body-text light",attrs:{to:"event-center"}},[t._v("Spa & Wellness")])],1),t._v(" "),e("li",{staticClass:"foot-links"},[e("nuxtLink",{staticClass:"custom-body-text light",attrs:{to:"contact"}},[t._v("Contact")])],1)])]),t._v(" "),e("div",{staticClass:"div-block-64"},[t._m(3),t._v(" "),e("div",{staticClass:"div-block-65"},[t.hotel.social?e("div",{staticClass:"custom-body-text light"},[t._v("\n              "+t._s(t.hotel.social[0].title)+"\n            ")]):t._e()]),t._v(" "),t.hotel.social?e("div",{staticClass:"div-block-66"},[e("img",{staticClass:"image-5",attrs:{src:"".concat(t.URL,"/").concat(t.hotel.social[2].icon),loading:"lazy",width:"29",alt:""}}),e("a",{staticClass:"thick-text white",attrs:{href:"tel:+2348037971542"}},[t._v("\n              "+t._s(t.hotel.socialColored[2].title)),e("br")])]):t._e(),t._v(" "),t.hotel.social?e("div",{staticClass:"div-block-67"},[e("a",{staticClass:"small-email",attrs:{href:"#"}},[t._v(t._s(t.hotel.social[1].title))])]):t._e(),t._v(" "),e("div",{staticClass:"div-block-68"},t._l(t.hotel.media,(function(n,i){return e("a",{key:i,staticClass:"footer-link w-inline-block",attrs:{href:"".concat(n.title),target:"_blank"}},[null!=n.icon?e("img",{staticClass:"foot-icons",attrs:{src:"".concat(t.URL,"/").concat(n.icon),loading:"lazy",alt:""}}):t._e()])})),0)])])])]),t._v(" "),e("div",{staticClass:"div-block-69"},[e("div",{staticClass:"custom-body-text light"},[t._v("\n      © Copyright "+t._s(t.getYear)+" by\n      "),e("span",{staticClass:"text-span"},[t._v("Kenny Tech Studios")])])])])}),[function(){var t=this._self._c;return t("div",[t("h3",{staticClass:"card-title white"},[this._v("About Hotel")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"div-block-71"},[e("div",{staticClass:"dropdown w-dropdown",attrs:{"data-hover":"false","data-delay":"0"}},[e("div",{staticClass:"dropdown-toggle w-dropdown-toggle"},[e("div",{staticClass:"custom-body-text light"},[t._v("English")]),t._v(" "),e("img",{attrs:{src:"/img/world.svg",loading:"lazy",width:"18",alt:""}})])])])},function(){var t=this._self._c;return t("div",[t("h3",{staticClass:"card-title white"},[this._v("Explore")])])},function(){var t=this._self._c;return t("div",[t("h3",{staticClass:"card-title white"},[this._v("Contact")])])}],!1,null,null,null);e.a=component.exports},345:function(t,e,n){"use strict";var o=n(0),l=(n(17),n(38),n(39),n(354),n(226),n(11),{data:function(){return{}},methods:{toggleSignup:function(){this.$store.commit("toggleSignup")},logout:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:case"end":return e.stop()}}),e)})))()},checkPasswordReset:function(){var t=new URL(window.location.href).searchParams.get("token");t?(this.$store.commit("setToken",t),this.$store.commit("falseEmail"),this.$store.commit("falseShowSignup"),this.toggleSignup()):this.$store.commit("setToken","")},getHotel:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/hotel");case 3:o=e.sent,t.$store.commit("SET_HOTEL_DATA",null===(n=o.data)||void 0===n?void 0:n.data[0]),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getRooms:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/rooms/?limit=5");case 3:return o=e.sent,e.t0=t.$store,e.next=7,null===(n=o.data)||void 0===n?void 0:n.data;case 7:e.t1=e.sent,e.t0.commit.call(e.t0,"SET_ROOM_DATA",e.t1),e.next=14;break;case 11:e.prev=11,e.t2=e.catch(0),console.log(e.t2);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()}},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated},user:function(){return this.$store.getters.getUserInfo}},mounted:function(){this.checkPasswordReset()}}),c=(n(355),n(61)),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"div-block-4"},[e("nuxt-link",{staticClass:"w-nav-brand",attrs:{to:"/"}},[e("img",{attrs:{src:"/img/logo.png",loading:"lazy",width:"163",alt:""}})]),t._v(" "),e("nav",{staticClass:"nav-menu w-nav-menu",attrs:{role:"navigation"}},[e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:"/"}},[t._v("HOME")]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:"/about"}},[t._v("ABOUT")]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:"/rooms"}},[t._v("ROOMS & SUITES")]),t._v(" "),e("div",{staticClass:"nav-link w-dropdown",attrs:{"data-hover":"false","data-delay":"0","data-w-id":"21edb091-b1d3-0555-7b99-8b03580d7d04"}},[t._m(0),t._v(" "),e("nav",{staticClass:"mega-menu w-dropdown-list"},[e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:"/restaurant"}},[t._v("RESTAURANT")]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:"/event-center"}},[t._v("EVENT/CLUB")])],1)]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:"/news"}},[t._v("NEWS")]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:"/contact"}},[t._v("CONTACT")]),t._v(" "),t.isAuthenticated?e("div",{staticClass:"nav-link w-dropdown",attrs:{"data-hover":"false","data-delay":"0","data-w-id":"21edb091-b1d3-0555-7b99-8b03580d7d04"}},[t._m(1),t._v(" "),e("nav",{staticClass:"mega-menu w-dropdown-list"},[e("nuxt-link",{staticClass:"nav-link sign-in auth w-nav-link",attrs:{to:"/admin"}},[t._v("DASHBOARD")]),t._v(" "),e("a",{staticClass:"nav-link sign-in auth w-nav-link",attrs:{href:"#"},on:{click:t.logout}},[t._v("LOGOUT")]),t._v(" "),"Reception"==t.user.staffType?e("a",{staticClass:"nav-link sign-in auth w-nav-link",attrs:{href:"#"},on:{click:t.toggleSignup}},[t._v("SIGN IN")]):t._e()],1)]):e("a",{staticClass:"nav-link sign-in w-nav-link",attrs:{href:"#"},on:{click:t.toggleSignup}},[t._v("SIGN IN")])],1),t._v(" "),t._m(2)],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"nav-toggle w-dropdown-toggle"},[e("div",{staticClass:"w-icon-dropdown-toggle"}),t._v(" "),e("div",[t._v("PAGES")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"nav-toggle w-dropdown-toggle"},[e("div",{staticClass:"w-icon-dropdown-toggle"}),t._v(" "),e("div",[t._v("AUTHENTICATION")])])},function(){var t=this._self._c;return t("div",{staticClass:"menu-button w-nav-button"},[t("div",{staticClass:"w-icon-nav-menu"})])}],!1,null,null,null);e.a=component.exports},352:function(t,e,n){"use strict";n(342)},353:function(t,e,n){var o=n(159)(!1);o.push([t.i,".main-nav.w-nav{background:linear-gradient(180deg,rgba(0,0,0,.5),transparent)}",""]),t.exports=o},355:function(t,e,n){"use strict";n(343)},356:function(t,e,n){var o=n(159)(!1);o.push([t.i,".sign-in.w-nav-link.auth{width:100%;border-bottom:1px solid #f5f5f5}",""]),t.exports=o},367:function(t,e,n){"use strict";n(36);var o=n(0),l=(n(11),{data:function(){return{users:[]}},computed:{URL:function(){return this.$store.state.API_URL}},methods:{getUsers:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/users/?reviewStatus=true");case 3:return n=e.sent,e.next=6,n.data.data;case 6:t.users=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.response);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}},mounted:function(){this.getUsers()}}),c=n(61),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"div-block-34 pool"},[e("div",{staticClass:"div-block-37"},[e("div",{staticClass:"custom-container"},[e("div",{staticClass:"custom-flex center"},[e("div",{staticClass:"testimony-slider w-slider",attrs:{"data-delay":"4000","data-animation":"slide","data-autoplay":"false","data-easing":"ease","data-hide-arrows":"false","data-disable-swipe":"false","data-autoplay-limit":"0","data-nav-spacing":"3","data-duration":"500","data-infinite":"true"}},[t.users?e("div",{staticClass:"w-slider-mask"},t._l(t.users,(function(n){return e("div",{key:n._id,staticClass:"w-slide"},[t._m(0,!0),t._v(" "),t._m(1,!0),t._v(" "),e("div",{staticClass:"light-line"}),t._v(" "),e("div",{staticClass:"div-block-57"},[e("div",{staticClass:"custom-body-text white"},[t._v("\n                  "+t._s(n.review)+"\n                ")])]),t._v(" "),e("div",{staticClass:"div-block-43"},[e("div",{staticClass:"div-block-42",style:{backgroundImage:"url(".concat(t.URL,"/").concat(n.profilePicture,")")}}),t._v(" "),e("div",{staticClass:"div-block-44"},[t._m(2,!0),t._v(" "),e("div",{staticClass:"div-block-45"},[e("div",{staticClass:"custom-condensed"},[t._v(t._s(n.fullName))])]),t._v(" "),t._m(3,!0)])])])})),0):t._e(),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),e("div",{staticClass:"slide-nav-2 w-slider-nav w-round"})])])])])])}),[function(){var t=this._self._c;return t("div",[t("div",{staticClass:"custom-condensed"},[this._v("TESTIMONIALS")])])},function(){var t=this._self._c;return t("div",[t("h2",{staticClass:"first-title light small"},[this._v("\n                  What client's Say?\n                ")])])},function(){var t=this._self._c;return t("div",{staticClass:"star-holder"},[t("img",{staticClass:"custom-star",attrs:{src:"/img/star.svg",loading:"lazy",width:"19",alt:""}}),t("img",{staticClass:"custom-star",attrs:{src:"/img/star.svg",loading:"lazy",width:"19",alt:""}}),t("img",{staticClass:"custom-star",attrs:{src:"/img/star.svg",loading:"lazy",width:"19",alt:""}}),t("img",{staticClass:"custom-star",attrs:{src:"/img/star.svg",loading:"lazy",width:"19",alt:""}}),t("img",{staticClass:"custom-star",attrs:{src:"/img/star.svg",loading:"lazy",width:"19",alt:""}})])},function(){var t=this._self._c;return t("div",[t("div",{staticClass:"custom-body-text white"},[this._v("Guest review")])])},function(){var t=this._self._c;return t("div",{staticClass:"left-arrow-3 w-slider-arrow-left"},[t("div",{staticClass:"w-icon-slider-left"})])},function(){var t=this._self._c;return t("div",{staticClass:"right-arrow-3 w-slider-arrow-right"},[t("div",{staticClass:"w-icon-slider-right"})])}],!1,null,null,null);e.a=component.exports},596:function(t,e,n){"use strict";n.r(e);n(36);var o=n(0),l=(n(11),n(344)),c=n(345),r=n(367),d={components:{HomeFooter:l.a,HomeNav:c.a,Testimony:r.a},data:function(){return{banners:[]}},computed:{URL:function(){return this.$store.state.API_URL}},methods:{getBanner:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"?status=false&page=Restaurant",e.prev=1,e.next=4,t.$axios.get("/banner/".concat("?status=false&page=Restaurant"));case 4:n=e.sent,t.banners=n.data.data,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()}},mounted:function(){this.getBanner()}},v=n(61),component=Object(v.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"event"},[e("Signup"),t._v(" "),e("div",{staticClass:"detail-hero"},[e("div",{staticClass:"slider-2 w-slider",attrs:{"data-delay":"5000","data-animation":"fade","data-autoplay":"true","data-easing":"ease-in-out-cubic","data-hide-arrows":"false","data-disable-swipe":"false","data-autoplay-limit":"0","data-nav-spacing":"3","data-duration":"1000","data-infinite":"true"}},[e("div",{staticClass:"div-block-74"},[e("div",{staticClass:"main-nav w-nav",attrs:{"data-animation":"default","data-collapse":"medium","data-duration":"400","data-easing":"ease","data-easing2":"ease",role:"banner"}},[e("div",{staticClass:"custom-container"},[e("HomeNav")],1)])]),t._v(" "),t.banners?e("div",{staticClass:"w-slider-mask"},[e("div",{staticClass:"hero-slide w-slide"},t._l(t.banners,(function(n){return e("div",{key:n._id,staticClass:"slide-bg",style:{backgroundImage:"url(".concat(t.URL,"/uploads/").concat(n.image,")")}},[t._m(0,!0)])})),0)]):t._e(),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("div",{staticClass:"slide-nav w-slider-nav w-round"})])]),t._v(" "),t._m(3),t._v(" "),e("Testimony"),t._v(" "),e("HomeFooter")],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"div-block-2"},[e("div",{staticClass:"div-block-10"},[e("div",{staticClass:"div-block-6",staticStyle:{opacity:"0"},attrs:{"data-w-id":"af965a2f-e6a4-b89e-79c3-155ad1d6a010"}},[e("div",{staticClass:"star-holder"},[e("img",{staticClass:"custom-star",attrs:{src:"/img/star.svg",loading:"lazy",width:"19",alt:""}}),e("img",{staticClass:"custom-star",attrs:{src:"/img/star.svg",loading:"lazy",width:"19",alt:""}}),e("img",{staticClass:"custom-star",attrs:{src:"/img/star.svg",loading:"lazy",width:"19",alt:""}}),e("img",{staticClass:"custom-star",attrs:{src:"/img/star.svg",loading:"lazy",width:"19",alt:""}}),e("img",{staticClass:"custom-star",attrs:{src:"/img/star.svg",loading:"lazy",width:"19",alt:""}})])]),t._v(" "),e("div",{staticClass:"div-block-5",staticStyle:{opacity:"0"},attrs:{"data-w-id":"af965a2f-e6a4-b89e-79c3-155ad1d6a017"}},[e("div",{staticClass:"custom-condensed center"},[t._v("\n                    UNIQUE PLACE TO RELAX & ENJOY\n                  ")])]),t._v(" "),e("div",{staticClass:"div-block-8",staticStyle:{opacity:"0"},attrs:{"data-w-id":"af965a2f-e6a4-b89e-79c3-155ad1d6a01a"}},[e("h1",{staticClass:"heading"},[t._v("THE PERFECT BASE FOR YOU")])])])])},function(){var t=this._self._c;return t("div",{staticClass:"left-arrow w-slider-arrow-left"},[t("div",{staticClass:"w-icon-slider-left"})])},function(){var t=this._self._c;return t("div",{staticClass:"right-arrow w-slider-arrow-right"},[t("div",{staticClass:"w-icon-slider-right"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"club"},[e("div",{staticClass:"custom-container"},[e("div",{staticClass:"custom-flex"},[e("div",{staticClass:"div-block-99"},[e("div",{staticClass:"star-holder"},[e("img",{staticClass:"custom-star",attrs:{src:"https://uploads-ssl.webflow.com/62dec850062ac34180b54f5c/62e38a4b248f1dd171055098_star.svg",loading:"lazy",width:"19",alt:""}}),e("img",{staticClass:"custom-star",attrs:{src:"https://uploads-ssl.webflow.com/62dec850062ac34180b54f5c/62e38a4b248f1dd171055098_star.svg",loading:"lazy",width:"19",alt:""}}),e("img",{staticClass:"custom-star",attrs:{src:"https://uploads-ssl.webflow.com/62dec850062ac34180b54f5c/62e38a4b248f1dd171055098_star.svg",loading:"lazy",width:"19",alt:""}}),e("img",{staticClass:"custom-star",attrs:{src:"https://uploads-ssl.webflow.com/62dec850062ac34180b54f5c/62e38a4b248f1dd171055098_star.svg",loading:"lazy",width:"19",alt:""}}),e("img",{staticClass:"custom-star",attrs:{src:"https://uploads-ssl.webflow.com/62dec850062ac34180b54f5c/62e38a4b248f1dd171055098_star.svg",loading:"lazy",width:"19",alt:""}})])]),t._v(" "),e("div",{staticClass:"div-block-100"},[e("div",{staticClass:"custom-condensed dark"},[t._v("\n            AN EXPERIENCE FOR THE SENSES\n          ")])]),t._v(" "),e("div",{staticClass:"div-block-91 append"},[e("h2",{staticClass:"first-title"},[t._v("The Club"),e("br")])]),t._v(" "),e("div",{staticClass:"div-block-92"},[e("div",{staticClass:"custom-body-text"},[t._v("\n            Led by Chef de Micheal Martin, The Restaurant is celebrated for\n            its excellent cuisine and unique ambience. The gorgeous dining\n            room features three open studio kitchens, allowing you to enjoy\n            the sights and sounds of the culinary artistry on display. The\n            menu showcases both Asian and European influences, with a tempting\n            selection of classic favorites and creative dishes for you to\n            sample. Cheese connoisseurs will be drawn to the The Wine and\n            Cheese Cellar, housed in five-meter-high glass walls, where our\n            knowledgeable staff can introduce you to some of New York's\n            greatest culinary treasures.\n          ")])]),t._v(" "),e("div",{staticClass:"check-flex res"},[e("div",{staticClass:"hours"},[e("div",{staticClass:"card-title"},[t._v("Hours")]),t._v(" "),e("div",{staticClass:"div-block-94"},[e("img",{staticClass:"image-8",attrs:{src:"https://uploads-ssl.webflow.com/62dec850062ac34180b54f5c/62e4de355d5e1d2f15c11f05_clock-timing-icon%201.svg",loading:"lazy",width:"21",alt:""}}),t._v(" "),e("div",{staticClass:"custom-body-text"},[t._v("\n                Breakfast: 7.00 am – 11.00 am (daily)\n              ")])]),t._v(" "),e("div",{staticClass:"div-block-94"},[e("img",{staticClass:"image-8",attrs:{src:"https://uploads-ssl.webflow.com/62dec850062ac34180b54f5c/62e4de355d5e1d2f15c11f05_clock-timing-icon%201.svg",loading:"lazy",width:"21",alt:""}}),t._v(" "),e("div",{staticClass:"custom-body-text"},[t._v("\n                Lunch: 12.00 noon – 2.00 pm (daily)\n              ")])]),t._v(" "),e("div",{staticClass:"div-block-94"},[e("img",{staticClass:"image-8",attrs:{src:"https://uploads-ssl.webflow.com/62dec850062ac34180b54f5c/62e4de355d5e1d2f15c11f05_clock-timing-icon%201.svg",loading:"lazy",width:"21",alt:""}}),t._v(" "),e("div",{staticClass:"custom-body-text"},[t._v("\n                Dinner: open from 6.30 pm, last order at 10.00 pm (daily)\n              ")])])])]),t._v(" "),e("div",{staticClass:"div-block-95 res"},[e("div",[e("h6",{staticClass:"card-title"},[t._v("Dress Code")])]),t._v(" "),e("div",{staticClass:"div-block-92"},[e("div",{staticClass:"custom-body-text"},[t._v("\n              Smart casual (no shorts, hats, or sandals permitted)"),e("br")])])])])])])}],!1,null,null,null);e.default=component.exports}}]);