"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[438],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return h}});var i=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=i.createContext({}),c=function(e){var t=i.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return i.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(r),h=a,u=m["".concat(d,".").concat(h)]||m[h]||p[h]||n;return r?i.createElement(u,o(o({ref:t},s),{},{components:r})):i.createElement(u,o({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<n;c++)o[c]=r[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5407:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var i=r(7462),a=r(3366),n=(r(7294),r(3905)),o=["components"],l={id:"rmsitem",title:"RMSItem"},d=void 0,c={unversionedId:"order-view-service/objects/rmsitem",id:"order-view-service/objects/rmsitem",isDocsHomePage:!1,title:"RMSItem",description:"No description",source:"@site/docs/order-view-service/objects/rmsitem.mdx",sourceDirName:"order-view-service/objects",slug:"/order-view-service/objects/rmsitem",permalink:"/docs/order-view-service/objects/rmsitem",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/docs/order-view-service/objects/rmsitem.mdx",tags:[],version:"current",frontMatter:{id:"rmsitem",title:"RMSItem"},sidebar:"orderViewSidebar",previous:{title:"RMSGroupedItem",permalink:"/docs/order-view-service/objects/rmsgrouped-item"},next:{title:"RMSOption",permalink:"/docs/order-view-service/objects/rmsoption"}},s=[{value:"Fields",id:"fields",children:[{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4},{value:"<code>createdAt</code> (DateTime)",id:"createdat-datetime",children:[],level:4},{value:"<code>updatedAt</code> (DateTime)",id:"updatedat-datetime",children:[],level:4},{value:"<code>itemId</code> (String)",id:"itemid-string",children:[],level:4},{value:"<code>sku</code> (String)",id:"sku-string",children:[],level:4},{value:"<code>storePrice</code> (Float)",id:"storeprice-float",children:[],level:4},{value:"<code>weight</code> (Float)",id:"weight-float",children:[],level:4},{value:"<code>qty</code> (Int)",id:"qty-int",children:[],level:4},{value:"<code>type</code> (ItemType)",id:"type-itemtype",children:[],level:4},{value:"<code>basePrice</code> (Float)",id:"baseprice-float",children:[],level:4},{value:"<code>taxInclBasePrice</code> (Float)",id:"taxinclbaseprice-float",children:[],level:4},{value:"<code>taxInclStorePrice</code> (Float)",id:"taxinclstoreprice-float",children:[],level:4},{value:"<code>discountPercent</code> (Float)",id:"discountpercent-float",children:[],level:4},{value:"<code>discountedBasePrice</code> (Float)",id:"discountedbaseprice-float",children:[],level:4},{value:"<code>discountedStorePrice</code> (Float)",id:"discountedstoreprice-float",children:[],level:4},{value:"<code>discountedTaxInclBasePrice</code> (Float)",id:"discountedtaxinclbaseprice-float",children:[],level:4},{value:"<code>discountedTaxInclStorePrice</code> (Float)",id:"discountedtaxinclstoreprice-float",children:[],level:4},{value:"<code>freeShipping</code> (Boolean)",id:"freeshipping-boolean",children:[],level:4},{value:"<code>fixedPrice</code> (Boolean)",id:"fixedprice-boolean",children:[],level:4},{value:"<code>fixedWeight</code> (Boolean)",id:"fixedweight-boolean",children:[],level:4},{value:"<code>attributes</code> (RMSAttribute)",id:"attributes-rmsattribute",children:[],level:4},{value:"<code>items</code> (String)",id:"items-string",children:[],level:4}],level:3},{value:"Interfaces",id:"interfaces",children:[{value:"Node",id:"node",children:[],level:4}],level:3}],p={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,n.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"No description"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type RMSItem implements Node {\n  id: ID!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  itemId: String!\n  sku: String\n  storePrice: Float!\n  weight: Float!\n  qty: Int!\n  type: ItemType!\n  basePrice: Float\n  taxInclBasePrice: Float\n  taxInclStorePrice: Float\n  discountPercent: Float\n  discountedBasePrice: Float\n  discountedStorePrice: Float\n  discountedTaxInclBasePrice: Float\n  discountedTaxInclStorePrice: Float\n  freeShipping: Boolean\n  fixedPrice: Boolean\n  fixedWeight: Boolean\n  attributes(\n    where: RMSAttributeWhereInput\n    orderBy: RMSAttributeOrderByInput\n    skip: Int\n    after: String\n    before: String\n    first: Int\n    last: Int\n  ): [RMSAttribute!]\n  items: [String!]!\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"id-id"},(0,n.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,n.kt)("h4",{id:"createdat-datetime"},(0,n.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/date-time"},(0,n.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,n.kt)("h4",{id:"updatedat-datetime"},(0,n.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/date-time"},(0,n.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,n.kt)("h4",{id:"itemid-string"},(0,n.kt)("inlineCode",{parentName:"h4"},"itemId")," (",(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,n.kt)("h4",{id:"sku-string"},(0,n.kt)("inlineCode",{parentName:"h4"},"sku")," (",(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,n.kt)("h4",{id:"storeprice-float"},(0,n.kt)("inlineCode",{parentName:"h4"},"storePrice")," (",(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/float"},(0,n.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,n.kt)("h4",{id:"weight-float"},(0,n.kt)("inlineCode",{parentName:"h4"},"weight")," (",(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/float"},(0,n.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,n.kt)("h4",{id:"qty-int"},(0,n.kt)("inlineCode",{parentName:"h4"},"qty")," (",(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,n.kt)("h4",{id:"type-itemtype"},(0,n.kt)("inlineCode",{parentName:"h4"},"type")," (",(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/enums/item-type"},(0,n.kt)("inlineCode",{parentName:"a"},"ItemType")),")"),(0,n.kt)("h4",{id:"baseprice-float"},(0,n.kt)("inlineCode",{parentName:"h4"},"basePrice")," (",(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/float"},(0,n.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,n.kt)("h4",{id:"taxinclbaseprice-float"},(0,n.kt)("inlineCode",{parentName:"h4"},"taxInclBasePrice")," (",(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/float"},(0,n.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,n.kt)("h4",{id:"taxinclstoreprice-float"},(0,n.kt)("inlineCode",{parentName:"h4"},"taxInclStorePrice")," (",(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/float"},(0,n.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,n.kt)("h4",{id:"discountpercent-float"},(0,n.kt)("inlineCode",{parentName:"h4"},"discountPercent")," (",(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/float"},(0,n.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,n.kt)("h4",{id:"discountedbaseprice-float"},(0,n.kt)("inlineCode",{parentName:"h4"},"discountedBasePrice")," (",(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/float"},(0,n.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,n.kt)("h4",{id:"discountedstoreprice-float"},(0,n.kt)("inlineCode",{parentName:"h4"},"discountedStorePrice")," (",(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/float"},(0,n.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,n.kt)("h4",{id:"discountedtaxinclbaseprice-float"},(0,n.kt)("inlineCode",{parentName:"h4"},"discountedTaxInclBasePrice")," (",(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/float"},(0,n.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,n.kt)("h4",{id:"discountedtaxinclstoreprice-float"},(0,n.kt)("inlineCode",{parentName:"h4"},"discountedTaxInclStorePrice")," (",(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/float"},(0,n.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,n.kt)("h4",{id:"freeshipping-boolean"},(0,n.kt)("inlineCode",{parentName:"h4"},"freeShipping")," (",(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/boolean"},(0,n.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,n.kt)("h4",{id:"fixedprice-boolean"},(0,n.kt)("inlineCode",{parentName:"h4"},"fixedPrice")," (",(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/boolean"},(0,n.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,n.kt)("h4",{id:"fixedweight-boolean"},(0,n.kt)("inlineCode",{parentName:"h4"},"fixedWeight")," (",(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/boolean"},(0,n.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,n.kt)("h4",{id:"attributes-rmsattribute"},(0,n.kt)("inlineCode",{parentName:"h4"},"attributes")," (",(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/objects/rmsattribute"},(0,n.kt)("inlineCode",{parentName:"a"},"RMSAttribute")),")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h5",{parentName:"li",id:"where-rmsattributewhereinput"},(0,n.kt)("inlineCode",{parentName:"h5"},"where")," (",(0,n.kt)("a",{parentName:"h5",href:"../../order-view-service/inputs/rmsattribute-where-input"},(0,n.kt)("inlineCode",{parentName:"a"},"RMSAttributeWhereInput")),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h5",{parentName:"li",id:"orderby-rmsattributeorderbyinput"},(0,n.kt)("inlineCode",{parentName:"h5"},"orderBy")," (",(0,n.kt)("a",{parentName:"h5",href:"../../order-view-service/enums/rmsattribute-order-by-input"},(0,n.kt)("inlineCode",{parentName:"a"},"RMSAttributeOrderByInput")),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h5",{parentName:"li",id:"skip-int"},(0,n.kt)("inlineCode",{parentName:"h5"},"skip")," (",(0,n.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int")),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h5",{parentName:"li",id:"after-string"},(0,n.kt)("inlineCode",{parentName:"h5"},"after")," (",(0,n.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String")),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h5",{parentName:"li",id:"before-string"},(0,n.kt)("inlineCode",{parentName:"h5"},"before")," (",(0,n.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String")),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h5",{parentName:"li",id:"first-int"},(0,n.kt)("inlineCode",{parentName:"h5"},"first")," (",(0,n.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int")),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h5",{parentName:"li",id:"last-int"},(0,n.kt)("inlineCode",{parentName:"h5"},"last")," (",(0,n.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,n.kt)("h4",{id:"items-string"},(0,n.kt)("inlineCode",{parentName:"h4"},"items")," (",(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,n.kt)("h3",{id:"interfaces"},"Interfaces"),(0,n.kt)("h4",{id:"node"},(0,n.kt)("a",{parentName:"h4",href:"../../order-view-service/interfaces/node"},(0,n.kt)("inlineCode",{parentName:"a"},"Node"))),(0,n.kt)("p",null,"An object with an ID"))}m.isMDXComponent=!0}}]);