"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[73670],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return u}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),c=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(r),u=a,g=p["".concat(d,".").concat(u)]||p[u]||m[u]||i;return r?n.createElement(g,o(o({ref:t},l),{},{components:r})):n.createElement(g,o({ref:t},l))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},49108:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],s={id:"stored-rmssite-details",title:"StoredRMSSiteDetails"},d=void 0,c={unversionedId:"rate-manager-service/objects/stored-rmssite-details",id:"rate-manager-service/objects/stored-rmssite-details",isDocsHomePage:!1,title:"StoredRMSSiteDetails",description:"No description",source:"@site/docs/rate-manager-service/objects/stored-rmssite-details.mdx",sourceDirName:"rate-manager-service/objects",slug:"/rate-manager-service/objects/stored-rmssite-details",permalink:"/docs/rate-manager-service/objects/stored-rmssite-details",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/docs/rate-manager-service/objects/stored-rmssite-details.mdx",tags:[],version:"current",frontMatter:{id:"stored-rmssite-details",title:"StoredRMSSiteDetails"},sidebar:"rateManagerService",previous:{title:"StoredRMSRequestedOptions",permalink:"/docs/rate-manager-service/objects/stored-rmsrequested-options"},next:{title:"TimeInTransitOptions",permalink:"/docs/rate-manager-service/objects/time-in-transit-options"}},l=[{value:"Fields",id:"fields",children:[{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4},{value:"<code>createdAt</code> (DateTime)",id:"createdat-datetime",children:[],level:4},{value:"<code>updatedAt</code> (DateTime)",id:"updatedat-datetime",children:[],level:4},{value:"<code>appVersion</code> (String)",id:"appversion-string",children:[],level:4},{value:"<code>ecommerceCart</code> (String)",id:"ecommercecart-string",children:[],level:4},{value:"<code>ecommerceVersion</code> (String)",id:"ecommerceversion-string",children:[],level:4},{value:"<code>websiteUrl</code> (String)",id:"websiteurl-string",children:[],level:4},{value:"<code>ipAddress</code> (String)",id:"ipaddress-string",children:[],level:4},{value:"<code>storedRMSRatingInfo</code> (StoredRMSRatingInfo)",id:"storedrmsratinginfo-storedrmsratinginfo",children:[],level:4}],level:3},{value:"Interfaces",id:"interfaces",children:[{value:"Node",id:"node",children:[],level:4}],level:3}],m={toc:l};function p(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type StoredRMSSiteDetails implements Node {\n  id: ID!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  appVersion: String\n  ecommerceCart: String\n  ecommerceVersion: String\n  websiteUrl: String\n  ipAddress: String\n  storedRMSRatingInfo: StoredRMSRatingInfo\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"id-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"createdat-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,i.kt)("h4",{id:"updatedat-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,i.kt)("h4",{id:"appversion-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"appVersion")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"ecommercecart-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"ecommerceCart")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"ecommerceversion-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"ecommerceVersion")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"websiteurl-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"websiteUrl")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"ipaddress-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"ipAddress")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"storedrmsratinginfo-storedrmsratinginfo"},(0,i.kt)("inlineCode",{parentName:"h4"},"storedRMSRatingInfo")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/objects/stored-rmsrating-info"},(0,i.kt)("inlineCode",{parentName:"a"},"StoredRMSRatingInfo")),")"),(0,i.kt)("h3",{id:"interfaces"},"Interfaces"),(0,i.kt)("h4",{id:"node"},(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/interfaces/node"},(0,i.kt)("inlineCode",{parentName:"a"},"Node"))),(0,i.kt)("p",null,"An object with an ID"))}p.isMDXComponent=!0}}]);