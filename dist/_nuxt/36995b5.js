(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{367:function(t,e,l){"use strict";l(36);var c=l(0),n=(l(11),{data:function(){return{users:[]}},computed:{URL:function(){return this.$store.state.API_URL}},methods:{getUsers:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/users/?reviewStatus=true");case 3:l=e.sent,t.users=l.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},mounted:function(){this.getUsers()}}),o=l(61),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"div-block-34 pool"},[e("div",{staticClass:"div-block-37"},[e("div",{staticClass:"custom-container"},[e("div",{staticClass:"custom-flex center"},[e("div",{staticClass:"testimony-slider w-slider",attrs:{"data-delay":"4000","data-animation":"slide","data-autoplay":"false","data-easing":"ease","data-hide-arrows":"false","data-disable-swipe":"false","data-autoplay-limit":"0","data-nav-spacing":"3","data-duration":"500","data-infinite":"true"}},[t.users?e("div",{staticClass:"w-slider-mask"},t._l(t.users,(function(l){return e("div",{key:l._id,staticClass:"w-slide"},[t._m(0,!0),t._v(" "),t._m(1,!0),t._v(" "),e("div",{staticClass:"light-line"}),t._v(" "),e("div",{staticClass:"div-block-57"},[e("div",{staticClass:"custom-body-text white"},[t._v("\n                  "+t._s(l.review)+"\n                ")])]),t._v(" "),e("div",{staticClass:"div-block-43"},[e("div",{staticClass:"div-block-42",style:{backgroundImage:"url(".concat(t.URL,"/uploads/").concat(l.profilePicture,")")}}),t._v(" "),e("div",{staticClass:"div-block-44"},[t._m(2,!0),t._v(" "),e("div",{staticClass:"div-block-45"},[e("div",{staticClass:"custom-condensed"},[t._v(t._s(l.fullName))])]),t._v(" "),t._m(3,!0)])])])})),0):t._e(),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),e("div",{staticClass:"slide-nav-2 w-slider-nav w-round"})])])])])])}),[function(){var t=this._self._c;return t("div",[t("div",{staticClass:"custom-condensed"},[this._v("TESTIMONIALS")])])},function(){var t=this._self._c;return t("div",[t("h2",{staticClass:"first-title light small"},[this._v("\n                  What client's Say?\n                ")])])},function(){var t=this._self._c;return t("div",{staticClass:"star-holder"},[t("img",{staticClass:"custom-star",attrs:{src:"/img/star.svg",loading:"lazy",width:"19",alt:""}}),t("img",{staticClass:"custom-star",attrs:{src:"/img/star.svg",loading:"lazy",width:"19",alt:""}}),t("img",{staticClass:"custom-star",attrs:{src:"/img/star.svg",loading:"lazy",width:"19",alt:""}}),t("img",{staticClass:"custom-star",attrs:{src:"/img/star.svg",loading:"lazy",width:"19",alt:""}}),t("img",{staticClass:"custom-star",attrs:{src:"/img/star.svg",loading:"lazy",width:"19",alt:""}})])},function(){var t=this._self._c;return t("div",[t("div",{staticClass:"custom-body-text white"},[this._v("Guest review")])])},function(){var t=this._self._c;return t("div",{staticClass:"left-arrow-3 w-slider-arrow-left"},[t("div",{staticClass:"w-icon-slider-left"})])},function(){var t=this._self._c;return t("div",{staticClass:"right-arrow-3 w-slider-arrow-right"},[t("div",{staticClass:"w-icon-slider-right"})])}],!1,null,null,null);e.a=component.exports},401:function(t,e,l){"use strict";l(36),l(25),l(62),l(17),l(100);var c={data:function(){return{}},methods:{formatMoney:function(t){return null==t||""==t?"N0.00":"N"+t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}},computed:{hotel:function(){return this.$store.state.hotel},URL:function(){return this.$store.state.API_URL},rooms:function(){return this.$store.state.rooms}}},n=l(61),component=Object(n.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"div-block-25"},[e("div",{staticClass:"custom-container"},[e("div",{staticClass:"custom-flex"},[e("div",{staticClass:"div-block-27"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t.hotel.socialColored?e("div",{staticClass:"div-block-14"},[e("img",{attrs:{src:"".concat(t.URL,"/uploads/").concat(t.hotel.socialColored[2].icon),loading:"lazy",width:"37",alt:""}}),t._v(" "),e("div",{staticClass:"div-block-15"},[e("div",{staticClass:"custom-body-text light"},[t._v("Reservation")]),t._v(" "),e("a",{staticClass:"thick-text",attrs:{href:"tel:+2348037971542"}},[t._v(t._s(t.hotel.socialColored[2].title))])])]):t._e()]),t._v(" "),e("div",{staticClass:"div-block-29"},[e("div",{staticClass:"slider-3 w-slider",attrs:{"data-delay":"4000","data-animation":"slide","data-autoplay":"false","data-easing":"ease","data-hide-arrows":"false","data-disable-swipe":"false","data-autoplay-limit":"0","data-nav-spacing":"3","data-duration":"500","data-infinite":"true"}},[e("div",{staticClass:"mask-2 w-slider-mask"},t._l(t.rooms,(function(l){return e("div",{key:l._id,staticClass:"slide w-slide"},[e("div",{staticClass:"div-block-30"},[e("div",{staticClass:"div-block-31",style:{backgroundImage:"url(".concat(t.URL,"/uploads/").concat(l.roomPictures[1],")")}}),t._v(" "),e("div",{staticClass:"div-block-32"},[e("div",[e("h3",{staticClass:"card-title"},[t._v(t._s(l.roomName))])]),t._v(" "),e("div",[e("h3",{staticClass:"pricing"},[t._v("\n                      "+t._s(t.formatMoney(l.roomPrice))),e("span",{staticClass:"custom-body-text"},[t._v("/Day")])])]),t._v(" "),t._l(l.roomServices,(function(l,i){return e("div",{key:i,staticClass:"div-block-33"},[e("img",{staticClass:"image-2",attrs:{src:"/img/check.svg",loading:"lazy",width:"21",alt:""}}),t._v(" "),e("div",{staticClass:"custom-body-text"},[t._v("\n                      "+t._s(l)+"\n                    ")])])}))],2)])])})),0),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),e("div",{staticClass:"card-nav w-slider-nav w-round"})])])])])])}),[function(){var t=this._self._c;return t("div",[t("div",{staticClass:"custom-condensed colored"},[this._v("BEST PRICES")])])},function(){var t=this._self._c;return t("div",[t("h2",{staticClass:"first-title light"},[this._v("Extra Services")])])},function(){var t=this._self._c;return t("div",{staticClass:"div-block-28"},[t("div",{staticClass:"custom-body-text light"},[this._v("\n            The best prices for your relaxing vacation. The utanislen quam\n            nestibulum ac quame odion elementum sceisue the aucan.\n          ")])])},function(){var t=this._self._c;return t("div",[t("div",{staticClass:"custom-body-text light"},[this._v("\n            Orci varius natoque penatibus et magnis disney parturient monte\n            nascete ridiculus mus nellen etesque habitant morbine.\n          ")])])},function(){var t=this._self._c;return t("div",{staticClass:"left-arrow-2 w-slider-arrow-left"},[t("div",{staticClass:"w-icon-slider-left"})])},function(){var t=this._self._c;return t("div",{staticClass:"right-arrow-2 w-slider-arrow-right"},[t("div",{staticClass:"w-icon-slider-right"})])}],!1,null,null,null);e.a=component.exports},402:function(t,e,l){"use strict";var c={},n=l(61),component=Object(n.a)(c,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"custom-container"},[e("div",{staticClass:"custom-flex"},[e("div",{staticClass:"div-block-11"},[e("div",{staticClass:"custom-condensed dark"},[t._v("OUR SERVICES")])]),t._v(" "),e("div",{staticClass:"div-block-13"},[e("h2",{staticClass:"first-title"},[t._v("Hotel Facilities")])]),t._v(" "),e("div",{staticClass:"div-block-38"},[e("div",{staticClass:"div-block-40"},[e("div",[e("img",{attrs:{src:"/img/colored-flight.svg",loading:"lazy",width:"54",alt:""}})]),t._v(" "),e("div",{staticClass:"div-block-39"},[e("h3",{staticClass:"card-title"},[t._v("Pick Up & Drop")])]),t._v(" "),e("div",{staticClass:"div-block-41"},[e("div",{staticClass:"custom-body-text"},[t._v("\n              We’ll pick up from airport while you comfy on your ride, mus\n              nellentesque habitant.\n            ")])])]),t._v(" "),e("div",{staticClass:"div-block-40"},[e("div",[e("img",{attrs:{src:"/img/car-pack.svg",loading:"lazy",width:"54",alt:""}})]),t._v(" "),e("div",{staticClass:"div-block-39"},[e("h3",{staticClass:"card-title"},[t._v("Parking Space")])]),t._v(" "),e("div",{staticClass:"div-block-41"},[e("div",{staticClass:"custom-body-text"},[t._v("\n              We’ll pick up from airport while you comfy on your ride, mus\n              nellentesque habitant.\n            ")])])]),t._v(" "),e("div",{staticClass:"div-block-40"},[e("div",[e("img",{attrs:{src:"/img/colored-bed.svg",loading:"lazy",width:"54",alt:""}})]),t._v(" "),e("div",{staticClass:"div-block-39"},[e("h3",{staticClass:"card-title"},[t._v("Room Service")])]),t._v(" "),e("div",{staticClass:"div-block-41"},[e("div",{staticClass:"custom-body-text"},[t._v("\n              We’ll pick up from airport while you comfy on your ride, mus\n              nellentesque habitant.\n            ")])])]),t._v(" "),e("div",{staticClass:"div-block-40"},[e("div",[e("img",{attrs:{src:"/img/colored-pool.svg",loading:"lazy",width:"54",alt:""}})]),t._v(" "),e("div",{staticClass:"div-block-39"},[e("h3",{staticClass:"card-title"},[t._v("Swimming Pool")])]),t._v(" "),e("div",{staticClass:"div-block-41"},[e("div",{staticClass:"custom-body-text"},[t._v("\n              We’ll pick up from airport while you comfy on your ride, mus\n              nellentesque habitant.\n            ")])])]),t._v(" "),e("div",{staticClass:"div-block-40"},[e("div",[e("img",{attrs:{src:"/img/colored-wifi.svg",loading:"lazy",width:"54",alt:""}})]),t._v(" "),e("div",{staticClass:"div-block-39"},[e("h3",{staticClass:"card-title"},[t._v("Fibre Internet")])]),t._v(" "),e("div",{staticClass:"div-block-41"},[e("div",{staticClass:"custom-body-text"},[t._v("\n              We’ll pick up from airport while you comfy on your ride, mus\n              nellentesque habitant.\n            ")])])]),t._v(" "),e("div",{staticClass:"div-block-40"},[e("div",[e("img",{attrs:{src:"/img/colored-breakfast.svg",loading:"lazy",width:"54",alt:""}})]),t._v(" "),e("div",{staticClass:"div-block-39"},[e("h3",{staticClass:"card-title"},[t._v("Breakfast")])]),t._v(" "),e("div",{staticClass:"div-block-41"},[e("div",{staticClass:"custom-body-text"},[t._v("\n              We’ll pick up from airport while you comfy on your ride, mus\n              nellentesque habitant.\n            ")])])])])])])])}],!1,null,null,null);e.a=component.exports},403:function(t,e,l){"use strict";l(36);var c=l(0),n=(l(11),{data:function(){return{rooms:[],hotel:""}},methods:{getRooms:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"?limit=5",e.prev=1,e.next=4,t.$axios.get("/rooms/".concat("?limit=5"));case 4:return l=e.sent,e.next=7,l.data.data;case 7:t.rooms=e.sent,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0.response.data.message);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))()},getHotel:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/hotel");case 3:return l=e.sent,e.next=6,l.data.data[0];case 6:return t.hotel=e.sent,e.next=9,l.data.data[0].socialColored[2].icon;case 9:return t.hotelIcon=e.sent,e.next=12,l.data.data[0].socialColored[2].title;case 12:t.hotelPhone=e.sent,e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0.response.data.message);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})))()}},mounted:function(){this.getRooms()},computed:{URL:function(){return this.$store.state.API_URL}}}),o=l(61),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"custom-container"},[e("div",{staticClass:"custom-flex"},[e("div",{staticClass:"div-block-12"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t.hotel.socialColored?e("div",{staticClass:"div-block-14"},[e("img",{attrs:{src:"".concat(t.URL,"/").concat(t.hotel.socialColored[2].icon),loading:"lazy",width:"37",alt:""}}),t._v(" "),e("div",{staticClass:"div-block-15"},[e("div",{staticClass:"custom-body-text"},[t._v("Reservation")]),t._v(" "),e("a",{staticClass:"thick-text",attrs:{href:"tel:+2348037971542"}},[t._v(t._s(t.hotel.socialColored[2].title))])])]):t._e()]),t._v(" "),t.rooms[1]?e("div",{staticClass:"div-block-16"},[e("div",{staticClass:"img-holder",style:{backgroundImage:"url(".concat(t.URL,"/").concat(t.rooms[1].roomPictures[1],")")}}),t._v(" "),e("div",{staticClass:"img-holder next",style:{backgroundImage:"url(".concat(t.URL,"/").concat(t.rooms[2].roomPictures[1],")")}})]):t._e()])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"star-holder"},[t("img",{staticClass:"custom-star",attrs:{src:"/img/star.svg",loading:"lazy",width:"19",alt:""}}),t("img",{staticClass:"custom-star",attrs:{src:"/img/star.svg",loading:"lazy",width:"19",alt:""}}),t("img",{staticClass:"custom-star",attrs:{src:"/img/star.svg",loading:"lazy",width:"19",alt:""}}),t("img",{staticClass:"custom-star",attrs:{src:"/img/star.svg",loading:"lazy",width:"19",alt:""}}),t("img",{staticClass:"custom-star",attrs:{src:"/img/star.svg",loading:"lazy",width:"19",alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"div-block-11"},[t("div",{staticClass:"custom-condensed dark"},[this._v("\n            UNIQUE PLACE TO RELAX & ENJOY\n          ")])])},function(){var t=this._self._c;return t("div",{staticClass:"div-block-13 append"},[t("h2",{staticClass:"first-title"},[this._v("Enjoy a Luxury Experience")])])},function(){var t=this._self._c;return t("div",[t("div",{staticClass:"custom-body-text"},[this._v("\n            Welcome to the best five-star deluxe hotel in New York. Hotel\n            elementum sesue the aucan vestibulum aliquam justo in sapien\n            rutrum volutpat. Donec in quis the pellentesque velit. Donec id\n            velit ac arcu posuere blane.\n          ")])])},function(){var t=this._self._c;return t("div",{staticClass:"second"},[t("div",{staticClass:"custom-body-text"},[this._v("\n            Welcome to the best five-star deluxe hotel in New York. Hotel\n            elementum sesue the aucan vestibulum aliquam justo in sapien\n            rutrum volutpat. Donec in quis the pellentesque velit. Donec id\n            velit ac arcu posuere blane.\n          ")])])}],!1,null,null,null);e.a=component.exports},593:function(t,e,l){"use strict";l.r(e);l(36);var c=l(0),n=(l(11),l(401)),o=l(402),r=l(403),d=l(344),v=l(345),m=l(369),_=l(367),C={components:{HomeFooter:d.a,HomeNav:v.a,Signup:m.a,Testimony:_.a,ClientWhiteExtra:r.a,ClientColoredExtra:n.a,ClientHotelFacilities:o.a},data:function(){return{about:""}},computed:{URL:function(){return this.$store.state.API_URL}},methods:{getAbout:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/about");case 3:l=e.sent,t.about=l.data.data[0],e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.reponse.data);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},mounted:function(){this.getAbout()}},h=l(61),component=Object(h.a)(C,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"about"},[e("Signup"),t._v(" "),e("div",{staticClass:"hero about",staticStyle:{"background-image":"url('/img/home-banner-3.jpg')"}},[e("div",{staticClass:"cover"},[e("div",{staticClass:"div-block-75"},[e("div",{staticClass:"main-nav w-nav",attrs:{"data-animation":"default","data-collapse":"medium","data-duration":"400","data-easing":"ease","data-easing2":"ease",role:"banner"}},[e("div",{staticClass:"custom-container"},[e("HomeNav")],1)])]),t._v(" "),t._m(0)])]),t._v(" "),e("div",{staticClass:"about-section"},[e("div",{staticClass:"custom-container"},[e("div",{staticClass:"about-wrapper"},[e("img",{staticClass:"about-logo",attrs:{src:"/img/logo.png",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"about-content"},[t._m(1),t._v(" "),e("div",{staticClass:"about-text",domProps:{innerHTML:t._s(t.about.content)}})])]),t._v(" "),e("div",{staticClass:"vision"},[e("img",{staticClass:"image-15",attrs:{src:"".concat(t.URL,"/uploads/").concat(t.about.certificate),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"vision-content"},[e("h1",{staticClass:"vision-title"},[t._v("Our Vision")]),t._v(" "),e("div",{staticClass:"about-text"},[t._v("\n            "+t._s(t.about.vision)+"\n          ")]),t._v(" "),e("ul",{staticClass:"vision-list",attrs:{role:"list"}},t._l(t.about.visionList,(function(l,c){return e("li",{key:c,staticClass:"each-vision"},[e("img",{staticClass:"vision-icon",attrs:{src:"/img/check.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"vision-text"},[t._v("\n                "+t._s(l)+"\n              ")])])})),0)])])])]),t._v(" "),e("ClientWhiteExtra"),t._v(" "),e("ClientColoredExtra"),t._v(" "),e("ClientHotelFacilities"),t._v(" "),t._m(2),t._v(" "),e("Testimony"),t._v(" "),e("HomeFooter")],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"custom-container"},[e("div",{staticClass:"div-block-76"},[e("div",[e("div",{staticClass:"custom-condensed"},[t._v("LUXURY HOTEL")])]),t._v(" "),e("div",[e("h1",{staticClass:"first-title light big"},[t._v("About us")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"about-head"},[e("h1",{staticClass:"heading-7"},[t._v("About Us")]),t._v(" "),e("div",{staticClass:"about-line"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"staffs"},[e("div",{staticClass:"custom-container"},[e("div",{staticClass:"custom-flex"},[e("div",{staticClass:"div-block-77"},[e("div",{staticClass:"custom-condensed dark"},[t._v("PROFESSIONALS")])]),t._v(" "),e("div",{staticClass:"div-block-78 append"},[e("h1",{staticClass:"first-title"},[t._v("Meet The Team")])]),t._v(" "),e("div",{staticClass:"team-slide w-slider",attrs:{"data-delay":"4000","data-animation":"slide","data-autoplay":"true","data-easing":"ease","data-hide-arrows":"false","data-disable-swipe":"false","data-autoplay-limit":"0","data-nav-spacing":"3","data-duration":"500","data-infinite":"true"}},[e("div",{staticClass:"w-slider-mask"},[e("div",{staticClass:"slide-2 w-slide"},[e("div",{staticClass:"team-card"},[e("div",{staticClass:"staff-face"}),t._v(" "),e("div",{staticClass:"div-block-80"},[e("div",{staticClass:"div-block-81"},[e("div",{staticClass:"name"},[t._v("Valentina Karla")])]),t._v(" "),e("div",{staticClass:"div-block-82"},[e("div",{staticClass:"custom-condensed dark small"},[t._v("\n                      General Manager\n                    ")])])])])]),t._v(" "),e("div",{staticClass:"slide-2 w-slide"},[e("div",{staticClass:"team-card"},[e("div",{staticClass:"staff-face one"}),t._v(" "),e("div",{staticClass:"div-block-80"},[e("div",{staticClass:"div-block-81"},[e("div",{staticClass:"name"},[t._v("Valentina Karla")])]),t._v(" "),e("div",{staticClass:"div-block-82"},[e("div",{staticClass:"custom-condensed dark small"},[t._v("\n                      General Manager\n                    ")])])])])]),t._v(" "),e("div",{staticClass:"slide-2 w-slide"},[e("div",{staticClass:"team-card"},[e("div",{staticClass:"staff-face two"}),t._v(" "),e("div",{staticClass:"div-block-80"},[e("div",{staticClass:"div-block-81"},[e("div",{staticClass:"name"},[t._v("Valentina Karla")])]),t._v(" "),e("div",{staticClass:"div-block-82"},[e("div",{staticClass:"custom-condensed dark small"},[t._v("\n                      General Manager\n                    ")])])])])]),t._v(" "),e("div",{staticClass:"slide-2 w-slide"},[e("div",{staticClass:"team-card"},[e("div",{staticClass:"staff-face third"}),t._v(" "),e("div",{staticClass:"div-block-80"},[e("div",{staticClass:"div-block-81"},[e("div",{staticClass:"name"},[t._v("Valentina Karla")])]),t._v(" "),e("div",{staticClass:"div-block-82"},[e("div",{staticClass:"custom-condensed dark small"},[t._v("\n                      General Manager\n                    ")])])])])]),t._v(" "),e("div",{staticClass:"slide-2 w-slide"},[e("div",{staticClass:"team-card"},[e("div",{staticClass:"staff-face fifth"}),t._v(" "),e("div",{staticClass:"div-block-80"},[e("div",{staticClass:"div-block-81"},[e("div",{staticClass:"name"},[t._v("Valentina Karla")])]),t._v(" "),e("div",{staticClass:"div-block-82"},[e("div",{staticClass:"custom-condensed dark small"},[t._v("\n                      General Manager\n                    ")])])])])]),t._v(" "),e("div",{staticClass:"slide-2 w-slide"},[e("div",{staticClass:"team-card"},[e("div",{staticClass:"staff-face sixth"}),t._v(" "),e("div",{staticClass:"div-block-80"},[e("div",{staticClass:"div-block-81"},[e("div",{staticClass:"name"},[t._v("Valentina Karla")])]),t._v(" "),e("div",{staticClass:"div-block-82"},[e("div",{staticClass:"custom-condensed dark small"},[t._v("\n                      General Manager\n                    ")])])])])])]),t._v(" "),e("div",{staticClass:"left-arrow-5 w-slider-arrow-left"},[e("div",{staticClass:"w-icon-slider-left"})]),t._v(" "),e("div",{staticClass:"right-arrow-5 w-slider-arrow-right"},[e("div",{staticClass:"w-icon-slider-right"})]),t._v(" "),e("div",{staticClass:"slide-nav-4 w-slider-nav w-round"})])])])])}],!1,null,null,null);e.default=component.exports}}]);