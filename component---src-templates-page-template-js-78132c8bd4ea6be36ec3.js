(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"2vHB":function(e,t,r){"use strict";var a=r("5NKs");t.__esModule=!0,t.default=void 0;var u=a(r("j8BX")),l=a(r("q1tI")),c=a(r("JHR5")),n=a(r("LCnF")),s=r("m81S"),m="/home/circleci/project/src/components/Breadcrumb.js",i=function(e){return l.default.useContext(s.OptionsContext).useAutoGen?l.default.createElement(c.default,(0,u.default)({},e,{__source:{fileName:m,lineNumber:12},__self:this})):l.default.createElement(n.default,(0,u.default)({},e,{__source:{fileName:m,lineNumber:14},__self:this}))};t.default=i},JHR5:function(e,t,r){"use strict";r("Z2Ku"),r("L9s1");var a=r("5NKs");t.__esModule=!0,t.default=void 0;var u=a(r("j8BX")),l=a(r("uDP2")),c=a(r("q1tI")),n=a(r("17x9")),s=r("Wbzz"),m=r("m81S"),i="/home/circleci/project/src/components/auto-gen-crumb.js",d=function(e){var t=e.title,r=void 0===t?"":t,a=e.crumbSeparator,n=e.crumbWrapperStyle,d=e.crumbActiveStyle,b=e.crumbStyle,o=e.crumbs,f=e.crumbLabel,p=void 0===f?null:f,_=e.disableLinks,v=e.hiddenCrumbs,S=(0,l.default)(e,["title","crumbSeparator","crumbWrapperStyle","crumbActiveStyle","crumbStyle","crumbs","crumbLabel","disableLinks","hiddenCrumbs"]),h=c.default.useContext(m.OptionsContext).useClassNames;return c.default.createElement("div",{__source:{fileName:i,lineNumber:23},__self:this},c.default.createElement("span",{className:"breadcrumb__title",__source:{fileName:i,lineNumber:24},__self:this},r),o.map((function(e,t){return v.includes(e.pathname)?null:c.default.createElement("div",{className:"breadcrumb",style:h?null:(0,u.default)({display:"inline"},n),key:t,__source:{fileName:i,lineNumber:30},__self:this},!_.includes(e.pathname)&&c.default.createElement(s.Link,(0,u.default)({to:e.pathname,style:h?null:(0,u.default)({textDecoration:"none",fontSize:"16pt",color:"#e1e1e1"},b),activeStyle:h?null:(0,u.default)({color:"white"},d),className:"breadcrumb__link",activeClassName:h?"breadcrumb__link__active":null},S,{__source:{fileName:i,lineNumber:38},__self:this}),p&&t===o.length-1?p:e.crumbLabel),_.includes(e.pathname)&&c.default.createElement("span",(0,u.default)({style:h?null:(0,u.default)({textDecoration:"none",fontSize:"16pt",color:"#e1e1e1"},b),className:"breadcrumb__link__disabled"},S,{__source:{fileName:i,lineNumber:70},__self:this}),p&&t===o.length-1?p:e.crumbLabel),c.default.createElement("span",{className:"breadcrumb__separator",style:h?null:(0,u.default)({fontSize:"16pt"},b),__source:{fileName:i,lineNumber:89},__self:this},t===o.length-1?null:a))})))};d.defaultProps={title:"",crumbSeparator:" / ",crumbWrapperStyle:{},crumbStyle:{},crumbActiveStyle:{},crumbLabel:null,disableLinks:[],hiddenCrumbs:[]},d.propTypes={title:n.default.string,crumbSeparator:n.default.string,crumbWrapperStyle:n.default.shape(),crumbActiveStyle:n.default.shape(),crumbStyle:n.default.shape(),crumbs:n.default.arrayOf(n.default.shape({location:n.default.shape(),pathname:n.default.string.isRequired})).isRequired,crumbLabel:n.default.string,disableLinks:n.default.arrayOf(n.default.string),hiddenCrumbs:n.default.arrayOf(n.default.string)};var b=d;t.default=b},LA6i:function(e,t,r){"use strict";r.r(t),r.d(t,"pageQuery",(function(){return s}));var a=r("q1tI"),u=r.n(a),l=r("Bl7J"),c=r("vrFN"),n=r("bSK8");t.default=function(e){var t=e.pageContext,r=e.data,a=(e.location,t.breadcrumb.crumbs),s=r.markdownRemark,m=r.markdownRemark,i=m.frontmatter,d=m.html;return u.a.createElement(l.a,null,u.a.createElement(c.a,{title:""}),u.a.createElement("section",{className:"mw8 center ph2-ns"},u.a.createElement("div",{className:"breadcrumbs"},u.a.createElement(n.Breadcrumb,{crumbs:a,crumbSeparator:" / ",crumbLabel:s.frontmatter.title})),u.a.createElement("div",{className:"page"},u.a.createElement("h1",null,i.title),u.a.createElement("span",null,i.date)),u.a.createElement("div",{dangerouslySetInnerHTML:{__html:d}})))};var s="3104431115"},LCnF:function(e,t,r){"use strict";r("Oyvg"),r("pIFo");var a=r("5NKs");t.__esModule=!0,t.default=void 0;var u=a(r("j8BX")),l=a(r("uDP2")),c=a(r("q1tI")),n=a(r("17x9")),s=r("Wbzz"),m=r("m81S"),i=a(r("q/3z")),d="/home/circleci/project/src/components/click-tracking-crumb.js",b=function(e){var t=e.title,r=e.location,a=e.crumbLabel,n=e.crumbSeparator,b=e.crumbWrapperStyle,o=e.crumbActiveStyle,f=e.crumbStyle,p=(0,l.default)(e,["title","location","crumbLabel","crumbSeparator","crumbWrapperStyle","crumbActiveStyle","crumbStyle"]),_=c.default.useContext(m.OptionsContext),v=_.useClassNames,S=_.usePathPrefix,h=(0,i.default)({location:(0,u.default)({},r,{pathname:S?r.pathname.replace(new RegExp("^"+S),""):r.pathname}),crumbLabel:a,crumbSeparator:n,crumbStyle:f,crumbActiveStyle:o}).crumbs,y=void 0===h?[]:h;return c.default.createElement("div",{__source:{fileName:d,lineNumber:37},__self:this},c.default.createElement("span",{className:"breadcrumb__title",__source:{fileName:d,lineNumber:38},__self:this},t),y.map((function(e,t){return c.default.createElement("div",{className:"breadcrumb",style:v?null:(0,u.default)({display:"inline"},b),key:t,__source:{fileName:d,lineNumber:41},__self:this},c.default.createElement(s.Link,(0,u.default)({to:e.pathname||"",style:v?null:(0,u.default)({textDecoration:"none",fontSize:"16pt",color:"#e1e1e1"},e.crumbStyle),activeStyle:v?null:(0,u.default)({color:"white"},o),className:"breadcrumb__link",activeClassName:v?"breadcrumb__link__active":null},p,{__source:{fileName:d,lineNumber:48},__self:this}),e.crumbLabel),c.default.createElement("span",{className:"breadcrumb__separator",style:v?null:(0,u.default)({fontSize:"16pt"},e.crumbStyle),__source:{fileName:d,lineNumber:76},__self:this},t===y.length-1?null:e.crumbSeparator))})))};b.defaultProps={title:"",crumbSeparator:" / ",crumbWrapperStyle:{},crumbStyle:{},crumbActiveStyle:{}},b.propTypes={location:n.default.shape().isRequired,crumbLabel:n.default.string.isRequired,title:n.default.string,crumbSeparator:n.default.string,crumbWrapperStyle:n.default.shape(),crumbActiveStyle:n.default.shape(),crumbStyle:n.default.shape()};var o=b;t.default=o},SsCC:function(e,t,r){"use strict";var a=r("5NKs");t.__esModule=!0;var u=a(r("2vHB"));t.Breadcrumb=u.default;var l=a(r("JHR5"));t.AutoGenCrumb=l.default;var c=a(r("bAhf"));t.SitemapCrumbs=c.default;var n=r("iHlK");t.BreadcrumbContext=n.BreadcrumbContext,t.BreadcrumbConsumer=n.BreadcrumbConsumer,t.BreadcrumbProvider=n.BreadcrumbProvider;var s=a(r("q/3z"));t.useBreadcrumb=s.default},bAhf:function(e,t,r){"use strict";var a=r("5NKs");t.__esModule=!0,t.default=void 0;var u=a(r("j8BX")),l=a(r("q1tI")),c=a(r("JHR5")),n=function(e){return console.warn("Warning: <SitemapCrumbs /> has been deprecated.  Please update your code to use <Breadcrumb /> component. See docs https://github.com/sbardian/gatsby-plugin-breadcrumb for details."),l.default.createElement(c.default,(0,u.default)({},e,{__source:{fileName:"/home/circleci/project/src/components/sitemap-crumbs.js",lineNumber:11},__self:this}))};t.default=n},bSK8:function(e,t,r){"use strict";t.__esModule=!0;var a=r("SsCC");t.Breadcrumb=a.Breadcrumb,t.BreadcrumbContext=a.BreadcrumbContext,t.BreadcrumbConsumer=a.BreadcrumbConsumer,t.BreadcrumbProvider=a.BreadcrumbProvider,t.useBreadcrumb=a.useBreadcrumb,t.SitemapCrumbs=a.SitemapCrumbs,t.AutoGenCrumb=a.AutoGenCrumb},"q/3z":function(e,t,r){"use strict";var a=r("5NKs");t.__esModule=!0,t.default=void 0;var u=a(r("q1tI")),l=r("iHlK"),c=function(e){var t=e.location,r=e.crumbLabel,a=e.crumbSeparator,c=e.crumbStyle,n=void 0===c?{}:c,s=e.crumbActiveStyle,m=void 0===s?{}:s,i=u.default.useContext(l.BreadcrumbContext),d=i.crumbs,b=i.updateCrumbs;return u.default.useEffect((function(){b({location:t,crumbLabel:r,crumbSeparator:a,crumbStyle:n,crumbActiveStyle:m})}),[t,r,a,n,m,b]),{crumbs:d}};t.default=c}}]);
//# sourceMappingURL=component---src-templates-page-template-js-78132c8bd4ea6be36ec3.js.map