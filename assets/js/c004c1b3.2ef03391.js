"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[6210],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return c}});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var s=a.createContext({}),d=function(t){var e=a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=d(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),m=d(r),c=n,g=m["".concat(s,".").concat(c)]||m[c]||u[c]||l;return r?a.createElement(g,i(i({ref:e},p),{},{components:r})):a.createElement(g,i({ref:e},p))}));function c(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var d=2;d<l;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4924:function(t,e,r){r.r(e),r.d(e,{assets:function(){return u},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var a=r(3117),n=r(102),l=(r(7294),r(3905)),i=r(7956),o=["components"],s={sidebar_position:50,slug:"faq",title:"FAQ",tags:["labels","api","guide","faq"]},d=void 0,p={unversionedId:"labels/faq",id:"labels/faq",title:"FAQ",description:"Is the Labels API available?",source:"@site/docs/labels/faq.md",sourceDirName:"labels",slug:"/labels/faq",permalink:"/docs/labels/faq",tags:[{label:"labels",permalink:"/docs/tags/labels"},{label:"api",permalink:"/docs/tags/api"},{label:"guide",permalink:"/docs/tags/guide"},{label:"faq",permalink:"/docs/tags/faq"}],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50,slug:"faq",title:"FAQ",tags:["labels","api","guide","faq"]},sidebar:"Label",previous:{title:"Examples",permalink:"/docs/labels/examples"}},u={},m=[{value:"Is the Labels API available?",id:"is-the-labels-api-available",level:2},{value:"What are possible error codes and messages?",id:"what-are-possible-error-codes-and-messages",level:2}],c={toc:m};function g(t){var e=t.components,r=(0,n.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"is-the-labels-api-available"},"Is the Labels API available?"),(0,l.kt)("p",null,"The ShipperHQ Labels API is currently in closed Beta. Therefore, ShipperHQ is looking for early access partners interested in participating in this program.\nPlease ",(0,l.kt)("a",{parentName:"p",href:"/contact"},"contact us")," if interested."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Pricing")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Usage of the Labels API will not be free and its use is not covered by a base ShipperHQ subscription. A cost per label will be incurred when creating labels via this API. Exact pricing will be announced in future. ",(0,l.kt)("a",{parentName:"p",href:"/contact"},"Contact us")," for more information."))),(0,l.kt)("h2",{id:"what-are-possible-error-codes-and-messages"},"What are possible error codes and messages?"),(0,l.kt)(i.ZP,{components:r.components,mdxType:"Error"}))}g.isMDXComponent=!0},7956:function(t,e,r){r.d(e,{ZP:function(){return s}});var a=r(3117),n=r(102),l=(r(7294),r(3905)),i=["components"],o={toc:[{value:"Error codes &amp; messages",id:"error-codes--messages",level:3}]};function s(t){var e=t.components,r=(0,n.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},o,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"If ShipperHQ encounters an error processing a Rate API request or if the ShipperHQ account is configured to prevent shipping in a given scenario, the Rate API will return an ",(0,l.kt)("inlineCode",{parentName:"p"},"error")," object with an ",(0,l.kt)("inlineCode",{parentName:"p"},"errorCode")," and associated ",(0,l.kt)("inlineCode",{parentName:"p"},"internalErrorMessage"),". Possible errors are described below."),(0,l.kt)("p",null,"These errors can be categorized into several types:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Auth:")," Indicate issues with the credentials used. Ensure your credentials are accurate and not expired, that your ShipperHQ account is active, and that the Environment Scope in use is correct."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"General:")," Indicate that ShipperHQ was unable to successfully process the request. If you encounter this type of error, confirm that your request is valid first and if so contact ",(0,l.kt)("a",{parentName:"li",href:"/contact"},"Dev Support"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Request:")," Indicate an issue with the format of an API request or the data it contains. Corrected by ensuring the request is formatted correctly and verifying the data in your request is accurate. For example, that the correct country or state/province/region codes are being used."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Account:")," Indicate an issue with the ShipperHQ account configuration. For example, that the Origin being used has an invalid address. Corrected by making the required adjustments to your ShipperHQ account."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Carrier:")," Indicate that ShipperHQ was unable to return results from a specific carrier. This may be intentional (e.g. error ",(0,l.kt)("inlineCode",{parentName:"li"},"304")," indicates that the carrier is configured in ShipperHQ to explicitly not be allowed for a certain country) or unintentional (e.g. errors ",(0,l.kt)("inlineCode",{parentName:"li"},"305"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"306"),", and ",(0,l.kt)("inlineCode",{parentName:"li"},"307")," indicate that the request did not include information which is required by that carrier to return results). These errors may also mean that the carrier's API was unavailable when the request was attempted.")),(0,l.kt)("h3",{id:"error-codes--messages"},"Error codes & messages"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Error Code"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Error Message"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"General"),(0,l.kt)("td",{parentName:"tr",align:null},"Request Error. There was an error processing your request.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"Auth"),(0,l.kt)("td",{parentName:"tr",align:null},"Invalid Credentials. The credentials you supplied are invalid.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"General"),(0,l.kt)("td",{parentName:"tr",align:null},"Internal server error.  We have been notified of this issue.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"General"),(0,l.kt)("td",{parentName:"tr",align:null},"Service Unavailable. The service is currently unavailable.  Please try again later.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"General"),(0,l.kt)("td",{parentName:"tr",align:null},"Access Not Allowed. This host is not permitted to access this service.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"Request"),(0,l.kt)("td",{parentName:"tr",align:null},"Malformed Request. The request was not formed correctly.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"Auth"),(0,l.kt)("td",{parentName:"tr",align:null},"Access to the webservice has been disabled for this account.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"300"),(0,l.kt)("td",{parentName:"tr",align:null},"Account"),(0,l.kt)("td",{parentName:"tr",align:null},"Invalid Origin Country. The origin country is invalid")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"301"),(0,l.kt)("td",{parentName:"tr",align:null},"Account"),(0,l.kt)("td",{parentName:"tr",align:null},"Invalid Origin State. The origin state cannot be found.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"302"),(0,l.kt)("td",{parentName:"tr",align:null},"Request"),(0,l.kt)("td",{parentName:"tr",align:null},"Invalid Destination Country. The destination country cannot be found.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"303"),(0,l.kt)("td",{parentName:"tr",align:null},"Request"),(0,l.kt)("td",{parentName:"tr",align:null},"Invalid Destination State. The destination state cannot be found.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"304"),(0,l.kt)("td",{parentName:"tr",align:null},"Carrier"),(0,l.kt)("td",{parentName:"tr",align:null},"Disallowed Destination Country. The destination country is not allowed by this carrier.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"305"),(0,l.kt)("td",{parentName:"tr",align:null},"Carrier"),(0,l.kt)("td",{parentName:"tr",align:null},"Carrier requires Country and/or State one of which is missing.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"306"),(0,l.kt)("td",{parentName:"tr",align:null},"Carrier"),(0,l.kt)("td",{parentName:"tr",align:null},"Carrier requires City which is missing.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"307"),(0,l.kt)("td",{parentName:"tr",align:null},"Carrier"),(0,l.kt)("td",{parentName:"tr",align:null},"Carrier requires zipcode which is missing.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"308"),(0,l.kt)("td",{parentName:"tr",align:null},"Request"),(0,l.kt)("td",{parentName:"tr",align:null},"Dimensions on products are required.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"309"),(0,l.kt)("td",{parentName:"tr",align:null},"Request"),(0,l.kt)("td",{parentName:"tr",align:null},"Weight is required on all products for this carrier.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"400"),(0,l.kt)("td",{parentName:"tr",align:null},"Auth"),(0,l.kt)("td",{parentName:"tr",align:null},"Invalid Environment Scope. The environmentScope is not found for this user.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"401"),(0,l.kt)("td",{parentName:"tr",align:null},"Auth"),(0,l.kt)("td",{parentName:"tr",align:null},"Website not in Environment Scope. The web site does not exists in this environment scope")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"500"),(0,l.kt)("td",{parentName:"tr",align:null},"Carrier"),(0,l.kt)("td",{parentName:"tr",align:null},"No shipping methods found for carrier. The system could not find a shipping method for the carrier.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"402"),(0,l.kt)("td",{parentName:"tr",align:null},"Account"),(0,l.kt)("td",{parentName:"tr",align:null},"No origins have been set up for this website.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"403"),(0,l.kt)("td",{parentName:"tr",align:null},"Account"),(0,l.kt)("td",{parentName:"tr",align:null},"No carriers have been setup for this origin.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"404"),(0,l.kt)("td",{parentName:"tr",align:null},"Account"),(0,l.kt)("td",{parentName:"tr",align:null},"No merged rates. Please review your carrier mappings.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"501"),(0,l.kt)("td",{parentName:"tr",align:null},"Carrier"),(0,l.kt)("td",{parentName:"tr",align:null},"Carrier Connection Error. Could not connect to carrier service for rates.  Their system is possibly down.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"502"),(0,l.kt)("td",{parentName:"tr",align:null},"Carrier"),(0,l.kt)("td",{parentName:"tr",align:null},"Max Weight Exceeded for Carrier. The maximum configured weight for this carrier has been exceeded. Change in carrier dashboard if wanting to increase.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"503"),(0,l.kt)("td",{parentName:"tr",align:null},"Carrier"),(0,l.kt)("td",{parentName:"tr",align:null},"No Pickup Locations Found. Could not find any pickup locations for this carrier.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"504"),(0,l.kt)("td",{parentName:"tr",align:null},"Account"),(0,l.kt)("td",{parentName:"tr",align:null},"Google API Key not present. Please set Google API Key in Global Settings on ShipperHQ Dashboard")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"505"),(0,l.kt)("td",{parentName:"tr",align:null},"Carrier"),(0,l.kt)("td",{parentName:"tr",align:null},"Unknown Carrier Error. No rates available")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"506"),(0,l.kt)("td",{parentName:"tr",align:null},"Carrier"),(0,l.kt)("td",{parentName:"tr",align:null},"Carrier returned error")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"507"),(0,l.kt)("td",{parentName:"tr",align:null},"Carrier"),(0,l.kt)("td",{parentName:"tr",align:null},"No Valid Dates found for Carrier")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"508"),(0,l.kt)("td",{parentName:"tr",align:null},"Carrier"),(0,l.kt)("td",{parentName:"tr",align:null},"No Valid Rates found for Carrier")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"509"),(0,l.kt)("td",{parentName:"tr",align:null},"Carrier"),(0,l.kt)("td",{parentName:"tr",align:null},"Max Packages Exceeded for Carrier. The maximum number of packages for this carrier has been exceeded.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"510"),(0,l.kt)("td",{parentName:"tr",align:null},"Account"),(0,l.kt)("td",{parentName:"tr",align:null},"Could not find carrier you requested")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"512"),(0,l.kt)("td",{parentName:"tr",align:null},"Carrier"),(0,l.kt)("td",{parentName:"tr",align:null},"Missing credentials for carrier.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"600"),(0,l.kt)("td",{parentName:"tr",align:null},"Account"),(0,l.kt)("td",{parentName:"tr",align:null},"Shipping is prevented by a user defined rule. The merchant has used Carrier Rule to prevent shipping.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"601"),(0,l.kt)("td",{parentName:"tr",align:null},"Carrier"),(0,l.kt)("td",{parentName:"tr",align:null},"Shipping rates removed due to priority carrier returning rates.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"700"),(0,l.kt)("td",{parentName:"tr",align:null},"Account"),(0,l.kt)("td",{parentName:"tr",align:null},"Missing rates for carrier groups. Unable to find rates for all of the carrier groups.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"800"),(0,l.kt)("td",{parentName:"tr",align:null},"Account"),(0,l.kt)("td",{parentName:"tr",align:null},"This account does not permit address validation")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"801"),(0,l.kt)("td",{parentName:"tr",align:null},"Account"),(0,l.kt)("td",{parentName:"tr",align:null},"Address validation is not enabled.")))))}s.isMDXComponent=!0}}]);