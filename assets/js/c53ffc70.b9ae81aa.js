"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[4701],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return h}});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=a.createContext({}),c=function(e){var r=a.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=c(e.components);return a.createElement(d.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(t),h=n,u=m["".concat(d,".").concat(h)]||m[h]||p[h]||i;return t?a.createElement(u,l(l({ref:r},s),{},{components:t})):a.createElement(u,l({ref:r},s))}));function h(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var d in r)hasOwnProperty.call(r,d)&&(o[d]=r[d]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7167:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var a=t(87462),n=t(63366),i=(t(67294),t(3905)),l=["components"],o={id:"label",title:"Label"},d=void 0,c={unversionedId:"order-view-service/objects/label",id:"order-view-service/objects/label",isDocsHomePage:!1,title:"Label",description:"No description",source:"@site/docs/order-view-service/objects/label.mdx",sourceDirName:"order-view-service/objects",slug:"/order-view-service/objects/label",permalink:"/docs/order-view-service/objects/label",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/docs/order-view-service/objects/label.mdx",tags:[],version:"current",frontMatter:{id:"label",title:"Label"},sidebar:"orderViewSidebar",previous:{title:"LabelResultItem",permalink:"/docs/order-view-service/objects/label-result-item"},next:{title:"MasterQuote",permalink:"/docs/order-view-service/objects/master-quote"}},s=[{value:"Fields",id:"fields",children:[{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4},{value:"<code>createdAt</code> (DateTime)",id:"createdat-datetime",children:[],level:4},{value:"<code>updatedAt</code> (DateTime)",id:"updatedat-datetime",children:[],level:4},{value:"<code>order</code> (Order)",id:"order-order",children:[],level:4},{value:"<code>carrierCode</code> (String)",id:"carriercode-string",children:[],level:4},{value:"<code>carrierName</code> (String)",id:"carriername-string",children:[],level:4},{value:"<code>methodName</code> (String)",id:"methodname-string",children:[],level:4},{value:"<code>trackingId</code> (String)",id:"trackingid-string",children:[],level:4},{value:"<code>labelUrl</code> (String)",id:"labelurl-string",children:[],level:4},{value:"<code>labelImage</code> (String)",id:"labelimage-string",children:[],level:4},{value:"<code>postageCost</code> (PostageCost)",id:"postagecost-postagecost",children:[],level:4},{value:"<code>items</code> (LabelItem)",id:"items-labelitem",children:[],level:4},{value:"<code>packageId</code> (String)",id:"packageid-string",children:[],level:4}],level:3},{value:"Interfaces",id:"interfaces",children:[{value:"Node",id:"node",children:[],level:4}],level:3}],p={toc:s};function m(e){var r=e.components,t=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type Label implements Node {\n  id: ID!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  order: Order!\n  carrierCode: String!\n  carrierName: String!\n  methodName: String!\n  trackingId: String\n  labelUrl: String\n  labelImage: String\n  postageCost: PostageCost\n  items(\n    where: LabelItemWhereInput\n    orderBy: LabelItemOrderByInput\n    skip: Int\n    after: String\n    before: String\n    first: Int\n    last: Int\n  ): [LabelItem!]\n  packageId: String\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"id-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"createdat-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,i.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,i.kt)("h4",{id:"updatedat-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,i.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,i.kt)("h4",{id:"order-order"},(0,i.kt)("inlineCode",{parentName:"h4"},"order")," (",(0,i.kt)("a",{parentName:"h4",href:"../../order-view-service/objects/order"},(0,i.kt)("inlineCode",{parentName:"a"},"Order")),")"),(0,i.kt)("h4",{id:"carriercode-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"carrierCode")," (",(0,i.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"carriername-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"carrierName")," (",(0,i.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"methodname-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"methodName")," (",(0,i.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"trackingid-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"trackingId")," (",(0,i.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"labelurl-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"labelUrl")," (",(0,i.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"labelimage-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"labelImage")," (",(0,i.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"postagecost-postagecost"},(0,i.kt)("inlineCode",{parentName:"h4"},"postageCost")," (",(0,i.kt)("a",{parentName:"h4",href:"../../order-view-service/objects/postage-cost"},(0,i.kt)("inlineCode",{parentName:"a"},"PostageCost")),")"),(0,i.kt)("h4",{id:"items-labelitem"},(0,i.kt)("inlineCode",{parentName:"h4"},"items")," (",(0,i.kt)("a",{parentName:"h4",href:"../../order-view-service/objects/label-item"},(0,i.kt)("inlineCode",{parentName:"a"},"LabelItem")),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"where-labelitemwhereinput"},(0,i.kt)("inlineCode",{parentName:"h5"},"where")," (",(0,i.kt)("a",{parentName:"h5",href:"../../order-view-service/inputs/label-item-where-input"},(0,i.kt)("inlineCode",{parentName:"a"},"LabelItemWhereInput")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"orderby-labelitemorderbyinput"},(0,i.kt)("inlineCode",{parentName:"h5"},"orderBy")," (",(0,i.kt)("a",{parentName:"h5",href:"../../order-view-service/enums/label-item-order-by-input"},(0,i.kt)("inlineCode",{parentName:"a"},"LabelItemOrderByInput")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"skip-int"},(0,i.kt)("inlineCode",{parentName:"h5"},"skip")," (",(0,i.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"after-string"},(0,i.kt)("inlineCode",{parentName:"h5"},"after")," (",(0,i.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"before-string"},(0,i.kt)("inlineCode",{parentName:"h5"},"before")," (",(0,i.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"first-int"},(0,i.kt)("inlineCode",{parentName:"h5"},"first")," (",(0,i.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"last-int"},(0,i.kt)("inlineCode",{parentName:"h5"},"last")," (",(0,i.kt)("a",{parentName:"h5",href:"../../order-view-service/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,i.kt)("h4",{id:"packageid-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"packageId")," (",(0,i.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h3",{id:"interfaces"},"Interfaces"),(0,i.kt)("h4",{id:"node"},(0,i.kt)("a",{parentName:"h4",href:"../../order-view-service/interfaces/node"},(0,i.kt)("inlineCode",{parentName:"a"},"Node"))),(0,i.kt)("p",null,"An object with an ID"))}m.isMDXComponent=!0}}]);