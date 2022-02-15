"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[22813],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,f=m["".concat(s,".").concat(d)]||m[d]||l[d]||o;return n?r.createElement(f,p(p({ref:t},u),{},{components:n})):r.createElement(f,p({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,p=new Array(o);p[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,p[1]=a;for(var c=2;c<o;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68824:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),p=["components"],a={id:"rmsselected-option-input",title:"RMSSelectedOptionInput"},s=void 0,c={unversionedId:"rate-manager-service/inputs/rmsselected-option-input",id:"rate-manager-service/inputs/rmsselected-option-input",isDocsHomePage:!1,title:"RMSSelectedOptionInput",description:"Optional settings for a shipment",source:"@site/docs/rate-manager-service/inputs/rmsselected-option-input.mdx",sourceDirName:"rate-manager-service/inputs",slug:"/rate-manager-service/inputs/rmsselected-option-input",permalink:"/docs/rate-manager-service/inputs/rmsselected-option-input",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/docs/rate-manager-service/inputs/rmsselected-option-input.mdx",tags:[],version:"current",frontMatter:{id:"rmsselected-option-input",title:"RMSSelectedOptionInput"},sidebar:"rateManagerService",previous:{title:"RMSRequestedOptions",permalink:"/docs/rate-manager-service/inputs/rmsrequested-options"},next:{title:"RMSShipmentOptionInput",permalink:"/docs/rate-manager-service/inputs/rmsshipment-option-input"}},u=[{value:"Fields",id:"fields",children:[{value:"<code>shipmentOption</code> (RMSShipmentOptionInput)",id:"shipmentoption-rmsshipmentoptioninput",children:[],level:4}],level:3}],l={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Optional settings for a shipment"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type RMSSelectedOptionInput {\n  shipmentOption: RMSShipmentOptionInput!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"shipmentoption-rmsshipmentoptioninput"},(0,o.kt)("inlineCode",{parentName:"h4"},"shipmentOption")," (",(0,o.kt)("a",{parentName:"h4",href:"../../rate-manager-service/inputs/rmsshipment-option-input"},(0,o.kt)("inlineCode",{parentName:"a"},"RMSShipmentOptionInput")),")"),(0,o.kt)("p",null,"Optional settings for a shipment"))}m.isMDXComponent=!0}}]);