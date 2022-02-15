"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[66483],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return b}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(r),b=a,g=u["".concat(c,".").concat(b)]||u[b]||d[b]||i;return r?n.createElement(g,l(l({ref:t},p),{},{components:r})):n.createElement(g,l({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},62412:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),l=["components"],o={id:"label",title:"Label"},c=void 0,s={unversionedId:"label-service/objects/label",id:"label-service/objects/label",isDocsHomePage:!1,title:"Label",description:"No description",source:"@site/docs/label-service/objects/label.mdx",sourceDirName:"label-service/objects",slug:"/label-service/objects/label",permalink:"/docs/label-service/objects/label",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/docs/label-service/objects/label.mdx",tags:[],version:"current",frontMatter:{id:"label",title:"Label"},sidebar:"labelService",previous:{title:"LabelOutput",permalink:"/docs/label-service/objects/label-output"},next:{title:"ListingOutput",permalink:"/docs/label-service/objects/listing-output"}},p=[{value:"Fields",id:"fields",children:[{value:"<code>labelImage</code> (String)",id:"labelimage-string",children:[],level:4},{value:"<code>labelUrl</code> (String)",id:"labelurl-string",children:[],level:4},{value:"<code>shipmentId</code> (String)",id:"shipmentid-string",children:[],level:4},{value:"<code>postageCost</code> (PostageCost)",id:"postagecost-postagecost",children:[],level:4},{value:"<code>trackingId</code> (String)",id:"trackingid-string",children:[],level:4}],level:3}],d={toc:p};function u(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type Label {\n  labelImage: String\n  labelUrl: String\n  shipmentId: String\n  postageCost: PostageCost\n  trackingId: String\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"labelimage-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"labelImage")," (",(0,i.kt)("a",{parentName:"h4",href:"../../label-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"labelurl-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"labelUrl")," (",(0,i.kt)("a",{parentName:"h4",href:"../../label-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"shipmentid-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"shipmentId")," (",(0,i.kt)("a",{parentName:"h4",href:"../../label-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"postagecost-postagecost"},(0,i.kt)("inlineCode",{parentName:"h4"},"postageCost")," (",(0,i.kt)("a",{parentName:"h4",href:"../../label-service/objects/postage-cost"},(0,i.kt)("inlineCode",{parentName:"a"},"PostageCost")),")"),(0,i.kt)("h4",{id:"trackingid-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"trackingId")," (",(0,i.kt)("a",{parentName:"h4",href:"../../label-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))}u.isMDXComponent=!0}}]);