(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-241a5084"],{"1eb1":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"scroll_index"},[n("div",{staticClass:"wrap"},[n("h2",[t._v("窗口高度的获取:")]),n("div",[n("button",{on:{click:t.onClickScroll}},[t._v("点我")]),n("span",[t._v("window.innerHeight: "+t._s(t.windowinnerHeight))]),n("span",[t._v("document.documentElement.clientHeight: "+t._s(t.documentdocumentElementclientHeight))]),n("span",[t._v("document.documentElement.offsetHeight: "+t._s(t.offsetHeight))]),n("span",[t._v("document.documentElement.getBoundingClientRect().height: "+t._s(t.getBoundingClientRect))])])]),n("div",{staticClass:"wrap"},[n("h2",[t._v("document.documentElement.clientHeight 获取不到border")]),n("div",[n("button",{ref:"button",staticClass:"button1",on:{click:t.onClickScroll1}},[t._v("点我获取border为1的按钮的高度")]),n("span",[t._v("getBoundingClientRect().height: "+t._s(t.getBoundingClientRect1))]),n("span",[t._v("document.documentElement.clientHeight: "+t._s(t.documentdocumentElementclientHeight1))])])]),n("div",{staticStyle:{height:"800px"}}),n("div",{staticClass:"wrap fixed"},[n("h2",[t._v("窗口滚动高度的获取:")]),n("div",[n("button",{on:{click:t.onClickScroll}},[t._v("滚动即可出现参数")]),n("span",[t._v("document.documentElement.scrollTop: "+t._s(t.documentdocumentElementscrollTop))]),n("span",[t._v("window.pageYOffset: "+t._s(t.windowpageYOffset))]),n("span",[t._v("document.body.scrollTop /移动端: "+t._s(t.documentbodyscrollTop))])])])])},i=[],c={name:"domscroll",data:function(){return{windowinnerHeight:"",documentdocumentElementclientHeight:"",offsetHeight:"",getBoundingClientRect:"",getBoundingClientRect1:"",documentdocumentElementclientHeight1:"",documentdocumentElementscrollTop:null,windowpageYOffset:"",documentbodyscrollTop:""}},created:function(){var t=this;window.addEventListener("scroll",function(){t.documentdocumentElementscrollTop=document.documentElement.scrollTop,t.windowpageYOffset=this.pageYOffset,t.documentbodyscrollTop=document.body.scrollTop})},methods:{onClickScroll:function(){this.windowinnerHeight=window.innerHeight,this.documentdocumentElementclientHeight=document.documentElement.clientHeight,this.offsetHeight=document.documentElement.offsetHeight,this.getBoundingClientRect=document.documentElement.getBoundingClientRect().height},onClickScroll1:function(){this.getBoundingClientRect1=this.$refs.button.getBoundingClientRect().height,this.documentdocumentElementclientHeight1=this.$refs.button.clientHeight}}},l=c,d=(n("fc0f"),n("2877")),s=Object(d["a"])(l,o,i,!1,null,"ff854f2c",null);e["default"]=s.exports},b520:function(t,e,n){},fc0f:function(t,e,n){"use strict";var o=n("b520"),i=n.n(o);i.a}}]);
//# sourceMappingURL=chunk-241a5084.e4ea860b.js.map