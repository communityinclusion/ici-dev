(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+E0D":function(e,a,t){e.exports=t.p+"static/healthcare-6abb14d5270662d381bd6ac4ed254a26.png"},"2vHB":function(e,a,t){"use strict";var l=t("TqRt");a.__esModule=!0,a.default=void 0;var r=l(t("pVnL")),c=l(t("q1tI")),s=l(t("JHR5")),n=l(t("LCnF")),u=t("m81S"),m="/home/circleci/project/src/components/Breadcrumb.js",i=function(e){return c.default.useContext(u.OptionsContext).useAutoGen?c.default.createElement(s.default,(0,r.default)({},e,{__source:{fileName:m,lineNumber:12},__self:this})):c.default.createElement(n.default,(0,r.default)({},e,{__source:{fileName:m,lineNumber:14},__self:this}))};a.default=i},C5ns:function(e,a,t){e.exports=t.p+"static/education-46c777fcb5e996e63e4bb967cbea0209.png"},FS20:function(e,a,t){e.exports=t.p+"static/community-6f34732b1371c80cd9dc22780f2318cb.png"},JHR5:function(e,a,t){"use strict";t("gu/5"),t("eoYm");var l=t("TqRt");a.__esModule=!0,a.default=void 0;var r=l(t("pVnL")),c=l(t("8OQS")),s=l(t("q1tI")),n=l(t("17x9")),u=t("Wbzz"),m=t("m81S"),i="/home/circleci/project/src/components/auto-gen-crumb.js",o=function(e){var a=e.title,t=void 0===a?"":a,l=e.crumbSeparator,n=e.crumbWrapperStyle,o=e.crumbActiveStyle,d=e.crumbStyle,b=e.crumbs,f=e.crumbLabel,p=void 0===f?null:f,h=e.disableLinks,v=e.hiddenCrumbs,_=(0,c.default)(e,["title","crumbSeparator","crumbWrapperStyle","crumbActiveStyle","crumbStyle","crumbs","crumbLabel","disableLinks","hiddenCrumbs"]),y=s.default.useContext(m.OptionsContext).useClassNames;return s.default.createElement("div",{__source:{fileName:i,lineNumber:23},__self:this},s.default.createElement("span",{className:"breadcrumb__title",__source:{fileName:i,lineNumber:24},__self:this},t),b.map((function(e,a){return v.includes(e.pathname)?null:s.default.createElement("div",{className:"breadcrumb",style:y?null:(0,r.default)({display:"inline"},n),key:a,__source:{fileName:i,lineNumber:30},__self:this},!h.includes(e.pathname)&&s.default.createElement(u.Link,(0,r.default)({to:e.pathname,style:y?null:(0,r.default)({textDecoration:"none",fontSize:"16pt",color:"#e1e1e1"},d),activeStyle:y?null:(0,r.default)({color:"white"},o),className:"breadcrumb__link",activeClassName:y?"breadcrumb__link__active":null},_,{__source:{fileName:i,lineNumber:38},__self:this}),p&&a===b.length-1?p:e.crumbLabel),h.includes(e.pathname)&&s.default.createElement("span",(0,r.default)({style:y?null:(0,r.default)({textDecoration:"none",fontSize:"16pt",color:"#e1e1e1"},d),className:"breadcrumb__link__disabled"},_,{__source:{fileName:i,lineNumber:70},__self:this}),p&&a===b.length-1?p:e.crumbLabel),s.default.createElement("span",{className:"breadcrumb__separator",style:y?null:(0,r.default)({fontSize:"16pt"},d),__source:{fileName:i,lineNumber:89},__self:this},a===b.length-1?null:l))})))};o.defaultProps={title:"",crumbSeparator:" / ",crumbWrapperStyle:{},crumbStyle:{},crumbActiveStyle:{},crumbLabel:null,disableLinks:[],hiddenCrumbs:[]},o.propTypes={title:n.default.string,crumbSeparator:n.default.string,crumbWrapperStyle:n.default.shape(),crumbActiveStyle:n.default.shape(),crumbStyle:n.default.shape(),crumbs:n.default.arrayOf(n.default.shape({location:n.default.shape(),pathname:n.default.string.isRequired})).isRequired,crumbLabel:n.default.string,disableLinks:n.default.arrayOf(n.default.string),hiddenCrumbs:n.default.arrayOf(n.default.string)};var d=o;a.default=d},LCnF:function(e,a,t){"use strict";t("klQ5"),t("sC2a");var l=t("TqRt");a.__esModule=!0,a.default=void 0;var r=l(t("pVnL")),c=l(t("8OQS")),s=l(t("q1tI")),n=l(t("17x9")),u=t("Wbzz"),m=t("m81S"),i=l(t("q/3z")),o="/home/circleci/project/src/components/click-tracking-crumb.js",d=function(e){var a=e.title,t=e.location,l=e.crumbLabel,n=e.crumbSeparator,d=e.crumbWrapperStyle,b=e.crumbActiveStyle,f=e.crumbStyle,p=(0,c.default)(e,["title","location","crumbLabel","crumbSeparator","crumbWrapperStyle","crumbActiveStyle","crumbStyle"]),h=s.default.useContext(m.OptionsContext),v=h.useClassNames,_=h.usePathPrefix,y=(0,i.default)({location:(0,r.default)({},t,{pathname:_?t.pathname.replace(new RegExp("^"+_),""):t.pathname}),crumbLabel:l,crumbSeparator:n,crumbStyle:f,crumbActiveStyle:b}).crumbs,N=void 0===y?[]:y;return s.default.createElement("div",{__source:{fileName:o,lineNumber:37},__self:this},s.default.createElement("span",{className:"breadcrumb__title",__source:{fileName:o,lineNumber:38},__self:this},a),N.map((function(e,a){return s.default.createElement("div",{className:"breadcrumb",style:v?null:(0,r.default)({display:"inline"},d),key:a,__source:{fileName:o,lineNumber:41},__self:this},s.default.createElement(u.Link,(0,r.default)({to:e.pathname||"",style:v?null:(0,r.default)({textDecoration:"none",fontSize:"16pt",color:"#e1e1e1"},e.crumbStyle),activeStyle:v?null:(0,r.default)({color:"white"},b),className:"breadcrumb__link",activeClassName:v?"breadcrumb__link__active":null},p,{__source:{fileName:o,lineNumber:48},__self:this}),e.crumbLabel),s.default.createElement("span",{className:"breadcrumb__separator",style:v?null:(0,r.default)({fontSize:"16pt"},e.crumbStyle),__source:{fileName:o,lineNumber:76},__self:this},a===N.length-1?null:e.crumbSeparator))})))};d.defaultProps={title:"",crumbSeparator:" / ",crumbWrapperStyle:{},crumbStyle:{},crumbActiveStyle:{}},d.propTypes={location:n.default.shape().isRequired,crumbLabel:n.default.string.isRequired,title:n.default.string,crumbSeparator:n.default.string,crumbWrapperStyle:n.default.shape(),crumbActiveStyle:n.default.shape(),crumbStyle:n.default.shape()};var b=d;a.default=b},SsCC:function(e,a,t){"use strict";var l=t("TqRt");a.__esModule=!0;var r=l(t("2vHB"));a.Breadcrumb=r.default;var c=l(t("JHR5"));a.AutoGenCrumb=c.default;var s=l(t("bAhf"));a.SitemapCrumbs=s.default;var n=t("iHlK");a.BreadcrumbContext=n.BreadcrumbContext,a.BreadcrumbConsumer=n.BreadcrumbConsumer,a.BreadcrumbProvider=n.BreadcrumbProvider;var u=l(t("q/3z"));a.useBreadcrumb=u.default},bAhf:function(e,a,t){"use strict";var l=t("TqRt");a.__esModule=!0,a.default=void 0;var r=l(t("pVnL")),c=l(t("q1tI")),s=l(t("JHR5")),n=function(e){return console.warn("Warning: <SitemapCrumbs /> has been deprecated.  Please update your code to use <Breadcrumb /> component. See docs https://github.com/sbardian/gatsby-plugin-breadcrumb for details."),c.default.createElement(s.default,(0,r.default)({},e,{__source:{fileName:"/home/circleci/project/src/components/sitemap-crumbs.js",lineNumber:11},__self:this}))};a.default=n},bSK8:function(e,a,t){"use strict";a.__esModule=!0;var l=t("SsCC");a.Breadcrumb=l.Breadcrumb,a.BreadcrumbContext=l.BreadcrumbContext,a.BreadcrumbConsumer=l.BreadcrumbConsumer,a.BreadcrumbProvider=l.BreadcrumbProvider,a.useBreadcrumb=l.useBreadcrumb,a.SitemapCrumbs=l.SitemapCrumbs,a.AutoGenCrumb=l.AutoGenCrumb},fe7A:function(e,a,t){"use strict";t.r(a);var l=t("q1tI"),r=t.n(l),c=t("Wbzz"),s=t("Bl7J"),n=t("vrFN"),u=t("FS20"),m=t.n(u),i=t("+E0D"),o=t.n(i),d=t("C5ns"),b=t.n(d),f=t("sgqd"),p=t.n(f),h=t("bSK8");a.default=function(e){var a=e.pageContext.breadcrumb.crumbs;return r.a.createElement(s.a,null,r.a.createElement("section",{className:"center mw8"},r.a.createElement(n.a,{title:"Areas of Emphasis"}),r.a.createElement("div",{className:"breadcrumbs"},r.a.createElement(h.Breadcrumb,{crumbs:a,crumbSeparator:" / "})),r.a.createElement("h1",null,"Areas of Emphasis"),r.a.createElement("div",{className:"flex-l w-100 nl2 nr2 center"},r.a.createElement("article",{className:"flex-1 bt bb b--black-10 shadow-4 ma3 pa3  w-90 "},r.a.createElement("div",{className:"flex flex-column flex-row-ns"},r.a.createElement("div",{className:"pr3-ns mb4  mb0-ns w-100 w-30-ns"},r.a.createElement("img",{src:p.a,className:"db",alt:"Employment"})),r.a.createElement("div",{className:"w-100 w-70-ns"},r.a.createElement(c.Link,{className:"link dt w-100 mt2 dim dark-blue",to:"/areas-of-emphasis/employment"},r.a.createElement("h2",{className:"f3 fw1 mt0 lh-copy bb bw2"},"Employment")),r.a.createElement("p",{className:"f6 f5-l mt0 lh-copy"},"Building a rewarding career in the community should be an expectation for all citizens. With support and planning, people with significant disabilities can thrive in the workplace.")))),r.a.createElement("article",{className:"flex-1 bt bb b--black-10 shadow-4 ma3 pa3  w-90"},r.a.createElement("div",{className:"flex flex-column flex-row-ns"},r.a.createElement("div",{className:"pr3-ns mb4  mb0-ns w-100 w-30-ns"},r.a.createElement("img",{src:b.a,className:"db",alt:"Education"})),r.a.createElement("div",{className:"w-100 w-70-ns"},r.a.createElement(c.Link,{to:"/areas-of-emphasis/education",className:"link dt w-100 mt2 dim dark-blue"},r.a.createElement("h2",{className:"f3 fw1 mt0 lh-copy bb bw2"},"Education")),r.a.createElement("p",{className:"f6 f5-l mt0 lh-copy"},"From pre-K through university, schools are engaging and involving students with a range of disabilities. By building skills early, young people can exit high school prepared to pursue higher education and find jobs that match their interests."))))),r.a.createElement("div",{className:"flex-l w-100 nl2 nr2 center"},r.a.createElement("article",{className:"flex-1 bt bb b--black-10 shadow-4 ma3 pa3 w-90"},r.a.createElement("div",{className:"flex flex-column flex-row-ns"},r.a.createElement("div",{className:"pr3-ns mb4  mb0-ns w-100 w-30-ns"},r.a.createElement("img",{src:m.a,className:"db",alt:"Community"})),r.a.createElement("div",{className:"w-100 w-70-ns"},r.a.createElement(c.Link,{className:"link dt w-100 mt2 dim dark-blue",to:"/areas-of-emphasis/community"},r.a.createElement("h2",{className:"f3 fw1 mt0 lh-copy bb bw2"},"Community")),r.a.createElement("p",{className:"f6 f5-l mt0 lh-copy"},"Outside of work and school, people with disabilities are involved in a wide range of activities that make up a satisfying life. Whether it’s volunteering at a music festival, getting involved with a faith community, or attending a sports event, there’s much more to life than a job.")))),r.a.createElement("article",{className:"flex-1 bt bb b--black-10 shadow-4 ma3 pa3  w-90"},r.a.createElement("div",{className:"flex flex-column flex-row-ns"},r.a.createElement("div",{className:"pr3-ns mb4  mb0-ns w-100 w-30-ns"},r.a.createElement("img",{src:o.a,className:"db",alt:"Healthcare"})),r.a.createElement("div",{className:"w-100 w-70-ns"},r.a.createElement(c.Link,{className:"link dt w-100 mt2 dim dark-blue",to:"/areas-of-emphasis/healthcare"},r.a.createElement("h2",{className:"f3 fw1 mt0 lh-copy bb bw2"}," Healthcare")),r.a.createElement("p",{className:"f6 f5-l mt0 lh-copy"},"Accessing quality health care enables us to live productively and to receive support when facing mental, behavioral, or physical challenges. For people with disabilities, equitable health care can require additional advocacy and planning. ")))))))}},"q/3z":function(e,a,t){"use strict";var l=t("TqRt");a.__esModule=!0,a.default=void 0;var r=l(t("q1tI")),c=t("iHlK"),s=function(e){var a=e.location,t=e.crumbLabel,l=e.crumbSeparator,s=e.crumbStyle,n=void 0===s?{}:s,u=e.crumbActiveStyle,m=void 0===u?{}:u,i=r.default.useContext(c.BreadcrumbContext),o=i.crumbs,d=i.updateCrumbs;return r.default.useEffect((function(){d({location:a,crumbLabel:t,crumbSeparator:l,crumbStyle:n,crumbActiveStyle:m})}),[a,t,l,n,m,d]),{crumbs:o}};a.default=s},sgqd:function(e,a,t){e.exports=t.p+"static/employment-a717f1cc29ff0f57bdfcf4189a73a682.png"}}]);
//# sourceMappingURL=component---src-pages-areas-of-emphasis-index-js-3ff8a1a0de07ee288271.js.map