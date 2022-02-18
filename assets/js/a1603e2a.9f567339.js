"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[39156],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return v}});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=s(t),v=i,m=d["".concat(c,".").concat(v)]||d[v]||p[v]||o;return t?n.createElement(m,l(l({ref:r},u),{},{components:t})):n.createElement(m,l({ref:r},u))}));function v(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=d;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var s=2;s<o;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},81911:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var n=t(87462),i=t(63366),o=(t(67294),t(3905)),l=["components"],a={id:"retrieve-labels",title:"retrieveLabels"},c=void 0,s={unversionedId:"order-view-service/queries/retrieve-labels",id:"order-view-service/queries/retrieve-labels",isDocsHomePage:!1,title:"retrieveLabels",description:"No description",source:"@site/docs/order-view-service/queries/retrieve-labels.mdx",sourceDirName:"order-view-service/queries",slug:"/order-view-service/queries/retrieve-labels",permalink:"/docs/order-view-service/queries/retrieve-labels",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/docs/order-view-service/queries/retrieve-labels.mdx",tags:[],version:"current",frontMatter:{id:"retrieve-labels",title:"retrieveLabels"},sidebar:"orderViewSidebar",previous:{title:"TimeSlotWhereInput",permalink:"/docs/order-view-service/inputs/time-slot-where-input"},next:{title:"viewOrder",permalink:"/docs/order-view-service/queries/view-order"}},u=[{value:"Arguments",id:"arguments",children:[{value:"<code>orderNumber</code> (String)",id:"ordernumber-string",children:[],level:4}],level:3},{value:"Type",id:"type",children:[{value:"LabelResultItem",id:"labelresultitem",children:[],level:4}],level:3}],p={toc:u};function d(e){var r=e.components,t=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"retrieveLabels(\n  orderNumber: String!\n): [LabelResultItem]\n\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"ordernumber-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"orderNumber")," (",(0,o.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"labelresultitem"},(0,o.kt)("a",{parentName:"h4",href:"../../order-view-service/objects/label-result-item"},(0,o.kt)("inlineCode",{parentName:"a"},"LabelResultItem"))))}d.isMDXComponent=!0}}]);