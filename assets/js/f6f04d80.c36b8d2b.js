"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[9165,5277],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return c}});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var s=a.createContext({}),d=function(t){var e=a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},p=function(t){var e=d(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),m=d(r),c=n,g=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return r?a.createElement(g,l(l({ref:e},p),{},{components:r})):a.createElement(g,l({ref:e},p))}));function c(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:n,l[1]=o;for(var d=2;d<i;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7985:function(t,e,r){r.r(e),r.d(e,{assets:function(){return u},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var a=r(3117),n=r(102),i=(r(7294),r(3905)),l=r(8057),o=["components"],s={sidebar_position:4,slug:"faq",title:"Insights FAQ",authors:[],tags:["insights","api","faq"]},d=void 0,p={unversionedId:"insight/faq",id:"insight/faq",title:"Insights FAQ",description:"Is the data for past orders available via the Insights API?",source:"@site/docs/insight/faq.md",sourceDirName:"insight",slug:"/insight/faq",permalink:"/docs/insight/faq",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/insight/faq.md",tags:[{label:"insights",permalink:"/docs/tags/insights"},{label:"api",permalink:"/docs/tags/api"},{label:"faq",permalink:"/docs/tags/faq"}],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,slug:"faq",title:"Insights FAQ",authors:[],tags:["insights","api","faq"]},sidebar:"ShippingInsights",previous:{title:"Insights API Quickstart",permalink:"/docs/insight/quickstart"},next:{title:"PlaceOrder Mutation",permalink:"/docs/insight/place-order"}},u={},m=[{value:"Is the data for past orders available via the Insights API?",id:"is-the-data-for-past-orders-available-via-the-insights-api",level:2},{value:"How do I know what value to populate for <code>orderNumber</code>?",id:"how-do-i-know-what-value-to-populate-for-ordernumber",level:2},{value:"Is it possible to reuse Order Numbers?",id:"is-it-possible-to-reuse-order-numbers",level:2},{value:"Is the Origin address available?",id:"is-the-origin-address-available",level:2},{value:"Is Freight Class available via Insight?",id:"is-freight-class-available-via-insight",level:2},{value:"Error codes &amp; messages",id:"error-codes--messages",level:2}],c={toc:m};function g(t){var e=t.components,r=(0,n.Z)(t,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"is-the-data-for-past-orders-available-via-the-insights-api"},"Is the data for past orders available via the Insights API?"),(0,i.kt)("p",null,"No, ShipperHQ does not store shipment data until the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.shipperhq.com/shipping-insights-configuration/"},"Shipping Insights")," Advanced Feature is enabled. To enable it you will have to accept the term of services related to the storage of the Insights information by ShipperHQ."),(0,i.kt)("p",null,"Orders placed before this feature is active will not be available via Insights API. Additionally, if the Shipping Insights feature is disabled, no shipment information will be stored until it is reenabled."),(0,i.kt)("h2",{id:"how-do-i-know-what-value-to-populate-for-ordernumber"},"How do I know what value to populate for ",(0,i.kt)("inlineCode",{parentName:"h2"},"orderNumber"),"?"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"orderNumber")," field is used to look up a unique order with the Insights API. If you are using the native ShipperHQ apps/plugins/extensions for supported eCommerce platforms (",(0,i.kt)("a",{parentName:"p",href:"https://shipperhq.com/pricing"},"complete list here"),"), the ",(0,i.kt)("inlineCode",{parentName:"p"},"orderNumber")," will be the Order Number set by your eCommerce platform. If you are instead using the ",(0,i.kt)("a",{parentName:"p",href:"place-order"},(0,i.kt)("inlineCode",{parentName:"a"},"PlaceOrder"))," mutation of the ",(0,i.kt)("a",{parentName:"p",href:"../label/overview/"},"Labels API"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"orderNumber")," will be the value you set as the Order Number in your ",(0,i.kt)("inlineCode",{parentName:"p"},"PlaceOrder")," call."),(0,i.kt)("h2",{id:"is-it-possible-to-reuse-order-numbers"},"Is it possible to reuse Order Numbers?"),(0,i.kt)("p",null,"Each Order Number (used in the ",(0,i.kt)("inlineCode",{parentName:"p"},"orderNumber")," field) must be unique to a specific ",(0,i.kt)("a",{parentName:"p",href:"https://docs.shipperhq.com/adding-websites-in-shipperhq/"},"Website")," configured in ShipperHQ. This means that it is possible to reuse an Order Number only on separate Websites (whether on the same ShipperHQ account or on separate accounts). For example, if you have a dev site connected to the same ShipperHQ account as your production site, you would need to ensure you have separate Websites configured in ShipperHQ for each to avoid duplicate entries for the same Order Number."),(0,i.kt)("h2",{id:"is-the-origin-address-available"},"Is the Origin address available?"),(0,i.kt)("p",null,"Not currently. We return the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.shipperhq.com/origin-configuration/"},"Origin")," name (which is a unique identifier) but do not return the full ship-from address for that Origin. The ship-from address used will match the address configured on the Origin at the time the shipping quote was requested."),(0,i.kt)("h2",{id:"is-freight-class-available-via-insight"},"Is Freight Class available via Insight?"),(0,i.kt)("p",null,"Not currently. ",(0,i.kt)("a",{parentName:"p",href:"https://docs.shipperhq.com/ltl-freight-carrier-configuration/#Freight_Classes"},"Freight Class")," will be added in an upcoming version of the Insight API."),(0,i.kt)("h2",{id:"error-codes--messages"},"Error codes & messages"),(0,i.kt)(l.default,{components:r.components,mdxType:"Error"}))}g.isMDXComponent=!0},8057:function(t,e,r){r.r(e),r.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u}});var a=r(3117),n=r(102),i=(r(7294),r(3905)),l=["components"],o={},s=void 0,d={unversionedId:"transclusion/error",id:"transclusion/error",title:"error",description:"[//] all the FAQ of all APIs contain this file)",source:"@site/docs/transclusion/error.md",sourceDirName:"transclusion",slug:"/transclusion/error",permalink:"/docs/transclusion/error",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/transclusion/error.md",tags:[],version:"current",frontMatter:{}},p={},u=[],m={toc:u};function c(t){var e=t.components,r=(0,n.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Error Code"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Error Message"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"General"),(0,i.kt)("td",{parentName:"tr",align:null},"Request Error. There was an error processing your request.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3"),(0,i.kt)("td",{parentName:"tr",align:null},"Auth"),(0,i.kt)("td",{parentName:"tr",align:null},"Invalid Credentials. The credentials you supplied are invalid.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"4"),(0,i.kt)("td",{parentName:"tr",align:null},"General"),(0,i.kt)("td",{parentName:"tr",align:null},"Internal server error.  We have been notified of this issue.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"5"),(0,i.kt)("td",{parentName:"tr",align:null},"General"),(0,i.kt)("td",{parentName:"tr",align:null},"Service Unavailable. The service is currently unavailable.  Please try again later.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"6"),(0,i.kt)("td",{parentName:"tr",align:null},"General"),(0,i.kt)("td",{parentName:"tr",align:null},"Access Not Allowed. This host is not permitted to access this service.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"7"),(0,i.kt)("td",{parentName:"tr",align:null},"Request"),(0,i.kt)("td",{parentName:"tr",align:null},"Malformed Request. The request was not formed correctly.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"8"),(0,i.kt)("td",{parentName:"tr",align:null},"Auth"),(0,i.kt)("td",{parentName:"tr",align:null},"Access to the webservice has been disabled for this account.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"300"),(0,i.kt)("td",{parentName:"tr",align:null},"Account"),(0,i.kt)("td",{parentName:"tr",align:null},"Invalid Origin Country. The origin country is invalid")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"301"),(0,i.kt)("td",{parentName:"tr",align:null},"Account"),(0,i.kt)("td",{parentName:"tr",align:null},"Invalid Origin State. The origin state cannot be found.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"302"),(0,i.kt)("td",{parentName:"tr",align:null},"Request"),(0,i.kt)("td",{parentName:"tr",align:null},"Invalid Destination Country. The destination country cannot be found.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"303"),(0,i.kt)("td",{parentName:"tr",align:null},"Request"),(0,i.kt)("td",{parentName:"tr",align:null},"Invalid Destination State. The destination state cannot be found.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"304"),(0,i.kt)("td",{parentName:"tr",align:null},"Carrier"),(0,i.kt)("td",{parentName:"tr",align:null},"Disallowed Destination Country. The destination country is not allowed by this carrier.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"305"),(0,i.kt)("td",{parentName:"tr",align:null},"Carrier"),(0,i.kt)("td",{parentName:"tr",align:null},"Carrier requires Country and/or State one of which is missing.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"306"),(0,i.kt)("td",{parentName:"tr",align:null},"Carrier"),(0,i.kt)("td",{parentName:"tr",align:null},"Carrier requires City which is missing.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"307"),(0,i.kt)("td",{parentName:"tr",align:null},"Carrier"),(0,i.kt)("td",{parentName:"tr",align:null},"Carrier requires zipcode which is missing.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"308"),(0,i.kt)("td",{parentName:"tr",align:null},"Request"),(0,i.kt)("td",{parentName:"tr",align:null},"Dimensions on products are required.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"309"),(0,i.kt)("td",{parentName:"tr",align:null},"Request"),(0,i.kt)("td",{parentName:"tr",align:null},"Weight is required on all products for this carrier.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"400"),(0,i.kt)("td",{parentName:"tr",align:null},"Auth"),(0,i.kt)("td",{parentName:"tr",align:null},"Invalid Environment Scope. The environmentScope is not found for this user.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"401"),(0,i.kt)("td",{parentName:"tr",align:null},"Auth"),(0,i.kt)("td",{parentName:"tr",align:null},"Website not in Environment Scope. The web site does not exists in this environment scope")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"500"),(0,i.kt)("td",{parentName:"tr",align:null},"Carrier"),(0,i.kt)("td",{parentName:"tr",align:null},"No shipping methods found for carrier. The system could not find a shipping method for the carrier.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"402"),(0,i.kt)("td",{parentName:"tr",align:null},"Account"),(0,i.kt)("td",{parentName:"tr",align:null},"No origins have been set up for this website.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"403"),(0,i.kt)("td",{parentName:"tr",align:null},"Account"),(0,i.kt)("td",{parentName:"tr",align:null},"No carriers have been setup for this origin.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"404"),(0,i.kt)("td",{parentName:"tr",align:null},"Account"),(0,i.kt)("td",{parentName:"tr",align:null},"No merged rates. Please review your carrier mappings.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"501"),(0,i.kt)("td",{parentName:"tr",align:null},"Carrier"),(0,i.kt)("td",{parentName:"tr",align:null},"Carrier Connection Error. Could not connect to carrier service for rates.  Their system is possibly down.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"502"),(0,i.kt)("td",{parentName:"tr",align:null},"Carrier"),(0,i.kt)("td",{parentName:"tr",align:null},"Max Weight Exceeded for Carrier. The maximum configured weight for this carrier has been exceeded. Change in carrier dashboard if wanting to increase.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"503"),(0,i.kt)("td",{parentName:"tr",align:null},"Carrier"),(0,i.kt)("td",{parentName:"tr",align:null},"No Pickup Locations Found. Could not find any pickup locations for this carrier.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"504"),(0,i.kt)("td",{parentName:"tr",align:null},"Account"),(0,i.kt)("td",{parentName:"tr",align:null},"Google API Key not present. Please set Google API Key in Global Settings on ShipperHQ Dashboard")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"505"),(0,i.kt)("td",{parentName:"tr",align:null},"Carrier"),(0,i.kt)("td",{parentName:"tr",align:null},"Unknown Carrier Error. No rates available")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"506"),(0,i.kt)("td",{parentName:"tr",align:null},"Carrier"),(0,i.kt)("td",{parentName:"tr",align:null},"Carrier returned error")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"507"),(0,i.kt)("td",{parentName:"tr",align:null},"Carrier"),(0,i.kt)("td",{parentName:"tr",align:null},"No Valid Dates found for Carrier")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"508"),(0,i.kt)("td",{parentName:"tr",align:null},"Carrier"),(0,i.kt)("td",{parentName:"tr",align:null},"No Valid Rates found for Carrier")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"509"),(0,i.kt)("td",{parentName:"tr",align:null},"Carrier"),(0,i.kt)("td",{parentName:"tr",align:null},"Max Packages Exceeded for Carrier. The maximum number of packages for this carrier has been exceeded.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"510"),(0,i.kt)("td",{parentName:"tr",align:null},"Account"),(0,i.kt)("td",{parentName:"tr",align:null},"Could not find carrier you requested")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"512"),(0,i.kt)("td",{parentName:"tr",align:null},"Carrier"),(0,i.kt)("td",{parentName:"tr",align:null},"Missing credentials for carrier.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"600"),(0,i.kt)("td",{parentName:"tr",align:null},"Account"),(0,i.kt)("td",{parentName:"tr",align:null},"Shipping is prevented by a user defined rule. The merchant has used Carrier Rule to prevent shipping.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"601"),(0,i.kt)("td",{parentName:"tr",align:null},"Carrier"),(0,i.kt)("td",{parentName:"tr",align:null},"Shipping rates removed due to priority carrier returning rates.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"700"),(0,i.kt)("td",{parentName:"tr",align:null},"Account"),(0,i.kt)("td",{parentName:"tr",align:null},"Missing rates for carrier groups. Unable to find rates for all of the carrier groups.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"800"),(0,i.kt)("td",{parentName:"tr",align:null},"Account"),(0,i.kt)("td",{parentName:"tr",align:null},"This account does not permit address validation")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"801"),(0,i.kt)("td",{parentName:"tr",align:null},"Account"),(0,i.kt)("td",{parentName:"tr",align:null},"Address validation is not enabled.")))))}c.isMDXComponent=!0}}]);