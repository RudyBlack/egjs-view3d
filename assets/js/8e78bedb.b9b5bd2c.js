"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2008],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),s=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},p=function(t){var e=s(t.components);return n.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=s(r),m=a,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(k,l(l({ref:e},p),{},{components:r})):n.createElement(k,l({ref:e},p))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4908:function(t,e,r){r.r(e),r.d(e,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),l=["components"],i={custom_edit_url:null},c=void 0,s={unversionedId:"api/WebARControl",id:"api/WebARControl",title:"WebARControl",description:"AR control for WebARSession",source:"@site/docs/api/WebARControl.mdx",sourceDirName:"api",slug:"/api/WebARControl",permalink:"/egjs-view3d/docs/api/WebARControl",editUrl:null,tags:[],version:"current",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"ScaleUI",permalink:"/egjs-view3d/docs/api/ScaleUI"},next:{title:"ARManager",permalink:"/egjs-view3d/docs/api/ARManager"}},p={},d=[{value:"Constructor",id:"constructor",level:2},{value:"Properties",id:"properties",level:2},{value:"rotate",id:"rotate",level:3},{value:"translate",id:"translate",level:3},{value:"scale",id:"scale",level:3},{value:"Methods",id:"methods",level:2},{value:"destroy",id:"destroy",level:3}],u={toc:d};function m(t){var e=t.components,r=(0,a.Z)(t,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"class WebARControl\n")),(0,o.kt)("p",null,"AR control for ",(0,o.kt)("a",{parentName:"p",href:"WebARSession"},"WebARSession")),(0,o.kt)("div",{className:"container"},(0,o.kt)("div",{className:"row mb-2"},(0,o.kt)("div",{className:"col col--6"},(0,o.kt)("strong",null,"Properties")),(0,o.kt)("div",{className:"col col--6"},(0,o.kt)("strong",null,"Methods"))),(0,o.kt)("div",{className:"row"},(0,o.kt)("div",{className:"col col--6"},(0,o.kt)("a",{href:"#rotate"},"rotate"),(0,o.kt)("br",null),(0,o.kt)("a",{href:"#translate"},"translate"),(0,o.kt)("br",null),(0,o.kt)("a",{href:"#scale"},"scale")),(0,o.kt)("div",{className:"col col--6"},(0,o.kt)("a",{href:"#destroy"},"destroy")))),(0,o.kt)("h2",{id:"constructor"},"Constructor"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"new WebARControl(options, arScene, )\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,o.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,o.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,o.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,o.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"options"),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"WebARControlOptions"},"WebARControlOptions")),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"},"Options")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"arScene"),(0,o.kt)("td",{parentName:"tr",align:"center"},"ARScene"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"WebARControlOptions"},"WebARControlOptions")),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"})))),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"rotate"},"rotate"),(0,o.kt)("div",{className:"bulma-tags"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"ARSwirlControl"},"ARSwirlControl")," in this control"),(0,o.kt)("h3",{id:"translate"},"translate"),(0,o.kt)("div",{className:"bulma-tags"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"ARTranslateControl"},"ARTranslateControl")," in this control"),(0,o.kt)("h3",{id:"scale"},"scale"),(0,o.kt)("div",{className:"bulma-tags"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"ARScaleControl"},"ARScaleControl")," in this control"),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"destroy"},"destroy"),(0,o.kt)("div",{className:"bulma-tags"}),(0,o.kt)("p",null,"Destroy this control and deactivate it"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,o.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,o.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,o.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,o.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"session"),(0,o.kt)("td",{parentName:"tr",align:"center"},"THREE.XRSession"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"})))))}m.isMDXComponent=!0}}]);