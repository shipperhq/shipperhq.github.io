"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[59773],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return u}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),h=c(r),u=n,v=h["".concat(l,".").concat(u)]||h[u]||p[u]||i;return r?a.createElement(v,o(o({ref:t},s),{},{components:r})):a.createElement(v,o({ref:t},s))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=h;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:n,o[1]=d;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},87550:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return h}});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),o=["components"],d={id:"advanced-fees",title:"AdvancedFees"},l=void 0,c={unversionedId:"order-view-service/objects/advanced-fees",id:"order-view-service/objects/advanced-fees",isDocsHomePage:!1,title:"AdvancedFees",description:"No description",source:"@site/docs/order-view-service/objects/advanced-fees.mdx",sourceDirName:"order-view-service/objects",slug:"/order-view-service/objects/advanced-fees",permalink:"/docs/next/order-view-service/objects/advanced-fees",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/docs/order-view-service/objects/advanced-fees.mdx",tags:[],version:"current",frontMatter:{id:"advanced-fees",title:"AdvancedFees"},sidebar:"orderViewSidebar",previous:{title:"Address",permalink:"/docs/next/order-view-service/objects/address"},next:{title:"AuthorizationToken",permalink:"/docs/next/order-view-service/objects/authorization-token"}},s=[{value:"Fields",id:"fields",children:[{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4},{value:"<code>createdAt</code> (DateTime)",id:"createdat-datetime",children:[],level:4},{value:"<code>updatedAt</code> (DateTime)",id:"updatedat-datetime",children:[],level:4},{value:"<code>handlingFee</code> (Float)",id:"handlingfee-float",children:[],level:4},{value:"<code>shippingPrice</code> (Float)",id:"shippingprice-float",children:[],level:4},{value:"<code>totalCharges</code> (Float)",id:"totalcharges-float",children:[],level:4},{value:"<code>cost</code> (Float)",id:"cost-float",children:[],level:4},{value:"<code>customDuties</code> (Float)",id:"customduties-float",children:[],level:4},{value:"<code>flatRulesApplied</code> (String)",id:"flatrulesapplied-string",children:[],level:4},{value:"<code>changeRulesApplied</code> (String)",id:"changerulesapplied-string",children:[],level:4},{value:"<code>method</code> (Method)",id:"method-method",children:[],level:4},{value:"<code>rateBreakdown</code> (RateBreakdown)",id:"ratebreakdown-ratebreakdown",children:[],level:4}],level:3},{value:"Interfaces",id:"interfaces",children:[{value:"Node",id:"node",children:[],level:4}],level:3}],p={toc:s};function h(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type AdvancedFees implements Node {\n  id: ID!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  handlingFee: Float!\n  shippingPrice: Float!\n  totalCharges: Float!\n  cost: Float\n  customDuties: Float\n  flatRulesApplied: [String!]!\n  changeRulesApplied: [String!]!\n  method: Method\n  rateBreakdown: RateBreakdown\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"id-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"createdat-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,i.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,i.kt)("h4",{id:"updatedat-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,i.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,i.kt)("h4",{id:"handlingfee-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"handlingFee")," (",(0,i.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("h4",{id:"shippingprice-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"shippingPrice")," (",(0,i.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("h4",{id:"totalcharges-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"totalCharges")," (",(0,i.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("h4",{id:"cost-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"cost")," (",(0,i.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("h4",{id:"customduties-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"customDuties")," (",(0,i.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("h4",{id:"flatrulesapplied-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"flatRulesApplied")," (",(0,i.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"changerulesapplied-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"changeRulesApplied")," (",(0,i.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"method-method"},(0,i.kt)("inlineCode",{parentName:"h4"},"method")," (",(0,i.kt)("a",{parentName:"h4",href:"../../order-view-service/objects/method"},(0,i.kt)("inlineCode",{parentName:"a"},"Method")),")"),(0,i.kt)("h4",{id:"ratebreakdown-ratebreakdown"},(0,i.kt)("inlineCode",{parentName:"h4"},"rateBreakdown")," (",(0,i.kt)("a",{parentName:"h4",href:"../../order-view-service/objects/rate-breakdown"},(0,i.kt)("inlineCode",{parentName:"a"},"RateBreakdown")),")"),(0,i.kt)("h3",{id:"interfaces"},"Interfaces"),(0,i.kt)("h4",{id:"node"},(0,i.kt)("a",{parentName:"h4",href:"../../order-view-service/interfaces/node"},(0,i.kt)("inlineCode",{parentName:"a"},"Node"))),(0,i.kt)("p",null,"An object with an ID"))}h.isMDXComponent=!0}}]);