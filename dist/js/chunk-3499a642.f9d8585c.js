(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3499a642"],{"615b":function(t,e,r){},"99d9":function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return i})),r.d(e,"c",(function(){return o}));var a=r("b0af"),n=r("80d2"),c=Object(n["j"])("v-card__actions"),s=Object(n["j"])("v-card__subtitle"),i=Object(n["j"])("v-card__text"),o=Object(n["j"])("v-card__title");a["a"]},b05d:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{flat:""}},[r("v-card-text",{staticClass:"mx-0 px-0"},[r("v-select",{attrs:{items:t.currency,label:"Currency",color:"deep-purple accent-4","full-width":"",dense:"",outlined:""},on:{change:t.setTraderCryptoCurrency}})],1)],1)},n=[],c=r("5530"),s=r("2f62"),i={data:function(){return{currency:["Bitcoin","Ethereum","Ethereum Classic","Litecoin","Namecoin","Peercoin","Dogecoin","Gridcoin","Primecoin","Ripple","Nxt","Auroracoin","Dash","NEO","MazaCoin","Monero","Titcoin","Verge","Stellar","Vertcoin","Nano","Tether","Firo","Zcash","Bitcoin Cash","EOS.IO","Cardano","BitClout"]}},methods:{setTraderCryptoCurrency:function(t){this.traderCrypto.traderCryptoInputs.currency=t}},computed:Object(c["a"])({},Object(s["d"])(["traderCrypto"]))},o=i,l=r("2877"),d=r("6544"),u=r.n(d),h=r("b0af"),p=r("99d9"),b=r("b974"),f=Object(l["a"])(o,a,n,!1,null,null,null);e["default"]=f.exports;u()(f,{VCard:h["a"],VCardText:p["b"],VSelect:b["a"]})},b0af:function(t,e,r){"use strict";var a=r("5530"),n=(r("a9e3"),r("0481"),r("4069"),r("615b"),r("10d2")),c=r("297c"),s=r("1c87"),i=r("58df");e["a"]=Object(i["a"])(c["a"],s["a"],n["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({"v-card":!0},s["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},n["a"].options.computed.classes.call(this))},styles:function(){var t=Object(a["a"])({},n["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=c["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,a=e.data;return a.style=this.styles,this.isClickable&&(a.attrs=a.attrs||{},a.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,a),[this.genProgress(),this.$slots.default])}})}}]);
//# sourceMappingURL=chunk-3499a642.f9d8585c.js.map