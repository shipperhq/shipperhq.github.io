"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[63681],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return f}});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(t),f=i,v=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return t?n.createElement(v,o(o({ref:r},l),{},{components:t})):n.createElement(v,o({ref:r},l))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var p=2;p<a;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},35786:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var n=t(87462),i=t(63366),a=(t(67294),t(3905)),o=["components"],c={id:"basic-shipping-quote",title:"BasicShippingQuote"},s=void 0,p={unversionedId:"rate-service/objects/basic-shipping-quote",id:"version-1.0.0/rate-service/objects/basic-shipping-quote",isDocsHomePage:!1,title:"BasicShippingQuote",description:"No description",source:"@site/versioned_docs/version-1.0.0/rate-service/objects/basic-shipping-quote.mdx",sourceDirName:"rate-service/objects",slug:"/rate-service/objects/basic-shipping-quote",permalink:"/docs/rate-service/objects/basic-shipping-quote",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/versioned_docs/version-1.0.0/rate-service/objects/basic-shipping-quote.mdx",tags:[],version:"1.0.0",frontMatter:{id:"basic-shipping-quote",title:"BasicShippingQuote"},sidebar:"version-1.0.0/rateService",previous:{title:"AvailableOption",permalink:"/docs/rate-service/objects/available-option"},next:{title:"BasicShippingRate",permalink:"/docs/rate-service/objects/basic-shipping-rate"}},l=[{value:"Fields",id:"fields",children:[{value:"<code>carriers</code> (RatingCarrier)",id:"carriers-ratingcarrier",children:[],level:4},{value:"<code>errors</code> (Error)",id:"errors-error",children:[],level:4},{value:"<code>transactionId</code> (String)",id:"transactionid-string",children:[],level:4}],level:3}],u={toc:l};function d(e){var r=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type BasicShippingQuote {\n  carriers: [RatingCarrier!]\n  errors: [Error!]\n  transactionId: String!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"carriers-ratingcarrier"},(0,a.kt)("inlineCode",{parentName:"h4"},"carriers")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-service/objects/rating-carrier"},(0,a.kt)("inlineCode",{parentName:"a"},"RatingCarrier")),")"),(0,a.kt)("h4",{id:"errors-error"},(0,a.kt)("inlineCode",{parentName:"h4"},"errors")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-service/objects/error"},(0,a.kt)("inlineCode",{parentName:"a"},"Error")),")"),(0,a.kt)("h4",{id:"transactionid-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"transactionId")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"))}d.isMDXComponent=!0}}]);