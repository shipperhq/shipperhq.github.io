"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[63380],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),m=c(a),h=n,k=m["".concat(o,".").concat(h)]||m[h]||s[h]||i;return a?r.createElement(k,l(l({ref:t},p),{},{components:a})):r.createElement(k,l({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:n,l[1]=d;for(var c=2;c<i;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8956:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return d},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),l=["components"],d={id:"calendar-date",title:"CalendarDate"},o=void 0,c={unversionedId:"rate-manager-service/objects/calendar-date",id:"version-1.0.0/rate-manager-service/objects/calendar-date",isDocsHomePage:!1,title:"CalendarDate",description:"No description",source:"@site/versioned_docs/version-1.0.0/rate-manager-service/objects/calendar-date.mdx",sourceDirName:"rate-manager-service/objects",slug:"/rate-manager-service/objects/calendar-date",permalink:"/docs/rate-manager-service/objects/calendar-date",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/versioned_docs/version-1.0.0/rate-manager-service/objects/calendar-date.mdx",tags:[],version:"1.0.0",frontMatter:{id:"calendar-date",title:"CalendarDate"},sidebar:"version-1.0.0/rateManagerService",previous:{title:"BasicShippingRate",permalink:"/docs/rate-manager-service/objects/basic-shipping-rate"},next:{title:"CarrierDetail",permalink:"/docs/rate-manager-service/objects/carrier-detail"}},p=[{value:"Fields",id:"fields",children:[{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4},{value:"<code>createdAt</code> (DateTime)",id:"createdat-datetime",children:[],level:4},{value:"<code>updatedAt</code> (DateTime)",id:"updatedat-datetime",children:[],level:4},{value:"<code>deliveryDateRanges</code> (DeliveryDateRange)",id:"deliverydateranges-deliverydaterange",children:[],level:4},{value:"<code>availableDeliveryDates</code> (String)",id:"availabledeliverydates-string",children:[],level:4},{value:"<code>timeSlots</code> (TimeSlot)",id:"timeslots-timeslot",children:[],level:4},{value:"<code>carrier</code> (Carrier)",id:"carrier-carrier",children:[],level:4},{value:"<code>pickupLocationDetail</code> (PickupLocationDetail)",id:"pickuplocationdetail-pickuplocationdetail",children:[],level:4}],level:3},{value:"Interfaces",id:"interfaces",children:[{value:"Node",id:"node",children:[],level:4}],level:3}],s={toc:p};function m(e){var t=e.components,a=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type CalendarDate implements Node {\n  id: ID!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  deliveryDateRanges(\n    where: DeliveryDateRangeWhereInput\n    orderBy: DeliveryDateRangeOrderByInput\n    skip: Int\n    after: String\n    before: String\n    first: Int\n    last: Int\n  ): [DeliveryDateRange!]\n  availableDeliveryDates: [String!]!\n  timeSlots(\n    where: TimeSlotWhereInput\n    orderBy: TimeSlotOrderByInput\n    skip: Int\n    after: String\n    before: String\n    first: Int\n    last: Int\n  ): [TimeSlot!]\n  carrier: Carrier\n  pickupLocationDetail: PickupLocationDetail\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"id-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"createdat-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,i.kt)("h4",{id:"updatedat-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,i.kt)("h4",{id:"deliverydateranges-deliverydaterange"},(0,i.kt)("inlineCode",{parentName:"h4"},"deliveryDateRanges")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/objects/delivery-date-range"},(0,i.kt)("inlineCode",{parentName:"a"},"DeliveryDateRange")),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"where-deliverydaterangewhereinput"},(0,i.kt)("inlineCode",{parentName:"h5"},"where")," (",(0,i.kt)("a",{parentName:"h5",href:"../../rate-manager-service/inputs/delivery-date-range-where-input"},(0,i.kt)("inlineCode",{parentName:"a"},"DeliveryDateRangeWhereInput")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"orderby-deliverydaterangeorderbyinput"},(0,i.kt)("inlineCode",{parentName:"h5"},"orderBy")," (",(0,i.kt)("a",{parentName:"h5",href:"../../rate-manager-service/enums/delivery-date-range-order-by-input"},(0,i.kt)("inlineCode",{parentName:"a"},"DeliveryDateRangeOrderByInput")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"skip-int"},(0,i.kt)("inlineCode",{parentName:"h5"},"skip")," (",(0,i.kt)("a",{parentName:"h5",href:"../../rate-manager-service/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"after-string"},(0,i.kt)("inlineCode",{parentName:"h5"},"after")," (",(0,i.kt)("a",{parentName:"h5",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"before-string"},(0,i.kt)("inlineCode",{parentName:"h5"},"before")," (",(0,i.kt)("a",{parentName:"h5",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"first-int"},(0,i.kt)("inlineCode",{parentName:"h5"},"first")," (",(0,i.kt)("a",{parentName:"h5",href:"../../rate-manager-service/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"last-int"},(0,i.kt)("inlineCode",{parentName:"h5"},"last")," (",(0,i.kt)("a",{parentName:"h5",href:"../../rate-manager-service/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,i.kt)("h4",{id:"availabledeliverydates-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"availableDeliveryDates")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"timeslots-timeslot"},(0,i.kt)("inlineCode",{parentName:"h4"},"timeSlots")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/objects/time-slot"},(0,i.kt)("inlineCode",{parentName:"a"},"TimeSlot")),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"where-timeslotwhereinput"},(0,i.kt)("inlineCode",{parentName:"h5"},"where")," (",(0,i.kt)("a",{parentName:"h5",href:"../../rate-manager-service/inputs/time-slot-where-input"},(0,i.kt)("inlineCode",{parentName:"a"},"TimeSlotWhereInput")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"orderby-timeslotorderbyinput"},(0,i.kt)("inlineCode",{parentName:"h5"},"orderBy")," (",(0,i.kt)("a",{parentName:"h5",href:"../../rate-manager-service/enums/time-slot-order-by-input"},(0,i.kt)("inlineCode",{parentName:"a"},"TimeSlotOrderByInput")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"skip-int-1"},(0,i.kt)("inlineCode",{parentName:"h5"},"skip")," (",(0,i.kt)("a",{parentName:"h5",href:"../../rate-manager-service/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"after-string-1"},(0,i.kt)("inlineCode",{parentName:"h5"},"after")," (",(0,i.kt)("a",{parentName:"h5",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"before-string-1"},(0,i.kt)("inlineCode",{parentName:"h5"},"before")," (",(0,i.kt)("a",{parentName:"h5",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"first-int-1"},(0,i.kt)("inlineCode",{parentName:"h5"},"first")," (",(0,i.kt)("a",{parentName:"h5",href:"../../rate-manager-service/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"last-int-1"},(0,i.kt)("inlineCode",{parentName:"h5"},"last")," (",(0,i.kt)("a",{parentName:"h5",href:"../../rate-manager-service/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,i.kt)("h4",{id:"carrier-carrier"},(0,i.kt)("inlineCode",{parentName:"h4"},"carrier")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/objects/carrier"},(0,i.kt)("inlineCode",{parentName:"a"},"Carrier")),")"),(0,i.kt)("h4",{id:"pickuplocationdetail-pickuplocationdetail"},(0,i.kt)("inlineCode",{parentName:"h4"},"pickupLocationDetail")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/objects/pickup-location-detail"},(0,i.kt)("inlineCode",{parentName:"a"},"PickupLocationDetail")),")"),(0,i.kt)("h3",{id:"interfaces"},"Interfaces"),(0,i.kt)("h4",{id:"node"},(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/interfaces/node"},(0,i.kt)("inlineCode",{parentName:"a"},"Node"))),(0,i.kt)("p",null,"An object with an ID"))}m.isMDXComponent=!0}}]);