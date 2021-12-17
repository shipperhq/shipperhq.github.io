"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[23974],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return h}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),m=s(r),h=i,v=m["".concat(c,".").concat(h)]||m[h]||p[h]||a;return r?n.createElement(v,o(o({ref:t},l),{},{components:r})):n.createElement(v,o({ref:t},l))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d.mdxType="string"==typeof e?e:i,o[1]=d;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},81478:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return d},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return m}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],d={id:"shipment-detail",title:"ShipmentDetail"},c=void 0,s={unversionedId:"order-view-service/objects/shipment-detail",id:"version-1.0.0/order-view-service/objects/shipment-detail",isDocsHomePage:!1,title:"ShipmentDetail",description:"No description",source:"@site/versioned_docs/version-1.0.0/order-view-service/objects/shipment-detail.mdx",sourceDirName:"order-view-service/objects",slug:"/order-view-service/objects/shipment-detail",permalink:"/docs/order-view-service/objects/shipment-detail",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/versioned_docs/version-1.0.0/order-view-service/objects/shipment-detail.mdx",tags:[],version:"1.0.0",frontMatter:{id:"shipment-detail",title:"ShipmentDetail"},sidebar:"version-1.0.0/orderViewSidebar",previous:{title:"SelectedShippingRates",permalink:"/docs/order-view-service/objects/selected-shipping-rates"},next:{title:"Shipment",permalink:"/docs/order-view-service/objects/shipment"}},l=[{value:"Fields",id:"fields",children:[{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4},{value:"<code>createdAt</code> (DateTime)",id:"createdat-datetime",children:[],level:4},{value:"<code>updatedAt</code> (DateTime)",id:"updatedat-datetime",children:[],level:4},{value:"<code>shipmentId</code> (String)",id:"shipmentid-string",children:[],level:4},{value:"<code>name</code> (String)",id:"name-string",children:[],level:4},{value:"<code>description</code> (String)",id:"description-string",children:[],level:4},{value:"<code>rateBreakdown</code> (RateBreakdown)",id:"ratebreakdown-ratebreakdown",children:[],level:4},{value:"<code>shipment</code> (Shipment)",id:"shipment-shipment",children:[],level:4}],level:3},{value:"Interfaces",id:"interfaces",children:[{value:"Node",id:"node",children:[],level:4}],level:3}],p={toc:l};function m(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type ShipmentDetail implements Node {\n  id: ID!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  shipmentId: String!\n  name: String!\n  description: String\n  rateBreakdown: RateBreakdown\n  shipment: Shipment\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"id-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"createdat-datetime"},(0,a.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/date-time"},(0,a.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,a.kt)("h4",{id:"updatedat-datetime"},(0,a.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/date-time"},(0,a.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,a.kt)("h4",{id:"shipmentid-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"shipmentId")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"name-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"description-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"ratebreakdown-ratebreakdown"},(0,a.kt)("inlineCode",{parentName:"h4"},"rateBreakdown")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/objects/rate-breakdown"},(0,a.kt)("inlineCode",{parentName:"a"},"RateBreakdown")),")"),(0,a.kt)("h4",{id:"shipment-shipment"},(0,a.kt)("inlineCode",{parentName:"h4"},"shipment")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/objects/shipment"},(0,a.kt)("inlineCode",{parentName:"a"},"Shipment")),")"),(0,a.kt)("h3",{id:"interfaces"},"Interfaces"),(0,a.kt)("h4",{id:"node"},(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/interfaces/node"},(0,a.kt)("inlineCode",{parentName:"a"},"Node"))),(0,a.kt)("p",null,"An object with an ID"))}m.isMDXComponent=!0}}]);