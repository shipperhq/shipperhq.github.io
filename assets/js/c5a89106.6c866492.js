"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[93195],{3905:function(e,n,r){r.d(n,{Zo:function(){return l},kt:function(){return m}});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=t.createContext({}),u=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},l=function(e){var n=u(e.components);return t.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=i,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?t.createElement(f,a(a({ref:n},l),{},{components:r})):t.createElement(f,a({ref:n},l))}));function m(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=r[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},48953:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var t=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],s={sidebar_position:7},c="Versioning",u={unversionedId:"tutorial-basics/versioning",id:"version-1.0.0/tutorial-basics/versioning",isDocsHomePage:!1,title:"Versioning",description:"- Run the command with the new version number",source:"@site/versioned_docs/version-1.0.0/tutorial-basics/versioning.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/versioning",permalink:"/docs/1.0.0/tutorial-basics/versioning",editUrl:"https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs/versioned_docs/version-1.0.0/tutorial-basics/versioning.md",tags:[],version:"1.0.0",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"version-1.0.0/sidebars",previous:{title:"Congratulations!",permalink:"/docs/1.0.0/tutorial-basics/congratulations"},next:{title:"Manage Docs Versions",permalink:"/docs/1.0.0/tutorial-extras/manage-docs-versions"}},l=[],p={toc:l};function d(e){var n=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"versioning"},"Versioning"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Run the command with the new version number")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"yarn run docusaurus docs:version 1.1.0\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When tagging a new version, the document versioning mechanism will:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Copy the full\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"docs/"),"\xa0folder contents into a new\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"versioned_docs/version-<version>/"),"\xa0folder."),(0,o.kt)("li",{parentName:"ul"},"Create a versioned sidebars file based from your current\xa0",(0,o.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/docs-introduction#sidebar"},"sidebar"),"\xa0configuration (if it exists) - saved as\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"versioned_sidebars/version-<version>-sidebars.json"),"."),(0,o.kt)("li",{parentName:"ul"},"Append the new version number to\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"versions.json"),".")))))}d.isMDXComponent=!0}}]);