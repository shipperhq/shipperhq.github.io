"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[81729],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return h}});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),m=p(t),h=i,u=m["".concat(s,".").concat(h)]||m[h]||c[h]||a;return t?n.createElement(u,o(o({ref:r},l),{},{components:t})):n.createElement(u,o({ref:r},l))}));function h(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var d={};for(var s in r)hasOwnProperty.call(r,s)&&(d[s]=r[s]);d.originalType=e,d.mdxType="string"==typeof e?e:i,o[1]=d;for(var p=2;p<a;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},29795:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return d},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return m}});var n=t(87462),i=t(63366),a=(t(67294),t(3905)),o=["components"],d={id:"stored-basic-shipping-quote",title:"StoredBasicShippingQuote"},s=void 0,p={unversionedId:"order-view-service/objects/stored-basic-shipping-quote",id:"version-1.0.0/order-view-service/objects/stored-basic-shipping-quote",isDocsHomePage:!1,title:"StoredBasicShippingQuote",description:"No description",source:"@site/versioned_docs/version-1.0.0/order-view-service/objects/stored-basic-shipping-quote.mdx",sourceDirName:"order-view-service/objects",slug:"/order-view-service/objects/stored-basic-shipping-quote",permalink:"/docs/order-view-service/objects/stored-basic-shipping-quote",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/versioned_docs/version-1.0.0/order-view-service/objects/stored-basic-shipping-quote.mdx",tags:[],version:"1.0.0",frontMatter:{id:"stored-basic-shipping-quote",title:"StoredBasicShippingQuote"},sidebar:"version-1.0.0/orderViewSidebar",previous:{title:"Shipment",permalink:"/docs/order-view-service/objects/shipment"},next:{title:"StoredRMSCart",permalink:"/docs/order-view-service/objects/stored-rmscart"}},l=[{value:"Fields",id:"fields",children:[{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4},{value:"<code>createdAt</code> (DateTime)",id:"createdat-datetime",children:[],level:4},{value:"<code>updatedAt</code> (DateTime)",id:"updatedat-datetime",children:[],level:4},{value:"<code>apiKey</code> (String)",id:"apikey-string",children:[],level:4},{value:"<code>session</code> (String)",id:"session-string",children:[],level:4},{value:"<code>transactionId</code> (String)",id:"transactionid-string",children:[],level:4},{value:"<code>carriers</code> (RatingCarrier)",id:"carriers-ratingcarrier",children:[],level:4},{value:"<code>errors</code> (RMSError)",id:"errors-rmserror",children:[],level:4}],level:3},{value:"Interfaces",id:"interfaces",children:[{value:"Node",id:"node",children:[],level:4}],level:3}],c={toc:l};function m(e){var r=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type StoredBasicShippingQuote implements Node {\n  id: ID!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  apiKey: String!\n  session: String!\n  transactionId: String!\n  carriers(\n    where: RatingCarrierWhereInput\n    orderBy: RatingCarrierOrderByInput\n    skip: Int\n    after: String\n    before: String\n    first: Int\n    last: Int\n  ): [RatingCarrier!]\n  errors(\n    where: RMSErrorWhereInput\n    orderBy: RMSErrorOrderByInput\n    skip: Int\n    after: String\n    before: String\n    first: Int\n    last: Int\n  ): [RMSError!]\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"id-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"createdat-datetime"},(0,a.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/date-time"},(0,a.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,a.kt)("h4",{id:"updatedat-datetime"},(0,a.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/date-time"},(0,a.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,a.kt)("h4",{id:"apikey-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"apiKey")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"session-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"session")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"transactionid-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"transactionId")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"carriers-ratingcarrier"},(0,a.kt)("inlineCode",{parentName:"h4"},"carriers")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/objects/rating-carrier"},(0,a.kt)("inlineCode",{parentName:"a"},"RatingCarrier")),")"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"where-ratingcarrierwhereinput"},(0,a.kt)("inlineCode",{parentName:"h5"},"where")," (",(0,a.kt)("a",{parentName:"h5",href:"../../order-view-service/inputs/rating-carrier-where-input"},(0,a.kt)("inlineCode",{parentName:"a"},"RatingCarrierWhereInput")),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"orderby-ratingcarrierorderbyinput"},(0,a.kt)("inlineCode",{parentName:"h5"},"orderBy")," (",(0,a.kt)("a",{parentName:"h5",href:"../../order-view-service/enums/rating-carrier-order-by-input"},(0,a.kt)("inlineCode",{parentName:"a"},"RatingCarrierOrderByInput")),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"skip-int"},(0,a.kt)("inlineCode",{parentName:"h5"},"skip")," (",(0,a.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"after-string"},(0,a.kt)("inlineCode",{parentName:"h5"},"after")," (",(0,a.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"before-string"},(0,a.kt)("inlineCode",{parentName:"h5"},"before")," (",(0,a.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"first-int"},(0,a.kt)("inlineCode",{parentName:"h5"},"first")," (",(0,a.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"last-int"},(0,a.kt)("inlineCode",{parentName:"h5"},"last")," (",(0,a.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,a.kt)("h4",{id:"errors-rmserror"},(0,a.kt)("inlineCode",{parentName:"h4"},"errors")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/objects/rmserror"},(0,a.kt)("inlineCode",{parentName:"a"},"RMSError")),")"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"where-rmserrorwhereinput"},(0,a.kt)("inlineCode",{parentName:"h5"},"where")," (",(0,a.kt)("a",{parentName:"h5",href:"../../order-view-service/inputs/rmserror-where-input"},(0,a.kt)("inlineCode",{parentName:"a"},"RMSErrorWhereInput")),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"orderby-rmserrororderbyinput"},(0,a.kt)("inlineCode",{parentName:"h5"},"orderBy")," (",(0,a.kt)("a",{parentName:"h5",href:"../../order-view-service/enums/rmserror-order-by-input"},(0,a.kt)("inlineCode",{parentName:"a"},"RMSErrorOrderByInput")),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"skip-int-1"},(0,a.kt)("inlineCode",{parentName:"h5"},"skip")," (",(0,a.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"after-string-1"},(0,a.kt)("inlineCode",{parentName:"h5"},"after")," (",(0,a.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"before-string-1"},(0,a.kt)("inlineCode",{parentName:"h5"},"before")," (",(0,a.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"first-int-1"},(0,a.kt)("inlineCode",{parentName:"h5"},"first")," (",(0,a.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"last-int-1"},(0,a.kt)("inlineCode",{parentName:"h5"},"last")," (",(0,a.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,a.kt)("h3",{id:"interfaces"},"Interfaces"),(0,a.kt)("h4",{id:"node"},(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/interfaces/node"},(0,a.kt)("inlineCode",{parentName:"a"},"Node"))),(0,a.kt)("p",null,"An object with an ID"))}m.isMDXComponent=!0}}]);