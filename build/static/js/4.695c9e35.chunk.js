/*! For license information please see 4.695c9e35.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{35:function(t,e,r){"use strict";function n(t,e,r,n,o,c,i){try{var a=t[c](i),u=a.value}catch(s){return void r(s)}a.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,c){var i=t.apply(e,r);function a(t){n(i,o,c,a,u,"next",t)}function u(t){n(i,o,c,a,u,"throw",t)}a(void 0)}))}}r.d(e,"a",(function(){return o}))},36:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}r.d(e,"a",(function(){return c}))},37:function(t,e,r){"use strict";function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,c="function"==typeof Symbol?Symbol:{},i=c.iterator||"@@iterator",a=c.asyncIterator||"@@asyncIterator",u=c.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(_){s=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,c=Object.create(o.prototype),i=new S(n||[]);return c._invoke=function(t,e,r){var n="suspendedStart";return function(o,c){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw c;return k()}for(r.method=o,r.arg=c;;){var i=r.delegate;if(i){var a=O(i,r);if(a){if(a===h)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),c}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(_){return{type:"throw",arg:_}}}t.wrap=f;var h={};function p(){}function d(){}function y(){}var b={};s(b,i,(function(){return this}));var v=Object.getPrototypeOf,m=v&&v(v(L([])));m&&m!==e&&r.call(m,i)&&(b=m);var j=y.prototype=p.prototype=Object.create(b);function g(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function o(c,i,a,u){var s=l(t[c],t,i);if("throw"!==s.type){var f=s.arg,h=f.value;return h&&"object"==n(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,a,u)}),(function(t){o("throw",t,a,u)})):e.resolve(h).then((function(t){f.value=t,a(f)}),(function(t){return o("throw",t,a,u)}))}u(s.arg)}var c;this._invoke=function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return c=c?c.then(n,n):n()}}function O(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function L(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return d.prototype=y,s(j,"constructor",y),s(y,"constructor",d),d.displayName=s(y,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,u,"GeneratorFunction")),t.prototype=Object.create(j),t},t.awrap=function(t){return{__await:t}},g(w.prototype),s(w.prototype,a,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,c){void 0===c&&(c=Promise);var i=new w(f(e,r,n,o),c);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},g(j),s(j,u,"Generator"),s(j,i,(function(){return this})),s(j,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var c=this.tryEntries[o],i=c.completion;if("root"===c.tryLoc)return n("end");if(c.tryLoc<=this.prev){var a=r.call(c,"catchLoc"),u=r.call(c,"finallyLoc");if(a&&u){if(this.prev<c.catchLoc)return n(c.catchLoc,!0);if(this.prev<c.finallyLoc)return n(c.finallyLoc)}else if(a){if(this.prev<c.catchLoc)return n(c.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return n(c.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var c=o;break}}c&&("break"===t||"continue"===t)&&c.tryLoc<=e&&e<=c.finallyLoc&&(c=null);var i=c?c.completion:{};return i.type=t,i.arg=e,c?(this.method="next",this.next=c.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}r.d(e,"a",(function(){return o}))},38:function(t,e,r){"use strict";var n=r(36),o=r(37),c=r(35),i=r(40),a=r(0);function u(t,e){return"SEND"===e.type?{data:null,error:null,status:"pending"}:"SUCCESS"===e.type?{data:e.responseData,error:null,status:"completed"}:"ERROR"===e.type?{data:null,error:e.errorMessage,status:"completed"}:t}e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=Object(a.useReducer)(u,{status:e?"pending":null,data:null,error:null}),s=Object(i.a)(r,2),f=s[0],l=s[1],h=Object(a.useCallback)(function(){var e=Object(c.a)(Object(o.a)().mark((function e(r){var n;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l({type:"SEND"}),e.prev=1,e.next=4,t(r);case 4:n=e.sent,l({type:"SUCCESS",responseData:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),l({type:"ERROR",errorMessage:e.t0.message||"Something went wrong!"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),[t]);return Object(n.a)({sendRequest:h},f)}},39:function(t,e,r){"use strict";r.d(e,"d",(function(){return a})),r.d(e,"e",(function(){return s})),r.d(e,"b",(function(){return l})),r.d(e,"a",(function(){return p})),r.d(e,"c",(function(){return y}));var n=r(37),o=r(36),c=r(35),i="https://quotes-cdc8c-default-rtdb.firebaseio.com/";function a(){return u.apply(this,arguments)}function u(){return(u=Object(c.a)(Object(n.a)().mark((function t(){var e,r,c,a,u;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(i,"/quotes.json"));case 2:return e=t.sent,t.next=5,e.json();case 5:if(r=t.sent,e.ok){t.next=8;break}throw new Error(r.message||"Could not fetch quotes.");case 8:for(a in c=[],r)u=Object(o.a)({id:a},r[a]),c.push(u);return t.abrupt("return",c);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function s(t){return f.apply(this,arguments)}function f(){return(f=Object(c.a)(Object(n.a)().mark((function t(e){var r,c,a;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(i,"/quotes/").concat(e,".json"));case 2:return r=t.sent,t.next=5,r.json();case 5:if(c=t.sent,r.ok){t.next=8;break}throw new Error(c.message||"Could not fetch quote.");case 8:return a=Object(o.a)({id:e},c),t.abrupt("return",a);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return h.apply(this,arguments)}function h(){return(h=Object(c.a)(Object(n.a)().mark((function t(e){var r,o;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(i,"/quotes.json"),{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});case 2:return r=t.sent,t.next=5,r.json();case 5:if(o=t.sent,r.ok){t.next=8;break}throw new Error(o.message||"Could not create quote.");case 8:return t.abrupt("return",null);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return d.apply(this,arguments)}function d(){return(d=Object(c.a)(Object(n.a)().mark((function t(e){var r,o;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(i,"/comments/").concat(e.quoteId,".json"),{method:"POST",body:JSON.stringify(e.commentData),headers:{"Content-Type":"application/json"}});case 2:return r=t.sent,t.next=5,r.json();case 5:if(o=t.sent,r.ok){t.next=8;break}throw new Error(o.message||"Could not add comment.");case 8:return t.abrupt("return",{commentId:o.name});case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return b.apply(this,arguments)}function b(){return(b=Object(c.a)(Object(n.a)().mark((function t(e){var r,c,a,u,s;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(i,"/comments/").concat(e,".json"));case 2:return r=t.sent,t.next=5,r.json();case 5:if(c=t.sent,r.ok){t.next=8;break}throw new Error(c.message||"Could not get comments.");case 8:for(u in a=[],c)s=Object(o.a)({id:u},c[u]),a.push(s);return t.abrupt("return",a);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},40:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,c=[],i=!0,a=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(c.push(n.value),!e||c.length!==e);i=!0);}catch(u){a=!0,o=u}finally{try{i||null==r.return||r.return()}finally{if(a)throw o}}return c}}(t,e)||function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(e,"a",(function(){return o}))},48:function(t,e,r){t.exports={item:"QuoteItem_item__1Xvo0"}},49:function(t,e,r){t.exports={list:"QuoteList_list__3VSAL",sorting:"QuoteList_sorting__2B8H8"}},50:function(t,e,r){t.exports={noquotes:"NoQuotesFound_noquotes__17NG3"}},53:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r(2),c=r(48),i=r.n(c),a=r(8),u=r(1),s=function(t){return Object(u.jsxs)("li",{className:i.a.item,children:[Object(u.jsxs)("figure",{children:[Object(u.jsx)("blockquote",{children:Object(u.jsx)("p",{children:t.text})}),Object(u.jsx)("figcaption",{children:t.author})]}),Object(u.jsx)(a.b,{to:"/quotes/".concat(t.id),className:"btn",children:"View Fullscreen"})]})},f=r(49),l=r.n(f),h=function(t){var e,r,c=Object(o.h)(),i=Object(o.i)(),a="asc"===new URLSearchParams(i.search).get("sort"),f=(e=t.quotes,r=a,e.sort((function(t,e){return r?t.id>e.id?1:-1:t.id<e.id?1:-1})));return Object(u.jsxs)(n.Fragment,{children:[Object(u.jsx)("div",{className:l.a.sorting,children:Object(u.jsxs)("button",{onClick:function(){c.push("".concat(i.pathname,"?sort=").concat(a?"desc":"asc"))},children:["Sort ",a?"Descending":"Ascending"]})}),Object(u.jsx)("ul",{className:l.a.list,children:f.map((function(t){return Object(u.jsx)(s,{id:t.id,author:t.author,text:t.text},t.id)}))})]})},p=r(38),d=r(39),y=r(14),b=r(50),v=r.n(b),m=function(){return Object(u.jsxs)("div",{className:v.a.noquotes,children:[Object(u.jsx)("p",{children:"No quotes found!"}),Object(u.jsx)(a.b,{className:"btn",to:"/new-quote",children:"Add a Quote"})]})};e.default=function(){var t=Object(p.a)(d.d,!0),e=t.sendRequest,r=t.status,o=t.data,c=t.error;return Object(n.useEffect)((function(){e()}),[e]),"pending"===r?Object(u.jsx)("div",{className:"centered",children:Object(u.jsx)(y.a,{})}):c?Object(u.jsx)("p",{className:"centered focused",children:c}):"completed"===r&&!o||0===o.length?Object(u.jsx)(m,{}):Object(u.jsx)(h,{quotes:o})}}}]);
//# sourceMappingURL=4.695c9e35.chunk.js.map