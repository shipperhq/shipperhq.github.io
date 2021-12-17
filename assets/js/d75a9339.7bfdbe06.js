"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[78433],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return r?a.createElement(h,o(o({ref:t},d),{},{components:r})):a.createElement(h,o({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},64837:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),o=["components"],l={id:"rmsitem",title:"RMSItem"},c=void 0,s={unversionedId:"rate-manager-service/inputs/rmsitem",id:"rate-manager-service/inputs/rmsitem",isDocsHomePage:!1,title:"RMSItem",description:"Full Details of an item in the cart",source:"@site/docs/rate-manager-service/inputs/rmsitem.mdx",sourceDirName:"rate-manager-service/inputs",slug:"/rate-manager-service/inputs/rmsitem",permalink:"/docs/next/rate-manager-service/inputs/rmsitem",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/docs/rate-manager-service/inputs/rmsitem.mdx",tags:[],version:"current",frontMatter:{id:"rmsitem",title:"RMSItem"},sidebar:"rateManagerService",previous:{title:"RMSGroupedItemWhereInput",permalink:"/docs/next/rate-manager-service/inputs/rmsgrouped-item-where-input"},next:{title:"RMSOptionInput",permalink:"/docs/next/rate-manager-service/inputs/rmsoption-input"}},d=[{value:"Fields",id:"fields",children:[{value:"<code>itemId</code> (String)",id:"itemid-string",children:[],level:4},{value:"<code>sku</code> (String)",id:"sku-string",children:[],level:4},{value:"<code>storePrice</code> (Float)",id:"storeprice-float",children:[],level:4},{value:"<code>weight</code> (Float)",id:"weight-float",children:[],level:4},{value:"<code>qty</code> (Int)",id:"qty-int",children:[],level:4},{value:"<code>type</code> (ItemType)",id:"type-itemtype",children:[],level:4},{value:"<code>basePrice</code> (Float)",id:"baseprice-float",children:[],level:4},{value:"<code>taxInclBasePrice</code> (Float)",id:"taxinclbaseprice-float",children:[],level:4},{value:"<code>taxInclStorePrice</code> (Float)",id:"taxinclstoreprice-float",children:[],level:4},{value:"<code>discountPercent</code> (Float)",id:"discountpercent-float",children:[],level:4},{value:"<code>discountedBasePrice</code> (Float)",id:"discountedbaseprice-float",children:[],level:4},{value:"<code>discountedStorePrice</code> (Float)",id:"discountedstoreprice-float",children:[],level:4},{value:"<code>discountedTaxInclBasePrice</code> (Float)",id:"discountedtaxinclbaseprice-float",children:[],level:4},{value:"<code>discountedTaxInclStorePrice</code> (Float)",id:"discountedtaxinclstoreprice-float",children:[],level:4},{value:"<code>freeShipping</code> (Boolean)",id:"freeshipping-boolean",children:[],level:4},{value:"<code>fixedPrice</code> (Boolean)",id:"fixedprice-boolean",children:[],level:4},{value:"<code>fixedWeight</code> (Boolean)",id:"fixedweight-boolean",children:[],level:4},{value:"<code>attributes</code> (RMSAttribute)",id:"attributes-rmsattribute",children:[],level:4},{value:"<code>items</code> (RMSItem)",id:"items-rmsitem",children:[],level:4}],level:3}],p={toc:d};function u(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Full Details of an item in the cart"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type RMSItem {\n  itemId: String!\n  sku: String\n  storePrice: Float!\n  weight: Float!\n  qty: Int!\n  type: ItemType!\n  basePrice: Float\n  taxInclBasePrice: Float\n  taxInclStorePrice: Float\n  discountPercent: Float\n  discountedBasePrice: Float\n  discountedStorePrice: Float\n  discountedTaxInclBasePrice: Float\n  discountedTaxInclStorePrice: Float\n  freeShipping: Boolean\n  fixedPrice: Boolean\n  fixedWeight: Boolean\n  attributes: [RMSAttribute!]\n  items: [RMSItem]\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"itemid-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"itemId")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The Item's ID"),(0,i.kt)("h4",{id:"sku-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"sku")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The Item's SKU"),(0,i.kt)("h4",{id:"storeprice-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"storePrice")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("p",null,"Price of the Item before discounts, no tax, user's currency"),(0,i.kt)("h4",{id:"weight-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"weight")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("p",null,"The Item's Weight"),(0,i.kt)("h4",{id:"qty-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"qty")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"Quantity of the item in the cart"),(0,i.kt)("h4",{id:"type-itemtype"},(0,i.kt)("inlineCode",{parentName:"h4"},"type")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/enums/item-type"},(0,i.kt)("inlineCode",{parentName:"a"},"ItemType")),")"),(0,i.kt)("p",null,"Type of item"),(0,i.kt)("h4",{id:"baseprice-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"basePrice")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("p",null,"Price of the item before discounts, no tax, store's base currency"),(0,i.kt)("h4",{id:"taxinclbaseprice-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"taxInclBasePrice")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("p",null,"Price of the item before discounts, including tax, store's base currency"),(0,i.kt)("h4",{id:"taxinclstoreprice-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"taxInclStorePrice")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("p",null,"Price of the item before discounts, including tax, user's currency"),(0,i.kt)("h4",{id:"discountpercent-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"discountPercent")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("p",null,"Percent Discount applied"),(0,i.kt)("h4",{id:"discountedbaseprice-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"discountedBasePrice")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("p",null,"Price of the item after discounts, no tax, store's base currency"),(0,i.kt)("h4",{id:"discountedstoreprice-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"discountedStorePrice")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("p",null,"Price of the item after discounts, no tax, user's currency"),(0,i.kt)("h4",{id:"discountedtaxinclbaseprice-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"discountedTaxInclBasePrice")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("p",null,"Price of the item after discounts, with tax, store's base currency"),(0,i.kt)("h4",{id:"discountedtaxinclstoreprice-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"discountedTaxInclStorePrice")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("p",null,"Price of the item after discounts, with tax, user's currency"),(0,i.kt)("h4",{id:"freeshipping-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"freeShipping")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("p",null,"Does the item receive free shipping? Boolean true/false"),(0,i.kt)("h4",{id:"fixedprice-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"fixedPrice")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"fixedweight-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"fixedWeight")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"attributes-rmsattribute"},(0,i.kt)("inlineCode",{parentName:"h4"},"attributes")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/inputs/rmsattribute"},(0,i.kt)("inlineCode",{parentName:"a"},"RMSAttribute")),")"),(0,i.kt)("p",null,"Item Attributes"),(0,i.kt)("h4",{id:"items-rmsitem"},(0,i.kt)("inlineCode",{parentName:"h4"},"items")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/inputs/rmsitem"},(0,i.kt)("inlineCode",{parentName:"a"},"RMSItem")),")"),(0,i.kt)("p",null,"Child item details (if any)"))}u.isMDXComponent=!0}}]);