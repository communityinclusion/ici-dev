(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"1/Ks":function(e,t,a){"use strict";a("EU/P")("trimLeft",(function(e){return function(){return e(this,1)}}),"trimStart")},"2vHB":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var u=r(a("q1tI")),n=r(a("JHR5")),l=r(a("LCnF")),i=a("m81S"),c=function(e){return u.default.useContext(i.OptionsContext).useAutoGen?u.default.createElement(n.default,e):u.default.createElement(l.default,e)};t.default=c},HQAx:function(e,t,a){"use strict";var r=a("P8UN"),u=a("ewoU"),n=a("DFzH"),l=a("kiRH"),i=a("nONw"),c=a("ytzU");r(r.P,"Array",{flatMap:function(e){var t,a,r=n(this);return i(e),t=l(r.length),a=c(r,0),u(a,r,r,t,0,1,e,arguments[1]),a}}),a("Dq1/")("flatMap")},I17o:function(e,t,a){"use strict";var r=a("P8UN"),u=a("pTxf"),n=a("CL53"),l=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n);r(r.P+r.F*l,"String",{padEnd:function(e){return u(this,e,arguments.length>1?arguments[1]:void 0,!1)}})},JHR5:function(e,t,a){"use strict";a("gu/5"),a("eoYm");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var u=r(a("pVnL")),n=r(a("8OQS")),l=r(a("q1tI")),i=r(a("17x9")),c=a("Wbzz"),d=function(e){var t=e.title,a=e.crumbs,r=e.crumbLabel,i=e.crumbSeparator,d=e.disableLinks,s=e.hiddenCrumbs,m=(0,n.default)(e,["title","crumbs","crumbLabel","crumbSeparator","disableLinks","hiddenCrumbs"]);return l.default.createElement(l.default.Fragment,null,t&&l.default.createElement("span",{className:"breadcrumb__title"},t),l.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},l.default.createElement("ol",{className:"breadcrumb__list"},a.map((function(e,t){return s.includes(e.pathname)?null:l.default.createElement(l.default.Fragment,{key:t+"-"+e.pathname},!d.includes(e.pathname)&&l.default.createElement("li",{className:"breadcrumb__list__item"},l.default.createElement(c.Link,(0,u.default)({to:e.pathname,className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":t===a.length-1?"page":null},m),r&&t===a.length-1?r:e.crumbLabel)),d.includes(e.pathname)&&l.default.createElement("li",{className:"breadcrumb__list__item"},l.default.createElement("span",(0,u.default)({className:"breadcrumb__link__disabled"},m),r&&t===a.length-1?r:e.crumbLabel)),t===a.length-1?null:l.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},i))})))))};d.defaultProps={title:"",crumbSeparator:" / ",crumbLabel:null,disableLinks:[],hiddenCrumbs:[]},d.propTypes={title:i.default.string,crumbSeparator:i.default.string,crumbs:i.default.arrayOf(i.default.shape({location:i.default.shape(),pathname:i.default.string.isRequired})).isRequired,crumbLabel:i.default.string,disableLinks:i.default.arrayOf(i.default.string),hiddenCrumbs:i.default.arrayOf(i.default.string)};var s=d;t.default=s},LCnF:function(e,t,a){"use strict";a("klQ5"),a("sC2a");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var u=r(a("pVnL")),n=r(a("8OQS")),l=r(a("q1tI")),i=r(a("17x9")),c=a("Wbzz"),d=a("m81S"),s=r(a("q/3z")),m=function(e){var t=e.title,a=e.location,r=e.crumbLabel,i=e.crumbSeparator,m=(0,n.default)(e,["title","location","crumbLabel","crumbSeparator"]),o=l.default.useContext(d.OptionsContext).usePathPrefix,b=(0,s.default)({location:(0,u.default)((0,u.default)({},a),{},{pathname:o?a.pathname.replace(new RegExp("^"+o),""):a.pathname}),crumbLabel:r,crumbSeparator:i}).crumbs,f=void 0===b?[]:b;return l.default.createElement(l.default.Fragment,null,t&&l.default.createElement("span",{className:"breadcrumb__title"},t),l.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},l.default.createElement("ol",{className:"breadcrumb__list"},f.map((function(e,t){return l.default.createElement("li",{className:"breadcrumb__item",key:t},l.default.createElement(c.Link,(0,u.default)({to:e.pathname||"",className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":t===f.length-1?"page":null},m),e.crumbLabel),t===f.length-1?null:l.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},e.crumbSeparator))})))))};m.defaultProps={title:"",crumbSeparator:" / "},m.propTypes={location:i.default.shape().isRequired,crumbLabel:i.default.string.isRequired,title:i.default.string,crumbSeparator:i.default.string};var o=m;t.default=o},"QzX/":function(e,t,a){"use strict";a("EU/P")("trimRight",(function(e){return function(){return e(this,2)}}),"trimEnd")},Rw9D:function(e,t,a){"use strict";var r=a("P8UN"),u=a("/+AL");r(r.P+r.F*!a("h/qr")([].reduceRight,!0),"Array",{reduceRight:function(e){return u(this,e,arguments.length,arguments[1],!0)}})},SsCC:function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0;var u=r(a("2vHB"));t.Breadcrumb=u.default;var n=r(a("JHR5"));t.AutoGenCrumb=n.default;var l=a("iHlK");t.BreadcrumbContext=l.BreadcrumbContext,t.BreadcrumbConsumer=l.BreadcrumbConsumer,t.BreadcrumbProvider=l.BreadcrumbProvider;var i=r(a("q/3z"));t.useBreadcrumb=i.default},YuTi:function(e,t,a){a("R48M"),e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},ZiRl:function(e,t,a){var r=a("P8UN");r(r.P,"String",{repeat:a("gd4K")})},bSK8:function(e,t,a){"use strict";t.__esModule=!0;var r=a("SsCC");t.Breadcrumb=r.Breadcrumb,t.BreadcrumbContext=r.BreadcrumbContext,t.BreadcrumbConsumer=r.BreadcrumbConsumer,t.BreadcrumbProvider=r.BreadcrumbProvider,t.useBreadcrumb=r.useBreadcrumb,t.AutoGenCrumb=r.AutoGenCrumb},enK5:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return s}));var r=a("q1tI"),u=a.n(r),n=a("Wbzz"),l=a("LvDl"),i=a("Bl7J"),c=a("vrFN"),d=a("bSK8");t.default=function(e){var t=e.data,a=e.pageContext,r=t.allMarkdownRemark.group,s=a.breadcrumb.crumbs;return u.a.createElement(i.a,null,u.a.createElement("section",{className:"center mw8"},u.a.createElement(c.a,{title:"Tags"}),u.a.createElement("div",{className:"breadcrumbs"},u.a.createElement(d.Breadcrumb,{crumbs:s,crumbSeparator:" / "})),u.a.createElement("div",null,u.a.createElement("h1",null,"Tags"),u.a.createElement("ul",null,r.map((function(e){return u.a.createElement("li",{key:e.fieldValue},u.a.createElement(n.Link,{to:"/tags/"+Object(l.kebabCase)(e.fieldValue)+"/"},e.fieldValue," (",e.totalCount,")"))}))))))};var s="2857054657"},ewoU:function(e,t,a){"use strict";var r=a("tuyV"),u=a("BjK0"),n=a("kiRH"),l=a("ot9L"),i=a("sOol")("isConcatSpreadable");e.exports=function e(t,a,c,d,s,m,o,b){for(var f,p,v=s,h=0,g=!!o&&l(o,b,3);h<d;){if(h in c){if(f=g?g(c[h],h,a):c[h],p=!1,u(f)&&(p=void 0!==(p=f[i])?!!p:r(f)),p&&m>0)v=e(t,a,f,n(f.length),v,m-1)-1;else{if(v>=9007199254740991)throw TypeError();t[v]=f}v++}h++}return v}},gd4K:function(e,t,a){"use strict";var r=a("1Llc"),u=a("ap2Z");e.exports=function(e){var t=String(u(this)),a="",n=r(e);if(n<0||n==1/0)throw RangeError("Count can't be negative");for(;n>0;(n>>>=1)&&(t+=t))1&n&&(a+=t);return a}},lizw:function(e,t,a){"use strict";var r=a("P8UN"),u=a("pTxf"),n=a("CL53"),l=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n);r(r.P+r.F*l,"String",{padStart:function(e){return u(this,e,arguments.length>1?arguments[1]:void 0,!0)}})},n0hJ:function(e,t,a){var r=a("P8UN");r(r.P,"Array",{fill:a("Y++M")}),a("Dq1/")("fill")},pTxf:function(e,t,a){var r=a("kiRH"),u=a("gd4K"),n=a("ap2Z");e.exports=function(e,t,a,l){var i=String(n(e)),c=i.length,d=void 0===a?" ":String(a),s=r(t);if(s<=c||""==d)return i;var m=s-c,o=u.call(d,Math.ceil(m/d.length));return o.length>m&&(o=o.slice(0,m)),l?o+i:i+o}},"q/3z":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var u=r(a("q1tI")),n=a("iHlK"),l=function(e){var t=e.location,a=e.crumbLabel,r=e.crumbSeparator,l=u.default.useContext(n.BreadcrumbContext),i=l.crumbs,c=l.updateCrumbs;return u.default.useEffect((function(){c({location:t,crumbLabel:a,crumbSeparator:r})}),[t,a,r,c]),{crumbs:i}};t.default=l}}]);
//# sourceMappingURL=component---src-pages-tags-js-d3c060e35fbb4c07cf4f.js.map