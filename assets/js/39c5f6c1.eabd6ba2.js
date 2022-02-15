"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[5190],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return h}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):d(d({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(t),h=a,u=m["".concat(l,".").concat(h)]||m[h]||p[h]||i;return t?n.createElement(u,d(d({ref:r},s),{},{components:t})):n.createElement(u,d({ref:r},s))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,d=new Array(i);d[0]=m;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,d[1]=o;for(var c=2;c<i;c++)d[c]=t[c];return n.createElement.apply(null,d)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},71235:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var n=t(87462),a=t(63366),i=(t(67294),t(3905)),d=["components"],o={id:"order",title:"Order"},l=void 0,c={unversionedId:"rate-manager-service/objects/order",id:"version-1.0.0/rate-manager-service/objects/order",isDocsHomePage:!1,title:"Order",description:"No description",source:"@site/versioned_docs/version-1.0.0/rate-manager-service/objects/order.mdx",sourceDirName:"rate-manager-service/objects",slug:"/rate-manager-service/objects/order",permalink:"/docs/1.0.0/rate-manager-service/objects/order",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/versioned_docs/version-1.0.0/rate-manager-service/objects/order.mdx",tags:[],version:"1.0.0",frontMatter:{id:"order",title:"Order"},sidebar:"version-1.0.0/rateManagerService",previous:{title:"OrderDetail",permalink:"/docs/1.0.0/rate-manager-service/objects/order-detail"},next:{title:"PackageDetail",permalink:"/docs/1.0.0/rate-manager-service/objects/package-detail"}},s=[{value:"Fields",id:"fields",children:[{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4},{value:"<code>orderNumber</code> (String)",id:"ordernumber-string",children:[],level:4},{value:"<code>orderNumberText</code> (String)",id:"ordernumbertext-string",children:[],level:4},{value:"<code>apiKey</code> (String)",id:"apikey-string",children:[],level:4},{value:"<code>createdAt</code> (DateTime)",id:"createdat-datetime",children:[],level:4},{value:"<code>updatedAt</code> (DateTime)",id:"updatedat-datetime",children:[],level:4},{value:"<code>isActive</code> (Boolean)",id:"isactive-boolean",children:[],level:4},{value:"<code>orderDetail</code> (OrderDetail)",id:"orderdetail-orderdetail",children:[],level:4},{value:"<code>shipments</code> (Shipment)",id:"shipments-shipment",children:[],level:4},{value:"<code>recipient</code> (Address)",id:"recipient-address",children:[],level:4}],level:3},{value:"Interfaces",id:"interfaces",children:[{value:"Node",id:"node",children:[],level:4}],level:3}],p={toc:s};function m(e){var r=e.components,t=(0,a.Z)(e,d);return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type Order implements Node {\n  id: ID!\n  orderNumber: String!\n  orderNumberText: String\n  apiKey: String!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  isActive: Boolean!\n  orderDetail: OrderDetail!\n  shipments(\n    where: ShipmentWhereInput\n    orderBy: ShipmentOrderByInput\n    skip: Int\n    after: String\n    before: String\n    first: Int\n    last: Int\n  ): [Shipment!]\n  recipient: Address\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"id-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"ordernumber-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"orderNumber")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"ordernumbertext-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"orderNumberText")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"apikey-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"apiKey")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"createdat-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,i.kt)("h4",{id:"updatedat-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,i.kt)("h4",{id:"isactive-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"isActive")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"orderdetail-orderdetail"},(0,i.kt)("inlineCode",{parentName:"h4"},"orderDetail")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/objects/order-detail"},(0,i.kt)("inlineCode",{parentName:"a"},"OrderDetail")),")"),(0,i.kt)("h4",{id:"shipments-shipment"},(0,i.kt)("inlineCode",{parentName:"h4"},"shipments")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/objects/shipment"},(0,i.kt)("inlineCode",{parentName:"a"},"Shipment")),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"where-shipmentwhereinput"},(0,i.kt)("inlineCode",{parentName:"h5"},"where")," (",(0,i.kt)("a",{parentName:"h5",href:"../../rate-manager-service/inputs/shipment-where-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ShipmentWhereInput")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"orderby-shipmentorderbyinput"},(0,i.kt)("inlineCode",{parentName:"h5"},"orderBy")," (",(0,i.kt)("a",{parentName:"h5",href:"../../rate-manager-service/enums/shipment-order-by-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ShipmentOrderByInput")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"skip-int"},(0,i.kt)("inlineCode",{parentName:"h5"},"skip")," (",(0,i.kt)("a",{parentName:"h5",href:"../../rate-manager-service/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"after-string"},(0,i.kt)("inlineCode",{parentName:"h5"},"after")," (",(0,i.kt)("a",{parentName:"h5",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"before-string"},(0,i.kt)("inlineCode",{parentName:"h5"},"before")," (",(0,i.kt)("a",{parentName:"h5",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"first-int"},(0,i.kt)("inlineCode",{parentName:"h5"},"first")," (",(0,i.kt)("a",{parentName:"h5",href:"../../rate-manager-service/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"last-int"},(0,i.kt)("inlineCode",{parentName:"h5"},"last")," (",(0,i.kt)("a",{parentName:"h5",href:"../../rate-manager-service/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,i.kt)("h4",{id:"recipient-address"},(0,i.kt)("inlineCode",{parentName:"h4"},"recipient")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/objects/address"},(0,i.kt)("inlineCode",{parentName:"a"},"Address")),")"),(0,i.kt)("h3",{id:"interfaces"},"Interfaces"),(0,i.kt)("h4",{id:"node"},(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/interfaces/node"},(0,i.kt)("inlineCode",{parentName:"a"},"Node"))),(0,i.kt)("p",null,"An object with an ID"))}m.isMDXComponent=!0}}]);