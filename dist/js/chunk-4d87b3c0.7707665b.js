(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d87b3c0"],{"0985":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",[s("v-app-bar",{attrs:{fixed:"",flat:"",color:t.appBarColor}},[s("v-avatar",{attrs:{tile:""}},[s("img",{attrs:{src:i("4e1a"),alt:""}})]),s("v-spacer"),t._l(t.appRoutes,(function(e,i){return s("v-btn",{key:i,staticClass:"ml-3 text-capitalize hidden-md-and-down rounded-pill",attrs:{text:"",link:"",dark:t.dark,depressed:"",to:e.to,"active-class":"deep-purple accent-4 white--text"},domProps:{textContent:t._s(e.title)}})})),s("Menu"),s("Drawer")],2)],1)},n=[],o=i("5530"),a=(i("d3b7"),i("3ca3"),i("ddb0"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-menu",{attrs:{"min-width":"500","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,n=e.attrs;return[i("v-btn",t._g(t._b({staticClass:"hidden-lg-and-up",attrs:{icon:"",dark:""}},"v-btn",n,!1),s),[i("v-icon",[t._v("mdi-menu")])],1)]}}])},[i("v-list",{staticClass:"py-0"},t._l(t.routes,(function(e,s){return i("v-list-item",{key:s,attrs:{to:e.to,"active-class":"deep-purple accent-4 white--text",link:""}},[i("v-list-item-title",[t._v(t._s(e.title))])],1)})),1)],1)}),r=[],c={data:function(){return{routes:[{title:"Home",to:"/"},{title:"About us",to:"/about"},{title:"How it works",to:"/howItWorks"},{title:"FAQ",to:"/faq"},{title:"Contact us",to:"/contactUs"}]}}},l=c,h=i("2877"),u=i("6544"),d=i.n(u),f=i("8336"),p=i("132d"),v=i("8860"),m=i("da13"),g=i("5d23"),b=i("e449"),O=Object(h["a"])(l,a,r,!1,null,null,null),w=O.exports;d()(O,{VBtn:f["a"],VIcon:p["a"],VList:v["a"],VListItem:m["a"],VListItemTitle:g["d"],VMenu:b["a"]});var y=i("2f62"),x={data:function(){return{appBarColor:"transparent",dark:!0}},components:{Drawer:w,Menu:function(){return i.e("chunk-2d0c915e").then(i.bind(null,"5849"))}},methods:Object(o["a"])(Object(o["a"])({},Object(y["b"])(["toggleDrawer"])),{},{colorNav:function(){var t=this;document.addEventListener("scroll",(function(){window.scrollY>=600?(t.appBarColor="white",t.dark=!1):(t.appBarColor="transparent",t.dark=!0)}))}}),mounted:function(){var t=this;this.$nextTick((function(){t.colorNav()}))},computed:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(y["c"])(["appRoutes"])),Object(y["d"])(["nav"])),{},{nav:{get:function(){return this.$store.state.nav},set:function(t){this.$store.state.nav=t}}})},k=x,C=i("40dc"),T=i("8212"),A=i("2fa4"),$=Object(h["a"])(k,s,n,!1,null,null,null);e["a"]=$.exports;d()($,{VAppBar:C["a"],VAvatar:T["a"],VBtn:f["a"],VSpacer:A["a"]})},"4e1a":function(t,e,i){t.exports=i.p+"img/paddi.1717719a.png"},"53ea":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[i("Nav"),i("ProofOfPayment",{staticClass:"my-16"})],1)},n=[],o=i("0985"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-stepper",{staticClass:"mx-auto",attrs:{width:t.width,vertical:""},model:{value:t.proofOfPayment.steps,callback:function(e){t.$set(t.proofOfPayment,"steps",e)},expression:"proofOfPayment.steps"}},[i("v-stepper-step",{attrs:{color:"deep-purple accent-4",complete:t.proofOfPayment.steps>1,editable:"",step:"1"}},[t._v(" Upload screenshot ")]),i("v-stepper-content",{attrs:{step:"1"}},[i("UploadScreenshot"),i("v-btn",{staticClass:"mr-4",attrs:{color:"deep-purple accent-4",dark:""},on:{click:t.toproofOfPaymentOtherProof}},[t._v(" Continue ")]),i("v-btn",{attrs:{text:""}},[t._v(" Cancel ")])],1),i("v-stepper-step",{attrs:{color:"deep-purple accent-4",complete:t.proofOfPayment.steps>2,editable:"",step:"2"}},[t._v(" Other proof of payment ")]),i("v-stepper-content",{attrs:{step:"2"}},[i("OtherProof"),i("v-btn",{staticClass:"mr-4",attrs:{color:"deep-purple accent-4",dark:""}},[t._v(" Continue ")]),i("v-btn",{attrs:{text:""}},[t._v(" Cancel ")])],1)],1)},r=[],c=i("5530"),l=(i("d3b7"),i("3ca3"),i("ddb0"),i("b0c0"),i("2f62")),h={components:{UploadScreenshot:function(){return Promise.all([i.e("chunk-aa2f8f1c"),i.e("chunk-f74817b4"),i.e("chunk-88375086")]).then(i.bind(null,"84ca"))},OtherProof:function(){return Promise.all([i.e("chunk-aa2f8f1c"),i.e("chunk-f74817b4"),i.e("chunk-7275dd87")]).then(i.bind(null,"5fba"))}},methods:Object(c["a"])({},Object(l["b"])(["toproofOfPaymentOtherProof"])),computed:Object(c["a"])(Object(c["a"])({},Object(l["d"])(["proofOfPayment"])),{},{width:function(){switch(this.$vuetify.breakpoint.name){case"xs":return"92%";case"sm":return"60%";case"md":return"50%";case"lg":return 500;case"xl":return 800}}})},u=h,d=i("2877"),f=i("6544"),p=i.n(f),v=i("8336"),m=i("7e85"),g=i("e516"),b=i("56a4"),O=Object(d["a"])(u,a,r,!1,null,null,null),w=O.exports;p()(O,{VBtn:v["a"],VStepper:m["a"],VStepperContent:g["a"],VStepperStep:b["a"]});var y={components:{Nav:o["a"],ProofOfPayment:w}},x=y,k=i("a523"),C=Object(d["a"])(x,s,n,!1,null,null,null);e["default"]=C.exports;p()(C,{VContainer:k["a"]})},"56a4":function(t,e,i){"use strict";i("a9e3"),i("d3b7"),i("25f0");var s=i("9d26"),n=i("a9ad"),o=i("3206"),a=i("5607"),r=i("58df"),c=i("80d2"),l=Object(r["a"])(n["a"],Object(o["a"])("stepper","v-stepper-step","v-stepper"));e["a"]=l.extend().extend({name:"v-stepper-step",directives:{ripple:a["a"]},inject:["stepClick"],props:{color:{type:String,default:"primary"},complete:Boolean,completeIcon:{type:String,default:"$complete"},editable:Boolean,editIcon:{type:String,default:"$edit"},errorIcon:{type:String,default:"$error"},rules:{type:Array,default:function(){return[]}},step:[Number,String]},data:function(){return{isActive:!1,isInactive:!0}},computed:{classes:function(){return{"v-stepper__step--active":this.isActive,"v-stepper__step--editable":this.editable,"v-stepper__step--inactive":this.isInactive,"v-stepper__step--error error--text":this.hasError,"v-stepper__step--complete":this.complete}},hasError:function(){return this.rules.some((function(t){return!0!==t()}))}},mounted:function(){this.stepper&&this.stepper.register(this)},beforeDestroy:function(){this.stepper&&this.stepper.unregister(this)},methods:{click:function(t){t.stopPropagation(),this.$emit("click",t),this.editable&&this.stepClick(this.step)},genIcon:function(t){return this.$createElement(s["a"],t)},genLabel:function(){return this.$createElement("div",{staticClass:"v-stepper__label"},this.$slots.default)},genStep:function(){var t=!(this.hasError||!this.complete&&!this.isActive)&&this.color;return this.$createElement("span",this.setBackgroundColor(t,{staticClass:"v-stepper__step__step"}),this.genStepContent())},genStepContent:function(){var t=[];return this.hasError?t.push(this.genIcon(this.errorIcon)):this.complete?this.editable?t.push(this.genIcon(this.editIcon)):t.push(this.genIcon(this.completeIcon)):t.push(String(this.step)),t},keyboardClick:function(t){t.keyCode===c["z"].space&&this.click(t)},toggle:function(t){this.isActive=t.toString()===this.step.toString(),this.isInactive=Number(t)<Number(this.step)}},render:function(t){return t("div",{attrs:{tabindex:this.editable?0:-1},staticClass:"v-stepper__step",class:this.classes,directives:[{name:"ripple",value:this.editable}],on:{click:this.click,keydown:this.keyboardClick}},[this.genStep(),this.genLabel()])}})},"7e85":function(t,e,i){"use strict";var s=i("5530"),n=(i("0481"),i("4069"),i("a9e3"),i("b0c0"),i("4de4"),i("d3b7"),i("8836"),i("10d2")),o=i("3206"),a=i("a452"),r=i("58df"),c=i("d9bd"),l=Object(r["a"])(n["a"],Object(o["b"])("stepper"),a["a"]);e["a"]=l.extend({name:"v-stepper",provide:function(){return{stepClick:this.stepClick,isVertical:this.vertical}},props:{altLabels:Boolean,nonLinear:Boolean,flat:Boolean,vertical:Boolean},data:function(){var t={isBooted:!1,steps:[],content:[],isReverse:!1};return t.internalLazyValue=null!=this.value?this.value:(t[0]||{}).step||1,t},computed:{classes:function(){return Object(s["a"])({"v-stepper--flat":this.flat,"v-stepper--is-booted":this.isBooted,"v-stepper--vertical":this.vertical,"v-stepper--alt-labels":this.altLabels,"v-stepper--non-linear":this.nonLinear},n["a"].options.computed.classes.call(this))},styles:function(){return Object(s["a"])({},n["a"].options.computed.styles.call(this))}},watch:{internalValue:function(t,e){this.isReverse=Number(t)<Number(e),e&&(this.isBooted=!0),this.updateView()}},created:function(){this.$listeners.input&&Object(c["a"])("@input","@change",this)},mounted:function(){this.updateView()},methods:{register:function(t){"v-stepper-step"===t.$options.name?this.steps.push(t):"v-stepper-content"===t.$options.name&&(t.isVertical=this.vertical,this.content.push(t))},unregister:function(t){"v-stepper-step"===t.$options.name?this.steps=this.steps.filter((function(e){return e!==t})):"v-stepper-content"===t.$options.name&&(t.isVertical=this.vertical,this.content=this.content.filter((function(e){return e!==t})))},stepClick:function(t){var e=this;this.$nextTick((function(){return e.internalValue=t}))},updateView:function(){for(var t=this.steps.length;--t>=0;)this.steps[t].toggle(this.internalValue);for(var e=this.content.length;--e>=0;)this.content[e].toggle(this.internalValue,this.isReverse)}},render:function(t){return t(this.tag,{staticClass:"v-stepper",class:this.classes,style:this.styles},this.$slots.default)}})},8836:function(t,e,i){},a523:function(t,e,i){"use strict";i("4de4"),i("d3b7"),i("b64b"),i("2ca0"),i("99af"),i("20f6"),i("4b85"),i("498a"),i("a15b");var s=i("2b0e");function n(t){return s["default"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,i){var s=i.props,n=i.data,o=i.children;n.staticClass="".concat(t," ").concat(n.staticClass||"").trim();var a=n.attrs;if(a){n.attrs={};var r=Object.keys(a).filter((function(t){if("slot"===t)return!1;var e=a[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}));r.length&&(n.staticClass+=" ".concat(r.join(" ")))}return s.id&&(n.domProps=n.domProps||{},n.domProps.id=s.id),e(s.tag,n,o)}})}var o=i("d9f7");e["a"]=n("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var i,s=e.props,n=e.data,a=e.children,r=n.attrs;return r&&(n.attrs={},i=Object.keys(r).filter((function(t){if("slot"===t)return!1;var e=r[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}))),s.id&&(n.domProps=n.domProps||{},n.domProps.id=s.id),t(s.tag,Object(o["a"])(n,{staticClass:"container",class:Array({"container--fluid":s.fluid}).concat(i||[])}),a)}})},e449:function(t,e,i){"use strict";var s=i("ade3"),n=i("2909"),o=i("5530"),a=(i("a9e3"),i("7db0"),i("d3b7"),i("a630"),i("3ca3"),i("99af"),i("498a"),i("caad"),i("2532"),i("ee6f"),i("480e")),r=i("4ad4"),c=i("16b7"),l=i("b848"),h=i("21be"),u=i("fe6c"),d=i("75eb"),f=i("58df"),p=i("80d2"),v=Object(f["a"])(h["a"],Object(u["b"])(["top","right","bottom","left","absolute"]),r["a"],d["a"]),m=v.extend().extend({name:"menuable",props:{allowOverflow:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[Number,String],default:"auto"},minWidth:[Number,String],nudgeBottom:{type:[Number,String],default:0},nudgeLeft:{type:[Number,String],default:0},nudgeRight:{type:[Number,String],default:0},nudgeTop:{type:[Number,String],default:0},nudgeWidth:{type:[Number,String],default:0},offsetOverflow:Boolean,positionX:{type:Number,default:null},positionY:{type:Number,default:null},zIndex:{type:[Number,String],default:null}},data:function(){return{activatorNode:[],absoluteX:0,absoluteY:0,activatedBy:null,activatorFixed:!1,dimensions:{activator:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0,offsetLeft:0},content:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0}},relativeYOffset:0,hasJustFocused:!1,hasWindow:!1,inputActivator:!1,isContentActive:!1,pageWidth:0,pageYOffset:0,stackClass:"v-menu__content--active",stackMinZIndex:6}},computed:{computedLeft:function(){var t=this.dimensions.activator,e=this.dimensions.content,i=(!1!==this.attach?t.offsetLeft:t.left)||0,s=Math.max(t.width,e.width),n=0;if(n+=this.left?i-(s-t.width):i,this.offsetX){var o=isNaN(Number(this.maxWidth))?t.width:Math.min(t.width,Number(this.maxWidth));n+=this.left?-o:t.width}return this.nudgeLeft&&(n-=parseInt(this.nudgeLeft)),this.nudgeRight&&(n+=parseInt(this.nudgeRight)),n},computedTop:function(){var t=this.dimensions.activator,e=this.dimensions.content,i=0;return this.top&&(i+=t.height-e.height),!1!==this.attach?i+=t.offsetTop:i+=t.top+this.pageYOffset,this.offsetY&&(i+=this.top?-t.height:t.height),this.nudgeTop&&(i-=parseInt(this.nudgeTop)),this.nudgeBottom&&(i+=parseInt(this.nudgeBottom)),i},hasActivator:function(){return!!this.$slots.activator||!!this.$scopedSlots.activator||!!this.activator||!!this.inputActivator},absoluteYOffset:function(){return this.pageYOffset-this.relativeYOffset}},watch:{disabled:function(t){t&&this.callDeactivate()},isActive:function(t){this.disabled||(t?this.callActivate():this.callDeactivate())},positionX:"updateDimensions",positionY:"updateDimensions"},beforeMount:function(){this.hasWindow="undefined"!==typeof window,this.hasWindow&&window.addEventListener("resize",this.updateDimensions,!1)},beforeDestroy:function(){this.hasWindow&&window.removeEventListener("resize",this.updateDimensions,!1)},methods:{absolutePosition:function(){return{offsetTop:this.positionY||this.absoluteY,offsetLeft:this.positionX||this.absoluteX,scrollHeight:0,top:this.positionY||this.absoluteY,bottom:this.positionY||this.absoluteY,left:this.positionX||this.absoluteX,right:this.positionX||this.absoluteX,height:0,width:0}},activate:function(){},calcLeft:function(t){return Object(p["h"])(!1!==this.attach?this.computedLeft:this.calcXOverflow(this.computedLeft,t))},calcTop:function(){return Object(p["h"])(!1!==this.attach?this.computedTop:this.calcYOverflow(this.computedTop))},calcXOverflow:function(t,e){var i=t+e-this.pageWidth+12;return t=(!this.left||this.right)&&i>0?Math.max(t-i,0):Math.max(t,12),t+this.getOffsetLeft()},calcYOverflow:function(t){var e=this.getInnerHeight(),i=this.absoluteYOffset+e,s=this.dimensions.activator,n=this.dimensions.content.height,o=t+n,a=i<o;return a&&this.offsetOverflow&&s.top>n?t=this.pageYOffset+(s.top-n):a&&!this.allowOverflow?t=i-n-12:t<this.absoluteYOffset&&!this.allowOverflow&&(t=this.absoluteYOffset+12),t<12?12:t},callActivate:function(){this.hasWindow&&this.activate()},callDeactivate:function(){this.isContentActive=!1,this.deactivate()},checkForPageYOffset:function(){this.hasWindow&&(this.pageYOffset=this.activatorFixed?0:this.getOffsetTop())},checkActivatorFixed:function(){if(!1===this.attach){var t=this.getActivator();while(t){if("fixed"===window.getComputedStyle(t).position)return void(this.activatorFixed=!0);t=t.offsetParent}this.activatorFixed=!1}},deactivate:function(){},genActivatorListeners:function(){var t=this,e=r["a"].options.methods.genActivatorListeners.call(this),i=e.click;return i&&(e.click=function(e){t.openOnClick&&i&&i(e),t.absoluteX=e.clientX,t.absoluteY=e.clientY}),e},getInnerHeight:function(){return this.hasWindow?window.innerHeight||document.documentElement.clientHeight:0},getOffsetLeft:function(){return this.hasWindow?window.pageXOffset||document.documentElement.scrollLeft:0},getOffsetTop:function(){return this.hasWindow?window.pageYOffset||document.documentElement.scrollTop:0},getRoundedBoundedClientRect:function(t){var e=t.getBoundingClientRect();return{top:Math.round(e.top),left:Math.round(e.left),bottom:Math.round(e.bottom),right:Math.round(e.right),width:Math.round(e.width),height:Math.round(e.height)}},measure:function(t){if(!t||!this.hasWindow)return null;var e=this.getRoundedBoundedClientRect(t);if(!1!==this.attach){var i=window.getComputedStyle(t);e.left=parseInt(i.marginLeft),e.top=parseInt(i.marginTop)}return e},sneakPeek:function(t){var e=this;requestAnimationFrame((function(){var i=e.$refs.content;i&&"none"===i.style.display?(i.style.display="inline-block",t(),i.style.display="none"):t()}))},startTransition:function(){var t=this;return new Promise((function(e){return requestAnimationFrame((function(){t.isContentActive=t.hasJustFocused=t.isActive,e()}))}))},updateDimensions:function(){var t=this;this.hasWindow="undefined"!==typeof window,this.checkActivatorFixed(),this.checkForPageYOffset(),this.pageWidth=document.documentElement.clientWidth;var e={activator:Object(o["a"])({},this.dimensions.activator),content:Object(o["a"])({},this.dimensions.content)};if(!this.hasActivator||this.absolute)e.activator=this.absolutePosition();else{var i=this.getActivator();if(!i)return;e.activator=this.measure(i),e.activator.offsetLeft=i.offsetLeft,!1!==this.attach?e.activator.offsetTop=i.offsetTop:e.activator.offsetTop=0}this.sneakPeek((function(){if(t.$refs.content){if(t.$refs.content.offsetParent){var i=t.getRoundedBoundedClientRect(t.$refs.content.offsetParent);t.relativeYOffset=window.pageYOffset+i.top,e.activator.top-=t.relativeYOffset,e.activator.left-=window.pageXOffset+i.left}e.content=t.measure(t.$refs.content)}t.dimensions=e}))}}}),g=i("e4d3"),b=i("a236"),O=i("f2e7"),w=i("7560"),y=i("a293"),x=i("dc22"),k=i("d9bd"),C=i("7d8f"),T=Object(f["a"])(l["a"],c["a"],m,g["a"],b["a"],O["a"],w["a"]);e["a"]=T.extend({name:"v-menu",directives:{ClickOutside:y["a"],Resize:x["a"]},provide:function(){return{isInMenu:!0,theme:this.theme}},props:{auto:Boolean,closeOnClick:{type:Boolean,default:!0},closeOnContentClick:{type:Boolean,default:!0},disabled:Boolean,disableKeys:Boolean,maxHeight:{type:[Number,String],default:"auto"},offsetX:Boolean,offsetY:Boolean,openOnHover:Boolean,origin:{type:String,default:"top left"},transition:{type:[Boolean,String],default:"v-menu-transition"}},data:function(){return{calculatedTopAuto:0,defaultOffset:8,hasJustFocused:!1,listIndex:-1,resizeTimeout:0,selectedIndex:null,tiles:[]}},computed:{activeTile:function(){return this.tiles[this.listIndex]},calculatedLeft:function(){var t=Math.max(this.dimensions.content.width,parseFloat(this.calculatedMinWidth));return this.auto?Object(p["h"])(this.calcXOverflow(this.calcLeftAuto(),t))||"0":this.calcLeft(t)||"0"},calculatedMaxHeight:function(){var t=this.auto?"200px":Object(p["h"])(this.maxHeight);return t||"0"},calculatedMaxWidth:function(){return Object(p["h"])(this.maxWidth)||"0"},calculatedMinWidth:function(){if(this.minWidth)return Object(p["h"])(this.minWidth)||"0";var t=Math.min(this.dimensions.activator.width+Number(this.nudgeWidth)+(this.auto?16:0),Math.max(this.pageWidth-24,0)),e=isNaN(parseInt(this.calculatedMaxWidth))?t:parseInt(this.calculatedMaxWidth);return Object(p["h"])(Math.min(e,t))||"0"},calculatedTop:function(){var t=this.auto?Object(p["h"])(this.calcYOverflow(this.calculatedTopAuto)):this.calcTop();return t||"0"},hasClickableTiles:function(){return Boolean(this.tiles.find((function(t){return t.tabIndex>-1})))},styles:function(){return{maxHeight:this.calculatedMaxHeight,minWidth:this.calculatedMinWidth,maxWidth:this.calculatedMaxWidth,top:this.calculatedTop,left:this.calculatedLeft,transformOrigin:this.origin,zIndex:this.zIndex||this.activeZIndex}}},watch:{isActive:function(t){t||(this.listIndex=-1)},isContentActive:function(t){this.hasJustFocused=t},listIndex:function(t,e){if(t in this.tiles){var i=this.tiles[t];i.classList.add("v-list-item--highlighted");var s=this.$refs.content.scrollTop,n=this.$refs.content.clientHeight;s>i.offsetTop-8?Object(C["b"])(i.offsetTop-i.clientHeight,{appOffset:!1,duration:300,container:this.$refs.content}):s+n<i.offsetTop+i.clientHeight+8&&Object(C["b"])(i.offsetTop-n+2*i.clientHeight,{appOffset:!1,duration:300,container:this.$refs.content})}e in this.tiles&&this.tiles[e].classList.remove("v-list-item--highlighted")}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(k["e"])("full-width",this)},mounted:function(){this.isActive&&this.callActivate()},methods:{activate:function(){var t=this;this.updateDimensions(),requestAnimationFrame((function(){t.startTransition().then((function(){t.$refs.content&&(t.calculatedTopAuto=t.calcTopAuto(),t.auto&&(t.$refs.content.scrollTop=t.calcScrollPosition()))}))}))},calcScrollPosition:function(){var t=this.$refs.content,e=t.querySelector(".v-list-item--active"),i=t.scrollHeight-t.offsetHeight;return e?Math.min(i,Math.max(0,e.offsetTop-t.offsetHeight/2+e.offsetHeight/2)):t.scrollTop},calcLeftAuto:function(){return parseInt(this.dimensions.activator.left-2*this.defaultOffset)},calcTopAuto:function(){var t=this.$refs.content,e=t.querySelector(".v-list-item--active");if(e||(this.selectedIndex=null),this.offsetY||!e)return this.computedTop;this.selectedIndex=Array.from(this.tiles).indexOf(e);var i=e.offsetTop-this.calcScrollPosition(),s=t.querySelector(".v-list-item").offsetTop;return this.computedTop-i-s-1},changeListIndex:function(t){if(this.getTiles(),this.isActive&&this.hasClickableTiles)if(t.keyCode!==p["z"].tab){if(t.keyCode===p["z"].down)this.nextTile();else if(t.keyCode===p["z"].up)this.prevTile();else if(t.keyCode===p["z"].end)this.lastTile();else if(t.keyCode===p["z"].home)this.firstTile();else{if(t.keyCode!==p["z"].enter||-1===this.listIndex)return;this.tiles[this.listIndex].click()}t.preventDefault()}else this.isActive=!1},closeConditional:function(t){var e=t.target;return this.isActive&&!this._isDestroyed&&this.closeOnClick&&!this.$refs.content.contains(e)},genActivatorAttributes:function(){var t=r["a"].options.methods.genActivatorAttributes.call(this);return this.activeTile&&this.activeTile.id?Object(o["a"])(Object(o["a"])({},t),{},{"aria-activedescendant":this.activeTile.id}):t},genActivatorListeners:function(){var t=m.options.methods.genActivatorListeners.call(this);return this.disableKeys||(t.keydown=this.onKeyDown),t},genTransition:function(){var t=this.genContent();return this.transition?this.$createElement("transition",{props:{name:this.transition}},[t]):t},genDirectives:function(){var t=this,e=[{name:"show",value:this.isContentActive}];return!this.openOnHover&&this.closeOnClick&&e.push({name:"click-outside",value:{handler:function(){t.isActive=!1},closeConditional:this.closeConditional,include:function(){return[t.$el].concat(Object(n["a"])(t.getOpenDependentElements()))}}}),e},genContent:function(){var t=this,e={attrs:Object(o["a"])(Object(o["a"])({},this.getScopeIdAttrs()),{},{role:"role"in this.$attrs?this.$attrs.role:"menu"}),staticClass:"v-menu__content",class:Object(o["a"])(Object(o["a"])(Object(o["a"])({},this.rootThemeClasses),this.roundedClasses),{},Object(s["a"])({"v-menu__content--auto":this.auto,"v-menu__content--fixed":this.activatorFixed,menuable__content__active:this.isActive},this.contentClass.trim(),!0)),style:this.styles,directives:this.genDirectives(),ref:"content",on:{click:function(e){var i=e.target;i.getAttribute("disabled")||t.closeOnContentClick&&(t.isActive=!1)},keydown:this.onKeyDown}};return this.$listeners.scroll&&(e.on=e.on||{},e.on.scroll=this.$listeners.scroll),!this.disabled&&this.openOnHover&&(e.on=e.on||{},e.on.mouseenter=this.mouseEnterHandler),this.openOnHover&&(e.on=e.on||{},e.on.mouseleave=this.mouseLeaveHandler),this.$createElement("div",e,this.getContentSlot())},getTiles:function(){this.$refs.content&&(this.tiles=Array.from(this.$refs.content.querySelectorAll(".v-list-item, .v-divider, .v-subheader")))},mouseEnterHandler:function(){var t=this;this.runDelay("open",(function(){t.hasJustFocused||(t.hasJustFocused=!0)}))},mouseLeaveHandler:function(t){var e=this;this.runDelay("close",(function(){e.$refs.content.contains(t.relatedTarget)||requestAnimationFrame((function(){e.isActive=!1,e.callDeactivate()}))}))},nextTile:function(){var t=this.tiles[this.listIndex+1];if(!t){if(!this.tiles.length)return;return this.listIndex=-1,void this.nextTile()}this.listIndex++,-1===t.tabIndex&&this.nextTile()},prevTile:function(){var t=this.tiles[this.listIndex-1];if(!t){if(!this.tiles.length)return;return this.listIndex=this.tiles.length,void this.prevTile()}this.listIndex--,-1===t.tabIndex&&this.prevTile()},lastTile:function(){var t=this.tiles[this.tiles.length-1];t&&(this.listIndex=this.tiles.length-1,-1===t.tabIndex&&this.prevTile())},firstTile:function(){var t=this.tiles[0];t&&(this.listIndex=0,-1===t.tabIndex&&this.nextTile())},onKeyDown:function(t){var e=this;if(t.keyCode===p["z"].esc){setTimeout((function(){e.isActive=!1}));var i=this.getActivator();this.$nextTick((function(){return i&&i.focus()}))}else!this.isActive&&[p["z"].up,p["z"].down].includes(t.keyCode)&&(this.isActive=!0);this.$nextTick((function(){return e.changeListIndex(t)}))},onResize:function(){this.isActive&&(this.$refs.content.offsetWidth,this.updateDimensions(),clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.updateDimensions,100))}},render:function(t){var e=this,i={staticClass:"v-menu",class:{"v-menu--attached":""===this.attach||!0===this.attach||"attach"===this.attach},directives:[{arg:"500",name:"resize",value:this.onResize}]};return t("div",i,[!this.activator&&this.genActivator(),this.showLazyContent((function(){return[e.$createElement(a["a"],{props:{root:!0,light:e.light,dark:e.dark}},[e.genTransition()])]}))])}})},e516:function(t,e,i){"use strict";i("a9e3"),i("d3b7"),i("25f0");var s=i("0789"),n=i("3206"),o=i("80d2"),a=i("58df"),r=Object(a["a"])(Object(n["a"])("stepper","v-stepper-content","v-stepper"));e["a"]=r.extend().extend({name:"v-stepper-content",inject:{isVerticalProvided:{from:"isVertical"}},props:{step:{type:[Number,String],required:!0}},data:function(){return{height:0,isActive:null,isReverse:!1,isVertical:this.isVerticalProvided}},computed:{computedTransition:function(){var t=this.$vuetify.rtl?!this.isReverse:this.isReverse;return t?s["g"]:s["h"]},styles:function(){return this.isVertical?{height:Object(o["h"])(this.height)}:{}}},watch:{isActive:function(t,e){t&&null==e?this.height="auto":this.isVertical&&(this.isActive?this.enter():this.leave())}},mounted:function(){this.$refs.wrapper.addEventListener("transitionend",this.onTransition,!1),this.stepper&&this.stepper.register(this)},beforeDestroy:function(){this.$refs.wrapper.removeEventListener("transitionend",this.onTransition,!1),this.stepper&&this.stepper.unregister(this)},methods:{onTransition:function(t){this.isActive&&"height"===t.propertyName&&(this.height="auto")},enter:function(){var t=this,e=0;requestAnimationFrame((function(){e=t.$refs.wrapper.scrollHeight})),this.height=0,setTimeout((function(){return t.isActive&&(t.height=e||"auto")}),450)},leave:function(){var t=this;this.height=this.$refs.wrapper.clientHeight,setTimeout((function(){return t.height=0}),10)},toggle:function(t,e){this.isActive=t.toString()===this.step.toString(),this.isReverse=e}},render:function(t){var e={staticClass:"v-stepper__content"},i={staticClass:"v-stepper__wrapper",style:this.styles,ref:"wrapper"};this.isVertical||(e.directives=[{name:"show",value:this.isActive}]);var s=t("div",i,[this.$slots.default]),n=t("div",e,[s]);return t(this.computedTransition,{on:this.$listeners},[n])}})},ee6f:function(t,e,i){}}]);
//# sourceMappingURL=chunk-4d87b3c0.7707665b.js.map