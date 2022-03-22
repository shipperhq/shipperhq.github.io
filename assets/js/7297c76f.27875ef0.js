"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[1327],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),v=c(r),d=i,b=v["".concat(s,".").concat(d)]||v[d]||u[d]||a;return r?n.createElement(b,o(o({ref:t},p),{},{components:r})):n.createElement(b,o({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=v;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},3433:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=r(3117),i=r(102),a=(r(7294),r(3905)),o=["components"],l={sidebar_position:1,slug:"overview",title:"Overview",tags:["labels","api","guide","overview"]},s=void 0,c={unversionedId:"labels/overview",id:"labels/overview",title:"Overview",description:"The Labels API enables you to produce shipping labels for shipments directly within your application.",source:"@site/docs/labels/overview.md",sourceDirName:"labels",slug:"/labels/overview",permalink:"/docs/labels/overview",tags:[{label:"labels",permalink:"/docs/tags/labels"},{label:"api",permalink:"/docs/tags/api"},{label:"guide",permalink:"/docs/tags/guide"},{label:"overview",permalink:"/docs/tags/overview"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"overview",title:"Overview",tags:["labels","api","guide","overview"]},sidebar:"Label",next:{title:"How Labels Work",permalink:"/docs/labels/how-labels-work"}},p={},u=[{value:"High level overview",id:"high-level-overview",level:2},{value:"Early Access Program",id:"early-access-program",level:2}],v={toc:u};function d(e){var t=e.components,l=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},v,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Labels API enables you to produce shipping labels for shipments directly within your application."),(0,a.kt)("h2",{id:"high-level-overview"},"High level overview"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"High Level Workflow",src:r(6570).Z,width:"3333",height:"1875"})),(0,a.kt)("h2",{id:"early-access-program"},"Early Access Program"),(0,a.kt)("p",null,"The ShipperHQ Labels API is currently in closed Beta. Therefore, ShipperHQ is looking for early access partners interested in participating in this program.\nPlease ",(0,a.kt)("a",{parentName:"p",href:"/contact"},"contact us")," if interested."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Usage of the Labels API will not be free and its use is not covered by a base ShipperHQ subscription. A cost per label will be incurred when creating labels via this API. Exact pricing will be announced in future."))))}d.isMDXComponent=!0},6570:function(e,t,r){t.Z=r.p+"assets/images/complete-rate-insight-label-process-565842354bfcee9b9d7350dcfbe0105b.jpg"}}]);