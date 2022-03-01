"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[6533],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return h}});var a=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,i=function(e,r){if(null==e)return{};var t,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),p=function(e){var r=a.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):d(d({},r),e)),t},s=function(e){var r=p(e.components);return a.createElement(o.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(t),h=i,k=m["".concat(o,".").concat(h)]||m[h]||c[h]||n;return t?a.createElement(k,d(d({ref:r},s),{},{components:t})):a.createElement(k,d({ref:r},s))}));function h(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var n=t.length,d=new Array(n);d[0]=m;var l={};for(var o in r)hasOwnProperty.call(r,o)&&(l[o]=r[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,d[1]=l;for(var p=2;p<n;p++)d[p]=t[p];return a.createElement.apply(null,d)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4983:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var a=t(7462),i=t(3366),n=(t(7294),t(3905)),d=["components"],l={id:"rmscarrier",title:"RMSCarrier"},o=void 0,p={unversionedId:"order-view-service/objects/rmscarrier",id:"order-view-service/objects/rmscarrier",isDocsHomePage:!1,title:"RMSCarrier",description:"No description",source:"@site/docs/order-view-service/objects/rmscarrier.mdx",sourceDirName:"order-view-service/objects",slug:"/order-view-service/objects/rmscarrier",permalink:"/docs/order-view-service/objects/rmscarrier",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/docs/order-view-service/objects/rmscarrier.mdx",tags:[],version:"current",frontMatter:{id:"rmscarrier",title:"RMSCarrier"},sidebar:"orderViewSidebar",previous:{title:"RMSCalendarDate",permalink:"/docs/order-view-service/objects/rmscalendar-date"},next:{title:"RMSDeliveryDateRange",permalink:"/docs/order-view-service/objects/rmsdelivery-date-range"}},s=[{value:"Fields",id:"fields",children:[{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4},{value:"<code>createdAt</code> (DateTime)",id:"createdat-datetime",children:[],level:4},{value:"<code>updatedAt</code> (DateTime)",id:"updatedat-datetime",children:[],level:4},{value:"<code>carrierCode</code> (String)",id:"carriercode-string",children:[],level:4},{value:"<code>carrierTitle</code> (String)",id:"carriertitle-string",children:[],level:4},{value:"<code>carrierType</code> (String)",id:"carriertype-string",children:[],level:4},{value:"<code>description</code> (String)",id:"description-string",children:[],level:4},{value:"<code>sortOrder</code> (Int)",id:"sortorder-int",children:[],level:4},{value:"<code>dateFormat</code> (String)",id:"dateformat-string",children:[],level:4},{value:"<code>shippingRates</code> (RMSShippingRate)",id:"shippingrates-rmsshippingrate",children:[],level:4},{value:"<code>calendarDate</code> (RMSCalendarDate)",id:"calendardate-rmscalendardate",children:[],level:4},{value:"<code>packages</code> (RMSPackage)",id:"packages-rmspackage",children:[],level:4},{value:"<code>pickupDetail</code> (RMSPickupDetail)",id:"pickupdetail-rmspickupdetail",children:[],level:4},{value:"<code>availableOptions</code> (RMSAvailableOptions)",id:"availableoptions-rmsavailableoptions",children:[],level:4},{value:"<code>error</code> (RMSError)",id:"error-rmserror",children:[],level:4},{value:"<code>rMSShipment</code> (RMSShipment)",id:"rmsshipment-rmsshipment",children:[],level:4}],level:3},{value:"Interfaces",id:"interfaces",children:[{value:"Node",id:"node",children:[],level:4}],level:3}],c={toc:s};function m(e){var r=e.components,t=(0,i.Z)(e,d);return(0,n.kt)("wrapper",(0,a.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"No description"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type RMSCarrier implements Node {\n  id: ID!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  carrierCode: String!\n  carrierTitle: String!\n  carrierType: String!\n  description: String\n  sortOrder: Int\n  dateFormat: String\n  shippingRates(\n    where: RMSShippingRateWhereInput\n    orderBy: RMSShippingRateOrderByInput\n    skip: Int\n    after: String\n    before: String\n    first: Int\n    last: Int\n  ): [RMSShippingRate!]\n  calendarDate: RMSCalendarDate\n  packages(\n    where: RMSPackageWhereInput\n    orderBy: RMSPackageOrderByInput\n    skip: Int\n    after: String\n    before: String\n    first: Int\n    last: Int\n  ): [RMSPackage!]\n  pickupDetail: RMSPickupDetail\n  availableOptions: RMSAvailableOptions\n  error: RMSError\n  rMSShipment: RMSShipment\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"id-id"},(0,n.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,n.kt)("h4",{id:"createdat-datetime"},(0,n.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/date-time"},(0,n.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,n.kt)("h4",{id:"updatedat-datetime"},(0,n.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/date-time"},(0,n.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,n.kt)("h4",{id:"carriercode-string"},(0,n.kt)("inlineCode",{parentName:"h4"},"carrierCode")," (",(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,n.kt)("h4",{id:"carriertitle-string"},(0,n.kt)("inlineCode",{parentName:"h4"},"carrierTitle")," (",(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,n.kt)("h4",{id:"carriertype-string"},(0,n.kt)("inlineCode",{parentName:"h4"},"carrierType")," (",(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,n.kt)("h4",{id:"description-string"},(0,n.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,n.kt)("h4",{id:"sortorder-int"},(0,n.kt)("inlineCode",{parentName:"h4"},"sortOrder")," (",(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,n.kt)("h4",{id:"dateformat-string"},(0,n.kt)("inlineCode",{parentName:"h4"},"dateFormat")," (",(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,n.kt)("h4",{id:"shippingrates-rmsshippingrate"},(0,n.kt)("inlineCode",{parentName:"h4"},"shippingRates")," (",(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/objects/rmsshipping-rate"},(0,n.kt)("inlineCode",{parentName:"a"},"RMSShippingRate")),")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h5",{parentName:"li",id:"where-rmsshippingratewhereinput"},(0,n.kt)("inlineCode",{parentName:"h5"},"where")," (",(0,n.kt)("a",{parentName:"h5",href:"../../order-view-service/inputs/rmsshipping-rate-where-input"},(0,n.kt)("inlineCode",{parentName:"a"},"RMSShippingRateWhereInput")),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h5",{parentName:"li",id:"orderby-rmsshippingrateorderbyinput"},(0,n.kt)("inlineCode",{parentName:"h5"},"orderBy")," (",(0,n.kt)("a",{parentName:"h5",href:"../../order-view-service/enums/rmsshipping-rate-order-by-input"},(0,n.kt)("inlineCode",{parentName:"a"},"RMSShippingRateOrderByInput")),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h5",{parentName:"li",id:"skip-int"},(0,n.kt)("inlineCode",{parentName:"h5"},"skip")," (",(0,n.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int")),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h5",{parentName:"li",id:"after-string"},(0,n.kt)("inlineCode",{parentName:"h5"},"after")," (",(0,n.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String")),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h5",{parentName:"li",id:"before-string"},(0,n.kt)("inlineCode",{parentName:"h5"},"before")," (",(0,n.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String")),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h5",{parentName:"li",id:"first-int"},(0,n.kt)("inlineCode",{parentName:"h5"},"first")," (",(0,n.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int")),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h5",{parentName:"li",id:"last-int"},(0,n.kt)("inlineCode",{parentName:"h5"},"last")," (",(0,n.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,n.kt)("h4",{id:"calendardate-rmscalendardate"},(0,n.kt)("inlineCode",{parentName:"h4"},"calendarDate")," (",(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/objects/rmscalendar-date"},(0,n.kt)("inlineCode",{parentName:"a"},"RMSCalendarDate")),")"),(0,n.kt)("h4",{id:"packages-rmspackage"},(0,n.kt)("inlineCode",{parentName:"h4"},"packages")," (",(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/objects/rmspackage"},(0,n.kt)("inlineCode",{parentName:"a"},"RMSPackage")),")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h5",{parentName:"li",id:"where-rmspackagewhereinput"},(0,n.kt)("inlineCode",{parentName:"h5"},"where")," (",(0,n.kt)("a",{parentName:"h5",href:"../../order-view-service/inputs/rmspackage-where-input"},(0,n.kt)("inlineCode",{parentName:"a"},"RMSPackageWhereInput")),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h5",{parentName:"li",id:"orderby-rmspackageorderbyinput"},(0,n.kt)("inlineCode",{parentName:"h5"},"orderBy")," (",(0,n.kt)("a",{parentName:"h5",href:"../../order-view-service/enums/rmspackage-order-by-input"},(0,n.kt)("inlineCode",{parentName:"a"},"RMSPackageOrderByInput")),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h5",{parentName:"li",id:"skip-int-1"},(0,n.kt)("inlineCode",{parentName:"h5"},"skip")," (",(0,n.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int")),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h5",{parentName:"li",id:"after-string-1"},(0,n.kt)("inlineCode",{parentName:"h5"},"after")," (",(0,n.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String")),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h5",{parentName:"li",id:"before-string-1"},(0,n.kt)("inlineCode",{parentName:"h5"},"before")," (",(0,n.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String")),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h5",{parentName:"li",id:"first-int-1"},(0,n.kt)("inlineCode",{parentName:"h5"},"first")," (",(0,n.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int")),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h5",{parentName:"li",id:"last-int-1"},(0,n.kt)("inlineCode",{parentName:"h5"},"last")," (",(0,n.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,n.kt)("h4",{id:"pickupdetail-rmspickupdetail"},(0,n.kt)("inlineCode",{parentName:"h4"},"pickupDetail")," (",(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/objects/rmspickup-detail"},(0,n.kt)("inlineCode",{parentName:"a"},"RMSPickupDetail")),")"),(0,n.kt)("h4",{id:"availableoptions-rmsavailableoptions"},(0,n.kt)("inlineCode",{parentName:"h4"},"availableOptions")," (",(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/objects/rmsavailable-options"},(0,n.kt)("inlineCode",{parentName:"a"},"RMSAvailableOptions")),")"),(0,n.kt)("h4",{id:"error-rmserror"},(0,n.kt)("inlineCode",{parentName:"h4"},"error")," (",(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/objects/rmserror"},(0,n.kt)("inlineCode",{parentName:"a"},"RMSError")),")"),(0,n.kt)("h4",{id:"rmsshipment-rmsshipment"},(0,n.kt)("inlineCode",{parentName:"h4"},"rMSShipment")," (",(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/objects/rmsshipment"},(0,n.kt)("inlineCode",{parentName:"a"},"RMSShipment")),")"),(0,n.kt)("h3",{id:"interfaces"},"Interfaces"),(0,n.kt)("h4",{id:"node"},(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/interfaces/node"},(0,n.kt)("inlineCode",{parentName:"a"},"Node"))),(0,n.kt)("p",null,"An object with an ID"))}m.isMDXComponent=!0}}]);