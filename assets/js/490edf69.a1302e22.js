"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[63836],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=a,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},95448:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"label-shipment-detail-input",title:"LabelShipmentDetailInput"},p=void 0,s={unversionedId:"rate-manager-service/inputs/label-shipment-detail-input",id:"version-1.0.0/rate-manager-service/inputs/label-shipment-detail-input",isDocsHomePage:!1,title:"LabelShipmentDetailInput",description:"No description",source:"@site/versioned_docs/version-1.0.0/rate-manager-service/inputs/label-shipment-detail-input.mdx",sourceDirName:"rate-manager-service/inputs",slug:"/rate-manager-service/inputs/label-shipment-detail-input",permalink:"/docs/1.0.0/rate-manager-service/inputs/label-shipment-detail-input",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/versioned_docs/version-1.0.0/rate-manager-service/inputs/label-shipment-detail-input.mdx",tags:[],version:"1.0.0",frontMatter:{id:"label-shipment-detail-input",title:"LabelShipmentDetailInput"},sidebar:"version-1.0.0/rateManagerService",previous:{title:"LabelItemWhereInput",permalink:"/docs/1.0.0/rate-manager-service/inputs/label-item-where-input"},next:{title:"LabelWhereInput",permalink:"/docs/1.0.0/rate-manager-service/inputs/label-where-input"}},c=[{value:"Fields",id:"fields",children:[{value:"<code>shipmentId</code> (String)",id:"shipmentid-string",children:[],level:4},{value:"<code>shippingMethodCode</code> (String)",id:"shippingmethodcode-string",children:[],level:4},{value:"<code>insuranceCharges</code> (Float)",id:"insurancecharges-float",children:[],level:4},{value:"<code>shippingCharges</code> (Float)",id:"shippingcharges-float",children:[],level:4},{value:"<code>taxCharges</code> (Float)",id:"taxcharges-float",children:[],level:4}],level:3}],d={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type LabelShipmentDetailInput {\n  shipmentId: String!\n  shippingMethodCode: String!\n  insuranceCharges: Float\n  shippingCharges: Float\n  taxCharges: Float\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"shipmentid-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"shipmentId")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"shippingmethodcode-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"shippingMethodCode")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"insurancecharges-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"insuranceCharges")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("h4",{id:"shippingcharges-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"shippingCharges")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("h4",{id:"taxcharges-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"taxCharges")," (",(0,i.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"))}u.isMDXComponent=!0}}]);