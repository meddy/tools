(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[361],{9640:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/json-formatter",function(){return r(6743)}])},8418:function(e,n,r){"use strict";function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(t=(i=c.next()).done)&&(r.push(i.value),!n||r.length!==n);t=!0);}catch(u){o=!0,a=u}finally{try{t||null==c.return||c.return()}finally{if(o)throw a}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var o,a=(o=r(7294))&&o.__esModule?o:{default:o},i=r(6273),c=r(387),u=r(7190);var l={};function f(e,n,r,t){if(e&&i.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var o=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;l[n+"%"+r+(o?"%"+o:"")]=!0}}var s=function(e){var n,r=!1!==e.prefetch,o=c.useRouter(),s=a.default.useMemo((function(){var n=t(i.resolveHref(o,e.href,!0),2),r=n[0],a=n[1];return{href:r,as:e.as?i.resolveHref(o,e.as):a||r}}),[o,e.href,e.as]),d=s.href,v=s.as,p=e.children,h=e.replace,y=e.shallow,_=e.scroll,m=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var b=(n=a.default.Children.only(p))&&"object"===typeof n&&n.ref,g=t(u.useIntersection({rootMargin:"200px"}),2),x=g[0],N=g[1],j=a.default.useCallback((function(e){x(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,x]);a.default.useEffect((function(){var e=N&&r&&i.isLocalURL(d),n="undefined"!==typeof m?m:o&&o.locale,t=l[d+"%"+v+(n?"%"+n:"")];e&&!t&&f(o,d,v,{locale:n})}),[v,d,N,m,r,o]);var w={ref:j,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,o,a,c,u){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),null==c&&t.indexOf("#")>=0&&(c=!1),n[o?"replace":"push"](r,t,{shallow:a,locale:u,scroll:c}))}(e,o,d,v,h,y,_,m)},onMouseEnter:function(e){i.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),f(o,d,v,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var E="undefined"!==typeof m?m:o&&o.locale,M=o&&o.isLocaleDomain&&i.getDomainLocale(v,E,o&&o.locales,o&&o.domainLocales);w.href=M||i.addBasePath(i.addLocale(v,E,o&&o.defaultLocale))}return a.default.cloneElement(n,w)};n.default=s},7190:function(e,n,r){"use strict";function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(t=(i=c.next()).done)&&(r.push(i.value),!n||r.length!==n);t=!0);}catch(u){o=!0,a=u}finally{try{t||null==c.return||c.return()}finally{if(o)throw a}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!i,u=o.useRef(),l=t(o.useState(!1),2),f=l[0],s=l[1],d=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),r||f||e&&e.tagName&&(u.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=c.get(n);if(r)return r;var t=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return c.set(n,r={id:n,observer:o,elements:t}),r}(r),o=t.id,a=t.observer,i=t.elements;return i.set(e,n),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&s(e)}),{rootMargin:n}))}),[r,n,f]);return o.useEffect((function(){if(!i&&!f){var e=a.requestIdleCallback((function(){return s(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),[d,f]};var o=r(7294),a=r(9311),i="undefined"!==typeof IntersectionObserver;var c=new Map},6743:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return d}});var t=r(5893);function o(e){var n,r,t="";if("string"===typeof e||"number"===typeof e)t+=e;else if("object"===typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(r=o(e[n]))&&(t&&(t+=" "),t+=r);else for(n in e)e[n]&&(t&&(t+=" "),t+=n);return t}function a(){for(var e,n,r=0,t="";r<arguments.length;)(e=arguments[r++])&&(n=o(e))&&(t&&(t+=" "),t+=n);return t}var i=r(9008),c=r(1664),u=r(7294),l=r(3617),f=r.n(l);function s(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}var d=function(){var e=(0,u.useState)(""),n=e[0],r=e[1],o=(0,u.useState)(!1),l=o[0],d=o[1],v=function(e){return function(){if(""!==n)try{r(e(JSON.parse(n)))}catch(t){d(!0)}}};return(0,t.jsxs)("div",{className:f().container,children:[(0,t.jsxs)(i.default,{children:[(0,t.jsx)("title",{children:"JSON Formatter"}),(0,t.jsx)("link",{href:"/favicon.ico",rel:"icon"})]}),(0,t.jsxs)("main",{className:f().main,children:[(0,t.jsx)(c.default,{href:"/",children:(0,t.jsx)("a",{children:"\u2190 Tools"})}),(0,t.jsx)("h1",{children:"JSON Formatter"}),(0,t.jsx)("div",{className:a(f().errorMsg,s({},f().hidden,!l)),children:"Invalid JSON"}),(0,t.jsx)("textarea",{className:a(f().input,s({},f().error,l)),onChange:function(e){r(e.target.value),l&&d(!1)},value:n}),(0,t.jsxs)("div",{children:[(0,t.jsx)("button",{className:f().control,onClick:v((function(e){return JSON.stringify(e,null,2)})),children:"Pretty"}),(0,t.jsx)("button",{className:f().control,onClick:v((function(e){return JSON.stringify(e)})),children:"Compact"})]})]})]})}},3617:function(e){e.exports={container:"Tool_container__2ZYJQ",main:"Tool_main__iKOQS",input:"Tool_input__1qPcp",error:"Tool_error__N25sB",errorMsg:"Tool_errorMsg__iL4Q9",hidden:"Tool_hidden__1ogsA",control:"Tool_control__3MUdn"}},9008:function(e,n,r){e.exports=r(5443)},1664:function(e,n,r){e.exports=r(8418)}},function(e){e.O(0,[774,888,179],(function(){return n=9640,e(e.s=n);var n}));var n=e.O();_N_E=n}]);