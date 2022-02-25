"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[14423],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return u}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),m=c(r),u=i,v=m["".concat(s,".").concat(u)]||m[u]||p[u]||o;return r?n.createElement(v,a(a({ref:t},l),{},{components:r})):n.createElement(v,a({ref:t},l))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:i,a[1]=d;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},74361:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return d},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return m}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],d={id:"stored-rmsrating-info",title:"StoredRMSRatingInfo"},s=void 0,c={unversionedId:"order-view-service/objects/stored-rmsrating-info",id:"version-1.0.0/order-view-service/objects/stored-rmsrating-info",isDocsHomePage:!1,title:"StoredRMSRatingInfo",description:"No description",source:"@site/versioned_docs/version-1.0.0/order-view-service/objects/stored-rmsrating-info.mdx",sourceDirName:"order-view-service/objects",slug:"/order-view-service/objects/stored-rmsrating-info",permalink:"/docs/1.0.0/order-view-service/objects/stored-rmsrating-info",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/versioned_docs/version-1.0.0/order-view-service/objects/stored-rmsrating-info.mdx",tags:[],version:"1.0.0",frontMatter:{id:"stored-rmsrating-info",title:"StoredRMSRatingInfo"},sidebar:"version-1.0.0/orderViewSidebar",previous:{title:"StoredRMSDestination",permalink:"/docs/1.0.0/order-view-service/objects/stored-rmsdestination"},next:{title:"StoredRMSRequestedOptions",permalink:"/docs/1.0.0/order-view-service/objects/stored-rmsrequested-options"}},l=[{value:"Fields",id:"fields",children:[{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4},{value:"<code>createdAt</code> (DateTime)",id:"createdat-datetime",children:[],level:4},{value:"<code>updatedAt</code> (DateTime)",id:"updatedat-datetime",children:[],level:4},{value:"<code>cart</code> (StoredRMSCart)",id:"cart-storedrmscart",children:[],level:4},{value:"<code>destination</code> (StoredRMSDestination)",id:"destination-storedrmsdestination",children:[],level:4},{value:"<code>customer</code> (StoredRMSCustomer)",id:"customer-storedrmscustomer",children:[],level:4},{value:"<code>cartType</code> (CartType)",id:"carttype-carttype",children:[],level:4},{value:"<code>requestedOptions</code> (StoredRMSRequestedOptions)",id:"requestedoptions-storedrmsrequestedoptions",children:[],level:4},{value:"<code>siteDetails</code> (StoredRMSSiteDetails)",id:"sitedetails-storedrmssitedetails",children:[],level:4}],level:3},{value:"Interfaces",id:"interfaces",children:[{value:"Node",id:"node",children:[],level:4}],level:3}],p={toc:l};function m(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type StoredRMSRatingInfo implements Node {\n  id: ID!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  cart: StoredRMSCart!\n  destination: StoredRMSDestination!\n  customer: StoredRMSCustomer\n  cartType: CartType\n  requestedOptions: StoredRMSRequestedOptions\n  siteDetails: StoredRMSSiteDetails\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"id-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,o.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,o.kt)("h4",{id:"createdat-datetime"},(0,o.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,o.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/date-time"},(0,o.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,o.kt)("h4",{id:"updatedat-datetime"},(0,o.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,o.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/date-time"},(0,o.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,o.kt)("h4",{id:"cart-storedrmscart"},(0,o.kt)("inlineCode",{parentName:"h4"},"cart")," (",(0,o.kt)("a",{parentName:"h4",href:"../../order-view-service/objects/stored-rmscart"},(0,o.kt)("inlineCode",{parentName:"a"},"StoredRMSCart")),")"),(0,o.kt)("h4",{id:"destination-storedrmsdestination"},(0,o.kt)("inlineCode",{parentName:"h4"},"destination")," (",(0,o.kt)("a",{parentName:"h4",href:"../../order-view-service/objects/stored-rmsdestination"},(0,o.kt)("inlineCode",{parentName:"a"},"StoredRMSDestination")),")"),(0,o.kt)("h4",{id:"customer-storedrmscustomer"},(0,o.kt)("inlineCode",{parentName:"h4"},"customer")," (",(0,o.kt)("a",{parentName:"h4",href:"../../order-view-service/objects/stored-rmscustomer"},(0,o.kt)("inlineCode",{parentName:"a"},"StoredRMSCustomer")),")"),(0,o.kt)("h4",{id:"carttype-carttype"},(0,o.kt)("inlineCode",{parentName:"h4"},"cartType")," (",(0,o.kt)("a",{parentName:"h4",href:"../../order-view-service/enums/cart-type"},(0,o.kt)("inlineCode",{parentName:"a"},"CartType")),")"),(0,o.kt)("h4",{id:"requestedoptions-storedrmsrequestedoptions"},(0,o.kt)("inlineCode",{parentName:"h4"},"requestedOptions")," (",(0,o.kt)("a",{parentName:"h4",href:"../../order-view-service/objects/stored-rmsrequested-options"},(0,o.kt)("inlineCode",{parentName:"a"},"StoredRMSRequestedOptions")),")"),(0,o.kt)("h4",{id:"sitedetails-storedrmssitedetails"},(0,o.kt)("inlineCode",{parentName:"h4"},"siteDetails")," (",(0,o.kt)("a",{parentName:"h4",href:"../../order-view-service/objects/stored-rmssite-details"},(0,o.kt)("inlineCode",{parentName:"a"},"StoredRMSSiteDetails")),")"),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"node"},(0,o.kt)("a",{parentName:"h4",href:"../../order-view-service/interfaces/node"},(0,o.kt)("inlineCode",{parentName:"a"},"Node"))),(0,o.kt)("p",null,"An object with an ID"))}m.isMDXComponent=!0}}]);