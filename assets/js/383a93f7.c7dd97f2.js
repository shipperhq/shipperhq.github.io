"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[34527],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return u}});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=n.createContext({}),s=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(d.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),v=s(t),u=i,h=v["".concat(d,".").concat(u)]||v[u]||p[u]||a;return t?n.createElement(h,o(o({ref:r},c),{},{components:t})):n.createElement(h,o({ref:r},c))}));function u(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=v;var l={};for(var d in r)hasOwnProperty.call(r,d)&&(l[d]=r[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},18099:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return c},default:function(){return v}});var n=t(87462),i=t(63366),a=(t(67294),t(3905)),o=["components"],l={id:"option",title:"Option"},d=void 0,s={unversionedId:"order-view-service/objects/option",id:"version-1.0.0/order-view-service/objects/option",isDocsHomePage:!1,title:"Option",description:"No description",source:"@site/versioned_docs/version-1.0.0/order-view-service/objects/option.mdx",sourceDirName:"order-view-service/objects",slug:"/order-view-service/objects/option",permalink:"/docs/1.0.0/order-view-service/objects/option",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/versioned_docs/version-1.0.0/order-view-service/objects/option.mdx",tags:[],version:"1.0.0",frontMatter:{id:"option",title:"Option"},sidebar:"version-1.0.0/orderViewSidebar",previous:{title:"Method",permalink:"/docs/1.0.0/order-view-service/objects/method"},next:{title:"OrderDetail",permalink:"/docs/1.0.0/order-view-service/objects/order-detail"}},c=[{value:"Fields",id:"fields",children:[{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4},{value:"<code>code</code> (String)",id:"code-string",children:[],level:4},{value:"<code>name</code> (String)",id:"name-string",children:[],level:4},{value:"<code>values</code> (Json)",id:"values-json",children:[],level:4},{value:"<code>defaultValue</code> (String)",id:"defaultvalue-string",children:[],level:4},{value:"<code>displayType</code> (String)",id:"displaytype-string",children:[],level:4},{value:"<code>requestRates</code> (Boolean)",id:"requestrates-boolean",children:[],level:4},{value:"<code>availableOptions</code> (AvailableOptions)",id:"availableoptions-availableoptions",children:[],level:4}],level:3},{value:"Interfaces",id:"interfaces",children:[{value:"Node",id:"node",children:[],level:4}],level:3}],p={toc:c};function v(e){var r=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type Option implements Node {\n  id: ID!\n  code: String!\n  name: String!\n  values: Json\n  defaultValue: String\n  displayType: String!\n  requestRates: Boolean\n  availableOptions: AvailableOptions\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"id-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"code-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"code")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"name-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"values-json"},(0,a.kt)("inlineCode",{parentName:"h4"},"values")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/json"},(0,a.kt)("inlineCode",{parentName:"a"},"Json")),")"),(0,a.kt)("h4",{id:"defaultvalue-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"defaultValue")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"displaytype-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"displayType")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"requestrates-boolean"},(0,a.kt)("inlineCode",{parentName:"h4"},"requestRates")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/boolean"},(0,a.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,a.kt)("h4",{id:"availableoptions-availableoptions"},(0,a.kt)("inlineCode",{parentName:"h4"},"availableOptions")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/objects/available-options"},(0,a.kt)("inlineCode",{parentName:"a"},"AvailableOptions")),")"),(0,a.kt)("h3",{id:"interfaces"},"Interfaces"),(0,a.kt)("h4",{id:"node"},(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/interfaces/node"},(0,a.kt)("inlineCode",{parentName:"a"},"Node"))),(0,a.kt)("p",null,"An object with an ID"))}v.isMDXComponent=!0}}]);