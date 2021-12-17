"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[58487],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return h}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=c(a),h=n,u=m["".concat(l,".").concat(h)]||m[h]||p[h]||i;return a?r.createElement(u,o(o({ref:t},s),{},{components:a})):r.createElement(u,o({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:n,o[1]=d;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},12440:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),o=["components"],d={id:"advanced-fees",title:"AdvancedFees"},l=void 0,c={unversionedId:"rate-manager-service/objects/advanced-fees",id:"rate-manager-service/objects/advanced-fees",isDocsHomePage:!1,title:"AdvancedFees",description:"No description",source:"@site/docs/rate-manager-service/objects/advanced-fees.mdx",sourceDirName:"rate-manager-service/objects",slug:"/rate-manager-service/objects/advanced-fees",permalink:"/docs/next/rate-manager-service/objects/advanced-fees",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/docs/rate-manager-service/objects/advanced-fees.mdx",tags:[],version:"current",frontMatter:{id:"advanced-fees",title:"AdvancedFees"},sidebar:"rateManagerService",previous:{title:"Address",permalink:"/docs/next/rate-manager-service/objects/address"},next:{title:"AuthorizationToken",permalink:"/docs/next/rate-manager-service/objects/authorization-token"}},s=[{value:"Fields",id:"fields",children:[{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4},{value:"<code>createdAt</code> (DateTime)",id:"createdat-datetime",children:[],level:4},{value:"<code>updatedAt</code> (DateTime)",id:"updatedat-datetime",children:[],level:4},{value:"<code>handlingFee</code> (Float)",id:"handlingfee-float",children:[],level:4},{value:"<code>shippingPrice</code> (Float)",id:"shippingprice-float",children:[],level:4},{value:"<code>totalCharges</code> (Float)",id:"totalcharges-float",children:[],level:4},{value:"<code>cost</code> (Float)",id:"cost-float",children:[],level:4},{value:"<code>customDuties</code> (Float)",id:"customduties-float",children:[],level:4},{value:"<code>flatRulesApplied</code> (String)",id:"flatrulesapplied-string",children:[],level:4},{value:"<code>changeRulesApplied</code> (String)",id:"changerulesapplied-string",children:[],level:4},{value:"<code>method</code> (Method)",id:"method-method",children:[],level:4},{value:"<code>rateBreakdown</code> (RateBreakdown)",id:"ratebreakdown-ratebreakdown",children:[],level:4}],level:3},{value:"Interfaces",id:"interfaces",children:[{value:"Node",id:"node",children:[],level:4}],level:3}],p={toc:s};function m(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type AdvancedFees implements Node {\n  id: ID!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  handlingFee: Float!\n  shippingPrice: Float!\n  totalCharges: Float!\n  cost: Float\n  customDuties: Float\n  flatRulesApplied: [String!]!\n  changeRulesApplied: [String!]!\n  method: Method\n  rateBreakdown: RateBreakdown\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"id-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"createdat-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,i.kt)("h4",{id:"updatedat-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,i.kt)("h4",{id:"handlingfee-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"handlingFee")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("h4",{id:"shippingprice-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"shippingPrice")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("h4",{id:"totalcharges-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"totalCharges")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("h4",{id:"cost-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"cost")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("h4",{id:"customduties-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"customDuties")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("h4",{id:"flatrulesapplied-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"flatRulesApplied")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"changerulesapplied-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"changeRulesApplied")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"method-method"},(0,i.kt)("inlineCode",{parentName:"h4"},"method")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/objects/method"},(0,i.kt)("inlineCode",{parentName:"a"},"Method")),")"),(0,i.kt)("h4",{id:"ratebreakdown-ratebreakdown"},(0,i.kt)("inlineCode",{parentName:"h4"},"rateBreakdown")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/objects/rate-breakdown"},(0,i.kt)("inlineCode",{parentName:"a"},"RateBreakdown")),")"),(0,i.kt)("h3",{id:"interfaces"},"Interfaces"),(0,i.kt)("h4",{id:"node"},(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/interfaces/node"},(0,i.kt)("inlineCode",{parentName:"a"},"Node"))),(0,i.kt)("p",null,"An object with an ID"))}m.isMDXComponent=!0}}]);