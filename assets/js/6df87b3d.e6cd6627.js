"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8510],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return s}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),l=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=l(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),m=l(n),s=a,k=m["".concat(c,".").concat(s)]||m[s]||u[s]||i;return n?r.createElement(k,o(o({ref:e},d),{},{components:n})):r.createElement(k,o({ref:e},d))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var c in e)hasOwnProperty.call(e,c)&&(p[c]=e[c]);p.originalType=t,p.mdxType="string"==typeof t?t:a,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},20:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return c},default:function(){return s},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],p={custom_edit_url:null},c=void 0,l={unversionedId:"api/QuickLookSessionOptions",id:"api/QuickLookSessionOptions",title:"QuickLookSessionOptions",description:"|PARAMETER|TYPE|OPTIONAL|DEFAULT|DESCRIPTION|",source:"@site/docs/api/QuickLookSessionOptions.mdx",sourceDirName:"api",slug:"/api/QuickLookSessionOptions",permalink:"/egjs-view3d/docs/api/QuickLookSessionOptions",editUrl:null,tags:[],version:"current",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"ARSession",permalink:"/egjs-view3d/docs/api/ARSession"},next:{title:"SceneViewerSessionOptions",permalink:"/egjs-view3d/docs/api/SceneViewerSessionOptions"}},d={},u=[],m={toc:u};function s(t){var e=t.components,n=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface QuickLookSessionOptions\n")),(0,i.kt)("div",{className:"bulma-tags"}),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,i.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,i.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,i.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,i.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"allowsContentScaling"),(0,i.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"},"true"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Whether to allow content scaling.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"canonicalWebPageURL"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string ","|"," null"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"The web URL to share when the user invokes the share sheet. If ",(0,i.kt)("inlineCode",{parentName:"td"},"null")," is given, the USDZ file will be shared.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"applePayButtonType"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string ","|"," null"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"Type of the apple pay button in the banner. See ",(0,i.kt)("a",{parentName:"td",href:"QUICK_LOOK_APPLE_PAY_BUTTON_TYPE"},"QUICK_LOOK_APPLE_PAY_BUTTON_TYPE"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"callToAction"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string ","|"," null"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"A text that will be displayed instead of Apple Pay Button. See ",(0,i.kt)("a",{parentName:"td",href:"https://developer#apple#com/documentation/arkit/adding_an_apple_pay_button_or_a_custom_action_in_ar_quick_look#3405143"},"Official Guide Page"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"checkoutTitle"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string ","|"," null"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"Title of the previewed item. See ",(0,i.kt)("a",{parentName:"td",href:"https://developer#apple#com/documentation/arkit/adding_an_apple_pay_button_or_a_custom_action_in_ar_quick_look#3405142"},"Official Guide Page"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"checkoutSubtitle"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string ","|"," null"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"Subtitle of the previewed item. See ",(0,i.kt)("a",{parentName:"td",href:"https://developer#apple#com/documentation/arkit/adding_an_apple_pay_button_or_a_custom_action_in_ar_quick_look#3405142"},"Official Guide Page"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"price"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string ","|"," null"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"Price of the previewed item. See ",(0,i.kt)("a",{parentName:"td",href:"https://developer#apple#com/documentation/arkit/adding_an_apple_pay_button_or_a_custom_action_in_ar_quick_look#3405142"},"Official Guide Page"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"custom"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string ","|"," null"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"Custom URL to the banner HTML. See ",(0,i.kt)("a",{parentName:"td",href:"https://developer#apple#com/documentation/arkit/adding_an_apple_pay_button_or_a_custom_action_in_ar_quick_look#3402837"},"Official Guide Page"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"customHeight"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string ","|"," null"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"Height of the custom banner. See ",(0,i.kt)("a",{parentName:"td",href:"QUICK_LOOK_CUSTOM_BANNER_SIZE"},"QUICK_LOOK_CUSTOM_BANNER_SIZE"))))))}s.isMDXComponent=!0}}]);