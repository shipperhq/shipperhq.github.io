"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[2919],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},d=Object.keys(e);for(n=0;n<d.length;n++)r=d[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)r=d[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,d=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(r),m=i,v=p["".concat(c,".").concat(m)]||p[m]||s[m]||d;return r?n.createElement(v,a(a({ref:t},u),{},{components:r})):n.createElement(v,a({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var d=r.length,a=new Array(d);a[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var l=2;l<d;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6909:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var n=r(7462),i=r(3366),d=(r(7294),r(3905)),a=["components"],o={id:"time-slot-order-by-input",title:"TimeSlotOrderByInput"},c=void 0,l={unversionedId:"order-view-service/enums/time-slot-order-by-input",id:"order-view-service/enums/time-slot-order-by-input",isDocsHomePage:!1,title:"TimeSlotOrderByInput",description:"No description",source:"@site/docs/order-view-service/enums/time-slot-order-by-input.mdx",sourceDirName:"order-view-service/enums",slug:"/order-view-service/enums/time-slot-order-by-input",permalink:"/docs/order-view-service/enums/time-slot-order-by-input",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/docs/order-view-service/enums/time-slot-order-by-input.mdx",tags:[],version:"current",frontMatter:{id:"time-slot-order-by-input",title:"TimeSlotOrderByInput"},sidebar:"orderViewSidebar",previous:{title:"ShipmentOrderByInput",permalink:"/docs/order-view-service/enums/shipment-order-by-input"},next:{title:"AddressWhereInput",permalink:"/docs/order-view-service/inputs/address-where-input"}},u=[{value:"Values",id:"values",children:[{value:"<code>id_ASC</code>",id:"id_asc",children:[],level:4},{value:"<code>id_DESC</code>",id:"id_desc",children:[],level:4},{value:"<code>createdAt_ASC</code>",id:"createdat_asc",children:[],level:4},{value:"<code>createdAt_DESC</code>",id:"createdat_desc",children:[],level:4},{value:"<code>updatedAt_ASC</code>",id:"updatedat_asc",children:[],level:4},{value:"<code>updatedAt_DESC</code>",id:"updatedat_desc",children:[],level:4},{value:"<code>timeStart_ASC</code>",id:"timestart_asc",children:[],level:4},{value:"<code>timeStart_DESC</code>",id:"timestart_desc",children:[],level:4},{value:"<code>timeEnd_ASC</code>",id:"timeend_asc",children:[],level:4},{value:"<code>timeEnd_DESC</code>",id:"timeend_desc",children:[],level:4},{value:"<code>interval_ASC</code>",id:"interval_asc",children:[],level:4},{value:"<code>interval_DESC</code>",id:"interval_desc",children:[],level:4}],level:3}],s={toc:u};function p(e){var t=e.components,r=(0,i.Z)(e,a);return(0,d.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"No description"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"enum TimeSlotOrderByInput {\n  id_ASC\n  id_DESC\n  createdAt_ASC\n  createdAt_DESC\n  updatedAt_ASC\n  updatedAt_DESC\n  timeStart_ASC\n  timeStart_DESC\n  timeEnd_ASC\n  timeEnd_DESC\n  interval_ASC\n  interval_DESC\n}\n")),(0,d.kt)("h3",{id:"values"},"Values"),(0,d.kt)("h4",{id:"id_asc"},(0,d.kt)("inlineCode",{parentName:"h4"},"id_ASC")),(0,d.kt)("h4",{id:"id_desc"},(0,d.kt)("inlineCode",{parentName:"h4"},"id_DESC")),(0,d.kt)("h4",{id:"createdat_asc"},(0,d.kt)("inlineCode",{parentName:"h4"},"createdAt_ASC")),(0,d.kt)("h4",{id:"createdat_desc"},(0,d.kt)("inlineCode",{parentName:"h4"},"createdAt_DESC")),(0,d.kt)("h4",{id:"updatedat_asc"},(0,d.kt)("inlineCode",{parentName:"h4"},"updatedAt_ASC")),(0,d.kt)("h4",{id:"updatedat_desc"},(0,d.kt)("inlineCode",{parentName:"h4"},"updatedAt_DESC")),(0,d.kt)("h4",{id:"timestart_asc"},(0,d.kt)("inlineCode",{parentName:"h4"},"timeStart_ASC")),(0,d.kt)("h4",{id:"timestart_desc"},(0,d.kt)("inlineCode",{parentName:"h4"},"timeStart_DESC")),(0,d.kt)("h4",{id:"timeend_asc"},(0,d.kt)("inlineCode",{parentName:"h4"},"timeEnd_ASC")),(0,d.kt)("h4",{id:"timeend_desc"},(0,d.kt)("inlineCode",{parentName:"h4"},"timeEnd_DESC")),(0,d.kt)("h4",{id:"interval_asc"},(0,d.kt)("inlineCode",{parentName:"h4"},"interval_ASC")),(0,d.kt)("h4",{id:"interval_desc"},(0,d.kt)("inlineCode",{parentName:"h4"},"interval_DESC")))}p.isMDXComponent=!0}}]);