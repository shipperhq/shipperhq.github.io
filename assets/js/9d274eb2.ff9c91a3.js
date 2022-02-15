"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[13876],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return m}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return t?n.createElement(g,o(o({ref:r},s),{},{components:t})):n.createElement(g,o({ref:r},s))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},61279:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var n=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],c={id:"print-label",title:"printLabel"},l=void 0,p={unversionedId:"rate-manager-service/mutations/print-label",id:"version-1.0.0/rate-manager-service/mutations/print-label",isDocsHomePage:!1,title:"printLabel",description:"No description",source:"@site/versioned_docs/version-1.0.0/rate-manager-service/mutations/print-label.mdx",sourceDirName:"rate-manager-service/mutations",slug:"/rate-manager-service/mutations/print-label",permalink:"/docs/1.0.0/rate-manager-service/mutations/print-label",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/versioned_docs/version-1.0.0/rate-manager-service/mutations/print-label.mdx",tags:[],version:"1.0.0",frontMatter:{id:"print-label",title:"printLabel"},sidebar:"version-1.0.0/rateManagerService",previous:{title:"placeOrder",permalink:"/docs/1.0.0/rate-manager-service/mutations/place-order"},next:{title:"resetShippingChosen",permalink:"/docs/1.0.0/rate-manager-service/mutations/reset-shipping-chosen"}},s=[{value:"Arguments",id:"arguments",children:[{value:"<code>orderNumber</code> (String)",id:"ordernumber-string",children:[],level:4},{value:"<code>packageId</code> (String)",id:"packageid-string",children:[],level:4},{value:"<code>printer</code> (Int)",id:"printer-int",children:[],level:4}],level:3},{value:"Type",id:"type",children:[{value:"Int",id:"int",children:[],level:4}],level:3}],u={toc:s};function d(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"printLabel(\n  orderNumber: String!\n  packageId: String!\n  printer: Int!\n): Int!\n\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"ordernumber-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"orderNumber")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"packageid-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"packageId")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"printer-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"printer")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"int"},(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Int")," scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1."))}d.isMDXComponent=!0}}]);