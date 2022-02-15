"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[57553],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return u}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),c=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(r),u=a,f=p["".concat(d,".").concat(u)]||p[u]||m[u]||i;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},70563:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],s={id:"stored-rmsrating-info",title:"StoredRMSRatingInfo"},d=void 0,c={unversionedId:"rate-manager-service/objects/stored-rmsrating-info",id:"rate-manager-service/objects/stored-rmsrating-info",isDocsHomePage:!1,title:"StoredRMSRatingInfo",description:"No description",source:"@site/docs/rate-manager-service/objects/stored-rmsrating-info.mdx",sourceDirName:"rate-manager-service/objects",slug:"/rate-manager-service/objects/stored-rmsrating-info",permalink:"/docs/rate-manager-service/objects/stored-rmsrating-info",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/docs/rate-manager-service/objects/stored-rmsrating-info.mdx",tags:[],version:"current",frontMatter:{id:"stored-rmsrating-info",title:"StoredRMSRatingInfo"},sidebar:"rateManagerService",previous:{title:"StoredRMSDestination",permalink:"/docs/rate-manager-service/objects/stored-rmsdestination"},next:{title:"StoredRMSRequestedOptions",permalink:"/docs/rate-manager-service/objects/stored-rmsrequested-options"}},l=[{value:"Fields",id:"fields",children:[{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4},{value:"<code>createdAt</code> (DateTime)",id:"createdat-datetime",children:[],level:4},{value:"<code>updatedAt</code> (DateTime)",id:"updatedat-datetime",children:[],level:4},{value:"<code>cart</code> (StoredRMSCart)",id:"cart-storedrmscart",children:[],level:4},{value:"<code>destination</code> (StoredRMSDestination)",id:"destination-storedrmsdestination",children:[],level:4},{value:"<code>customer</code> (StoredRMSCustomer)",id:"customer-storedrmscustomer",children:[],level:4},{value:"<code>cartType</code> (CartType)",id:"carttype-carttype",children:[],level:4},{value:"<code>requestedOptions</code> (StoredRMSRequestedOptions)",id:"requestedoptions-storedrmsrequestedoptions",children:[],level:4},{value:"<code>siteDetails</code> (StoredRMSSiteDetails)",id:"sitedetails-storedrmssitedetails",children:[],level:4}],level:3},{value:"Interfaces",id:"interfaces",children:[{value:"Node",id:"node",children:[],level:4}],level:3}],m={toc:l};function p(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type StoredRMSRatingInfo implements Node {\n  id: ID!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  cart: StoredRMSCart!\n  destination: StoredRMSDestination!\n  customer: StoredRMSCustomer\n  cartType: CartType\n  requestedOptions: StoredRMSRequestedOptions\n  siteDetails: StoredRMSSiteDetails\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"id-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"createdat-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,i.kt)("h4",{id:"updatedat-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,i.kt)("h4",{id:"cart-storedrmscart"},(0,i.kt)("inlineCode",{parentName:"h4"},"cart")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/objects/stored-rmscart"},(0,i.kt)("inlineCode",{parentName:"a"},"StoredRMSCart")),")"),(0,i.kt)("h4",{id:"destination-storedrmsdestination"},(0,i.kt)("inlineCode",{parentName:"h4"},"destination")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/objects/stored-rmsdestination"},(0,i.kt)("inlineCode",{parentName:"a"},"StoredRMSDestination")),")"),(0,i.kt)("h4",{id:"customer-storedrmscustomer"},(0,i.kt)("inlineCode",{parentName:"h4"},"customer")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/objects/stored-rmscustomer"},(0,i.kt)("inlineCode",{parentName:"a"},"StoredRMSCustomer")),")"),(0,i.kt)("h4",{id:"carttype-carttype"},(0,i.kt)("inlineCode",{parentName:"h4"},"cartType")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/enums/cart-type"},(0,i.kt)("inlineCode",{parentName:"a"},"CartType")),")"),(0,i.kt)("h4",{id:"requestedoptions-storedrmsrequestedoptions"},(0,i.kt)("inlineCode",{parentName:"h4"},"requestedOptions")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/objects/stored-rmsrequested-options"},(0,i.kt)("inlineCode",{parentName:"a"},"StoredRMSRequestedOptions")),")"),(0,i.kt)("h4",{id:"sitedetails-storedrmssitedetails"},(0,i.kt)("inlineCode",{parentName:"h4"},"siteDetails")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/objects/stored-rmssite-details"},(0,i.kt)("inlineCode",{parentName:"a"},"StoredRMSSiteDetails")),")"),(0,i.kt)("h3",{id:"interfaces"},"Interfaces"),(0,i.kt)("h4",{id:"node"},(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/interfaces/node"},(0,i.kt)("inlineCode",{parentName:"a"},"Node"))),(0,i.kt)("p",null,"An object with an ID"))}p.isMDXComponent=!0}}]);