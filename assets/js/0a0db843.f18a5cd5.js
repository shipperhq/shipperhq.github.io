"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[5844],{3905:function(e,t,i){i.d(t,{Zo:function(){return c},kt:function(){return d}});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(i),d=r,m=u["".concat(p,".").concat(d)]||u[d]||h[d]||a;return i?n.createElement(m,o(o({ref:t},c),{},{components:i})):n.createElement(m,o({ref:t},c))}));function d(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=i[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},786:function(e,t,i){i.r(t),i.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return h}});var n=i(3117),r=i(102),a=(i(7294),i(3905)),o=["components"],s={sidebar_position:1,slug:"overview",title:"Insight Overview",authors:[],tags:["insight","api","introduction"]},p="Insight Overview",l={unversionedId:"insight/overview",id:"insight/overview",title:"Insight Overview",description:"There are many elements that impact both the shipping rates and options offered to eCommerce customers at checkout as well as how orders are fulfilled. For example, what carrier and service to use, what package or packages to use, what warehouse to ship from, etc. When ShipperHQ is used to produce shipping rates and options, it will determine many of these elements as part of its rating calculations. The Insight API gives you access to all of those details that can be used in a variety of scenarios including automating fulfillment.",source:"@site/docs/insight/overview.md",sourceDirName:"insight",slug:"/insight/overview",permalink:"/docs/insight/overview",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/insight/overview.md",tags:[{label:"insight",permalink:"/docs/tags/insight"},{label:"api",permalink:"/docs/tags/api"},{label:"introduction",permalink:"/docs/tags/introduction"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"overview",title:"Insight Overview",authors:[],tags:["insight","api","introduction"]},sidebar:"ShippingInsights",next:{title:"Insight Overview",permalink:"/docs/insight/overview"}},c={},h=[{value:"Use Cases",id:"use-cases",level:2},{value:"Available information",id:"available-information",level:2},{value:"Availability",id:"availability",level:2}],u={toc:h};function d(e){var t=e.components,i=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"insight-overview"},"Insight Overview"),(0,a.kt)("p",null,"There are many elements that impact both the shipping rates and options offered to eCommerce customers at checkout as well as how orders are fulfilled. For example, what carrier and service to use, what package or packages to use, what warehouse to ship from, etc. When ShipperHQ is used to produce shipping rates and options, it will determine many of these elements as part of its rating calculations. The Insight API gives you access to all of those details that can be used in a variety of scenarios including automating fulfillment."),(0,a.kt)("h2",{id:"use-cases"},"Use Cases"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Time-Sensitive Delivery"),": ShipperHQ is able to produce accurate ",(0,a.kt)("a",{parentName:"li",href:"https://docs.shipperhq.com/delivery-datecalendar-configuration/"},"dispatch and delivery dates")," for a number of carriers. Delivery dates can be shown to customers at checkout while dispatch dates can help guide fulfillment operations. The Insight API can be used to retrieve both."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Cost-Effective Packing"),": ShipperHQ\u2019s ",(0,a.kt)("a",{parentName:"li",href:"https://docs.shipperhq.com/setting-up-and-using-dimensional-shipping/"},"Dimensional Packing")," functionality can produce estimates of what package or packages should be used for each shipment. This information is used to produce accurate shipping rates but can also be accessed via the Insight API to automate or guide fulfillment operations."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Multi-Origin Fulfillment"),": When shipping from ",(0,a.kt)("a",{parentName:"li",href:"https://docs.shipperhq.com/setup-multiorigin-dropshipping/"},"multiple warehouses"),", distribution centers, or even third party fulfillment or dropship providers ShipperHQ is able to rate multiple shipments within a single order. The item assignment per shipment and the details of each shipment can be retrieved with the Insight API."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Pickup Orders"),": ShipperHQ can be used to offer ",(0,a.kt)("a",{parentName:"li",href:"https://docs.shipperhq.com/store-pick-up-configuration/"},"In Store Pickup")," options to customers at checkout. The Insight API can then return the pickup location along with the order to ensure the order is correctly routed.")),(0,a.kt)("h2",{id:"available-information"},"Available information"),(0,a.kt)("p",null,"Information stored by ShipperHQ that can be retrieved with the Insight API includes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Carrier and Method Information"),": The carrier and shipping method name, code, and type selected by the customer at checkout"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Shipping rate information"),": Shipping rates retrieved from the carrier, rate charged to the customer (e.g. free shipping), delivery and dispatch dates, and more"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Origin information"),": The ship-from location or locations used in rating as well as the item assignment per Origin"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Packing details"),": The packages used by ShipperHQ in rating and the item assignments per package"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Customer-selected checkout options"),": Including LTL Freight acessorials, In-Store Pickup locations, and more")),(0,a.kt)("p",null,"Specific fields and attributes can be found in the Insight API guide."),(0,a.kt)("h2",{id:"availability"},"Availability"),(0,a.kt)("p",null,"The Insight API relies on having the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.shipperhq.com/shipping-insights-configuration/"},"Shipping Insights")," Advanced Feature enabled in ShipperHQ. The Shipping Insights feature is available on the ",(0,a.kt)("strong",{parentName:"p"},"Basic"),", ",(0,a.kt)("strong",{parentName:"p"},"Standard"),", ",(0,a.kt)("strong",{parentName:"p"},"Advanced"),", and ",(0,a.kt)("strong",{parentName:"p"},"Enterprise")," ShipperHQ plans."))}d.isMDXComponent=!0}}]);