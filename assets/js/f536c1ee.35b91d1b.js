"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[243],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return m}});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=n.createContext({}),c=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):d(d({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(a.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=i,f=u["".concat(a,".").concat(m)]||u[m]||p[m]||o;return t?n.createElement(f,d(d({ref:r},l),{},{components:t})):n.createElement(f,d({ref:r},l))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,d=new Array(o);d[0]=u;var s={};for(var a in r)hasOwnProperty.call(r,a)&&(s[a]=r[a]);s.originalType=e,s.mdxType="string"==typeof e?e:i,d[1]=s;for(var c=2;c<o;c++)d[c]=t[c];return n.createElement.apply(null,d)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6037:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return a},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var n=t(7462),i=t(3366),o=(t(7294),t(3905)),d=["components"],s={id:"stored-rmsrequested-options",title:"StoredRMSRequestedOptions"},a=void 0,c={unversionedId:"order-view-service/objects/stored-rmsrequested-options",id:"order-view-service/objects/stored-rmsrequested-options",isDocsHomePage:!1,title:"StoredRMSRequestedOptions",description:"No description",source:"@site/docs/order-view-service/objects/stored-rmsrequested-options.mdx",sourceDirName:"order-view-service/objects",slug:"/order-view-service/objects/stored-rmsrequested-options",permalink:"/docs/order-view-service/objects/stored-rmsrequested-options",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/docs/order-view-service/objects/stored-rmsrequested-options.mdx",tags:[],version:"current",frontMatter:{id:"stored-rmsrequested-options",title:"StoredRMSRequestedOptions"},sidebar:"orderViewSidebar",previous:{title:"StoredRMSRatingInfo",permalink:"/docs/order-view-service/objects/stored-rmsrating-info"},next:{title:"StoredRMSSiteDetails",permalink:"/docs/order-view-service/objects/stored-rmssite-details"}},l=[{value:"Fields",id:"fields",children:[{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4},{value:"<code>shipmentId</code> (String)",id:"shipmentid-string",children:[],level:4},{value:"<code>carrierCode</code> (String)",id:"carriercode-string",children:[],level:4},{value:"<code>selectedDate</code> (String)",id:"selecteddate-string",children:[],level:4},{value:"<code>selectedPickupId</code> (String)",id:"selectedpickupid-string",children:[],level:4},{value:"<code>storedRMSRatingInfo</code> (StoredRMSRatingInfo)",id:"storedrmsratinginfo-storedrmsratinginfo",children:[],level:4}],level:3},{value:"Interfaces",id:"interfaces",children:[{value:"Node",id:"node",children:[],level:4}],level:3}],p={toc:l};function u(e){var r=e.components,t=(0,i.Z)(e,d);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type StoredRMSRequestedOptions implements Node {\n  id: ID!\n  shipmentId: String!\n  carrierCode: String!\n  selectedDate: String\n  selectedPickupId: String\n  storedRMSRatingInfo: StoredRMSRatingInfo\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"id-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,o.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,o.kt)("h4",{id:"shipmentid-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"shipmentId")," (",(0,o.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"carriercode-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"carrierCode")," (",(0,o.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"selecteddate-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"selectedDate")," (",(0,o.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"selectedpickupid-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"selectedPickupId")," (",(0,o.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"storedrmsratinginfo-storedrmsratinginfo"},(0,o.kt)("inlineCode",{parentName:"h4"},"storedRMSRatingInfo")," (",(0,o.kt)("a",{parentName:"h4",href:"../../order-view-service/objects/stored-rmsrating-info"},(0,o.kt)("inlineCode",{parentName:"a"},"StoredRMSRatingInfo")),")"),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"node"},(0,o.kt)("a",{parentName:"h4",href:"../../order-view-service/interfaces/node"},(0,o.kt)("inlineCode",{parentName:"a"},"Node"))),(0,o.kt)("p",null,"An object with an ID"))}u.isMDXComponent=!0}}]);