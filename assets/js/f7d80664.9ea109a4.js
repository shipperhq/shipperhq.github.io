"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[6464],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=c(n),m=i,f=h["".concat(p,".").concat(m)]||h[m]||u[m]||a;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},47275:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return h}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],s={id:"reset-shipping-chosen",title:"resetShippingChosen"},p=void 0,c={unversionedId:"rate-manager-service/mutations/reset-shipping-chosen",id:"rate-manager-service/mutations/reset-shipping-chosen",isDocsHomePage:!1,title:"resetShippingChosen",description:"Reset all cart options to their original values.",source:"@site/docs/rate-manager-service/mutations/reset-shipping-chosen.mdx",sourceDirName:"rate-manager-service/mutations",slug:"/rate-manager-service/mutations/reset-shipping-chosen",permalink:"/docs/rate-manager-service/mutations/reset-shipping-chosen",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/docs/rate-manager-service/mutations/reset-shipping-chosen.mdx",tags:[],version:"current",frontMatter:{id:"reset-shipping-chosen",title:"resetShippingChosen"},sidebar:"rateManagerService",previous:{title:"printLabel",permalink:"/docs/rate-manager-service/mutations/print-label"},next:{title:"storeFinalShippingChosen",permalink:"/docs/rate-manager-service/mutations/store-final-shipping-chosen"}},l=[{value:"Type",id:"type",children:[{value:"Int",id:"int",children:[],level:4}],level:3}],u={toc:l};function h(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Reset all cart options to their original values.\n(Requires use of the x-shipperhq-secret-token or x-shipperhq-public-token headers.)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"resetShippingChosen: Int!\n\n")),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"int"},(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int"))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Int")," scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1."))}h.isMDXComponent=!0}}]);