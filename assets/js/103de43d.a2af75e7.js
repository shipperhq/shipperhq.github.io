"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[48942],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return u}});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=i.createContext({}),c=function(e){var t=i.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return i.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(r),u=n,v=m["".concat(d,".").concat(u)]||m[u]||s[u]||a;return r?i.createElement(v,l(l({ref:t},p),{},{components:r})):i.createElement(v,l({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<a;c++)l[c]=r[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},72676:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var i=r(87462),n=r(63366),a=(r(67294),r(3905)),l=["components"],o={id:"label-item",title:"LabelItem"},d=void 0,c={unversionedId:"order-view-service/objects/label-item",id:"order-view-service/objects/label-item",isDocsHomePage:!1,title:"LabelItem",description:"No description",source:"@site/docs/order-view-service/objects/label-item.mdx",sourceDirName:"order-view-service/objects",slug:"/order-view-service/objects/label-item",permalink:"/docs/next/order-view-service/objects/label-item",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/docs/order-view-service/objects/label-item.mdx",tags:[],version:"current",frontMatter:{id:"label-item",title:"LabelItem"},sidebar:"orderViewSidebar",previous:{title:"Item",permalink:"/docs/next/order-view-service/objects/item"},next:{title:"LabelResultItem",permalink:"/docs/next/order-view-service/objects/label-result-item"}},p=[{value:"Fields",id:"fields",children:[{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4},{value:"<code>createdAt</code> (DateTime)",id:"createdat-datetime",children:[],level:4},{value:"<code>updatedAt</code> (DateTime)",id:"updatedat-datetime",children:[],level:4},{value:"<code>orderItemId</code> (ID)",id:"orderitemid-id",children:[],level:4},{value:"<code>shippedQty</code> (Float)",id:"shippedqty-float",children:[],level:4},{value:"<code>labelId</code> (ID)",id:"labelid-id",children:[],level:4},{value:"<code>label</code> (Label)",id:"label-label",children:[],level:4}],level:3},{value:"Interfaces",id:"interfaces",children:[{value:"Node",id:"node",children:[],level:4}],level:3}],s={toc:p};function m(e){var t=e.components,r=(0,n.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type LabelItem implements Node {\n  id: ID!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  orderItemId: ID!\n  shippedQty: Float!\n  labelId: ID!\n  label: Label\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"id-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"createdat-datetime"},(0,a.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/date-time"},(0,a.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,a.kt)("h4",{id:"updatedat-datetime"},(0,a.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/date-time"},(0,a.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,a.kt)("h4",{id:"orderitemid-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"orderItemId")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"shippedqty-float"},(0,a.kt)("inlineCode",{parentName:"h4"},"shippedQty")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/float"},(0,a.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,a.kt)("h4",{id:"labelid-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"labelId")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"label-label"},(0,a.kt)("inlineCode",{parentName:"h4"},"label")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/objects/label"},(0,a.kt)("inlineCode",{parentName:"a"},"Label")),")"),(0,a.kt)("h3",{id:"interfaces"},"Interfaces"),(0,a.kt)("h4",{id:"node"},(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/interfaces/node"},(0,a.kt)("inlineCode",{parentName:"a"},"Node"))),(0,a.kt)("p",null,"An object with an ID"))}m.isMDXComponent=!0}}]);