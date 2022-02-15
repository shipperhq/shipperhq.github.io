"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[90808],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return g}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),p=c(r),g=i,u=p["".concat(s,".").concat(g)]||p[g]||m[g]||a;return r?n.createElement(u,o(o({ref:t},l),{},{components:r})):n.createElement(u,o({ref:t},l))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=p;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:i,o[1]=d;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},33777:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return d},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],d={id:"stored-rmsdestination",title:"StoredRMSDestination"},s=void 0,c={unversionedId:"rate-manager-service/objects/stored-rmsdestination",id:"rate-manager-service/objects/stored-rmsdestination",isDocsHomePage:!1,title:"StoredRMSDestination",description:"No description",source:"@site/docs/rate-manager-service/objects/stored-rmsdestination.mdx",sourceDirName:"rate-manager-service/objects",slug:"/rate-manager-service/objects/stored-rmsdestination",permalink:"/docs/rate-manager-service/objects/stored-rmsdestination",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/docs/rate-manager-service/objects/stored-rmsdestination.mdx",tags:[],version:"current",frontMatter:{id:"stored-rmsdestination",title:"StoredRMSDestination"},sidebar:"rateManagerService",previous:{title:"StoredRMSCustomer",permalink:"/docs/rate-manager-service/objects/stored-rmscustomer"},next:{title:"StoredRMSRatingInfo",permalink:"/docs/rate-manager-service/objects/stored-rmsrating-info"}},l=[{value:"Fields",id:"fields",children:[{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4},{value:"<code>createdAt</code> (DateTime)",id:"createdat-datetime",children:[],level:4},{value:"<code>updatedAt</code> (DateTime)",id:"updatedat-datetime",children:[],level:4},{value:"<code>country</code> (String)",id:"country-string",children:[],level:4},{value:"<code>region</code> (String)",id:"region-string",children:[],level:4},{value:"<code>city</code> (String)",id:"city-string",children:[],level:4},{value:"<code>street</code> (String)",id:"street-string",children:[],level:4},{value:"<code>street2</code> (String)",id:"street2-string",children:[],level:4},{value:"<code>zipcode</code> (String)",id:"zipcode-string",children:[],level:4},{value:"<code>storedRMSRatingInfo</code> (StoredRMSRatingInfo)",id:"storedrmsratinginfo-storedrmsratinginfo",children:[],level:4}],level:3},{value:"Interfaces",id:"interfaces",children:[{value:"Node",id:"node",children:[],level:4}],level:3}],m={toc:l};function p(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type StoredRMSDestination implements Node {\n  id: ID!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  country: String\n  region: String\n  city: String\n  street: String\n  street2: String\n  zipcode: String\n  storedRMSRatingInfo: StoredRMSRatingInfo\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"id-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"createdat-datetime"},(0,a.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/date-time"},(0,a.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,a.kt)("h4",{id:"updatedat-datetime"},(0,a.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/date-time"},(0,a.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,a.kt)("h4",{id:"country-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"country")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"region-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"region")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"city-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"city")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"street-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"street")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"street2-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"street2")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"zipcode-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"zipcode")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"storedrmsratinginfo-storedrmsratinginfo"},(0,a.kt)("inlineCode",{parentName:"h4"},"storedRMSRatingInfo")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/objects/stored-rmsrating-info"},(0,a.kt)("inlineCode",{parentName:"a"},"StoredRMSRatingInfo")),")"),(0,a.kt)("h3",{id:"interfaces"},"Interfaces"),(0,a.kt)("h4",{id:"node"},(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/interfaces/node"},(0,a.kt)("inlineCode",{parentName:"a"},"Node"))),(0,a.kt)("p",null,"An object with an ID"))}p.isMDXComponent=!0}}]);