"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[11037],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return v}});var i=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,i,a=function(e,r){if(null==e)return{};var t,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)t=n[i],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)t=n[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=i.createContext({}),l=function(e){var r=i.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=l(e.components);return i.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},u=i.forwardRef((function(e,r){var t=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=l(t),v=a,m=u["".concat(c,".").concat(v)]||u[v]||p[v]||n;return t?i.createElement(m,o(o({ref:r},s),{},{components:t})):i.createElement(m,o({ref:r},s))}));function v(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=t.length,o=new Array(n);o[0]=u;var d={};for(var c in r)hasOwnProperty.call(r,c)&&(d[c]=r[c]);d.originalType=e,d.mdxType="string"==typeof e?e:a,o[1]=d;for(var l=2;l<n;l++)o[l]=t[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},93070:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return d},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var i=t(87462),a=t(63366),n=(t(67294),t(3905)),o=["components"],d={id:"carrier-detail",title:"CarrierDetail"},c=void 0,l={unversionedId:"order-view-service/objects/carrier-detail",id:"order-view-service/objects/carrier-detail",isDocsHomePage:!1,title:"CarrierDetail",description:"No description",source:"@site/docs/order-view-service/objects/carrier-detail.mdx",sourceDirName:"order-view-service/objects",slug:"/order-view-service/objects/carrier-detail",permalink:"/docs/order-view-service/objects/carrier-detail",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/docs/order-view-service/objects/carrier-detail.mdx",tags:[],version:"current",frontMatter:{id:"carrier-detail",title:"CarrierDetail"},sidebar:"orderViewSidebar",previous:{title:"CalendarDate",permalink:"/docs/order-view-service/objects/calendar-date"},next:{title:"CarrierQuote",permalink:"/docs/order-view-service/objects/carrier-quote"}},s=[{value:"Fields",id:"fields",children:[{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4},{value:"<code>createdAt</code> (DateTime)",id:"createdat-datetime",children:[],level:4},{value:"<code>updatedAt</code> (DateTime)",id:"updatedat-datetime",children:[],level:4},{value:"<code>carrierCode</code> (String)",id:"carriercode-string",children:[],level:4},{value:"<code>carrierTitle</code> (String)",id:"carriertitle-string",children:[],level:4},{value:"<code>carrierType</code> (String)",id:"carriertype-string",children:[],level:4},{value:"<code>deliveryDateMessage</code> (String)",id:"deliverydatemessage-string",children:[],level:4},{value:"<code>carrier</code> (Carrier)",id:"carrier-carrier",children:[],level:4},{value:"<code>rateBreakdown</code> (RateBreakdown)",id:"ratebreakdown-ratebreakdown",children:[],level:4},{value:"<code>customDescription</code> (String)",id:"customdescription-string",children:[],level:4}],level:3},{value:"Interfaces",id:"interfaces",children:[{value:"Node",id:"node",children:[],level:4}],level:3}],p={toc:s};function u(e){var r=e.components,t=(0,a.Z)(e,o);return(0,n.kt)("wrapper",(0,i.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"No description"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type CarrierDetail implements Node {\n  id: ID!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  carrierCode: String!\n  carrierTitle: String!\n  carrierType: String!\n  deliveryDateMessage: String\n  carrier: Carrier\n  rateBreakdown: RateBreakdown\n  customDescription: String\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"id-id"},(0,n.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,n.kt)("h4",{id:"createdat-datetime"},(0,n.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/date-time"},(0,n.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,n.kt)("h4",{id:"updatedat-datetime"},(0,n.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/date-time"},(0,n.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,n.kt)("h4",{id:"carriercode-string"},(0,n.kt)("inlineCode",{parentName:"h4"},"carrierCode")," (",(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,n.kt)("h4",{id:"carriertitle-string"},(0,n.kt)("inlineCode",{parentName:"h4"},"carrierTitle")," (",(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,n.kt)("h4",{id:"carriertype-string"},(0,n.kt)("inlineCode",{parentName:"h4"},"carrierType")," (",(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,n.kt)("h4",{id:"deliverydatemessage-string"},(0,n.kt)("inlineCode",{parentName:"h4"},"deliveryDateMessage")," (",(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,n.kt)("h4",{id:"carrier-carrier"},(0,n.kt)("inlineCode",{parentName:"h4"},"carrier")," (",(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/objects/carrier"},(0,n.kt)("inlineCode",{parentName:"a"},"Carrier")),")"),(0,n.kt)("h4",{id:"ratebreakdown-ratebreakdown"},(0,n.kt)("inlineCode",{parentName:"h4"},"rateBreakdown")," (",(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/objects/rate-breakdown"},(0,n.kt)("inlineCode",{parentName:"a"},"RateBreakdown")),")"),(0,n.kt)("h4",{id:"customdescription-string"},(0,n.kt)("inlineCode",{parentName:"h4"},"customDescription")," (",(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,n.kt)("h3",{id:"interfaces"},"Interfaces"),(0,n.kt)("h4",{id:"node"},(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/interfaces/node"},(0,n.kt)("inlineCode",{parentName:"a"},"Node"))),(0,n.kt)("p",null,"An object with an ID"))}u.isMDXComponent=!0}}]);