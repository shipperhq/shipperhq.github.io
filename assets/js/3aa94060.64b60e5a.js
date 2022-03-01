"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[9030],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return m}});var i=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,i,n=function(e,r){if(null==e)return{};var t,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=i.createContext({}),l=function(e){var r=i.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=l(e.components);return i.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},h=i.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),h=l(t),m=n,u=h["".concat(c,".").concat(m)]||h[m]||p[m]||a;return t?i.createElement(u,o(o({ref:r},s),{},{components:t})):i.createElement(u,o({ref:r},s))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,o=new Array(a);o[0]=h;var d={};for(var c in r)hasOwnProperty.call(r,c)&&(d[c]=r[c]);d.originalType=e,d.mdxType="string"==typeof e?e:n,o[1]=d;for(var l=2;l<a;l++)o[l]=t[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},6362:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return d},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return h}});var i=t(7462),n=t(3366),a=(t(7294),t(3905)),o=["components"],d={id:"order-detail",title:"OrderDetail"},c=void 0,l={unversionedId:"order-view-service/objects/order-detail",id:"order-view-service/objects/order-detail",isDocsHomePage:!1,title:"OrderDetail",description:"No description",source:"@site/docs/order-view-service/objects/order-detail.mdx",sourceDirName:"order-view-service/objects",slug:"/order-view-service/objects/order-detail",permalink:"/docs/order-view-service/objects/order-detail",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/docs/order-view-service/objects/order-detail.mdx",tags:[],version:"current",frontMatter:{id:"order-detail",title:"OrderDetail"},sidebar:"orderViewSidebar",previous:{title:"Option",permalink:"/docs/order-view-service/objects/option"},next:{title:"Order",permalink:"/docs/order-view-service/objects/order"}},s=[{value:"Fields",id:"fields",children:[{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4},{value:"<code>createdAt</code> (DateTime)",id:"createdat-datetime",children:[],level:4},{value:"<code>updatedAt</code> (DateTime)",id:"updatedat-datetime",children:[],level:4},{value:"<code>carrierCode</code> (String)",id:"carriercode-string",children:[],level:4},{value:"<code>carrierTitle</code> (String)",id:"carriertitle-string",children:[],level:4},{value:"<code>methodCode</code> (String)",id:"methodcode-string",children:[],level:4},{value:"<code>methodTitle</code> (String)",id:"methodtitle-string",children:[],level:4},{value:"<code>totalCharges</code> (Float)",id:"totalcharges-float",children:[],level:4},{value:"<code>transactionId</code> (String)",id:"transactionid-string",children:[],level:4},{value:"<code>currency</code> (String)",id:"currency-string",children:[],level:4},{value:"<code>order</code> (Order)",id:"order-order",children:[],level:4}],level:3},{value:"Interfaces",id:"interfaces",children:[{value:"Node",id:"node",children:[],level:4}],level:3}],p={toc:s};function h(e){var r=e.components,t=(0,n.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type OrderDetail implements Node {\n  id: ID!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  carrierCode: String!\n  carrierTitle: String!\n  methodCode: String!\n  methodTitle: String!\n  totalCharges: Float!\n  transactionId: String!\n  currency: String\n  order: Order\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"id-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"createdat-datetime"},(0,a.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/date-time"},(0,a.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,a.kt)("h4",{id:"updatedat-datetime"},(0,a.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/date-time"},(0,a.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,a.kt)("h4",{id:"carriercode-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"carrierCode")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"carriertitle-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"carrierTitle")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"methodcode-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"methodCode")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"methodtitle-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"methodTitle")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"totalcharges-float"},(0,a.kt)("inlineCode",{parentName:"h4"},"totalCharges")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/float"},(0,a.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,a.kt)("h4",{id:"transactionid-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"transactionId")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"currency-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"currency")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"order-order"},(0,a.kt)("inlineCode",{parentName:"h4"},"order")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/objects/order"},(0,a.kt)("inlineCode",{parentName:"a"},"Order")),")"),(0,a.kt)("h3",{id:"interfaces"},"Interfaces"),(0,a.kt)("h4",{id:"node"},(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/interfaces/node"},(0,a.kt)("inlineCode",{parentName:"a"},"Node"))),(0,a.kt)("p",null,"An object with an ID"))}h.isMDXComponent=!0}}]);