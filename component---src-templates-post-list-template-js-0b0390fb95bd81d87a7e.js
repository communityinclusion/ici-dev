(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{186:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return u});a(61),a(240),a(242),a(85),a(13);var n=a(0),r=a.n(n),i=a(223),o=a(225),s=a(243),c=a.n(s),l=a(226),m=a(232);t.default=function(e){var t=e.data,a=e.pageContext,n=t.allMarkdownRemark.edges,s=a.currentPage,u=a.numPages,d=1===s,p=s===u,f=s-1==1?"news/":"news/"+(s-1).toString(),g="news/"+(s+1).toString();return r.a.createElement(o.a,null,r.a.createElement(m.a,{crumbs:["Home","News"]}),r.a.createElement(l.a,{title:"News"}),r.a.createElement("section",{className:"center mw8 center ph2-ns"},r.a.createElement("div",{className:"post-list"},n.map(function(e){return r.a.createElement("div",{key:e.node.id,className:"post-list__item"},r.a.createElement("div",{className:"post-list__thumbnail"},r.a.createElement(i.Link,{to:e.node.fields.slug},r.a.createElement(c.a,{fixed:e.node.frontmatter.thumbnail.childImageSharp.fixed}))),r.a.createElement("div",{className:"post-list__content"},r.a.createElement("h2",null,e.node.frontmatter.title),r.a.createElement("p",null,e.node.frontmatter.date),r.a.createElement("div",{className:"post-list__excerpt"},r.a.createElement("p",null,e.node.excerpt)),r.a.createElement(i.Link,{className:"button button--small",to:e.node.fields.slug},"Read More")))})),r.a.createElement("div",{className:"page-navigation"},!d&&r.a.createElement(i.Link,{to:f,rel:"prev"},"← Previous Page"),Array.from({length:u},function(e,t){return r.a.createElement(i.Link,{key:"pagination-number"+(t+1),to:"news/"+(0===t?"":t+1)},t+1)}),!p&&r.a.createElement(i.Link,{to:g,rel:"next"},"Next Page →"))))};var u="2365896750"},226:function(e,t,a){"use strict";var n=a(231),r=a(0),i=a.n(r),o=a(10),s=a.n(o),c=a(233),l=a.n(c);function m(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,s=e.title,c=n.data.site,m=t||c.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:s},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:m}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=m},231:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},232:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(223),o=a(184),s=a.n(o);t.a=function(e){return r.a.createElement("div",{className:"mw8 center"},r.a.createElement("ul",{className:s.a.breadcrumb},e.crumbs.map(function(t,a){return e.crumbs.length-a>1?r.a.createElement("li",{key:a},r.a.createElement(i.Link,{to:t.toLowerCase()},t)):r.a.createElement("li",{key:a},t)})),r.a.createElement("div",{style:{clear:"both"}}))}},240:function(e,t,a){"use strict";var n=a(23),r=a(5),i=a(29),o=a(127),s=a(128),c=a(24),l=a(241),m=a(129);r(r.S+r.F*!a(87)(function(e){Array.from(e)}),"Array",{from:function(e){var t,a,r,u,d=i(e),p="function"==typeof this?this:Array,f=arguments.length,g=f>1?arguments[1]:void 0,y=void 0!==g,w=0,h=m(d);if(y&&(g=n(g,f>2?arguments[2]:void 0,2)),null==h||p==Array&&s(h))for(a=new p(t=c(d.length));t>w;w++)l(a,w,y?g(d[w],w):d[w]);else for(u=h.call(d),a=new p;!(r=u.next()).done;w++)l(a,w,y?o(u,g,[r.value,w],!0):r.value);return a.length=w,a}})},241:function(e,t,a){"use strict";var n=a(15),r=a(45);e.exports=function(e,t,a){t in e?n.f(e,t,r(0,a)):e[t]=a}}}]);
//# sourceMappingURL=component---src-templates-post-list-template-js-0b0390fb95bd81d87a7e.js.map