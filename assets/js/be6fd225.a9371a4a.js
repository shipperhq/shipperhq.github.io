"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[7309],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return v}});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):d(d({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=s(t),v=i,h=m["".concat(c,".").concat(v)]||m[v]||p[v]||a;return t?n.createElement(h,d(d({ref:r},l),{},{components:t})):n.createElement(h,d({ref:r},l))}));function v(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,d=new Array(a);d[0]=m;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,d[1]=o;for(var s=2;s<a;s++)d[s]=t[s];return n.createElement.apply(null,d)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},203:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return m}});var n=t(7462),i=t(3366),a=(t(7294),t(3905)),d=["components"],o={id:"address",title:"Address"},c=void 0,s={unversionedId:"order-view-service/objects/address",id:"order-view-service/objects/address",isDocsHomePage:!1,title:"Address",description:"No description",source:"@site/docs/order-view-service/objects/address.mdx",sourceDirName:"order-view-service/objects",slug:"/order-view-service/objects/address",permalink:"/docs/order-view-service/objects/address",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/docs/order-view-service/objects/address.mdx",tags:[],version:"current",frontMatter:{id:"address",title:"Address"},sidebar:"orderViewSidebar",previous:{title:"AccessToken",permalink:"/docs/order-view-service/objects/access-token"},next:{title:"AdvancedFees",permalink:"/docs/order-view-service/objects/advanced-fees"}},l=[{value:"Fields",id:"fields",children:[{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4},{value:"<code>createdAt</code> (DateTime)",id:"createdat-datetime",children:[],level:4},{value:"<code>updatedAt</code> (DateTime)",id:"updatedat-datetime",children:[],level:4},{value:"<code>country</code> (String)",id:"country-string",children:[],level:4},{value:"<code>region</code> (String)",id:"region-string",children:[],level:4},{value:"<code>city</code> (String)",id:"city-string",children:[],level:4},{value:"<code>street</code> (String)",id:"street-string",children:[],level:4},{value:"<code>street2</code> (String)",id:"street2-string",children:[],level:4},{value:"<code>zipcode</code> (String)",id:"zipcode-string",children:[],level:4},{value:"<code>firstName</code> (String)",id:"firstname-string",children:[],level:4},{value:"<code>lastName</code> (String)",id:"lastname-string",children:[],level:4},{value:"<code>email</code> (String)",id:"email-string",children:[],level:4},{value:"<code>company</code> (String)",id:"company-string",children:[],level:4},{value:"<code>telephone</code> (String)",id:"telephone-string",children:[],level:4},{value:"<code>order</code> (Order)",id:"order-order",children:[],level:4}],level:3},{value:"Interfaces",id:"interfaces",children:[{value:"Node",id:"node",children:[],level:4}],level:3}],p={toc:l};function m(e){var r=e.components,t=(0,i.Z)(e,d);return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type Address implements Node {\n  id: ID!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  country: String\n  region: String\n  city: String\n  street: String\n  street2: String\n  zipcode: String\n  firstName: String\n  lastName: String\n  email: String\n  company: String\n  telephone: String\n  order: Order\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"id-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"createdat-datetime"},(0,a.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/date-time"},(0,a.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,a.kt)("h4",{id:"updatedat-datetime"},(0,a.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/date-time"},(0,a.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,a.kt)("h4",{id:"country-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"country")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"region-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"region")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"city-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"city")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"street-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"street")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"street2-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"street2")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"zipcode-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"zipcode")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"firstname-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"firstName")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"lastname-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"lastName")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"email-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"email")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"company-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"company")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"telephone-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"telephone")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"order-order"},(0,a.kt)("inlineCode",{parentName:"h4"},"order")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/objects/order"},(0,a.kt)("inlineCode",{parentName:"a"},"Order")),")"),(0,a.kt)("h3",{id:"interfaces"},"Interfaces"),(0,a.kt)("h4",{id:"node"},(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/interfaces/node"},(0,a.kt)("inlineCode",{parentName:"a"},"Node"))),(0,a.kt)("p",null,"An object with an ID"))}m.isMDXComponent=!0}}]);