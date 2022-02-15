"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[59323],{3905:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return h}});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=a.createContext({}),l=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=l(e.components);return a.createElement(p.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(t),h=n,u=m["".concat(p,".").concat(h)]||m[h]||c[h]||i;return t?a.createElement(u,o(o({ref:r},d),{},{components:t})):a.createElement(u,o({ref:r},d))}));function h(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},91911:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return d},default:function(){return m}});var a=t(87462),n=t(63366),i=(t(67294),t(3905)),o=["components"],s={id:"stored-basic-shipping-quote",title:"StoredBasicShippingQuote"},p=void 0,l={unversionedId:"rate-manager-service/objects/stored-basic-shipping-quote",id:"version-1.0.0/rate-manager-service/objects/stored-basic-shipping-quote",isDocsHomePage:!1,title:"StoredBasicShippingQuote",description:"No description",source:"@site/versioned_docs/version-1.0.0/rate-manager-service/objects/stored-basic-shipping-quote.mdx",sourceDirName:"rate-manager-service/objects",slug:"/rate-manager-service/objects/stored-basic-shipping-quote",permalink:"/docs/1.0.0/rate-manager-service/objects/stored-basic-shipping-quote",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/versioned_docs/version-1.0.0/rate-manager-service/objects/stored-basic-shipping-quote.mdx",tags:[],version:"1.0.0",frontMatter:{id:"stored-basic-shipping-quote",title:"StoredBasicShippingQuote"},sidebar:"version-1.0.0/rateManagerService",previous:{title:"Shipment",permalink:"/docs/1.0.0/rate-manager-service/objects/shipment"},next:{title:"StoredRMSCart",permalink:"/docs/1.0.0/rate-manager-service/objects/stored-rmscart"}},d=[{value:"Fields",id:"fields",children:[{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4},{value:"<code>createdAt</code> (DateTime)",id:"createdat-datetime",children:[],level:4},{value:"<code>updatedAt</code> (DateTime)",id:"updatedat-datetime",children:[],level:4},{value:"<code>apiKey</code> (String)",id:"apikey-string",children:[],level:4},{value:"<code>session</code> (String)",id:"session-string",children:[],level:4},{value:"<code>transactionId</code> (String)",id:"transactionid-string",children:[],level:4},{value:"<code>carriers</code> (RatingCarrier)",id:"carriers-ratingcarrier",children:[],level:4},{value:"<code>errors</code> (RMSError)",id:"errors-rmserror",children:[],level:4}],level:3},{value:"Interfaces",id:"interfaces",children:[{value:"Node",id:"node",children:[],level:4}],level:3}],c={toc:d};function m(e){var r=e.components,t=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type StoredBasicShippingQuote implements Node {\n  id: ID!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  apiKey: String!\n  session: String!\n  transactionId: String!\n  carriers(\n    where: RatingCarrierWhereInput\n    orderBy: RatingCarrierOrderByInput\n    skip: Int\n    after: String\n    before: String\n    first: Int\n    last: Int\n  ): [RatingCarrier!]\n  errors(\n    where: RMSErrorWhereInput\n    orderBy: RMSErrorOrderByInput\n    skip: Int\n    after: String\n    before: String\n    first: Int\n    last: Int\n  ): [RMSError!]\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"id-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"createdat-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,i.kt)("h4",{id:"updatedat-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,i.kt)("h4",{id:"apikey-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"apiKey")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"session-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"session")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"transactionid-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"transactionId")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"carriers-ratingcarrier"},(0,i.kt)("inlineCode",{parentName:"h4"},"carriers")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/objects/rating-carrier"},(0,i.kt)("inlineCode",{parentName:"a"},"RatingCarrier")),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"where-ratingcarrierwhereinput"},(0,i.kt)("inlineCode",{parentName:"h5"},"where")," (",(0,i.kt)("a",{parentName:"h5",href:"../../rate-manager-service/inputs/rating-carrier-where-input"},(0,i.kt)("inlineCode",{parentName:"a"},"RatingCarrierWhereInput")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"orderby-ratingcarrierorderbyinput"},(0,i.kt)("inlineCode",{parentName:"h5"},"orderBy")," (",(0,i.kt)("a",{parentName:"h5",href:"../../rate-manager-service/enums/rating-carrier-order-by-input"},(0,i.kt)("inlineCode",{parentName:"a"},"RatingCarrierOrderByInput")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"skip-int"},(0,i.kt)("inlineCode",{parentName:"h5"},"skip")," (",(0,i.kt)("a",{parentName:"h5",href:"../../rate-manager-service/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"after-string"},(0,i.kt)("inlineCode",{parentName:"h5"},"after")," (",(0,i.kt)("a",{parentName:"h5",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"before-string"},(0,i.kt)("inlineCode",{parentName:"h5"},"before")," (",(0,i.kt)("a",{parentName:"h5",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"first-int"},(0,i.kt)("inlineCode",{parentName:"h5"},"first")," (",(0,i.kt)("a",{parentName:"h5",href:"../../rate-manager-service/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"last-int"},(0,i.kt)("inlineCode",{parentName:"h5"},"last")," (",(0,i.kt)("a",{parentName:"h5",href:"../../rate-manager-service/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,i.kt)("h4",{id:"errors-rmserror"},(0,i.kt)("inlineCode",{parentName:"h4"},"errors")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/objects/rmserror"},(0,i.kt)("inlineCode",{parentName:"a"},"RMSError")),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"where-rmserrorwhereinput"},(0,i.kt)("inlineCode",{parentName:"h5"},"where")," (",(0,i.kt)("a",{parentName:"h5",href:"../../rate-manager-service/inputs/rmserror-where-input"},(0,i.kt)("inlineCode",{parentName:"a"},"RMSErrorWhereInput")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"orderby-rmserrororderbyinput"},(0,i.kt)("inlineCode",{parentName:"h5"},"orderBy")," (",(0,i.kt)("a",{parentName:"h5",href:"../../rate-manager-service/enums/rmserror-order-by-input"},(0,i.kt)("inlineCode",{parentName:"a"},"RMSErrorOrderByInput")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"skip-int-1"},(0,i.kt)("inlineCode",{parentName:"h5"},"skip")," (",(0,i.kt)("a",{parentName:"h5",href:"../../rate-manager-service/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"after-string-1"},(0,i.kt)("inlineCode",{parentName:"h5"},"after")," (",(0,i.kt)("a",{parentName:"h5",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"before-string-1"},(0,i.kt)("inlineCode",{parentName:"h5"},"before")," (",(0,i.kt)("a",{parentName:"h5",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"first-int-1"},(0,i.kt)("inlineCode",{parentName:"h5"},"first")," (",(0,i.kt)("a",{parentName:"h5",href:"../../rate-manager-service/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"last-int-1"},(0,i.kt)("inlineCode",{parentName:"h5"},"last")," (",(0,i.kt)("a",{parentName:"h5",href:"../../rate-manager-service/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,i.kt)("h3",{id:"interfaces"},"Interfaces"),(0,i.kt)("h4",{id:"node"},(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/interfaces/node"},(0,i.kt)("inlineCode",{parentName:"a"},"Node"))),(0,i.kt)("p",null,"An object with an ID"))}m.isMDXComponent=!0}}]);