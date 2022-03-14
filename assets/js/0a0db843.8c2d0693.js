"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[5844],{3905:function(e,t,i){i.d(t,{Zo:function(){return c},kt:function(){return m}});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(i),m=n,d=u["".concat(p,".").concat(m)]||u[m]||h[m]||a;return i?r.createElement(d,o(o({ref:t},c),{},{components:i})):r.createElement(d,o({ref:t},c))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<a;l++)o[l]=i[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}u.displayName="MDXCreateElement"},786:function(e,t,i){i.r(t),i.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return h}});var r=i(3117),n=i(102),a=(i(7294),i(3905)),o=["components"],s={sidebar_position:1,slug:"overview",title:"Insights API Overview",authors:[],tags:["insights","api","introduction"]},p=void 0,l={unversionedId:"insight/overview",id:"insight/overview",title:"Insights API Overview",description:"Many elements impact both the shipping rates and shipping options offered to customers. Once selected, these options determine how to fulfill these orders. For example, what carrier and service to use, what package or packages to use, what warehouse to ship from, when to dispatch the shipment, etc. When ShipperHQ is used to produce shipping rates and options, it will determine many of these elements as part of its rating calculations. The Insights API gives you access to all of those details so that you can integrate them into your application.",source:"@site/docs/insight/overview.md",sourceDirName:"insight",slug:"/insight/overview",permalink:"/docs/insight/overview",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/insight/overview.md",tags:[{label:"insights",permalink:"/docs/tags/insights"},{label:"api",permalink:"/docs/tags/api"},{label:"introduction",permalink:"/docs/tags/introduction"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"overview",title:"Insights API Overview",authors:[],tags:["insights","api","introduction"]},sidebar:"ShippingInsights",next:{title:"How the Insights API Works",permalink:"/docs/insight/how-insights-api-works"}},c={},h=[{value:"Use Cases",id:"use-cases",level:2},{value:"Available information",id:"available-information",level:2},{value:"Availability",id:"availability",level:2}],u={toc:h};function m(e){var t=e.components,i=(0,n.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Many elements impact both the shipping rates and shipping options offered to customers. Once selected, these options determine how to fulfill these orders. For example, what carrier and service to use, what package or packages to use, what warehouse to ship from, when to dispatch the shipment, etc. When ShipperHQ is used to produce shipping rates and options, it will determine many of these elements as part of its rating calculations. The Insights API gives you access to all of those details so that you can integrate them into your application. "),(0,a.kt)("h2",{id:"use-cases"},"Use Cases"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Time-Sensitive Delivery"),": ShipperHQ produces accurate ",(0,a.kt)("a",{parentName:"li",href:"https://docs.shipperhq.com/delivery-datecalendar-configuration/"},"dispatch and delivery dates")," for lots of carriers. Delivery dates can be shown to customers at checkout, while dispatch dates can help guide fulfillment operations. The Insights API can retrieve both."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Cost-Effective Packing"),": ShipperHQ\u2019s ",(0,a.kt)("a",{parentName:"li",href:"https://docs.shipperhq.com/setting-up-and-using-dimensional-shipping/"},"Dimensional Packing")," recommends what package to use for each shipment. This information is used required to produce accurate shipping rates. You can retrieve this information via the Insight API to automate, execute or inform your fulfillment operations."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Multi-Origin Fulfillment"),": When shipping from ",(0,a.kt)("a",{parentName:"li",href:"https://docs.shipperhq.com/setup-multiorigin-dropshipping/"},"multiple warehouses"),", distribution centers, or even third party fulfillment or dropship providers ShipperHQ produces split-shipments orders. Most eCommerce platforms are\xa0not able to represent these orders. You can retrieve the fulfillment information, for each shipment, via the Insight API to automate, execute or inform your fulfillment operations."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Pickup Orders"),": ShipperHQ offers  ",(0,a.kt)("a",{parentName:"li",href:"https://docs.shipperhq.com/store-pick-up-configuration/"},"In Store Pickup"),". Not all platforms support In Store Pickup or orders with mix-devivery methods.  You can retrieve this information via the Insight API to automate, execute or inform your fulfillment operations.")),(0,a.kt)("h2",{id:"available-information"},"Available information"),(0,a.kt)("p",null,"Via the Insight API, you can query the following information:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Carrier and Method Information"),": The carrier and shipping method name, code, and type selected by the customer at checkout"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Shipping rate information"),": Shipping rates retrieved from the carrier, rate charged to the customer (e.g. free shipping), delivery and dispatch dates, and much more meta-data associated with each order"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Origin information"),": The ship-from location or locations used in rating as well as the item assignment per Origin"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Packing details"),": The packages used by ShipperHQ in rating and the item assignments per package"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Customer-selected checkout options"),": Including LTL Freight acessorials, In-Store Pickup locations, and more")),(0,a.kt)("p",null,"Specific fields and attributes can be found in the (Insights API guide)","[https://dev.shipperhq.com/order-view-service/]","."),(0,a.kt)("h2",{id:"availability"},"Availability"),(0,a.kt)("p",null,"The Insights API requires to activate the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.shipperhq.com/shipping-insights-configuration/"},"Shipping Insights")," Advanced Feature."),(0,a.kt)("p",null," The Shipping Insights feature is available on the ",(0,a.kt)("strong",{parentName:"p"},"Basic"),", ",(0,a.kt)("strong",{parentName:"p"},"Standard"),", ",(0,a.kt)("strong",{parentName:"p"},"Advanced"),", and ",(0,a.kt)("strong",{parentName:"p"},"Enterprise")," ShipperHQ plans (see our ",(0,a.kt)("a",{parentName:"p",href:"https://shipperhq.com/pricing"},"pricing page")," for more information)."))}m.isMDXComponent=!0}}]);