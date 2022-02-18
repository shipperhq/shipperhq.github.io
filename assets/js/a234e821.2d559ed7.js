"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[34830],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return h}});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),v=u(t),h=i,f=v["".concat(s,".").concat(h)]||v[h]||l[h]||o;return t?n.createElement(f,a(a({ref:r},c),{},{components:t})):n.createElement(f,a({ref:r},c))}));function h(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=v;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var u=2;u<o;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},54738:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return v}});var n=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],p={id:"retrieve-last-shipping-quote",title:"retrieveLastShippingQuote"},s=void 0,u={unversionedId:"rate-manager-service/queries/retrieve-last-shipping-quote",id:"version-1.0.0/rate-manager-service/queries/retrieve-last-shipping-quote",isDocsHomePage:!1,title:"retrieveLastShippingQuote",description:"Retrieves the full details of the last shipping quote.",source:"@site/versioned_docs/version-1.0.0/rate-manager-service/queries/retrieve-last-shipping-quote.mdx",sourceDirName:"rate-manager-service/queries",slug:"/rate-manager-service/queries/retrieve-last-shipping-quote",permalink:"/docs/1.0.0/rate-manager-service/queries/retrieve-last-shipping-quote",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/versioned_docs/version-1.0.0/rate-manager-service/queries/retrieve-last-shipping-quote.mdx",tags:[],version:"1.0.0",frontMatter:{id:"retrieve-last-shipping-quote",title:"retrieveLastShippingQuote"},sidebar:"version-1.0.0/rateManagerService",previous:{title:"listPrinters",permalink:"/docs/1.0.0/rate-manager-service/queries/list-printers"},next:{title:"retrieveShippingQuote",permalink:"/docs/1.0.0/rate-manager-service/queries/retrieve-shipping-quote"}},c=[{value:"Type",id:"type",children:[{value:"RMSShippingQuote",id:"rmsshippingquote",children:[],level:4}],level:3}],l={toc:c};function v(e){var r=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Retrieves the full details of the last shipping quote.\n(Requires use of the x-shipperhq-secret-token or x-shipperhq-public-token headers.)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"retrieveLastShippingQuote: RMSShippingQuote\n\n")),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"rmsshippingquote"},(0,o.kt)("a",{parentName:"h4",href:"../../rate-manager-service/objects/rmsshipping-quote"},(0,o.kt)("inlineCode",{parentName:"a"},"RMSShippingQuote"))))}v.isMDXComponent=!0}}]);