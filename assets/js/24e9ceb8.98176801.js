"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1776],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,d=p["".concat(l,".").concat(f)]||p[f]||u[f]||o;return n?r.createElement(d,i(i({ref:t},m),{},{components:n})):r.createElement(d,i({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7359:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.type,n=e.defaultVal;return r.createElement("div",{className:"bulma-tags"},t&&r.createElement("div",{className:"bulma-tags has-addons are-medium mb-1 mr-2"},r.createElement("span",{className:"bulma-tag is-dark"},"Type"),r.createElement("span",{className:"bulma-tag is-info"},t)),n&&r.createElement("div",{className:"bulma-tags has-addons are-medium mb-1"},r.createElement("span",{className:"bulma-tag is-dark"},"Default"),r.createElement("span",{className:"bulma-tag is-warning"},n)))}},7997:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return u},default:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=n(7359),s=["components"],l={sidebar_position:9},c=void 0,m={unversionedId:"options/miscellaneous/maxDeltaTime",id:"options/miscellaneous/maxDeltaTime",title:"maxDeltaTime",description:"Maximum delta time in any given frame",source:"@site/docs/options/miscellaneous/maxDeltaTime.mdx",sourceDirName:"options/miscellaneous",slug:"/options/miscellaneous/maxDeltaTime",permalink:"/egjs-view3d/docs/options/miscellaneous/maxDeltaTime",editUrl:"https://github.com/naver/egjs-view3d/edit/main/demo/docs/options/miscellaneous/maxDeltaTime.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"options",previous:{title:"plugins",permalink:"/egjs-view3d/docs/options/miscellaneous/plugins"}},u=[],p={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{type:"number",defaultVal:"0.333333...",mdxType:"OptionDescriptor"}),(0,o.kt)("p",null,"Maximum delta time in any given frame",(0,o.kt)("br",{parentName:"p"}),"\n","This can prevent a long frame hitch / lag",(0,o.kt)("br",{parentName:"p"}),"\n","The default value is 0.33333...(30 fps). Set this value to ",(0,o.kt)("inlineCode",{parentName:"p"},"Infinity")," to disable"))}f.isMDXComponent=!0}}]);