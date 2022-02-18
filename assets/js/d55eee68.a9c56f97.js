"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[8718],{3905:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return h}});var i=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,i,n=function(e,r){if(null==e)return{};var t,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=i.createContext({}),s=function(e){var r=i.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=s(e.components);return i.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},u=i.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(t),h=n,v=u["".concat(l,".").concat(h)]||u[h]||p[h]||a;return t?i.createElement(v,o(o({ref:r},d),{},{components:t})):i.createElement(v,o({ref:r},d))}));function h(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,o=new Array(a);o[0]=u;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<a;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},98924:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var i=t(87462),n=t(63366),a=(t(67294),t(3905)),o=["components"],c={id:"basic-shipping-rate",title:"BasicShippingRate"},l=void 0,s={unversionedId:"order-view-service/objects/basic-shipping-rate",id:"order-view-service/objects/basic-shipping-rate",isDocsHomePage:!1,title:"BasicShippingRate",description:"No description",source:"@site/docs/order-view-service/objects/basic-shipping-rate.mdx",sourceDirName:"order-view-service/objects",slug:"/order-view-service/objects/basic-shipping-rate",permalink:"/docs/order-view-service/objects/basic-shipping-rate",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/docs/order-view-service/objects/basic-shipping-rate.mdx",tags:[],version:"current",frontMatter:{id:"basic-shipping-rate",title:"BasicShippingRate"},sidebar:"orderViewSidebar",previous:{title:"BasicShippingQuote",permalink:"/docs/order-view-service/objects/basic-shipping-quote"},next:{title:"CalendarDate",permalink:"/docs/order-view-service/objects/calendar-date"}},d=[{value:"Fields",id:"fields",children:[{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4},{value:"<code>code</code> (String)",id:"code-string",children:[],level:4},{value:"<code>currency</code> (String)",id:"currency-string",children:[],level:4},{value:"<code>title</code> (String)",id:"title-string",children:[],level:4},{value:"<code>totalCharges</code> (Float)",id:"totalcharges-float",children:[],level:4},{value:"<code>ratingCarrier</code> (RatingCarrier)",id:"ratingcarrier-ratingcarrier",children:[],level:4}],level:3},{value:"Interfaces",id:"interfaces",children:[{value:"Node",id:"node",children:[],level:4}],level:3}],p={toc:d};function u(e){var r=e.components,t=(0,n.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type BasicShippingRate implements Node {\n  id: ID!\n  code: String!\n  currency: String\n  title: String!\n  totalCharges: Float!\n  ratingCarrier: RatingCarrier\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"id-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"code-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"code")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"currency-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"currency")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"title-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"title")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"totalcharges-float"},(0,a.kt)("inlineCode",{parentName:"h4"},"totalCharges")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/float"},(0,a.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,a.kt)("h4",{id:"ratingcarrier-ratingcarrier"},(0,a.kt)("inlineCode",{parentName:"h4"},"ratingCarrier")," (",(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/objects/rating-carrier"},(0,a.kt)("inlineCode",{parentName:"a"},"RatingCarrier")),")"),(0,a.kt)("h3",{id:"interfaces"},"Interfaces"),(0,a.kt)("h4",{id:"node"},(0,a.kt)("a",{parentName:"h4",href:"../../order-view-service/interfaces/node"},(0,a.kt)("inlineCode",{parentName:"a"},"Node"))),(0,a.kt)("p",null,"An object with an ID"))}u.isMDXComponent=!0}}]);