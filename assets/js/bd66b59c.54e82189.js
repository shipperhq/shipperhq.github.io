"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[3721],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return v}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(r),v=a,m=u["".concat(c,".").concat(v)]||u[v]||p[v]||i;return r?n.createElement(m,o(o({ref:t},d),{},{components:r})):n.createElement(m,o({ref:t},d))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9663:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={id:"calendar-date",title:"CalendarDate"},c=void 0,s={unversionedId:"rate-service/objects/calendar-date",id:"rate-service/objects/calendar-date",isDocsHomePage:!1,title:"CalendarDate",description:"No description",source:"@site/docs/rate-service/objects/calendar-date.mdx",sourceDirName:"rate-service/objects",slug:"/rate-service/objects/calendar-date",permalink:"/docs/rate-service/objects/calendar-date",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/docs/rate-service/objects/calendar-date.mdx",tags:[],version:"current",frontMatter:{id:"calendar-date",title:"CalendarDate"},sidebar:"rateService",previous:{title:"BasicShippingRate",permalink:"/docs/rate-service/objects/basic-shipping-rate"},next:{title:"CarrierDetail",permalink:"/docs/rate-service/objects/carrier-detail"}},d=[{value:"Fields",id:"fields",children:[{value:"<code>availableDeliveryDates</code> (String)",id:"availabledeliverydates-string",children:[],level:4},{value:"<code>deliveryDateRanges</code> (DeliveryDateRange)",id:"deliverydateranges-deliverydaterange",children:[],level:4},{value:"<code>timeSlots</code> (TimeSlot)",id:"timeslots-timeslot",children:[],level:4}],level:3}],p={toc:d};function u(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type CalendarDate {\n  availableDeliveryDates: [String!]\n  deliveryDateRanges: [DeliveryDateRange!]!\n  timeSlots: [TimeSlot!]!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"availabledeliverydates-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"availableDeliveryDates")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"deliverydateranges-deliverydaterange"},(0,i.kt)("inlineCode",{parentName:"h4"},"deliveryDateRanges")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-service/objects/delivery-date-range"},(0,i.kt)("inlineCode",{parentName:"a"},"DeliveryDateRange")),")"),(0,i.kt)("h4",{id:"timeslots-timeslot"},(0,i.kt)("inlineCode",{parentName:"h4"},"timeSlots")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-service/objects/time-slot"},(0,i.kt)("inlineCode",{parentName:"a"},"TimeSlot")),")"))}u.isMDXComponent=!0}}]);