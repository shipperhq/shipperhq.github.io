"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[2799],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return f}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=n.createContext({}),s=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(d.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(t),f=a,u=p["".concat(d,".").concat(f)]||p[f]||m[f]||i;return t?n.createElement(u,o(o({ref:r},l),{},{components:t})):n.createElement(u,o({ref:r},l))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=p;var c={};for(var d in r)hasOwnProperty.call(r,d)&&(c[d]=r[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},12021:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var n=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],c={id:"manifest",title:"Manifest"},d=void 0,s={unversionedId:"rate-manager-service/objects/manifest",id:"version-1.0.0/rate-manager-service/objects/manifest",isDocsHomePage:!1,title:"Manifest",description:"No description",source:"@site/versioned_docs/version-1.0.0/rate-manager-service/objects/manifest.mdx",sourceDirName:"rate-manager-service/objects",slug:"/rate-manager-service/objects/manifest",permalink:"/docs/1.0.0/rate-manager-service/objects/manifest",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/versioned_docs/version-1.0.0/rate-manager-service/objects/manifest.mdx",tags:[],version:"1.0.0",frontMatter:{id:"manifest",title:"Manifest"},sidebar:"version-1.0.0/rateManagerService",previous:{title:"Label",permalink:"/docs/1.0.0/rate-manager-service/objects/label"},next:{title:"MasterQuote",permalink:"/docs/1.0.0/rate-manager-service/objects/master-quote"}},l=[{value:"Fields",id:"fields",children:[{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4},{value:"<code>createdAt</code> (DateTime)",id:"createdat-datetime",children:[],level:4},{value:"<code>updatedAt</code> (DateTime)",id:"updatedat-datetime",children:[],level:4},{value:"<code>order</code> (Order)",id:"order-order",children:[],level:4},{value:"<code>carrierCode</code> (String)",id:"carriercode-string",children:[],level:4},{value:"<code>carrierName</code> (String)",id:"carriername-string",children:[],level:4},{value:"<code>manifestId</code> (String)",id:"manifestid-string",children:[],level:4},{value:"<code>manifestUrl</code> (String)",id:"manifesturl-string",children:[],level:4},{value:"<code>manifestImage</code> (String)",id:"manifestimage-string",children:[],level:4}],level:3},{value:"Interfaces",id:"interfaces",children:[{value:"Node",id:"node",children:[],level:4}],level:3}],m={toc:l};function p(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type Manifest implements Node {\n  id: ID!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  order: Order\n  carrierCode: String!\n  carrierName: String!\n  manifestId: String\n  manifestUrl: String\n  manifestImage: String\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"id-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"createdat-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,i.kt)("h4",{id:"updatedat-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,i.kt)("h4",{id:"order-order"},(0,i.kt)("inlineCode",{parentName:"h4"},"order")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/objects/order"},(0,i.kt)("inlineCode",{parentName:"a"},"Order")),")"),(0,i.kt)("h4",{id:"carriercode-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"carrierCode")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"carriername-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"carrierName")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"manifestid-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"manifestId")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"manifesturl-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"manifestUrl")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"manifestimage-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"manifestImage")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h3",{id:"interfaces"},"Interfaces"),(0,i.kt)("h4",{id:"node"},(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/interfaces/node"},(0,i.kt)("inlineCode",{parentName:"a"},"Node"))),(0,i.kt)("p",null,"An object with an ID"))}p.isMDXComponent=!0}}]);