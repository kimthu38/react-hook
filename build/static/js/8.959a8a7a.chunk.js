/*! For license information please see 8.959a8a7a.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-hooks"]=this["webpackJsonpreact-hooks"]||[]).push([[8],{183:function(e,r,t){"use strict";e.exports=t(184)},184:function(e,r,t){"use strict";t(54);var n=t(1),c=60103;if(r.Fragment=60107,"function"===typeof Symbol&&Symbol.for){var o=Symbol.for;c=o("react.element"),r.Fragment=o("react.fragment")}var a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,t){var n,o={},u=null,l=null;for(n in void 0!==t&&(u=""+t),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(l=r.ref),r)i.call(r,n)&&!s.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:c,type:e,key:u,ref:l,props:o,_owner:a.current}}r.jsx=u,r.jsxs=u},187:function(e,r,t){"use strict";t.d(r,"a",(function(){return o}));var n=t(6),c=t(1);function o(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=t.serialize,a=void 0===o?JSON.stringify:o,i=t.deserialize,s=void 0===i?JSON.parse:i,u=c.useState((function(){var t=window.localStorage.getItem(e);return t?s(t):"function"===typeof r?r():r})),l=Object(n.a)(u,2),f=l[0],d=l[1],v=c.useRef(e);return c.useEffect((function(){var r=v.current;r!==e&&window.localStorage.removeItem(r),v.current=e,window.localStorage.setItem(e,a(f))}),[e,f,a]),[f,d]}},219:function(e,r,t){"use strict";t.r(r);var n=t(14),c=t(6),o=(t(1),t(187)),a=t(183);function i(){var e=Object(o.a)("squares",Array(9).fill(null)),r=Object(c.a)(e,2),t=r[0],i=r[1],s=function(e){var r=e.filter((function(e){return"X"===e})).length;return e.filter((function(e){return"O"===e})).length===r?"X":"O"}(t),u=function(e){for(var r=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],t=0;t<r.length;t++){var n=Object(c.a)(r[t],3),o=n[0],a=n[1],i=n[2];if(e[o]&&e[o]===e[a]&&e[o]===e[i])return e[o]}return null}(t),l=function(e,r,t){return e?"Winner: ".concat(e):r.every(Boolean)?"Scratch: Cat's game":"Next player: ".concat(t)}(u,t,s);function f(e){return Object(a.jsx)("button",{className:"square",onClick:function(){return function(e){if(!u&&!t[e]){var r=Object(n.a)(t);r[e]=s,i(r)}}(e)},children:t[e]})}return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"status",children:l}),Object(a.jsxs)("div",{className:"board-row",children:[f(0),f(1),f(2)]}),Object(a.jsxs)("div",{className:"board-row",children:[f(3),f(4),f(5)]}),Object(a.jsxs)("div",{className:"board-row",children:[f(6),f(7),f(8)]}),Object(a.jsx)("button",{className:"restart",onClick:function(){i(Array(9).fill(null))},children:"restart"})]})}function s(){return Object(a.jsx)("div",{className:"game",children:Object(a.jsx)("div",{className:"game-board",children:Object(a.jsx)(i,{})})})}r.default=function(){return Object(a.jsx)(s,{})}}}]);
//# sourceMappingURL=8.959a8a7a.chunk.js.map