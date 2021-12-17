"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[96195],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return u}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),c=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=c(r),u=n,h=s["".concat(d,".").concat(u)]||s[u]||m[u]||i;return r?a.createElement(h,l(l({ref:t},p),{},{components:r})):a.createElement(h,l({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=s;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},73715:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),l=["components"],o={id:"label-item",title:"LabelItem"},d=void 0,c={unversionedId:"rate-manager-service/objects/label-item",id:"rate-manager-service/objects/label-item",isDocsHomePage:!1,title:"LabelItem",description:"No description",source:"@site/docs/rate-manager-service/objects/label-item.mdx",sourceDirName:"rate-manager-service/objects",slug:"/rate-manager-service/objects/label-item",permalink:"/docs/next/rate-manager-service/objects/label-item",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/docs/rate-manager-service/objects/label-item.mdx",tags:[],version:"current",frontMatter:{id:"label-item",title:"LabelItem"},sidebar:"rateManagerService",previous:{title:"Item",permalink:"/docs/next/rate-manager-service/objects/item"},next:{title:"LabelResultItem",permalink:"/docs/next/rate-manager-service/objects/label-result-item"}},p=[{value:"Fields",id:"fields",children:[{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4},{value:"<code>createdAt</code> (DateTime)",id:"createdat-datetime",children:[],level:4},{value:"<code>updatedAt</code> (DateTime)",id:"updatedat-datetime",children:[],level:4},{value:"<code>orderItemId</code> (ID)",id:"orderitemid-id",children:[],level:4},{value:"<code>shippedQty</code> (Float)",id:"shippedqty-float",children:[],level:4},{value:"<code>labelId</code> (ID)",id:"labelid-id",children:[],level:4},{value:"<code>label</code> (Label)",id:"label-label",children:[],level:4}],level:3},{value:"Interfaces",id:"interfaces",children:[{value:"Node",id:"node",children:[],level:4}],level:3}],m={toc:p};function s(e){var t=e.components,r=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type LabelItem implements Node {\n  id: ID!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  orderItemId: ID!\n  shippedQty: Float!\n  labelId: ID!\n  label: Label\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"id-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"createdat-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,i.kt)("h4",{id:"updatedat-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,i.kt)("h4",{id:"orderitemid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"orderItemId")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"shippedqty-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"shippedQty")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("h4",{id:"labelid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"labelId")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"label-label"},(0,i.kt)("inlineCode",{parentName:"h4"},"label")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/objects/label"},(0,i.kt)("inlineCode",{parentName:"a"},"Label")),")"),(0,i.kt)("h3",{id:"interfaces"},"Interfaces"),(0,i.kt)("h4",{id:"node"},(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/interfaces/node"},(0,i.kt)("inlineCode",{parentName:"a"},"Node"))),(0,i.kt)("p",null,"An object with an ID"))}s.isMDXComponent=!0}}]);