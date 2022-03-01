"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[753],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return u}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=l(r),u=n,v=m["".concat(c,".").concat(u)]||m[u]||p[u]||i;return r?a.createElement(v,o(o({ref:t},s),{},{components:r})):a.createElement(v,o({ref:t},s))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d.mdxType="string"==typeof e?e:n,o[1]=d;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3953:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return d},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return m}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),o=["components"],d={id:"item",title:"Item"},c=void 0,l={unversionedId:"order-view-service/objects/item",id:"order-view-service/objects/item",isDocsHomePage:!1,title:"Item",description:"No description",source:"@site/docs/order-view-service/objects/item.mdx",sourceDirName:"order-view-service/objects",slug:"/order-view-service/objects/item",permalink:"/docs/order-view-service/objects/item",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/docs/order-view-service/objects/item.mdx",tags:[],version:"current",frontMatter:{id:"item",title:"Item"},sidebar:"orderViewSidebar",previous:{title:"GroupedItem",permalink:"/docs/order-view-service/objects/grouped-item"},next:{title:"LabelItem",permalink:"/docs/order-view-service/objects/label-item"}},s=[{value:"Fields",id:"fields",children:[{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4},{value:"<code>createdAt</code> (DateTime)",id:"createdat-datetime",children:[],level:4},{value:"<code>updatedAt</code> (DateTime)",id:"updatedat-datetime",children:[],level:4},{value:"<code>sku</code> (String)",id:"sku-string",children:[],level:4},{value:"<code>qtyPacked</code> (Float)",id:"qtypacked-float",children:[],level:4},{value:"<code>weightPacked</code> (Float)",id:"weightpacked-float",children:[],level:4},{value:"<code>package</code> (Package)",id:"package-package",children:[],level:4},{value:"<code>storedRMSCart</code> (StoredRMSCart)",id:"storedrmscart-storedrmscart",children:[],level:4}],level:3},{value:"Interfaces",id:"interfaces",children:[{value:"Node",id:"node",children:[],level:4}],level:3}],p={toc:s};function m(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type Item implements Node {\n  id: ID!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  sku: String!\n  qtyPacked: Float!\n  weightPacked: Float!\n  package: Package\n  storedRMSCart: StoredRMSCart\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"id-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"createdat-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,i.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,i.kt)("h4",{id:"updatedat-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,i.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,i.kt)("h4",{id:"sku-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"sku")," (",(0,i.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"qtypacked-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"qtyPacked")," (",(0,i.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("h4",{id:"weightpacked-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"weightPacked")," (",(0,i.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("h4",{id:"package-package"},(0,i.kt)("inlineCode",{parentName:"h4"},"package")," (",(0,i.kt)("a",{parentName:"h4",href:"../../order-view-service/objects/package"},(0,i.kt)("inlineCode",{parentName:"a"},"Package")),")"),(0,i.kt)("h4",{id:"storedrmscart-storedrmscart"},(0,i.kt)("inlineCode",{parentName:"h4"},"storedRMSCart")," (",(0,i.kt)("a",{parentName:"h4",href:"../../order-view-service/objects/stored-rmscart"},(0,i.kt)("inlineCode",{parentName:"a"},"StoredRMSCart")),")"),(0,i.kt)("h3",{id:"interfaces"},"Interfaces"),(0,i.kt)("h4",{id:"node"},(0,i.kt)("a",{parentName:"h4",href:"../../order-view-service/interfaces/node"},(0,i.kt)("inlineCode",{parentName:"a"},"Node"))),(0,i.kt)("p",null,"An object with an ID"))}m.isMDXComponent=!0}}]);