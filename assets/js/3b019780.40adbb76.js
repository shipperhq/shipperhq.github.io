"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[18221],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return g}});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),v=u(t),g=i,f=v["".concat(c,".").concat(g)]||v[g]||l[g]||s;return t?n.createElement(f,a(a({ref:r},p),{},{components:t})):n.createElement(f,a({ref:r},p))}));function g(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var s=t.length,a=new Array(s);a[0]=v;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var u=2;u<s;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},6064:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return v}});var n=t(87462),i=t(63366),s=(t(67294),t(3905)),a=["components"],o={id:"retrieve-user-settings",title:"retrieveUserSettings"},c=void 0,u={unversionedId:"rate-manager-service/queries/retrieve-user-settings",id:"version-1.0.0/rate-manager-service/queries/retrieve-user-settings",isDocsHomePage:!1,title:"retrieveUserSettings",description:"Retrieves the User's settings.",source:"@site/versioned_docs/version-1.0.0/rate-manager-service/queries/retrieve-user-settings.mdx",sourceDirName:"rate-manager-service/queries",slug:"/rate-manager-service/queries/retrieve-user-settings",permalink:"/docs/rate-manager-service/queries/retrieve-user-settings",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/versioned_docs/version-1.0.0/rate-manager-service/queries/retrieve-user-settings.mdx",tags:[],version:"1.0.0",frontMatter:{id:"retrieve-user-settings",title:"retrieveUserSettings"},sidebar:"version-1.0.0/rateManagerService",previous:{title:"retrieveTrackingInfo",permalink:"/docs/rate-manager-service/queries/retrieve-tracking-info"},next:{title:"Boolean",permalink:"/docs/rate-manager-service/scalars/boolean"}},p=[{value:"Type",id:"type",children:[{value:"UserSettings",id:"usersettings",children:[],level:4}],level:3}],l={toc:p};function v(e){var r=e.components,t=(0,i.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Retrieves the User's settings.\n(Requires use of the x-shipperhq-secret-token or x-shipperhq-public-token headers.)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"retrieveUserSettings: UserSettings\n\n")),(0,s.kt)("h3",{id:"type"},"Type"),(0,s.kt)("h4",{id:"usersettings"},(0,s.kt)("a",{parentName:"h4",href:"../../rate-manager-service/objects/user-settings"},(0,s.kt)("inlineCode",{parentName:"a"},"UserSettings"))),(0,s.kt)("p",null,"The settings for the current user"))}v.isMDXComponent=!0}}]);