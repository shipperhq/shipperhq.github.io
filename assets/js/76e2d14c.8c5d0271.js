"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[95065],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return d}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return t?n.createElement(f,o(o({ref:r},p),{},{components:t})):n.createElement(f,o({ref:r},p))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},38993:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var n=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],c={id:"rmscart",title:"RMSCart"},l=void 0,s={unversionedId:"rate-manager-service/inputs/rmscart",id:"version-1.0.0/rate-manager-service/inputs/rmscart",isDocsHomePage:!1,title:"RMSCart",description:"Cart Details",source:"@site/versioned_docs/version-1.0.0/rate-manager-service/inputs/rmscart.mdx",sourceDirName:"rate-manager-service/inputs",slug:"/rate-manager-service/inputs/rmscart",permalink:"/docs/1.0.0/rate-manager-service/inputs/rmscart",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/versioned_docs/version-1.0.0/rate-manager-service/inputs/rmscart.mdx",tags:[],version:"1.0.0",frontMatter:{id:"rmscart",title:"RMSCart"},sidebar:"version-1.0.0/rateManagerService",previous:{title:"RMSCarrierWhereInput",permalink:"/docs/1.0.0/rate-manager-service/inputs/rmscarrier-where-input"},next:{title:"RMSChosenShippingRatesInput",permalink:"/docs/1.0.0/rate-manager-service/inputs/rmschosen-shipping-rates-input"}},p=[{value:"Fields",id:"fields",children:[{value:"<code>items</code> (RMSItem)",id:"items-rmsitem",children:[],level:4},{value:"<code>declaredValue</code> (Float)",id:"declaredvalue-float",children:[],level:4},{value:"<code>freeShipping</code> (Boolean)",id:"freeshipping-boolean",children:[],level:4}],level:3}],u={toc:p};function m(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Cart Details"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type RMSCart {\n  items: [RMSItem!]!\n  declaredValue: Float\n  freeShipping: Boolean\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"items-rmsitem"},(0,i.kt)("inlineCode",{parentName:"h4"},"items")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/inputs/rmsitem"},(0,i.kt)("inlineCode",{parentName:"a"},"RMSItem")),")"),(0,i.kt)("p",null,"List of items in the cart"),(0,i.kt)("h4",{id:"declaredvalue-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"declaredValue")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("p",null,"Total value of the cart"),(0,i.kt)("h4",{id:"freeshipping-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"freeShipping")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("p",null,"Does the cart receive free shipping?"))}m.isMDXComponent=!0}}]);