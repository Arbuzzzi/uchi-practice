(function(e){function t(t){for(var o,c,a=t[0],s=t[1],u=t[2],p=0,f=[];p<a.length;p++)c=a[p],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,a=1;a<n.length;a++){var s=n[a];0!==r[s]&&(o=!1)}o&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},i=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var l=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0432":function(e,t,n){"use strict";var o=n("6b66"),r=n.n(o);r.a},"199c":function(e,t){},"23be":function(e,t,n){"use strict";var o=n("199c"),r=n.n(o);t["default"]=r.a},"3dfd":function(e,t,n){"use strict";var o=n("eec1"),r=n("23be"),i=n("2877"),c=Object(i["a"])(r["default"],o["a"],o["b"],!1,null,null,null);t["default"]=c.exports},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=n("3dfd"),i=n("8c4f"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container pt-4"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-6"},[n("app-scene")],1),n("div",{staticClass:"col-6"},[n("app-keyboard")],1)])])},a=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"scene",style:e.computeStyleScene},[n("div",{staticClass:"scene__item",style:e.computeStyleDetail})])},u=[],l=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("2fa7")),p=n("2f62");function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(n,!0).forEach((function(t){Object(l["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b,v={name:"AppScene",computed:d({},Object(p["c"])(["getDetail","getDetailPosition","getScene"]),{computeStyleDetail:function(){return{top:this.getDetailPosition.top+"px",left:this.getDetailPosition.left+"px"}},computeStyleScene:function(){return{width:this.getScene.width+"px",height:this.getScene.height+"px"}}})},g=v,m=(n("0432"),n("2877")),h=Object(m["a"])(g,s,u,!1,null,"0a4e9fba",null),y=h.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"keyboard"},[n("app-keyboard-buttons"),n("app-keyboard-rage")],1)},w=[],P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"keyboard__box"},[n("div",{staticClass:"btn-inn"},[n("button",{staticClass:"btn btn-success",attrs:{disabled:e.computeMaxTopPos},on:{click:function(t){return e.setDetailPosition("top")},mousedown:function(t){return e.startMove("top")},mouseup:function(t){return e.endMove()},mouseleave:function(t){return e.endMove()}}},[n("font-awesome-icon",{attrs:{icon:"arrow-up"}})],1)]),n("div",{staticClass:"btn-inn"},[n("button",{staticClass:"btn btn-success",attrs:{disabled:e.computeMaxLeftPos},on:{click:function(t){return e.setDetailPosition("left")},mousedown:function(t){return e.startMove("left")},mouseup:function(t){return e.endMove()},mouseleave:function(t){return e.endMove()}}},[n("font-awesome-icon",{attrs:{icon:"arrow-left"}})],1),n("button",{staticClass:"btn btn-success",attrs:{disabled:e.computeMaxBottomPos},on:{click:function(t){return e.setDetailPosition("bottom")},mousedown:function(t){return e.startMove("bottom")},mouseup:function(t){return e.endMove()},mouseleave:function(t){return e.endMove()}}},[n("font-awesome-icon",{attrs:{icon:"arrow-down"}})],1),n("button",{staticClass:"btn btn-success",attrs:{disabled:e.computeMaxRightPos},on:{click:function(t){return e.setDetailPosition("right")},mousedown:function(t){return e.startMove("right")},mouseup:function(t){return e.endMove()},mouseleave:function(t){return e.endMove()}}},[n("font-awesome-icon",{attrs:{icon:"arrow-right"}})],1)])])},j=[];function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(n,!0).forEach((function(t){Object(l["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x={name:"AppKeyboardButtons",computed:S({},Object(p["c"])(["getDetail","getDetailPosition","getScene","getSpeed"]),{computeMaxBottomPos:function(){var e=this.getDetailPosition.top,t=this.getDetail.height,n=this.getScene.height,o=e+t+2>=n;return o&&clearInterval(b),o},computeMaxTopPos:function(){var e=this.getDetailPosition.top,t=e-1<0;return t&&clearInterval(b),t},computeMaxLeftPos:function(){var e=this.getDetailPosition.left,t=e-1<0;return t&&clearInterval(b),t},computeMaxRightPos:function(){var e=this.getDetailPosition.left,t=this.getDetail.width,n=this.getScene.width,o=e+t+2>=n;return o&&clearInterval(b),o}}),methods:S({},Object(p["b"])(["setDetailPosition"]),{startMove:function(e){var t=this;clearInterval(b),b=setInterval((function(){t.setDetailPosition(e)}),100/this.getSpeed)},endMove:function(){clearInterval(b)}})},k=x,M=Object(m["a"])(k,P,j,!1,null,"854ac76e",null),_=M.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"rage-inn"},[n("h2",{staticClass:"text-left mt-5 mb-5"},[e._v(" Скорость: ")]),n("vue-range-slider",{attrs:{"process-style":{backgroundColor:"#28a745"},"tooltip-style":{backgroundColor:"#28a745",borderColor:"#28a745"},min:1,max:10,value:e.getSpeed},on:{input:function(t){return e.setSpeed(t)}}})],1)},E=[];function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(n,!0).forEach((function(t){Object(l["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var $={name:"AppKeyboardRage",data:function(){return{value:5}},computed:I({},Object(p["c"])(["getSpeed"])),methods:I({},Object(p["b"])(["setSpeed"]))},K=$,B=Object(m["a"])(K,C,E,!1,null,"4a4d558f",null),T=B.exports,R={name:"AppKeyboard",components:{AppKeyboardRage:T,AppKeyboardButtons:_}},N=R,F=Object(m["a"])(N,O,w,!1,null,"3f1ea02a",null),H=F.exports,J={name:"Home",components:{AppKeyboard:H,AppScene:y}},L=J,q=Object(m["a"])(L,c,a,!1,null,null,null),z=q.exports;o["a"].use(i["a"]);var G=[{path:"/",name:"Home",component:z}],Q=new i["a"]({mode:"history",routes:G}),U=Q;o["a"].use(p["a"]);var V=new p["a"].Store({state:{detail:{width:50,height:50,position:{top:75,left:75}},scene:{width:200,height:200},speed:5},mutations:{setDetailPosition:function(e,t){switch(t){case"top":e.detail.position.top=--e.detail.position.top;break;case"bottom":e.detail.position.top=++e.detail.position.top;break;case"left":e.detail.position.left=--e.detail.position.left;break;case"right":e.detail.position.left=++e.detail.position.left;break;default:console.error("setDetailPosition Error: Please set the correct direction")}},setSpeed:function(e,t){e.speed=t}},actions:{setDetailPosition:function(e,t){var n=e.commit;n("setDetailPosition",t)},setSpeed:function(e,t){var n=e.commit;n("setSpeed",t)}},getters:{getDetail:function(e){return e.detail},getDetailPosition:function(e){return e.detail.position},getScene:function(e){return e.scene},getSpeed:function(e){return e.speed}},modules:{}}),W=n("9483");Object(W["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var X=n("b8c8"),Y=n("ecee"),Z=n("c074"),ee=n("ad3d");n("e1b1"),n("ab8b"),n("e83b");Y["c"].add(Z["d"],Z["a"],Z["b"],Z["c"]),o["a"].config.productionTip=!1,o["a"].component("font-awesome-icon",ee["a"]),o["a"].component("vue-range-slider",X["a"]),new o["a"]({router:U,store:V,render:function(e){return e(r["default"])}}).$mount("#app")},"6b66":function(e,t,n){},e83b:function(e,t,n){},eec1:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[];n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return r}))}});
//# sourceMappingURL=app.09fd5960.js.map