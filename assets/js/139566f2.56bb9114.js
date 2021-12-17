"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[96403],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return v}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=l(r),v=a,m=u["".concat(c,".").concat(v)]||u[v]||p[v]||i;return r?n.createElement(m,d(d({ref:t},s),{},{components:r})):n.createElement(m,d({ref:t},s))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,d=new Array(i);d[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,d[1]=o;for(var l=2;l<i;l++)d[l]=r[l];return n.createElement.apply(null,d)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},69487:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),d=["components"],o={id:"delivery-date-range",title:"DeliveryDateRange"},c=void 0,l={unversionedId:"order-view-service/objects/delivery-date-range",id:"order-view-service/objects/delivery-date-range",isDocsHomePage:!1,title:"DeliveryDateRange",description:"No description",source:"@site/docs/order-view-service/objects/delivery-date-range.mdx",sourceDirName:"order-view-service/objects",slug:"/order-view-service/objects/delivery-date-range",permalink:"/docs/next/order-view-service/objects/delivery-date-range",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/docs/order-view-service/objects/delivery-date-range.mdx",tags:[],version:"current",frontMatter:{id:"delivery-date-range",title:"DeliveryDateRange"},sidebar:"orderViewSidebar",previous:{title:"Carrier",permalink:"/docs/next/order-view-service/objects/carrier"},next:{title:"ExternalQuote",permalink:"/docs/next/order-view-service/objects/external-quote"}},s=[{value:"Fields",id:"fields",children:[{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4},{value:"<code>createdAt</code> (DateTime)",id:"createdat-datetime",children:[],level:4},{value:"<code>updatedAt</code> (DateTime)",id:"updatedat-datetime",children:[],level:4},{value:"<code>fromDate</code> (String)",id:"fromdate-string",children:[],level:4},{value:"<code>toDate</code> (String)",id:"todate-string",children:[],level:4},{value:"<code>calendarDate</code> (CalendarDate)",id:"calendardate-calendardate",children:[],level:4}],level:3},{value:"Interfaces",id:"interfaces",children:[{value:"Node",id:"node",children:[],level:4}],level:3}],p={toc:s};function u(e){var t=e.components,r=(0,a.Z)(e,d);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type DeliveryDateRange implements Node {\n  id: ID!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  fromDate: String!\n  toDate: String!\n  calendarDate: CalendarDate\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"id-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"createdat-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,i.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,i.kt)("h4",{id:"updatedat-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,i.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,i.kt)("h4",{id:"fromdate-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"fromDate")," (",(0,i.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"todate-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"toDate")," (",(0,i.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"calendardate-calendardate"},(0,i.kt)("inlineCode",{parentName:"h4"},"calendarDate")," (",(0,i.kt)("a",{parentName:"h4",href:"../../order-view-service/objects/calendar-date"},(0,i.kt)("inlineCode",{parentName:"a"},"CalendarDate")),")"),(0,i.kt)("h3",{id:"interfaces"},"Interfaces"),(0,i.kt)("h4",{id:"node"},(0,i.kt)("a",{parentName:"h4",href:"../../order-view-service/interfaces/node"},(0,i.kt)("inlineCode",{parentName:"a"},"Node"))),(0,i.kt)("p",null,"An object with an ID"))}u.isMDXComponent=!0}}]);