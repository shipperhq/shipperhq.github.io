"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[8944],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(a),m=n,u=c["".concat(s,".").concat(m)]||c[m]||h[m]||i;return a?r.createElement(u,l(l({ref:t},d),{},{components:a})):r.createElement(u,l({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1069:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=a(3117),n=(a(7294),a(3905));const i={sidebar_position:10,slug:"how-labels-work",title:"How Labels Work",tags:["labels","api","guide","overview"]},l=void 0,o={unversionedId:"labels/how-labels-work",id:"labels/how-labels-work",title:"How Labels Work",description:"The ShipperHQ Labels API can be used to produce shipping labels but it is much more powerful when combined with the ShipperHQ Rates API and Insights API. At a minimum, the Insights API must be implemented in order to support storing shipment information used to produce labels.",source:"@site/docs/labels/how-labels-work.md",sourceDirName:"labels",slug:"/labels/how-labels-work",permalink:"/docs/labels/how-labels-work",tags:[{label:"labels",permalink:"/docs/tags/labels"},{label:"api",permalink:"/docs/tags/api"},{label:"guide",permalink:"/docs/tags/guide"},{label:"overview",permalink:"/docs/tags/overview"}],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,slug:"how-labels-work",title:"How Labels Work",tags:["labels","api","guide","overview"]},sidebar:"Label",previous:{title:"Overview",permalink:"/docs/labels/overview"},next:{title:"Quickstart",permalink:"/docs/labels/quickstart"}},s={},p=[{value:"High level overview",id:"high-level-overview",level:2},{value:"Workflow",id:"workflow",level:3},{value:"Recommended Workflow",id:"recommended-workflow",level:2},{value:"1. Get Rates",id:"1-get-rates",level:3},{value:"2. Retrieve Insights",id:"2-retrieve-insights",level:3},{value:"3. Create Label",id:"3-create-label",level:3},{value:"How does ShipperHQ produce labels?",id:"how-does-shipperhq-produce-labels",level:2},{value:"Key queries used for labels",id:"key-queries-used-for-labels",level:2}],d={toc:p};function h(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ShipperHQ Labels API can be used to produce shipping labels but it is much more powerful when combined with the ShipperHQ ",(0,n.kt)("a",{parentName:"p",href:"/docs/rates/overview"},"Rates API")," and ",(0,n.kt)("a",{parentName:"p",href:"/docs/insights/overview"},"Insights API"),". At a minimum, the Insights API must be implemented in order to support storing shipment information used to produce labels."),(0,n.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Early Access Program")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"The ShipperHQ Labels API is currently in closed Beta. ShipperHQ is looking for early access partners interested in participating in this program.\nPlease ",(0,n.kt)("a",{parentName:"p",href:"/contact"},"contact us")," if interested."))),(0,n.kt)("h2",{id:"high-level-overview"},"High level overview"),(0,n.kt)("p",null,"The Labels API is the final API in the standard ShipperHQ workflow. The ",(0,n.kt)("a",{parentName:"p",href:"/docs/rates/overview"},"Rates API")," can be used to provide shipping rates (e.g. in an eCommerce checkout), the ",(0,n.kt)("a",{parentName:"p",href:"/docs/insights/overview"},"Insights API")," is used to retrieve the detailed shipment information generated by ShipperHQ when providing shipping rates. Finally, the Labels API can be used to produce the shipping labels needed for the shipment."),(0,n.kt)("h3",{id:"workflow"},"Workflow"),(0,n.kt)("p",null,(0,n.kt)("img",{loading:"lazy",alt:"High Level Workflow",src:a(6570).Z,width:"3333",height:"1875"})),(0,n.kt)("h2",{id:"recommended-workflow"},"Recommended Workflow"),(0,n.kt)("p",null,"While the ShipperHQ APIs can be used in various ways, our recommended workflow for label printing is described below."),(0,n.kt)("h3",{id:"1-get-rates"},"1. Get Rates"),(0,n.kt)("p",null,"Generating shipping rates with ShipperHQ for orders where you'll be using ShipperHQ to print rates makes for the easiest workflow."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/rates/overview"},"See the Rates API Guide ",(0,n.kt)("i",{class:"fa fa-arrow-right"}))),(0,n.kt)("h3",{id:"2-retrieve-insights"},"2. Retrieve Insights"),(0,n.kt)("p",null,"When you're ready to produce a shipping label, use the Insights API to retrieve the shipment information generated by ShipperHQ."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/insights/overview"},"See the Insights API Guide ",(0,n.kt)("i",{class:"fa fa-arrow-right"}))),(0,n.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"Implementation of the related ",(0,n.kt)("a",{parentName:"p",href:"/docs/labels/place-order"},(0,n.kt)("inlineCode",{parentName:"a"},"PlaceOrder"))," mutation of the ",(0,n.kt)("a",{parentName:"p",href:"/docs/labels/overview"},"Labels API")," may be required to use Shipping Insights. However, this is only the case if you are ",(0,n.kt)("strong",{parentName:"p"},"not")," using the native ShipperHQ apps/plugins/extensions on Magento/Adobe Commerce, BigCommerce, Shopify, SalesForce B2C Commerce Cloud, WooCommerce, Zoey - ",(0,n.kt)("a",{parentName:"p",href:"https://shipperhq.com/pricing"},"complete list here"),"). When using the native ShipperHQ integration with any of these platforms, the PlaceOrder function occurs automatically, so you can use the Insights API without implementing PlaceOrder yourself."))),(0,n.kt)("h3",{id:"3-create-label"},"3. Create Label"),(0,n.kt)("p",null,"Using the Labels API, you can create shipping labels for packages in a shipment."),(0,n.kt)("p",null,"The Labels API also supports:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Label Printing"),": Print shipping labels directly to a laser or thermal label printer using the Labels API or implement your own label printing functionality with label images retrieved from the Labels API."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Cancel Labels"),": Easily cancel or void labels that have already been generated."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Create Return Labels"),": Generate return labels that can be sent as digital files or printed as needed.")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/labels/quickstart"},"Continue to the Labels API Quickstart Guide ",(0,n.kt)("i",{class:"fa fa-arrow-right"}))),(0,n.kt)("h2",{id:"how-does-shipperhq-produce-labels"},"How does ShipperHQ produce labels?"),(0,n.kt)("p",null,"ShipperHQ's labels are produced by connecting to carrier (or related) APIs using the shipper's account. This means that at least one carrier account is required in order to use the ShipperHQ Labels API."),(0,n.kt)("h2",{id:"key-queries-used-for-labels"},"Key queries used for labels"),(0,n.kt)("p",null,"The Labels API consists of the following requests:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Request"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"placeOrder")),(0,n.kt)("td",{parentName:"tr",align:null},"Used to tell ShipperHQ that a certain quote should be stored and associated with a given ",(0,n.kt)("inlineCode",{parentName:"td"},"OrderNumer"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"createLabel")),(0,n.kt)("td",{parentName:"tr",align:null},"Creates and returns a shipping label.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"createManifest")),(0,n.kt)("td",{parentName:"tr",align:null},"Used to create a manifest required by certain carriers.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"cancelLabel")),(0,n.kt)("td",{parentName:"tr",align:null},"Cancels a given label that has been generated by ShipperHQ.")))))}h.isMDXComponent=!0},6570:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/complete-rate-insight-label-process-565842354bfcee9b9d7350dcfbe0105b.jpg"}}]);