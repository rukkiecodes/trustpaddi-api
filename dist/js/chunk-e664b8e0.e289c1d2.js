(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e664b8e0"],{"3a66":function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var s=a("fe6c"),i=a("58df");function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(i["a"])(Object(s["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,a=e.length;t<a;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},"4d7a":function(t,e,a){t.exports=a.p+"img/img-4.13652570.png"},8308:function(t,e,a){},aa15:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("vs-dialog",{attrs:{"not-center":"",width:"350"},scopedSlots:t._u([{key:"header",fn:function(){return[a("h4",{staticClass:"not-margin"},[t._v("Transaction Details")]),a("p",{staticClass:"text-caption grey--text text--darken-1 font-weight-regular"},[t._v(" Product id: "),a("span",{staticClass:"blue--text text-body-2 font-weight-regular font-weight-bold"},[t._v(t._s(t.transaction.selectedTransaction.code))])])]},proxy:!0}]),model:{value:t.transaction.viewDetailsDialoge,callback:function(e){t.$set(t.transaction,"viewDetailsDialoge",e)},expression:"transaction.viewDetailsDialoge"}},[a("div",{staticClass:"d-flex flex-column"},[a("vs-table",{staticClass:"mb-4 white",scopedSlots:t._u([{key:"thead",fn:function(){return[a("vs-tr",{staticClass:"white"},[a("vs-th",{staticClass:"white"},[t._v(" Image ")]),a("vs-th",{staticClass:"white"},[t._v(" Buyer email ")]),a("vs-th",{staticClass:"white"},[t._v(" Seller email ")]),a("vs-th",{staticClass:"white"},[t._v(" Price ")])],1)]},proxy:!0},{key:"tbody",fn:function(){return[a("vs-tr",{attrs:{data:"transaction.selectedTransaction"}},[a("vs-td",[a("vs-avatar",{attrs:{color:"transparent"}},[a("img",{attrs:{src:t.transaction.selectedTransaction.image,alt:""}})])],1),a("vs-td",[t._v(" "+t._s(t.transaction.selectedTransaction.buyerEmail)+" ")]),a("vs-td",[t._v(" "+t._s(t.transaction.selectedTransaction.sellerEmail)+" ")]),a("vs-td",[t._v(" ₦ "+t._s(t.transaction.selectedTransaction.price)+" ")])],1)]},proxy:!0}])}),a("v-system-bar",{staticClass:"mb-3 text-body-2",attrs:{color:"transparent"}},[t._v(" Sub Total: "),a("v-spacer"),t._v(" ₦ 400 ")],1),a("v-system-bar",{staticClass:"mb-3 text-body-2",attrs:{color:"transparent"}},[t._v(" Shipping: "),a("v-spacer"),t._v(" Free ")],1),a("v-system-bar",{staticClass:"text-body-2",attrs:{color:"transparent"}},[t._v(" Total: "),a("v-spacer"),t._v(" ₦ "+t._s(t.transaction.selectedTransaction.price)+" ")],1)],1)])},i=[],n=a("5530"),r=a("2f62"),o={data:function(){return{desserts:[{product:a("4d7a"),productName:"Phone patterned cases",price:"$ 145"}]}},computed:Object(n["a"])({},Object(r["d"])(["transaction"]))},c=o,l=a("2877"),p=a("6544"),h=a.n(p),d=a("2fa4"),u=a("afd9"),v=Object(l["a"])(c,s,i,!1,null,null,null);e["default"]=v.exports;h()(v,{VSpacer:d["a"],VSystemBar:u["a"]})},afd9:function(t,e,a){"use strict";var s=a("5530"),i=(a("a9e3"),a("c7cd"),a("8308"),a("3a66")),n=a("a9ad"),r=a("7560"),o=a("58df"),c=a("80d2");e["a"]=Object(o["a"])(Object(i["a"])("bar",["height","window"]),n["a"],r["a"]).extend({name:"v-system-bar",props:{height:[Number,String],lightsOut:Boolean,window:Boolean},computed:{classes:function(){return Object(s["a"])({"v-system-bar--lights-out":this.lightsOut,"v-system-bar--absolute":this.absolute,"v-system-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-system-bar--window":this.window},this.themeClasses)},computedHeight:function(){return this.height?isNaN(parseInt(this.height))?this.height:parseInt(this.height):this.window?32:24},styles:function(){return{height:Object(c["h"])(this.computedHeight)}}},methods:{updateApplication:function(){return this.$el?this.$el.clientHeight:this.computedHeight}},render:function(t){var e={staticClass:"v-system-bar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),Object(c["t"])(this))}})}}]);
//# sourceMappingURL=chunk-e664b8e0.e289c1d2.js.map