(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"2vHB":function(e,a,t){"use strict";var l=t("TqRt");a.__esModule=!0,a.default=void 0;var r=l(t("pVnL")),c=l(t("q1tI")),s=l(t("JHR5")),n=l(t("LCnF")),u=t("m81S"),m="/home/circleci/project/src/components/Breadcrumb.js",i=function(e){return c.default.useContext(u.OptionsContext).useAutoGen?c.default.createElement(s.default,(0,r.default)({},e,{__source:{fileName:m,lineNumber:12},__self:this})):c.default.createElement(n.default,(0,r.default)({},e,{__source:{fileName:m,lineNumber:14},__self:this}))};a.default=i},JHR5:function(e,a,t){"use strict";t("Z2Ku"),t("L9s1");var l=t("TqRt");a.__esModule=!0,a.default=void 0;var r=l(t("pVnL")),c=l(t("8OQS")),s=l(t("q1tI")),n=l(t("17x9")),u=t("Wbzz"),m=t("m81S"),i="/home/circleci/project/src/components/auto-gen-crumb.js",o=function(e){var a=e.title,t=void 0===a?"":a,l=e.crumbSeparator,n=e.crumbWrapperStyle,o=e.crumbActiveStyle,b=e.crumbStyle,d=e.crumbs,f=e.crumbLabel,p=void 0===f?null:f,h=e.disableLinks,_=e.hiddenCrumbs,v=(0,c.default)(e,["title","crumbSeparator","crumbWrapperStyle","crumbActiveStyle","crumbStyle","crumbs","crumbLabel","disableLinks","hiddenCrumbs"]),N=s.default.useContext(m.OptionsContext).useClassNames;return s.default.createElement("div",{__source:{fileName:i,lineNumber:23},__self:this},s.default.createElement("span",{className:"breadcrumb__title",__source:{fileName:i,lineNumber:24},__self:this},t),d.map((function(e,a){return _.includes(e.pathname)?null:s.default.createElement("div",{className:"breadcrumb",style:N?null:(0,r.default)({display:"inline"},n),key:a,__source:{fileName:i,lineNumber:30},__self:this},!h.includes(e.pathname)&&s.default.createElement(u.Link,(0,r.default)({to:e.pathname,style:N?null:(0,r.default)({textDecoration:"none",fontSize:"16pt",color:"#e1e1e1"},b),activeStyle:N?null:(0,r.default)({color:"white"},o),className:"breadcrumb__link",activeClassName:N?"breadcrumb__link__active":null},v,{__source:{fileName:i,lineNumber:38},__self:this}),p&&a===d.length-1?p:e.crumbLabel),h.includes(e.pathname)&&s.default.createElement("span",(0,r.default)({style:N?null:(0,r.default)({textDecoration:"none",fontSize:"16pt",color:"#e1e1e1"},b),className:"breadcrumb__link__disabled"},v,{__source:{fileName:i,lineNumber:70},__self:this}),p&&a===d.length-1?p:e.crumbLabel),s.default.createElement("span",{className:"breadcrumb__separator",style:N?null:(0,r.default)({fontSize:"16pt"},b),__source:{fileName:i,lineNumber:89},__self:this},a===d.length-1?null:l))})))};o.defaultProps={title:"",crumbSeparator:" / ",crumbWrapperStyle:{},crumbStyle:{},crumbActiveStyle:{},crumbLabel:null,disableLinks:[],hiddenCrumbs:[]},o.propTypes={title:n.default.string,crumbSeparator:n.default.string,crumbWrapperStyle:n.default.shape(),crumbActiveStyle:n.default.shape(),crumbStyle:n.default.shape(),crumbs:n.default.arrayOf(n.default.shape({location:n.default.shape(),pathname:n.default.string.isRequired})).isRequired,crumbLabel:n.default.string,disableLinks:n.default.arrayOf(n.default.string),hiddenCrumbs:n.default.arrayOf(n.default.string)};var b=o;a.default=b},LCnF:function(e,a,t){"use strict";t("Oyvg"),t("pIFo");var l=t("TqRt");a.__esModule=!0,a.default=void 0;var r=l(t("pVnL")),c=l(t("8OQS")),s=l(t("q1tI")),n=l(t("17x9")),u=t("Wbzz"),m=t("m81S"),i=l(t("q/3z")),o="/home/circleci/project/src/components/click-tracking-crumb.js",b=function(e){var a=e.title,t=e.location,l=e.crumbLabel,n=e.crumbSeparator,b=e.crumbWrapperStyle,d=e.crumbActiveStyle,f=e.crumbStyle,p=(0,c.default)(e,["title","location","crumbLabel","crumbSeparator","crumbWrapperStyle","crumbActiveStyle","crumbStyle"]),h=s.default.useContext(m.OptionsContext),_=h.useClassNames,v=h.usePathPrefix,N=(0,i.default)({location:(0,r.default)({},t,{pathname:v?t.pathname.replace(new RegExp("^"+v),""):t.pathname}),crumbLabel:l,crumbSeparator:n,crumbStyle:f,crumbActiveStyle:d}).crumbs,y=void 0===N?[]:N;return s.default.createElement("div",{__source:{fileName:o,lineNumber:37},__self:this},s.default.createElement("span",{className:"breadcrumb__title",__source:{fileName:o,lineNumber:38},__self:this},a),y.map((function(e,a){return s.default.createElement("div",{className:"breadcrumb",style:_?null:(0,r.default)({display:"inline"},b),key:a,__source:{fileName:o,lineNumber:41},__self:this},s.default.createElement(u.Link,(0,r.default)({to:e.pathname||"",style:_?null:(0,r.default)({textDecoration:"none",fontSize:"16pt",color:"#e1e1e1"},e.crumbStyle),activeStyle:_?null:(0,r.default)({color:"white"},d),className:"breadcrumb__link",activeClassName:_?"breadcrumb__link__active":null},p,{__source:{fileName:o,lineNumber:48},__self:this}),e.crumbLabel),s.default.createElement("span",{className:"breadcrumb__separator",style:_?null:(0,r.default)({fontSize:"16pt"},e.crumbStyle),__source:{fileName:o,lineNumber:76},__self:this},a===y.length-1?null:e.crumbSeparator))})))};b.defaultProps={title:"",crumbSeparator:" / ",crumbWrapperStyle:{},crumbStyle:{},crumbActiveStyle:{}},b.propTypes={location:n.default.shape().isRequired,crumbLabel:n.default.string.isRequired,title:n.default.string,crumbSeparator:n.default.string,crumbWrapperStyle:n.default.shape(),crumbActiveStyle:n.default.shape(),crumbStyle:n.default.shape()};var d=b;a.default=d},O0dG:function(e,a,t){"use strict";t.r(a);var l=t("q1tI"),r=t.n(l),c=t("Wbzz"),s=t("Bl7J"),n=t("vrFN"),u=t("bSK8");a.default=function(e){var a=e.pageContext.breadcrumb.crumbs;return r.a.createElement(s.a,null,r.a.createElement(n.a,{title:"About the ICI"}),r.a.createElement("section",{className:"mw8 center"},r.a.createElement("div",{className:"breadcrumbs"},r.a.createElement(u.Breadcrumb,{crumbs:a,crumbSeparator:" / ",crumbLabel:"About"})),r.a.createElement("div",{className:"w-100 pa2"},r.a.createElement("h1",null,"About"),r.a.createElement("p",null," ICI recently ",r.a.createElement("a",{href:"http://50.communityinclusion.org/"},"celebrated our 50th anniversary")," as a ",r.a.createElement("a",{href:"https://www.aucd.org/template/index.cfm"},"University Center for Excellence in Developmental Disabilities (UCEDD)"),". President John F. Kennedy launched the UCEDD network in 1963, and today UCEDDs are located at public universities in every U.S. state and territory. "),r.a.createElement("p",null,"These 67 UCEDDs collaborate with people with disabilities, members of their families, state and local government agencies, and service providers. The goal is to empower all citizens, with and without disabilities, to fully participate in community settings. This includes workplaces, health care facilities, schools, and everywhere else where people engage with one another."),r.a.createElement("p",null,"As a member of the UCEDD network, ICI provides training, technical assistance, service, research, and information sharing, with a focus on ending disability-based discrimination and exclusion, and building the capacity of communities to sustain all their citizens.")),r.a.createElement("div",{className:"flex-l w-100 nl2 nr2 center"},r.a.createElement("article",{className:"flex-1 bt bb b--black-10 shadow-4 ma3 pa3  w-90 "},r.a.createElement("div",{className:"flex flex-column flex-row-ns"},r.a.createElement("div",{className:"w-100 w-70-ns"},r.a.createElement(c.Link,{className:"link dt w-100 mt2 dim dark-blue",to:"/about/history"},r.a.createElement("h2",{className:"f3 fw1 mt0 lh-copy bb bw2"},"History")),r.a.createElement("p",{className:"f6 f5-l mt0 lh-copy"},"filler text")))),r.a.createElement("article",{className:"flex-1 bt bb b--black-10 shadow-4 ma3 pa3  w-90"},r.a.createElement("div",{className:"flex flex-column flex-row-ns"},r.a.createElement("div",{className:"w-100 w-70-ns"},r.a.createElement(c.Link,{to:"/about/mission",className:"link dt w-100 mt2 dim dark-blue"},r.a.createElement("h2",{className:"f3 fw1 mt0 lh-copy bb bw2"},"Mission and Vision")),r.a.createElement("p",{className:"f6 f5-l mt0 lh-copy"},"Filler Text"))))),r.a.createElement("div",{className:"flex-l w-100 nl2 nr2 center"},r.a.createElement("article",{className:"flex-1 bt bb b--black-10 shadow-4 ma3 pa3 w-90"},r.a.createElement("div",{className:"flex flex-column flex-row-ns"},r.a.createElement("div",{className:"w-100 w-70-ns"},r.a.createElement(c.Link,{className:"link dt w-100 mt2 dim dark-blue",to:"/about/staff"},r.a.createElement("h2",{className:"f3 fw1 mt0 lh-copy bb bw2"},"Staff")),r.a.createElement("p",{className:"f6 f5-l mt0 lh-copy"},"Filler Text")))),r.a.createElement("article",{className:"flex-1 bt bb b--black-10 shadow-4 ma3 pa3  w-90"},r.a.createElement("div",{className:"flex flex-column flex-row-ns"},r.a.createElement("div",{className:"w-100 w-70-ns"},r.a.createElement(c.Link,{className:"link dt w-100 mt2 dim dark-blue",to:"/about/directions"},r.a.createElement("h2",{className:"f3 fw1 mt0 lh-copy bb bw2"},"Directions")),r.a.createElement("p",{className:"f6 f5-l mt0 lh-copy"},"Filler Text "))))),r.a.createElement("div",{className:"flex-l w-100 nl2 nr2 center"},r.a.createElement("article",{className:"flex-1 bt bb b--black-10 shadow-4 ma3 pa3 w-90"},r.a.createElement("div",{className:"flex flex-column flex-row-ns"},r.a.createElement("div",{className:"w-100 w-70-ns"},r.a.createElement(c.Link,{className:"link dt w-100 mt2 dim dark-blue",to:"/about/contact"},r.a.createElement("h2",{className:"f3 fw1 mt0 lh-copy bb bw2"},"Contact")),r.a.createElement("p",{className:"f6 f5-l mt0 lh-copy"},"Filler Text")))),r.a.createElement("article",{className:"flex-1 bt bb b--black-10 shadow-4 ma3 pa3  w-90"},r.a.createElement("div",{className:"flex flex-column flex-row-ns"},r.a.createElement("div",{className:"w-100 w-70-ns"},r.a.createElement(c.Link,{className:"link dt w-100 mt2 dim dark-blue",to:"/about/directions"},r.a.createElement("h2",{className:"f3 fw1 mt0 lh-copy bb bw2"},"Directions")),r.a.createElement("p",{className:"f6 f5-l mt0 lh-copy"},"Filler Text ")))))))}},SsCC:function(e,a,t){"use strict";var l=t("TqRt");a.__esModule=!0;var r=l(t("2vHB"));a.Breadcrumb=r.default;var c=l(t("JHR5"));a.AutoGenCrumb=c.default;var s=l(t("bAhf"));a.SitemapCrumbs=s.default;var n=t("iHlK");a.BreadcrumbContext=n.BreadcrumbContext,a.BreadcrumbConsumer=n.BreadcrumbConsumer,a.BreadcrumbProvider=n.BreadcrumbProvider;var u=l(t("q/3z"));a.useBreadcrumb=u.default},bAhf:function(e,a,t){"use strict";var l=t("TqRt");a.__esModule=!0,a.default=void 0;var r=l(t("pVnL")),c=l(t("q1tI")),s=l(t("JHR5")),n=function(e){return console.warn("Warning: <SitemapCrumbs /> has been deprecated.  Please update your code to use <Breadcrumb /> component. See docs https://github.com/sbardian/gatsby-plugin-breadcrumb for details."),c.default.createElement(s.default,(0,r.default)({},e,{__source:{fileName:"/home/circleci/project/src/components/sitemap-crumbs.js",lineNumber:11},__self:this}))};a.default=n},bSK8:function(e,a,t){"use strict";a.__esModule=!0;var l=t("SsCC");a.Breadcrumb=l.Breadcrumb,a.BreadcrumbContext=l.BreadcrumbContext,a.BreadcrumbConsumer=l.BreadcrumbConsumer,a.BreadcrumbProvider=l.BreadcrumbProvider,a.useBreadcrumb=l.useBreadcrumb,a.SitemapCrumbs=l.SitemapCrumbs,a.AutoGenCrumb=l.AutoGenCrumb},"q/3z":function(e,a,t){"use strict";var l=t("TqRt");a.__esModule=!0,a.default=void 0;var r=l(t("q1tI")),c=t("iHlK"),s=function(e){var a=e.location,t=e.crumbLabel,l=e.crumbSeparator,s=e.crumbStyle,n=void 0===s?{}:s,u=e.crumbActiveStyle,m=void 0===u?{}:u,i=r.default.useContext(c.BreadcrumbContext),o=i.crumbs,b=i.updateCrumbs;return r.default.useEffect((function(){b({location:a,crumbLabel:t,crumbSeparator:l,crumbStyle:n,crumbActiveStyle:m})}),[a,t,l,n,m,b]),{crumbs:o}};a.default=s}}]);
//# sourceMappingURL=component---src-pages-about-index-js-fb8d1e4ce9daeb231cea.js.map