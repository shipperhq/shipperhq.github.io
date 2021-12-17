"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[2335],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return u}});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=a.createContext({}),l=function(e){var r=a.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=l(e.components);return a.createElement(o.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=l(t),u=n,h=m["".concat(o,".").concat(u)]||m[u]||p[u]||i;return t?a.createElement(h,c(c({ref:r},s),{},{components:t})):a.createElement(h,c({ref:r},s))}));function u(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,c=new Array(i);c[0]=m;var d={};for(var o in r)hasOwnProperty.call(r,o)&&(d[o]=r[o]);d.originalType=e,d.mdxType="string"==typeof e?e:n,c[1]=d;for(var l=2;l<i;l++)c[l]=t[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},81721:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return d},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return m}});var a=t(87462),n=t(63366),i=(t(67294),t(3905)),c=["components"],d={id:"carrier-detail",title:"CarrierDetail"},o=void 0,l={unversionedId:"rate-manager-service/objects/carrier-detail",id:"version-1.0.0/rate-manager-service/objects/carrier-detail",isDocsHomePage:!1,title:"CarrierDetail",description:"No description",source:"@site/versioned_docs/version-1.0.0/rate-manager-service/objects/carrier-detail.mdx",sourceDirName:"rate-manager-service/objects",slug:"/rate-manager-service/objects/carrier-detail",permalink:"/docs/rate-manager-service/objects/carrier-detail",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/versioned_docs/version-1.0.0/rate-manager-service/objects/carrier-detail.mdx",tags:[],version:"1.0.0",frontMatter:{id:"carrier-detail",title:"CarrierDetail"},sidebar:"version-1.0.0/rateManagerService",previous:{title:"CalendarDate",permalink:"/docs/rate-manager-service/objects/calendar-date"},next:{title:"CarrierQuote",permalink:"/docs/rate-manager-service/objects/carrier-quote"}},s=[{value:"Fields",id:"fields",children:[{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4},{value:"<code>createdAt</code> (DateTime)",id:"createdat-datetime",children:[],level:4},{value:"<code>updatedAt</code> (DateTime)",id:"updatedat-datetime",children:[],level:4},{value:"<code>carrierCode</code> (String)",id:"carriercode-string",children:[],level:4},{value:"<code>carrierTitle</code> (String)",id:"carriertitle-string",children:[],level:4},{value:"<code>carrierType</code> (String)",id:"carriertype-string",children:[],level:4},{value:"<code>deliveryDateMessage</code> (String)",id:"deliverydatemessage-string",children:[],level:4},{value:"<code>carrier</code> (Carrier)",id:"carrier-carrier",children:[],level:4},{value:"<code>rateBreakdown</code> (RateBreakdown)",id:"ratebreakdown-ratebreakdown",children:[],level:4},{value:"<code>customDescription</code> (String)",id:"customdescription-string",children:[],level:4},{value:"<code>displayTab</code> (String)",id:"displaytab-string",children:[],level:4}],level:3},{value:"Interfaces",id:"interfaces",children:[{value:"Node",id:"node",children:[],level:4}],level:3}],p={toc:s};function m(e){var r=e.components,t=(0,n.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type CarrierDetail implements Node {\n  id: ID!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  carrierCode: String!\n  carrierTitle: String!\n  carrierType: String!\n  deliveryDateMessage: String\n  carrier: Carrier\n  rateBreakdown: RateBreakdown\n  customDescription: String\n  displayTab: String\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"id-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"createdat-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,i.kt)("h4",{id:"updatedat-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,i.kt)("h4",{id:"carriercode-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"carrierCode")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"carriertitle-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"carrierTitle")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"carriertype-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"carrierType")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"deliverydatemessage-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"deliveryDateMessage")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"carrier-carrier"},(0,i.kt)("inlineCode",{parentName:"h4"},"carrier")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/objects/carrier"},(0,i.kt)("inlineCode",{parentName:"a"},"Carrier")),")"),(0,i.kt)("h4",{id:"ratebreakdown-ratebreakdown"},(0,i.kt)("inlineCode",{parentName:"h4"},"rateBreakdown")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/objects/rate-breakdown"},(0,i.kt)("inlineCode",{parentName:"a"},"RateBreakdown")),")"),(0,i.kt)("h4",{id:"customdescription-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"customDescription")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"displaytab-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"displayTab")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h3",{id:"interfaces"},"Interfaces"),(0,i.kt)("h4",{id:"node"},(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/interfaces/node"},(0,i.kt)("inlineCode",{parentName:"a"},"Node"))),(0,i.kt)("p",null,"An object with an ID"))}m.isMDXComponent=!0}}]);