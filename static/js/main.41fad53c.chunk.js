(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{16:function(e,t,c){"use strict";c.r(t);var a=c(8),s=c.n(a),n=c(4),i=(c(13),c(14),c(1)),b=c(2),j=function(e){var t,c=e.tabs,a=Object(i.g)().tabId;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{className:"title",children:"Tabs Page"}),Object(b.jsx)("ul",{children:c.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)(n.b,{to:"/tabs/".concat(e.id),children:e.title})},e.id)}))}),Object(b.jsx)("div",{className:"box",children:a?Object(b.jsx)("p",{children:null===(t=c.find((function(e){return e.id===a})))||void 0===t?void 0:t.content}):Object(b.jsx)("p",{children:"Please, select a tab"})})]})},r=function(){return Object(b.jsx)("nav",{className:"navbar is-fixed-top has-background-light","data-cy":"nav",children:Object(b.jsx)("div",{className:"navbar-menu",children:Object(b.jsxs)("div",{className:"navbar-start",children:[Object(b.jsx)(n.c,{to:"/",className:"navbar-item isActive",children:"Home"}),Object(b.jsx)(n.c,{to:"tabs",className:"navbar-item isActive",children:"Tabs"})]})})})},l=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],d=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(r,{}),Object(b.jsx)("div",{className:"section",children:Object(b.jsxs)(i.c,{children:[Object(b.jsx)(i.a,{path:"/",element:Object(b.jsx)("h1",{className:"title",children:"Home page"})}),Object(b.jsxs)(i.a,{path:"/tabs",children:[Object(b.jsx)(i.a,{index:!0,element:Object(b.jsx)(j,{tabs:l})}),Object(b.jsx)(i.a,{path:":tabId",element:Object(b.jsx)(j,{tabs:l})})]}),Object(b.jsx)(i.a,{path:"*",element:Object(b.jsx)("h1",{className:"title",children:"Page not found"})})]})})]})};s.a.render(Object(b.jsx)(n.a,{children:Object(b.jsx)(d,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.41fad53c.chunk.js.map