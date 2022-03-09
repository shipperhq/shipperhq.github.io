"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[4353],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(r),d=i,m=h["".concat(s,".").concat(d)]||h[d]||u[d]||a;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},4645:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=r(3117),i=r(102),a=(r(7294),r(3905)),o=["components"],l={},s="SDK Use Cases",p={unversionedId:"sdk-use-cases",id:"sdk-use-cases",title:"SDK Use Cases",description:"Overview",source:"@site/docs/sdk-use-cases.md",sourceDirName:".",slug:"/sdk-use-cases",permalink:"/docs/sdk-use-cases",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/sdk-use-cases.md",tags:[],version:"current",frontMatter:{}},c={},u=[{value:"Overview",id:"overview",level:2},{value:"High-level Workflow",id:"high-level-workflow",level:3},{value:"Use cases and existing integrations",id:"use-cases-and-existing-integrations",level:2},{value:"CRM integration",id:"crm-integration",level:3},{value:"ERP integration",id:"erp-integration",level:3},{value:"Order Management System integration",id:"order-management-system-integration",level:3},{value:"eCommerce platform integration",id:"ecommerce-platform-integration",level:3},{value:"Headless commerce",id:"headless-commerce",level:3}],h={toc:u};function d(e){var t=e.components,l=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sdk-use-cases"},"SDK Use Cases"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The ShipperHQ SDK provides an end to end solution to help merchants, developers, and partners integrate with ShipperHQ for purposes and in places not currently available through the native ShipperHQ and eCommerce platform experience. This means being able to take advantage of ShipperHQ's advanced shipping functionality wherever it's needed without having to build a fully custom solution."),(0,a.kt)("h3",{id:"high-level-workflow"},"High-level Workflow"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"High Level ShipperHQ processes and API",src:r(7552).Z,width:"3333",height:"1875"})),(0,a.kt)("p",null,"While developers can use each API independently, the goal of the ShipperHQ SDK is to make it easy to integrate with the full ShipperHQ workflow following this sequence:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/rate/overview"},"Rate API")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/insight/place-order"},"PlaceOrder Mutation")," (not required for most major eCommerce platforms)"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/insight/overview"},"Insight API")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/label/overview"},"Label API")," (in beta)")),(0,a.kt)("h2",{id:"use-cases-and-existing-integrations"},"Use cases and existing integrations"),(0,a.kt)("p",null,"To illustrate what can be achieved with ShipperHQ SDK, here are some example of integrations that have been successfully built using the SDK."),(0,a.kt)("h3",{id:"crm-integration"},"CRM integration"),(0,a.kt)("p",null,"Give customer service teams full visibility of the delivery option selected by a customer when they place an order. And, give the team shipping rates and options that respect complex business logic configured in ShipperHQ when placing or adjusting orders on behalf of customers. Shiping quotes can be live and accurate instead of estimated plus the sales person can see additional information like expected delivery date (if configured in ShipperHQ)."),(0,a.kt)("p",null,"This would require minimally:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/rate/overview"},"Rate API")," to get rates"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/insight/place-order"},"PlaceOrder Mutation")," to capture successful orders placed or updated via the CRM"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/insight/overview"},"Insight API")," to display full shipping details")),(0,a.kt)("h3",{id:"erp-integration"},"ERP integration"),(0,a.kt)("p",null,"When creating draft-orders or manual orders, rates can be retrieved from ShipperHQ so that the order shipping costs can be accurately set. It enables multi-channel orders (online, offline, direct sale, etc.) to use the exact same logic, or variations of it, for shipping & delivery rates. The shipping rates returned by ShipperHQ can be overriden in your ERP following your own business rules and authorization system. Usually the ERP inform the rate engine of the various ",(0,a.kt)("inlineCode",{parentName:"p"},"shipping-groups")," for the products, present origin-locations with inventory and more to leverage key ShipperHQ functionalities like multi-origin or multi-shipment fulfillment as well as differentiate small-packages vs freight orders."),(0,a.kt)("p",null,"This would require minimally:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/rate/overview"},"Rate API")," to get rates"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/insight/place-order"},"PlaceOrder Mutation")," to capture successful orders")),(0,a.kt)("p",null,"To visualize (or sync) the exact orders (order management):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/insight/overview"},"Insight API")," to fulfill efficiently based on ShipperHQ rate at checkout recommendation")),(0,a.kt)("p",null,"To print the corresponding labels:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/label/overview"},"Label API (in beta)"))),(0,a.kt)("h3",{id:"order-management-system-integration"},"Order Management System integration"),(0,a.kt)("p",null,"ShipperHQ customers uses various order management systems and the Insight API is a key to leverage the detailed shipment information produced by ShipperHQ during rating at time of fulfillment."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/docs/insight/overview"},"Insight API")," enables order management systems to access:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ship-from (Origin) locations for each shipment and item"),(0,a.kt)("li",{parentName:"ul"},"Box/package sizes and types for each shipment"),(0,a.kt)("li",{parentName:"ul"},"Label provider for each shipment"),(0,a.kt)("li",{parentName:"ul"},"Service class for each shipment"),(0,a.kt)("li",{parentName:"ul"},"Delivery date & time and expected dispatch date for each shipment")),(0,a.kt)("p",null,"This would require minimally:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/insight/overview"},"Insight API"))),(0,a.kt)("h3",{id:"ecommerce-platform-integration"},"eCommerce platform integration"),(0,a.kt)("p",null,"While ShipperHQ support the major eCommerce platforms, the ",(0,a.kt)("a",{parentName:"p",href:"/docs/rate/overview"},"Rate API")," means developers can integrate ShipperHQ to provide rates at checkout in any eCommerce platform. This means being able to leverage the rich functionality of ShipperHQ's rules engine and advanced functions. For this use case, the ",(0,a.kt)("a",{parentName:"p",href:"/docs/rate/overview"},"Rate API")," can be called at any point where shipping rates are needed such as product pages, carts, and checkout."),(0,a.kt)("p",null,"This would require minimally:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/rate/overview"},"Rate API"))),(0,a.kt)("p",null,"For full functionality, adding integrations with the ",(0,a.kt)("a",{parentName:"p",href:"/docs/insight/place-order"},"PlaceOrder Mutation")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/insight/overview"},"Insight API")," would allow display of rich shipment information within the eCommerce platform admin."),(0,a.kt)("h3",{id:"headless-commerce"},"Headless commerce"),(0,a.kt)("p",null,"No need for an eCommerfce platform. With the ShipperHQ SDK you can build your own experience using whichever tools and technologies that you select. The ",(0,a.kt)("a",{parentName:"p",href:"/docs/rate/overview"},"Rate API")," will enable you to focus on the user experience while all the business logic is configured in ShipperHQ. The ",(0,a.kt)("a",{parentName:"p",href:"/docs/insight/overview"},"Insight API")," will allow you to place orders and retrieve all the fulfillment information required to complete this order."))}d.isMDXComponent=!0},7552:function(e,t,r){t.Z=r.p+"assets/images/sdk-main-processes-and-api-531bb0164a8c5ae638d490d40ff4cdaf.jpg"}}]);