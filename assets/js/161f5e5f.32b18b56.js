"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[31044],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},p=Object.keys(e);for(i=0;i<p.length;i++)n=p[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(i=0;i<p.length;i++)n=p[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),o=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=o(e.components);return i.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=o(n),d=r,h=m["".concat(c,".").concat(d)]||m[d]||s[d]||p;return n?i.createElement(h,l(l({ref:t},u),{},{components:n})):i.createElement(h,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,l=new Array(p);l[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var o=2;o<p;o++)l[o]=n[o];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70354:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return o},toc:function(){return u},default:function(){return m}});var i=n(87462),r=n(63366),p=(n(67294),n(3905)),l=["components"],a={id:"shipment-input",title:"ShipmentInput"},c=void 0,o={unversionedId:"label-service/inputs/shipment-input",id:"label-service/inputs/shipment-input",isDocsHomePage:!1,title:"ShipmentInput",description:"No description",source:"@site/docs/label-service/inputs/shipment-input.mdx",sourceDirName:"label-service/inputs",slug:"/label-service/inputs/shipment-input",permalink:"/docs/label-service/inputs/shipment-input",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/docs/label-service/inputs/shipment-input.mdx",tags:[],version:"current",frontMatter:{id:"shipment-input",title:"ShipmentInput"},sidebar:"labelService",previous:{title:"ShipmentDetailInput",permalink:"/docs/label-service/inputs/shipment-detail-input"},next:{title:"SiteDetailsInput",permalink:"/docs/label-service/inputs/site-details-input"}},u=[{value:"Fields",id:"fields",children:[{value:"<code>pieces</code> (LabelPieceInput)",id:"pieces-labelpieceinput",children:[],level:4},{value:"<code>shipmentDetail</code> (ShipmentDetailInput)",id:"shipmentdetail-shipmentdetailinput",children:[],level:4}],level:3}],s={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,p.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"No description"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"type ShipmentInput {\n  pieces: [LabelPieceInput]\n  shipmentDetail: ShipmentDetailInput\n}\n")),(0,p.kt)("h3",{id:"fields"},"Fields"),(0,p.kt)("h4",{id:"pieces-labelpieceinput"},(0,p.kt)("inlineCode",{parentName:"h4"},"pieces")," (",(0,p.kt)("a",{parentName:"h4",href:"../../label-service/inputs/label-piece-input"},(0,p.kt)("inlineCode",{parentName:"a"},"LabelPieceInput")),")"),(0,p.kt)("h4",{id:"shipmentdetail-shipmentdetailinput"},(0,p.kt)("inlineCode",{parentName:"h4"},"shipmentDetail")," (",(0,p.kt)("a",{parentName:"h4",href:"../../label-service/inputs/shipment-detail-input"},(0,p.kt)("inlineCode",{parentName:"a"},"ShipmentDetailInput")),")"))}m.isMDXComponent=!0}}]);