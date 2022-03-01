"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[8514],{3905:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return f}});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},d=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=u(t),f=i,v=p["".concat(l,".").concat(f)]||p[f]||s[f]||o;return t?n.createElement(v,c(c({ref:r},d),{},{components:t})):n.createElement(v,c({ref:r},d))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,c=new Array(o);c[0]=p;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var u=2;u<o;u++)c[u]=t[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7908:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var n=t(7462),i=t(3366),o=(t(7294),t(3905)),c=["components"],a={id:"include",title:"include"},l=void 0,u={unversionedId:"order-view-service/directives/include",id:"order-view-service/directives/include",isDocsHomePage:!1,title:"include",description:"Directs the executor to include this field or fragment only when the if argument is true.",source:"@site/docs/order-view-service/directives/include.mdx",sourceDirName:"order-view-service/directives",slug:"/order-view-service/directives/include",permalink:"/docs/order-view-service/directives/include",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/docs/order-view-service/directives/include.mdx",tags:[],version:"current",frontMatter:{id:"include",title:"include"},sidebar:"orderViewSidebar",previous:{title:"deprecated",permalink:"/docs/order-view-service/directives/deprecated"},next:{title:"skip",permalink:"/docs/order-view-service/directives/skip"}},d=[{value:"Arguments",id:"arguments",children:[{value:"<code>if</code> (Boolean)",id:"if-boolean",children:[],level:4}],level:3}],s={toc:d};function p(e){var r=e.components,t=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Directs the executor to include this field or fragment only when the ",(0,o.kt)("inlineCode",{parentName:"p"},"if")," argument is true."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"directive @include(\n  if: Boolean!\n)\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"if-boolean"},(0,o.kt)("inlineCode",{parentName:"h4"},"if")," (",(0,o.kt)("a",{parentName:"h4",href:"../../order-view-service/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,o.kt)("p",null,"Included when true."))}p.isMDXComponent=!0}}]);