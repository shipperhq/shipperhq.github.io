"use strict";(self.webpackChunkdev_shipperhq=self.webpackChunkdev_shipperhq||[]).push([[9924],{9853:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var l=a(7294),s=a(2773),c=a(9960),r=a(5860),n=a(5999);function g(e){let{doc:t}=e;return l.createElement("article",{className:"margin-vert--lg"},l.createElement(c.Z,{to:t.permalink},l.createElement("h2",null,t.title)),t.description&&l.createElement("p",null,t.description))}function o(e){let{tag:t}=e;const a=function(){const{selectMessage:e}=(0,r.c2)();return t=>e(t,(0,n.I)({id:"theme.docs.tagDocListPageTitle.nDocsTagged",description:'Pluralized label for "{count} docs tagged". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One doc tagged|{count} docs tagged"},{count:t}))}(),o=(0,n.I)({id:"theme.docs.tagDocListPageTitle",description:"The title of the page for a docs tag",message:'{nDocsTagged} with "{tagName}"'},{nDocsTagged:a(t.docs.length),tagName:t.name});return l.createElement(s.Z,{title:o,wrapperClassName:r.kM.wrapper.docsPages,pageClassName:r.kM.page.docsTagDocListPage,searchMetadata:{tag:"doc_tag_doc_list"}},l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement("main",{className:"col col--8 col--offset-2"},l.createElement("header",{className:"margin-bottom--xl"},l.createElement("h1",null,o),l.createElement(c.Z,{href:t.allTagsPath},l.createElement(n.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),l.createElement("section",{className:"margin-vert--lg"},t.docs.map((e=>l.createElement(g,{key:e.id,doc:e}))))))))}}}]);