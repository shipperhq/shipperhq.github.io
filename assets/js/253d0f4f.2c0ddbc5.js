"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[4279],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),h=i,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||a;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8259:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var n=r(3117),i=r(102),a=(r(7294),r(3905)),o=["components"],s={sidebar_position:2,title:"How Rates Work"},l="How Rates Work",p={unversionedId:"rate/how-rates-work",id:"rate/how-rates-work",title:"How Rates Work",description:"High-level overview",source:"@site/docs/rate/how-rates-work.md",sourceDirName:"rate",slug:"/rate/how-rates-work",permalink:"/docs/rate/how-rates-work",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/rate/how-rates-work.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"How Rates Work"},sidebar:"Rating",previous:{title:"Rating Overview",permalink:"/docs/rate/overview"},next:{title:"Rating Quickstart",permalink:"/docs/rate/quickstart"}},u={},c=[{value:"High-level overview",id:"high-level-overview",level:2},{value:"Typical workflow",id:"typical-workflow",level:2},{value:"What is best: a single rate request or multiple rate requests?",id:"what-is-best-a-single-rate-request-or-multiple-rate-requests",level:2},{value:"Key queries used for rate requests",id:"key-queries-used-for-rate-requests",level:2}],d={toc:c};function h(e){var t=e.components,s=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-rates-work"},"How Rates Work"),(0,a.kt)("h2",{id:"high-level-overview"},"High-level overview"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"Rate API Overview",src:r(7593).Z,width:"3293",height:"703"})),(0,a.kt)("h2",{id:"typical-workflow"},"Typical workflow"),(0,a.kt)("p",null,"In order to generate a shipping quote that contains, usually, multiple rates the typical workflow would be to:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Submit a request that includes the contents of the cart (e.g. item\u2019s weight, value and quantity) as well as destination address information"),(0,a.kt)("li",{parentName:"ol"},"The request can include any other shipping options required like liftgate, residential address or specific delivery dates for this order"),(0,a.kt)("li",{parentName:"ol"},"Our API will return shipping rates for the cart using the carriers and rules configured in ShipperHQ")),(0,a.kt)("p",null,"Depending on whether you choose to request simple rates or full shipping rates, we can return basic rate information or full details of carriers, shipments, dates and shipping options available."),(0,a.kt)("h2",{id:"what-is-best-a-single-rate-request-or-multiple-rate-requests"},"What is best: a single rate request or multiple rate requests?"),(0,a.kt)("p",null,"Depending on any given workflow, it may be best to request rates from ShipperHQ once per order or multiple times. For example, if rates are being requested from an internal-facing system like an ERP or POS where an employee is responsible for entering an order, a single rate request is often all that's needed. On the other hand, for customer-facing systems like an eCommerce website you may want to show customers shipping rates on product pages, in the shopping cart, and at checkout. Additionally, if your shipping options are more complex, you may provide customers with an initial set of shipping options but give them the ability to change shipping-related properties to meet their needs (e.g. for LTL freight shipping, selecting accessorials; for a date picker, choosing different delivery dates) and request rates for each of their scenarios."),(0,a.kt)("p",null,"There are no right or wrong answer to this question but what's important is that your application is responsible for sending accurate information to ShipperHQ. Some applications generate lots of rates requests while others require a single rate request for each order."),(0,a.kt)("p",null,"Here a some pointers that could help you better understand your needs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Applications with a simple workflow and little ability to customize an order tend to generate less rate requests"),(0,a.kt)("li",{parentName:"ul"},"Applications with lots of options and lots of ability to customize an order (split shipment, delivery date options, ability select a delivery date & time, etc.) tend to generate multiple rate request for each cart."),(0,a.kt)("li",{parentName:"ul"},"Applications that display rates during the process (ex: on the product page, in the cart, at checkout) tend to generate multiple rate requests for each cart as well.")),(0,a.kt)("h2",{id:"key-queries-used-for-rate-requests"},"Key queries used for rate requests"),(0,a.kt)("p",null,"The Rate API is a read-only API. It consists of three queries:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Query"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"retrieveShippingQuote")),(0,a.kt)("td",{parentName:"tr",align:null},"Retrieve basic shipping rates including carrier and method titles and total shipping charges.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"retrieveFullShippingQuote")),(0,a.kt)("td",{parentName:"tr",align:null},"Retrieve detailed shipping rate information for each shipment, including origin or warehouse information, carrier and method information, freight options available, available dates, in-store pickup information, and more.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"retrieveUserSettings")),(0,a.kt)("td",{parentName:"tr",align:null},"Retrieve merchant\u2019s settings like locale and currency.")))))}h.isMDXComponent=!0},7593:function(e,t,r){t.Z=r.p+"assets/images/rating-api-overview-e7126ac010774a3e0890e77f3837e975.png"}}]);