(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{340:function(t,e,r){"use strict";r(378);var n={data:function(){return{}},methods:{hideOverlay:function(){this.$store.commit("HIDE_OVERLAY")},processAction:function(){if("user"==this.selectedItem)this.$store.dispatch("users/DELETE_USER",this.selectedId),this.hideOverlay();else if("room"==this.selectedItem)this.$emit("deleteRoom",this.selectedId),this.hideOverlay();else if("stock"==this.selectedItem){var t=this.selectedId;this.$store.commit("SET_DELETE",{id:t}),this.hideOverlay()}else"food"==this.selectedItem?(this.$emit("deleteFood",this.selectedId),this.hideOverlay()):"item"==this.selectedItem?(this.$emit("deleteItem",this.selectedId),this.hideOverlay()):"sale"==this.selectedItem?(this.$emit("deleteSale",this.selectedId),this.hideOverlay()):"banner"==this.selectedItem?(this.$emit("deleteBanner",this.selectedId),this.hideOverlay()):"hotel"==this.selectedItem?(this.$emit("deleteHotel",this.selectedId),this.hideOverlay()):"email"==this.selectedItem?(this.$store.dispatch("general/email/DELETE_EMAIL",this.selectedId),this.hideOverlay()):"wifi"==this.selectedItem?(this.$store.dispatch("general/wifi/DELETE_WIFI",this.selectedId),this.hideOverlay()):"post"==this.selectedItem?(this.$store.dispatch("general/post/DELETE_POST",this.selectedId),this.hideOverlay()):"faq"==this.selectedItem?(this.$store.dispatch("general/faq/DELETE_FAQ",this.selectedId),this.hideOverlay()):"recipe"==this.selectedItem&&(this.$store.dispatch("general/recipe/DELETE_RECIPE",this.selectedId),this.hideOverlay())}},computed:{showOverlay:function(){return this.$store.state.showOverlay},overlayMessage:function(){return this.$store.state.overlayMessage},selectedItem:function(){return this.$store.state.selectedItem},selectedId:function(){return this.$store.state.selectedId}}},c=(r(381),r(60)),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return t.showOverlay?e("div",{staticClass:"modal-overlay"},[e("div",{staticClass:"div-block-125"},[e("div",{staticClass:"tabs w-tab"},[e("div",{staticClass:"tabs-content w-tab-content"},[e("div",{staticClass:"w-tab-pane w--tab-active",attrs:{"data-w-tab":"Login"}},[e("div",{staticClass:"w-form"},[e("div",{staticClass:"form-3"},[e("div",{staticClass:"forgotten",staticStyle:{"text-align":"center",padding:"50px 20px","font-size":"20px"}},[t._v("\n                "+t._s(t.overlayMessage)+"\n              ")]),t._v(" "),e("div",{staticStyle:{"justify-content":"center",display:"flex",width:"100%"}},[e("span",{staticClass:"link-block w-inline-block",staticStyle:{cursor:"pointer"},on:{click:t.processAction}},[e("div",{staticClass:"text-block add"},[t._v("Submit")])]),t._v(" "),e("span",{staticClass:"link-block hide-login w-inline-block",staticStyle:{cursor:"pointer"},on:{click:t.hideOverlay}},[e("div",{staticClass:"text-block add"},[t._v("Cancel")])])])])])])])])])]):t._e()}),[],!1,null,null,null);e.a=component.exports},361:function(t,e,r){var content=r(382);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(159).default)("5f80d707",content,!0,{sourceMap:!1})},381:function(t,e,r){"use strict";r(361)},382:function(t,e,r){var n=r(158)(!1);n.push([t.i,"",""]),t.exports=n},448:function(t,e,r){var content=r(577);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(159).default)("2cf552aa",content,!0,{sourceMap:!1})},449:function(t,e,r){var content=r(579);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(159).default)("6ce2652a",content,!0,{sourceMap:!1})},576:function(t,e,r){"use strict";r(448)},577:function(t,e,r){var n=r(158)(!1);n.push([t.i,".status.ash{background:#f4f4f4;padding:3px 8px;cursor:pointer;border-radius:3px}.avatar{overflow:hidden}.avatar img{-o-object-fit:cover;object-fit:cover;min-width:100%;min-height:100%}@media screen and (max-width:479px){thead td{font-size:15px;padding:3px 6px}}",""]),t.exports=n},578:function(t,e,r){"use strict";r(449)},579:function(t,e,r){var n=r(158)(!1);n.push([t.i,".status{background:#f4f4f4;padding:3px 8px;cursor:pointer;border-radius:3px}.table-line.start{justify-content:flex-start}",""]),t.exports=n},588:function(t,e,r){"use strict";r.r(e);var n=r(348),c=(r(224),r(46),r(17),r(36),r(52),r(0)),o=(r(11),r(37),{data:function(){return{users:[],emailingUsers:[],hotel:"",defaultType:"All Customers",showingFilter:!1,emails:[],defaultEmail:"Send Email",showingEmail:!1,canSendEmail:!1,sort:"",limit:4,usersLength:"",currentPage:1,pages:function(){for(var t=[],e=Math.ceil(this.usersLength/this.limit),i=0;i<e;i++)t.push("i");return t}}},computed:{URL:function(){return this.$store.state.API_URL},userMsg:function(){return this.$store.state.users.userMsg},staff:function(){return this.$store.getters.getUserInfo},refresh:function(){return this.$store.state.users.refresh}},methods:{getDate:function(data){var t=new Date(data),e=t.getDate(),r=t.getMonth(),n=t.getFullYear();return"".concat(e,"/").concat(r,"/").concat(n)},showOverlay:function(t,e,r,n){this.$store.commit("SHOW_OVERLAY",{action:t,id:e,message:r,item:n})},hideMsg:function(){this.$store.commit("users/HIDE_MSG")},showStatus:function(t){var e=this.$refs.userStatus[t].nextElementSibling;e.classList.contains("show")?e.classList.remove("show"):e.classList.add("show")},selectAll:function(t){var e=[];this.users.forEach((function(r){r.checked=t.target.checked,e.push(r)})),this.users=e},selectRow:function(t,e){var r=this.users[e];r.checked=t.target.checked,this.users[e]=r},showType:function(t,e){if("User"!=e){var r=this.$refs.userType[t].nextElementSibling;r.classList.contains("show")?r.classList.remove("show"):r.classList.add("show")}else{this.$store.commit("users/SET_USER_MSG",{msg:"First Make the user staff",status:!1})}},filter:function(t){this.defaultType=t,this.showingFilter=!1,this.getCustomers()},paginate:function(t){this.currentPage=t,this.getCustomers()},filterEmail:function(t){var e=this;this.showingEmail=!1,this.users.forEach((function(t){1==t.checked&&e.emailingUsers.push(t)})),this.sendEmail(t._id)},resetUsers:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.patch("/users");case 3:t.getCustomers(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0.response);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()},sendEmail:function(t){var e=this;return Object(c.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!(e.emailingUsers.length>0)){r.next=13;break}return r.prev=1,r.next=4,e.$axios.patch("/email/send-email/".concat(t),e.emailingUsers);case 4:e.emailingUsers=[],e.getCustomers(),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),console.log(r.t0);case 11:r.next=13;break;case 13:case"end":return r.stop()}}),r,null,[[1,8]])})))()},getEmails:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/email");case 3:r=e.sent,t.emails=r.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getHotel:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/hotel");case 3:r=e.sent,t.hotel=r.data.data[0],e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},updateStatus:function(t){var e=this;return Object(c.a)(regeneratorRuntime.mark((function r(){var n,form;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n="User"==t.status?"Staff":"User",(form=new FormData).append("status",n),r.prev=3,r.next=6,e.$axios.patch("/users/".concat(t._id),form);case 6:e.getCustomers(),e.$store.commit("users/REFRESH"),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(3),console.log(r.t0);case 13:case"end":return r.stop()}}),r,null,[[3,10]])})))()},getCustomers:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var r,n,c,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$store.getters.getUserInfo,n="Manager"!=r.staffType?"&activeRoom[ne]=":"",c="All Customers"==t.defaultType?"":"&userType=".concat(t.defaultType),o="?status=User&limit=".concat(t.limit,"&page=").concat(t.currentPage).concat(c).concat(n),e.prev=4,e.next=7,t.$axios.get("/users/".concat(o));case 7:l=e.sent,t.users=l.data.data,t.usersLength=l.data.resultLength,t.getHotel(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[4,13]])})))()}},mounted:function(){this.getCustomers(),this.getEmails()}}),l=o,d=(r(576),r(60)),f=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"each-panel full"},[e("div",{staticClass:"table-line"},[e("div",{staticClass:"text-block-9 auto"},[t._v("Customers")]),t._v(" "),e("div",{staticClass:"table-light"},[t._v("Result: "+t._s(t.usersLength))]),t._v(" "),e("div",{staticClass:"table-light"},[t._v("\n      Page "+t._s(t.currentPage)+" of "+t._s(t.pages().length)+"\n    ")]),t._v(" "),e("img",{staticClass:"order-arrow",attrs:{src:"/img/ascend_order.svg",loading:"lazy",alt:""},on:{click:t.sort}}),t._v(" "),e("div",{staticClass:"select-holder",staticStyle:{"margin-right":"10px"}},[e("img",{staticClass:"caret-down",attrs:{src:"/img/white-caret-icon.svg",loading:"lazy",alt:""},on:{click:function(e){t.showingEmail=!t.showingEmail}}}),t._v(" "),e("h1",{staticClass:"div-block-140 colored",on:{click:function(e){t.showingEmail=!t.showingEmail}}},[t._v("\n        "+t._s(t.defaultEmail)+"\n      ")]),t._v(" "),e("ul",{staticClass:"search-result-list select",class:{hide:!t.showingEmail},staticStyle:{"z-index":"99"},attrs:{role:"list"}},t._l(t.emails,(function(r,n){return e("li",{key:n,staticClass:"search-list",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.filterEmail(r)}}},[e("div",[t._v(t._s(r.template))])])})),0)]),t._v(" "),e("div",{staticClass:"select-holder"},[e("img",{staticClass:"caret-down",attrs:{src:"/img/white-caret-icon.svg",loading:"lazy",alt:""}}),t._v(" "),e("h1",{staticClass:"div-block-140 colored",on:{click:function(e){t.showingFilter=!t.showingFilter}}},[t._v("\n        "+t._s(t.defaultType)+"\n      ")]),t._v(" "),e("ul",{staticClass:"search-result-list select",class:{hide:!t.showingFilter},staticStyle:{"z-index":"99"},attrs:{role:"list"}},[e("li",{staticClass:"search-list",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.filter("All Customers")}}},[e("div",[t._v("All Customers")])]),t._v(" "),t._l(t.hotel.usersType,(function(r,n){return e("li",{key:n,staticClass:"search-list",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.filter(r)}}},[e("div",[t._v(t._s(r))])])}))],2)])]),t._v(" "),t.userMsg.show?e("div",{staticClass:"message",class:{success:1==t.userMsg.status,error:0==t.userMsg.status}},[t._v("\n    "+t._s(t.userMsg.message)+"\n    "),e("span",{on:{click:t.hideMsg}},[t._v("X")])]):t._e(),t._v(" "),e("div",{staticClass:"table-flow"},[t.staff?e("table",[e("thead",[e("tr",[e("td",[t._v("S/N")]),t._v(" "),e("td",[e("input",{staticStyle:{"margin-right":"5px"},attrs:{type:"checkbox"},on:{click:t.selectAll}}),t._v("\n            Bulk\n          ")]),t._v(" "),e("td",[t._v("Image")]),t._v(" "),e("td",[t._v("Username")]),t._v(" "),e("td",[t._v("Full Name")]),t._v(" "),e("td",[t._v("Status")]),t._v(" "),e("td",[t._v("Active RM")]),t._v(" "),"Manager"==t.staff.staffType||"CEO"==t.staff.staffType?e("td",[t._v("\n            Has Booked\n          ")]):t._e(),t._v(" "),"Manager"==t.staff.staffType||"CEO"==t.staff.staffType?e("td",[t._v("\n            Last Booked\n          ")]):t._e(),t._v(" "),"Manager"==t.staff.staffType||"CEO"==t.staff.staffType?e("td",[t._v("\n            Registered\n          ")]):t._e(),t._v(" "),"Manager"==t.staff.staffType||"CEO"==t.staff.staffType?e("td",[t._v("\n            Type\n          ")]):t._e(),t._v(" "),"Manager"==t.staff.staffType||"CEO"==t.staff.staffType?e("td",[t._v("\n            Action\n          ")]):t._e()])]),t._v(" "),e("tbody",t._l(t.users,(function(r,n){return e("tr",{key:n},[e("td",[t._v(t._s(n+1))]),t._v(" "),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:r.checked,expression:"user.checked"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(r.checked)?t._i(r.checked,null)>-1:r.checked},on:{click:function(e){return t.selectRow(e,n)},change:function(e){var n=r.checked,c=e.target,o=!!c.checked;if(Array.isArray(n)){var l=t._i(n,null);c.checked?l<0&&t.$set(r,"checked",n.concat([null])):l>-1&&t.$set(r,"checked",n.slice(0,l).concat(n.slice(l+1)))}else t.$set(r,"checked",o)}}})]),t._v(" "),e("td",[r.profilePicture?e("div",{staticClass:"avatar"},[e("img",{attrs:{src:"".concat(t.URL,"/uploads/").concat(r.profilePicture),alt:""}})]):e("div",{staticClass:"avatar"},[t._v("\n              "+t._s(r.username.split("")[0].toUpperCase())+"\n            ")])]),t._v(" "),e("td",[e("nuxtLink",{attrs:{to:"/admin/view-profile/".concat(r._id)}},[t._v(t._s(r.username))])],1),t._v(" "),e("td",[t._v(t._s(r.fullName))]),t._v(" "),e("td",[e("div",{staticClass:"gold"},[t._v(t._s(r.userType))])]),t._v(" "),e("td",[r.activeRoom?e("div",[t._v(t._s(r.activeRoom))]):e("div",[t._v("N/A")])]),t._v(" "),"Manager"==t.staff.staffType||"CEO"==t.staff.staffType?e("td",[r.hasBooked?e("div",[t._v("Yes")]):e("div",[t._v("No")])]):t._e(),t._v(" "),"Manager"==t.staff.staffType||"CEO"==t.staff.staffType?e("td",[t._v("\n            4th July, 2022\n          ")]):t._e(),t._v(" "),"Manager"==t.staff.staffType||"CEO"==t.staff.staffType?e("td",[t._v("\n            "+t._s(t.getDate(r.regDate))+"\n          ")]):t._e(),t._v(" "),"Manager"==t.staff.staffType||"CEO"==t.staff.staffType?e("td",[e("div",{staticClass:"status ash",on:{click:function(e){return t.updateStatus(r)}}},[t._v("\n              "+t._s(r.status)+"\n            ")])]):t._e(),t._v(" "),"Manager"==t.staff.staffType||"CEO"==t.staff.staffType?e("td",{staticClass:"icon"},[e("img",{attrs:{src:"/img/trash-bin-icon.svg",alt:""},on:{click:function(e){return t.showOverlay("delete",r._id,"Are you sure you want to delete this user?","user")}}})]):t._e()])})),0)]):t._e()]),t._v(" "),e("div",{staticClass:"btn-holder"},[e("input",{staticClass:"custom-btn w-button",staticStyle:{"margin-right":"auto"},attrs:{type:"submit",value:"Reset Users","data-wait":"Please wait..."},on:{click:t.resetUsers}})]),t._v(" "),e("div",{staticClass:"pagination"},[1!=t.currentPage?e("img",{staticClass:"pagination-arrow left",attrs:{src:"/img/left-nav.svg",loading:"lazy",alt:""},on:{click:function(e){return t.paginate(t.currentPage-1)}}}):t._e(),t._v(" "),e("ul",{staticClass:"page-list",attrs:{role:"list"}},t._l(t.pages(),(function(r,n){return e("li",{key:n,staticClass:"page-items",class:{active:t.currentPage==n+1},staticStyle:{cursor:"pointer"},on:{click:function(e){return t.paginate(n+1)}}},[e("div",[t._v(t._s(n+1))])])})),0),t._v(" "),t.currentPage<t.pages().length?e("img",{staticClass:"pagination-arrow",attrs:{src:"/img/left-nav.svg",loading:"lazy",alt:""},on:{click:function(e){return t.paginate(t.currentPage+1)}}}):t._e()])])}),[],!1,null,null,null).exports,v=r(349),h=r(350),m=r(351),_={data:function(){return{salesPoints:[],users:[],staffStatus:[{stat:"User"},{stat:"Staff"}],defaultStatus:"All Users",showingFilter:!1,sort:"",limit:4,usersLength:"",currentPage:1,pages:function(){for(var t=[],e=Math.ceil(this.roomsLength/this.limit),i=0;i<e;i++)t.push("i");return t}}},computed:{userMsg:function(){return this.$store.state.users.userMsg},URL:function(){return this.$store.state.API_URL},refresh:function(){return this.$store.state.users.refresh}},methods:{getDate:function(data){var t=new Date(data),e=t.getDate(),r=t.getMonth(),n=t.getFullYear();return"".concat(e,"/").concat(r,"/").concat(n)},showOverlay:function(t,e,r,n){this.$store.commit("SHOW_OVERLAY",{action:t,id:e,message:r,item:n})},hideMsg:function(){this.$store.commit("users/HIDE_MSG")},showStatus:function(t){var e=this.$refs.userStatus[t].nextElementSibling;e.classList.contains("show")?e.classList.remove("show"):e.classList.add("show")},showType:function(t,e){if("User"!=e){var r=this.$refs.userType[t].nextElementSibling;r.classList.contains("show")?r.classList.remove("show"):r.classList.add("show")}else{this.$store.commit("users/SET_USER_MSG",{msg:"First Make the user staff",status:!1})}},changeStatus:function(t,e,r){var n={status:e,staffType:""};n.staffType="User"==e?"User":"Staff";var c=this.$refs.userStatus[t].nextElementSibling;this.changeUser(c,n,r)},changeType:function(t,e){var r="User"==e?"User":"Staff",n=e,form=new FormData;form.append("status",r),form.append("staffType",n),this.updateStatus(t._id,form)},updateStatus:function(t,form){var e=this;return Object(c.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.$axios.patch("/users/".concat(t),form);case 3:e.getStaffs(),e.$store.commit("users/REFRESH"),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.log(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))()},getStaffs:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"?status=Staff",e.prev=1,e.next=4,t.$axios.get("/users/".concat("?status=Staff"));case 4:r=e.sent,t.users=r.data.data,t.usersLength=r.data.resultLength,t.getSales(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))()},getSales:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/hotel/");case 3:r=e.sent,t.salesPoints=r.data.data[0].salesPoints,t.usersLength=r.data.resultLength,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}},mounted:function(){var t=this;this.getStaffs(),this.$watch("refresh",(function(a,b){t.getStaffs()}))}},y=(r(578),Object(d.a)(_,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"each-panel full"},[e("div",{staticClass:"table-line start"},[e("div",{staticClass:"text-block-9"},[t._v("Staffs")]),t._v(" "),e("div",{staticClass:"table-light"},[t._v("Result: "+t._s(t.usersLength))]),t._v(" "),e("div",{staticClass:"table-light"},[t._v("\n      Page "+t._s(t.currentPage)+" of "+t._s(t.pages.length)+"\n    ")])]),t._v(" "),t.userMsg.show?e("div",{staticClass:"message",class:{success:1==t.userMsg.status,error:0==t.userMsg.status}},[t._v("\n    "+t._s(t.userMsg.message)+"\n    "),e("span",{on:{click:t.hideMsg}},[t._v("X")])]):t._e(),t._v(" "),e("div",{staticClass:"table-flow"},[e("table",[t._m(0),t._v(" "),e("tbody",t._l(t.users,(function(r,n){return e("tr",{key:n},[e("td",[t._v(t._s(n+1))]),t._v(" "),e("td",[r.profilePicture?e("div",{staticClass:"avatar"},[e("img",{attrs:{src:"".concat(t.URL,"/uploads/").concat(r.profilePicture),alt:""}})]):e("div",{staticClass:"avatar"},[t._v("\n              "+t._s(r.username.split("")[0].toUpperCase())+"\n            ")])]),t._v(" "),e("td",[t._v(t._s(r.username))]),t._v(" "),e("td",[t._v(t._s(r.fullName))]),t._v(" "),e("td",[t._v(t._s(r.email))]),t._v(" "),e("td",{staticClass:"user-status"},[e("div",{ref:"userType",refInFor:!0,staticClass:"user-head",on:{click:function(e){return t.showType(n,r.status)}}},[t._v("\n              "+t._s(r.staffType)+"\n              "),e("img",{staticClass:"caret-down",staticStyle:{"margin-left":"10px","margin-right":"0",position:"relative"},attrs:{src:"/img/white-caret-icon.svg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"user-body"},t._l(t.salesPoints,(function(n,c){return e("input",{key:c,ref:"status",refInFor:!0,attrs:{type:"button",value:n},on:{click:function(e){return t.changeType(r,n)}}})})),0)]),t._v(" "),e("td",[t._v(t._s(r.phoneNumber))]),t._v(" "),e("td",[t._v(t._s(t.getDate(r.regDate)))]),t._v(" "),e("td",{staticClass:"icon"},[e("img",{attrs:{src:"/img/trash-bin-icon.svg",alt:""},on:{click:function(e){return t.showOverlay("delete",r._id,"Are you sure you want to delete this user?","user")}}})])])})),0)])]),t._v(" "),e("div",{staticClass:"pagination"},[1!=t.currentPage?e("img",{staticClass:"pagination-arrow left",attrs:{src:"/img/left-nav.svg",loading:"lazy",alt:""}}):t._e(),t._v(" "),e("ul",{staticClass:"page-list",attrs:{role:"list"}},t._l(t.pages,(function(r,n){return e("li",{key:n,staticClass:"page-items",class:{active:t.currentPage==n+1},staticStyle:{cursor:"pointer"},on:{click:function(e){return t.paginate(n+1)}}},[e("div",[t._v(t._s(n+1))])])})),0),t._v(" "),t.currentPage<t.pages.length?e("img",{staticClass:"pagination-arrow",attrs:{src:"/img/left-nav.svg",loading:"lazy",alt:""}}):t._e()])])}),[function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("td",[t._v("S/N")]),t._v(" "),e("td",[t._v("Image")]),t._v(" "),e("td",[t._v("Username")]),t._v(" "),e("td",[t._v("Full Name")]),t._v(" "),e("td",[t._v("Email")]),t._v(" "),e("td",[t._v("Position")]),t._v(" "),e("td",[t._v("Phone Number")]),t._v(" "),e("td",[t._v("Registered")]),t._v(" "),e("td",[t._v("Action")])])])}],!1,null,null,null).exports),w=r(340),C={components:{AdminFooter:v.a,AdminHeader:h.a,AdminNavigation:m.a,ConfirmAction:w.a,AdminCards:n.a,AdminCustomers:f,AdminStaffs:y},computed:{user:function(){return this.$store.getters.getUserInfo}}},k=Object(d.a)(C,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"users"},[e("ConfirmAction"),t._v(" "),e("AdminHeader"),t._v(" "),e("div",{staticClass:"admin-content"},[e("AdminNavigation"),t._v(" "),e("div",{staticClass:"middle-content"},[e("AdminCards"),t._v(" "),e("div",{staticClass:"panel-holder"},[e("AdminCustomers"),t._v(" "),"Manager"==t.user.staffType||"CEO"==t.user.staffType?e("AdminStaffs"):t._e()],1)],1)],1),t._v(" "),e("AdminFooter")],1)}),[],!1,null,null,null);e.default=k.exports}}]);