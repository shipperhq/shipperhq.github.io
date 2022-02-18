"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[66054],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),o=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},d=function(e){var t=o(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=o(r),m=i,h=s["".concat(l,".").concat(m)]||s[m]||u[m]||a;return r?n.createElement(h,p(p({ref:t},d),{},{components:r})):n.createElement(h,p({ref:t},d))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,p=new Array(a);p[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,p[1]=c;for(var o=2;o<a;o++)p[o]=r[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},87285:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return o},toc:function(){return d},default:function(){return s}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),p=["components"],c={id:"create-label-input",title:"CreateLabelInput"},l=void 0,o={unversionedId:"rate-manager-service/inputs/create-label-input",id:"rate-manager-service/inputs/create-label-input",isDocsHomePage:!1,title:"CreateLabelInput",description:"No description",source:"@site/docs/rate-manager-service/inputs/create-label-input.mdx",sourceDirName:"rate-manager-service/inputs",slug:"/rate-manager-service/inputs/create-label-input",permalink:"/docs/rate-manager-service/inputs/create-label-input",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/docs/rate-manager-service/inputs/create-label-input.mdx",tags:[],version:"current",frontMatter:{id:"create-label-input",title:"CreateLabelInput"},sidebar:"rateManagerService",previous:{title:"CarrierWhereInput",permalink:"/docs/rate-manager-service/inputs/carrier-where-input"},next:{title:"DeliveryDateRangeWhereInput",permalink:"/docs/rate-manager-service/inputs/delivery-date-range-where-input"}},d=[{value:"Fields",id:"fields",children:[{value:"<code>orderNumber</code> (String)",id:"ordernumber-string",children:[],level:4},{value:"<code>carrierCode</code> (String)",id:"carriercode-string",children:[],level:4},{value:"<code>carrierName</code> (String)",id:"carriername-string",children:[],level:4},{value:"<code>methodName</code> (String)",id:"methodname-string",children:[],level:4},{value:"<code>trackingId</code> (String)",id:"trackingid-string",children:[],level:4},{value:"<code>items</code> (LabelItemInput)",id:"items-labeliteminput",children:[],level:4},{value:"<code>pieces</code> (PieceInput)",id:"pieces-pieceinput",children:[],level:4},{value:"<code>shipmentDetail</code> (LabelShipmentDetailInput)",id:"shipmentdetail-labelshipmentdetailinput",children:[],level:4},{value:"<code>recipient</code> (RecipientInput)",id:"recipient-recipientinput",children:[],level:4},{value:"<code>sender</code> (SenderInput)",id:"sender-senderinput",children:[],level:4}],level:3}],u={toc:d};function s(e){var t=e.components,r=(0,i.Z)(e,p);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type CreateLabelInput {\n  orderNumber: String!\n  carrierCode: String!\n  carrierName: String!\n  methodName: String!\n  trackingId: String\n  items: [LabelItemInput!]\n  pieces: [PieceInput!]\n  shipmentDetail: LabelShipmentDetailInput!\n  recipient: RecipientInput!\n  sender: SenderInput!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"ordernumber-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"orderNumber")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"carriercode-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"carrierCode")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"carriername-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"carrierName")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"methodname-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"methodName")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"trackingid-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"trackingId")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"items-labeliteminput"},(0,a.kt)("inlineCode",{parentName:"h4"},"items")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/inputs/label-item-input"},(0,a.kt)("inlineCode",{parentName:"a"},"LabelItemInput")),")"),(0,a.kt)("h4",{id:"pieces-pieceinput"},(0,a.kt)("inlineCode",{parentName:"h4"},"pieces")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/inputs/piece-input"},(0,a.kt)("inlineCode",{parentName:"a"},"PieceInput")),")"),(0,a.kt)("h4",{id:"shipmentdetail-labelshipmentdetailinput"},(0,a.kt)("inlineCode",{parentName:"h4"},"shipmentDetail")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/inputs/label-shipment-detail-input"},(0,a.kt)("inlineCode",{parentName:"a"},"LabelShipmentDetailInput")),")"),(0,a.kt)("h4",{id:"recipient-recipientinput"},(0,a.kt)("inlineCode",{parentName:"h4"},"recipient")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/inputs/recipient-input"},(0,a.kt)("inlineCode",{parentName:"a"},"RecipientInput")),")"),(0,a.kt)("h4",{id:"sender-senderinput"},(0,a.kt)("inlineCode",{parentName:"h4"},"sender")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/inputs/sender-input"},(0,a.kt)("inlineCode",{parentName:"a"},"SenderInput")),")"))}s.isMDXComponent=!0}}]);