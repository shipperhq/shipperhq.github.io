"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[44098],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return p}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(r),p=a,f=u["".concat(s,".").concat(p)]||u[p]||m[p]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},24867:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return l},default:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],c={id:"stored-rmscustomer",title:"StoredRMSCustomer"},s=void 0,d={unversionedId:"rate-manager-service/objects/stored-rmscustomer",id:"rate-manager-service/objects/stored-rmscustomer",isDocsHomePage:!1,title:"StoredRMSCustomer",description:"No description",source:"@site/docs/rate-manager-service/objects/stored-rmscustomer.mdx",sourceDirName:"rate-manager-service/objects",slug:"/rate-manager-service/objects/stored-rmscustomer",permalink:"/docs/rate-manager-service/objects/stored-rmscustomer",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/docs/rate-manager-service/objects/stored-rmscustomer.mdx",tags:[],version:"current",frontMatter:{id:"stored-rmscustomer",title:"StoredRMSCustomer"},sidebar:"rateManagerService",previous:{title:"StoredRMSCart",permalink:"/docs/rate-manager-service/objects/stored-rmscart"},next:{title:"StoredRMSDestination",permalink:"/docs/rate-manager-service/objects/stored-rmsdestination"}},l=[{value:"Fields",id:"fields",children:[{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4},{value:"<code>createdAt</code> (DateTime)",id:"createdat-datetime",children:[],level:4},{value:"<code>updatedAt</code> (DateTime)",id:"updatedat-datetime",children:[],level:4},{value:"<code>customerGroup</code> (String)",id:"customergroup-string",children:[],level:4},{value:"<code>storedRMSRatingInfo</code> (StoredRMSRatingInfo)",id:"storedrmsratinginfo-storedrmsratinginfo",children:[],level:4}],level:3},{value:"Interfaces",id:"interfaces",children:[{value:"Node",id:"node",children:[],level:4}],level:3}],m={toc:l};function u(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type StoredRMSCustomer implements Node {\n  id: ID!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  customerGroup: String\n  storedRMSRatingInfo: StoredRMSRatingInfo\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"id-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,o.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,o.kt)("h4",{id:"createdat-datetime"},(0,o.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,o.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/date-time"},(0,o.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,o.kt)("h4",{id:"updatedat-datetime"},(0,o.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,o.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/date-time"},(0,o.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,o.kt)("h4",{id:"customergroup-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"customerGroup")," (",(0,o.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"storedrmsratinginfo-storedrmsratinginfo"},(0,o.kt)("inlineCode",{parentName:"h4"},"storedRMSRatingInfo")," (",(0,o.kt)("a",{parentName:"h4",href:"../../rate-manager-service/objects/stored-rmsrating-info"},(0,o.kt)("inlineCode",{parentName:"a"},"StoredRMSRatingInfo")),")"),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"node"},(0,o.kt)("a",{parentName:"h4",href:"../../rate-manager-service/interfaces/node"},(0,o.kt)("inlineCode",{parentName:"a"},"Node"))),(0,o.kt)("p",null,"An object with an ID"))}u.isMDXComponent=!0}}]);