"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[73799],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),g=s(n),m=i,u=g["".concat(l,".").concat(m)]||g[m]||d[m]||a;return n?r.createElement(u,o(o({ref:t},p),{},{components:n})):r.createElement(u,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},46164:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return g}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],c={id:"recipient-input",title:"RecipientInput"},l=void 0,s={unversionedId:"rate-manager-service/inputs/recipient-input",id:"version-1.0.0/rate-manager-service/inputs/recipient-input",isDocsHomePage:!1,title:"RecipientInput",description:"No description",source:"@site/versioned_docs/version-1.0.0/rate-manager-service/inputs/recipient-input.mdx",sourceDirName:"rate-manager-service/inputs",slug:"/rate-manager-service/inputs/recipient-input",permalink:"/docs/1.0.0/rate-manager-service/inputs/recipient-input",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/versioned_docs/version-1.0.0/rate-manager-service/inputs/recipient-input.mdx",tags:[],version:"1.0.0",frontMatter:{id:"recipient-input",title:"RecipientInput"},sidebar:"version-1.0.0/rateManagerService",previous:{title:"RatingCarrierWhereInput",permalink:"/docs/1.0.0/rate-manager-service/inputs/rating-carrier-where-input"},next:{title:"RMSAttribute",permalink:"/docs/1.0.0/rate-manager-service/inputs/rmsattribute"}},p=[{value:"Fields",id:"fields",children:[{value:"<code>selectedOptions</code> (SelectedOptionInput)",id:"selectedoptions-selectedoptioninput",children:[],level:4},{value:"<code>familyName</code> (String)",id:"familyname-string",children:[],level:4},{value:"<code>locationIdType</code> (String)",id:"locationidtype-string",children:[],level:4},{value:"<code>destinationType</code> (String)",id:"destinationtype-string",children:[],level:4},{value:"<code>zipcode</code> (String)",id:"zipcode-string",children:[],level:4},{value:"<code>city</code> (String)",id:"city-string",children:[],level:4},{value:"<code>telNo</code> (String)",id:"telno-string",children:[],level:4},{value:"<code>accessorials</code> (SelectedOptionInput)",id:"accessorials-selectedoptioninput",children:[],level:4},{value:"<code>locationId</code> (String)",id:"locationid-string",children:[],level:4},{value:"<code>country</code> (String)",id:"country-string",children:[],level:4},{value:"<code>region</code> (String)",id:"region-string",children:[],level:4},{value:"<code>givenName</code> (String)",id:"givenname-string",children:[],level:4},{value:"<code>locationType</code> (String)",id:"locationtype-string",children:[],level:4},{value:"<code>street2</code> (String)",id:"street2-string",children:[],level:4},{value:"<code>street</code> (String)",id:"street-string",children:[],level:4},{value:"<code>companyName</code> (String)",id:"companyname-string",children:[],level:4},{value:"<code>email</code> (String)",id:"email-string",children:[],level:4}],level:3}],d={toc:p};function g(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type RecipientInput {\n  selectedOptions: [SelectedOptionInput!]\n  familyName: String\n  locationIdType: String\n  destinationType: String\n  zipcode: String\n  city: String\n  telNo: String\n  accessorials: [SelectedOptionInput!]\n  locationId: String\n  country: String\n  region: String\n  givenName: String\n  locationType: String\n  street2: String\n  street: String\n  companyName: String\n  email: String\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"selectedoptions-selectedoptioninput"},(0,a.kt)("inlineCode",{parentName:"h4"},"selectedOptions")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/inputs/selected-option-input"},(0,a.kt)("inlineCode",{parentName:"a"},"SelectedOptionInput")),")"),(0,a.kt)("h4",{id:"familyname-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"familyName")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"locationidtype-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"locationIdType")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"destinationtype-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"destinationType")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"zipcode-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"zipcode")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"city-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"city")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"telno-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"telNo")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"accessorials-selectedoptioninput"},(0,a.kt)("inlineCode",{parentName:"h4"},"accessorials")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/inputs/selected-option-input"},(0,a.kt)("inlineCode",{parentName:"a"},"SelectedOptionInput")),")"),(0,a.kt)("h4",{id:"locationid-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"locationId")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"country-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"country")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"region-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"region")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"givenname-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"givenName")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"locationtype-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"locationType")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"street2-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"street2")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"street-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"street")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"companyname-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"companyName")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"email-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"email")," (",(0,a.kt)("a",{parentName:"h4",href:"../../rate-manager-service/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"))}g.isMDXComponent=!0}}]);