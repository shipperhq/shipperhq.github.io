"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[720],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),p=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(r),d=n,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||a;return r?i.createElement(m,o(o({ref:t},c),{},{components:r})):i.createElement(m,o({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<a;p++)o[p]=r[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}h.displayName="MDXCreateElement"},4458:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return h}});var i=r(7462),n=r(3366),a=(r(7294),r(3905)),o=["components"],s={sidebar_position:1},l="Rate API Overview",p={unversionedId:"rate/overview",id:"rate/overview",isDocsHomePage:!1,title:"Rate API Overview",description:"What are rates?",source:"@site/docs/rate/overview.md",sourceDirName:"rate",slug:"/rate/overview",permalink:"/docs/rate/overview",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/docs/rate/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"Rating",next:{title:"How Rates Work",permalink:"/docs/rate/how-rates-work"}},c=[{value:"What are rates?",id:"what-are-rates",children:[],level:2},{value:"How does a typical platform interact with rates?",id:"how-does-a-typical-platform-interact-with-rates",children:[],level:2},{value:"How does ShipperHQ produce rates?",id:"how-does-shipperhq-produce-rates",children:[],level:2}],u={toc:c};function h(e){var t=e.components,s=(0,n.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rate-api-overview"},"Rate API Overview"),(0,a.kt)("h2",{id:"what-are-rates"},"What are rates?"),(0,a.kt)("p",null,"Shipping rates are an essential part of commerce. They includes various delivery methods like small parcels, freight (LTL/FTL), in-store pickup, curb-site pickup and local delivery. All of these are Shipping Rate which we will call \u201crates\u201d in this documentation. In general a rate is a set of properties that describe options to get an order delivered to a specific location using a specific delivery method. The minimal information it contains is usually a name, description and price (in a currency)."),(0,a.kt)("h2",{id:"how-does-a-typical-platform-interact-with-rates"},"How does a typical platform interact with rates?"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Rating API Overview",src:r(4899).Z})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"An application request rates via this API"),(0,a.kt)("li",{parentName:"ol"},"ShipperHQ calculate rates based on the cart content and buyer destination"),(0,a.kt)("li",{parentName:"ol"},"The buyer select the delivery options of his choice"),(0,a.kt)("li",{parentName:"ol"},"The platform flow continue (not represented here) and the order is processed")),(0,a.kt)("h2",{id:"how-does-shipperhq-produce-rates"},"How does ShipperHQ produce rates?"),(0,a.kt)("p",null,"ShipperHQ is a rule-based platform that generates shipping rates following key characteristics of the purchase (items in the cart, weight, dimensions, buyer category, cart value, etc). ShipperHQ most used functionalities are dimensional shipping (being able to compute box size based on product dimensions), live rates (being able to query one or multiple carriers like UPS, USPS, FedEX to get real-time pricing) and Delivery Dates (being able to predict when a package will be delivered). We also support freight (LTL, FTL), local-pickup, local-delivery and multi-location (for more information about ShipperHQ capabilities, please visite our ",(0,a.kt)("a",{parentName:"p",href:"https://www.shipperhq.com/"},"website"),")"),(0,a.kt)("p",null,"Thanks to the rating API, you don\u2019t have to implement all this logic in your application: via our simple to use rating API, you can integrate with ShipperHQ to easily get rates. With a few lines of code, you will be able to support the most complex shipping and delivery use case with split-shipments, multiple origins, different delivery methods (per shipment) as well as provide delivery dates at checkout time for each shipment."))}h.isMDXComponent=!0},4899:function(e,t,r){t.Z=r.p+"assets/images/rate-high-level-overview-043ec7c0614e87c87e7522217fb0f2e6.png"}}]);