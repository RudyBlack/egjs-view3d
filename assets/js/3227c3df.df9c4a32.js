"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9828],{3905:function(t,e,r){r.d(e,{Zo:function(){return c},kt:function(){return m}});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var s=a.createContext({}),p=function(t){var e=a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},c=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,s=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),u=p(r),m=n,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return r?a.createElement(k,o(o({ref:e},c),{},{components:r})):a.createElement(k,o({ref:e},c))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:n,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},641:function(t,e,r){r.r(e),r.d(e,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var a=r(7462),n=r(3366),l=(r(7294),r(3905)),o=["components"],i={custom_edit_url:null},s=void 0,p={unversionedId:"api/OrbitControl",id:"api/OrbitControl",title:"OrbitControl",description:"Aggregation of RotateControl, TranslateControl, and ZoomControl.",source:"@site/docs/api/OrbitControl.mdx",sourceDirName:"api",slug:"/api/OrbitControl",permalink:"/egjs-view3d/docs/api/OrbitControl",editUrl:null,tags:[],version:"current",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"AnimationControl",permalink:"/egjs-view3d/docs/api/AnimationControl"},next:{title:"RotateControl",permalink:"/egjs-view3d/docs/api/RotateControl"}},c={},d=[{value:"Constructor",id:"constructor",level:2},{value:"Properties",id:"properties",level:2},{value:"rotate",id:"rotate",level:3},{value:"translate",id:"translate",level:3},{value:"zoom",id:"zoom",level:3},{value:"Methods",id:"methods",level:2},{value:"destroy",id:"destroy",level:3},{value:"update",id:"update",level:3},{value:"resize",id:"resize",level:3},{value:"enable",id:"enable",level:3},{value:"disable",id:"disable",level:3},{value:"sync",id:"sync",level:3},{value:"updateCursor",id:"updateCursor",level:3}],u={toc:d};function m(t){var e=t.components,r=(0,n.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"class OrbitControl\n")),(0,l.kt)("p",null,"Aggregation of ",(0,l.kt)("a",{parentName:"p",href:"RotateControl"},"RotateControl"),", ",(0,l.kt)("a",{parentName:"p",href:"TranslateControl"},"TranslateControl"),", and ",(0,l.kt)("a",{parentName:"p",href:"ZoomControl"},"ZoomControl"),"."),(0,l.kt)("div",{className:"container"},(0,l.kt)("div",{className:"row mb-2"},(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("strong",null,"Properties")),(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("strong",null,"Methods"))),(0,l.kt)("div",{className:"row"},(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("a",{href:"#rotate"},"rotate"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#translate"},"translate"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#zoom"},"zoom")),(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("a",{href:"#destroy"},"destroy"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#update"},"update"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#resize"},"resize"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#enable"},"enable"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#disable"},"disable"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#sync"},"sync"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#updateCursor"},"updateCursor")))),(0,l.kt)("h2",{id:"constructor"},"Constructor"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"new OrbitControl(view3D)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"view3D"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"View3D"},"View3D")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"An instance of View3D")))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"rotate"},"rotate"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"RotateControl"},"RotateControl")," of this control"),(0,l.kt)("h3",{id:"translate"},"translate"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"TranslateControl"},"TranslateControl")," of this control"),(0,l.kt)("h3",{id:"zoom"},"zoom"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"ZoomControl"},"ZoomControl")," of this control"),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"destroy"},"destroy"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"Destroy the instance and remove all event listeners attached",(0,l.kt)("br",null),"This also will reset CSS cursor to intial"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": void"),(0,l.kt)("h3",{id:"update"},"update"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"Update control by given deltaTime"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": void"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"deltaTime"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Number of milisec to update")))),(0,l.kt)("h3",{id:"resize"},"resize"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"Resize control to match target size"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": void"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"size"),(0,l.kt)("td",{parentName:"tr",align:"center"},"object"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"New size to apply")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"size.width"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"New width")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"size.height"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"New height")))),(0,l.kt)("h3",{id:"enable"},"enable"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"Enable this control and add event listeners"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": void"),(0,l.kt)("h3",{id:"disable"},"disable"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"Disable this control and remove all event handlers"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": void"),(0,l.kt)("h3",{id:"sync"},"sync"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"Synchronize this control's state to current camera position"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": void"),(0,l.kt)("h3",{id:"updateCursor"},"updateCursor"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"Update cursor to current option"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": void"))}m.isMDXComponent=!0}}]);