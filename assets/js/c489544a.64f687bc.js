"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[4276],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return u}});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),c=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),m=c(r),u=n,v=m["".concat(s,".").concat(u)]||m[u]||p[u]||a;return r?i.createElement(v,o(o({ref:t},l),{},{components:r})):i.createElement(v,o({ref:t},l))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=m;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:n,o[1]=d;for(var c=2;c<a;c++)o[c]=r[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},78670:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return d},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return m}});var i=r(87462),n=r(63366),a=(r(67294),r(3905)),o=["components"],d={id:"stored-rmssite-details",title:"StoredRMSSiteDetails"},s=void 0,c={unversionedId:"order-view-service/objects/stored-rmssite-details",id:"order-view-service/objects/stored-rmssite-details",isDocsHomePage:!1,title:"StoredRMSSiteDetails",description:"No description",source:"@site/docs/order-view-service/objects/stored-rmssite-details.mdx",sourceDirName:"order-view-service/objects",slug:"/order-view-service/objects/stored-rmssite-details",permalink:"/docs/order-view-service/objects/stored-rmssite-details",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/docs/order-view-service/objects/stored-rmssite-details.mdx",tags:[],version:"current",frontMatter:{id:"stored-rmssite-details",title:"StoredRMSSiteDetails"},sidebar:"orderViewSidebar",previous:{title:"StoredRMSRequestedOptions",permalink:"/docs/order-view-service/objects/stored-rmsrequested-options"},next:{title:"TimeInTransitOptions",permalink:"/docs/order-view-service/objects/time-in-transit-options"}},l=[{value:"Fields",id:"fields",children:[{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4},{value:"<code>createdAt</code> (DateTime)",id:"createdat-datetime",children:[],level:4},{value:"<code>updatedAt</code> (DateTime)",id:"updatedat-datetime",children:[],level:4},{value:"<code>appVersion</code> (String)",id:"appversion-string",children:[],level:4},{value:"<code>ecommerceCart</code> (String)",id:"ecommercecart-string",children:[],level:4},{value:"<code>ecommerceVersion</code> (String)",id:"ecommerceversion-string",children:[],level:4},{value:"<code>websiteUrl</code> (String)",id:"websiteurl-string",children:[],level:4},{value:"<code>ipAddress</code> (String)",id:"ipaddress-string",children:[],level:4},{value:"<code>storedRMSRatingInfo</code> (StoredRMSRatingInfo)",id:"storedrmsratinginfo-storedrmsratinginfo",children:[],level:4}],level:3},{value:"Interfaces",id:"interfaces",children:[{value:"Node",id:"node",children:[],level:4}],level:3}],p={toc:l};function m(e){var t=e.components,r=(0,n.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type StoredRMSSiteDetails implements Node {\n  id: ID!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  appVersion: String\n  ecommerceCart: String\n  ecommerceVersion: String\n  websiteUrl: String\n  ipAddress: String\n  storedRMSRatingInfo: StoredRMSRatingInfo\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"id-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"createdat-datetime"},(0,a.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/date-time"},(0,a.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,a.kt)("h4",{id:"updatedat-datetime"},(0,a.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/date-time"},(0,a.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,a.kt)("h4",{id:"appversion-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"appVersion")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"ecommercecart-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"ecommerceCart")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"ecommerceversion-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"ecommerceVersion")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"websiteurl-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"websiteUrl")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"ipaddress-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"ipAddress")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"storedrmsratinginfo-storedrmsratinginfo"},(0,a.kt)("inlineCode",{parentName:"h4"},"storedRMSRatingInfo")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/objects/stored-rmsrating-info"},(0,a.kt)("inlineCode",{parentName:"a"},"StoredRMSRatingInfo")),")"),(0,a.kt)("h3",{id:"interfaces"},"Interfaces"),(0,a.kt)("h4",{id:"node"},(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/interfaces/node"},(0,a.kt)("inlineCode",{parentName:"a"},"Node"))),(0,a.kt)("p",null,"An object with an ID"))}m.isMDXComponent=!0}}]);