(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{194:function(e,t,a){"use strict";a.r(t),a.d(t,"IndexQuery",function(){return m});a(34);var n=a(0),l=a.n(n),r=a(225),i=a(226),s=a(232);var c=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.data.allDirectoryXlsxSheet1.edges;return l.a.createElement(r.a,null,l.a.createElement(s.a,{crumbs:["Home","About","Staff"]}),l.a.createElement("section",{className:"mw8 center"},l.a.createElement(i.a,{title:"About the ICI"}),l.a.createElement("div",{className:"w-100 pa2"},l.a.createElement("h1",null,"Staff Directory"),l.a.createElement("table",{className:"collapse ba br2 b--black-10 pv2 ph3 mt4"},l.a.createElement("thead",null,l.a.createElement("tr",{className:"striped--near-white "},l.a.createElement("th",{className:"pv2 ph3 tl f6 fw6 ttu"},"Name"),l.a.createElement("th",{className:"pv2 ph3 tl f6 fw6 ttu"},"Phone"),l.a.createElement("th",{className:"pv2 ph3 tl f6 fw6 ttu"},"Email"))),l.a.createElement("tbody",null,e.map(function(e,t){return l.a.createElement("tr",{className:"striped--near-white",key:e.node.name+" "+t},l.a.createElement("td",{className:"pv2 ph3"},e.node.name),l.a.createElement("td",{className:"pv2 ph3"},e.node.phone),l.a.createElement("td",{className:"pv2 ph3"},e.node.email))}))))))},n}(l.a.Component);t.default=c;var m="3261988331"},223:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return u}),a.d(t,"StaticQuery",function(){return E}),a.d(t,"useStaticQuery",function(){return p});var n=a(0),l=a.n(n),r=a(8),i=a.n(r),s=a(60),c=a.n(s);a.d(t,"Link",function(){return c.a}),a.d(t,"withAssetPrefix",function(){return s.withAssetPrefix}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"parsePath",function(){return s.parsePath}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var m=a(224),o=a.n(m);a.d(t,"PageRenderer",function(){return o.a});var u=l.a.createContext({});function d(e){var t=e.staticQueryData,a=e.data,n=e.query,r=e.render,i=a?a.data:t[n]&&t[n].data;return l.a.createElement(l.a.Fragment,null,i&&r(i),!i&&l.a.createElement("div",null,"Loading (StaticQuery)"))}var E=function(e){var t=e.data,a=e.query,n=e.render,r=e.children;return l.a.createElement(u.Consumer,null,function(e){return l.a.createElement(d,{data:t,query:a,render:n||r,staticQueryData:e})})},p=function(e){l.a.useContext;var t=l.a.useContext(u);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away. Unfortunately, something went wrong and the query was left in the compiled code.\n\nUnless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}E.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},224:function(e,t,a){var n;e.exports=(n=a(228))&&n.default||n},225:function(e,t,a){"use strict";var n=a(227),l=a(0),r=a.n(l),i=a(8),s=a.n(i),c=a(223),m=(a(182),a(121),function(){return r.a.createElement("div",null,r.a.createElement("nav",{role:"navigation",className:"bg-blue"},r.a.createElement(c.Link,{to:null,className:"ic menu",tabindex:"1"},r.a.createElement("span",{className:"line"}),r.a.createElement("span",{className:"line"}),r.a.createElement("span",{className:"line"})),r.a.createElement(c.Link,{to:null,className:"ic close"}),r.a.createElement("ul",{className:"main-nav"},r.a.createElement("li",{className:"top-level-link"},r.a.createElement(c.Link,{to:"/"},r.a.createElement("span",null,"Home"))),r.a.createElement("li",{className:"top-level-link"},r.a.createElement(c.Link,{to:"/about",className:"mega-menu"},r.a.createElement("span",null,"About")),r.a.createElement("div",{className:"sub-menu-block"},r.a.createElement("div",{className:"cf"},r.a.createElement("div",{className:"fl w-two-thirds-l db-l dn pa2 pr3 br"},r.a.createElement("p",null,"The Institute for Community Inclusion at UMass Boston supports the rights of children and adults with disabilities to participate in all aspects of the community. As practitioners, researchers, and teachers, we form partnerships with individuals, families, and communities. Together we advocate for personal choice, self-determination, and social and economic justice.")),r.a.createElement("div",{className:"fl w-third-l w-100 pa2"},r.a.createElement("ul",{className:"sub-menu-lists ml1"},r.a.createElement("li",null,r.a.createElement(c.Link,{to:"/about"},"About the ICI")),r.a.createElement("li",null,r.a.createElement(c.Link,{to:"/about/history"},"History of ICI")),r.a.createElement("li",null,r.a.createElement(c.Link,{to:"/about/mission"},"Mission and Vision")),r.a.createElement("li",null,r.a.createElement(c.Link,{to:"/about/staff"},"Staff")),r.a.createElement("li",null,r.a.createElement(c.Link,{to:"/about/directions"},"Directions")),r.a.createElement("li",null,r.a.createElement(c.Link,{to:"/about/contact"},"Contact"))))))),r.a.createElement("li",{className:"top-level-link"},r.a.createElement(c.Link,{to:"/areas-of-emphasis",className:"mega-menu"},r.a.createElement("span",null,"Areas of Emphasis")),r.a.createElement("div",{className:"sub-menu-block"},r.a.createElement("div",{className:"cf"},r.a.createElement("div",{className:"fl w-two-thirds-l db-l dn pa2 br"},r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed pellentesque lorem, sit amet placerat arcu. Etiam viverra quam quis leo feugiat, et pellentesque enim fermentum.   ")),r.a.createElement("div",{className:"fl w-third-l w-100 pa2"},r.a.createElement("ul",{className:"sub-menu-lists ml1"},r.a.createElement("li",null,r.a.createElement(c.Link,{to:"/areas-of-emphasis/employment"},"Employment")),r.a.createElement("li",null,r.a.createElement(c.Link,{to:"/areas-of-emphasis/education"},"Education")),r.a.createElement("li",null,r.a.createElement(c.Link,{to:"/areas-of-emphasis/community"},"Community Life")),r.a.createElement("li",null,r.a.createElement(c.Link,{to:"/areas-of-emphasis/healthcare"},"Healthcare"))))))),r.a.createElement("li",{className:"top-level-link"},r.a.createElement(c.Link,{to:"/projects",className:"mega-menu"},r.a.createElement("span",null,"Projects")),r.a.createElement("div",{className:"sub-menu-block"},r.a.createElement("div",{className:"cf"},r.a.createElement("div",{className:"fl w-60-l db-l dn pa2 br"},r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed pellentesque lorem, sit amet placerat arcu. Etiam viverra quam quis leo feugiat, et pellentesque enim fermentum.   ")),r.a.createElement("div",{className:"fl w-20-l w-100"},r.a.createElement("ul",{className:"sub-menu-lists ml1"},r.a.createElement("li",null,r.a.createElement(c.Link,{to:"/projects/thinkcollege"},"ThinkCollege")),r.a.createElement("li",null,r.a.createElement(c.Link,{to:"/projects/thinkwork"},"ThinkWork!")),r.a.createElement("li",null,r.a.createElement(c.Link,{to:"/projects/explorevr"},"ExploreVR")),r.a.createElement("li",null,r.a.createElement(c.Link,{to:"/projects/seln"},"SELN")),r.a.createElement("li",null,r.a.createElement(c.Link,{to:"/projects/statedata"},"StateData")),r.a.createElement("li",null,r.a.createElement(c.Link,{to:"/projects/catada"},"CATADA")))),r.a.createElement("div",{className:"fl w-20-l w-100"},r.a.createElement("ul",{className:"sub-menu-lists ma0 pa0"},r.a.createElement("li",null,r.a.createElement(c.Link,{to:"/projects/nercve"},"NERCVE")),r.a.createElement("li",null,r.a.createElement(c.Link,{to:"/projects/employmentfirstma"},"EmploymentFirstMA")),r.a.createElement("li",null,r.a.createElement(c.Link,{to:"/projects/fqi"},"Future Quest Island")),r.a.createElement("li",null,r.a.createElement(c.Link,{to:"/projects/lend"},"BostonLEND")),r.a.createElement("li",null,r.a.createElement(c.Link,{to:"/projects/bchdsp"},"BCH Down Syndrome Program"))))))),r.a.createElement("li",{className:"top-level-link"},r.a.createElement(c.Link,{to:"/services",className:"mega-menu"},r.a.createElement("span",null,"Services")),r.a.createElement("div",{className:"sub-menu-block"},r.a.createElement("div",{className:"cf"},r.a.createElement("div",{className:"fl w-two-thirds-l db-l dn pa2 br"},r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed pellentesque lorem, sit amet placerat arcu. Etiam viverra quam quis leo feugiat, et pellentesque enim fermentum.   ")),r.a.createElement("div",{className:"fl w-third-l w-100 pa2"},r.a.createElement("ul",{className:"sub-menu-lists ml1"},r.a.createElement("li",null,r.a.createElement(c.Link,{to:"/services/ici-consulting"},"ICI Consulting")),r.a.createElement("li",null,r.a.createElement(c.Link,{to:"/services/ici-employment-services"},"ICI Employment Services")),r.a.createElement("li",null,r.a.createElement(c.Link,{to:"/services/college-of-employment-services"},"College of Employment Services")),r.a.createElement("li",null,r.a.createElement(c.Link,{to:"/services/ces-acre"},"CES/ACRE"))))))),r.a.createElement("li",{className:"top-level-link"},r.a.createElement(c.Link,{to:""},r.a.createElement("span",null,"Resources"))))))}),o=a(229),u=a.n(o),d=function(e){e.siteTitle;return r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"cf mw8 center ph2-ns"},r.a.createElement("div",{className:"fl w-15-ns w-12  pa2"},r.a.createElement(c.Link,{to:"/",className:"dtc v-mid mid-gray link ",title:"Home"},r.a.createElement("img",{className:"dib mw-60 h-auto",alt:"Institute for Community Inclusion",src:u.a}))," "),r.a.createElement("div",{className:"fl w-60-ns  w-70 pa2"},r.a.createElement("h1",{className:"banner-text link dim dark-blue b  f3 f2-m f1-l   db mb2 mt0 center ",href:"/",title:"Home"},"Institute for Community Inclusion "),r.a.createElement("span",{className:"banner-tagline f4-ns dn db-ns f-subheadline dark-blue tracked-mega-l "}," "," ","PROMOTING THE INCLUSION OF PEOPLE WITH DISABILITIES ")," "),r.a.createElement("div",{className:"fl w-15-ns w-20 dn db-l pa2 "},r.a.createElement("div",{className:"db dtc-l v-mid w-100 w-75-l"},r.a.createElement("ul",{className:"flex-container space-between list pl0"},r.a.createElement("li",{className:"flex-item dib br pr1"},r.a.createElement(c.Link,{to:"/subscribe/",className:"link dim dark-gray f6 dib ",title:"Subscribe"},"Subscribe "," "," ")," ")," ",r.a.createElement("li",{className:"flex-item dib br pr1 pl1"}," "," ",r.a.createElement(c.Link,{to:"/about/contact/",className:"link dim dark-gray f6 dib ",title:"Contact"},"Contact ")," ")," ",r.a.createElement("li",{className:"flex-item dib pl1"}," "," ",r.a.createElement(c.Link,{to:"/donate/",className:"link dim dark-gray f6 dib ",title:"Donate"},"Donate ")," ")," ")," "),r.a.createElement("ul",{className:"social-links flex-container space-between list pl0"},r.a.createElement("li",{className:"flex-item dib"}," "," "," ",r.a.createElement("a",{href:"https://twitter.com/ICInclusion",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab  fa-2x fa-twitter"}))," ")," ",r.a.createElement("li",{className:"flex-item dib"}," "," ",r.a.createElement("a",{href:"https://www.instagram.com/communityinclusion/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-2x fa-instagram"}))," ")," ",r.a.createElement("li",{className:"flex-item dib"}," "," ",r.a.createElement("a",{href:"https://medium.com/@communityinclusion",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab  fa-2x fa-medium"}))," ")," ",r.a.createElement("li",{className:"flex-item dib"}," "," "," ",r.a.createElement("a",{href:"https://www.facebook.com/communityinclusion/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab  fa-2x fa-facebook-square"}))," ")," ",r.a.createElement("li",{className:"flex-item dib"}," "," "," ",r.a.createElement("a",{href:"https://www.youtube.com/user/communityinclusion",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-2x fa-youtube"}))," ")," ")," ")," ")))};d.propTypes={siteTitle:s.a.string},d.defaultProps={siteTitle:""};var E=d,p=a(230),f=a.n(p),b=function(){return r.a.createElement("footer",{className:"bg-navy mt5 pt3"},r.a.createElement("div",{className:"footer-top mw9 center ph3-ns white"},r.a.createElement("div",{className:"cf ph2-ns flex flex-column flex-row-l justify-between"},r.a.createElement("div",{className:"fl w-33-l pa2 w-100  ml4-m"},r.a.createElement("img",{className:"dib mw-100 h-auto",alt:"Institute for Community Inclusion",src:f.a})),r.a.createElement("div",{className:"fl w-33-l pa2 w-100 ml4-m"},r.a.createElement("h1",{className:"bb fl w-100 pv0 f6 fw6 ttu tracked"},"Contact"),r.a.createElement("article",{className:"fl dib-ns w-auto-ns mr4-m mr5-l pr2 pr0-ns tl"},r.a.createElement("address",null,"Institute for Community Inclusion",r.a.createElement("br",null),"UMass Boston",r.a.createElement("br",null),"100 Morrissey Blvd.",r.a.createElement("br",null),"Boston, Massachusetts 02125",r.a.createElement("br",null),"Voice: (617) 287-4300",r.a.createElement("br",null),"Fax: (617) 287-4352",r.a.createElement("br",null),"TTY: (617) 287-4350",r.a.createElement("br",null),"Email: ",r.a.createElement("a",{href:"mailto:ici@umb.edu"},"ici@umb.edu"),r.a.createElement("br",null)," "),"    ")),r.a.createElement("div",{className:"fl w-33-l pa2 w-100 ml4-m"},r.a.createElement("h1",{className:"bb fl w-100 pv0 f6 fw6 ttu tracked"},"Links"),r.a.createElement("ul",{className:" v-mid w-100 w-75-l list pl0 "},r.a.createElement("li",{className:"mr2"}," ",r.a.createElement(c.Link,{to:"/about/",className:"link  white f6 f5-l dib mr3 mr4-l no-underline underline-hover",title:"About"},"ABOUT ICI")),r.a.createElement("li",{className:"mr2"},r.a.createElement(c.Link,{to:"/areas-of-emphasis",className:"link white  f6 f5-l dib mr3 mr4-l no-underline underline-hover",title:"AREAS OF EMPHASIS"},"AREAS OF EMPHASIS")),r.a.createElement("li",{className:"mr2"}," ",r.a.createElement(c.Link,{to:"/projects",className:"link white  f6 f5-l dib mr3 mr4-l no-underline underline-hover",title:"Projects"},"PROJECTS")),r.a.createElement("li",{className:"mr2"},"   ",r.a.createElement(c.Link,{to:"/services",className:"link white  f6 f5-l dib mr3 mr4-l no-underline underline-hover",title:"Services"},"SERVICES")),r.a.createElement("li",{className:"mr2"},r.a.createElement(c.Link,{to:"/resources/",className:"link white  f6 f5-l dib no-underline underline-hover",title:"Resources"},"RESOURCES")),r.a.createElement("li",{className:"mr2"}," ",r.a.createElement(c.Link,{to:"/",className:"link white  f6 f5-l dib no-underline underline-hover",title:"Subscribe"},"SUBSCRIBE")),r.a.createElement("li",{className:"mr2"}," ",r.a.createElement(c.Link,{to:"/",className:"link white  f6 f5-l dib no-underline underline-hover",title:"contact"},"CONTACT")),r.a.createElement("li",{className:"mr2"}," ",r.a.createElement(c.Link,{to:"/",className:"link white  f6 f5-l dib no-underline underline-hover",title:"Donate"},"DONATE")))))),r.a.createElement("div",{className:"footer-copyright center cf mt4  bt white bg-blue f6 lh-copy "},r.a.createElement("p",{className:"ph3-ns ph5-ns ph3 white"},"©2019. The Institute for Community Inclusion was founded in 1967, and is a program at the University of Massachusetts Boston and Boston Children’s Hospital.")))},h=(a(183),a(122),function(e){var t=e.children;return r.a.createElement(c.StaticQuery,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{siteTitle:e.site.siteMetadata.title}),r.a.createElement(m,null),r.a.createElement("main",null,t),r.a.createElement(b,null))},data:n})});h.propTypes={children:s.a.node.isRequired};t.a=h},226:function(e,t,a){"use strict";var n=a(231),l=a(0),r=a.n(l),i=a(8),s=a.n(i),c=a(233),m=a.n(c);function o(e){var t=e.description,a=e.lang,l=e.meta,i=e.keywords,s=e.title,c=n.data.site,o=t||c.siteMetadata.description;return r.a.createElement(m.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:s},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:o}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(l)})}o.defaultProps={lang:"en",meta:[],keywords:[],description:""},o.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=o},227:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},228:function(e,t,a){"use strict";a.r(t);a(21);var n=a(0),l=a.n(n),r=a(8),i=a.n(r),s=a(83),c=function(e){var t=e.location,a=e.pageResources;return a?l.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},229:function(e,t,a){e.exports=a.p+"static/ici-150w-1c1c4ac706a0672a9800093794f86167.png"},230:function(e,t,a){e.exports=a.p+"static/bch-umb-combo_logo-small-f30091fc04bbc539a177163df2215a3e.png"},231:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},232:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(223),i=a(184),s=a.n(i);t.a=function(e){return l.a.createElement("div",{className:"mw8 center"},l.a.createElement("ul",{className:s.a.breadcrumb},e.crumbs.map(function(t,a){return e.crumbs.length-a>1?l.a.createElement("li",{key:a},l.a.createElement(r.Link,{to:t.toLowerCase()},t)):l.a.createElement("li",{key:a},t)})),l.a.createElement("div",{style:{clear:"both"}}))}}}]);
//# sourceMappingURL=component---src-pages-about-staff-js-019d0cbc37ee6a94253e.js.map