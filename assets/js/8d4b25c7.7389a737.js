"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[45084],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return u}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(r),u=a,v=m["".concat(s,".").concat(u)]||m[u]||p[u]||i;return r?n.createElement(v,o(o({ref:t},d),{},{components:r})):n.createElement(v,o({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6515:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],l={id:"rmsoption",title:"RMSOption"},s=void 0,c={unversionedId:"rate-manager-service/objects/rmsoption",id:"version-1.0.0/rate-manager-service/objects/rmsoption",isDocsHomePage:!1,title:"RMSOption",description:"No description",source:"@site/versioned_docs/version-1.0.0/rate-manager-service/objects/rmsoption.mdx",sourceDirName:"rate-manager-service/objects",slug:"/rate-manager-service/objects/rmsoption",permalink:"/docs/rate-manager-service/objects/rmsoption",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/versioned_docs/version-1.0.0/rate-manager-service/objects/rmsoption.mdx",tags:[],version:"1.0.0",frontMatter:{id:"rmsoption",title:"RMSOption"},sidebar:"version-1.0.0/rateManagerService",previous:{title:"RMSGroupedItem",permalink:"/docs/rate-manager-service/objects/rmsgrouped-item"},next:{title:"RMSPackage",permalink:"/docs/rate-manager-service/objects/rmspackage"}},d=[{value:"Fields",id:"fields",children:[{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4},{value:"<code>code</code> (String)",id:"code-string",children:[],level:4},{value:"<code>name</code> (String)",id:"name-string",children:[],level:4},{value:"<code>values</code> (Json)",id:"values-json",children:[],level:4},{value:"<code>defaultValue</code> (String)",id:"defaultvalue-string",children:[],level:4},{value:"<code>displayType</code> (String)",id:"displaytype-string",children:[],level:4},{value:"<code>requestRates</code> (Boolean)",id:"requestrates-boolean",children:[],level:4},{value:"<code>rMSAvailableOptions</code> (RMSAvailableOptions)",id:"rmsavailableoptions-rmsavailableoptions",children:[],level:4}],level:3},{value:"Interfaces",id:"interfaces",children:[{value:"Node",id:"node",children:[],level:4}],level:3}],p={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type RMSOption implements Node {\n  id: ID!\n  code: String!\n  name: String!\n  values: Json\n  defaultValue: String\n  displayType: String!\n  requestRates: Boolean\n  rMSAvailableOptions: RMSAvailableOptions\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"id-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"code-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"code")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"name-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"values-json"},(0,i.kt)("inlineCode",{parentName:"h4"},"values")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/json"},(0,i.kt)("inlineCode",{parentName:"a"},"Json")),")"),(0,i.kt)("h4",{id:"defaultvalue-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"defaultValue")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"displaytype-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"displayType")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"requestrates-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"requestRates")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"rmsavailableoptions-rmsavailableoptions"},(0,i.kt)("inlineCode",{parentName:"h4"},"rMSAvailableOptions")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/objects/rmsavailable-options"},(0,i.kt)("inlineCode",{parentName:"a"},"RMSAvailableOptions")),")"),(0,i.kt)("h3",{id:"interfaces"},"Interfaces"),(0,i.kt)("h4",{id:"node"},(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/interfaces/node"},(0,i.kt)("inlineCode",{parentName:"a"},"Node"))),(0,i.kt)("p",null,"An object with an ID"))}m.isMDXComponent=!0}}]);