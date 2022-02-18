"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[9210],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=a,v=u["".concat(c,".").concat(f)]||u[f]||p[f]||o;return r?n.createElement(v,i(i({ref:t},d),{},{components:r})):n.createElement(v,i({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},96083:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={id:"postage-cost",title:"PostageCost"},c=void 0,s={unversionedId:"order-view-service/objects/postage-cost",id:"order-view-service/objects/postage-cost",isDocsHomePage:!1,title:"PostageCost",description:"No description",source:"@site/docs/order-view-service/objects/postage-cost.mdx",sourceDirName:"order-view-service/objects",slug:"/order-view-service/objects/postage-cost",permalink:"/docs/order-view-service/objects/postage-cost",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/docs/order-view-service/objects/postage-cost.mdx",tags:[],version:"current",frontMatter:{id:"postage-cost",title:"PostageCost"},sidebar:"orderViewSidebar",previous:{title:"PickupLocationDetail",permalink:"/docs/order-view-service/objects/pickup-location-detail"},next:{title:"Quote",permalink:"/docs/order-view-service/objects/quote"}},d=[{value:"Fields",id:"fields",children:[{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4},{value:"<code>duties</code> (Float)",id:"duties-float",children:[],level:4},{value:"<code>insurance</code> (Float)",id:"insurance-float",children:[],level:4},{value:"<code>shipping</code> (Float)",id:"shipping-float",children:[],level:4},{value:"<code>tax</code> (Float)",id:"tax-float",children:[],level:4},{value:"<code>total</code> (Float)",id:"total-float",children:[],level:4},{value:"<code>label</code> (Label)",id:"label-label",children:[],level:4}],level:3},{value:"Interfaces",id:"interfaces",children:[{value:"Node",id:"node",children:[],level:4}],level:3}],p={toc:d};function u(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type PostageCost implements Node {\n  id: ID!\n  duties: Float\n  insurance: Float\n  shipping: Float\n  tax: Float\n  total: Float\n  label: Label\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"id-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,o.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,o.kt)("h4",{id:"duties-float"},(0,o.kt)("inlineCode",{parentName:"h4"},"duties")," (",(0,o.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/float"},(0,o.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,o.kt)("h4",{id:"insurance-float"},(0,o.kt)("inlineCode",{parentName:"h4"},"insurance")," (",(0,o.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/float"},(0,o.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,o.kt)("h4",{id:"shipping-float"},(0,o.kt)("inlineCode",{parentName:"h4"},"shipping")," (",(0,o.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/float"},(0,o.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,o.kt)("h4",{id:"tax-float"},(0,o.kt)("inlineCode",{parentName:"h4"},"tax")," (",(0,o.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/float"},(0,o.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,o.kt)("h4",{id:"total-float"},(0,o.kt)("inlineCode",{parentName:"h4"},"total")," (",(0,o.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/float"},(0,o.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,o.kt)("h4",{id:"label-label"},(0,o.kt)("inlineCode",{parentName:"h4"},"label")," (",(0,o.kt)("a",{parentName:"h4",href:"../../order-view-service/objects/label"},(0,o.kt)("inlineCode",{parentName:"a"},"Label")),")"),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"node"},(0,o.kt)("a",{parentName:"h4",href:"../../order-view-service/interfaces/node"},(0,o.kt)("inlineCode",{parentName:"a"},"Node"))),(0,o.kt)("p",null,"An object with an ID"))}u.isMDXComponent=!0}}]);