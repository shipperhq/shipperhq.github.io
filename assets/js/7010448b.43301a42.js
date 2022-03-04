"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[208],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),p=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,g=u["".concat(c,".").concat(d)]||u[d]||h[d]||a;return n?i.createElement(g,s(s({ref:t},l),{},{components:n})):i.createElement(g,s({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<a;p++)s[p]=n[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2795:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return u}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),s=["components"],o={sidebar_position:3},c="Shipping Insights Quickstart",p={unversionedId:"insight/quickstart",id:"insight/quickstart",isDocsHomePage:!1,title:"Shipping Insights Quickstart",description:"Requirements",source:"@site/docs/insight/quickstart.md",sourceDirName:"insight",slug:"/insight/quickstart",permalink:"/docs/insight/quickstart",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/docs/insight/quickstart.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"ShippingInsights",previous:{title:"How Shipping Insights Works",permalink:"/docs/insight/how-shipping-insights-works"},next:{title:"Shipping Insights FAQ",permalink:"/docs/insight/faq"}},l=[{value:"Requirements",id:"requirements",children:[],level:2},{value:"Authentication",id:"authentication",children:[{value:"Generating an Access Token",id:"generating-an-access-token",children:[],level:3}],level:2},{value:"Testing",id:"testing",children:[{value:"Enable Shipping Insights &amp; Retrieve Access Token",id:"enable-shipping-insights--retrieve-access-token",children:[],level:3},{value:"Place an Order",id:"place-an-order",children:[],level:3},{value:"Make a Shipping Insights API call",id:"make-a-shipping-insights-api-call",children:[],level:3}],level:2}],h={toc:l};function u(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"shipping-insights-quickstart"},"Shipping Insights Quickstart"),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ShipperHQ account with the Shipping Insights Advanced Feature enabled"),(0,a.kt)("li",{parentName:"ul"},"An ecommerce platform or custom integration supporting the Place Order API, either:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"ShipperHQ\u2019s native Magento 2, BigCommerce, or Shopify app installed on the eCommerce platform"),(0,a.kt)("li",{parentName:"ul"},"A custom integration implementing both the ShipperHQ Rating API and the ShipperHQ Place Order API")))),(0,a.kt)("h2",{id:"authentication"},"Authentication"),(0,a.kt)("p",null,"The Shipping Insights API is accessed using a unique access token generated in a ShipperHQ account. Each access token is unique per website for multi-site ShipperHQ accounts."),(0,a.kt)("p",null,"Since Access Tokens are unique for each ShipperHQ account and website, Partners or Third Party integrations should include a mechanism for merchants to input their ShipperHQ Insights access token in the integration. Each ShipperHQ merchant will generate an access token on their ShipperHQ account in order to access the Shipping Insights API for their orders."),(0,a.kt)("h3",{id:"generating-an-access-token"},"Generating an Access Token"),(0,a.kt)("p",null,"To generate an access token in ShipperHQ:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Log into a ShipperHQ account"),(0,a.kt)("li",{parentName:"ul"},"Ensure the Shipping Insights Advanced Feature is enabled (under Advanced Features on the left-hand navbar)"),(0,a.kt)("li",{parentName:"ul"},"Click \u201cWebsites\u201d in the left-hand navbar and click the edit icon to edit the website which you wish to connect to"),(0,a.kt)("li",{parentName:"ul"},"Go to the \u201cIntegrations\u201d tab on the Website"),(0,a.kt)("li",{parentName:"ul"},"Under Shipping Insights, select Generate New Access Token")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": Generating a new Access Token invalidates any previously generated Access Tokens for that website. Access Tokens should be kept secure and not exposed on any client facing code or committed to public code repositories."),(0,a.kt)("h2",{id:"testing"},"Testing"),(0,a.kt)("p",null,"To test the Shipping Insights API you will need to already have either:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"ShipperHQ's native integration installed and enabled on Magento 2, BigCommerce, or Shopify"),(0,a.kt)("li",{parentName:"ol"},"A custom integration of the ShipperHQ Rating API and Place Order API")),(0,a.kt)("h3",{id:"enable-shipping-insights--retrieve-access-token"},"Enable Shipping Insights & Retrieve Access Token"),(0,a.kt)("p",null,"Within the ShipperHQ you wish to use enable the Shipping Insights Advanced Feature from the Advanced Features section of the dashboard. Then, retrieve the Shipping Insights Access Token from the Website on that account."),(0,a.kt)("h3",{id:"place-an-order"},"Place an Order"),(0,a.kt)("p",null,"Place an order on your eCommerce or custom platform. Note the Order Number since this will be used to retrieve Shipping Insights information."),(0,a.kt)("h3",{id:"make-a-shipping-insights-api-call"},"Make a Shipping Insights API call"),(0,a.kt)("p",null,"Call the Shipping Insights API with:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The Access Token retrieved above"),(0,a.kt)("li",{parentName:"ul"},"The Order Number of the order placed above")),(0,a.kt)("p",null,"You should receive a successful Shipping Insights API response."))}u.isMDXComponent=!0}}]);