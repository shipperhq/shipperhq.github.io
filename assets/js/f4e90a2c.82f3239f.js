"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[7279],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=i,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},95911:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],s={id:"rmsrating-info",title:"RMSRatingInfo"},c=void 0,p={unversionedId:"rate-manager-service/inputs/rmsrating-info",id:"version-1.0.0/rate-manager-service/inputs/rmsrating-info",isDocsHomePage:!1,title:"RMSRatingInfo",description:"Details about the order/shipment to be rated",source:"@site/versioned_docs/version-1.0.0/rate-manager-service/inputs/rmsrating-info.mdx",sourceDirName:"rate-manager-service/inputs",slug:"/rate-manager-service/inputs/rmsrating-info",permalink:"/docs/rate-manager-service/inputs/rmsrating-info",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/versioned_docs/version-1.0.0/rate-manager-service/inputs/rmsrating-info.mdx",tags:[],version:"1.0.0",frontMatter:{id:"rmsrating-info",title:"RMSRatingInfo"},sidebar:"version-1.0.0/rateManagerService",previous:{title:"RMSPickupLocationDetailWhereInput",permalink:"/docs/rate-manager-service/inputs/rmspickup-location-detail-where-input"},next:{title:"RMSRequestedOptions",permalink:"/docs/rate-manager-service/inputs/rmsrequested-options"}},l=[{value:"Fields",id:"fields",children:[{value:"<code>cart</code> (RMSCart)",id:"cart-rmscart",children:[],level:4},{value:"<code>destination</code> (RMSDestination)",id:"destination-rmsdestination",children:[],level:4},{value:"<code>customer</code> (RMSCustomer)",id:"customer-rmscustomer",children:[],level:4},{value:"<code>cartType</code> (CartType)",id:"carttype-carttype",children:[],level:4},{value:"<code>requestedOptions</code> (RMSRequestedOptions)",id:"requestedoptions-rmsrequestedoptions",children:[],level:4},{value:"<code>siteDetails</code> (RMSSiteDetails)",id:"sitedetails-rmssitedetails",children:[],level:4}],level:3}],u={toc:l};function d(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Details about the order/shipment to be rated"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type RMSRatingInfo {\n  cart: RMSCart!\n  destination: RMSDestination!\n  customer: RMSCustomer\n  cartType: CartType\n  requestedOptions: RMSRequestedOptions\n  siteDetails: RMSSiteDetails\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"cart-rmscart"},(0,a.kt)("inlineCode",{parentName:"h4"},"cart")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/inputs/rmscart"},(0,a.kt)("inlineCode",{parentName:"a"},"RMSCart")),")"),(0,a.kt)("p",null,"Cart Details"),(0,a.kt)("h4",{id:"destination-rmsdestination"},(0,a.kt)("inlineCode",{parentName:"h4"},"destination")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/inputs/rmsdestination"},(0,a.kt)("inlineCode",{parentName:"a"},"RMSDestination")),")"),(0,a.kt)("p",null,"Ship To Address"),(0,a.kt)("h4",{id:"customer-rmscustomer"},(0,a.kt)("inlineCode",{parentName:"h4"},"customer")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/inputs/rmscustomer"},(0,a.kt)("inlineCode",{parentName:"a"},"RMSCustomer")),")"),(0,a.kt)("p",null,"Details About the Recipient"),(0,a.kt)("h4",{id:"carttype-carttype"},(0,a.kt)("inlineCode",{parentName:"h4"},"cartType")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/enums/cart-type"},(0,a.kt)("inlineCode",{parentName:"a"},"CartType")),")"),(0,a.kt)("p",null,"Type of Checkout"),(0,a.kt)("h4",{id:"requestedoptions-rmsrequestedoptions"},(0,a.kt)("inlineCode",{parentName:"h4"},"requestedOptions")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/inputs/rmsrequested-options"},(0,a.kt)("inlineCode",{parentName:"a"},"RMSRequestedOptions")),")"),(0,a.kt)("p",null,"Selected Checkout Options"),(0,a.kt)("h4",{id:"sitedetails-rmssitedetails"},(0,a.kt)("inlineCode",{parentName:"h4"},"siteDetails")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/inputs/rmssite-details"},(0,a.kt)("inlineCode",{parentName:"a"},"RMSSiteDetails")),")"),(0,a.kt)("p",null,"Details about the site/platform"))}d.isMDXComponent=!0}}]);