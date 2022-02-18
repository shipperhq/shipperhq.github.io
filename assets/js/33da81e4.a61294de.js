"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[12847],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,h=u["".concat(o,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,p(p({ref:t},l),{},{components:n})):r.createElement(h,p({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,p=new Array(a);p[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,p[1]=s;for(var c=2;c<a;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},81280:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),p=["components"],s={id:"rmsshipment-shipping-rate-input",title:"RMSShipmentShippingRateInput"},o=void 0,c={unversionedId:"rate-manager-service/inputs/rmsshipment-shipping-rate-input",id:"rate-manager-service/inputs/rmsshipment-shipping-rate-input",isDocsHomePage:!1,title:"RMSShipmentShippingRateInput",description:"User-selected shipment details for an individual shipment",source:"@site/docs/rate-manager-service/inputs/rmsshipment-shipping-rate-input.mdx",sourceDirName:"rate-manager-service/inputs",slug:"/rate-manager-service/inputs/rmsshipment-shipping-rate-input",permalink:"/docs/rate-manager-service/inputs/rmsshipment-shipping-rate-input",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/docs/rate-manager-service/inputs/rmsshipment-shipping-rate-input.mdx",tags:[],version:"current",frontMatter:{id:"rmsshipment-shipping-rate-input",title:"RMSShipmentShippingRateInput"},sidebar:"rateManagerService",previous:{title:"RMSShipmentOptionInput",permalink:"/docs/rate-manager-service/inputs/rmsshipment-option-input"},next:{title:"RMSShipmentWhereInput",permalink:"/docs/rate-manager-service/inputs/rmsshipment-where-input"}},l=[{value:"Fields",id:"fields",children:[{value:"<code>shipmentId</code> (String)",id:"shipmentid-string",children:[],level:4},{value:"<code>carrierCode</code> (String)",id:"carriercode-string",children:[],level:4},{value:"<code>methodCode</code> (String)",id:"methodcode-string",children:[],level:4},{value:"<code>selectedDate</code> (String)",id:"selecteddate-string",children:[],level:4},{value:"<code>selectedPickupId</code> (String)",id:"selectedpickupid-string",children:[],level:4},{value:"<code>selectedTimeSlot</code> (String)",id:"selectedtimeslot-string",children:[],level:4},{value:"<code>selectedOptions</code> (RMSOptionInput)",id:"selectedoptions-rmsoptioninput",children:[],level:4}],level:3}],d={toc:l};function u(e){var t=e.components,n=(0,i.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"User-selected shipment details for an individual shipment"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type RMSShipmentShippingRateInput {\n  shipmentId: String!\n  carrierCode: String!\n  methodCode: String!\n  selectedDate: String\n  selectedPickupId: String\n  selectedTimeSlot: String\n  selectedOptions: [RMSOptionInput!]\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"shipmentid-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"shipmentId")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"Shipment these details apply to"),(0,a.kt)("h4",{id:"carriercode-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"carrierCode")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"User-selected carrier"),(0,a.kt)("h4",{id:"methodcode-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"methodCode")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"User-selected method"),(0,a.kt)("h4",{id:"selecteddate-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"selectedDate")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"User-selected delivery/pickup date"),(0,a.kt)("h4",{id:"selectedpickupid-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"selectedPickupId")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"User-selected pickup location id"),(0,a.kt)("h4",{id:"selectedtimeslot-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"selectedTimeSlot")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"User-selected delivery/pickup time slot"),(0,a.kt)("h4",{id:"selectedoptions-rmsoptioninput"},(0,a.kt)("inlineCode",{parentName:"h4"},"selectedOptions")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/inputs/rmsoption-input"},(0,a.kt)("inlineCode",{parentName:"a"},"RMSOptionInput")),")"),(0,a.kt)("p",null,"User-selected accessorials"))}u.isMDXComponent=!0}}]);