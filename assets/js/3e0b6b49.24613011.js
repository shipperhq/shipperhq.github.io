"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[57716],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},b=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),b=u(t),f=l,d=b["".concat(o,".").concat(f)]||b[f]||s[f]||a;return t?r.createElement(d,c(c({ref:n},p),{},{components:t})):r.createElement(d,c({ref:n},p))}));function f(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,c=new Array(a);c[0]=b;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,c[1]=i;for(var u=2;u<a;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},92692:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return p},default:function(){return b}});var r=t(87462),l=t(63366),a=(t(67294),t(3905)),c=["components"],i={id:"cancel-label",title:"cancelLabel"},o=void 0,u={unversionedId:"label-service/queries/cancel-label",id:"label-service/queries/cancel-label",isDocsHomePage:!1,title:"cancelLabel",description:"No description",source:"@site/docs/label-service/queries/cancel-label.mdx",sourceDirName:"label-service/queries",slug:"/label-service/queries/cancel-label",permalink:"/docs/label-service/queries/cancel-label",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/docs/label-service/queries/cancel-label.mdx",tags:[],version:"current",frontMatter:{id:"cancel-label",title:"cancelLabel"},sidebar:"labelService",previous:{title:"TrackingInfoInput",permalink:"/docs/label-service/inputs/tracking-info-input"},next:{title:"createLabel",permalink:"/docs/label-service/queries/create-label"}},p=[{value:"Arguments",id:"arguments",children:[{value:"<code>cancelLabelInfo</code> (CancelLabelInfoInput)",id:"cancellabelinfo-cancellabelinfoinput",children:[],level:4}],level:3},{value:"Type",id:"type",children:[{value:"CancelLabelOutput",id:"cancellabeloutput",children:[],level:4}],level:3}],s={toc:p};function b(e){var n=e.components,t=(0,l.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"cancelLabel(\n  cancelLabelInfo: CancelLabelInfoInput\n): CancelLabelOutput\n\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"cancellabelinfo-cancellabelinfoinput"},(0,a.kt)("inlineCode",{parentName:"h4"},"cancelLabelInfo")," (",(0,a.kt)("a",{parentName:"h4",href:"../../label-service/inputs/cancel-label-info-input"},(0,a.kt)("inlineCode",{parentName:"a"},"CancelLabelInfoInput")),")"),(0,a.kt)("p",null,"cancellation of shipment"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"cancellabeloutput"},(0,a.kt)("a",{parentName:"h4",href:"../../label-service/objects/cancel-label-output"},(0,a.kt)("inlineCode",{parentName:"a"},"CancelLabelOutput"))))}b.isMDXComponent=!0}}]);