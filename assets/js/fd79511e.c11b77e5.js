"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[73257],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return u}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},s=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=l(r),u=n,v=m["".concat(c,".").concat(u)]||m[u]||p[u]||i;return r?a.createElement(v,d(d({ref:t},s),{},{components:r})):a.createElement(v,d({ref:t},s))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,d=new Array(i);d[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,d[1]=o;for(var l=2;l<i;l++)d[l]=r[l];return a.createElement.apply(null,d)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},34334:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return m}});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),d=["components"],o={id:"delivery-date-range",title:"DeliveryDateRange"},c=void 0,l={unversionedId:"rate-manager-service/objects/delivery-date-range",id:"rate-manager-service/objects/delivery-date-range",isDocsHomePage:!1,title:"DeliveryDateRange",description:"No description",source:"@site/docs/rate-manager-service/objects/delivery-date-range.mdx",sourceDirName:"rate-manager-service/objects",slug:"/rate-manager-service/objects/delivery-date-range",permalink:"/docs/rate-manager-service/objects/delivery-date-range",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/docs/rate-manager-service/objects/delivery-date-range.mdx",tags:[],version:"current",frontMatter:{id:"delivery-date-range",title:"DeliveryDateRange"},sidebar:"rateManagerService",previous:{title:"Carrier",permalink:"/docs/rate-manager-service/objects/carrier"},next:{title:"ExternalQuote",permalink:"/docs/rate-manager-service/objects/external-quote"}},s=[{value:"Fields",id:"fields",children:[{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4},{value:"<code>createdAt</code> (DateTime)",id:"createdat-datetime",children:[],level:4},{value:"<code>updatedAt</code> (DateTime)",id:"updatedat-datetime",children:[],level:4},{value:"<code>fromDate</code> (String)",id:"fromdate-string",children:[],level:4},{value:"<code>toDate</code> (String)",id:"todate-string",children:[],level:4},{value:"<code>calendarDate</code> (CalendarDate)",id:"calendardate-calendardate",children:[],level:4}],level:3},{value:"Interfaces",id:"interfaces",children:[{value:"Node",id:"node",children:[],level:4}],level:3}],p={toc:s};function m(e){var t=e.components,r=(0,n.Z)(e,d);return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type DeliveryDateRange implements Node {\n  id: ID!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  fromDate: String!\n  toDate: String!\n  calendarDate: CalendarDate\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"id-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"createdat-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,i.kt)("h4",{id:"updatedat-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,i.kt)("h4",{id:"fromdate-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"fromDate")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"todate-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"toDate")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"calendardate-calendardate"},(0,i.kt)("inlineCode",{parentName:"h4"},"calendarDate")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/objects/calendar-date"},(0,i.kt)("inlineCode",{parentName:"a"},"CalendarDate")),")"),(0,i.kt)("h3",{id:"interfaces"},"Interfaces"),(0,i.kt)("h4",{id:"node"},(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/interfaces/node"},(0,i.kt)("inlineCode",{parentName:"a"},"Node"))),(0,i.kt)("p",null,"An object with an ID"))}m.isMDXComponent=!0}}]);