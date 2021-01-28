(this["webpackJsonpdojo-blog"]=this["webpackJsonpdojo-blog"]||[]).push([[0],{23:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var n=c(0),o=c(1),r=c.n(o),s=c(16),i=c.n(s),l=(c(23),c(7)),j=function(){return Object(n.jsxs)("nav",{className:"navbar",children:[Object(n.jsx)("h1",{children:"The Penguin Blog"}),Object(n.jsxs)("div",{className:"links",children:[Object(n.jsx)(l.b,{to:"/",children:"Home"}),Object(n.jsx)(l.b,{to:"/create",style:{color:"white",backgroundColor:"#35c8f1",borderRadius:"8px"},children:"New Blog"})]})]})},a=c(2),d=function(e){var t=e.blogs,c=e.title;return Object(n.jsxs)("div",{className:"blog-list",children:[Object(n.jsx)("h2",{children:c}),t.map((function(e){return Object(n.jsx)("div",{className:"blog-preview",children:Object(n.jsxs)(l.b,{to:"/blogs/".concat(e.id),children:[Object(n.jsx)("h2",{children:e.title}),Object(n.jsxs)("p",{children:["Written by ",e.author]})]})},e.id.toString())}))]})},b=function(){return Object(n.jsx)("div",{children:"Loader"})},h=c(8),u=function(e){var t=e.url,c=Object(o.useState)([]),n=Object(h.a)(c,2),r=n[0],s=n[1],i=Object(o.useState)(!0),l=Object(h.a)(i,2),j=l[0],a=l[1],d=Object(o.useState)(null),b=Object(h.a)(d,2),u=b[0],O=b[1];return Object(o.useEffect)((function(){var e=new AbortController;return setTimeout((function(){fetch("http://localhost:8000/blogs",{signal:e.signal}).then((function(e){if(!e.ok)throw Error("could not fetch data for that result");return console.log(e),e.json()})).then((function(e){s(e),a(!1),O(null)})).catch((function(e){"AbortError"===e.name?console.log("fetch aborted"):(a(!1),O(e.message))}))}),1e3),function(){e.abort()}}),[t]),{data:r,isPending:j,error:u}},O=function(){var e=u("http://localhost:8000/blogs"),t=e.data,c=e.isPending,o=e.error;return Object(n.jsxs)("div",{className:"home",children:[o&&Object(n.jsxs)("div",{children:["Error Message: ",o]}),!t&&c?Object(n.jsx)(b,{}):Object(n.jsx)(d,{blogs:t,title:"My Article"})]})},x=function(){var e=Object(o.useState)(""),t=Object(h.a)(e,2),c=t[0],r=t[1],s=Object(o.useState)(""),i=Object(h.a)(s,2),l=i[0],j=i[1],d=Object(o.useState)("Moin11.dev"),b=Object(h.a)(d,2),u=b[0],O=b[1],x=Object(o.useState)(!1),g=Object(h.a)(x,2),v=g[0],f=g[1],p=Object(a.f)();return Object(n.jsxs)("div",{className:"create",children:[Object(n.jsx)("h2",{children:"Add a New Blog"}),Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=parseInt((100*Math.random()%10+2).toString()),n={title:c,body:l,author:u,id:t};f(!0),fetch("http://localhost:8000/blogs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),f(!1),p.go(-1)},children:[Object(n.jsx)("label",{children:"Blog Title: "}),Object(n.jsx)("input",{type:"text",required:!0,value:c,onChange:function(e){r(e.target.value)}}),Object(n.jsx)("label",{children:"Blog Body: "}),Object(n.jsx)("textarea",{required:!0,value:l,onChange:function(e){j(e.target.value)}}),Object(n.jsxs)("select",{value:u,onChange:function(e){O(e.target.value)},children:[Object(n.jsx)("option",{value:"Moin11.dev",children:"Moin11.dev"}),Object(n.jsx)("option",{value:"Jeff Cavaliere From Athleanx.com",children:"Jeff Cavaliere From Athleanx.com"}),Object(n.jsx)("option",{value:"NetNinja",children:"NetNinja"})]}),!0===v?Object(n.jsx)("button",{disabled:!0,style:{background:"green"},children:"Adding Blog"}):Object(n.jsx)("button",{children:"Add Blog"}),Object(n.jsx)("p",{children:u})]})]})},g=function(){var e,t,c,o=Object(a.g)().id,r=parseInt(o),s=u("http://localhost:8000/blogs/"+o),i=s.data,l=s.error,j=s.isPending,d=Object(a.f)();console.log(i[r]);return Object(n.jsxs)("div",{className:"blog-details",children:[j&&Object(n.jsx)("div",{children:"Loading..."}),l&&Object(n.jsx)("div",{children:l}),Object(n.jsxs)("article",{children:[Object(n.jsx)("h2",{children:null===(e=i[r])||void 0===e?void 0:e.title}),Object(n.jsxs)("p",{children:["Written by ",null===(t=i[r])||void 0===t?void 0:t.author]}),Object(n.jsx)("div",{children:null===(c=i[r])||void 0===c?void 0:c.body}),Object(n.jsx)("button",{onClick:function(){fetch("http://localhost:8000/blogs/"+o,{method:"DELETE"}).then((function(){d.push("/")}))},children:"delete"})]})]})},v=function(){return Object(n.jsxs)("div",{className:"not-found",children:[Object(n.jsx)("h2",{children:"Sorry"}),Object(n.jsx)("p",{children:"404:status Page Not Found"}),Object(n.jsx)(l.b,{to:"/",children:"Back to the homepage..."})]})},f=function(){return Object(n.jsx)(l.a,{children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(j,{}),Object(n.jsx)("div",{className:"content",children:Object(n.jsxs)(a.c,{children:[Object(n.jsx)(a.a,{exact:!0,path:"/",children:Object(n.jsx)(O,{})}),Object(n.jsx)(a.a,{path:"/create",children:Object(n.jsx)(x,{})}),Object(n.jsx)(a.a,{path:"/blogs/:id",children:Object(n.jsx)(g,{})}),Object(n.jsx)(a.a,{path:"*",children:Object(n.jsx)(v,{})})]})})]})})};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(f,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.c06cc713.chunk.js.map