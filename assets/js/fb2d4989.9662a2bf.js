"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[24],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3705:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],s={id:"response-summary",title:"ResponseSummary"},c=void 0,l={unversionedId:"label-service/objects/response-summary",id:"label-service/objects/response-summary",isDocsHomePage:!1,title:"ResponseSummary",description:"No description",source:"@site/docs/label-service/objects/response-summary.mdx",sourceDirName:"label-service/objects",slug:"/label-service/objects/response-summary",permalink:"/docs/label-service/objects/response-summary",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/docs/label-service/objects/response-summary.mdx",tags:[],version:"current",frontMatter:{id:"response-summary",title:"ResponseSummary"},sidebar:"labelService",previous:{title:"PostageCost",permalink:"/docs/label-service/objects/postage-cost"},next:{title:"TrackingOutput",permalink:"/docs/label-service/objects/tracking-output"}},p=[{value:"Fields",id:"fields",children:[{value:"<code>date</code> (Date)",id:"date-date",children:[],level:4},{value:"<code>version</code> (String)",id:"version-string",children:[],level:4},{value:"<code>transactionId</code> (String)",id:"transactionid-string",children:[],level:4},{value:"<code>status</code> (Int)",id:"status-int",children:[],level:4}],level:3}],u={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type ResponseSummary {\n  date: Date\n  version: String\n  transactionId: String\n  status: Int!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"date-date"},(0,i.kt)("inlineCode",{parentName:"h4"},"date")," (",(0,i.kt)("a",{parentName:"h4",href:"../../label-service/scalars/date"},(0,i.kt)("inlineCode",{parentName:"a"},"Date")),")"),(0,i.kt)("h4",{id:"version-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"version")," (",(0,i.kt)("a",{parentName:"h4",href:"../../label-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"transactionid-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"transactionId")," (",(0,i.kt)("a",{parentName:"h4",href:"../../label-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"status-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"status")," (",(0,i.kt)("a",{parentName:"h4",href:"../../label-service/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"))}d.isMDXComponent=!0}}]);