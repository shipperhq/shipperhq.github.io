"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[88181],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return h}});var a=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,a,i=function(e,r){if(null==e)return{};var t,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),s=function(e){var r=a.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=s(e.components);return a.createElement(o.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),m=s(t),h=i,v=m["".concat(o,".").concat(h)]||m[h]||p[h]||n;return t?a.createElement(v,l(l({ref:r},c),{},{components:t})):a.createElement(v,l({ref:r},c))}));function h(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var n=t.length,l=new Array(n);l[0]=m;var d={};for(var o in r)hasOwnProperty.call(r,o)&&(d[o]=r[o]);d.originalType=e,d.mdxType="string"==typeof e?e:i,l[1]=d;for(var s=2;s<n;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5098:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return d},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var a=t(87462),i=t(63366),n=(t(67294),t(3905)),l=["components"],d={id:"rmscalendar-date",title:"RMSCalendarDate"},o=void 0,s={unversionedId:"order-view-service/objects/rmscalendar-date",id:"order-view-service/objects/rmscalendar-date",isDocsHomePage:!1,title:"RMSCalendarDate",description:"No description",source:"@site/docs/order-view-service/objects/rmscalendar-date.mdx",sourceDirName:"order-view-service/objects",slug:"/order-view-service/objects/rmscalendar-date",permalink:"/docs/order-view-service/objects/rmscalendar-date",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/docs/order-view-service/objects/rmscalendar-date.mdx",tags:[],version:"current",frontMatter:{id:"rmscalendar-date",title:"RMSCalendarDate"},sidebar:"orderViewSidebar",previous:{title:"RMSBoxedItem",permalink:"/docs/order-view-service/objects/rmsboxed-item"},next:{title:"RMSCarrier",permalink:"/docs/order-view-service/objects/rmscarrier"}},c=[{value:"Fields",id:"fields",children:[{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4},{value:"<code>createdAt</code> (DateTime)",id:"createdat-datetime",children:[],level:4},{value:"<code>updatedAt</code> (DateTime)",id:"updatedat-datetime",children:[],level:4},{value:"<code>deliveryDateRanges</code> (RMSDeliveryDateRange)",id:"deliverydateranges-rmsdeliverydaterange",children:[],level:4},{value:"<code>availableDeliveryDates</code> (String)",id:"availabledeliverydates-string",children:[],level:4},{value:"<code>timeSlots</code> (RMSTimeSlot)",id:"timeslots-rmstimeslot",children:[],level:4},{value:"<code>rMSCarrier</code> (RMSCarrier)",id:"rmscarrier-rmscarrier",children:[],level:4},{value:"<code>rMSPickupLocationDetail</code> (RMSPickupLocationDetail)",id:"rmspickuplocationdetail-rmspickuplocationdetail",children:[],level:4}],level:3},{value:"Interfaces",id:"interfaces",children:[{value:"Node",id:"node",children:[],level:4}],level:3}],p={toc:c};function m(e){var r=e.components,t=(0,i.Z)(e,l);return(0,n.kt)("wrapper",(0,a.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"No description"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type RMSCalendarDate implements Node {\n  id: ID!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  deliveryDateRanges(\n    where: RMSDeliveryDateRangeWhereInput\n    orderBy: RMSDeliveryDateRangeOrderByInput\n    skip: Int\n    after: String\n    before: String\n    first: Int\n    last: Int\n  ): [RMSDeliveryDateRange!]\n  availableDeliveryDates: [String!]!\n  timeSlots(\n    where: RMSTimeSlotWhereInput\n    orderBy: RMSTimeSlotOrderByInput\n    skip: Int\n    after: String\n    before: String\n    first: Int\n    last: Int\n  ): [RMSTimeSlot!]\n  rMSCarrier: RMSCarrier\n  rMSPickupLocationDetail: RMSPickupLocationDetail\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"id-id"},(0,n.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,n.kt)("h4",{id:"createdat-datetime"},(0,n.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/date-time"},(0,n.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,n.kt)("h4",{id:"updatedat-datetime"},(0,n.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/date-time"},(0,n.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,n.kt)("h4",{id:"deliverydateranges-rmsdeliverydaterange"},(0,n.kt)("inlineCode",{parentName:"h4"},"deliveryDateRanges")," (",(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/objects/rmsdelivery-date-range"},(0,n.kt)("inlineCode",{parentName:"a"},"RMSDeliveryDateRange")),")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h5",{parentName:"li",id:"where-rmsdeliverydaterangewhereinput"},(0,n.kt)("inlineCode",{parentName:"h5"},"where")," (",(0,n.kt)("a",{parentName:"h5",href:"../../order-view-service/inputs/rmsdelivery-date-range-where-input"},(0,n.kt)("inlineCode",{parentName:"a"},"RMSDeliveryDateRangeWhereInput")),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h5",{parentName:"li",id:"orderby-rmsdeliverydaterangeorderbyinput"},(0,n.kt)("inlineCode",{parentName:"h5"},"orderBy")," (",(0,n.kt)("a",{parentName:"h5",href:"../../order-view-service/enums/rmsdelivery-date-range-order-by-input"},(0,n.kt)("inlineCode",{parentName:"a"},"RMSDeliveryDateRangeOrderByInput")),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h5",{parentName:"li",id:"skip-int"},(0,n.kt)("inlineCode",{parentName:"h5"},"skip")," (",(0,n.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int")),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h5",{parentName:"li",id:"after-string"},(0,n.kt)("inlineCode",{parentName:"h5"},"after")," (",(0,n.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String")),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h5",{parentName:"li",id:"before-string"},(0,n.kt)("inlineCode",{parentName:"h5"},"before")," (",(0,n.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String")),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h5",{parentName:"li",id:"first-int"},(0,n.kt)("inlineCode",{parentName:"h5"},"first")," (",(0,n.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int")),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h5",{parentName:"li",id:"last-int"},(0,n.kt)("inlineCode",{parentName:"h5"},"last")," (",(0,n.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,n.kt)("h4",{id:"availabledeliverydates-string"},(0,n.kt)("inlineCode",{parentName:"h4"},"availableDeliveryDates")," (",(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,n.kt)("h4",{id:"timeslots-rmstimeslot"},(0,n.kt)("inlineCode",{parentName:"h4"},"timeSlots")," (",(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/objects/rmstime-slot"},(0,n.kt)("inlineCode",{parentName:"a"},"RMSTimeSlot")),")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h5",{parentName:"li",id:"where-rmstimeslotwhereinput"},(0,n.kt)("inlineCode",{parentName:"h5"},"where")," (",(0,n.kt)("a",{parentName:"h5",href:"../../order-view-service/inputs/rmstime-slot-where-input"},(0,n.kt)("inlineCode",{parentName:"a"},"RMSTimeSlotWhereInput")),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h5",{parentName:"li",id:"orderby-rmstimeslotorderbyinput"},(0,n.kt)("inlineCode",{parentName:"h5"},"orderBy")," (",(0,n.kt)("a",{parentName:"h5",href:"../../order-view-service/enums/rmstime-slot-order-by-input"},(0,n.kt)("inlineCode",{parentName:"a"},"RMSTimeSlotOrderByInput")),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h5",{parentName:"li",id:"skip-int-1"},(0,n.kt)("inlineCode",{parentName:"h5"},"skip")," (",(0,n.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int")),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h5",{parentName:"li",id:"after-string-1"},(0,n.kt)("inlineCode",{parentName:"h5"},"after")," (",(0,n.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String")),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h5",{parentName:"li",id:"before-string-1"},(0,n.kt)("inlineCode",{parentName:"h5"},"before")," (",(0,n.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String")),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h5",{parentName:"li",id:"first-int-1"},(0,n.kt)("inlineCode",{parentName:"h5"},"first")," (",(0,n.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int")),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h5",{parentName:"li",id:"last-int-1"},(0,n.kt)("inlineCode",{parentName:"h5"},"last")," (",(0,n.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,n.kt)("h4",{id:"rmscarrier-rmscarrier"},(0,n.kt)("inlineCode",{parentName:"h4"},"rMSCarrier")," (",(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/objects/rmscarrier"},(0,n.kt)("inlineCode",{parentName:"a"},"RMSCarrier")),")"),(0,n.kt)("h4",{id:"rmspickuplocationdetail-rmspickuplocationdetail"},(0,n.kt)("inlineCode",{parentName:"h4"},"rMSPickupLocationDetail")," (",(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/objects/rmspickup-location-detail"},(0,n.kt)("inlineCode",{parentName:"a"},"RMSPickupLocationDetail")),")"),(0,n.kt)("h3",{id:"interfaces"},"Interfaces"),(0,n.kt)("h4",{id:"node"},(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/interfaces/node"},(0,n.kt)("inlineCode",{parentName:"a"},"Node"))),(0,n.kt)("p",null,"An object with an ID"))}m.isMDXComponent=!0}}]);