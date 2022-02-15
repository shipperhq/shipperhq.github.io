"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[30511],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return u}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=d(r),u=i,h=m["".concat(s,".").concat(u)]||m[u]||p[u]||a;return r?n.createElement(h,o(o({ref:t},l),{},{components:r})):n.createElement(h,o({ref:t},l))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var d=2;d<a;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},62243:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return l},default:function(){return m}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],c={id:"time-in-transit-options",title:"TimeInTransitOptions"},s=void 0,d={unversionedId:"rate-manager-service/objects/time-in-transit-options",id:"version-1.0.0/rate-manager-service/objects/time-in-transit-options",isDocsHomePage:!1,title:"TimeInTransitOptions",description:"No description",source:"@site/versioned_docs/version-1.0.0/rate-manager-service/objects/time-in-transit-options.mdx",sourceDirName:"rate-manager-service/objects",slug:"/rate-manager-service/objects/time-in-transit-options",permalink:"/docs/1.0.0/rate-manager-service/objects/time-in-transit-options",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/versioned_docs/version-1.0.0/rate-manager-service/objects/time-in-transit-options.mdx",tags:[],version:"1.0.0",frontMatter:{id:"time-in-transit-options",title:"TimeInTransitOptions"},sidebar:"version-1.0.0/rateManagerService",previous:{title:"StoredRMSSiteDetails",permalink:"/docs/1.0.0/rate-manager-service/objects/stored-rmssite-details"},next:{title:"TimeSlot",permalink:"/docs/1.0.0/rate-manager-service/objects/time-slot"}},l=[{value:"Fields",id:"fields",children:[{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4},{value:"<code>dispatchDate</code> (String)",id:"dispatchdate-string",children:[],level:4},{value:"<code>deliveryDate</code> (String)",id:"deliverydate-string",children:[],level:4},{value:"<code>method</code> (Method)",id:"method-method",children:[],level:4},{value:"<code>rateBreakdown</code> (RateBreakdown)",id:"ratebreakdown-ratebreakdown",children:[],level:4}],level:3},{value:"Interfaces",id:"interfaces",children:[{value:"Node",id:"node",children:[],level:4}],level:3}],p={toc:l};function m(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type TimeInTransitOptions implements Node {\n  id: ID!\n  dispatchDate: String\n  deliveryDate: String\n  method: Method\n  rateBreakdown: RateBreakdown\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"id-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"dispatchdate-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"dispatchDate")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"deliverydate-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"deliveryDate")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"method-method"},(0,a.kt)("inlineCode",{parentName:"h4"},"method")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/objects/method"},(0,a.kt)("inlineCode",{parentName:"a"},"Method")),")"),(0,a.kt)("h4",{id:"ratebreakdown-ratebreakdown"},(0,a.kt)("inlineCode",{parentName:"h4"},"rateBreakdown")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/objects/rate-breakdown"},(0,a.kt)("inlineCode",{parentName:"a"},"RateBreakdown")),")"),(0,a.kt)("h3",{id:"interfaces"},"Interfaces"),(0,a.kt)("h4",{id:"node"},(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/interfaces/node"},(0,a.kt)("inlineCode",{parentName:"a"},"Node"))),(0,a.kt)("p",null,"An object with an ID"))}m.isMDXComponent=!0}}]);