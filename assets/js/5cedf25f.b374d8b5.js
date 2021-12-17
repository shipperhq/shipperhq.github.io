"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[85402],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return h}});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=a.createContext({}),c=function(e){var r=a.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=c(e.components);return a.createElement(d.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(t),h=n,u=m["".concat(d,".").concat(h)]||m[h]||s[h]||i;return t?a.createElement(u,o(o({ref:r},p),{},{components:t})):a.createElement(u,o({ref:r},p))}));function h(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var d in r)hasOwnProperty.call(r,d)&&(l[d]=r[d]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9408:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var a=t(87462),n=t(63366),i=(t(67294),t(3905)),o=["components"],l={id:"rmspackage",title:"RMSPackage"},d=void 0,c={unversionedId:"order-view-service/objects/rmspackage",id:"order-view-service/objects/rmspackage",isDocsHomePage:!1,title:"RMSPackage",description:"No description",source:"@site/docs/order-view-service/objects/rmspackage.mdx",sourceDirName:"order-view-service/objects",slug:"/order-view-service/objects/rmspackage",permalink:"/docs/next/order-view-service/objects/rmspackage",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/docs/order-view-service/objects/rmspackage.mdx",tags:[],version:"current",frontMatter:{id:"rmspackage",title:"RMSPackage"},sidebar:"orderViewSidebar",previous:{title:"RMSOption",permalink:"/docs/next/order-view-service/objects/rmsoption"},next:{title:"RMSPickupDetail",permalink:"/docs/next/order-view-service/objects/rmspickup-detail"}},p=[{value:"Fields",id:"fields",children:[{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4},{value:"<code>weight</code> (Float)",id:"weight-float",children:[],level:4},{value:"<code>length</code> (Float)",id:"length-float",children:[],level:4},{value:"<code>width</code> (Float)",id:"width-float",children:[],level:4},{value:"<code>height</code> (Float)",id:"height-float",children:[],level:4},{value:"<code>packingWeight</code> (Float)",id:"packingweight-float",children:[],level:4},{value:"<code>declaredValue</code> (Float)",id:"declaredvalue-float",children:[],level:4},{value:"<code>boxedItems</code> (RMSBoxedItem)",id:"boxeditems-rmsboxeditem",children:[],level:4},{value:"<code>rMSCarrier</code> (RMSCarrier)",id:"rmscarrier-rmscarrier",children:[],level:4}],level:3},{value:"Interfaces",id:"interfaces",children:[{value:"Node",id:"node",children:[],level:4}],level:3}],s={toc:p};function m(e){var r=e.components,t=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type RMSPackage implements Node {\n  id: ID!\n  weight: Float!\n  length: Float\n  width: Float\n  height: Float\n  packingWeight: Float\n  declaredValue: Float\n  boxedItems(\n    where: RMSBoxedItemWhereInput\n    orderBy: RMSBoxedItemOrderByInput\n    skip: Int\n    after: String\n    before: String\n    first: Int\n    last: Int\n  ): [RMSBoxedItem!]\n  rMSCarrier: RMSCarrier\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"id-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"weight-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"weight")," (",(0,i.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("h4",{id:"length-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"length")," (",(0,i.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("h4",{id:"width-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"width")," (",(0,i.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("h4",{id:"height-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"height")," (",(0,i.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("h4",{id:"packingweight-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"packingWeight")," (",(0,i.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("h4",{id:"declaredvalue-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"declaredValue")," (",(0,i.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("h4",{id:"boxeditems-rmsboxeditem"},(0,i.kt)("inlineCode",{parentName:"h4"},"boxedItems")," (",(0,i.kt)("a",{parentName:"h4",href:"../../order-view-service/objects/rmsboxed-item"},(0,i.kt)("inlineCode",{parentName:"a"},"RMSBoxedItem")),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"where-rmsboxeditemwhereinput"},(0,i.kt)("inlineCode",{parentName:"h5"},"where")," (",(0,i.kt)("a",{parentName:"h5",href:"../../order-view-service/inputs/rmsboxed-item-where-input"},(0,i.kt)("inlineCode",{parentName:"a"},"RMSBoxedItemWhereInput")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"orderby-rmsboxeditemorderbyinput"},(0,i.kt)("inlineCode",{parentName:"h5"},"orderBy")," (",(0,i.kt)("a",{parentName:"h5",href:"../../order-view-service/enums/rmsboxed-item-order-by-input"},(0,i.kt)("inlineCode",{parentName:"a"},"RMSBoxedItemOrderByInput")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"skip-int"},(0,i.kt)("inlineCode",{parentName:"h5"},"skip")," (",(0,i.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"after-string"},(0,i.kt)("inlineCode",{parentName:"h5"},"after")," (",(0,i.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"before-string"},(0,i.kt)("inlineCode",{parentName:"h5"},"before")," (",(0,i.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"first-int"},(0,i.kt)("inlineCode",{parentName:"h5"},"first")," (",(0,i.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"last-int"},(0,i.kt)("inlineCode",{parentName:"h5"},"last")," (",(0,i.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,i.kt)("h4",{id:"rmscarrier-rmscarrier"},(0,i.kt)("inlineCode",{parentName:"h4"},"rMSCarrier")," (",(0,i.kt)("a",{parentName:"h4",href:"../../order-view-service/objects/rmscarrier"},(0,i.kt)("inlineCode",{parentName:"a"},"RMSCarrier")),")"),(0,i.kt)("h3",{id:"interfaces"},"Interfaces"),(0,i.kt)("h4",{id:"node"},(0,i.kt)("a",{parentName:"h4",href:"../../order-view-service/interfaces/node"},(0,i.kt)("inlineCode",{parentName:"a"},"Node"))),(0,i.kt)("p",null,"An object with an ID"))}m.isMDXComponent=!0}}]);