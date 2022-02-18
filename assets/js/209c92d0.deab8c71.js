"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[54734],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return g}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(t),g=i,u=m["".concat(l,".").concat(g)]||m[g]||d[g]||a;return t?r.createElement(u,o(o({ref:n},p),{},{components:t})):r.createElement(u,o({ref:n},p))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},48946:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),o=["components"],c={id:"sender-input",title:"SenderInput"},l=void 0,s={unversionedId:"rate-manager-service/inputs/sender-input",id:"rate-manager-service/inputs/sender-input",isDocsHomePage:!1,title:"SenderInput",description:"No description",source:"@site/docs/rate-manager-service/inputs/sender-input.mdx",sourceDirName:"rate-manager-service/inputs",slug:"/rate-manager-service/inputs/sender-input",permalink:"/docs/rate-manager-service/inputs/sender-input",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/docs/rate-manager-service/inputs/sender-input.mdx",tags:[],version:"current",frontMatter:{id:"sender-input",title:"SenderInput"},sidebar:"rateManagerService",previous:{title:"SelectedShippingRatesWhereInput",permalink:"/docs/rate-manager-service/inputs/selected-shipping-rates-where-input"},next:{title:"ShipmentDetailWhereInput",permalink:"/docs/rate-manager-service/inputs/shipment-detail-where-input"}},p=[{value:"Fields",id:"fields",children:[{value:"<code>familyName</code> (String)",id:"familyname-string",children:[],level:4},{value:"<code>givenName</code> (String)",id:"givenname-string",children:[],level:4},{value:"<code>zipcode</code> (String)",id:"zipcode-string",children:[],level:4},{value:"<code>city</code> (String)",id:"city-string",children:[],level:4},{value:"<code>telNo</code> (String)",id:"telno-string",children:[],level:4},{value:"<code>country</code> (String)",id:"country-string",children:[],level:4},{value:"<code>region</code> (String)",id:"region-string",children:[],level:4},{value:"<code>street2</code> (String)",id:"street2-string",children:[],level:4},{value:"<code>street</code> (String)",id:"street-string",children:[],level:4},{value:"<code>companyName</code> (String)",id:"companyname-string",children:[],level:4},{value:"<code>email</code> (String)",id:"email-string",children:[],level:4}],level:3}],d={toc:p};function m(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type SenderInput {\n  familyName: String\n  givenName: String\n  zipcode: String\n  city: String\n  telNo: String\n  country: String\n  region: String\n  street2: String\n  street: String\n  companyName: String\n  email: String\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"familyname-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"familyName")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"givenname-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"givenName")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"zipcode-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"zipcode")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"city-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"city")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"telno-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"telNo")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"country-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"country")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"region-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"region")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"street2-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"street2")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"street-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"street")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"companyname-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"companyName")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"email-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"email")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"))}m.isMDXComponent=!0}}]);