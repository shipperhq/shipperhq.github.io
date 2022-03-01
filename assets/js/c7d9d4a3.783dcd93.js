"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[4948],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return g}});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=p(t),g=i,h=u["".concat(s,".").concat(g)]||u[g]||d[g]||a;return t?n.createElement(h,c(c({ref:r},l),{},{components:t})):n.createElement(h,c({ref:r},l))}));function g(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,c=new Array(a);c[0]=u;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var p=2;p<a;p++)c[p]=t[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6512:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return u}});var n=t(7462),i=t(3366),a=(t(7294),t(3905)),c=["components"],o={id:"rating-carrier",title:"RatingCarrier"},s=void 0,p={unversionedId:"rate-service/objects/rating-carrier",id:"rate-service/objects/rating-carrier",isDocsHomePage:!1,title:"RatingCarrier",description:"No description",source:"@site/docs/rate-service/objects/rating-carrier.mdx",sourceDirName:"rate-service/objects",slug:"/rate-service/objects/rating-carrier",permalink:"/docs/rate-service/objects/rating-carrier",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/docs/rate-service/objects/rating-carrier.mdx",tags:[],version:"current",frontMatter:{id:"rating-carrier",title:"RatingCarrier"},sidebar:"rateService",previous:{title:"RateBreakdown",permalink:"/docs/rate-service/objects/rate-breakdown"},next:{title:"ShipmentDetail",permalink:"/docs/rate-service/objects/shipment-detail"}},l=[{value:"Fields",id:"fields",children:[{value:"<code>carrierCode</code> (String)",id:"carriercode-string",children:[],level:4},{value:"<code>carrierTitle</code> (String)",id:"carriertitle-string",children:[],level:4},{value:"<code>carrierType</code> (String)",id:"carriertype-string",children:[],level:4},{value:"<code>error</code> (Error)",id:"error-error",children:[],level:4},{value:"<code>shippingRates</code> (BasicShippingRate)",id:"shippingrates-basicshippingrate",children:[],level:4}],level:3}],d={toc:l};function u(e){var r=e.components,t=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type RatingCarrier {\n  carrierCode: String!\n  carrierTitle: String!\n  carrierType: String!\n  error: Error\n  shippingRates: [BasicShippingRate!]\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"carriercode-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"carrierCode")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"carriertitle-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"carrierTitle")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"carriertype-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"carrierType")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"error-error"},(0,a.kt)("inlineCode",{parentName:"h4"},"error")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-service/objects/error"},(0,a.kt)("inlineCode",{parentName:"a"},"Error")),")"),(0,a.kt)("h4",{id:"shippingrates-basicshippingrate"},(0,a.kt)("inlineCode",{parentName:"h4"},"shippingRates")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-service/objects/basic-shipping-rate"},(0,a.kt)("inlineCode",{parentName:"a"},"BasicShippingRate")),")"))}u.isMDXComponent=!0}}]);