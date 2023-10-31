"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[1327],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3433:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return m}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:1,slug:"overview",title:"Overview",tags:["labels","api","guide","overview"]},p=void 0,l={unversionedId:"labels/overview",id:"labels/overview",title:"Overview",description:"The Labels API enables you to produce shipping labels for shipments directly within your application. When used in conjunction with the ShipperHQ Rates API and Insights API it provides an end-to-end solution from checkout to fulfillment.",source:"@site/docs/labels/overview.md",sourceDirName:"labels",slug:"/labels/overview",permalink:"/docs/labels/overview",tags:[{label:"labels",permalink:"/docs/tags/labels"},{label:"api",permalink:"/docs/tags/api"},{label:"guide",permalink:"/docs/tags/guide"},{label:"overview",permalink:"/docs/tags/overview"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"overview",title:"Overview",tags:["labels","api","guide","overview"]},sidebar:"Label",next:{title:"How Labels Work",permalink:"/docs/labels/how-labels-work"}},c={},m=[{value:"Use cases",id:"use-cases",level:2},{value:"Supported Carriers",id:"supported-carriers",level:2}],u={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Labels API enables you to produce shipping labels for shipments directly within your application. When used in conjunction with the ShipperHQ ",(0,i.kt)("a",{parentName:"p",href:"/docs/rates/overview"},"Rates API")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/insights/overview"},"Insights API")," it provides an end-to-end solution from checkout to fulfillment."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"API Access Available on ShipperHQ Enterprise")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Access to the ShipperHQ APIs requires a ShipperHQ Enterprise plan. You can check your current plan in ",(0,i.kt)("a",{parentName:"p",href:"https://docs.shipperhq.com/subscription/#What_plan_am_I_on"},"your ShipperHQ Dashboard"),". If you're not currently on an Enterprise plan, please ",(0,i.kt)("a",{parentName:"p",href:"https://shipperhq.com/contact"},"contact us")," to review upgrade options."),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Note:"))," This requirement does not apply to ShipperHQ Partners. Contact our ",(0,i.kt)("a",{parentName:"p",href:"https://shipperhq.com/contact"},"Partnerships team")," for more info."))),(0,i.kt)("h2",{id:"use-cases"},"Use cases"),(0,i.kt)("p",null,"Some scenarios in which ShipperHQ's Labels API is most useful are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ERPs and WMS"),": In systems responsible for managing inventory and orders, the Labels API can be leveraged to provide built-in shipping capabilities."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"eCommerce Platforms"),": For eCommerce platforms looking to support shipping from within the platform dashboard."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Order Management and Fulfillment Systems"),": The Labels API can be used to enhance the functionality of order management systems by providing built-in shipping capabilities."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"POS Systems"),": For Point of Sale systems, integrating the Labels API can support ship from store and other fulfillment functionality.")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Early Access Program")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ShipperHQ Labels API is currently in closed Beta. ShipperHQ is looking for early access partners interested in participating in this program.\nPlease ",(0,i.kt)("a",{parentName:"p",href:"/contact"},"contact us")," if interested."))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Pricing")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Usage of the Labels API will not be free and its use is not covered by a base ShipperHQ subscription. A cost per label will be incurred when creating labels via this API. Exact pricing will be announced in future. ",(0,i.kt)("a",{parentName:"p",href:"/contact"},"Contact us")," for more information."))),(0,i.kt)("h2",{id:"supported-carriers"},"Supported Carriers"),(0,i.kt)("p",null,"ShipperHQ's Early Access Program supports FedEx, UPS, and USPS labels. See the ",(0,i.kt)("a",{parentName:"p",href:"/docs/labels/quickstart"},"Labels Quickstart")," for more information."))}d.isMDXComponent=!0}}]);