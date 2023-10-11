"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[6993],{3905:(e,t,i)=>{i.d(t,{Zo:()=>l,kt:()=>u});var a=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var p=a.createContext({}),h=function(e){var t=a.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},l=function(e){var t=h(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var i=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=h(i),u=r,d=m["".concat(p,".").concat(u)]||m[u]||c[u]||n;return i?a.createElement(d,o(o({ref:t},l),{},{components:i})):a.createElement(d,o({ref:t},l))}));function u(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=i.length,o=new Array(n);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var h=2;h<n;h++)o[h]=i[h];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}m.displayName="MDXCreateElement"},802:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>h});var a=i(3117),r=(i(7294),i(3905));const n={sidebar_position:1,slug:"overview",title:"Overview",authors:[],tags:["insights","api","guide","overview"]},o=void 0,s={unversionedId:"insights/overview",id:"insights/overview",title:"Overview",description:"Many elements impact both the shipping rates and shipping options offered to customers. Once selected, these options determine how to fulfill these orders. For example, what carrier and service to use, what package or packages to use, what warehouse to ship from, when to dispatch the shipment, etc. When ShipperHQ is used to produce shipping rates and options, it will determine many of these elements as part of its rating calculations. The Insights API gives you access to all of those details so that you can integrate them into your application.",source:"@site/docs/insights/overview.md",sourceDirName:"insights",slug:"/insights/overview",permalink:"/docs/insights/overview",tags:[{label:"insights",permalink:"/docs/tags/insights"},{label:"api",permalink:"/docs/tags/api"},{label:"guide",permalink:"/docs/tags/guide"},{label:"overview",permalink:"/docs/tags/overview"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"overview",title:"Overview",authors:[],tags:["insights","api","guide","overview"]},sidebar:"ShippingInsights",next:{title:"How Insights Work",permalink:"/docs/insights/how-insights-work"}},p={},h=[{value:"Use Cases",id:"use-cases",level:2},{value:"Available information",id:"available-information",level:2},{value:"Availability",id:"availability",level:2}],l={toc:h};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Many elements impact both the shipping rates and shipping options offered to customers. Once selected, these options determine how to fulfill these orders. For example, what carrier and service to use, what package or packages to use, what warehouse to ship from, when to dispatch the shipment, etc. When ShipperHQ is used to produce shipping rates and options, it will determine many of these elements as part of its rating calculations. The Insights API gives you access to all of those details so that you can integrate them into your application."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.shipperhq.com/shipping-insights-configuration/"},"Learn more about the ShipperHQ Shipping Insights Advanced Feature ",(0,r.kt)("i",{class:"fa fa-arrow-right"}))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"API Access Available on ShipperHQ Enterprise")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Access to the ShipperHQ APIs requires a ShipperHQ Enterprise plan. You can check your current plan in ",(0,r.kt)("a",{parentName:"p",href:"https://docs.shipperhq.com/subscription/#What_plan_am_I_on"},"your ShipperHQ Dashboard"),". If you're not currently on an Enterprise plan, please ",(0,r.kt)("a",{parentName:"p",href:"https://shipperhq.com/contact"},"contact us")," to review upgrade options."),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Note:"))," This requirement does not apply to ShipperHQ Partners. Contact our ",(0,r.kt)("a",{parentName:"p",href:"https://shipperhq.com/contact"},"Partnerships team")," for more info."))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Ready-to-Use Integrations")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"ShipperHQ and our partners provide a number of out of the box integrations with eCommerce platforms and other software that can be used with no coding required. If you use one of these platforms or products, we recommend evaluating the existing integration to see if it meets your needs. Existing integrations include:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.shipperhq.com/shipping-insights-configuration/"},"Magento (Adobe Commerce)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.shipperhq.com/shipping-insights-configuration/"},"Shopify")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.shipperhq.com/how-to-connect-shipperhq-to-shipstation/"},"ShipStation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.shipperhq.com/how-to-connect-shipperhq-to-agnostack/"},"agnoStack"))))),(0,r.kt)("h2",{id:"use-cases"},"Use Cases"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Time-Sensitive Delivery"),": ShipperHQ produces accurate ",(0,r.kt)("a",{parentName:"li",href:"https://docs.shipperhq.com/delivery-datecalendar-configuration/"},"dispatch and delivery dates")," for lots of carriers. Delivery dates can be shown to customers at checkout, while dispatch dates can help guide fulfillment operations. The Insights API can retrieve both."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cost-Effective Packing"),": ShipperHQ\u2019s ",(0,r.kt)("a",{parentName:"li",href:"https://docs.shipperhq.com/setting-up-and-using-dimensional-shipping/"},"Dimensional Packing")," recommends what package to use for each shipment. This information is used required to produce accurate shipping rates. You can retrieve this information via the Insights API to automate, execute or inform your fulfillment operations."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Multi-Origin Fulfillment"),": When shipping from ",(0,r.kt)("a",{parentName:"li",href:"https://docs.shipperhq.com/setup-multiorigin-dropshipping/"},"multiple warehouses"),", distribution centers, or even third party fulfillment or dropship providers ShipperHQ produces split-shipments orders. Most eCommerce platforms are\xa0not able to represent these orders. You can retrieve the fulfillment information, for each shipment, via the Insights API to automate, execute or inform your fulfillment operations."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Pickup Orders"),": ShipperHQ offers  ",(0,r.kt)("a",{parentName:"li",href:"https://docs.shipperhq.com/store-pick-up-configuration/"},"In Store Pickup"),". Not all platforms support In Store Pickup or orders with mixed delivery methods.  You can retrieve this information via the Insights API to automate, execute or inform your fulfillment operations.")),(0,r.kt)("h2",{id:"available-information"},"Available information"),(0,r.kt)("p",null,"Via the Insights API, you can query the following information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Carrier and Method Information"),": The carrier and shipping method name, code, and type selected by the customer at checkout"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Shipping rate information"),": Shipping rates retrieved from the carrier, rate charged to the customer (e.g. free shipping), delivery and dispatch dates, and much more meta-data associated with each order"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Origin information"),": The ship-from location or locations used in rating as well as the item assignment per Origin"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Packing details"),": The packages used by ShipperHQ in rating and the item assignments per package"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Customer-selected checkout options"),": Including LTL Freight accessorials, In-Store Pickup locations, and more")),(0,r.kt)("p",null,"Specific fields and attributes can be found in the ",(0,r.kt)("a",{parentName:"p",href:"https://dev.shipperhq.com/insights-service/"},"Insights API Reference"),"."),(0,r.kt)("h2",{id:"availability"},"Availability"),(0,r.kt)("p",null,"The Insights API requires to activate the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.shipperhq.com/shipping-insights-configuration/"},"Shipping Insights")," Advanced Feature."),(0,r.kt)("p",null," The Shipping Insights feature is available on the ",(0,r.kt)("strong",{parentName:"p"},"Standard"),", ",(0,r.kt)("strong",{parentName:"p"},"Advanced"),", and ",(0,r.kt)("strong",{parentName:"p"},"Enterprise")," ShipperHQ plans (see our ",(0,r.kt)("a",{parentName:"p",href:"https://shipperhq.com/pricing"},"pricing page")," for more information)."))}c.isMDXComponent=!0}}]);