(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{341:function(t,e,r){var content=r(347);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(160).default)("07429bcb",content,!0,{sourceMap:!1})},343:function(t,e,r){var content=r(350);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(160).default)("348f63a5",content,!0,{sourceMap:!1})},344:function(t,e,r){"use strict";r(36);var n=r(0),o=(r(11),{data:function(){return{getYear:(new Date).getFullYear(),hotel:"",about:""}},computed:{URL:function(){return this.$store.state.API_URL}},methods:{setURL:function(){this.$store.commit("SET_URL",this.$config.API_URL)},getHotel:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/hotel");case 3:r=e.sent,t.hotel=r.data.data[0],e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getAbout:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/about");case 3:r=e.sent,t.about=r.data.data[0],e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},mounted:function(){this.getHotel(),this.getAbout(),this.setURL();var t=document.getElementById("script");null!=t&&document.body.removeChild(t);var script=document.createElement("script");script.type="text/javascript",script.src="/js/script.js",script.async=!0,script.id="script";var e=document.querySelector("#footer");e?e.appendChild(script):console.error("Could not find app node to append script element")}}),l=(r(346),r(61)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"div-block-25",attrs:{id:"footer"}},[e("div",{staticClass:"custom-container"},[e("div",{staticClass:"custom-flex"},[e("div",{staticClass:"foot-row"},[e("div",{staticClass:"div-block-64"},[t._m(0),t._v(" "),t.about.content?e("div",{staticClass:"div-block-65"},[e("div",{staticClass:"custom-body-text light",domProps:{innerHTML:t._s("".concat(t.about.content.substring(0,300),"..."))}})]):t._e(),t._v(" "),t._m(1)]),t._v(" "),e("div",{staticClass:"div-block-64 center"},[t._m(2),t._v(" "),e("ul",{staticClass:"list w-list-unstyled",attrs:{role:"list"}},[e("li",{staticClass:"foot-links"},[e("nuxtLink",{staticClass:"custom-body-text light",attrs:{to:"about"}},[t._v("About")])],1),t._v(" "),e("li",{staticClass:"foot-links"},[e("nuxtLink",{staticClass:"custom-body-text light",attrs:{to:"restaurant"}},[t._v("Restaurant")])],1),t._v(" "),e("li",{staticClass:"foot-links"},[e("nuxtLink",{staticClass:"custom-body-text light",attrs:{to:"rooms"}},[t._v("Rooms & Suites")])],1),t._v(" "),e("li",{staticClass:"foot-links"},[e("nuxtLink",{staticClass:"custom-body-text light",attrs:{to:"event-center"}},[t._v("Spa & Wellness")])],1),t._v(" "),e("li",{staticClass:"foot-links"},[e("nuxtLink",{staticClass:"custom-body-text light",attrs:{to:"contact"}},[t._v("Contact")])],1)])]),t._v(" "),e("div",{staticClass:"div-block-64"},[t._m(3),t._v(" "),e("div",{staticClass:"div-block-65"},[t.hotel.social?e("div",{staticClass:"custom-body-text light"},[t._v("\n              "+t._s(t.hotel.social[0].title)+"\n            ")]):t._e()]),t._v(" "),t.hotel.social?e("div",{staticClass:"div-block-66"},[e("img",{staticClass:"image-5",attrs:{src:"".concat(t.URL,"/uploads/").concat(t.hotel.social[2].icon),loading:"lazy",width:"29",alt:""}}),e("a",{staticClass:"thick-text white",attrs:{href:"tel:+2348037971542"}},[t._v("\n              "+t._s(t.hotel.social[2].title)),e("br")])]):t._e(),t._v(" "),t.hotel.social?e("div",{staticClass:"div-block-67"},[e("a",{staticClass:"small-email",attrs:{href:"#"}},[t._v(t._s(t.hotel.social[1].title))])]):t._e(),t._v(" "),e("div",{staticClass:"div-block-68"},t._l(t.hotel.media,(function(r,i){return e("a",{key:i,staticClass:"footer-link w-inline-block",attrs:{href:"".concat(r.title),target:"_blank"}},[null!=r.icon?e("img",{staticClass:"foot-icons",attrs:{src:"".concat(t.URL,"/uploads/").concat(r.icon),loading:"lazy",alt:""}}):t._e()])})),0)])])])]),t._v(" "),e("div",{staticClass:"div-block-69"},[e("div",{staticClass:"custom-body-text light"},[t._v("\n      © Copyright "+t._s(t.getYear)+" by\n      "),e("span",{staticClass:"text-span"},[t._v("Kenny Tech Studios")])])])])}),[function(){var t=this._self._c;return t("div",[t("h3",{staticClass:"card-title white"},[this._v("About Hotel")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"div-block-71"},[e("div",{staticClass:"dropdown w-dropdown",attrs:{"data-hover":"false","data-delay":"0"}},[e("div",{staticClass:"dropdown-toggle w-dropdown-toggle"},[e("div",{staticClass:"custom-body-text light"},[t._v("English")]),t._v(" "),e("img",{attrs:{src:"/img/world.svg",loading:"lazy",width:"18",alt:""}})])])])},function(){var t=this._self._c;return t("div",[t("h3",{staticClass:"card-title white"},[this._v("Explore")])])},function(){var t=this._self._c;return t("div",[t("h3",{staticClass:"card-title white"},[this._v("Contact")])])}],!1,null,null,null);e.a=component.exports},345:function(t,e,r){"use strict";var n=r(0),o=(r(17),r(38),r(39),r(356),r(225),r(11),{data:function(){return{}},methods:{toggleSignup:function(){this.$store.commit("toggleSignup")},logout:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:case"end":return e.stop()}}),e)})))()},checkPasswordReset:function(){var t=new URL(window.location.href).searchParams.get("token");t?(this.$store.commit("setToken",t),this.$store.commit("falseEmail"),this.$store.commit("falseShowSignup"),this.toggleSignup()):this.$store.commit("setToken","")}},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated},user:function(){return this.$store.getters.getUserInfo}},mounted:function(){this.checkPasswordReset()}}),l=(r(349),r(61)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"div-block-4"},[e("nuxt-link",{staticClass:"w-nav-brand",attrs:{to:"/"}},[e("img",{attrs:{src:"/img/logo.png",loading:"lazy",width:"163",alt:""}})]),t._v(" "),e("nav",{staticClass:"nav-menu w-nav-menu",attrs:{role:"navigation"}},[e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:"/"}},[t._v("HOME")]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:"/about"}},[t._v("ABOUT")]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:"/rooms"}},[t._v("ROOMS & SUITES")]),t._v(" "),e("div",{staticClass:"nav-link w-dropdown",attrs:{"data-hover":"false","data-delay":"0","data-w-id":"21edb091-b1d3-0555-7b99-8b03580d7d04"}},[t._m(0),t._v(" "),e("nav",{staticClass:"mega-menu w-dropdown-list"},[e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:"/restaurant"}},[t._v("RESTAURANT")]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:"/event-center"}},[t._v("EVENT/CLUB")]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:"/extra"}},[t._v("EXTRAS")])],1)]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:"/news"}},[t._v("NEWS")]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:"/contact"}},[t._v("CONTACT")]),t._v(" "),t.isAuthenticated?e("div",{staticClass:"nav-link w-dropdown",attrs:{"data-hover":"false","data-delay":"0","data-w-id":"21edb091-b1d3-0555-7b99-8b03580d7d04"}},[t._m(1),t._v(" "),e("nav",{staticClass:"mega-menu w-dropdown-list"},[e("nuxt-link",{staticClass:"nav-link sign-in auth w-nav-link",attrs:{to:"/admin"}},[t._v("DASHBOARD")]),t._v(" "),e("a",{staticClass:"nav-link sign-in auth w-nav-link",attrs:{href:"#"},on:{click:t.logout}},[t._v("LOGOUT")]),t._v(" "),"Reception"==t.user.staffType?e("a",{staticClass:"nav-link sign-in auth w-nav-link",attrs:{href:"#"},on:{click:t.toggleSignup}},[t._v("SIGN IN")]):t._e()],1)]):e("a",{staticClass:"nav-link sign-in w-nav-link",attrs:{href:"#"},on:{click:t.toggleSignup}},[t._v("SIGN IN")])],1),t._v(" "),t._m(2)],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"nav-toggle w-dropdown-toggle"},[e("div",{staticClass:"w-icon-dropdown-toggle"}),t._v(" "),e("div",[t._v("PAGES")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"nav-toggle w-dropdown-toggle"},[e("div",{staticClass:"w-icon-dropdown-toggle"}),t._v(" "),e("div",[t._v("AUTHENTICATION")])])},function(){var t=this._self._c;return t("div",{staticClass:"menu-button w-nav-button"},[t("div",{staticClass:"w-icon-nav-menu"})])}],!1,null,null,null);e.a=component.exports},346:function(t,e,r){"use strict";r(341)},347:function(t,e,r){var n=r(159)(!1);n.push([t.i,".main-nav.w-nav{background:linear-gradient(180deg,rgba(0,0,0,.5),transparent)}",""]),t.exports=n},349:function(t,e,r){"use strict";r(343)},350:function(t,e,r){var n=r(159)(!1);n.push([t.i,".sign-in.w-nav-link.auth{width:100%;border-bottom:1px solid #f5f5f5}",""]),t.exports=n},387:function(t,e,r){"use strict";r(36),r(53);var n=r(0),o=(r(11),r(239)),l={data:function(){return{recovery:!0,showLogin:!0,checked:!1,username:"",fullName:"",email:"",phoneNumber:"",password:"",cPassword:"",errorMessage:"",signupError:!0,showSignupError:!1,showError:!1,loginUsername:"",loginPassword:"",recoveryEmail:"",showRecoveryError:!1,recoveryError:!1,recoveryMessage:"",resetPassword:"",resetConfirmPassword:"",showResetError:!1,resetError:!1,resetMessage:"",signupFieldArray:[],loginFieldArray:[],recoveryFieldArray:[],resetFieldArray:[]}},computed:{signupState:function(){return this.$store.state.signupState},showSignup:function(){return this.$store.state.showSignup},setEmail:function(){return this.$store.state.setEmail},token:function(){return this.$store.state.token},user:function(){return this.$store.getters.getUserInfo}},methods:{toggleSignup:function(){this.$store.commit("toggleSignup"),this.reset()},toggleShowLogin:function(){this.showLogin=!this.showLogin,this.reset()},toggleSetEmail:function(){this.$store.commit("toggleSetEmail")},toggleShowSignup:function(){this.$store.commit("toggleShowSignup")},goSignIn:function(){this.toggleShowSignup(),this.showLogin=!0,this.reset()},goSignUp:function(){this.toggleShowSignup(),this.showLogin=!1,this.reset()},goTerms:function(){this.toggleSignup(),this.$router.push("/rules")},checkInputValue:function(t,data,e,r){Object(o.a)(t,data,e,r,this.signupFieldArray,this.loginFieldArray,this.recoveryFieldArray,this.resetFieldArray)},reset:function(){this.errorMessage="",this.showError=!1,this.showSignupError=!1,this.showRecoveryError=!1,this.recoveryError=!1},processPassword:function(){if(2==this.resetFieldArray.length){var form={password:this.resetPassword,cPassword:this.resetConfirmPassword};""!=this.token?this.handleResetPassword(form):(this.resetMessage="Sorry you do not have token to reset password.",this.showResetError=!0,this.resetError=!0)}else{var t=document.getElementById("reset-wrapper"),e=t.children;Object(o.b)(e,t.children,this.resetConfirmpassword,this.signupFieldArray,this.loginFieldArray,this.recoveryFieldArray,this.resetFieldArray)}},handleResetPassword:function(form){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.patch("/users/resetPassword/".concat(t.token),form);case 3:t.resetMessage="You have successfully reset your password!",t.resetError=!1,t.showResetError=!0,e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),t.resetMessage=e.t0.response.data.message,t.resetError=!0,t.showResetError=!0;case 13:case"end":return e.stop()}}),e,null,[[0,8]])})))()},processEmail:function(){if(1==this.recoveryFieldArray.length){var form={email:this.recoveryEmail};this.handleEmailRecovery(form)}else{var t=document.getElementById("recovery-wrapper"),e=t.children;Object(o.b)(e,t.children,this.password,this.signupFieldArray,this.loginFieldArray,this.recoveryFieldArray)}},handleEmailRecovery:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.$axios.post("/users/forgotPassword",t);case 3:n=r.sent,e.recoveryMessage=n.data.message,e.recoveryError=!1,e.showRecoveryError=!0,r.next=16;break;case 9:return r.prev=9,r.t0=r.catch(0),r.next=13,r.t0.response.data.message;case 13:e.errorMessage=r.sent,e.showRecoveryError=!0,e.recoveryError=!0;case 16:case"end":return r.stop()}}),r,null,[[0,9]])})))()},processLogin:function(){if(2==this.loginFieldArray.length){var form={username:this.loginUsername,password:this.loginPassword};this.handleLogin(form)}else{var t=document.getElementById("input-wrapper"),e=t.children;Object(o.b)(e,t.children,this.password,this.signupFieldArray,this.loginFieldArray)}},handleLogin:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.$auth.loginWith("local",{data:t});case 3:r.sent,e.$router.push("/admin"),e.toggleSignup(),r.next=13;break;case 8:r.prev=8,r.t0=r.catch(0),e.showError=!0,e.errorMessage=r.t0.response.data.message,console.log(r.t0.response);case 13:case"end":return r.stop()}}),r,null,[[0,8]])})))()},processSignup:function(){if(this.user){this.password="Maxmobi123";var form={username:(n=this.fullName,l=n.split(" ")[0],c=Math.floor(90*Math.random())+10,"".concat(l).concat(c)),checked:!0,salesPersonId:user._id,fullName:this.fullName,email:this.email,phoneNumber:this.phoneNumber,password:this.password,cPassword:this.password};this.handleSignup(form)}else if(6==this.signupFieldArray.length){var t={username:this.username,checked:!1,fullName:this.fullName,email:this.email,phoneNumber:this.phoneNumber,password:this.password,cPassword:this.cPassword};this.handleSignup(t)}else{var e=document.getElementById("input-wrapper"),r=e.children;Object(o.b)(r,e.children,this.password,this.signupFieldArray,this.loginFieldArray)}var n,l,c},handleSignup:function(form){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.post("/users/signup",form);case 3:r=e.sent,n={username:r.data.user.username,password:t.password},t.handleLogin(n),e.next=14;break;case 8:return e.prev=8,e.t0=e.catch(0),e.next=12,e.t0.response.data.message;case 12:t.errorMessage=e.sent,t.showSignupError=!0;case 14:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}},c=(r(448),r(61)),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return t.signupState?e("div",{staticClass:"modal-overlay",on:{click:function(e){return e.target!==e.currentTarget?null:t.toggleSignup.apply(null,arguments)}}},[e("div",{staticClass:"div-block-125"},[t.showSignup?e("div",{staticClass:"tabs w-tab"},[e("div",{staticClass:"tabs-menu w-tab-menu"},[e("a",{staticClass:"tab-link w-inline-block w-tab-link",class:{"w--current":t.showLogin},on:{click:t.toggleShowLogin}},[e("div",{staticClass:"card-title"},[t._v("Login")])]),e("a",{staticClass:"tab-link w-inline-block w-tab-link",class:{"w--current":0==t.showLogin},attrs:{"data-w-tab":"Register"},on:{click:t.toggleShowLogin}},[e("div",{staticClass:"card-title"},[t._v("Register")])])]),t._v(" "),e("div",{staticClass:"tabs-content w-tab-content"},[e("div",{staticClass:"w-tab-pane",class:{"w--tab-active":t.showLogin},attrs:{"data-w-tab":"Login"}},[e("div",{staticClass:"w-form"},[e("form",{staticClass:"form-3",attrs:{action:"#",method:"get"},on:{submit:function(e){return e.preventDefault(),t.processLogin.apply(null,arguments)}}},[t.showError?e("div",{staticClass:"message",class:{success:0==t.signupError,error:1==t.signupError}},[t._v("\n                "+t._s(t.errorMessage)+"\n              ")]):t._e(),t._v(" "),e("div",{staticClass:"login-wrapper"},[e("div",{staticClass:"sign-input"},[e("label",{attrs:{for:""}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.loginUsername,expression:"loginUsername"}],staticClass:"comment-input email-lg w-input",attrs:{type:"text",maxlength:"256","data-name":"username",placeholder:"Username *"},domProps:{value:t.loginUsername},on:{focusout:function(e){return t.checkInputValue(e,"username","login",t.loginPassword)},input:function(e){e.target.composing||(t.loginUsername=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"sign-input"},[e("label",{attrs:{for:""}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.loginPassword,expression:"loginPassword"}],staticClass:"comment-input password-lg w-input",attrs:{type:"password",maxlength:"256","data-name":"password",placeholder:"Password *"},domProps:{value:t.loginPassword},on:{focusout:function(e){return t.checkInputValue(e,"password","login",t.loginPassword)},input:function(e){e.target.composing||(t.loginPassword=e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"forgotten"},[t._v("\n                Forgotten password?\n                "),e("strong",{staticClass:"bold-text",on:{click:t.toggleShowSignup}},[t._v("Click here")])]),t._v(" "),e("div",[e("a",{staticClass:"link-block w-inline-block",attrs:{href:"#"},on:{click:t.processLogin}},[e("div",{staticClass:"text-block add"},[t._v("Submit")])]),e("a",{staticClass:"link-block hide-login w-inline-block",attrs:{href:"#"},on:{click:t.toggleSignup}},[e("div",{staticClass:"text-block add"},[t._v("Cancel")])])])])])]),t._v(" "),e("div",{staticClass:"w-tab-pane",class:{"w--tab-active":0==t.showLogin},attrs:{"data-w-tab":"Register"}},[e("div",{staticClass:"w-form"},[e("form",{staticClass:"form-3",attrs:{action:"#"},on:{submit:function(e){return e.preventDefault(),t.handleSignup.apply(null,arguments)}}},[t.showSignupError?e("div",{staticClass:"message",class:{success:0==t.signupError,error:1==t.signupError}},[t._v("\n                "+t._s(t.errorMessage)+"\n              ")]):t._e(),t._v(" "),e("div",{staticClass:"input-wrapper",attrs:{id:"input-wrapper"}},[t.user?t._e():e("div",{staticClass:"sign-input"},[e("label",{attrs:{for:""}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"comment-input w-input",attrs:{type:"text","data-name":"username",maxlength:"256",placeholder:"Username *"},domProps:{value:t.username},on:{focusout:function(e){return t.checkInputValue(e,"username","signup",t.password)},input:function(e){e.target.composing||(t.username=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"sign-input"},[e("label",{attrs:{for:""}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.fullName,expression:"fullName"}],staticClass:"comment-input w-input",attrs:{type:"text",maxlength:"256","data-name":"fullName",placeholder:"Full Name "},domProps:{value:t.fullName},on:{focusout:function(e){return t.checkInputValue(e,"fullName","signup",t.password)},input:function(e){e.target.composing||(t.fullName=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"sign-input"},[e("label",{attrs:{for:""}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"comment-input w-input",attrs:{type:"email",maxlength:"256","data-name":"email",placeholder:"Email *",required:""},domProps:{value:t.email},on:{focusout:function(e){return t.checkInputValue(e,"email","signup",t.password)},input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"sign-input"},[e("label",{attrs:{for:""}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.phoneNumber,expression:"phoneNumber"}],staticClass:"comment-input w-input",attrs:{type:"tel",maxlength:"256","data-name":"phoneNumber",placeholder:"Phone Number "},domProps:{value:t.phoneNumber},on:{focusout:function(e){return t.checkInputValue(e,"phoneNumber","signup",t.password)},input:function(e){e.target.composing||(t.phoneNumber=e.target.value)}}})]),t._v(" "),t.user?t._e():e("div",{staticClass:"sign-input"},[e("label",{attrs:{for:""}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"comment-input w-input",attrs:{type:"password",maxlength:"256","data-name":"password",placeholder:"Password *",required:""},domProps:{value:t.password},on:{focusout:function(e){return t.checkInputValue(e,"password","signup",t.password)},input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),t.user?t._e():e("div",{staticClass:"sign-input"},[e("label",{attrs:{for:""}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.cPassword,expression:"cPassword"}],staticClass:"comment-input w-input",attrs:{type:"password",maxlength:"256","data-name":"confirm",placeholder:"Confirm Password *",required:""},domProps:{value:t.cPassword},on:{focusout:function(e){return t.checkInputValue(e,"confirm","signup",t.password)},input:function(e){e.target.composing||(t.cPassword=e.target.value)}}})])]),t._v(" "),t.user?e("div",{staticClass:"forgotten"},["Reception"==t.user.staffType?e("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"checked"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.checked)?t._i(t.checked,null)>-1:t.checked},on:{change:function(e){var r=t.checked,n=e.target,o=!!n.checked;if(Array.isArray(r)){var l=t._i(r,null);n.checked?l<0&&(t.checked=r.concat([null])):l>-1&&(t.checked=r.slice(0,l).concat(r.slice(l+1)))}else t.checked=o}}}):t._e(),t._v("\n                Manual\n              ")]):t._e(),t._v(" "),e("div",{staticClass:"forgotten"},[t._v("\n                By clicking submit you agree to our\n                "),e("a",{staticClass:"link-6",attrs:{href:"#"},on:{click:t.goTerms}},[e("strong",{staticClass:"bold-text"},[t._v("Terms & Conditions.")])])]),t._v(" "),e("div",[e("a",{staticClass:"link-block w-inline-block",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.processSignup.apply(null,arguments)}}},[e("div",{staticClass:"text-block add"},[t._v("Submit")])]),e("a",{staticClass:"link-block hide-login w-inline-block",attrs:{href:"#"},on:{click:t.toggleSignup}},[e("div",{staticClass:"text-block add"},[t._v("Cancel")])])])])])])])]):e("div",{staticClass:"tabs forgotten-password w-tabs",attrs:{"data-current":"Register","data-easing":"ease","data-duration-in":"300","data-duration-out":"100"}},[e("div",{staticClass:"tabs-menu w-tab-menu"},[e("a",{staticClass:"tab-link w-inline-block w-tab-link",class:{"w--current":t.setEmail},on:{click:t.toggleSetEmail}},[e("div",{staticClass:"card-title"},[t._v("Recover Password")])]),e("a",{staticClass:"tab-link w-inline-block w-tab-link",class:{"w--current":0==t.setEmail},on:{click:t.toggleSetEmail}},[e("div",{staticClass:"card-title"},[t._v("Reset Password")])])]),t._v(" "),e("div",{staticClass:"tabs-content w-tab-content"},[e("div",{staticClass:"w-tab-pane",class:{"w--tab-active":t.setEmail}},[e("div",{staticClass:"w-form"},[e("form",{staticClass:"form-3",attrs:{action:"#",method:"get"},on:{submit:function(e){return e.preventDefault(),t.processEmail.apply(null,arguments)}}},[t.showRecoveryError?e("div",{staticClass:"message",class:{success:0==t.recoveryError,error:1==t.recoveryError}},[t._v("\n                "+t._s(t.recoveryMessage)+"\n              ")]):t._e(),t._v(" "),e("div",{staticClass:"recovery-wrapper",attrs:{id:"recovery-wrapper"}},[e("div",{staticClass:"sign-input"},[e("label",{attrs:{for:""}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.recoveryEmail,expression:"recoveryEmail"}],staticClass:"comment-input email-lg w-input",attrs:{type:"text",maxlength:"256","data-name":"email",placeholder:"Enter Email *"},domProps:{value:t.recoveryEmail},on:{focusout:function(e){return t.checkInputValue(e,"email","recovery",t.password)},input:function(e){e.target.composing||(t.recoveryEmail=e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"forgotten"},[t._v("\n                Already have an account?\n                "),e("strong",{staticClass:"bold-text",on:{click:t.goSignIn}},[t._v("Sign in.")])]),t._v(" "),e("div",{staticClass:"forgotten"},[t._v("\n                Don't have an account?\n                "),e("strong",{staticClass:"bold-text",on:{click:t.goSignUp}},[t._v("Sign up.")])]),t._v(" "),e("div",[e("a",{staticClass:"link-block w-inline-block",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.processEmail.apply(null,arguments)}}},[e("div",{staticClass:"text-block add"},[t._v("Submit")])]),e("a",{staticClass:"link-block hide-login w-inline-block",attrs:{href:"#"},on:{click:t.toggleSignup}},[e("div",{staticClass:"text-block add"},[t._v("Cancel")])])])])])]),t._v(" "),e("div",{staticClass:"w-tab-pane",class:{"w--tab-active":0==t.setEmail}},[e("div",{staticClass:"w-form"},[e("form",{staticClass:"form-3",attrs:{action:"#",method:"get"},on:{submit:function(e){return e.preventDefault(),t.processPassword.apply(null,arguments)}}},[t.showResetError?e("div",{staticClass:"message",class:{success:0==t.resetError,error:1==t.resetError}},[t._v("\n                "+t._s(t.resetMessage)+"\n              ")]):t._e(),t._v(" "),e("div",{staticClass:"reset-wrapper",attrs:{id:"reset-wrapper"}},[e("div",{staticClass:"sign-input"},[e("label",{attrs:{for:""}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.resetPassword,expression:"resetPassword"}],staticClass:"comment-input w-input",attrs:{type:"password","data-name":"password",maxlength:"256",placeholder:"Password *",required:""},domProps:{value:t.resetPassword},on:{focusout:function(e){return t.checkInputValue(e,"password","reset",t.resetPassword)},input:function(e){e.target.composing||(t.resetPassword=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"sign-input"},[e("label",{attrs:{for:""}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.resetConfirmPassword,expression:"resetConfirmPassword"}],staticClass:"comment-input w-input",attrs:{type:"password","data-name":"confirm",maxlength:"256",placeholder:"Confirm Password *",required:""},domProps:{value:t.resetConfirmPassword},on:{focusout:function(e){return t.checkInputValue(e,"confirm","reset",t.resetConfirmPassword)},input:function(e){e.target.composing||(t.resetConfirmPassword=e.target.value)}}})])]),t._v(" "),e("div",[e("a",{staticClass:"link-block w-inline-block",attrs:{href:"#"},on:{click:t.processPassword}},[e("div",{staticClass:"text-block add"},[t._v("Submit")])]),e("a",{staticClass:"link-block hide-login w-inline-block",attrs:{href:"#"},on:{click:t.toggleSignup}},[e("div",{staticClass:"text-block add"},[t._v("Cancel")])])])])])])])])])]):t._e()}),[],!1,null,null,null);e.a=component.exports},401:function(t,e,r){var content=r(449);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(160).default)("2da076f2",content,!0,{sourceMap:!1})},448:function(t,e,r){"use strict";r(401)},449:function(t,e,r){var n=r(159)(!1);n.push([t.i,"*{box-sizing:border-box}.modal-overlay{overflow-y:auto;padding:50px 5px}.input-wrapper,.login-wrapper,.recovery-wrapper,.reset-wrapper,.sign-input{width:100%}.sign-input label{font-size:10px;font-weight:400;letter-spacing:1px}form .message{letter-spacing:1px;text-align:center;width:100%;padding-bottom:10px}form .message.success{color:#0ab50a}form .message.error{color:#b50a0a}.sign-input label{display:none;opacity:0;transition:all .5s}.sign-input.error-input label{display:block;opacity:1;margin-bottom:5px;color:#fa4343;font-size:12px;letter-spacing:1px;font-weight:300}.sign-input.error-input input{border-bottom:1px solid red}.sign-input.success-input input{border-bottom:1px solid #29fc29}@media only screen and (max-width:600px){.div-block-125{height:1200;padding-top:250px}}",""]),t.exports=n}}]);