"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[57082],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(r),m=i,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return r?n.createElement(g,o(o({ref:t},s),{},{components:r})):n.createElement(g,o({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var d=2;d<a;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},26143:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return s},default:function(){return u}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],c={id:"grouped-item",title:"GroupedItem"},l=void 0,d={unversionedId:"rate-service/objects/grouped-item",id:"version-1.0.0/rate-service/objects/grouped-item",isDocsHomePage:!1,title:"GroupedItem",description:"No description",source:"@site/versioned_docs/version-1.0.0/rate-service/objects/grouped-item.mdx",sourceDirName:"rate-service/objects",slug:"/rate-service/objects/grouped-item",permalink:"/docs/1.0.0/rate-service/objects/grouped-item",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/versioned_docs/version-1.0.0/rate-service/objects/grouped-item.mdx",tags:[],version:"1.0.0",frontMatter:{id:"grouped-item",title:"GroupedItem"},sidebar:"version-1.0.0/rateService",previous:{title:"FullShippingQuote",permalink:"/docs/1.0.0/rate-service/objects/full-shipping-quote"},next:{title:"Item",permalink:"/docs/1.0.0/rate-service/objects/item"}},s=[{value:"Fields",id:"fields",children:[{value:"<code>declaredValue</code> (BigDecimal)",id:"declaredvalue-bigdecimal",children:[],level:4},{value:"<code>hsCode</code> (String)",id:"hscode-string",children:[],level:4},{value:"<code>itemId</code> (String)",id:"itemid-string",children:[],level:4},{value:"<code>name</code> (String)",id:"name-string",children:[],level:4},{value:"<code>originCountry</code> (String)",id:"origincountry-string",children:[],level:4},{value:"<code>qty</code> (Int)",id:"qty-int",children:[],level:4},{value:"<code>sku</code> (String)",id:"sku-string",children:[],level:4}],level:3}],p={toc:s};function u(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type GroupedItem {\n  declaredValue: BigDecimal\n  hsCode: String\n  itemId: String!\n  name: String\n  originCountry: String\n  qty: Int\n  sku: String\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"declaredvalue-bigdecimal"},(0,a.kt)("inlineCode",{parentName:"h4"},"declaredValue")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-service/scalars/big-decimal"},(0,a.kt)("inlineCode",{parentName:"a"},"BigDecimal")),")"),(0,a.kt)("h4",{id:"hscode-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"hsCode")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"itemid-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"itemId")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"name-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"origincountry-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"originCountry")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"qty-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"qty")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-service/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("h4",{id:"sku-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"sku")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"))}u.isMDXComponent=!0}}]);