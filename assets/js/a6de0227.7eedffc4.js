"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[25701],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return k}});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=i.createContext({}),d=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return i.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(r),k=n,h=u["".concat(c,".").concat(k)]||u[k]||s[k]||a;return r?i.createElement(h,o(o({ref:t},p),{},{components:r})):i.createElement(h,o({ref:t},p))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var d=2;d<a;d++)o[d]=r[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7748:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var i=r(87462),n=r(63366),a=(r(67294),r(3905)),o=["components"],l={id:"pickup-detail",title:"PickupDetail"},c=void 0,d={unversionedId:"order-view-service/objects/pickup-detail",id:"order-view-service/objects/pickup-detail",isDocsHomePage:!1,title:"PickupDetail",description:"No description",source:"@site/docs/order-view-service/objects/pickup-detail.mdx",sourceDirName:"order-view-service/objects",slug:"/order-view-service/objects/pickup-detail",permalink:"/docs/next/order-view-service/objects/pickup-detail",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/docs/order-view-service/objects/pickup-detail.mdx",tags:[],version:"current",frontMatter:{id:"pickup-detail",title:"PickupDetail"},sidebar:"orderViewSidebar",previous:{title:"Package",permalink:"/docs/next/order-view-service/objects/package"},next:{title:"PickupLocationDetail",permalink:"/docs/next/order-view-service/objects/pickup-location-detail"}},p=[{value:"Fields",id:"fields",children:[{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4},{value:"<code>createdAt</code> (DateTime)",id:"createdat-datetime",children:[],level:4},{value:"<code>updatedAt</code> (DateTime)",id:"updatedat-datetime",children:[],level:4},{value:"<code>pickupLocationDetails</code> (PickupLocationDetail)",id:"pickuplocationdetails-pickuplocationdetail",children:[],level:4},{value:"<code>pickupCart</code> (Boolean)",id:"pickupcart-boolean",children:[],level:4},{value:"<code>googleApiKey</code> (String)",id:"googleapikey-string",children:[],level:4},{value:"<code>showOpeningHours</code> (Boolean)",id:"showopeninghours-boolean",children:[],level:4},{value:"<code>showMap</code> (String)",id:"showmap-string",children:[],level:4},{value:"<code>showAddress</code> (String)",id:"showaddress-string",children:[],level:4},{value:"<code>carrier</code> (Carrier)",id:"carrier-carrier",children:[],level:4}],level:3},{value:"Interfaces",id:"interfaces",children:[{value:"Node",id:"node",children:[],level:4}],level:3}],s={toc:p};function u(e){var t=e.components,r=(0,n.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type PickupDetail implements Node {\n  id: ID!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  pickupLocationDetails(\n    where: PickupLocationDetailWhereInput\n    orderBy: PickupLocationDetailOrderByInput\n    skip: Int\n    after: String\n    before: String\n    first: Int\n    last: Int\n  ): [PickupLocationDetail!]\n  pickupCart: Boolean\n  googleApiKey: String\n  showOpeningHours: Boolean\n  showMap: String\n  showAddress: String\n  carrier: Carrier\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"id-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"createdat-datetime"},(0,a.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/date-time"},(0,a.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,a.kt)("h4",{id:"updatedat-datetime"},(0,a.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/date-time"},(0,a.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,a.kt)("h4",{id:"pickuplocationdetails-pickuplocationdetail"},(0,a.kt)("inlineCode",{parentName:"h4"},"pickupLocationDetails")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/objects/pickup-location-detail"},(0,a.kt)("inlineCode",{parentName:"a"},"PickupLocationDetail")),")"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"where-pickuplocationdetailwhereinput"},(0,a.kt)("inlineCode",{parentName:"h5"},"where")," (",(0,a.kt)("a",{parentName:"h5",href:"../../order-view-service/inputs/pickup-location-detail-where-input"},(0,a.kt)("inlineCode",{parentName:"a"},"PickupLocationDetailWhereInput")),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"orderby-pickuplocationdetailorderbyinput"},(0,a.kt)("inlineCode",{parentName:"h5"},"orderBy")," (",(0,a.kt)("a",{parentName:"h5",href:"../../order-view-service/enums/pickup-location-detail-order-by-input"},(0,a.kt)("inlineCode",{parentName:"a"},"PickupLocationDetailOrderByInput")),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"skip-int"},(0,a.kt)("inlineCode",{parentName:"h5"},"skip")," (",(0,a.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"after-string"},(0,a.kt)("inlineCode",{parentName:"h5"},"after")," (",(0,a.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"before-string"},(0,a.kt)("inlineCode",{parentName:"h5"},"before")," (",(0,a.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"first-int"},(0,a.kt)("inlineCode",{parentName:"h5"},"first")," (",(0,a.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"last-int"},(0,a.kt)("inlineCode",{parentName:"h5"},"last")," (",(0,a.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,a.kt)("h4",{id:"pickupcart-boolean"},(0,a.kt)("inlineCode",{parentName:"h4"},"pickupCart")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/boolean"},(0,a.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,a.kt)("h4",{id:"googleapikey-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"googleApiKey")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"showopeninghours-boolean"},(0,a.kt)("inlineCode",{parentName:"h4"},"showOpeningHours")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/boolean"},(0,a.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,a.kt)("h4",{id:"showmap-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"showMap")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"showaddress-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"showAddress")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"carrier-carrier"},(0,a.kt)("inlineCode",{parentName:"h4"},"carrier")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/objects/carrier"},(0,a.kt)("inlineCode",{parentName:"a"},"Carrier")),")"),(0,a.kt)("h3",{id:"interfaces"},"Interfaces"),(0,a.kt)("h4",{id:"node"},(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/interfaces/node"},(0,a.kt)("inlineCode",{parentName:"a"},"Node"))),(0,a.kt)("p",null,"An object with an ID"))}u.isMDXComponent=!0}}]);