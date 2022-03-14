"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[4720],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var i=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=i.createContext({}),l=function(e){var t=i.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return i.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),h=a,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||n;return r?i.createElement(m,o(o({ref:t},c),{},{components:r})):i.createElement(m,o({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<n;l++)o[l]=r[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4458:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var i=r(3117),a=r(102),n=(r(7294),r(3905)),o=["components"],s={sidebar_position:1,title:"Rating Overview"},p="Overview",l={unversionedId:"rate/overview",id:"rate/overview",title:"Rating Overview",description:"What are rates?",source:"@site/docs/rate/overview.md",sourceDirName:"rate",slug:"/rate/overview",permalink:"/docs/rate/overview",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/rate/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Rating Overview"},sidebar:"Rating",next:{title:"How Rates Work",permalink:"/docs/rate/how-rates-work"}},c={},d=[{value:"What are rates?",id:"what-are-rates",level:2},{value:"Use cases",id:"use-cases",level:2},{value:"How does a typical platform interact with rates?",id:"how-does-a-typical-platform-interact-with-rates",level:2},{value:"How does ShipperHQ produce rates?",id:"how-does-shipperhq-produce-rates",level:2}],u={toc:d};function h(e){var t=e.components,s=(0,a.Z)(e,o);return(0,n.kt)("wrapper",(0,i.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"overview"},"Overview"),(0,n.kt)("h2",{id:"what-are-rates"},"What are rates?"),(0,n.kt)("p",null,"Shipping rates are an essential part of commerce and represent what options are given to customers to receive their order (e.g. delivery, pickup, etc.) and how much the customer is charged. Rates may include a variety of fulfillment methods like small parcel, freight (LTL/FTL), in-store pickup, curb-side pickup, or local delivery. Along with each of these is an associated price, the shipping rate which might be zero, that the customer pays for that service."),(0,n.kt)("p",null,'These shipping options, the amounts charged for them, and a set of properties that describe them are called "rates" in ShipperHQ. At a minimum, information used to request rates will include a ship-to location (shipping address) and at least one item (a product) that\'s being shipped. The information returned includes, at a minimum, the shipping option name, and a price.'),(0,n.kt)("p",null,"Depending on the use case and how you implement the Rates API, you may provide additional information like ship-from address, LTL freight accessorials, selected delivery date, product Shipping Groups, dimensions, etc. and receive additional details like expected packacking, per-fulfillment-location rates and items, dispatch dates, and more."),(0,n.kt)("h2",{id:"use-cases"},"Use cases"),(0,n.kt)("p",null,"Some scenarios in which ShipperHQ's Rate API is frequently used are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"eCommerce Sites:")," As a critical aspect of eCommerce, shipping and delivery rates retrieved using the Rate API can be displayed to customers on product pages, shopping carts, and checkouts to give them accurate and relevant options."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"ERPs and Customer Service systems:")," When an employee is responsible for placing or revising an order on behalf of a customer it's important to be able to get updated shipping rates and options that can be applied to the order."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Order Management and Fulfillment systems:")," Once an order's been placed, it may be necessary to make adjustments to the order (e.g. if an item is back-ordered or being shipped separately) and having updated shipping rates within the order management system makes this much easier.")),(0,n.kt)("h2",{id:"how-does-a-typical-platform-interact-with-rates"},"How does a typical platform interact with rates?"),(0,n.kt)("p",null,(0,n.kt)("img",{loading:"lazy",alt:"Rate API Overview",src:r(1674).Z,width:"1984",height:"670"})),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"An application request rates via the Rate API"),(0,n.kt)("li",{parentName:"ol"},"ShipperHQ calculates rates based on the cart contents, ship-to address, and ShipperHQ configuration"),(0,n.kt)("li",{parentName:"ol"},"The buyer select the delivery option of their choice"),(0,n.kt)("li",{parentName:"ol"},"The order is placed (not represented here) and then processed")),(0,n.kt)("h2",{id:"how-does-shipperhq-produce-rates"},"How does ShipperHQ produce rates?"),(0,n.kt)("p",null,"ShipperHQ is a rule-based platform that generates shipping rates following key characteristics of the purchase (items in the cart, weight, dimensions, buyer category, cart value, etc). ShipperHQ's most used functionalities are dimensional shipping (being able to compute box size based on product dimensions), live rates (being able to query one or multiple carriers like UPS, USPS, FedEx to get real-time pricing) and delivery dates (being able to predict when a package will be delivered). We also support LTL freight, in-store pickup, local delivery and multi-location fulfillment. You can learn more about ShipperHQ's functionality at ",(0,n.kt)("a",{parentName:"p",href:"https://shipperhq.com/"},"ShipperHQ.com"),"."),(0,n.kt)("p",null,"With the ShipperHQ Rate API you don't have to implement all of this logic within your application. Instead, you can integrate with our Rate API to easily get shipping options and rates. This means you can support the most complex shipping and delivery use cases without writing custom code from scratch."))}h.isMDXComponent=!0},1674:function(e,t,r){t.Z=r.p+"assets/images/rate-high-level-overview-043ec7c0614e87c87e7522217fb0f2e6.png"}}]);