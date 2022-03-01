"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[1660],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},d=Object.keys(e);for(r=0;r<d.length;r++)n=d[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(r=0;r<d.length;r++)n=d[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),p=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(a.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,d=e.originalType,a=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,h=u["".concat(a,".").concat(m)]||u[m]||l[m]||d;return n?r.createElement(h,c(c({ref:t},s),{},{components:n})):r.createElement(h,c({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var d=n.length,c=new Array(d);c[0]=u;var o={};for(var a in t)hasOwnProperty.call(t,a)&&(o[a]=t[a]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var p=2;p<d;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5250:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return a},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var r=n(7462),i=n(3366),d=(n(7294),n(3905)),c=["components"],o={id:"rmsshipment-order-by-input",title:"RMSShipmentOrderByInput"},a=void 0,p={unversionedId:"order-view-service/enums/rmsshipment-order-by-input",id:"order-view-service/enums/rmsshipment-order-by-input",isDocsHomePage:!1,title:"RMSShipmentOrderByInput",description:"No description",source:"@site/docs/order-view-service/enums/rmsshipment-order-by-input.mdx",sourceDirName:"order-view-service/enums",slug:"/order-view-service/enums/rmsshipment-order-by-input",permalink:"/docs/order-view-service/enums/rmsshipment-order-by-input",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/docs/order-view-service/enums/rmsshipment-order-by-input.mdx",tags:[],version:"current",frontMatter:{id:"rmsshipment-order-by-input",title:"RMSShipmentOrderByInput"},sidebar:"orderViewSidebar",previous:{title:"RMSPickupLocationDetailOrderByInput",permalink:"/docs/order-view-service/enums/rmspickup-location-detail-order-by-input"},next:{title:"RMSShippingRateOrderByInput",permalink:"/docs/order-view-service/enums/rmsshipping-rate-order-by-input"}},s=[{value:"Values",id:"values",children:[{value:"<code>id_ASC</code>",id:"id_asc",children:[],level:4},{value:"<code>id_DESC</code>",id:"id_desc",children:[],level:4},{value:"<code>createdAt_ASC</code>",id:"createdat_asc",children:[],level:4},{value:"<code>createdAt_DESC</code>",id:"createdat_desc",children:[],level:4},{value:"<code>updatedAt_ASC</code>",id:"updatedat_asc",children:[],level:4},{value:"<code>updatedAt_DESC</code>",id:"updatedat_desc",children:[],level:4},{value:"<code>shipmentId_ASC</code>",id:"shipmentid_asc",children:[],level:4},{value:"<code>shipmentId_DESC</code>",id:"shipmentid_desc",children:[],level:4},{value:"<code>name_ASC</code>",id:"name_asc",children:[],level:4},{value:"<code>name_DESC</code>",id:"name_desc",children:[],level:4},{value:"<code>description_ASC</code>",id:"description_asc",children:[],level:4},{value:"<code>description_DESC</code>",id:"description_desc",children:[],level:4}],level:3}],l={toc:s};function u(e){var t=e.components,n=(0,i.Z)(e,c);return(0,d.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"No description"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"enum RMSShipmentOrderByInput {\n  id_ASC\n  id_DESC\n  createdAt_ASC\n  createdAt_DESC\n  updatedAt_ASC\n  updatedAt_DESC\n  shipmentId_ASC\n  shipmentId_DESC\n  name_ASC\n  name_DESC\n  description_ASC\n  description_DESC\n}\n")),(0,d.kt)("h3",{id:"values"},"Values"),(0,d.kt)("h4",{id:"id_asc"},(0,d.kt)("inlineCode",{parentName:"h4"},"id_ASC")),(0,d.kt)("h4",{id:"id_desc"},(0,d.kt)("inlineCode",{parentName:"h4"},"id_DESC")),(0,d.kt)("h4",{id:"createdat_asc"},(0,d.kt)("inlineCode",{parentName:"h4"},"createdAt_ASC")),(0,d.kt)("h4",{id:"createdat_desc"},(0,d.kt)("inlineCode",{parentName:"h4"},"createdAt_DESC")),(0,d.kt)("h4",{id:"updatedat_asc"},(0,d.kt)("inlineCode",{parentName:"h4"},"updatedAt_ASC")),(0,d.kt)("h4",{id:"updatedat_desc"},(0,d.kt)("inlineCode",{parentName:"h4"},"updatedAt_DESC")),(0,d.kt)("h4",{id:"shipmentid_asc"},(0,d.kt)("inlineCode",{parentName:"h4"},"shipmentId_ASC")),(0,d.kt)("h4",{id:"shipmentid_desc"},(0,d.kt)("inlineCode",{parentName:"h4"},"shipmentId_DESC")),(0,d.kt)("h4",{id:"name_asc"},(0,d.kt)("inlineCode",{parentName:"h4"},"name_ASC")),(0,d.kt)("h4",{id:"name_desc"},(0,d.kt)("inlineCode",{parentName:"h4"},"name_DESC")),(0,d.kt)("h4",{id:"description_asc"},(0,d.kt)("inlineCode",{parentName:"h4"},"description_ASC")),(0,d.kt)("h4",{id:"description_desc"},(0,d.kt)("inlineCode",{parentName:"h4"},"description_DESC")))}u.isMDXComponent=!0}}]);