(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20f2cf"],{b308:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{flat:""}},[a("v-card-text",{staticClass:"mx-0 px-0 d-flex"},[a("v-select",{staticClass:"mr-4",attrs:{items:t.duration,label:"Transaction duration",dense:"",color:"deep-purple accent-4",outlined:"","hide-details":""},on:{change:t.setDurationWithSelect}}),a("v-menu",{attrs:{"close-on-content-click":!1,"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,c=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"text-capitalize",attrs:{color:"deep-purple accent-4",text:"",dark:""}},"v-btn",c,!1),r),[t._v(" Custom ")])]}}])},[a("v-card",{attrs:{width:"300"}},[a("v-card-text",{staticClass:"ma-0 pa-0"},[a("v-time-picker",{attrs:{format:"ampm","full-width":"",color:"deep-purple accent-4"},on:{change:t.setDurationWithClock},model:{value:t.picker,callback:function(e){t.picker=e},expression:"picker"}})],1)],1)],1)],1)],1)},c=[],n=a("5530"),s=a("2f62"),o={data:function(){return{duration:["Less than 30 minutes","1 houre","5 hours"],picker:null}},methods:{setDurationWithSelect:function(t){this.custumerCrypto.custumerCryptoInputs.duration=t},setDurationWithClock:function(){this.custumerCrypto.custumerCryptoInputs.duration=this.picker,console.log(this.custumerCrypto.custumerCryptoInputs.duration)}},computed:Object(n["a"])({},Object(s["d"])(["custumerCrypto"]))},u=o,i=a("2877"),l=a("6544"),p=a.n(l),d=a("8336"),m=a("b0af"),f=a("99d9"),h=a("e449"),k=a("b974"),C=a("c964"),v=Object(i["a"])(u,r,c,!1,null,null,null);e["default"]=v.exports;p()(v,{VBtn:d["a"],VCard:m["a"],VCardText:f["b"],VMenu:h["a"],VSelect:k["a"],VTimePicker:C["a"]})}}]);
//# sourceMappingURL=chunk-2d20f2cf.7c3f70c5.js.map