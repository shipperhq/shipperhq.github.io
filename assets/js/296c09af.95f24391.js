"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[40071],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return d}});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=n.createContext({}),p=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(u.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),g=p(t),d=i,m=g["".concat(u,".").concat(d)]||g[d]||l[d]||a;return t?n.createElement(m,o(o({ref:r},s),{},{components:t})):n.createElement(m,o({ref:r},s))}));function d(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=g;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var p=2;p<a;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},7442:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return g}});var n=t(87462),i=t(63366),a=(t(67294),t(3905)),o=["components"],c={id:"retrieve-tracking-info",title:"retrieveTrackingInfo"},u=void 0,p={unversionedId:"rate-manager-service/queries/retrieve-tracking-info",id:"rate-manager-service/queries/retrieve-tracking-info",isDocsHomePage:!1,title:"retrieveTrackingInfo",description:"No description",source:"@site/docs/rate-manager-service/queries/retrieve-tracking-info.mdx",sourceDirName:"rate-manager-service/queries",slug:"/rate-manager-service/queries/retrieve-tracking-info",permalink:"/docs/rate-manager-service/queries/retrieve-tracking-info",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/docs/rate-manager-service/queries/retrieve-tracking-info.mdx",tags:[],version:"current",frontMatter:{id:"retrieve-tracking-info",title:"retrieveTrackingInfo"},sidebar:"rateManagerService",previous:{title:"retrieveShippingQuote",permalink:"/docs/rate-manager-service/queries/retrieve-shipping-quote"},next:{title:"retrieveUserSettings",permalink:"/docs/rate-manager-service/queries/retrieve-user-settings"}},s=[{value:"Arguments",id:"arguments",children:[{value:"<code>orderNumber</code> (String)",id:"ordernumber-string",children:[],level:4},{value:"<code>packageId</code> (String)",id:"packageid-string",children:[],level:4}],level:3},{value:"Type",id:"type",children:[{value:"TrackingOutput",id:"trackingoutput",children:[],level:4}],level:3}],l={toc:s};function g(e){var r=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"retrieveTrackingInfo(\n  orderNumber: String!\n  packageId: String!\n): TrackingOutput!\n\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"ordernumber-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"orderNumber")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"packageid-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"packageId")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"trackingoutput"},(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/objects/tracking-output"},(0,a.kt)("inlineCode",{parentName:"a"},"TrackingOutput"))))}g.isMDXComponent=!0}}]);