"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[9165],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),p=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,f=u["".concat(l,".").concat(d)]||u[d]||h[d]||a;return r?i.createElement(f,s(s({ref:t},c),{},{components:r})):i.createElement(f,s({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var p=2;p<a;p++)s[p]=r[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7985:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var i=r(7462),n=r(3366),a=(r(7294),r(3905)),s=["components"],o={sidebar_position:4},l="Shipping Insights FAQ",p={unversionedId:"insight/faq",id:"insight/faq",isDocsHomePage:!1,title:"Shipping Insights FAQ",description:"Is the data for past orders available via the Insight API?",source:"@site/docs/insight/faq.md",sourceDirName:"insight",slug:"/insight/faq",permalink:"/docs/insight/faq",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/docs/insight/faq.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"ShippingInsights",previous:{title:"Shipping Insights Quickstart",permalink:"/docs/insight/quickstart"},next:{title:"PlaceOrder Mutation",permalink:"/docs/insight/place-order"}},c=[{value:"Is the data for past orders available via the Insight API?",id:"is-the-data-for-past-orders-available-via-the-insight-api",children:[],level:2},{value:"Is the Origin address available?",id:"is-the-origin-address-available",children:[],level:2},{value:"Is Freight Class available via Insight?",id:"is-freight-class-available-via-insight",children:[],level:2}],h={toc:c};function u(e){var t=e.components,r=(0,n.Z)(e,s);return(0,a.kt)("wrapper",(0,i.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"shipping-insights-faq"},"Shipping Insights FAQ"),(0,a.kt)("h2",{id:"is-the-data-for-past-orders-available-via-the-insight-api"},"Is the data for past orders available via the Insight API?"),(0,a.kt)("p",null,"No, ShipperHQ does not store shipment data until the Shipping Insights Advanced Feature enabled on a ShipperhQ account. Orders placed before this feature is enabled are not available via the Shipping Insights API."),(0,a.kt)("h2",{id:"is-the-origin-address-available"},"Is the Origin address available?"),(0,a.kt)("p",null,"Not currently. We return the Origin name (which is a unique identifier) but do not currently return the full ship-from address for that Origin. The ship-from address used will match the address"),(0,a.kt)("h2",{id:"is-freight-class-available-via-insight"},"Is Freight Class available via Insight?"),(0,a.kt)("p",null,"Not currently. Freight Class will be added in an upcoming version of the API."))}u.isMDXComponent=!0}}]);