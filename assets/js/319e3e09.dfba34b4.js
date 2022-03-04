"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[689],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return u}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),h=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=h(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=h(n),u=i,d=m["".concat(p,".").concat(u)]||m[u]||c[u]||a;return n?r.createElement(d,o(o({ref:t},l),{},{components:n})):r.createElement(d,o({ref:t},l))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var h=2;h<a;h++)o[h]=n[h];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},465:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return h},toc:function(){return l},default:function(){return m}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={sidebar_position:2},p="How Shipping Insights Works",h={unversionedId:"insight/how-shipping-insights-works",id:"insight/how-shipping-insights-works",isDocsHomePage:!1,title:"How Shipping Insights Works",description:"ShipperHQ generates a significant amount of detail about each shipment for which it generates shipping rates and options whenever the ShipperHQ Rating API is called. If the ShipperHQ account associated with the rating call has the Shipping Insights Advanced Feature enabled, ShipperHQ can store these shipment details for later retrieval with the Insight API.",source:"@site/docs/insight/how-shipping-insights-works.md",sourceDirName:"insight",slug:"/insight/how-shipping-insights-works",permalink:"/docs/insight/how-shipping-insights-works",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/docs/insight/how-shipping-insights-works.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"ShippingInsights",previous:{title:"Insight Overview",permalink:"/docs/insight/overview"},next:{title:"Insight Quickstart",permalink:"/docs/insight/quickstart"}},l=[{value:"Workflow",id:"workflow",children:[],level:2},{value:"Key queries",id:"key-queries",children:[],level:2}],c={toc:l};function m(e){var t=e.components,s=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-shipping-insights-works"},"How Shipping Insights Works"),(0,a.kt)("p",null,"ShipperHQ generates a significant amount of detail about each shipment for which it generates shipping rates and options whenever the ShipperHQ Rating API is called. If the ShipperHQ account associated with the rating call has the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.shipperhq.com/shipping-insights-configuration/#Requirements"},"Shipping Insights")," Advanced Feature enabled, ShipperHQ can store these shipment details for later retrieval with the Insight API."),(0,a.kt)("p",null,"When using the ShipperHQ native integrations with ",(0,a.kt)("a",{parentName:"p",href:"https://docs.shipperhq.com/installing-magento-2-shipperhq-extension/"},"Magento 2"),", ",(0,a.kt)("a",{parentName:"p",href:"https://docs.shipperhq.com/setup-shipperhq-bigcommerce-store/"},"BigCommerce"),", or ",(0,a.kt)("a",{parentName:"p",href:"https://docs.shipperhq.com/connect-shopify-shipperhq/"},"Shopify"),", enabling the Shipping Insights Advanced Feature on a ShipperHQ account will automatically store shipment information when a customer completes checkout. For other platforms or custom integrations, the ",(0,a.kt)("a",{parentName:"p",href:"place-order"},"PlaceOrder")," mutation of the ",(0,a.kt)("a",{parentName:"p",href:"../label/overview/"},"Label API")," can be used when an order is placed to tell ShipperHQ to store shipment information. In either case, the eCommerce-platform Order Number is attached to the shipment information when it is stored and can be used to look up shipment information using the Insight API."),(0,a.kt)("h2",{id:"workflow"},"Workflow"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Insights workflow",src:n(3764).Z})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A shipping rate request is sent via the ",(0,a.kt)("a",{parentName:"li",href:"../rate/overview/"},"Rate API")),(0,a.kt)("li",{parentName:"ol"},"ShipperHQ generates rates and options and returns them"),(0,a.kt)("li",{parentName:"ol"},"When the customer completes checkout, a call to ",(0,a.kt)("a",{parentName:"li",href:"place-order"},"PlaceOrder")," causes ShipperHQ to store the details"),(0,a.kt)("li",{parentName:"ol"},"Shipment details are available via the Insight API")),(0,a.kt)("h2",{id:"key-queries"},"Key queries"),(0,a.kt)("p",null,"The Insight API is a read-only API but can return either shipment details or labels for a given order."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Query"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"viewOrder")),(0,a.kt)("td",{parentName:"tr",align:null},"Given an order number, retrieves shipment information for that order.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"retrieveLabels")),(0,a.kt)("td",{parentName:"tr",align:null},"If a label has been produced for a given order using the ",(0,a.kt)("a",{parentName:"td",href:"../label/overview"},"Label API"),", returns details of those labels.")))),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),(0,a.kt)("inlineCode",{parentName:"h5"},"PlaceOrder")," mutation")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Implementation of the related ",(0,a.kt)("a",{parentName:"p",href:"place-order"},(0,a.kt)("inlineCode",{parentName:"a"},"PlaceOrder"))," mutation of the ",(0,a.kt)("a",{parentName:"p",href:"../label/overview/"},"Label API")," may be required to use Shipping Insights. However, this is only the case if you are ",(0,a.kt)("strong",{parentName:"p"},"not")," using the native ShipperHQ apps/plugins/extensions on Magento/Adobe Commerce, BigCommerce, Shopify, SalesForce B2C Commerce Cloud, WooCommerce, Zoey - ",(0,a.kt)("a",{parentName:"p",href:"https://shipperhq.com/pricing"},"complete list here"),"). When using the native ShipperHQ integration with any of these platforms, the PlaceOrder function occurs automatically so you are able to use the Insight API without implementing PlaceOrder yourself."))))}m.isMDXComponent=!0},3764:function(e,t,n){t.Z=n.p+"assets/images/insight-workflow-bc9c64b0b148fa30b525ca091e0ca54f.png"}}]);