"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[26071],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,d=function(e,t){if(null==e)return{};var r,n,d={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(d[r]=e[r]);return d}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(d[r]=e[r])}return d}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,d=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=c(r),m=d,v=s["".concat(l,".").concat(m)]||s[m]||u[m]||i;return r?n.createElement(v,a(a({ref:t},p),{},{components:r})):n.createElement(v,a({ref:t},p))}));function m(e,t){var r=arguments,d=t&&t.mdxType;if("string"==typeof e||d){var i=r.length,a=new Array(i);a[0]=s;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:d,a[1]=o;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},92599:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var n=r(87462),d=r(63366),i=(r(67294),r(3905)),a=["components"],o={id:"label-item-order-by-input",title:"LabelItemOrderByInput"},l=void 0,c={unversionedId:"order-view-service/enums/label-item-order-by-input",id:"version-1.0.0/order-view-service/enums/label-item-order-by-input",isDocsHomePage:!1,title:"LabelItemOrderByInput",description:"No description",source:"@site/versioned_docs/version-1.0.0/order-view-service/enums/label-item-order-by-input.mdx",sourceDirName:"order-view-service/enums",slug:"/order-view-service/enums/label-item-order-by-input",permalink:"/docs/1.0.0/order-view-service/enums/label-item-order-by-input",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/versioned_docs/version-1.0.0/order-view-service/enums/label-item-order-by-input.mdx",tags:[],version:"1.0.0",frontMatter:{id:"label-item-order-by-input",title:"LabelItemOrderByInput"},sidebar:"version-1.0.0/orderViewSidebar",previous:{title:"ItemType",permalink:"/docs/1.0.0/order-view-service/enums/item-type"},next:{title:"MethodOrderByInput",permalink:"/docs/1.0.0/order-view-service/enums/method-order-by-input"}},p=[{value:"Values",id:"values",children:[{value:"<code>id_ASC</code>",id:"id_asc",children:[],level:4},{value:"<code>id_DESC</code>",id:"id_desc",children:[],level:4},{value:"<code>createdAt_ASC</code>",id:"createdat_asc",children:[],level:4},{value:"<code>createdAt_DESC</code>",id:"createdat_desc",children:[],level:4},{value:"<code>updatedAt_ASC</code>",id:"updatedat_asc",children:[],level:4},{value:"<code>updatedAt_DESC</code>",id:"updatedat_desc",children:[],level:4},{value:"<code>orderItemId_ASC</code>",id:"orderitemid_asc",children:[],level:4},{value:"<code>orderItemId_DESC</code>",id:"orderitemid_desc",children:[],level:4},{value:"<code>shippedQty_ASC</code>",id:"shippedqty_asc",children:[],level:4},{value:"<code>shippedQty_DESC</code>",id:"shippedqty_desc",children:[],level:4},{value:"<code>labelId_ASC</code>",id:"labelid_asc",children:[],level:4},{value:"<code>labelId_DESC</code>",id:"labelid_desc",children:[],level:4}],level:3}],u={toc:p};function s(e){var t=e.components,r=(0,d.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"enum LabelItemOrderByInput {\n  id_ASC\n  id_DESC\n  createdAt_ASC\n  createdAt_DESC\n  updatedAt_ASC\n  updatedAt_DESC\n  orderItemId_ASC\n  orderItemId_DESC\n  shippedQty_ASC\n  shippedQty_DESC\n  labelId_ASC\n  labelId_DESC\n}\n")),(0,i.kt)("h3",{id:"values"},"Values"),(0,i.kt)("h4",{id:"id_asc"},(0,i.kt)("inlineCode",{parentName:"h4"},"id_ASC")),(0,i.kt)("h4",{id:"id_desc"},(0,i.kt)("inlineCode",{parentName:"h4"},"id_DESC")),(0,i.kt)("h4",{id:"createdat_asc"},(0,i.kt)("inlineCode",{parentName:"h4"},"createdAt_ASC")),(0,i.kt)("h4",{id:"createdat_desc"},(0,i.kt)("inlineCode",{parentName:"h4"},"createdAt_DESC")),(0,i.kt)("h4",{id:"updatedat_asc"},(0,i.kt)("inlineCode",{parentName:"h4"},"updatedAt_ASC")),(0,i.kt)("h4",{id:"updatedat_desc"},(0,i.kt)("inlineCode",{parentName:"h4"},"updatedAt_DESC")),(0,i.kt)("h4",{id:"orderitemid_asc"},(0,i.kt)("inlineCode",{parentName:"h4"},"orderItemId_ASC")),(0,i.kt)("h4",{id:"orderitemid_desc"},(0,i.kt)("inlineCode",{parentName:"h4"},"orderItemId_DESC")),(0,i.kt)("h4",{id:"shippedqty_asc"},(0,i.kt)("inlineCode",{parentName:"h4"},"shippedQty_ASC")),(0,i.kt)("h4",{id:"shippedqty_desc"},(0,i.kt)("inlineCode",{parentName:"h4"},"shippedQty_DESC")),(0,i.kt)("h4",{id:"labelid_asc"},(0,i.kt)("inlineCode",{parentName:"h4"},"labelId_ASC")),(0,i.kt)("h4",{id:"labelid_desc"},(0,i.kt)("inlineCode",{parentName:"h4"},"labelId_DESC")))}s.isMDXComponent=!0}}]);