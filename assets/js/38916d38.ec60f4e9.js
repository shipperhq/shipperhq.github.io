"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[62258],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return h}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),c=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(r),h=n,g=m["".concat(d,".").concat(h)]||m[h]||p[h]||i;return r?a.createElement(g,o(o({ref:t},s),{},{components:r})):a.createElement(g,o({ref:t},s))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},25925:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),o=["components"],l={id:"rmsshipping-rate",title:"RMSShippingRate"},d=void 0,c={unversionedId:"rate-manager-service/objects/rmsshipping-rate",id:"version-1.0.0/rate-manager-service/objects/rmsshipping-rate",isDocsHomePage:!1,title:"RMSShippingRate",description:"No description",source:"@site/versioned_docs/version-1.0.0/rate-manager-service/objects/rmsshipping-rate.mdx",sourceDirName:"rate-manager-service/objects",slug:"/rate-manager-service/objects/rmsshipping-rate",permalink:"/docs/1.0.0/rate-manager-service/objects/rmsshipping-rate",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/versioned_docs/version-1.0.0/rate-manager-service/objects/rmsshipping-rate.mdx",tags:[],version:"1.0.0",frontMatter:{id:"rmsshipping-rate",title:"RMSShippingRate"},sidebar:"version-1.0.0/rateManagerService",previous:{title:"RMSShippingQuote",permalink:"/docs/1.0.0/rate-manager-service/objects/rmsshipping-quote"},next:{title:"RMSTimeSlot",permalink:"/docs/1.0.0/rate-manager-service/objects/rmstime-slot"}},s=[{value:"Fields",id:"fields",children:[{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4},{value:"<code>createdAt</code> (DateTime)",id:"createdat-datetime",children:[],level:4},{value:"<code>updatedAt</code> (DateTime)",id:"updatedat-datetime",children:[],level:4},{value:"<code>code</code> (String)",id:"code-string",children:[],level:4},{value:"<code>title</code> (String)",id:"title-string",children:[],level:4},{value:"<code>totalCharges</code> (Float)",id:"totalcharges-float",children:[],level:4},{value:"<code>handlingFee</code> (Float)",id:"handlingfee-float",children:[],level:4},{value:"<code>shippingPrice</code> (Float)",id:"shippingprice-float",children:[],level:4},{value:"<code>deliveryDate</code> (String)",id:"deliverydate-string",children:[],level:4},{value:"<code>dispatchDate</code> (String)",id:"dispatchdate-string",children:[],level:4},{value:"<code>deliveryMessage</code> (String)",id:"deliverymessage-string",children:[],level:4},{value:"<code>description</code> (String)",id:"description-string",children:[],level:4},{value:"<code>rMSCarrier</code> (RMSCarrier)",id:"rmscarrier-rmscarrier",children:[],level:4}],level:3},{value:"Interfaces",id:"interfaces",children:[{value:"Node",id:"node",children:[],level:4}],level:3}],p={toc:s};function m(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type RMSShippingRate implements Node {\n  id: ID!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  code: String!\n  title: String!\n  totalCharges: Float!\n  handlingFee: Float\n  shippingPrice: Float\n  deliveryDate: String\n  dispatchDate: String\n  deliveryMessage: String\n  description: String\n  rMSCarrier: RMSCarrier\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"id-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"createdat-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,i.kt)("h4",{id:"updatedat-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,i.kt)("h4",{id:"code-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"code")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"title-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"title")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"totalcharges-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"totalCharges")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("h4",{id:"handlingfee-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"handlingFee")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("h4",{id:"shippingprice-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"shippingPrice")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("h4",{id:"deliverydate-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"deliveryDate")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"dispatchdate-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"dispatchDate")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"deliverymessage-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"deliveryMessage")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"description-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"rmscarrier-rmscarrier"},(0,i.kt)("inlineCode",{parentName:"h4"},"rMSCarrier")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/objects/rmscarrier"},(0,i.kt)("inlineCode",{parentName:"a"},"RMSCarrier")),")"),(0,i.kt)("h3",{id:"interfaces"},"Interfaces"),(0,i.kt)("h4",{id:"node"},(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/interfaces/node"},(0,i.kt)("inlineCode",{parentName:"a"},"Node"))),(0,i.kt)("p",null,"An object with an ID"))}m.isMDXComponent=!0}}]);