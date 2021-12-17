"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[38969],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=n.createContext({}),l=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=l(r),m=i,u=g["".concat(d,".").concat(m)]||g[m]||p[m]||a;return r?n.createElement(u,o(o({ref:t},c),{},{components:r})):n.createElement(u,o({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=g;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},64794:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return c},default:function(){return g}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],s={id:"user-settings",title:"UserSettings"},d=void 0,l={unversionedId:"rate-manager-service/objects/user-settings",id:"rate-manager-service/objects/user-settings",isDocsHomePage:!1,title:"UserSettings",description:"The settings for the current user",source:"@site/docs/rate-manager-service/objects/user-settings.mdx",sourceDirName:"rate-manager-service/objects",slug:"/rate-manager-service/objects/user-settings",permalink:"/docs/next/rate-manager-service/objects/user-settings",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/docs/rate-manager-service/objects/user-settings.mdx",tags:[],version:"current",frontMatter:{id:"user-settings",title:"UserSettings"},sidebar:"rateManagerService",previous:{title:"TrackingOutput",permalink:"/docs/next/rate-manager-service/objects/tracking-output"}},c=[{value:"Fields",id:"fields",children:[{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4},{value:"<code>createdAt</code> (DateTime)",id:"createdat-datetime",children:[],level:4},{value:"<code>updatedAt</code> (DateTime)",id:"updatedat-datetime",children:[],level:4},{value:"<code>session</code> (String)",id:"session-string",children:[],level:4},{value:"<code>googleApiKey</code> (String)",id:"googleapikey-string",children:[],level:4},{value:"<code>mergedRateCarrierTitle</code> (String)",id:"mergedratecarriertitle-string",children:[],level:4},{value:"<code>mergedRateMethodTitle</code> (String)",id:"mergedratemethodtitle-string",children:[],level:4},{value:"<code>mergedRateCarrierCode</code> (String)",id:"mergedratecarriercode-string",children:[],level:4},{value:"<code>mergedRateMethodCode</code> (String)",id:"mergedratemethodcode-string",children:[],level:4},{value:"<code>shippingTooltipText</code> (String)",id:"shippingtooltiptext-string",children:[],level:4},{value:"<code>ppse</code> (PPSESettings)",id:"ppse-ppsesettings",children:[],level:4}],level:3}],p={toc:c};function g(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The settings for the current user"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type UserSettings {\n  id: ID!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  session: String!\n  googleApiKey: String\n  mergedRateCarrierTitle: String\n  mergedRateMethodTitle: String\n  mergedRateCarrierCode: String\n  mergedRateMethodCode: String\n  shippingTooltipText: String\n  ppse: PPSESettings\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"id-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"createdat-datetime"},(0,a.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/date-time"},(0,a.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,a.kt)("h4",{id:"updatedat-datetime"},(0,a.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/date-time"},(0,a.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,a.kt)("h4",{id:"session-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"session")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"googleapikey-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"googleApiKey")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"API Key to use when rendering google maps"),(0,a.kt)("h4",{id:"mergedratecarriertitle-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"mergedRateCarrierTitle")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"Carrier title used when rates are combined"),(0,a.kt)("h4",{id:"mergedratemethodtitle-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"mergedRateMethodTitle")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"Method title used when rates are combined"),(0,a.kt)("h4",{id:"mergedratecarriercode-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"mergedRateCarrierCode")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"Carrier code used when rates are combined"),(0,a.kt)("h4",{id:"mergedratemethodcode-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"mergedRateMethodCode")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"Method code used when rates are combined"),(0,a.kt)("h4",{id:"shippingtooltiptext-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"shippingTooltipText")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"Shipping tooltip text"),(0,a.kt)("h4",{id:"ppse-ppsesettings"},(0,a.kt)("inlineCode",{parentName:"h4"},"ppse")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/objects/ppsesettings"},(0,a.kt)("inlineCode",{parentName:"a"},"PPSESettings")),")"),(0,a.kt)("p",null,"Product Page Shipping Estimator settings"))}g.isMDXComponent=!0}}]);