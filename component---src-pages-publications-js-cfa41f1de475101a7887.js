(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"2vHB":function(e,t,a){"use strict";var n=a("TqRt");t.__esModule=!0,t.default=void 0;var r=n(a("q1tI")),l=n(a("JHR5")),i=n(a("LCnF")),c=a("m81S"),o=function(e){return r.default.useContext(c.OptionsContext).useAutoGen?r.default.createElement(l.default,e):r.default.createElement(i.default,e)};t.default=o},"3B/x":function(e,t,a){e.exports=a.p+"static/Insight41_thumbnail-4d07fc1347f85f5295b4356c57d47a52.png"},"4IYq":function(e,t,a){"use strict";a.r(t),a.d(t,"IndexQuery",(function(){return _e}));var n=a("q1tI"),r=a.n(n),l=a("Bl7J"),i=a("vrFN"),c=a("Mjtc"),o=a.n(c),s=a("zCbE"),d=a.n(s),u=a("hzxk"),m=a.n(u),p=a("mzcf"),f=a.n(p),b=a("bY6l"),h=a.n(b),g=a("End3"),E=a.n(g),v=a("3B/x"),x=a.n(v),w=a("Qwuv"),y=a.n(w),N=a("aGdo"),_=a.n(N),C=a("4wN/"),A=a.n(C),I=a("tlNl"),k=a.n(I),S=a("yria"),T=a.n(S),O=a("obfa"),P=a.n(O),j=a("j8jT"),D=a.n(j),B=a("bSK8");a("YbXK"),a("cFtU"),a("q8oJ"),a("C9fy"),a("m210"),a("MIFh"),a("sc67"),a("LagC"),a("pS08"),a("JHok"),a("OeI1"),a("4DPX"),a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("E5k/"),a("R48M");function L(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function M(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function R(e,t,a){return t&&M(e.prototype,t),a&&M(e,a),e}function q(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function z(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Z(e,t)}function F(e){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Z(e,t){return(Z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function V(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function G(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function J(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?G(e):t}function Q(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var U=function e(t){var a=this,n=t.expanded,r=void 0===n?[]:n,l=t.allowMultipleExpanded,i=void 0!==l&&l,c=t.allowZeroExpanded,o=void 0!==c&&c;L(this,e),q(this,"expanded",void 0),q(this,"allowMultipleExpanded",void 0),q(this,"allowZeroExpanded",void 0),q(this,"toggleExpanded",(function(e){return a.isItemDisabled(e)?a:a.isItemExpanded(e)?a.augment({expanded:a.expanded.filter((function(t){return t!==e}))}):a.augment({expanded:a.allowMultipleExpanded?[].concat(Q(a.expanded),[e]):[e]})})),q(this,"isItemDisabled",(function(e){var t=a.isItemExpanded(e),n=1===a.expanded.length;return Boolean(t&&!a.allowZeroExpanded&&n)})),q(this,"isItemExpanded",(function(e){return-1!==a.expanded.indexOf(e)})),q(this,"getPanelAttributes",(function(e,t){var n=null!=t?t:a.isItemExpanded(e);return{role:a.allowMultipleExpanded?void 0:"region","aria-hidden":a.allowMultipleExpanded?!n:void 0,"aria-labelledby":a.getButtonId(e),id:a.getPanelId(e),hidden:!n||void 0}})),q(this,"getHeadingAttributes",(function(e){return{role:"heading"}})),q(this,"getButtonAttributes",(function(e,t){var n=null!=t?t:a.isItemExpanded(e),r=a.isItemDisabled(e);return{id:a.getButtonId(e),"aria-disabled":r,"aria-expanded":n,"aria-controls":a.getPanelId(e),role:"button",tabIndex:0}})),q(this,"getPanelId",(function(e){return"accordion__panel-".concat(e)})),q(this,"getButtonId",(function(e){return"accordion__heading-".concat(e)})),q(this,"augment",(function(t){return new e(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){q(e,t,a[t])}))}return e}({expanded:a.expanded,allowMultipleExpanded:a.allowMultipleExpanded,allowZeroExpanded:a.allowZeroExpanded},t))})),this.expanded=r,this.allowMultipleExpanded=i,this.allowZeroExpanded=o},W=Object(n.createContext)(null),Y=function(e){function t(){var e,a;L(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return q(G(a=J(this,(e=F(t)).call.apply(e,[this].concat(r)))),"state",new U({expanded:a.props.preExpanded,allowMultipleExpanded:a.props.allowMultipleExpanded,allowZeroExpanded:a.props.allowZeroExpanded})),q(G(a),"toggleExpanded",(function(e){a.setState((function(t){return t.toggleExpanded(e)}),(function(){a.props.onChange&&a.props.onChange(a.state.expanded)}))})),q(G(a),"isItemDisabled",(function(e){return a.state.isItemDisabled(e)})),q(G(a),"isItemExpanded",(function(e){return a.state.isItemExpanded(e)})),q(G(a),"getPanelAttributes",(function(e,t){return a.state.getPanelAttributes(e,t)})),q(G(a),"getHeadingAttributes",(function(e){return a.state.getHeadingAttributes(e)})),q(G(a),"getButtonAttributes",(function(e,t){return a.state.getButtonAttributes(e,t)})),a}return z(t,e),R(t,[{key:"render",value:function(){var e=this.state,t=e.allowZeroExpanded,a=e.allowMultipleExpanded;return Object(n.createElement)(W.Provider,{value:{allowMultipleExpanded:a,allowZeroExpanded:t,toggleExpanded:this.toggleExpanded,isItemDisabled:this.isItemDisabled,isItemExpanded:this.isItemExpanded,getPanelAttributes:this.getPanelAttributes,getHeadingAttributes:this.getHeadingAttributes,getButtonAttributes:this.getButtonAttributes}},this.props.children||null)}}]),t}(n.PureComponent);q(Y,"defaultProps",{allowMultipleExpanded:!1,allowZeroExpanded:!1});var K=function(e){function t(){var e,a;L(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return q(G(a=J(this,(e=F(t)).call.apply(e,[this].concat(r)))),"renderChildren",(function(e){return e?a.props.children(e):null})),a}return z(t,e),R(t,[{key:"render",value:function(){return Object(n.createElement)(W.Consumer,null,this.renderChildren)}}]),t}(n.PureComponent),X=function(e){var t=e.className,a=void 0===t?"accordion":t,r=e.allowMultipleExpanded,l=e.allowZeroExpanded,i=e.onChange,c=e.preExpanded,o=V(e,["className","allowMultipleExpanded","allowZeroExpanded","onChange","preExpanded"]);return Object(n.createElement)(Y,{preExpanded:c,allowMultipleExpanded:r,allowZeroExpanded:l,onChange:i},Object(n.createElement)("div",H({"data-accordion-component":"Accordion",className:a},o)))},$=0;var ee=/[\u0009\u000a\u000c\u000d\u0020]/g;function te(e){return""!==e&&!ee.test(e)||(console.error('uuid must be a valid HTML5 id but was given "'.concat(e,'", ASCII whitespaces are forbidden')),!1)}var ae=Object(n.createContext)(null),ne=function(e){function t(){var e,a;L(this,t);for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return q(G(a=J(this,(e=F(t)).call.apply(e,[this].concat(l)))),"toggleExpanded",(function(){a.props.accordionContext.toggleExpanded(a.props.uuid)})),q(G(a),"renderChildren",(function(e){var t=a.props,r=t.uuid,l=t.dangerouslySetExpanded,i=null!=l?l:e.isItemExpanded(r),c=e.isItemDisabled(r),o=e.getPanelAttributes(r,l),s=e.getHeadingAttributes(r),d=e.getButtonAttributes(r,l);return Object(n.createElement)(ae.Provider,{value:{uuid:r,expanded:i,disabled:c,toggleExpanded:a.toggleExpanded,panelAttributes:o,headingAttributes:s,buttonAttributes:d},children:a.props.children})})),a}return z(t,e),R(t,[{key:"render",value:function(){return Object(n.createElement)(K,null,this.renderChildren)}}]),t}(n.Component),re=function(e){return Object(n.createElement)(K,null,(function(t){return Object(n.createElement)(ne,H({},e,{accordionContext:t}))}))},le=function(e){function t(){var e,a;L(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return q(G(a=J(this,(e=F(t)).call.apply(e,[this].concat(r)))),"renderChildren",(function(e){return e?a.props.children(e):null})),a}return z(t,e),R(t,[{key:"render",value:function(){return Object(n.createElement)(ae.Consumer,null,this.renderChildren)}}]),t}(n.PureComponent),ie=function(e){var t,a=e.uuid,r=void 0===a?(t=$,$+=1,"raa-".concat(t)):a,l=e.className,i=void 0===l?"accordion__item":l,c=e.activeClassName,o=e.dangerouslySetExpanded,s=V(e,["uuid","className","activeClassName","dangerouslySetExpanded"]);return s.id&&te(s.id),Object(n.createElement)(re,{uuid:r,dangerouslySetExpanded:o},Object(n.createElement)(le,null,(function(e){var t=e.expanded&&c?c:i;return Object(n.createElement)("div",H({"data-accordion-component":"AccordionItem",className:t},s))})))};function ce(e){var t=function e(t){return t&&(t.matches('[data-accordion-component="Accordion"]')?t:e(t.parentElement))}(e);return t&&Array.from(t.querySelectorAll('[data-accordion-component="AccordionItemButton"]'))}var oe,se="40",de="35",ue="13",me="36",pe="37",fe="39",be="32",he="38",ge=function(e){var t=e.toggleExpanded,a=e.className,r=void 0===a?"accordion__button":a,l=V(e,["toggleExpanded","className"]);return l.id&&te(l.id),Object(n.createElement)("div",H({className:r},l,{onClick:t,onKeyDown:function(e){var a,n,r=e.which.toString();if(r!==ue&&r!==be||(e.preventDefault(),t()),e.target instanceof HTMLElement)switch(r){case me:e.preventDefault(),a=e.target,(n=(ce(a)||[])[0])&&n.focus();break;case de:e.preventDefault(),function(e){var t=ce(e)||[],a=t[t.length-1];a&&a.focus()}(e.target);break;case pe:case he:e.preventDefault(),function(e){var t=ce(e)||[],a=t.indexOf(e);if(-1!==a){var n=t[a-1];n&&n.focus()}}(e.target);break;case fe:case se:e.preventDefault(),function(e){var t=ce(e)||[],a=t.indexOf(e);if(-1!==a){var n=t[a+1];n&&n.focus()}}(e.target)}},"data-accordion-component":"AccordionItemButton"}))},Ee=function(e){return Object(n.createElement)(le,null,(function(t){var a=t.toggleExpanded,r=t.buttonAttributes;return Object(n.createElement)(ge,H({toggleExpanded:a},e,r))}))};!function(e){e.Accordion="Accordion",e.AccordionItem="AccordionItem",e.AccordionItemButton="AccordionItemButton",e.AccordionItemHeading="AccordionItemHeading",e.AccordionItemPanel="AccordionItemPanel"}(oe||(oe={}));var ve=oe,xe=function(e){function t(){var e,a;L(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return q(G(a=J(this,(e=F(t)).call.apply(e,[this].concat(r)))),"ref",void 0),q(G(a),"setRef",(function(e){a.ref=e})),a}return z(t,e),R(t,[{key:"componentDidUpdate",value:function(){t.VALIDATE(this.ref)}},{key:"componentDidMount",value:function(){t.VALIDATE(this.ref)}},{key:"render",value:function(){return Object(n.createElement)("div",H({"data-accordion-component":"AccordionItemHeading"},this.props,{ref:this.setRef}))}}],[{key:"VALIDATE",value:function(e){if(void 0===e)throw new Error("ref is undefined");if(1!==e.childElementCount||!e.firstElementChild||"AccordionItemButton"!==e.firstElementChild.getAttribute("data-accordion-component"))throw new Error("AccordionItemButton may contain only one child element, which must be an instance of AccordionItemButton.\n\nFrom the WAI-ARIA spec (https://www.w3.org/TR/wai-aria-practices-1.1/#accordion):\n\n“The button element is the only element inside the heading element. That is, if there are other visually persistent elements, they are not included inside the heading element.”\n\n")}}]),t}(n.PureComponent);q(xe,"defaultProps",{className:"accordion__heading","aria-level":3});var we=function(e){return Object(n.createElement)(le,null,(function(t){var a=t.headingAttributes;return e.id&&te(e.id),Object(n.createElement)(xe,H({},e,a))}))};we.displayName=ve.AccordionItemHeading;var ye=function(e){var t=e.className,a=void 0===t?"accordion__panel":t,r=e.id,l=V(e,["className","id"]);return Object(n.createElement)(le,null,(function(e){var t=e.panelAttributes;return r&&te(r),Object(n.createElement)("div",H({"data-accordion-component":"AccordionItemPanel",className:a},l,t))}))};a("QYuT");var Ne=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.pageContext,a=e.location,n=t.breadcrumb.crumbs;return r.a.createElement(l.a,{location:a},r.a.createElement(i.a,{title:"ICI Publications"}),r.a.createElement("section",{className:"main-content"},r.a.createElement("div",{className:"breadcrumbs"},r.a.createElement(B.Breadcrumb,{crumbs:n,crumbSeparator:" / ",crumbLabel:"Publications"})),r.a.createElement("div",{className:"w-100 pa2"},r.a.createElement("h1",null,"ICI Publications"),r.a.createElement("div",{className:"w-100 nl2 nr2 center"},r.a.createElement("p",null,"The ICI publishes briefs, whitepapers, and more extensive reports for a wide range of audiences, such as employment services providers, people with disabilities, and school/college staff providing support for students with disabilities. Selected publications are highlighted here."),r.a.createElement(X,null,r.a.createElement(ie,null,r.a.createElement(we,null,r.a.createElement(Ee,null,"Education")),r.a.createElement(ye,null,r.a.createElement("article",{className:"card"},r.a.createElement("div",{className:"flex flex-column flex-row-ns"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:f.a,alt:"publication thumbnail"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title"},r.a.createElement("a",{href:"https://thinkcollege.net/sites/default/files/files/resources/Conducting_College_Search_HTTC1v2.pdf"},"Conducting a College Search: Questions to Ask College Programs")),r.a.createElement("p",{className:"card-text"},"Conducting a college search is a daunting task for every family and every potential college student. For students with intellectual disability (ID), there are some additional aspects to consider beyond the details you can learn in Think College Search. This resource provides questions, suggested by parents and students who have been through the college search process.")))),r.a.createElement("article",{className:"card"},r.a.createElement("div",{className:"flex flex-column flex-row-ns"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:h.a,alt:"publication thumbnail"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title"}," ",r.a.createElement("a",{href:"https://thinkcollege.net/sites/default/files/files/resources/Voices_of_Experience_Students_HTTC6.pdf"},"Voices of Experience: Students Share College Search Advice"),"  "),r.a.createElement("p",{className:"card-text"},"We asked 5 former college students what you (and your family) should think about as you start your own college journey. Meet the students here, and keep reading to find out what they wanted you to know!")))),r.a.createElement("article",{className:"card"},r.a.createElement("div",{className:"flex flex-column flex-row-ns"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:x.a,alt:"publication thumbnail"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title"},r.a.createElement("a",{href:"https://thinkcollege.net/sites/default/files/files/resources/IB41_Consider_the_Alternatives_2019.pdf"},"Consider the Alternatives: Decision-Making Options for Young Adults with Intellectual Disabilities"),"  "),r.a.createElement("p",{className:"card-text"},"As youth with intellectual and developmental disabilities (IDD) are making plans to attend college, it is more important than ever that families become fully informed about guardianship as well as less-limiting alternatives. This brief  defines some of  the options and possible ramifications. It also presents special circumstances for consideration, and suggests ways to promote self-determination no matter which option is chosen.")))),r.a.createElement("article",{className:"card"},r.a.createElement("div",{className:"flex flex-column flex-row-ns"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:m.a,alt:"publication thumbnail"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title"},r.a.createElement("a",{href:"https://thinkcollege.net/sites/default/files/files/resources/FF20_Provision_of_Pre-ETS_in_TPSIDs.pdf"},"Provision of Pre-Employment Transition Services in TPSID Programs"),"  "),r.a.createElement("p",{className:"card-text"},"This Fast Fact describes ways that Transition Postsecondary Programs for Students with Intellectual Disabilities (TPSID programs) engage with state vocational rehabilitation agencies to provide pre-employment transition services to students with intellectual disability enrolled in colleges and universities.")))),r.a.createElement("article",{className:"card"},r.a.createElement("div",{className:"flex flex-column flex-row-ns"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:T.a,alt:"publication thumbnail"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title"},r.a.createElement("a",{href:"https://thinkcollege.net/sites/default/files/files/resources/1%20Supporting%20Life%20Skills%20Development%20During%20a%20Typical%20College%20Day.pdf"},"Supporting Life Skills Development"),"  "),r.a.createElement("p",{className:"card-text"},"Students who receive transition services and attend college have many opportunities throughout the day to develop and use life skills. In fact, the more students stay on campus, the more opportunities they have to use these skills in natural contexts and with natural cues.")))),r.a.createElement("article",{className:"card"},r.a.createElement("div",{className:"flex flex-column flex-row-ns"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:k.a,alt:"publication thumbnail"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title"},r.a.createElement("a",{href:"https://thinkcollege.net/sites/default/files/files/resources/TC%20reports_%20YEAR4_2019_F2.pdf"},"Think College TPSID annual report")),r.a.createElement("p",{className:"card-text"},"This report provides an overview of descriptive program and student-level data provided by TPSIDs during the 2018–2019 academic year. Program data includes program characteristics, academic access, supports for students, and integration of the program within the IHE during the fourth year of the 2015–2020 funding. Student data includes student demographics, course enrollments, employment activities, and engagement in student life. This report also provides information on the strategic partnerships and financial sustainability of TPSID programs. Additionally, the report provides trends over time as well as descriptive data on the outcomes of students who exited TPSID programs in previous years.")))))),r.a.createElement(ie,null,r.a.createElement(we,null,r.a.createElement(Ee,null,"Health Care")),r.a.createElement(ye,null,r.a.createElement("p",null,"In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum tempor laboris sed adipisicing eu esse duis nulla non."))),r.a.createElement(ie,null,r.a.createElement(we,null,r.a.createElement(Ee,null,"Employment")),r.a.createElement(ye,null,r.a.createElement("article",{className:"card"},r.a.createElement("div",{className:"flex flex-column flex-row-ns"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:o.a,alt:"publication thumbnail"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title"},r.a.createElement("a",{href:"https://www.thinkwork.org/power-disability-employment-impact-arizonas-economy"},"The Power of Disability Employment: The Impact to Arizona’s Economy")),r.a.createElement("p",{className:"card-text"},"The Arizona Developmental Disabilities Planning Council (ADDPC) contracted with the Institute for Community Inclusion (ICI) at the University of Massachusetts Boston to explore the economic impacts for Arizona of increasing the employment of individuals with disabilities and to analyze how the state can improve its efforts.")))),r.a.createElement("article",{className:"card"},r.a.createElement("div",{className:"flex flex-column flex-row-ns"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:_.a,alt:"publication thumbnail"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title"},r.a.createElement("a",{href:"https://www.thinkwork.org/sites/default/files/files/bluebook2019_Final.pdf"},"StateData: The National Report on Employment Services and Outcomes Through 2017")),r.a.createElement("p",{className:"card-text"},"Access the latest information about employment and economic self-sufficiency for people with intellectual and developmental disabilities. Both national and state-level statistics are included.")))),r.a.createElement("article",{className:"card"},r.a.createElement("div",{className:"flex flex-column flex-row-ns"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:A.a,alt:"publication thumbnail"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title"},r.a.createElement("a",{href:"http://static.smallworldlabs.com/umass/content/seln/Public%20Docs/seln_wioa-sect-511_f_2-2017_comp.pdf"},"New Restrictions on Subminimum Wage Under WIOA: Requirements and Opportunities for State IDD Agencies")),r.a.createElement("p",{className:"card-text"},"This brief provides details on Section 511 implementation, and then discusses potential roles for state IDD agencies.")))),r.a.createElement("article",{className:"card"},r.a.createElement("div",{className:"flex flex-column flex-row-ns"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:P.a,alt:"publication thumbnail"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title"},r.a.createElement("a",{href:"http://static.smallworldlabs.com/umass/content/Public%20Docs/SELN%20Unpaid%20Work%20-%202019.pdf"},"Unpaid Work Experiences, Volunteering, and Internships: What’s Allowed.")),r.a.createElement("p",{className:"card-text"},"As SELN member states refine how employment services are defined, implemented, and reimbursed, questions arise about how to view certain work experiences, and how to strategically use volunteer opportunities and unpaid work options.")))),r.a.createElement("article",{className:"card"},r.a.createElement("div",{className:"flex flex-column flex-row-ns"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:y.a,alt:"publication thumbnail"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title"},r.a.createElement("a",{href:"http://static.smallworldlabs.com/umass/content/SELN-guidance-jan-2019.pdf"},"The SELN Guidance for Conversations: Identifying and designing pathways towards rewarding employment")),r.a.createElement("p",{className:"card-text"},"This publication describes a series of pathways that we feel reflect most people’s current circumstances and understanding. Each pathway is defined and questions for exploration and discovery are provided.")))),r.a.createElement("article",{className:"card"},r.a.createElement("div",{className:"flex flex-column flex-row-ns"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:d.a,className:"db",alt:"publication thumbnail"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title"},r.a.createElement("a",{href:"https://www.explorevr.org/toolkits"},"Explore VR Job Driven Toolkits")),r.a.createElement("p",null,"The Job-Driven Toolkits provide resources on promising and emerging job-driven strategies for vocational rehabilitation (VR) agencies and partners. The toolkits help embed and sustain job-driven VR practices that lead to improved employment outcomes for people with disabilities.")))))),r.a.createElement(ie,null,r.a.createElement(we,null,r.a.createElement(Ee,null,"Community")),r.a.createElement(ye,null,r.a.createElement("article",{className:"card"},r.a.createElement("div",{className:"flex flex-column flex-row-ns"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:E.a,alt:"publication thumbnail"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title"},r.a.createElement("a",{href:"https://catada.info/assets/files/innovativeAT_issue1_Final%20Accessible.pdf"},"Innovative AT Practices, ISSUE NO. 1 • OCTOBER 2019")),r.a.createElement("p",{className:"card-text"},r.a.createElement("strong",null,"Mobile Unit Brings Assistive Tech to Underserved Areas.")," The mobile unit has been described as a “warehouse on wheels” by iCAN’s program manager, Rick Anderson. Two program coordinators rotate monthly to drive the van to a predetermined area and set up shop for the day. Once there, they provide device loans, demonstrations of high-end AT devices (such as communication tools), and giveaways of limited reused AT devices. ")))),r.a.createElement("article",{className:"card"},r.a.createElement("div",{className:"flex flex-column flex-row-ns"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:D.a,alt:"publication thumbnail"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title"},r.a.createElement("a",{href:"https://www.thinkwork.org/CLE-toolkit"},"Community Life Engagement toolkit")),r.a.createElement("p",{className:"card-text"},"Looking to increase community life engagement of the people you support? Not sure where to begin? This toolkit was developed to help service providers develop and improve high quality supports for community life engagement (CLE). Inside you will find guideposts for success, a self-assessment tool, real-world examples of service providers making CLE happen, and other helpful resources and tools."))))))))),r.a.createElement("p",null,"To view additional ICI publications, please visit ",r.a.createElement("a",{href:"https://scholarworks.umb.edu/ici/"},"Scholarworks"))))},n}(r.a.Component),_e=(t.default=Ne,"1381891903")},"4wN/":function(e,t,a){e.exports=a.p+"static/SELN_submin_thumbnail-62eb63acad90fcb384b835abc0d34dfb.png"},End3:function(e,t,a){e.exports=a.p+"static/innovativeAT-d2310abf9344ad92046bd040de311bca.png"},JHR5:function(e,t,a){"use strict";a("gu/5"),a("eoYm");var n=a("TqRt");t.__esModule=!0,t.default=void 0;var r=n(a("pVnL")),l=n(a("8OQS")),i=n(a("q1tI")),c=n(a("17x9")),o=a("Wbzz"),s=function(e){var t=e.title,a=e.crumbs,n=e.crumbLabel,c=e.crumbSeparator,s=e.disableLinks,d=e.hiddenCrumbs,u=(0,l.default)(e,["title","crumbs","crumbLabel","crumbSeparator","disableLinks","hiddenCrumbs"]);return i.default.createElement(i.default.Fragment,null,t&&i.default.createElement("span",{className:"breadcrumb__title"},t),i.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},i.default.createElement("ol",{className:"breadcrumb__list"},a.map((function(e,t){return d.includes(e.pathname)?null:i.default.createElement(i.default.Fragment,{key:t+"-"+e.pathname},!s.includes(e.pathname)&&i.default.createElement("li",{className:"breadcrumb__list__item"},i.default.createElement(o.Link,(0,r.default)({to:e.pathname,className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":t===a.length-1?"page":null},u),n&&t===a.length-1?n:e.crumbLabel)),s.includes(e.pathname)&&i.default.createElement("li",{className:"breadcrumb__list__item"},i.default.createElement("span",(0,r.default)({className:"breadcrumb__link__disabled"},u),n&&t===a.length-1?n:e.crumbLabel)),t===a.length-1?null:i.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},c))})))))};s.defaultProps={title:"",crumbSeparator:" / ",crumbLabel:null,disableLinks:[],hiddenCrumbs:[]},s.propTypes={title:c.default.string,crumbSeparator:c.default.string,crumbs:c.default.arrayOf(c.default.shape({location:c.default.shape(),pathname:c.default.string.isRequired})).isRequired,crumbLabel:c.default.string,disableLinks:c.default.arrayOf(c.default.string),hiddenCrumbs:c.default.arrayOf(c.default.string)};var d=s;t.default=d},LCnF:function(e,t,a){"use strict";a("klQ5"),a("sC2a");var n=a("TqRt");t.__esModule=!0,t.default=void 0;var r=n(a("pVnL")),l=n(a("8OQS")),i=n(a("q1tI")),c=n(a("17x9")),o=a("Wbzz"),s=a("m81S"),d=n(a("q/3z")),u=function(e){var t=e.title,a=e.location,n=e.crumbLabel,c=e.crumbSeparator,u=(0,l.default)(e,["title","location","crumbLabel","crumbSeparator"]),m=i.default.useContext(s.OptionsContext).usePathPrefix,p=(0,d.default)({location:(0,r.default)((0,r.default)({},a),{},{pathname:m?a.pathname.replace(new RegExp("^"+m),""):a.pathname}),crumbLabel:n,crumbSeparator:c}).crumbs,f=void 0===p?[]:p;return i.default.createElement(i.default.Fragment,null,t&&i.default.createElement("span",{className:"breadcrumb__title"},t),i.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},i.default.createElement("ol",{className:"breadcrumb__list"},f.map((function(e,t){return i.default.createElement("li",{className:"breadcrumb__item",key:t},i.default.createElement(o.Link,(0,r.default)({to:e.pathname||"",className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":t===f.length-1?"page":null},u),e.crumbLabel),t===f.length-1?null:i.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},e.crumbSeparator))})))))};u.defaultProps={title:"",crumbSeparator:" / "},u.propTypes={location:c.default.shape().isRequired,crumbLabel:c.default.string.isRequired,title:c.default.string,crumbSeparator:c.default.string};var m=u;t.default=m},Mjtc:function(e,t,a){e.exports=a.p+"static/Arizona_thumbnail-5885af155b877ff7058a0f0aba441621.png"},QYuT:function(e,t,a){},Qwuv:function(e,t,a){e.exports=a.p+"static/SELN_guidance_thumbnail-c8d83ff8582830126bcea00a215b1f1d.png"},SsCC:function(e,t,a){"use strict";var n=a("TqRt");t.__esModule=!0;var r=n(a("2vHB"));t.Breadcrumb=r.default;var l=n(a("JHR5"));t.AutoGenCrumb=l.default;var i=a("iHlK");t.BreadcrumbContext=i.BreadcrumbContext,t.BreadcrumbConsumer=i.BreadcrumbConsumer,t.BreadcrumbProvider=i.BreadcrumbProvider;var c=n(a("q/3z"));t.useBreadcrumb=c.default},aGdo:function(e,t,a){e.exports=a.p+"static/SD_thumbnail-a195c47071f8c40c416ee1ac56d58594.png"},bSK8:function(e,t,a){"use strict";t.__esModule=!0;var n=a("SsCC");t.Breadcrumb=n.Breadcrumb,t.BreadcrumbContext=n.BreadcrumbContext,t.BreadcrumbConsumer=n.BreadcrumbConsumer,t.BreadcrumbProvider=n.BreadcrumbProvider,t.useBreadcrumb=n.useBreadcrumb,t.AutoGenCrumb=n.AutoGenCrumb},bY6l:function(e,t,a){e.exports=a.p+"static/HowTo6_thumbnail-8b8279655c89400841dcc39c04042caf.png"},hzxk:function(e,t,a){e.exports=a.p+"static/FF20_thumbnail-c0444437eadce0d39ca77adef0f0ecb7.png"},j8jT:function(e,t,a){e.exports=a.p+"static/cle_toolkit_thumbnail-cc3d7a7f4d6143cf1c7cfa0660ed41da.png"},mzcf:function(e,t,a){e.exports=a.p+"static/HowTo1_thumbnail-9a5f715dd6f54b546a5b03c6035c6d4d.png"},obfa:function(e,t,a){e.exports=a.p+"static/SELN_unpaid_work_thumbnail-3ca2e3bd65ed56cf59cefede766777bb.png"},"q/3z":function(e,t,a){"use strict";var n=a("TqRt");t.__esModule=!0,t.default=void 0;var r=n(a("q1tI")),l=a("iHlK"),i=function(e){var t=e.location,a=e.crumbLabel,n=e.crumbSeparator,i=r.default.useContext(l.BreadcrumbContext),c=i.crumbs,o=i.updateCrumbs;return r.default.useEffect((function(){o({location:t,crumbLabel:a,crumbSeparator:n})}),[t,a,n,o]),{crumbs:c}};t.default=i},tlNl:function(e,t,a){e.exports=a.p+"static/TC_annnual_thumbnail-3b142f83800969b0a2d079675fda63a1.png"},yria:function(e,t,a){e.exports=a.p+"static/TCTP1_thumbnail-86a06da8a5213a1d980f1b8192844b00.png"},zCbE:function(e,t,a){e.exports=a.p+"static/EVR_toolkit-45aaa5ebff7c98b6eb1fa63081124cdb.png"}}]);
//# sourceMappingURL=component---src-pages-publications-js-cfa41f1de475101a7887.js.map