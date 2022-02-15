"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[79198],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return v}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=n.createContext({}),c=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),v=i,h=u["".concat(d,".").concat(v)]||u[v]||p[v]||a;return r?n.createElement(h,o(o({ref:t},s),{},{components:r})):n.createElement(h,o({ref:t},s))}));function v(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},42335:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],l={id:"option",title:"Option"},d=void 0,c={unversionedId:"order-view-service/objects/option",id:"order-view-service/objects/option",isDocsHomePage:!1,title:"Option",description:"No description",source:"@site/docs/order-view-service/objects/option.mdx",sourceDirName:"order-view-service/objects",slug:"/order-view-service/objects/option",permalink:"/docs/order-view-service/objects/option",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/docs/order-view-service/objects/option.mdx",tags:[],version:"current",frontMatter:{id:"option",title:"Option"},sidebar:"orderViewSidebar",previous:{title:"Method",permalink:"/docs/order-view-service/objects/method"},next:{title:"OrderDetail",permalink:"/docs/order-view-service/objects/order-detail"}},s=[{value:"Fields",id:"fields",children:[{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4},{value:"<code>code</code> (String)",id:"code-string",children:[],level:4},{value:"<code>name</code> (String)",id:"name-string",children:[],level:4},{value:"<code>values</code> (Json)",id:"values-json",children:[],level:4},{value:"<code>defaultValue</code> (String)",id:"defaultvalue-string",children:[],level:4},{value:"<code>displayType</code> (String)",id:"displaytype-string",children:[],level:4},{value:"<code>requestRates</code> (Boolean)",id:"requestrates-boolean",children:[],level:4},{value:"<code>availableOptions</code> (AvailableOptions)",id:"availableoptions-availableoptions",children:[],level:4}],level:3},{value:"Interfaces",id:"interfaces",children:[{value:"Node",id:"node",children:[],level:4}],level:3}],p={toc:s};function u(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type Option implements Node {\n  id: ID!\n  code: String!\n  name: String!\n  values: Json\n  defaultValue: String\n  displayType: String!\n  requestRates: Boolean\n  availableOptions: AvailableOptions\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"id-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"code-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"code")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"name-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"values-json"},(0,a.kt)("inlineCode",{parentName:"h4"},"values")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/json"},(0,a.kt)("inlineCode",{parentName:"a"},"Json")),")"),(0,a.kt)("h4",{id:"defaultvalue-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"defaultValue")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"displaytype-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"displayType")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"requestrates-boolean"},(0,a.kt)("inlineCode",{parentName:"h4"},"requestRates")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/boolean"},(0,a.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,a.kt)("h4",{id:"availableoptions-availableoptions"},(0,a.kt)("inlineCode",{parentName:"h4"},"availableOptions")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/objects/available-options"},(0,a.kt)("inlineCode",{parentName:"a"},"AvailableOptions")),")"),(0,a.kt)("h3",{id:"interfaces"},"Interfaces"),(0,a.kt)("h4",{id:"node"},(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/interfaces/node"},(0,a.kt)("inlineCode",{parentName:"a"},"Node"))),(0,a.kt)("p",null,"An object with an ID"))}u.isMDXComponent=!0}}]);