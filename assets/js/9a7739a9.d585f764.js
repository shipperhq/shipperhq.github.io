"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[62421],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),h=c(r),m=i,u=h["".concat(l,".").concat(m)]||h[m]||p[m]||a;return r?n.createElement(u,d(d({ref:t},s),{},{components:r})):n.createElement(u,d({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,d=new Array(a);d[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,d[1]=o;for(var c=2;c<a;c++)d[c]=r[c];return n.createElement.apply(null,d)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},52841:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return h}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),d=["components"],o={id:"selected-shipping-rates",title:"SelectedShippingRates"},l=void 0,c={unversionedId:"order-view-service/objects/selected-shipping-rates",id:"order-view-service/objects/selected-shipping-rates",isDocsHomePage:!1,title:"SelectedShippingRates",description:"No description",source:"@site/docs/order-view-service/objects/selected-shipping-rates.mdx",sourceDirName:"order-view-service/objects",slug:"/order-view-service/objects/selected-shipping-rates",permalink:"/docs/next/order-view-service/objects/selected-shipping-rates",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/docs/order-view-service/objects/selected-shipping-rates.mdx",tags:[],version:"current",frontMatter:{id:"selected-shipping-rates",title:"SelectedShippingRates"},sidebar:"orderViewSidebar",previous:{title:"SelectedRateOption",permalink:"/docs/next/order-view-service/objects/selected-rate-option"},next:{title:"ShipmentDetail",permalink:"/docs/next/order-view-service/objects/shipment-detail"}},s=[{value:"Fields",id:"fields",children:[{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4},{value:"<code>createdAt</code> (DateTime)",id:"createdat-datetime",children:[],level:4},{value:"<code>updatedAt</code> (DateTime)",id:"updatedat-datetime",children:[],level:4},{value:"<code>externalQuoteId</code> (ID)",id:"externalquoteid-id",children:[],level:4},{value:"<code>shipmentId</code> (String)",id:"shipmentid-string",children:[],level:4},{value:"<code>carrierCode</code> (String)",id:"carriercode-string",children:[],level:4},{value:"<code>methodCode</code> (String)",id:"methodcode-string",children:[],level:4},{value:"<code>selectedDate</code> (String)",id:"selecteddate-string",children:[],level:4},{value:"<code>selectedPickupId</code> (String)",id:"selectedpickupid-string",children:[],level:4},{value:"<code>selectedTimeSlot</code> (String)",id:"selectedtimeslot-string",children:[],level:4},{value:"<code>selectedOptions</code> (SelectedRateOption)",id:"selectedoptions-selectedrateoption",children:[],level:4}],level:3},{value:"Interfaces",id:"interfaces",children:[{value:"Node",id:"node",children:[],level:4}],level:3}],p={toc:s};function h(e){var t=e.components,r=(0,i.Z)(e,d);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type SelectedShippingRates implements Node {\n  id: ID!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  externalQuoteId: ID!\n  shipmentId: String!\n  carrierCode: String\n  methodCode: String\n  selectedDate: String\n  selectedPickupId: String\n  selectedTimeSlot: String\n  selectedOptions(\n    where: SelectedRateOptionWhereInput\n    orderBy: SelectedRateOptionOrderByInput\n    skip: Int\n    after: String\n    before: String\n    first: Int\n    last: Int\n  ): [SelectedRateOption!]\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"id-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"createdat-datetime"},(0,a.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/date-time"},(0,a.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,a.kt)("h4",{id:"updatedat-datetime"},(0,a.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/date-time"},(0,a.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,a.kt)("h4",{id:"externalquoteid-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"externalQuoteId")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"shipmentid-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"shipmentId")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"carriercode-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"carrierCode")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"methodcode-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"methodCode")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"selecteddate-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"selectedDate")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"selectedpickupid-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"selectedPickupId")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"selectedtimeslot-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"selectedTimeSlot")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"selectedoptions-selectedrateoption"},(0,a.kt)("inlineCode",{parentName:"h4"},"selectedOptions")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/objects/selected-rate-option"},(0,a.kt)("inlineCode",{parentName:"a"},"SelectedRateOption")),")"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"where-selectedrateoptionwhereinput"},(0,a.kt)("inlineCode",{parentName:"h5"},"where")," (",(0,a.kt)("a",{parentName:"h5",href:"../../order-view-service/inputs/selected-rate-option-where-input"},(0,a.kt)("inlineCode",{parentName:"a"},"SelectedRateOptionWhereInput")),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"orderby-selectedrateoptionorderbyinput"},(0,a.kt)("inlineCode",{parentName:"h5"},"orderBy")," (",(0,a.kt)("a",{parentName:"h5",href:"../../order-view-service/enums/selected-rate-option-order-by-input"},(0,a.kt)("inlineCode",{parentName:"a"},"SelectedRateOptionOrderByInput")),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"skip-int"},(0,a.kt)("inlineCode",{parentName:"h5"},"skip")," (",(0,a.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"after-string"},(0,a.kt)("inlineCode",{parentName:"h5"},"after")," (",(0,a.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"before-string"},(0,a.kt)("inlineCode",{parentName:"h5"},"before")," (",(0,a.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"first-int"},(0,a.kt)("inlineCode",{parentName:"h5"},"first")," (",(0,a.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"last-int"},(0,a.kt)("inlineCode",{parentName:"h5"},"last")," (",(0,a.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,a.kt)("h3",{id:"interfaces"},"Interfaces"),(0,a.kt)("h4",{id:"node"},(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/interfaces/node"},(0,a.kt)("inlineCode",{parentName:"a"},"Node"))),(0,a.kt)("p",null,"An object with an ID"))}h.isMDXComponent=!0}}]);