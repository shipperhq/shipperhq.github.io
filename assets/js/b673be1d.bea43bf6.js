"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[2496],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=i.createContext({}),l=function(e){var t=i.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return i.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(a),h=n,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||r;return a?i.createElement(m,o(o({ref:t},c),{},{components:a})):i.createElement(m,o({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<r;l++)o[l]=a[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9481:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=a(3117),n=(a(7294),a(3905));const r={sidebar_position:10,title:"Blueprint: CRM",slug:"blueprint-crm"},o=void 0,s={unversionedId:"use-cases/use-case-crm",id:"use-cases/use-case-crm",title:"Blueprint: CRM",description:"Customer Relationship Management platforms can be a key element of maintaining strong customer relationships and managing your company's data. Integrating ShipperHQ into your CRM can give your customer service teams real-time shipping quotes that are in sync with your eCommerce site or make their job easier by providing them with detailed shipment information for previous orders.",source:"@site/docs/use-cases/use-case-crm.md",sourceDirName:"use-cases",slug:"/use-cases/blueprint-crm",permalink:"/docs/use-cases/blueprint-crm",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Blueprint: CRM",slug:"blueprint-crm"},sidebar:"UseCases",previous:{title:"Overview",permalink:"/docs/use-cases/overview"},next:{title:"Blueprint: ERP",permalink:"/docs/use-cases/blueprint-erp"}},p={},l=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Use Cases",id:"use-cases",level:2},{value:"In-CRM Shipping Quotes",id:"in-crm-shipping-quotes",level:3},{value:"Advanced: Detailed Shipment Info",id:"advanced-detailed-shipment-info",level:3},{value:"CRM Integration Blueprint",id:"crm-integration-blueprint",level:2},{value:"Getting Started",id:"getting-started",level:3},{value:"What ShipperHQ functionality should I support?",id:"what-shipperhq-functionality-should-i-support",level:3},{value:"Advanced Use Cases",id:"advanced-use-cases",level:2},{value:"Set up PlaceOrder from your CRM",id:"set-up-placeorder-from-your-crm",level:3},{value:"Retrieve the information with the Insights API and display it in your CRM",id:"retrieve-the-information-with-the-insights-api-and-display-it-in-your-crm",level:3},{value:"How can I get support for my integration?",id:"how-can-i-get-support-for-my-integration",level:2}],c={toc:l};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Customer Relationship Management platforms can be a key element of maintaining strong customer relationships and managing your company's data. Integrating ShipperHQ into your CRM can give your customer service teams real-time shipping quotes that are in sync with your eCommerce site or make their job easier by providing them with detailed shipment information for previous orders."),(0,n.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"An active ShipperHQ account on the ShipperHQ Enterprise plan"),(0,n.kt)("li",{parentName:"ul"},"Developers comfortable with using GraphQL (API standard used by ShipperHQ) and JSON (results are provided with this format)"),(0,n.kt)("li",{parentName:"ul"},"Developers need to understand the CRM into which they will be integrating and have the ability to extend the CRM\u2019s functionality via external API calls to ShipperHQ")),(0,n.kt)("h2",{id:"use-cases"},"Use Cases"),(0,n.kt)("h3",{id:"in-crm-shipping-quotes"},"In-CRM Shipping Quotes"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"As a sales representative using a CRM to create quotes and sales orders, I want to obtain shipping rates and options via ShipperHQ so that the available shipping options and their cost can be accurately calculated for inclusion in my quote.")),(0,n.kt)("p",null,"When creating an order, make an API call to ShipperHQ's Rates API to retrieve shipping rates and options for that specific order. ShipperHQ can also return additional information like delivery dates, packaging, and split shipments as appropriate."),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Relevant APIs")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("ul",{parentName:"div"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/rates/overview"},"Rates API")," to get shipping options and rates")))),(0,n.kt)("h3",{id:"advanced-detailed-shipment-info"},"Advanced: Detailed Shipment Info"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"As a sales representative using a CRM,  I want to consult which shipping method was used for an order based on a quote captured in the CRM")),(0,n.kt)("p",null,"ShipperHQ can store detailed shipment information about an order including: Origin Location for each shipment, weight & dimensions of each shipment, support for multiple delivery methods (Small Parcels, LTL, Pickup in Store, Local Delivery, etc.), Delivery Date & Time, etc. This can then be retrieved using the Insights API for display or automated use within the CRM."),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Relevant APIs")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("ul",{parentName:"div"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/labels/place-order"},"PlaceOrder Mutation")," to capture successful orders placed or updated via the CRM"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/insights/overview"},"Insights API")," to display full shipping details")))),(0,n.kt)("h2",{id:"crm-integration-blueprint"},"CRM Integration Blueprint"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Main use case: Getting rates from ShipperHQ")),(0,n.kt)("p",null,"These instructions are high-level and quite technical: a good knowledge of APIs, integrations, GraphQL is required to follow this blueprint. It is not a step by step guide to integrate any CRM but provides clear milestones from the most simple integration to the more complex (and complete)."),(0,n.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"It is technically possible to use your live site to get rates because the Rates API is a read-only API. This being said, a preferred solution is to use a scope that is not ",(0,n.kt)("inlineCode",{parentName:"p"},"LIVE")," (e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"TEST"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"DEVELOPMENT")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"INTEGRATION"),"). If you don't use a different scope or ShipperHQ account and instead use the LIVE ShipperHQ account and scope of your production website, be extremely careful when making any changes to your ShipperHQ configuration so as to not impact live rates."))),(0,n.kt)("h3",{id:"getting-started"},"Getting Started"),(0,n.kt)("p",null,"Please take some time to familiarize yourself with the ShipperHQ Rates API:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Read the ",(0,n.kt)("a",{parentName:"li",href:"/docs/rates/overview"},"Rates API Guide")),(0,n.kt)("li",{parentName:"ul"},"Review the ",(0,n.kt)("a",{parentName:"li",href:"https://dev.shipperhq.com/rates-service"},"Rates API Reference")),(0,n.kt)("li",{parentName:"ul"},"Download and try out our ",(0,n.kt)("a",{parentName:"li",href:"/docs/rates/examples#postman-collection"},"Rates API Postman collection"))),(0,n.kt)("p",null,"We recommend starting with a focus on the simpler ",(0,n.kt)("a",{parentName:"p",href:"/docs/rates/examples#retrieveshippingquote"},(0,n.kt)("inlineCode",{parentName:"a"},"retrieveShippingQuote"))," query. Once you have this working, you can decide whether ",(0,n.kt)("inlineCode",{parentName:"p"},"retrieveShippingQuote")," is enough for your needs. If not, please zoom-in and use the more complete (and complex) query: ",(0,n.kt)("a",{parentName:"p",href:"/docs/rates/examples#example-retrieve-shipping-quote-with-scheduling-option"},(0,n.kt)("inlineCode",{parentName:"a"},"retrieveFullShippingQuote")),"."),(0,n.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"Re-use the token produced by our Postman collection to start coding with the language of your choice. This means you can get an understanding of the meat of the Rates API without having to first implement authentication yourself. We recommend that you use the language that will be used to integrate with the CRM so that you have a working prototype uncoupled from the CRM extension framework."))),(0,n.kt)("h3",{id:"what-shipperhq-functionality-should-i-support"},"What ShipperHQ functionality should I support?"),(0,n.kt)("p",null,"Because this is a custom integration, you do not need to support all of ShipperHQ's functionality. However, it is highly recommended that you support all the functionality for your LIVE site. Pay close attention to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/rates/quickstart#item-attributes"},(0,n.kt)("inlineCode",{parentName:"a"},"ItemAttributes"))," used in production. If you do not support the same attributes, the rates displayed in the CRM will be different from the rates displayed on the Websites and this can lead to a negative sales experience for the buyers or for extra cost at fulfillment."),(0,n.kt)("p",null,"You'll find more guidance on what elements we recommend supporting on the ",(0,n.kt)("a",{parentName:"p",href:"/docs/rates/quickstart#integration-requirements"},"Rates API Quickstart Guide"),"."),(0,n.kt)("h2",{id:"advanced-use-cases"},"Advanced Use Cases"),(0,n.kt)("h3",{id:"set-up-placeorder-from-your-crm"},"Set up PlaceOrder from your CRM"),(0,n.kt)("p",null,"In order to leverage the Insight API that contains all the order information, you need to notify ShipperHQ that a quote is now an order. To do this, you need to use the ",(0,n.kt)("a",{parentName:"p",href:"/docs/labels/place-order"},(0,n.kt)("inlineCode",{parentName:"a"},"PlaceOrder"))," mutation. A call to PlaceOrder should be made each time an order is confirmed in your CRM. It can be done immediately or on a scheduled basis."),(0,n.kt)("h3",{id:"retrieve-the-information-with-the-insights-api-and-display-it-in-your-crm"},"Retrieve the information with the Insights API and display it in your CRM"),(0,n.kt)("p",null,"Once your orders are properly captured in ShipperHQ, you can use the ",(0,n.kt)("a",{parentName:"p",href:"/docs/insights/overview"},"Insights API")," to retrieve all the fulfillment information."),(0,n.kt)("h2",{id:"how-can-i-get-support-for-my-integration"},"How can I get support for my integration?"),(0,n.kt)("p",null,"Developers should use the dedicated ",(0,n.kt)("a",{parentName:"p",href:"/contact"},"contact form")," on our developer portal to get in touch with our Dev Support team."))}d.isMDXComponent=!0}}]);