"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[90830],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return m}});var i=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,i,n=function(e,r){if(null==e)return{};var t,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=i.createContext({}),d=function(e){var r=i.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=d(e.components);return i.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},u=i.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=n,k=u["".concat(c,".").concat(m)]||u[m]||s[m]||a;return t?i.createElement(k,o(o({ref:r},p),{},{components:t})):i.createElement(k,o({ref:r},p))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,o=new Array(a);o[0]=u;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var d=2;d<a;d++)o[d]=t[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},85547:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var i=t(87462),n=t(63366),a=(t(67294),t(3905)),o=["components"],l={id:"rmspickup-detail",title:"RMSPickupDetail"},c=void 0,d={unversionedId:"order-view-service/objects/rmspickup-detail",id:"order-view-service/objects/rmspickup-detail",isDocsHomePage:!1,title:"RMSPickupDetail",description:"No description",source:"@site/docs/order-view-service/objects/rmspickup-detail.mdx",sourceDirName:"order-view-service/objects",slug:"/order-view-service/objects/rmspickup-detail",permalink:"/docs/order-view-service/objects/rmspickup-detail",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/docs/order-view-service/objects/rmspickup-detail.mdx",tags:[],version:"current",frontMatter:{id:"rmspickup-detail",title:"RMSPickupDetail"},sidebar:"orderViewSidebar",previous:{title:"RMSPackage",permalink:"/docs/order-view-service/objects/rmspackage"},next:{title:"RMSPickupLocationDetail",permalink:"/docs/order-view-service/objects/rmspickup-location-detail"}},p=[{value:"Fields",id:"fields",children:[{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4},{value:"<code>createdAt</code> (DateTime)",id:"createdat-datetime",children:[],level:4},{value:"<code>updatedAt</code> (DateTime)",id:"updatedat-datetime",children:[],level:4},{value:"<code>pickupLocationDetails</code> (RMSPickupLocationDetail)",id:"pickuplocationdetails-rmspickuplocationdetail",children:[],level:4},{value:"<code>showOpeningHours</code> (Boolean)",id:"showopeninghours-boolean",children:[],level:4},{value:"<code>showMap</code> (String)",id:"showmap-string",children:[],level:4},{value:"<code>showAddress</code> (String)",id:"showaddress-string",children:[],level:4},{value:"<code>googleApiKey</code> (String)",id:"googleapikey-string",children:[],level:4},{value:"<code>pickupCart</code> (Boolean)",id:"pickupcart-boolean",children:[],level:4},{value:"<code>rMSCarrier</code> (RMSCarrier)",id:"rmscarrier-rmscarrier",children:[],level:4}],level:3},{value:"Interfaces",id:"interfaces",children:[{value:"Node",id:"node",children:[],level:4}],level:3}],s={toc:p};function u(e){var r=e.components,t=(0,n.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type RMSPickupDetail implements Node {\n  id: ID!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  pickupLocationDetails(\n    where: RMSPickupLocationDetailWhereInput\n    orderBy: RMSPickupLocationDetailOrderByInput\n    skip: Int\n    after: String\n    before: String\n    first: Int\n    last: Int\n  ): [RMSPickupLocationDetail!]\n  showOpeningHours: Boolean\n  showMap: String\n  showAddress: String\n  googleApiKey: String\n  pickupCart: Boolean\n  rMSCarrier: RMSCarrier\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"id-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"createdat-datetime"},(0,a.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/date-time"},(0,a.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,a.kt)("h4",{id:"updatedat-datetime"},(0,a.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/date-time"},(0,a.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,a.kt)("h4",{id:"pickuplocationdetails-rmspickuplocationdetail"},(0,a.kt)("inlineCode",{parentName:"h4"},"pickupLocationDetails")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/objects/rmspickup-location-detail"},(0,a.kt)("inlineCode",{parentName:"a"},"RMSPickupLocationDetail")),")"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"where-rmspickuplocationdetailwhereinput"},(0,a.kt)("inlineCode",{parentName:"h5"},"where")," (",(0,a.kt)("a",{parentName:"h5",href:"../../order-view-service/inputs/rmspickup-location-detail-where-input"},(0,a.kt)("inlineCode",{parentName:"a"},"RMSPickupLocationDetailWhereInput")),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"orderby-rmspickuplocationdetailorderbyinput"},(0,a.kt)("inlineCode",{parentName:"h5"},"orderBy")," (",(0,a.kt)("a",{parentName:"h5",href:"../../order-view-service/enums/rmspickup-location-detail-order-by-input"},(0,a.kt)("inlineCode",{parentName:"a"},"RMSPickupLocationDetailOrderByInput")),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"skip-int"},(0,a.kt)("inlineCode",{parentName:"h5"},"skip")," (",(0,a.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"after-string"},(0,a.kt)("inlineCode",{parentName:"h5"},"after")," (",(0,a.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"before-string"},(0,a.kt)("inlineCode",{parentName:"h5"},"before")," (",(0,a.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"first-int"},(0,a.kt)("inlineCode",{parentName:"h5"},"first")," (",(0,a.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"last-int"},(0,a.kt)("inlineCode",{parentName:"h5"},"last")," (",(0,a.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,a.kt)("h4",{id:"showopeninghours-boolean"},(0,a.kt)("inlineCode",{parentName:"h4"},"showOpeningHours")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/boolean"},(0,a.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,a.kt)("h4",{id:"showmap-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"showMap")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"showaddress-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"showAddress")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"googleapikey-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"googleApiKey")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"pickupcart-boolean"},(0,a.kt)("inlineCode",{parentName:"h4"},"pickupCart")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/boolean"},(0,a.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,a.kt)("h4",{id:"rmscarrier-rmscarrier"},(0,a.kt)("inlineCode",{parentName:"h4"},"rMSCarrier")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/objects/rmscarrier"},(0,a.kt)("inlineCode",{parentName:"a"},"RMSCarrier")),")"),(0,a.kt)("h3",{id:"interfaces"},"Interfaces"),(0,a.kt)("h4",{id:"node"},(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/interfaces/node"},(0,a.kt)("inlineCode",{parentName:"a"},"Node"))),(0,a.kt)("p",null,"An object with an ID"))}u.isMDXComponent=!0}}]);