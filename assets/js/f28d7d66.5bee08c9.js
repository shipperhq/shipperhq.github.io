"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[5574],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return h}});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),d=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=d(e.components);return a.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=d(t),h=n,v=u["".concat(l,".").concat(h)]||u[h]||s[h]||i;return t?a.createElement(v,o(o({ref:r},p),{},{components:t})):a.createElement(v,o({ref:r},p))}));function h(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=u;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var d=2;d<i;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4811:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var a=t(7462),n=t(3366),i=(t(7294),t(3905)),o=["components"],c={id:"carrier",title:"Carrier"},l=void 0,d={unversionedId:"rate-service/objects/carrier",id:"rate-service/objects/carrier",isDocsHomePage:!1,title:"Carrier",description:"No description",source:"@site/docs/rate-service/objects/carrier.mdx",sourceDirName:"rate-service/objects",slug:"/rate-service/objects/carrier",permalink:"/docs/rate-service/objects/carrier",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/docs/rate-service/objects/carrier.mdx",tags:[],version:"current",frontMatter:{id:"carrier",title:"Carrier"},sidebar:"rateService",previous:{title:"CarrierDetail",permalink:"/docs/rate-service/objects/carrier-detail"},next:{title:"DeliveryDateRange",permalink:"/docs/rate-service/objects/delivery-date-range"}},p=[{value:"Fields",id:"fields",children:[{value:"<code>availableOptions</code> (AvailableOption)",id:"availableoptions-availableoption",children:[],level:4},{value:"<code>calendarDate</code> (CalendarDate)",id:"calendardate-calendardate",children:[],level:4},{value:"<code>carrierDetail</code> (CarrierDetail)",id:"carrierdetail-carrierdetail",children:[],level:4},{value:"<code>dateFormat</code> (String)",id:"dateformat-string",children:[],level:4},{value:"<code>error</code> (Error)",id:"error-error",children:[],level:4},{value:"<code>methods</code> (Method)",id:"methods-method",children:[],level:4},{value:"<code>packages</code> (Package)",id:"packages-package",children:[],level:4},{value:"<code>pickupDetail</code> (PickupDetail)",id:"pickupdetail-pickupdetail",children:[],level:4},{value:"<code>preventRulesApplied</code> (String)",id:"preventrulesapplied-string",children:[],level:4},{value:"<code>sortOrder</code> (Int)",id:"sortorder-int",children:[],level:4}],level:3}],s={toc:p};function u(e){var r=e.components,t=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type Carrier {\n  availableOptions: AvailableOption\n  calendarDate: CalendarDate\n  carrierDetail: CarrierDetail!\n  dateFormat: String\n  error: Error\n  methods: [Method!]!\n  packages: [Package!]!\n  pickupDetail: PickupDetail\n  preventRulesApplied: [String]\n  sortOrder: Int\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"availableoptions-availableoption"},(0,i.kt)("inlineCode",{parentName:"h4"},"availableOptions")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-service/objects/available-option"},(0,i.kt)("inlineCode",{parentName:"a"},"AvailableOption")),")"),(0,i.kt)("h4",{id:"calendardate-calendardate"},(0,i.kt)("inlineCode",{parentName:"h4"},"calendarDate")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-service/objects/calendar-date"},(0,i.kt)("inlineCode",{parentName:"a"},"CalendarDate")),")"),(0,i.kt)("h4",{id:"carrierdetail-carrierdetail"},(0,i.kt)("inlineCode",{parentName:"h4"},"carrierDetail")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-service/objects/carrier-detail"},(0,i.kt)("inlineCode",{parentName:"a"},"CarrierDetail")),")"),(0,i.kt)("h4",{id:"dateformat-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"dateFormat")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"error-error"},(0,i.kt)("inlineCode",{parentName:"h4"},"error")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-service/objects/error"},(0,i.kt)("inlineCode",{parentName:"a"},"Error")),")"),(0,i.kt)("h4",{id:"methods-method"},(0,i.kt)("inlineCode",{parentName:"h4"},"methods")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-service/objects/method"},(0,i.kt)("inlineCode",{parentName:"a"},"Method")),")"),(0,i.kt)("h4",{id:"packages-package"},(0,i.kt)("inlineCode",{parentName:"h4"},"packages")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-service/objects/package"},(0,i.kt)("inlineCode",{parentName:"a"},"Package")),")"),(0,i.kt)("h4",{id:"pickupdetail-pickupdetail"},(0,i.kt)("inlineCode",{parentName:"h4"},"pickupDetail")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-service/objects/pickup-detail"},(0,i.kt)("inlineCode",{parentName:"a"},"PickupDetail")),")"),(0,i.kt)("h4",{id:"preventrulesapplied-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"preventRulesApplied")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"sortorder-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"sortOrder")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-service/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"))}u.isMDXComponent=!0}}]);