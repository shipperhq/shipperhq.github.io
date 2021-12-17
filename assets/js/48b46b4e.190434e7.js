"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[30614],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,p=e.originalType,o=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=c(n),h=i,d=m["".concat(o,".").concat(h)]||m[h]||l[h]||p;return n?r.createElement(d,s(s({ref:t},u),{},{components:n})):r.createElement(d,s({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var p=n.length,s=new Array(p);s[0]=m;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var c=2;c<p;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42337:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(87462),i=n(63366),p=(n(67294),n(3905)),s=["components"],a={id:"rmschosen-shipping-rates-input",title:"RMSChosenShippingRatesInput"},o=void 0,c={unversionedId:"rate-manager-service/inputs/rmschosen-shipping-rates-input",id:"version-1.0.0/rate-manager-service/inputs/rmschosen-shipping-rates-input",isDocsHomePage:!1,title:"RMSChosenShippingRatesInput",description:"User-selected shipment details",source:"@site/versioned_docs/version-1.0.0/rate-manager-service/inputs/rmschosen-shipping-rates-input.mdx",sourceDirName:"rate-manager-service/inputs",slug:"/rate-manager-service/inputs/rmschosen-shipping-rates-input",permalink:"/docs/rate-manager-service/inputs/rmschosen-shipping-rates-input",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/versioned_docs/version-1.0.0/rate-manager-service/inputs/rmschosen-shipping-rates-input.mdx",tags:[],version:"1.0.0",frontMatter:{id:"rmschosen-shipping-rates-input",title:"RMSChosenShippingRatesInput"},sidebar:"version-1.0.0/rateManagerService",previous:{title:"RMSCart",permalink:"/docs/rate-manager-service/inputs/rmscart"},next:{title:"RMSCustomer",permalink:"/docs/rate-manager-service/inputs/rmscustomer"}},u=[{value:"Fields",id:"fields",children:[{value:"<code>shipment</code> (RMSShipmentShippingRateInput)",id:"shipment-rmsshipmentshippingrateinput",children:[],level:4}],level:3}],l={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,s);return(0,p.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"User-selected shipment details"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"type RMSChosenShippingRatesInput {\n  shipment: [RMSShipmentShippingRateInput!]!\n}\n")),(0,p.kt)("h3",{id:"fields"},"Fields"),(0,p.kt)("h4",{id:"shipment-rmsshipmentshippingrateinput"},(0,p.kt)("inlineCode",{parentName:"h4"},"shipment")," (",(0,p.kt)("a",{parentName:"h4",href:"../../rate-manager-service/inputs/rmsshipment-shipping-rate-input"},(0,p.kt)("inlineCode",{parentName:"a"},"RMSShipmentShippingRateInput")),")"),(0,p.kt)("p",null,"User-selected shipment details"))}m.isMDXComponent=!0}}]);