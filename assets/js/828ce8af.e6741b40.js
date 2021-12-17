"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[14057],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return m}});var i=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,i,n=function(e,r){if(null==e)return{};var t,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=i.createContext({}),c=function(e){var r=i.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=c(e.components);return i.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},h=i.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),h=c(t),m=n,g=h["".concat(s,".").concat(m)]||h[m]||d[m]||a;return t?i.createElement(g,o(o({ref:r},l),{},{components:t})):i.createElement(g,o({ref:r},l))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,o=new Array(a);o[0]=h;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var c=2;c<a;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},55247:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return h}});var i=t(87462),n=t(63366),a=(t(67294),t(3905)),o=["components"],p={id:"rating-carrier",title:"RatingCarrier"},s=void 0,c={unversionedId:"rate-manager-service/objects/rating-carrier",id:"version-1.0.0/rate-manager-service/objects/rating-carrier",isDocsHomePage:!1,title:"RatingCarrier",description:"No description",source:"@site/versioned_docs/version-1.0.0/rate-manager-service/objects/rating-carrier.mdx",sourceDirName:"rate-manager-service/objects",slug:"/rate-manager-service/objects/rating-carrier",permalink:"/docs/rate-manager-service/objects/rating-carrier",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/versioned_docs/version-1.0.0/rate-manager-service/objects/rating-carrier.mdx",tags:[],version:"1.0.0",frontMatter:{id:"rating-carrier",title:"RatingCarrier"},sidebar:"version-1.0.0/rateManagerService",previous:{title:"RateBreakdown",permalink:"/docs/rate-manager-service/objects/rate-breakdown"},next:{title:"RMSAvailableOptions",permalink:"/docs/rate-manager-service/objects/rmsavailable-options"}},l=[{value:"Fields",id:"fields",children:[{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4},{value:"<code>carrierCode</code> (String)",id:"carriercode-string",children:[],level:4},{value:"<code>carrierTitle</code> (String)",id:"carriertitle-string",children:[],level:4},{value:"<code>carrierType</code> (String)",id:"carriertype-string",children:[],level:4},{value:"<code>error</code> (RMSError)",id:"error-rmserror",children:[],level:4},{value:"<code>shippingRates</code> (BasicShippingRate)",id:"shippingrates-basicshippingrate",children:[],level:4},{value:"<code>storedBasicShippingQuote</code> (StoredBasicShippingQuote)",id:"storedbasicshippingquote-storedbasicshippingquote",children:[],level:4},{value:"<code>basicShippingQuote</code> (BasicShippingQuote)",id:"basicshippingquote-basicshippingquote",children:[],level:4}],level:3},{value:"Interfaces",id:"interfaces",children:[{value:"Node",id:"node",children:[],level:4}],level:3}],d={toc:l};function h(e){var r=e.components,t=(0,n.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type RatingCarrier implements Node {\n  id: ID!\n  carrierCode: String!\n  carrierTitle: String!\n  carrierType: String!\n  error: RMSError\n  shippingRates(\n    where: BasicShippingRateWhereInput\n    orderBy: BasicShippingRateOrderByInput\n    skip: Int\n    after: String\n    before: String\n    first: Int\n    last: Int\n  ): [BasicShippingRate!]\n  storedBasicShippingQuote: StoredBasicShippingQuote\n  basicShippingQuote: BasicShippingQuote\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"id-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"carriercode-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"carrierCode")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"carriertitle-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"carrierTitle")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"carriertype-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"carrierType")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"error-rmserror"},(0,a.kt)("inlineCode",{parentName:"h4"},"error")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/objects/rmserror"},(0,a.kt)("inlineCode",{parentName:"a"},"RMSError")),")"),(0,a.kt)("h4",{id:"shippingrates-basicshippingrate"},(0,a.kt)("inlineCode",{parentName:"h4"},"shippingRates")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/objects/basic-shipping-rate"},(0,a.kt)("inlineCode",{parentName:"a"},"BasicShippingRate")),")"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"where-basicshippingratewhereinput"},(0,a.kt)("inlineCode",{parentName:"h5"},"where")," (",(0,a.kt)("a",{parentName:"h5",href:"../../rate-manager-service/inputs/basic-shipping-rate-where-input"},(0,a.kt)("inlineCode",{parentName:"a"},"BasicShippingRateWhereInput")),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"orderby-basicshippingrateorderbyinput"},(0,a.kt)("inlineCode",{parentName:"h5"},"orderBy")," (",(0,a.kt)("a",{parentName:"h5",href:"../../rate-manager-service/enums/basic-shipping-rate-order-by-input"},(0,a.kt)("inlineCode",{parentName:"a"},"BasicShippingRateOrderByInput")),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"skip-int"},(0,a.kt)("inlineCode",{parentName:"h5"},"skip")," (",(0,a.kt)("a",{parentName:"h5",href:"../../rate-manager-service/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"after-string"},(0,a.kt)("inlineCode",{parentName:"h5"},"after")," (",(0,a.kt)("a",{parentName:"h5",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"before-string"},(0,a.kt)("inlineCode",{parentName:"h5"},"before")," (",(0,a.kt)("a",{parentName:"h5",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"first-int"},(0,a.kt)("inlineCode",{parentName:"h5"},"first")," (",(0,a.kt)("a",{parentName:"h5",href:"../../rate-manager-service/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"last-int"},(0,a.kt)("inlineCode",{parentName:"h5"},"last")," (",(0,a.kt)("a",{parentName:"h5",href:"../../rate-manager-service/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,a.kt)("h4",{id:"storedbasicshippingquote-storedbasicshippingquote"},(0,a.kt)("inlineCode",{parentName:"h4"},"storedBasicShippingQuote")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/objects/stored-basic-shipping-quote"},(0,a.kt)("inlineCode",{parentName:"a"},"StoredBasicShippingQuote")),")"),(0,a.kt)("h4",{id:"basicshippingquote-basicshippingquote"},(0,a.kt)("inlineCode",{parentName:"h4"},"basicShippingQuote")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/objects/basic-shipping-quote"},(0,a.kt)("inlineCode",{parentName:"a"},"BasicShippingQuote")),")"),(0,a.kt)("h3",{id:"interfaces"},"Interfaces"),(0,a.kt)("h4",{id:"node"},(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/interfaces/node"},(0,a.kt)("inlineCode",{parentName:"a"},"Node"))),(0,a.kt)("p",null,"An object with an ID"))}h.isMDXComponent=!0}}]);