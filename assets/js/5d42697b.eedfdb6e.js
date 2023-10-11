"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[6674],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(r),h=n,u=m["".concat(l,".").concat(h)]||m[h]||c[h]||o;return r?a.createElement(u,i(i({ref:t},d),{},{components:r})):a.createElement(u,i({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3278:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(3117),n=(r(7294),r(3905));const o={sidebar_position:30,slug:"place-order",title:"PlaceOrder Mutation",tags:["labels","insights","api","guide"]},i=void 0,s={unversionedId:"labels/place-order",id:"labels/place-order",title:"PlaceOrder Mutation",description:"How Rating + Shipping Insights Work with PlaceOrder",source:"@site/docs/labels/place-order.md",sourceDirName:"labels",slug:"/labels/place-order",permalink:"/docs/labels/place-order",tags:[{label:"labels",permalink:"/docs/tags/labels"},{label:"insights",permalink:"/docs/tags/insights"},{label:"api",permalink:"/docs/tags/api"},{label:"guide",permalink:"/docs/tags/guide"}],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,slug:"place-order",title:"PlaceOrder Mutation",tags:["labels","insights","api","guide"]},sidebar:"Label",previous:{title:"Quickstart",permalink:"/docs/labels/quickstart"},next:{title:"Examples",permalink:"/docs/labels/examples"}},l={},p=[{value:"How Rating + Shipping Insights Work with <code>PlaceOrder</code>",id:"how-rating--shipping-insights-work-with-placeorder",level:2},{value:"Do I need to use the <code>PlaceOrder</code> mutation?",id:"do-i-need-to-use-the-placeorder-mutation",level:2},{value:"Endpoint",id:"endpoint",level:2},{value:"Request Headers",id:"request-headers",level:2},{value:"Examples",id:"examples",level:2},{value:"Example Request",id:"example-request",level:3},{value:"Example Response",id:"example-response",level:3},{value:"Example Error Response",id:"example-error-response",level:3}],d={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"how-rating--shipping-insights-work-with-placeorder"},"How Rating + Shipping Insights Work with ",(0,n.kt)("inlineCode",{parentName:"h2"},"PlaceOrder")),(0,n.kt)("p",null,"Merchants integrate with ShipperHQ's Rates API to provide shipping rate estimates based on contents of a ",(0,n.kt)("inlineCode",{parentName:"p"},"virtual cart"),". This is done leveraging the ",(0,n.kt)("a",{parentName:"p",href:"/docs/rates/overview"},"Rates API"),".  "),(0,n.kt)("p",null,"Once a customer has finalized their choices at checkout and completes the order, the rating (a quote) needs to be converted into an order so it can stored for use with the ",(0,n.kt)("a",{parentName:"p",href:"/docs/insights/overview"},"Insights API"),". Usually, multiple quotes are sent by ShipperHQ (for example, in the cart, when the customer changes their address, when they changes delivery options, etc.)."),(0,n.kt)("p",null,"The role of ",(0,n.kt)("inlineCode",{parentName:"p"},"PlaceOrder")," is to convert one of these quotes into a full-fledge order. Then, the complete quote information can be stored on ShipperHQ order database and later on retrieved via the ",(0,n.kt)("a",{parentName:"p",href:"/docs/insights/overview"},"Insights API"),"."),(0,n.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Most users don't need to use the ",(0,n.kt)("inlineCode",{parentName:"h5"},"PlaceOrder")," mutation")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"If you are using an eCommerce platform supported by ShipperHQ (",(0,n.kt)("a",{parentName:"p",href:"https://docs.shipperhq.com/installing-magento-2-shipperhq-extension/"},"Magento/Adobe Commerce"),", ",(0,n.kt)("a",{parentName:"p",href:"https://docs.shipperhq.com/setup-shipperhq-bigcommerce-store/"},"BigCommerce")," or ",(0,n.kt)("a",{parentName:"p",href:"https://docs.shipperhq.com/connect-shopify-shipperhq/"},"Shopify"),"): you do not need to use ",(0,n.kt)("inlineCode",{parentName:"p"},"PlaceOrder"),". In these scenarios, the order creation is done automatically by the platform using ShipperHQ rates and ShipperHQ captures this information automatically so that you can directly use the ",(0,n.kt)("a",{parentName:"p",href:"/docs/insights/overview"},"Insights API"),". If you are using a native ShipperHQ integration on any other platform, please ",(0,n.kt)("a",{parentName:"p",href:"https://dev.shipperhq.com/contact"},"contact us")," to register your interest for Shipping Insights on your eCommerce platform."),(0,n.kt)("p",{parentName:"div"},"The specific scenarios where you would need to use ",(0,n.kt)("inlineCode",{parentName:"p"},"PlaceOrder")," are detailed below."))),(0,n.kt)("h2",{id:"do-i-need-to-use-the-placeorder-mutation"},"Do I need to use the ",(0,n.kt)("inlineCode",{parentName:"h2"},"PlaceOrder")," mutation?"),(0,n.kt)("p",null,"You need to use the ",(0,n.kt)("inlineCode",{parentName:"p"},"PlaceOrder")," mutation if:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"you use a platform that does not have a native ShipperHQ integration (",(0,n.kt)("a",{parentName:"li",href:"https://shipperhq.com/pricing"},"supported platform list here"),")"),(0,n.kt)("li",{parentName:"ul"},"you want to capture orders outside the platform (e.g., going headless, building a mobile app, etc.)"),(0,n.kt)("li",{parentName:"ul"},"you want to implement a different order capture mechanism on a supported platform (from your CRM, from an ERP) leveraging the ",(0,n.kt)("a",{parentName:"li",href:"/docs/rates/overview"},"Rates API"))),(0,n.kt)("p",null,"To successfully call ",(0,n.kt)("inlineCode",{parentName:"p"},"PlaceOrder"),", you need to generate rates via the ",(0,n.kt)("a",{parentName:"p",href:"/docs/rates/overview"},"Rates API")," first."),(0,n.kt)("h2",{id:"endpoint"},"Endpoint"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Protocol"),(0,n.kt)("th",{parentName:"tr",align:null},"Method"),(0,n.kt)("th",{parentName:"tr",align:null},"Body Encoding"),(0,n.kt)("th",{parentName:"tr",align:null},"Endpoint URL"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"HTTPS")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"POST")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"application/JSON")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"https://postapi.shipperhq.com/v3/graphql/label"))))),(0,n.kt)("h2",{id:"request-headers"},"Request Headers"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Header"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"X-ShipperHQ-Secret-Token")),(0,n.kt)("td",{parentName:"tr",align:null},"The secret token that you have generated to use the ",(0,n.kt)("a",{parentName:"td",href:"/docs/rates/overview"},"Rates API"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"X-ShipperHQ-Scope")),(0,n.kt)("td",{parentName:"tr",align:null},"The configuration ",(0,n.kt)("a",{parentName:"td",href:"https://docs.shipperhq.com/using-scopes-shipperhq/"},"Scope")," for this ShipperHQ ",(0,n.kt)("a",{parentName:"td",href:"https://docs.shipperhq.com/adding-websites-in-shipperhq/"},"Website")," (accepts ",(0,n.kt)("inlineCode",{parentName:"td"},"LIVE"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"TEST"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"DEVELOPMENT"),", or ",(0,n.kt)("inlineCode",{parentName:"td"},"INTEGRATION"),"). If unsure or if the ShipperHQ account does not support multiple scopes, use ",(0,n.kt)("inlineCode",{parentName:"td"},"LIVE"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"X-ShipperHQ-Session")),(0,n.kt)("td",{parentName:"tr",align:null},"This identifies the quote that you want to convert to an order. You have to use the exact same value as the ",(0,n.kt)("a",{parentName:"td",href:"/docs/rates/overview"},"Rates API")," request used to generate this quote.")))),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("h3",{id:"example-request"},"Example Request"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example Request"',title:'"Example','Request"':!0},'query placeOrder {\n  placeOrder( placeOrderInfo: {\n    orderNumber: "1234",      \n     totalCharges: 9.85,                    # totalCharges in Rates API response\n     carrierCode: "shqusps",                # carrierCode in Rates API response   \n     methodCode: "Priority Mail",           # methodCode in Rates API response\n     transId: "SHQ_20220201_1625_5144966"   # transactionID from Rates API response\n  }) {\n     transactionId\n     responseSummary{\n        status\n    }\n    errors {\n      errorCode\n      internalErrorMessage\n      externalErrorMessage\n    }\n  }\n}\n')),(0,n.kt)("h3",{id:"example-response"},"Example Response"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},"{\n    \u201cplaceOrder: {\n      \u201ctransactionId\u201d : \u201cSHQ_20220212_12345678_BAQ_639272\u201d,\n      \u201cresponseSummary\u201d: {\n        \u201cstatus\u201d: 1\n      },\n      \u201cerrors\u201d: null\n    }\n}\n")),(0,n.kt)("h3",{id:"example-error-response"},"Example Error Response"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Error response"',title:'"Error','response"':!0},'{\n    \u201cplaceOrder: {\n       \u201ctransactionId": \u201cSHQ_20220212_12345678_BAQ_639273\u201d,\n      \u201cresponseSummary\u201d: {\n        \u201cstatus\u201d: 0\n      },\n      \u201cerrors\u201d: [\n        {\n          "errorCode": 0,\n          "internalErrorMessage": "Order not found when looking up",\n          "externalErrorMessage": null\n        }\n      ]\n    }\n}\n')))}c.isMDXComponent=!0}}]);