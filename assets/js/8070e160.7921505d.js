"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[2651],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),h=l(r),d=a,f=h["".concat(p,".").concat(d)]||h[d]||c[d]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},2257:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return c}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),i=["components"],u={},p="Quickstart",l={unversionedId:"quickstart",id:"quickstart",title:"Quickstart",description:"Introduction",source:"@site/docs/quickstart.md",sourceDirName:".",slug:"/quickstart",permalink:"/docs/quickstart",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/quickstart.md",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"GraphQL",id:"graphql",level:2},{value:"GraphQL Benefits",id:"graphql-benefits",level:3},{value:"API Playground",id:"api-playground",level:2},{value:"Test with the API Playground",id:"test-with-the-api-playground",level:3},{value:"ShipperHQ Test Accounts",id:"shipperhq-test-accounts",level:2}],h={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quickstart"},"Quickstart"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"The goal of the ShipperHQ SDK is to give you the information you need to make use of the ShipperHQ APIs. Each API has its own overview, usage guide, quickstart guide, and FAQ along with detailed API documentation. On these you'll find detailed information related to each specific API. Below you'll find general information that applies to all of our APIs."),(0,o.kt)("h2",{id:"graphql"},"GraphQL"),(0,o.kt)("p",null,"Our APIs are implemented in GraphQL, an API query language. Compared to other API approaches like SOAP or standard REST, GraphQL makes it easier to request exactly the information you need from our API. This avoids the clutter and extra weight of unnecessary fields in requests and responses."),(0,o.kt)("p",null,"If you're unfamiliar with GraphQL, Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://graphql.org/learn/"},"Introduction to GraphQL")," article from ",(0,o.kt)("a",{parentName:"p",href:"https://graphql.org"},"GraphQL.org")," for more information."),(0,o.kt)("h3",{id:"graphql-benefits"},"GraphQL Benefits"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Flexibility:")," GraphQL gives users the ability to access the details used to obtain the shipping rate and query what is most important to you and your business. As such, you can query 5 pieces of information or every possible field as you see fit."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Customization:")," GraphQL gives users the ability to build their own integration into ShipperHQ to rate shipments, retrieve shipment details, produce labels, and more.")),(0,o.kt)("h2",{id:"api-playground"},"API Playground"),(0,o.kt)("p",null,"The API Playground gives you an easy way to test different ShipperHQ APIs without having to write any code. You'll need the Endpoint URL for the API you're looking to experiment with as well as the authoriziation credentials for that API. See each API's Quickstart page for the Endpoint URL and required credentials for that API."),(0,o.kt)("h3",{id:"test-with-the-api-playground"},"Test with the API Playground"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Navigate to the ShipperHQ GraphQL playground"),(0,o.kt)("li",{parentName:"ul"},"In a new GraphQL playground tab, enter the appropriate Endpoint URL for the API you're looking to use into the URL bar"),(0,o.kt)("li",{parentName:"ul"},"Click the Docs button"),(0,o.kt)("li",{parentName:"ul"},"Click the Reload Docs icon"),(0,o.kt)("li",{parentName:"ul"},"Click the Query link to view a list of available queries and the arguments and fields you can include in your request")),(0,o.kt)("h2",{id:"shipperhq-test-accounts"},"ShipperHQ Test Accounts"),(0,o.kt)("p",null,"In order to use ShipperHQ, you'll need to have a ShipperHQ account. Some functionality may also require that your account is on a certain ShipperHQ plan. You can create a ShipperHQ account at ",(0,o.kt)("a",{parentName:"p",href:"https://shipperhq.com"},"ShipperHQ.com")," which will start with a 15-day free trial."),(0,o.kt)("p",null,"For ShipperHQ partners, we can convert your account to a sandbox account if you contact your ShipperHQ partner manager directly or ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3000/contact"},"contact our support team")," with the login email or website URL of your ShipperHQ account. Note that partner sandbox accounts can not be converted to production accounts. If you're not currently a partner and are interested in joining, submit a request on our ",(0,o.kt)("a",{parentName:"p",href:"https://shipperhq.com/partnerprogram"},"Partner Program")," page."))}d.isMDXComponent=!0}}]);