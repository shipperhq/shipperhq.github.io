"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[54155],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(r),m=i,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||a;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},25690:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],c={id:"cart-input",title:"CartInput"},p=void 0,u={unversionedId:"rate-service/inputs/cart-input",id:"version-1.0.0/rate-service/inputs/cart-input",isDocsHomePage:!1,title:"CartInput",description:"No description",source:"@site/versioned_docs/version-1.0.0/rate-service/inputs/cart-input.mdx",sourceDirName:"rate-service/inputs",slug:"/rate-service/inputs/cart-input",permalink:"/docs/1.0.0/rate-service/inputs/cart-input",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/versioned_docs/version-1.0.0/rate-service/inputs/cart-input.mdx",tags:[],version:"1.0.0",frontMatter:{id:"cart-input",title:"CartInput"},sidebar:"version-1.0.0/rateService",previous:{title:"AttributeInput",permalink:"/docs/1.0.0/rate-service/inputs/attribute-input"},next:{title:"CustomerInput",permalink:"/docs/1.0.0/rate-service/inputs/customer-input"}},l=[{value:"Fields",id:"fields",children:[{value:"<code>freeShipping</code> (Boolean)",id:"freeshipping-boolean",children:[],level:4},{value:"<code>declaredValue</code> (BigDecimal)",id:"declaredvalue-bigdecimal",children:[],level:4},{value:"<code>items</code> (ItemInput)",id:"items-iteminput",children:[],level:4}],level:3}],s={toc:l};function d(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type CartInput {\n  freeShipping: Boolean\n  declaredValue: BigDecimal\n  items: [ItemInput]\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"freeshipping-boolean"},(0,a.kt)("inlineCode",{parentName:"h4"},"freeShipping")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-service/scalars/boolean"},(0,a.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,a.kt)("h4",{id:"declaredvalue-bigdecimal"},(0,a.kt)("inlineCode",{parentName:"h4"},"declaredValue")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-service/scalars/big-decimal"},(0,a.kt)("inlineCode",{parentName:"a"},"BigDecimal")),")"),(0,a.kt)("h4",{id:"items-iteminput"},(0,a.kt)("inlineCode",{parentName:"h4"},"items")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-service/inputs/item-input"},(0,a.kt)("inlineCode",{parentName:"a"},"ItemInput")),")"))}d.isMDXComponent=!0}}]);