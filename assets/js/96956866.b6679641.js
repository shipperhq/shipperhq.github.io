"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[70853],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return v}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),v=i,f=u["".concat(c,".").concat(v)]||u[v]||s[v]||o;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},11032:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],l={id:"available-option",title:"AvailableOption"},c=void 0,p={unversionedId:"rate-service/objects/available-option",id:"rate-service/objects/available-option",isDocsHomePage:!1,title:"AvailableOption",description:"No description",source:"@site/docs/rate-service/objects/available-option.mdx",sourceDirName:"rate-service/objects",slug:"/rate-service/objects/available-option",permalink:"/docs/rate-service/objects/available-option",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/docs/rate-service/objects/available-option.mdx",tags:[],version:"current",frontMatter:{id:"available-option",title:"AvailableOption"},sidebar:"rateService",previous:{title:"AdvancedFee",permalink:"/docs/rate-service/objects/advanced-fee"},next:{title:"BasicShippingQuote",permalink:"/docs/rate-service/objects/basic-shipping-quote"}},d=[{value:"Fields",id:"fields",children:[{value:"<code>destinationType</code> (String)",id:"destinationtype-string",children:[],level:4},{value:"<code>insideDelivery</code> (Boolean)",id:"insidedelivery-boolean",children:[],level:4},{value:"<code>liftGateRequired</code> (Boolean)",id:"liftgaterequired-boolean",children:[],level:4},{value:"<code>limitedDelivery</code> (Boolean)",id:"limiteddelivery-boolean",children:[],level:4},{value:"<code>notifyRequired</code> (Boolean)",id:"notifyrequired-boolean",children:[],level:4},{value:"<code>options</code> (Option)",id:"options-option",children:[],level:4}],level:3}],s={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type AvailableOption {\n  destinationType: String\n  insideDelivery: Boolean!\n  liftGateRequired: Boolean!\n  limitedDelivery: Boolean!\n  notifyRequired: Boolean!\n  options: [Option]\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"destinationtype-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"destinationType")," (",(0,o.kt)("a",{parentName:"h4",href:"../../rate-service/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"insidedelivery-boolean"},(0,o.kt)("inlineCode",{parentName:"h4"},"insideDelivery")," (",(0,o.kt)("a",{parentName:"h4",href:"../../rate-service/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,o.kt)("h4",{id:"liftgaterequired-boolean"},(0,o.kt)("inlineCode",{parentName:"h4"},"liftGateRequired")," (",(0,o.kt)("a",{parentName:"h4",href:"../../rate-service/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,o.kt)("h4",{id:"limiteddelivery-boolean"},(0,o.kt)("inlineCode",{parentName:"h4"},"limitedDelivery")," (",(0,o.kt)("a",{parentName:"h4",href:"../../rate-service/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,o.kt)("h4",{id:"notifyrequired-boolean"},(0,o.kt)("inlineCode",{parentName:"h4"},"notifyRequired")," (",(0,o.kt)("a",{parentName:"h4",href:"../../rate-service/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,o.kt)("h4",{id:"options-option"},(0,o.kt)("inlineCode",{parentName:"h4"},"options")," (",(0,o.kt)("a",{parentName:"h4",href:"../../rate-service/objects/option"},(0,o.kt)("inlineCode",{parentName:"a"},"Option")),")"))}u.isMDXComponent=!0}}]);