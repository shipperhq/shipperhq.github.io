"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[45434],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return g}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(r),g=a,h=p["".concat(o,".").concat(g)]||p[g]||m[g]||i;return r?n.createElement(h,d(d({ref:t},l),{},{components:r})):n.createElement(h,d({ref:t},l))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,d=new Array(i);d[0]=p;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,d[1]=c;for(var s=2;s<i;s++)d[s]=r[s];return n.createElement.apply(null,d)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},47811:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),d=["components"],c={id:"address",title:"Address"},o=void 0,s={unversionedId:"rate-manager-service/objects/address",id:"rate-manager-service/objects/address",isDocsHomePage:!1,title:"Address",description:"No description",source:"@site/docs/rate-manager-service/objects/address.mdx",sourceDirName:"rate-manager-service/objects",slug:"/rate-manager-service/objects/address",permalink:"/docs/next/rate-manager-service/objects/address",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/docs/rate-manager-service/objects/address.mdx",tags:[],version:"current",frontMatter:{id:"address",title:"Address"},sidebar:"rateManagerService",previous:{title:"AccessToken",permalink:"/docs/next/rate-manager-service/objects/access-token"},next:{title:"AdvancedFees",permalink:"/docs/next/rate-manager-service/objects/advanced-fees"}},l=[{value:"Fields",id:"fields",children:[{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4},{value:"<code>createdAt</code> (DateTime)",id:"createdat-datetime",children:[],level:4},{value:"<code>updatedAt</code> (DateTime)",id:"updatedat-datetime",children:[],level:4},{value:"<code>country</code> (String)",id:"country-string",children:[],level:4},{value:"<code>region</code> (String)",id:"region-string",children:[],level:4},{value:"<code>city</code> (String)",id:"city-string",children:[],level:4},{value:"<code>street</code> (String)",id:"street-string",children:[],level:4},{value:"<code>street2</code> (String)",id:"street2-string",children:[],level:4},{value:"<code>zipcode</code> (String)",id:"zipcode-string",children:[],level:4},{value:"<code>firstName</code> (String)",id:"firstname-string",children:[],level:4},{value:"<code>lastName</code> (String)",id:"lastname-string",children:[],level:4},{value:"<code>email</code> (String)",id:"email-string",children:[],level:4},{value:"<code>company</code> (String)",id:"company-string",children:[],level:4},{value:"<code>telephone</code> (String)",id:"telephone-string",children:[],level:4},{value:"<code>order</code> (Order)",id:"order-order",children:[],level:4}],level:3},{value:"Interfaces",id:"interfaces",children:[{value:"Node",id:"node",children:[],level:4}],level:3}],m={toc:l};function p(e){var t=e.components,r=(0,a.Z)(e,d);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type Address implements Node {\n  id: ID!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  country: String\n  region: String\n  city: String\n  street: String\n  street2: String\n  zipcode: String\n  firstName: String\n  lastName: String\n  email: String\n  company: String\n  telephone: String\n  order: Order\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"id-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"createdat-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,i.kt)("h4",{id:"updatedat-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,i.kt)("h4",{id:"country-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"country")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"region-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"region")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"city-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"city")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"street-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"street")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"street2-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"street2")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"zipcode-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"zipcode")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"firstname-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"firstName")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"lastname-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"lastName")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"email-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"email")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"company-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"company")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"telephone-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"telephone")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"order-order"},(0,i.kt)("inlineCode",{parentName:"h4"},"order")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/objects/order"},(0,i.kt)("inlineCode",{parentName:"a"},"Order")),")"),(0,i.kt)("h3",{id:"interfaces"},"Interfaces"),(0,i.kt)("h4",{id:"node"},(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/interfaces/node"},(0,i.kt)("inlineCode",{parentName:"a"},"Node"))),(0,i.kt)("p",null,"An object with an ID"))}p.isMDXComponent=!0}}]);