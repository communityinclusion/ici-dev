(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"2vHB":function(e,t,r){"use strict";var a=r("TqRt");t.__esModule=!0,t.default=void 0;var l=a(r("pVnL")),u=a(r("q1tI")),c=a(r("JHR5")),n=a(r("LCnF")),m=r("m81S"),s="/home/circleci/project/src/components/Breadcrumb.js",i=function(e){return u.default.useContext(m.OptionsContext).useAutoGen?u.default.createElement(c.default,(0,l.default)({},e,{__source:{fileName:s,lineNumber:12},__self:this})):u.default.createElement(n.default,(0,l.default)({},e,{__source:{fileName:s,lineNumber:14},__self:this}))};t.default=i},JHR5:function(e,t,r){"use strict";r("gu/5"),r("eoYm");var a=r("TqRt");t.__esModule=!0,t.default=void 0;var l=a(r("pVnL")),u=a(r("8OQS")),c=a(r("q1tI")),n=a(r("17x9")),m=r("Wbzz"),s=r("m81S"),i="/home/circleci/project/src/components/auto-gen-crumb.js",d=function(e){var t=e.title,r=void 0===t?"":t,a=e.crumbSeparator,n=e.crumbWrapperStyle,d=e.crumbActiveStyle,b=e.crumbStyle,o=e.crumbs,f=e.crumbLabel,p=void 0===f?null:f,_=e.disableLinks,S=e.hiddenCrumbs,v=(0,u.default)(e,["title","crumbSeparator","crumbWrapperStyle","crumbActiveStyle","crumbStyle","crumbs","crumbLabel","disableLinks","hiddenCrumbs"]),h=c.default.useContext(s.OptionsContext).useClassNames;return c.default.createElement("div",{__source:{fileName:i,lineNumber:23},__self:this},c.default.createElement("span",{className:"breadcrumb__title",__source:{fileName:i,lineNumber:24},__self:this},r),o.map((function(e,t){return S.includes(e.pathname)?null:c.default.createElement("div",{className:"breadcrumb",style:h?null:(0,l.default)({display:"inline"},n),key:t,__source:{fileName:i,lineNumber:30},__self:this},!_.includes(e.pathname)&&c.default.createElement(m.Link,(0,l.default)({to:e.pathname,style:h?null:(0,l.default)({textDecoration:"none",fontSize:"16pt",color:"#e1e1e1"},b),activeStyle:h?null:(0,l.default)({color:"white"},d),className:"breadcrumb__link",activeClassName:h?"breadcrumb__link__active":null},v,{__source:{fileName:i,lineNumber:38},__self:this}),p&&t===o.length-1?p:e.crumbLabel),_.includes(e.pathname)&&c.default.createElement("span",(0,l.default)({style:h?null:(0,l.default)({textDecoration:"none",fontSize:"16pt",color:"#e1e1e1"},b),className:"breadcrumb__link__disabled"},v,{__source:{fileName:i,lineNumber:70},__self:this}),p&&t===o.length-1?p:e.crumbLabel),c.default.createElement("span",{className:"breadcrumb__separator",style:h?null:(0,l.default)({fontSize:"16pt"},b),__source:{fileName:i,lineNumber:89},__self:this},t===o.length-1?null:a))})))};d.defaultProps={title:"",crumbSeparator:" / ",crumbWrapperStyle:{},crumbStyle:{},crumbActiveStyle:{},crumbLabel:null,disableLinks:[],hiddenCrumbs:[]},d.propTypes={title:n.default.string,crumbSeparator:n.default.string,crumbWrapperStyle:n.default.shape(),crumbActiveStyle:n.default.shape(),crumbStyle:n.default.shape(),crumbs:n.default.arrayOf(n.default.shape({location:n.default.shape(),pathname:n.default.string.isRequired})).isRequired,crumbLabel:n.default.string,disableLinks:n.default.arrayOf(n.default.string),hiddenCrumbs:n.default.arrayOf(n.default.string)};var b=d;t.default=b},LA6i:function(e,t,r){"use strict";r.r(t),r.d(t,"pageQuery",(function(){return m}));var a=r("q1tI"),l=r.n(a),u=r("Bl7J"),c=r("vrFN"),n=r("bSK8");t.default=function(e){var t=e.pageContext,r=e.data,a=(e.location,t.breadcrumb.crumbs),m=r.markdownRemark,s=r.markdownRemark,i=s.frontmatter,d=s.html;return l.a.createElement(u.a,null,l.a.createElement(c.a,{title:""}),l.a.createElement("section",{className:"mw8 center ph2-ns"},l.a.createElement("div",{className:"breadcrumbs"},l.a.createElement(n.Breadcrumb,{crumbs:a,crumbSeparator:" / ",crumbLabel:m.frontmatter.title})),l.a.createElement("div",null,l.a.createElement("h1",null,i.title),l.a.createElement("span",null,i.date)),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:d}})))};var m="3104431115"},LCnF:function(e,t,r){"use strict";r("klQ5"),r("sC2a");var a=r("TqRt");t.__esModule=!0,t.default=void 0;var l=a(r("pVnL")),u=a(r("8OQS")),c=a(r("q1tI")),n=a(r("17x9")),m=r("Wbzz"),s=r("m81S"),i=a(r("q/3z")),d="/home/circleci/project/src/components/click-tracking-crumb.js",b=function(e){var t=e.title,r=e.location,a=e.crumbLabel,n=e.crumbSeparator,b=e.crumbWrapperStyle,o=e.crumbActiveStyle,f=e.crumbStyle,p=(0,u.default)(e,["title","location","crumbLabel","crumbSeparator","crumbWrapperStyle","crumbActiveStyle","crumbStyle"]),_=c.default.useContext(s.OptionsContext),S=_.useClassNames,v=_.usePathPrefix,h=(0,i.default)({location:(0,l.default)({},r,{pathname:v?r.pathname.replace(new RegExp("^"+v),""):r.pathname}),crumbLabel:a,crumbSeparator:n,crumbStyle:f,crumbActiveStyle:o}).crumbs,y=void 0===h?[]:h;return c.default.createElement("div",{__source:{fileName:d,lineNumber:37},__self:this},c.default.createElement("span",{className:"breadcrumb__title",__source:{fileName:d,lineNumber:38},__self:this},t),y.map((function(e,t){return c.default.createElement("div",{className:"breadcrumb",style:S?null:(0,l.default)({display:"inline"},b),key:t,__source:{fileName:d,lineNumber:41},__self:this},c.default.createElement(m.Link,(0,l.default)({to:e.pathname||"",style:S?null:(0,l.default)({textDecoration:"none",fontSize:"16pt",color:"#e1e1e1"},e.crumbStyle),activeStyle:S?null:(0,l.default)({color:"white"},o),className:"breadcrumb__link",activeClassName:S?"breadcrumb__link__active":null},p,{__source:{fileName:d,lineNumber:48},__self:this}),e.crumbLabel),c.default.createElement("span",{className:"breadcrumb__separator",style:S?null:(0,l.default)({fontSize:"16pt"},e.crumbStyle),__source:{fileName:d,lineNumber:76},__self:this},t===y.length-1?null:e.crumbSeparator))})))};b.defaultProps={title:"",crumbSeparator:" / ",crumbWrapperStyle:{},crumbStyle:{},crumbActiveStyle:{}},b.propTypes={location:n.default.shape().isRequired,crumbLabel:n.default.string.isRequired,title:n.default.string,crumbSeparator:n.default.string,crumbWrapperStyle:n.default.shape(),crumbActiveStyle:n.default.shape(),crumbStyle:n.default.shape()};var o=b;t.default=o},SsCC:function(e,t,r){"use strict";var a=r("TqRt");t.__esModule=!0;var l=a(r("2vHB"));t.Breadcrumb=l.default;var u=a(r("JHR5"));t.AutoGenCrumb=u.default;var c=a(r("bAhf"));t.SitemapCrumbs=c.default;var n=r("iHlK");t.BreadcrumbContext=n.BreadcrumbContext,t.BreadcrumbConsumer=n.BreadcrumbConsumer,t.BreadcrumbProvider=n.BreadcrumbProvider;var m=a(r("q/3z"));t.useBreadcrumb=m.default},bAhf:function(e,t,r){"use strict";var a=r("TqRt");t.__esModule=!0,t.default=void 0;var l=a(r("pVnL")),u=a(r("q1tI")),c=a(r("JHR5")),n=function(e){return console.warn("Warning: <SitemapCrumbs /> has been deprecated.  Please update your code to use <Breadcrumb /> component. See docs https://github.com/sbardian/gatsby-plugin-breadcrumb for details."),u.default.createElement(c.default,(0,l.default)({},e,{__source:{fileName:"/home/circleci/project/src/components/sitemap-crumbs.js",lineNumber:11},__self:this}))};t.default=n},bSK8:function(e,t,r){"use strict";t.__esModule=!0;var a=r("SsCC");t.Breadcrumb=a.Breadcrumb,t.BreadcrumbContext=a.BreadcrumbContext,t.BreadcrumbConsumer=a.BreadcrumbConsumer,t.BreadcrumbProvider=a.BreadcrumbProvider,t.useBreadcrumb=a.useBreadcrumb,t.SitemapCrumbs=a.SitemapCrumbs,t.AutoGenCrumb=a.AutoGenCrumb},"q/3z":function(e,t,r){"use strict";var a=r("TqRt");t.__esModule=!0,t.default=void 0;var l=a(r("q1tI")),u=r("iHlK"),c=function(e){var t=e.location,r=e.crumbLabel,a=e.crumbSeparator,c=e.crumbStyle,n=void 0===c?{}:c,m=e.crumbActiveStyle,s=void 0===m?{}:m,i=l.default.useContext(u.BreadcrumbContext),d=i.crumbs,b=i.updateCrumbs;return l.default.useEffect((function(){b({location:t,crumbLabel:r,crumbSeparator:a,crumbStyle:n,crumbActiveStyle:s})}),[t,r,a,n,s,b]),{crumbs:d}};t.default=c}}]);
//# sourceMappingURL=component---src-templates-page-template-js-da8b9dfb8d9361387be1.js.map