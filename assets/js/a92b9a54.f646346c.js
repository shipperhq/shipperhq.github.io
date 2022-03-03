"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[492],{3905:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return c}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var d=n.createContext({}),p=function(t){var e=n.useContext(d),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},u=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,d=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=p(r),c=a,k=m["".concat(d,".").concat(c)]||m[c]||s[c]||i;return r?n.createElement(k,l(l({ref:e},u),{},{components:r})):n.createElement(k,l({ref:e},u))}));function c(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4451:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),l=["components"],o={sidebar_position:10},d="Rate FAQ",p={unversionedId:"rate/faq",id:"rate/faq",isDocsHomePage:!1,title:"Rate FAQ",description:"Does the rating API return duties (DDU/DDP) information?",source:"@site/docs/rate/faq.md",sourceDirName:"rate",slug:"/rate/faq",permalink:"/docs/rate/faq",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/docs/rate/faq.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"Rating",previous:{title:"How Rates Work",permalink:"/docs/rate/how-rates-work"},next:{title:"Quickstart",permalink:"/docs/rate/static-rating-API"}},u=[{value:"Does the rating API return duties (DDU/DDP) information?",id:"does-the-rating-api-return-duties-dduddp-information",children:[],level:2},{value:"What are the error codes and their definition?",id:"what-are-the-error-codes-and-their-definition",children:[],level:2}],s={toc:u};function m(t){var e=t.components,r=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rate-faq"},"Rate FAQ"),(0,i.kt)("h2",{id:"does-the-rating-api-return-duties-dduddp-information"},"Does the rating API return duties (DDU/DDP) information?"),(0,i.kt)("p",null,"Not at this time. "),(0,i.kt)("h2",{id:"what-are-the-error-codes-and-their-definition"},"What are the error codes and their definition?"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"error number"),(0,i.kt)("th",{parentName:"tr",align:null},"error_message"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"Request Error. There was an error processing your request.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3"),(0,i.kt)("td",{parentName:"tr",align:null},"Invalid Credentials. The credentials you supplied are invalid.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"4"),(0,i.kt)("td",{parentName:"tr",align:null},"Internal server error.  We have been notified of this issue.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"5"),(0,i.kt)("td",{parentName:"tr",align:null},"Service Unavailable. The service is currently unavailable.  Please try again later.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"6"),(0,i.kt)("td",{parentName:"tr",align:null},"Access Not Allowed. This host is not permitted to access this service.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"7"),(0,i.kt)("td",{parentName:"tr",align:null},"Malformed Request. The request was not formed correctly.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"8"),(0,i.kt)("td",{parentName:"tr",align:null},"Access to the webservice has been disabled for this account.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"300"),(0,i.kt)("td",{parentName:"tr",align:null},"Invalid Origin Country. The origin country is invalid")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"301"),(0,i.kt)("td",{parentName:"tr",align:null},"Invalid Origin State. The origin state cannot be found.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"302"),(0,i.kt)("td",{parentName:"tr",align:null},"Invalid Destination Country. The destination country cannot be found.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"303"),(0,i.kt)("td",{parentName:"tr",align:null},"Invalid Destination State. The destination state cannot be found.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"304"),(0,i.kt)("td",{parentName:"tr",align:null},"Disallowed Destination Country. The destination country is not allowed by this carrier.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"305"),(0,i.kt)("td",{parentName:"tr",align:null},"Carrier requires Country and/or State one of which is missing.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"306"),(0,i.kt)("td",{parentName:"tr",align:null},"Carrier requires City which is missing.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"307"),(0,i.kt)("td",{parentName:"tr",align:null},"Carrier requires zipcode which is missing.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"308"),(0,i.kt)("td",{parentName:"tr",align:null},"Dimensions on products are required.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"309"),(0,i.kt)("td",{parentName:"tr",align:null},"Weight is required on all products for this carrier.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"400"),(0,i.kt)("td",{parentName:"tr",align:null},"Invalid Environment Scope. The environmentScope is not found for this user.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"401"),(0,i.kt)("td",{parentName:"tr",align:null},"Website not in Environment Scope. The web site does not exists in this environment scope")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"500"),(0,i.kt)("td",{parentName:"tr",align:null},"No shipping methods found for carrier. The system could not find a shipping method for the carrier.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"402"),(0,i.kt)("td",{parentName:"tr",align:null},"No origins have been set up for this website.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"403"),(0,i.kt)("td",{parentName:"tr",align:null},"No carriers have been setup for this origin.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"404"),(0,i.kt)("td",{parentName:"tr",align:null},"No merged rates. Please review your carrier mappings.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"501"),(0,i.kt)("td",{parentName:"tr",align:null},"Carrier Connection Error. Could not connect to carrier service for rates.  Their system is possibly down.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"502"),(0,i.kt)("td",{parentName:"tr",align:null},"Max Weight Exceeded for Carrier. The maximum configured weight for this carrier has been exceeded. Change in carrier dashboard if wanting to increase.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"503"),(0,i.kt)("td",{parentName:"tr",align:null},"No Pickup Locations Found. Could not find any pickup locations for this carrier.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"504"),(0,i.kt)("td",{parentName:"tr",align:null},"Google API Key not present. Please set Google API Key in Global Settings on ShipperHQ Dashboard")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"505"),(0,i.kt)("td",{parentName:"tr",align:null},"Unknown Carrier Error. No rates available")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"506"),(0,i.kt)("td",{parentName:"tr",align:null},"Carrier returned error")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"507"),(0,i.kt)("td",{parentName:"tr",align:null},"No Valid Dates found for Carrier")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"508"),(0,i.kt)("td",{parentName:"tr",align:null},"No Valid Rates found for Carrier")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"509"),(0,i.kt)("td",{parentName:"tr",align:null},"Max Packages Exceeded for Carrier. The maximum number of packages for this carrier has been exceeded.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"510"),(0,i.kt)("td",{parentName:"tr",align:null},"Could not find carrier you requested")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"512"),(0,i.kt)("td",{parentName:"tr",align:null},"Missing credentials for carrier.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"600"),(0,i.kt)("td",{parentName:"tr",align:null},"Shipping is prevented by a user defined rule. The merchant has used Carrier Rule to prevent shipping.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"601"),(0,i.kt)("td",{parentName:"tr",align:null},"Shipping .")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"700"),(0,i.kt)("td",{parentName:"tr",align:null},"Missing rates for carrier groups. Unable to find rates for all of the carrier groups.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"800"),(0,i.kt)("td",{parentName:"tr",align:null},"This account does not permit address validation")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"801"),(0,i.kt)("td",{parentName:"tr",align:null},"Address validation is not enabled.")))),(0,i.kt)("p",null,"~"))}m.isMDXComponent=!0}}]);