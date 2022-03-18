"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8649],{3905:function(t,e,r){r.d(e,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=n.createContext({}),c=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},d=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),s=c(r),m=a,u=s["".concat(l,".").concat(m)]||s[m]||g[m]||i;return r?n.createElement(u,o(o({ref:e},d),{},{components:r})):n.createElement(u,o({ref:e},d))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=s;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p.mdxType="string"==typeof t?t:a,o[1]=p;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},985:function(t,e,r){r.r(e),r.d(e,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return g}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],p={custom_edit_url:null},l=void 0,c={unversionedId:"api/LoadingBarOptions",id:"api/LoadingBarOptions",title:"LoadingBarOptions",description:"Options for the LoadingBar",source:"@site/docs/api/LoadingBarOptions.mdx",sourceDirName:"api",slug:"/api/LoadingBarOptions",permalink:"/egjs-view3d/docs/api/LoadingBarOptions",editUrl:null,tags:[],version:"current",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"AROverlayOptions",permalink:"/egjs-view3d/docs/api/AROverlayOptions"},next:{title:"View3DPlugin",permalink:"/egjs-view3d/docs/api/View3DPlugin"}},d={},g=[],s={toc:g};function m(t){var e=t.components,r=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface LoadingBarOptions\n")),(0,i.kt)("div",{className:"bulma-tags"}),(0,i.kt)("p",null,"Options for the ",(0,i.kt)("a",{parentName:"p",href:"LoadingBar"},"LoadingBar")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,i.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,i.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,i.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,i.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"type"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"},'"default"'),(0,i.kt)("td",{parentName:"tr",align:"center"},"A type(style) of the loading bar.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"loadingLabel"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"},'"Loading 3D Model..."'),(0,i.kt)("td",{parentName:"tr",align:"center"},"A text to display while loading 3D model.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"parsingLabel"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"},'"Parsing 3D Model..."'),(0,i.kt)("td",{parentName:"tr",align:"center"},"A text to display while parsing the model after loading is done.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"labelColor"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"},'"#ffffff"'),(0,i.kt)("td",{parentName:"tr",align:"center"},"A text color in CSS string.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"barWidth"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"},'"70%"'),(0,i.kt)("td",{parentName:"tr",align:"center"},'Loading bar\'s width in CSS string. This is only applicable for type "default"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"barHeight"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"},'"10px"'),(0,i.kt)("td",{parentName:"tr",align:"center"},"Loading bar's height in CSS string.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"barBackground"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"},'"#bbbbbb"'),(0,i.kt)("td",{parentName:"tr",align:"center"},'Loading bar\'s background color in CSS string. This is not applicable to type "spinner"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"barForeground"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"},'"#3e8ed0"'),(0,i.kt)("td",{parentName:"tr",align:"center"},"Loading bar's foreground color in CSS string.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"spinnerWidth"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"},'"30%"'),(0,i.kt)("td",{parentName:"tr",align:"center"},'Spinner\'s width in CSS string. This is only applicable for type "spinner"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"overlayBackground"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"},'"rgba(0, 0, 0, 0.3)"'),(0,i.kt)("td",{parentName:"tr",align:"center"},'Overlay\'s background color in CSS string. This is not applicable to type "top"')))))}m.isMDXComponent=!0}}]);