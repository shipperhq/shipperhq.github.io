"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[76175],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),a=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=a(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=a(r),d=i,f=m["".concat(p,".").concat(d)]||m[d]||l[d]||o;return r?n.createElement(f,u(u({ref:t},s),{},{components:r})):n.createElement(f,u({ref:t},s))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,u=new Array(o);u[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,u[1]=c;for(var a=2;a<o;a++)u[a]=r[a];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},49412:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return a},toc:function(){return s},default:function(){return m}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),u=["components"],c={id:"customer-input",title:"CustomerInput"},p=void 0,a={unversionedId:"rate-service/inputs/customer-input",id:"rate-service/inputs/customer-input",isDocsHomePage:!1,title:"CustomerInput",description:"No description",source:"@site/docs/rate-service/inputs/customer-input.mdx",sourceDirName:"rate-service/inputs",slug:"/rate-service/inputs/customer-input",permalink:"/docs/next/rate-service/inputs/customer-input",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/docs/rate-service/inputs/customer-input.mdx",tags:[],version:"current",frontMatter:{id:"customer-input",title:"CustomerInput"},sidebar:"rateService",previous:{title:"CartInput",permalink:"/docs/next/rate-service/inputs/cart-input"},next:{title:"DestinationInput",permalink:"/docs/next/rate-service/inputs/destination-input"}},s=[{value:"Fields",id:"fields",children:[{value:"<code>customerGroup</code> (String)",id:"customergroup-string",children:[],level:4}],level:3}],l={toc:s};function m(e){var t=e.components,r=(0,i.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type CustomerInput {\n  customerGroup: String\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"customergroup-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"customerGroup")," (",(0,o.kt)("a",{parentName:"h4",href:"../../rate-service/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"))}m.isMDXComponent=!0}}]);