(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9d96e246"],{"01b6":function(t,e,n){t.exports=n.p+"img/greenBig.6de05527.png"},"123f":function(t,e,n){},"140b":function(t,e,n){},"1b61":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAMAAABFNRROAAAALVBMVEX6+vr19fX9/f37+/v+/v75+fni4+L39/fx8/Hm5+br7Ovb29v////V1dX///98IJfXAAAAD3RSTlP//////////////////wDU3JihAAAAXUlEQVR42j3K0Q7AIAhDUedEoVj+/3MHLtt9aU7SFqHmbhpVC/CEIyVN1UgtGe3uPWeWnNfYY1z0Erl2tsjSJBID7xN0iMCJUhjf/CgwyQlPlkJEWlvJ1FdSUz8RD5YjB2QIqEc+AAAAAElFTkSuQmCC"},"2dbe":function(t,e,n){},"38af":function(t,e,n){"use strict";var a=n("140b"),s=n.n(a);s.a},"4ecb":function(t,e,n){"use strict";var a=n("a06c"),s=n.n(a);s.a},6511:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap"},[a("HomeHead"),a("section",[a("div",{staticClass:"app"},[a("div",{staticClass:"douban"},[a("span",{staticClass:"app-title"},[t._v("豆瓣 6.0")]),a("div",{staticClass:"slogn"},[a("p",[t._v("下载豆瓣app")]),a("div",{staticClass:"img",on:{mousemove:t.onMouseMove,mouseout:t.onMouseOut}},[t.showCode?a("img",{staticClass:"green",attrs:{src:n("c2d3"),alt:""}}):a("div",{staticClass:"codeBig"},[a("img",{staticClass:"greenBig",attrs:{src:n("01b6"),alt:""}}),a("span",[t._v("iOS / Android 扫码直接下载")])])])])])]),a("div",{staticClass:"login"},[a("Login")],1)])],1)},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("header",{staticClass:"index"},[a("img",{attrs:{src:n("8d6e"),alt:"douban_logo"}}),a("Input",{staticClass:"input"}),a("div",{staticClass:"head_title"},t._l(t.tags,function(e,n){return a("router-link",{key:n,class:e.class,attrs:{to:e.path}},[t._v(t._s(e.title))])}),1)],1)])},c=[],r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-index"},[a("input",{attrs:{type:"text",placeholder:"电影 音乐 读书"}}),a("span",[a("img",{attrs:{src:n("1b61"),alt:""}})])])}],l={name:"v-input"},u=l,A=(n("e971"),n("2877")),f=Object(A["a"])(u,r,o,!1,null,"3ab3b0b8",null),m=f.exports,d={name:"home",components:{Input:m},data:function(){return{tags:[{title:"读书",path:"/read",class:"read"},{title:"电影",path:"/movie",class:"movie"},{title:"音乐",path:"/music",class:"music"},{title:"小组",path:"/group",class:"group"},{title:"同城",path:"/events",class:"events"},{title:"FM",path:"/fm",class:"fm"},{title:"时间",path:"/time",class:"time"},{title:"豆品",path:"/market",class:"market"}]}}},p=d,b=(n("38af"),Object(A["a"])(p,i,c,!1,null,"0fb83c3c",null)),g=b.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",[a("img",{staticClass:"from_img",attrs:{src:n("a02c"),alt:""}}),a("section",{staticClass:"from_section"},[t._m(0),t._m(1),a("LoginInput"),a("Indentify"),a("Button"),t._m(2),t._m(3)],1)])},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"form_head"},[n("span",[t._v("短信登录／注册")]),n("span",[t._v("密码登录")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"form_notice"},[t._v("\n      请仔细阅读\n      "),n("span",[t._v("豆瓣使用协议、隐私政策")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form_auto_login"},[n("div",[n("input",{attrs:{id:"auto_login",type:"checkbox"}}),n("label",{attrs:{for:"auto_login"}},[t._v("下次自动登录")])]),n("span",[t._v("收不到验证码")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",[t._v("第三方登录:")]),n("i",{staticClass:"iconfont icon-wechat"}),n("i",{staticClass:"iconfont icon-xinlang"})])}],h=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},J=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index"},[n("span",[t._v("+86")]),n("input",{attrs:{type:"text",placeholder:"手机号"}})])}],M={name:"loginInput"},E=M,D=(n("f9b5"),Object(A["a"])(E,h,J,!1,null,"7fa0cff1",null)),V=D.exports,k=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},B=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index"},[n("input",{attrs:{type:"text",placeholder:"验证码"}}),n("span",[t._v("获取验证码")])])}],N={name:"index"},F=N,R=(n("fca2"),Object(A["a"])(F,k,B,!1,null,"89fa5922",null)),O=R.exports,Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",[t._v("登录豆瓣")])},w=[],Q={name:"index"},W=Q,x=(n("4ecb"),Object(A["a"])(W,Z,w,!1,null,"8da2cf24",null)),I=x.exports,z={name:"login",components:{LoginInput:V,Indentify:O,Button:I}},H=z,K=(n("8d2c"),Object(A["a"])(H,v,C,!1,null,"77ebafdb",null)),U=K.exports,y={name:"home",data:function(){return{showCode:!0}},components:{HomeHead:g,Login:U},methods:{onMouseMove:function(){this.showCode=!1},onMouseOut:function(){this.showCode=!0}}},G=y,S=(n("f02e"),Object(A["a"])(G,a,s,!1,null,"a78f57c8",null));e["default"]=S.exports},"7d56":function(t,e,n){},"8d2c":function(t,e,n){"use strict";var a=n("ad5b"),s=n.n(a);s.a},"8d6e":function(t,e,n){t.exports=n.p+"img/douban_logo.a23a7f60.png"},a02c:function(t,e){t.exports="data:image/png;base64,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"},a06c:function(t,e,n){},ad5b:function(t,e,n){},bee2:function(t,e,n){},c2d3:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAZQTFRFALUd////342X+wAAAAJ0Uk5T/wDltzBKAAAAa0lEQVR42uzW3Q4AEAgG0Lz/S7v0l4olstxpzmb5GEibAwKyEJBB1TXgsBWg6n5h2xaqHvBl+HtWrV+AeFfbuRacBcAa1osL0oPYhb0Fmea4hn30xM0RQjxytrA/+K2QL13kczA+uqowCzAAyLEI8d6X/lYAAAAASUVORK5CYII="},e971:function(t,e,n){"use strict";var a=n("7d56"),s=n.n(a);s.a},f02e:function(t,e,n){"use strict";var a=n("bee2"),s=n.n(a);s.a},f9b5:function(t,e,n){"use strict";var a=n("123f"),s=n.n(a);s.a},fca2:function(t,e,n){"use strict";var a=n("2dbe"),s=n.n(a);s.a}}]);
//# sourceMappingURL=chunk-9d96e246.a0da9ecf.js.map