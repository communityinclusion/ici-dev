(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"2vHB":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i=r(a("pVnL")),l=r(a("q1tI")),n=r(a("JHR5")),s=r(a("LCnF")),u=a("m81S"),o="/home/circleci/project/src/components/Breadcrumb.js",c=function(e){return l.default.useContext(u.OptionsContext).useAutoGen?l.default.createElement(n.default,(0,i.default)({},e,{__source:{fileName:o,lineNumber:12},__self:this})):l.default.createElement(s.default,(0,i.default)({},e,{__source:{fileName:o,lineNumber:14},__self:this}))};t.default=c},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,l=r(a("PJYZ")),n=r(a("VbXa")),s=r(a("8OQS")),u=r(a("pVnL")),o=r(a("q1tI")),c=r(a("17x9")),d=function(e){var t=(0,u.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=y([].concat(t.fluid))),t.fixed&&(t.fixed=y([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},m=Object.create({}),p=function(e){var t=d(e),a=f(t);return m[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,g="undefined"!=typeof window,h=g&&window.IntersectionObserver,S=new WeakMap;function v(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,l=e.sizes;return o.default.createElement(o.default.Fragment,{key:t},r&&o.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:l}),o.default.createElement("source",{media:i,srcSet:a,sizes:l}))}))}function y(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function _(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return o.default.createElement("source",{key:t,media:a,srcSet:r})}))}function E(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return o.default.createElement("source",{key:t,media:a,srcSet:r})}))}function N(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,l=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(l?'sizes="'+l+'" ':"")+"/>"}var L=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},C=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",l=e.alt?'alt="'+e.alt+'" ':'alt="" ',n=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",u=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",o=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?N(e,!0):"")+N(e)})).join("")+"<img "+o+n+s+a+r+t+l+i+u+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},w=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,l=o.default.createElement(R,(0,u.default)({src:t},i));return a.length>1?o.default.createElement("picture",null,r(a),l):l},R=o.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,l=e.style,n=e.onLoad,c=e.onError,d=e.loading,f=e.draggable,m=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return o.default.createElement("img",(0,u.default)({sizes:a,srcSet:r,src:i},m,{onLoad:n,onError:c,ref:t,loading:d,draggable:f,style:(0,u.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},l)}))}));R.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var I=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=g&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&h&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||g&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=o.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,l.default)(a)),a.handleRef=a.handleRef.bind((0,l.default)(a)),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=d(e),a=f(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=d(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,l=void 0===i?{}:i,n=e.imgStyle,s=void 0===n?{}:n,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,p=e.fluid,b=e.fixed,g=e.backgroundColor,h=e.durationFadeIn,S=e.Tag,y=e.itemProp,N=e.loading,L=e.draggable,I=!1===this.state.fadeIn||this.state.imgLoaded,k=!0===this.state.fadeIn&&!this.state.imgCached,O=(0,u.default)({opacity:I?1:0,transition:k?"opacity "+h+"ms":"none"},s),x="boolean"==typeof g?"lightgray":g,z={transitionDelay:h+"ms"},B=(0,u.default)({opacity:this.state.imgLoaded?0:1},k&&z,{},s,{},f),q={title:t,alt:this.state.isVisible?"":a,style:B,className:m,itemProp:y};if(p){var V=p,P=V[0];return o.default.createElement(S,{className:(r||"")+" gatsby-image-wrapper",style:(0,u.default)({position:"relative",overflow:"hidden"},l),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},o.default.createElement(S,{style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),x&&o.default.createElement(S,{title:t,style:(0,u.default)({backgroundColor:x,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},k&&z)}),P.base64&&o.default.createElement(w,{src:P.base64,spreadProps:q,imageVariants:V,generateSources:E}),P.tracedSVG&&o.default.createElement(w,{src:P.tracedSVG,spreadProps:q,imageVariants:V,generateSources:_}),this.state.isVisible&&o.default.createElement("picture",null,v(V),o.default.createElement(R,{alt:a,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:N,draggable:L})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,u.default)({alt:a,title:t,loading:N},P,{imageVariants:V}))}}))}if(b){var T=b,W=T[0],j=(0,u.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},l);return"inherit"===l.display&&delete j.display,o.default.createElement(S,{className:(r||"")+" gatsby-image-wrapper",style:j,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},x&&o.default.createElement(S,{title:t,style:(0,u.default)({backgroundColor:x,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},k&&z)}),W.base64&&o.default.createElement(w,{src:W.base64,spreadProps:q,imageVariants:T,generateSources:E}),W.tracedSVG&&o.default.createElement(w,{src:W.tracedSVG,spreadProps:q,imageVariants:T,generateSources:_}),this.state.isVisible&&o.default.createElement("picture",null,v(T),o.default.createElement(R,{alt:a,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:N,draggable:L})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,u.default)({alt:a,title:t,loading:N},W,{imageVariants:T}))}}))}return null},t}(o.default.Component);I.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var k=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),O=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});I.propTypes={resolutions:k,sizes:O,fixed:c.default.oneOfType([k,c.default.arrayOf(k)]),fluid:c.default.oneOfType([O,c.default.arrayOf(O)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var x=I;t.default=x},JHR5:function(e,t,a){"use strict";a("Z2Ku"),a("L9s1");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i=r(a("pVnL")),l=r(a("8OQS")),n=r(a("q1tI")),s=r(a("17x9")),u=a("Wbzz"),o=a("m81S"),c="/home/circleci/project/src/components/auto-gen-crumb.js",d=function(e){var t=e.title,a=void 0===t?"":t,r=e.crumbSeparator,s=e.crumbWrapperStyle,d=e.crumbActiveStyle,f=e.crumbStyle,m=e.crumbs,p=e.crumbLabel,b=void 0===p?null:p,g=e.disableLinks,h=e.hiddenCrumbs,S=(0,l.default)(e,["title","crumbSeparator","crumbWrapperStyle","crumbActiveStyle","crumbStyle","crumbs","crumbLabel","disableLinks","hiddenCrumbs"]),v=n.default.useContext(o.OptionsContext).useClassNames;return n.default.createElement("div",{__source:{fileName:c,lineNumber:23},__self:this},n.default.createElement("span",{className:"breadcrumb__title",__source:{fileName:c,lineNumber:24},__self:this},a),m.map((function(e,t){return h.includes(e.pathname)?null:n.default.createElement("div",{className:"breadcrumb",style:v?null:(0,i.default)({display:"inline"},s),key:t,__source:{fileName:c,lineNumber:30},__self:this},!g.includes(e.pathname)&&n.default.createElement(u.Link,(0,i.default)({to:e.pathname,style:v?null:(0,i.default)({textDecoration:"none",fontSize:"16pt",color:"#e1e1e1"},f),activeStyle:v?null:(0,i.default)({color:"white"},d),className:"breadcrumb__link",activeClassName:v?"breadcrumb__link__active":null},S,{__source:{fileName:c,lineNumber:38},__self:this}),b&&t===m.length-1?b:e.crumbLabel),g.includes(e.pathname)&&n.default.createElement("span",(0,i.default)({style:v?null:(0,i.default)({textDecoration:"none",fontSize:"16pt",color:"#e1e1e1"},f),className:"breadcrumb__link__disabled"},S,{__source:{fileName:c,lineNumber:70},__self:this}),b&&t===m.length-1?b:e.crumbLabel),n.default.createElement("span",{className:"breadcrumb__separator",style:v?null:(0,i.default)({fontSize:"16pt"},f),__source:{fileName:c,lineNumber:89},__self:this},t===m.length-1?null:r))})))};d.defaultProps={title:"",crumbSeparator:" / ",crumbWrapperStyle:{},crumbStyle:{},crumbActiveStyle:{},crumbLabel:null,disableLinks:[],hiddenCrumbs:[]},d.propTypes={title:s.default.string,crumbSeparator:s.default.string,crumbWrapperStyle:s.default.shape(),crumbActiveStyle:s.default.shape(),crumbStyle:s.default.shape(),crumbs:s.default.arrayOf(s.default.shape({location:s.default.shape(),pathname:s.default.string.isRequired})).isRequired,crumbLabel:s.default.string,disableLinks:s.default.arrayOf(s.default.string),hiddenCrumbs:s.default.arrayOf(s.default.string)};var f=d;t.default=f},LCnF:function(e,t,a){"use strict";a("Oyvg"),a("pIFo");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i=r(a("pVnL")),l=r(a("8OQS")),n=r(a("q1tI")),s=r(a("17x9")),u=a("Wbzz"),o=a("m81S"),c=r(a("q/3z")),d="/home/circleci/project/src/components/click-tracking-crumb.js",f=function(e){var t=e.title,a=e.location,r=e.crumbLabel,s=e.crumbSeparator,f=e.crumbWrapperStyle,m=e.crumbActiveStyle,p=e.crumbStyle,b=(0,l.default)(e,["title","location","crumbLabel","crumbSeparator","crumbWrapperStyle","crumbActiveStyle","crumbStyle"]),g=n.default.useContext(o.OptionsContext),h=g.useClassNames,S=g.usePathPrefix,v=(0,c.default)({location:(0,i.default)({},a,{pathname:S?a.pathname.replace(new RegExp("^"+S),""):a.pathname}),crumbLabel:r,crumbSeparator:s,crumbStyle:p,crumbActiveStyle:m}).crumbs,y=void 0===v?[]:v;return n.default.createElement("div",{__source:{fileName:d,lineNumber:37},__self:this},n.default.createElement("span",{className:"breadcrumb__title",__source:{fileName:d,lineNumber:38},__self:this},t),y.map((function(e,t){return n.default.createElement("div",{className:"breadcrumb",style:h?null:(0,i.default)({display:"inline"},f),key:t,__source:{fileName:d,lineNumber:41},__self:this},n.default.createElement(u.Link,(0,i.default)({to:e.pathname||"",style:h?null:(0,i.default)({textDecoration:"none",fontSize:"16pt",color:"#e1e1e1"},e.crumbStyle),activeStyle:h?null:(0,i.default)({color:"white"},m),className:"breadcrumb__link",activeClassName:h?"breadcrumb__link__active":null},b,{__source:{fileName:d,lineNumber:48},__self:this}),e.crumbLabel),n.default.createElement("span",{className:"breadcrumb__separator",style:h?null:(0,i.default)({fontSize:"16pt"},e.crumbStyle),__source:{fileName:d,lineNumber:76},__self:this},t===y.length-1?null:e.crumbSeparator))})))};f.defaultProps={title:"",crumbSeparator:" / ",crumbWrapperStyle:{},crumbStyle:{},crumbActiveStyle:{}},f.propTypes={location:s.default.shape().isRequired,crumbLabel:s.default.string.isRequired,title:s.default.string,crumbSeparator:s.default.string,crumbWrapperStyle:s.default.shape(),crumbActiveStyle:s.default.shape(),crumbStyle:s.default.shape()};var m=f;t.default=m},SsCC:function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0;var i=r(a("2vHB"));t.Breadcrumb=i.default;var l=r(a("JHR5"));t.AutoGenCrumb=l.default;var n=r(a("bAhf"));t.SitemapCrumbs=n.default;var s=a("iHlK");t.BreadcrumbContext=s.BreadcrumbContext,t.BreadcrumbConsumer=s.BreadcrumbConsumer,t.BreadcrumbProvider=s.BreadcrumbProvider;var u=r(a("q/3z"));t.useBreadcrumb=u.default},bAhf:function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i=r(a("pVnL")),l=r(a("q1tI")),n=r(a("JHR5")),s=function(e){return console.warn("Warning: <SitemapCrumbs /> has been deprecated.  Please update your code to use <Breadcrumb /> component. See docs https://github.com/sbardian/gatsby-plugin-breadcrumb for details."),l.default.createElement(n.default,(0,i.default)({},e,{__source:{fileName:"/home/circleci/project/src/components/sitemap-crumbs.js",lineNumber:11},__self:this}))};t.default=s},bSK8:function(e,t,a){"use strict";t.__esModule=!0;var r=a("SsCC");t.Breadcrumb=r.Breadcrumb,t.BreadcrumbContext=r.BreadcrumbContext,t.BreadcrumbConsumer=r.BreadcrumbConsumer,t.BreadcrumbProvider=r.BreadcrumbProvider,t.useBreadcrumb=r.useBreadcrumb,t.SitemapCrumbs=r.SitemapCrumbs,t.AutoGenCrumb=r.AutoGenCrumb},n8kQ:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return d}));a("XfO3"),a("HEwt"),a("0mN4"),a("a1Th"),a("Btvt");var r=a("q1tI"),i=a.n(r),l=a("Wbzz"),n=a("Bl7J"),s=a("9eSz"),u=a.n(s),o=a("vrFN"),c=a("bSK8");t.default=function(e){var t=e.data,a=e.pageContext,r=(e.location,t.allMarkdownRemark.edges),s=a.currentPage,d=a.numPages,f=a.breadcrumb.crumbs,m=1===s,p=s===d,b=s-1==1?"news/":"news/"+(s-1).toString(),g="news/"+(s+1).toString();return i.a.createElement(n.a,null,i.a.createElement(o.a,{title:"New at ICI"}),i.a.createElement("section",{className:"center mw8"},i.a.createElement("div",{className:"breadcrumbs"},i.a.createElement(c.Breadcrumb,{crumbs:f,crumbSeparator:" / ",crumbLabel:"News"})),i.a.createElement("h1",null,"New at ICI"),i.a.createElement("div",{className:"post-list"},r.map((function(e){return i.a.createElement("div",{key:e.node.id,className:"post-list__item"},i.a.createElement("div",{className:"post-list__thumbnail"},i.a.createElement(l.Link,{to:e.node.fields.slug},i.a.createElement(u.a,{fixed:e.node.frontmatter.thumbnail.childImageSharp.fixed}))),i.a.createElement("div",{className:"post-list__content"},i.a.createElement("h2",null,e.node.frontmatter.title),i.a.createElement("p",null,e.node.frontmatter.date),i.a.createElement("div",{className:"post-list__excerpt"},i.a.createElement("p",null,e.node.excerpt)),i.a.createElement(l.Link,{className:"button button--small",to:e.node.fields.slug},"Read More")))}))),i.a.createElement("div",{className:"page-navigation"},!m&&i.a.createElement(l.Link,{to:b,rel:"prev"},"← Previous Page"),Array.from({length:d},(function(e,t){return i.a.createElement(l.Link,{key:"pagination-number"+(t+1),to:"news/"+(0===t?"":t+1)},t+1)})),!p&&i.a.createElement(l.Link,{to:g,rel:"next"},"Next Page →"))))};var d="3507657072"},"q/3z":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i=r(a("q1tI")),l=a("iHlK"),n=function(e){var t=e.location,a=e.crumbLabel,r=e.crumbSeparator,n=e.crumbStyle,s=void 0===n?{}:n,u=e.crumbActiveStyle,o=void 0===u?{}:u,c=i.default.useContext(l.BreadcrumbContext),d=c.crumbs,f=c.updateCrumbs;return i.default.useEffect((function(){f({location:t,crumbLabel:a,crumbSeparator:r,crumbStyle:s,crumbActiveStyle:o})}),[t,a,r,s,o,f]),{crumbs:d}};t.default=n}}]);
//# sourceMappingURL=component---src-templates-post-list-template-js-868d1b4f9e47ffe2cc63.js.map