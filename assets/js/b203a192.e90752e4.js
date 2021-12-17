"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[98586],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return v}});var i=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,i,n=function(e,r){if(null==e)return{};var t,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=i.createContext({}),c=function(e){var r=i.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=c(e.components);return i.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},m=i.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),m=c(t),v=n,u=m["".concat(s,".").concat(v)]||m[v]||p[v]||a;return t?i.createElement(u,o(o({ref:r},l),{},{components:t})):i.createElement(u,o({ref:r},l))}));function v(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,o=new Array(a);o[0]=m;var d={};for(var s in r)hasOwnProperty.call(r,s)&&(d[s]=r[s]);d.originalType=e,d.mdxType="string"==typeof e?e:n,o[1]=d;for(var c=2;c<a;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},30229:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return d},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return m}});var i=t(87462),n=t(63366),a=(t(67294),t(3905)),o=["components"],d={id:"stored-rmssite-details",title:"StoredRMSSiteDetails"},s=void 0,c={unversionedId:"order-view-service/objects/stored-rmssite-details",id:"version-1.0.0/order-view-service/objects/stored-rmssite-details",isDocsHomePage:!1,title:"StoredRMSSiteDetails",description:"No description",source:"@site/versioned_docs/version-1.0.0/order-view-service/objects/stored-rmssite-details.mdx",sourceDirName:"order-view-service/objects",slug:"/order-view-service/objects/stored-rmssite-details",permalink:"/docs/order-view-service/objects/stored-rmssite-details",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/versioned_docs/version-1.0.0/order-view-service/objects/stored-rmssite-details.mdx",tags:[],version:"1.0.0",frontMatter:{id:"stored-rmssite-details",title:"StoredRMSSiteDetails"},sidebar:"version-1.0.0/orderViewSidebar",previous:{title:"StoredRMSRequestedOptions",permalink:"/docs/order-view-service/objects/stored-rmsrequested-options"},next:{title:"TimeInTransitOptions",permalink:"/docs/order-view-service/objects/time-in-transit-options"}},l=[{value:"Fields",id:"fields",children:[{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4},{value:"<code>createdAt</code> (DateTime)",id:"createdat-datetime",children:[],level:4},{value:"<code>updatedAt</code> (DateTime)",id:"updatedat-datetime",children:[],level:4},{value:"<code>appVersion</code> (String)",id:"appversion-string",children:[],level:4},{value:"<code>ecommerceCart</code> (String)",id:"ecommercecart-string",children:[],level:4},{value:"<code>ecommerceVersion</code> (String)",id:"ecommerceversion-string",children:[],level:4},{value:"<code>websiteUrl</code> (String)",id:"websiteurl-string",children:[],level:4},{value:"<code>ipAddress</code> (String)",id:"ipaddress-string",children:[],level:4},{value:"<code>storedRMSRatingInfo</code> (StoredRMSRatingInfo)",id:"storedrmsratinginfo-storedrmsratinginfo",children:[],level:4}],level:3},{value:"Interfaces",id:"interfaces",children:[{value:"Node",id:"node",children:[],level:4}],level:3}],p={toc:l};function m(e){var r=e.components,t=(0,n.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type StoredRMSSiteDetails implements Node {\n  id: ID!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  appVersion: String\n  ecommerceCart: String\n  ecommerceVersion: String\n  websiteUrl: String\n  ipAddress: String\n  storedRMSRatingInfo: StoredRMSRatingInfo\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"id-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"createdat-datetime"},(0,a.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/date-time"},(0,a.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,a.kt)("h4",{id:"updatedat-datetime"},(0,a.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/date-time"},(0,a.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,a.kt)("h4",{id:"appversion-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"appVersion")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"ecommercecart-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"ecommerceCart")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"ecommerceversion-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"ecommerceVersion")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"websiteurl-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"websiteUrl")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"ipaddress-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"ipAddress")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"storedrmsratinginfo-storedrmsratinginfo"},(0,a.kt)("inlineCode",{parentName:"h4"},"storedRMSRatingInfo")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/objects/stored-rmsrating-info"},(0,a.kt)("inlineCode",{parentName:"a"},"StoredRMSRatingInfo")),")"),(0,a.kt)("h3",{id:"interfaces"},"Interfaces"),(0,a.kt)("h4",{id:"node"},(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/interfaces/node"},(0,a.kt)("inlineCode",{parentName:"a"},"Node"))),(0,a.kt)("p",null,"An object with an ID"))}m.isMDXComponent=!0}}]);