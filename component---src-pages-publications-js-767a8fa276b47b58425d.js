(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"2vHB":function(e,t,a){"use strict";var n=a("TqRt");t.__esModule=!0,t.default=void 0;var r=n(a("q1tI")),l=n(a("JHR5")),c=n(a("LCnF")),i=a("m81S"),s=function(e){return r.default.useContext(i.OptionsContext).useAutoGen?r.default.createElement(l.default,e):r.default.createElement(c.default,e)};t.default=s},"3B/x":function(e,t,a){e.exports=a.p+"static/Insight41_thumbnail-4d07fc1347f85f5295b4356c57d47a52.png"},"3X4W":function(e,t,a){e.exports=a.p+"static/literacy_teens_F-thumb-f71bcbb4b4ad6dd8da8784054c7e8754.png"},"4IYq":function(e,t,a){"use strict";a.r(t),a.d(t,"IndexQuery",(function(){return at}));var n=a("q1tI"),r=a.n(n),l=a("Bl7J"),c=a("vrFN"),i=a("Mjtc"),s=a.n(i),o=a("zCbE"),d=a.n(o),u=a("hzxk"),m=a.n(u),p=a("mzcf"),f=a.n(p),b=a("bY6l"),h=a.n(b),E=a("End3"),g=a.n(E),v=a("3B/x"),x=a.n(v),y=a("Qwuv"),w=a.n(y),N=a("aGdo"),_=a.n(N),A=a("4wN/"),C=a.n(A),I=a("tlNl"),k=a.n(I),S=a("yria"),T=a.n(S),O=a("obfa"),D=a.n(O),P=a("j8jT"),B=a.n(P),j=a("hy8R"),L=a.n(j),R=a("PDqH"),H=a.n(R),F=a("9ovX"),M=a.n(F),q=a("TGJb"),z=a.n(q),J=a("ve04"),Z=a.n(J),G=a("9lUR"),V=a.n(G),Q=a("xA6S"),U=a.n(Q),W=a("3X4W"),Y=a.n(W),X=a("O2Nd"),K=a.n(X),$=a("kkkO"),ee=a.n($),te=a("JtcR"),ae=a.n(te),ne=a("TqXt"),re=a.n(ne),le=a("RCNS"),ce=a.n(le),ie=a("6Hyf"),se=a.n(ie),oe=a("QlS6"),de=a.n(oe),ue=a("JkNh"),me=a.n(ue),pe=a("bSK8");a("YbXK"),a("cFtU"),a("q8oJ"),a("C9fy"),a("m210"),a("MIFh"),a("sc67"),a("LagC"),a("pS08"),a("JHok"),a("OeI1"),a("4DPX"),a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("E5k/"),a("R48M");function fe(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function be(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function he(e,t,a){return t&&be(e.prototype,t),a&&be(e,a),e}function Ee(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function ge(){return(ge=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function ve(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ye(e,t)}function xe(e){return(xe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ye(e,t){return(ye=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function we(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function Ne(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _e(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?Ne(e):t}function Ae(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var Ce=function e(t){var a=this,n=t.expanded,r=void 0===n?[]:n,l=t.allowMultipleExpanded,c=void 0!==l&&l,i=t.allowZeroExpanded,s=void 0!==i&&i;fe(this,e),Ee(this,"expanded",void 0),Ee(this,"allowMultipleExpanded",void 0),Ee(this,"allowZeroExpanded",void 0),Ee(this,"toggleExpanded",(function(e){return a.isItemDisabled(e)?a:a.isItemExpanded(e)?a.augment({expanded:a.expanded.filter((function(t){return t!==e}))}):a.augment({expanded:a.allowMultipleExpanded?[].concat(Ae(a.expanded),[e]):[e]})})),Ee(this,"isItemDisabled",(function(e){var t=a.isItemExpanded(e),n=1===a.expanded.length;return Boolean(t&&!a.allowZeroExpanded&&n)})),Ee(this,"isItemExpanded",(function(e){return-1!==a.expanded.indexOf(e)})),Ee(this,"getPanelAttributes",(function(e,t){var n=null!=t?t:a.isItemExpanded(e);return{role:a.allowMultipleExpanded?void 0:"region","aria-hidden":a.allowMultipleExpanded?!n:void 0,"aria-labelledby":a.getButtonId(e),id:a.getPanelId(e),hidden:!n||void 0}})),Ee(this,"getHeadingAttributes",(function(e){return{role:"heading"}})),Ee(this,"getButtonAttributes",(function(e,t){var n=null!=t?t:a.isItemExpanded(e),r=a.isItemDisabled(e);return{id:a.getButtonId(e),"aria-disabled":r,"aria-expanded":n,"aria-controls":a.getPanelId(e),role:"button",tabIndex:0}})),Ee(this,"getPanelId",(function(e){return"accordion__panel-".concat(e)})),Ee(this,"getButtonId",(function(e){return"accordion__heading-".concat(e)})),Ee(this,"augment",(function(t){return new e(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){Ee(e,t,a[t])}))}return e}({expanded:a.expanded,allowMultipleExpanded:a.allowMultipleExpanded,allowZeroExpanded:a.allowZeroExpanded},t))})),this.expanded=r,this.allowMultipleExpanded=c,this.allowZeroExpanded=s},Ie=Object(n.createContext)(null),ke=function(e){function t(){var e,a;fe(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return Ee(Ne(a=_e(this,(e=xe(t)).call.apply(e,[this].concat(r)))),"state",new Ce({expanded:a.props.preExpanded,allowMultipleExpanded:a.props.allowMultipleExpanded,allowZeroExpanded:a.props.allowZeroExpanded})),Ee(Ne(a),"toggleExpanded",(function(e){a.setState((function(t){return t.toggleExpanded(e)}),(function(){a.props.onChange&&a.props.onChange(a.state.expanded)}))})),Ee(Ne(a),"isItemDisabled",(function(e){return a.state.isItemDisabled(e)})),Ee(Ne(a),"isItemExpanded",(function(e){return a.state.isItemExpanded(e)})),Ee(Ne(a),"getPanelAttributes",(function(e,t){return a.state.getPanelAttributes(e,t)})),Ee(Ne(a),"getHeadingAttributes",(function(e){return a.state.getHeadingAttributes(e)})),Ee(Ne(a),"getButtonAttributes",(function(e,t){return a.state.getButtonAttributes(e,t)})),a}return ve(t,e),he(t,[{key:"render",value:function(){var e=this.state,t=e.allowZeroExpanded,a=e.allowMultipleExpanded;return Object(n.createElement)(Ie.Provider,{value:{allowMultipleExpanded:a,allowZeroExpanded:t,toggleExpanded:this.toggleExpanded,isItemDisabled:this.isItemDisabled,isItemExpanded:this.isItemExpanded,getPanelAttributes:this.getPanelAttributes,getHeadingAttributes:this.getHeadingAttributes,getButtonAttributes:this.getButtonAttributes}},this.props.children||null)}}]),t}(n.PureComponent);Ee(ke,"defaultProps",{allowMultipleExpanded:!1,allowZeroExpanded:!1});var Se=function(e){function t(){var e,a;fe(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return Ee(Ne(a=_e(this,(e=xe(t)).call.apply(e,[this].concat(r)))),"renderChildren",(function(e){return e?a.props.children(e):null})),a}return ve(t,e),he(t,[{key:"render",value:function(){return Object(n.createElement)(Ie.Consumer,null,this.renderChildren)}}]),t}(n.PureComponent),Te=function(e){var t=e.className,a=void 0===t?"accordion":t,r=e.allowMultipleExpanded,l=e.allowZeroExpanded,c=e.onChange,i=e.preExpanded,s=we(e,["className","allowMultipleExpanded","allowZeroExpanded","onChange","preExpanded"]);return Object(n.createElement)(ke,{preExpanded:i,allowMultipleExpanded:r,allowZeroExpanded:l,onChange:c},Object(n.createElement)("div",ge({"data-accordion-component":"Accordion",className:a},s)))},Oe=0;var De=/[\u0009\u000a\u000c\u000d\u0020]/g;function Pe(e){return""!==e&&!De.test(e)||(console.error('uuid must be a valid HTML5 id but was given "'.concat(e,'", ASCII whitespaces are forbidden')),!1)}var Be=Object(n.createContext)(null),je=function(e){function t(){var e,a;fe(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return Ee(Ne(a=_e(this,(e=xe(t)).call.apply(e,[this].concat(l)))),"toggleExpanded",(function(){a.props.accordionContext.toggleExpanded(a.props.uuid)})),Ee(Ne(a),"renderChildren",(function(e){var t=a.props,r=t.uuid,l=t.dangerouslySetExpanded,c=null!=l?l:e.isItemExpanded(r),i=e.isItemDisabled(r),s=e.getPanelAttributes(r,l),o=e.getHeadingAttributes(r),d=e.getButtonAttributes(r,l);return Object(n.createElement)(Be.Provider,{value:{uuid:r,expanded:c,disabled:i,toggleExpanded:a.toggleExpanded,panelAttributes:s,headingAttributes:o,buttonAttributes:d},children:a.props.children})})),a}return ve(t,e),he(t,[{key:"render",value:function(){return Object(n.createElement)(Se,null,this.renderChildren)}}]),t}(n.Component),Le=function(e){return Object(n.createElement)(Se,null,(function(t){return Object(n.createElement)(je,ge({},e,{accordionContext:t}))}))},Re=function(e){function t(){var e,a;fe(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return Ee(Ne(a=_e(this,(e=xe(t)).call.apply(e,[this].concat(r)))),"renderChildren",(function(e){return e?a.props.children(e):null})),a}return ve(t,e),he(t,[{key:"render",value:function(){return Object(n.createElement)(Be.Consumer,null,this.renderChildren)}}]),t}(n.PureComponent),He=function(e){var t,a=e.uuid,r=void 0===a?(t=Oe,Oe+=1,"raa-".concat(t)):a,l=e.className,c=void 0===l?"accordion__item":l,i=e.activeClassName,s=e.dangerouslySetExpanded,o=we(e,["uuid","className","activeClassName","dangerouslySetExpanded"]);return o.id&&Pe(o.id),Object(n.createElement)(Le,{uuid:r,dangerouslySetExpanded:s},Object(n.createElement)(Re,null,(function(e){var t=e.expanded&&i?i:c;return Object(n.createElement)("div",ge({"data-accordion-component":"AccordionItem",className:t},o))})))};function Fe(e){var t=function e(t){return t&&(t.matches('[data-accordion-component="Accordion"]')?t:e(t.parentElement))}(e);return t&&Array.from(t.querySelectorAll('[data-accordion-component="AccordionItemButton"]'))}var Me,qe="40",ze="35",Je="13",Ze="36",Ge="37",Ve="39",Qe="32",Ue="38",We=function(e){var t=e.toggleExpanded,a=e.className,r=void 0===a?"accordion__button":a,l=we(e,["toggleExpanded","className"]);return l.id&&Pe(l.id),Object(n.createElement)("div",ge({className:r},l,{onClick:t,onKeyDown:function(e){var a,n,r=e.which.toString();if(r!==Je&&r!==Qe||(e.preventDefault(),t()),e.target instanceof HTMLElement)switch(r){case Ze:e.preventDefault(),a=e.target,(n=(Fe(a)||[])[0])&&n.focus();break;case ze:e.preventDefault(),function(e){var t=Fe(e)||[],a=t[t.length-1];a&&a.focus()}(e.target);break;case Ge:case Ue:e.preventDefault(),function(e){var t=Fe(e)||[],a=t.indexOf(e);if(-1!==a){var n=t[a-1];n&&n.focus()}}(e.target);break;case Ve:case qe:e.preventDefault(),function(e){var t=Fe(e)||[],a=t.indexOf(e);if(-1!==a){var n=t[a+1];n&&n.focus()}}(e.target)}},"data-accordion-component":"AccordionItemButton"}))},Ye=function(e){return Object(n.createElement)(Re,null,(function(t){var a=t.toggleExpanded,r=t.buttonAttributes;return Object(n.createElement)(We,ge({toggleExpanded:a},e,r))}))};!function(e){e.Accordion="Accordion",e.AccordionItem="AccordionItem",e.AccordionItemButton="AccordionItemButton",e.AccordionItemHeading="AccordionItemHeading",e.AccordionItemPanel="AccordionItemPanel"}(Me||(Me={}));var Xe=Me,Ke=function(e){function t(){var e,a;fe(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return Ee(Ne(a=_e(this,(e=xe(t)).call.apply(e,[this].concat(r)))),"ref",void 0),Ee(Ne(a),"setRef",(function(e){a.ref=e})),a}return ve(t,e),he(t,[{key:"componentDidUpdate",value:function(){t.VALIDATE(this.ref)}},{key:"componentDidMount",value:function(){t.VALIDATE(this.ref)}},{key:"render",value:function(){return Object(n.createElement)("div",ge({"data-accordion-component":"AccordionItemHeading"},this.props,{ref:this.setRef}))}}],[{key:"VALIDATE",value:function(e){if(void 0===e)throw new Error("ref is undefined");if(1!==e.childElementCount||!e.firstElementChild||"AccordionItemButton"!==e.firstElementChild.getAttribute("data-accordion-component"))throw new Error("AccordionItemButton may contain only one child element, which must be an instance of AccordionItemButton.\n\nFrom the WAI-ARIA spec (https://www.w3.org/TR/wai-aria-practices-1.1/#accordion):\n\n“The button element is the only element inside the heading element. That is, if there are other visually persistent elements, they are not included inside the heading element.”\n\n")}}]),t}(n.PureComponent);Ee(Ke,"defaultProps",{className:"accordion__heading","aria-level":3});var $e=function(e){return Object(n.createElement)(Re,null,(function(t){var a=t.headingAttributes;return e.id&&Pe(e.id),Object(n.createElement)(Ke,ge({},e,a))}))};$e.displayName=Xe.AccordionItemHeading;var et=function(e){var t=e.className,a=void 0===t?"accordion__panel":t,r=e.id,l=we(e,["className","id"]);return Object(n.createElement)(Re,null,(function(e){var t=e.panelAttributes;return r&&Pe(r),Object(n.createElement)("div",ge({"data-accordion-component":"AccordionItemPanel",className:a},l,t))}))};a("QYuT");var tt=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.pageContext,a=e.location,n=t.breadcrumb.crumbs;return r.a.createElement(l.a,{location:a},r.a.createElement(c.a,{title:"ICI Publications"}),r.a.createElement("section",{className:"main-content"},r.a.createElement("div",{className:"breadcrumbs"},r.a.createElement(pe.Breadcrumb,{crumbs:n,crumbSeparator:" / ",crumbLabel:"Publications"})),r.a.createElement("div",{className:"w-100 pa2"},r.a.createElement("h1",null,"ICI Publications"),r.a.createElement("div",{className:"w-100 nl2 nr2 center"},r.a.createElement("p",null,"The ICI publishes briefs, whitepapers, and more extensive reports for a wide range of audiences, such as employment services providers, people with disabilities, and school/college staff providing support for students with disabilities. Selected publications are highlighted here."),r.a.createElement(Te,null,r.a.createElement(He,null,r.a.createElement($e,null,r.a.createElement(Ye,null,"Education")),r.a.createElement(et,null,r.a.createElement("article",{className:"card"},r.a.createElement("div",{className:"flex flex-column flex-row-ns"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:f.a,alt:"publication thumbnail"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title"},r.a.createElement("a",{href:"https://thinkcollege.net/sites/default/files/files/resources/Conducting_College_Search_HTTC1v2.pdf"},"Conducting a College Search: Questions to Ask College Programs")),r.a.createElement("p",{className:"card-text"},"Conducting a college search is a daunting task for every family and every potential college student. For students with intellectual disability (ID), there are some additional aspects to consider beyond the details you can learn in Think College Search. This resource provides questions, suggested by parents and students who have been through the college search process.")))),r.a.createElement("article",{className:"card"},r.a.createElement("div",{className:"flex flex-column flex-row-ns"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:h.a,alt:"publication thumbnail"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title"}," ",r.a.createElement("a",{href:"https://thinkcollege.net/sites/default/files/files/resources/Voices_of_Experience_Students_HTTC6.pdf"},"Voices of Experience: Students Share College Search Advice"),"  "),r.a.createElement("p",{className:"card-text"},"We asked 5 former college students what you (and your family) should think about as you start your own college journey. Meet the students here, and keep reading to find out what they wanted you to know!")))),r.a.createElement("article",{className:"card"},r.a.createElement("div",{className:"flex flex-column flex-row-ns"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:x.a,alt:"publication thumbnail"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title"},r.a.createElement("a",{href:"https://thinkcollege.net/sites/default/files/files/resources/IB41_Consider_the_Alternatives_2019.pdf"},"Consider the Alternatives: Decision-Making Options for Young Adults with Intellectual Disabilities"),"  "),r.a.createElement("p",{className:"card-text"},"As youth with intellectual and developmental disabilities (IDD) are making plans to attend college, it is more important than ever that families become fully informed about guardianship as well as less-limiting alternatives. This brief  defines some of  the options and possible ramifications. It also presents special circumstances for consideration, and suggests ways to promote self-determination no matter which option is chosen.")))),r.a.createElement("article",{className:"card"},r.a.createElement("div",{className:"flex flex-column flex-row-ns"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:m.a,alt:"publication thumbnail"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title"},r.a.createElement("a",{href:"https://thinkcollege.net/sites/default/files/files/resources/FF20_Provision_of_Pre-ETS_in_TPSIDs.pdf"},"Provision of Pre-Employment Transition Services in TPSID Programs"),"  "),r.a.createElement("p",{className:"card-text"},"This Fast Fact describes ways that Transition Postsecondary Programs for Students with Intellectual Disabilities (TPSID programs) engage with state vocational rehabilitation agencies to provide pre-employment transition services to students with intellectual disability enrolled in colleges and universities.")))),r.a.createElement("article",{className:"card"},r.a.createElement("div",{className:"flex flex-column flex-row-ns"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:T.a,alt:"publication thumbnail"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title"},r.a.createElement("a",{href:"https://thinkcollege.net/sites/default/files/files/resources/1%20Supporting%20Life%20Skills%20Development%20During%20a%20Typical%20College%20Day.pdf"},"Supporting Life Skills Development"),"  "),r.a.createElement("p",{className:"card-text"},"Students who receive transition services and attend college have many opportunities throughout the day to develop and use life skills. In fact, the more students stay on campus, the more opportunities they have to use these skills in natural contexts and with natural cues.")))),r.a.createElement("article",{className:"card"},r.a.createElement("div",{className:"flex flex-column flex-row-ns"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:k.a,alt:"publication thumbnail"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title"},r.a.createElement("a",{href:"https://thinkcollege.net/sites/default/files/files/resources/TC%20reports_%20YEAR4_2019_F2.pdf"},"Think College TPSID annual report")),r.a.createElement("p",{className:"card-text"},"This report provides an overview of descriptive program and student-level data provided by TPSIDs during the 2018–2019 academic year. Program data includes program characteristics, academic access, supports for students, and integration of the program within the IHE during the fourth year of the 2015–2020 funding. Student data includes student demographics, course enrollments, employment activities, and engagement in student life. This report also provides information on the strategic partnerships and financial sustainability of TPSID programs. Additionally, the report provides trends over time as well as descriptive data on the outcomes of students who exited TPSID programs in previous years.")))))),r.a.createElement(He,null,r.a.createElement($e,null,r.a.createElement(Ye,null,"Health Care")),r.a.createElement(et,null,r.a.createElement("article",{className:"card"},r.a.createElement("div",{className:"flex flex-column flex-row-ns"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:H.a,alt:"publication thumbnail"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title"},r.a.createElement("a",{href:ee.a},"ADHD: Practical Tips for Parents")),r.a.createElement("p",{className:"card-text"},"This short, accessible guide offers tips to parents around navigating their child’s Attention Deficit Hyperactivity Disorder.")))),r.a.createElement("article",{className:"card"},r.a.createElement("div",{className:"flex flex-column flex-row-ns"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:M.a,alt:"publication thumbnail"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title"}," ",r.a.createElement("a",{href:ae.a},"Early Communication Development & Down Syndrome"),"  "),r.a.createElement("p",{className:"card-text"},"This guide informs parents about how Down syndrome can affect communication, and actions they can take to support their child.")))),r.a.createElement("article",{className:"card"},r.a.createElement("div",{className:"flex flex-column flex-row-ns"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:L.a,alt:"publication thumbnail"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title"},r.a.createElement("a",{href:K.a},"Consider the Depression & Down Syndrome"),"  "),r.a.createElement("p",{className:"card-text"},"This brochure shares tips for family members about identifying depression and supporting the mental health of their loved one with Down syndrome.")))),r.a.createElement("article",{className:"card"},r.a.createElement("div",{className:"flex flex-column flex-row-ns"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:z.a,alt:"publication thumbnail"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title"},r.a.createElement("a",{href:re.a},"Behavior and Down Syndrome: A Practical Guide for Parents"),"  "),r.a.createElement("p",{className:"card-text"},"This publication supports parents in understanding and responding to behavioral issues of their child with Down syndrome.")))),r.a.createElement("article",{className:"card"},r.a.createElement("div",{className:"flex flex-column flex-row-ns"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:Z.a,alt:"publication thumbnail"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title"},r.a.createElement("a",{href:ce.a},"Building Literacy Skills from Infancy to Adulthood: Infants & Toddlers"),"  "),r.a.createElement("p",{className:"card-text"},"This one-pager offers research-supported tips for building literacy skills with children from birth to age 2.")))),r.a.createElement("article",{className:"card"},r.a.createElement("div",{className:"flex flex-column flex-row-ns"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:V.a,alt:"publication thumbnail"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title"},r.a.createElement("a",{href:se.a},"Building Literacy Skills from Infancy to Adulthood: Young Children")),r.a.createElement("p",{className:"card-text"},"This one-pager offers research-supported tips for building literacy skills with pre-school-age children.")))),r.a.createElement("article",{className:"card"},r.a.createElement("div",{className:"flex flex-column flex-row-ns"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:U.a,alt:"publication thumbnail"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title"},r.a.createElement("a",{href:de.a},"Building Literacy Skills from Infancy to Adulthood: School-age Children")),r.a.createElement("p",{className:"card-text"},"This one-pager offers research-supported tips for building literacy skills with children from Grade 1 through the pre-teen years.")))),r.a.createElement("article",{className:"card"},r.a.createElement("div",{className:"flex flex-column flex-row-ns"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:Y.a,alt:"publication thumbnail"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title"},r.a.createElement("a",{href:me.a},"Building Literacy Skills from Infancy to Adulthood: Teens and Beyond")),r.a.createElement("p",{className:"card-text"},"This one-pager offers research-supported tips for building literacy skills with adolescents.")))))),r.a.createElement(He,null,r.a.createElement($e,null,r.a.createElement(Ye,null,"Employment")),r.a.createElement(et,null,r.a.createElement("article",{className:"card"},r.a.createElement("div",{className:"flex flex-column flex-row-ns"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:s.a,alt:"publication thumbnail"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title"},r.a.createElement("a",{href:"https://www.thinkwork.org/power-disability-employment-impact-arizonas-economy"},"The Power of Disability Employment: The Impact to Arizona’s Economy")),r.a.createElement("p",{className:"card-text"},"The Arizona Developmental Disabilities Planning Council (ADDPC) contracted with the Institute for Community Inclusion (ICI) at the University of Massachusetts Boston to explore the economic impacts for Arizona of increasing the employment of individuals with disabilities and to analyze how the state can improve its efforts.")))),r.a.createElement("article",{className:"card"},r.a.createElement("div",{className:"flex flex-column flex-row-ns"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:_.a,alt:"publication thumbnail"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title"},r.a.createElement("a",{href:"https://www.thinkwork.org/sites/default/files/files/bluebook2019_Final.pdf"},"StateData: The National Report on Employment Services and Outcomes Through 2017")),r.a.createElement("p",{className:"card-text"},"Access the latest information about employment and economic self-sufficiency for people with intellectual and developmental disabilities. Both national and state-level statistics are included.")))),r.a.createElement("article",{className:"card"},r.a.createElement("div",{className:"flex flex-column flex-row-ns"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:C.a,alt:"publication thumbnail"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title"},r.a.createElement("a",{href:"http://static.smallworldlabs.com/umass/content/seln/Public%20Docs/seln_wioa-sect-511_f_2-2017_comp.pdf"},"New Restrictions on Subminimum Wage Under WIOA: Requirements and Opportunities for State IDD Agencies")),r.a.createElement("p",{className:"card-text"},"This brief provides details on Section 511 implementation, and then discusses potential roles for state IDD agencies.")))),r.a.createElement("article",{className:"card"},r.a.createElement("div",{className:"flex flex-column flex-row-ns"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:D.a,alt:"publication thumbnail"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title"},r.a.createElement("a",{href:"http://static.smallworldlabs.com/umass/content/Public%20Docs/SELN%20Unpaid%20Work%20-%202019.pdf"},"Unpaid Work Experiences, Volunteering, and Internships: What’s Allowed.")),r.a.createElement("p",{className:"card-text"},"As SELN member states refine how employment services are defined, implemented, and reimbursed, questions arise about how to view certain work experiences, and how to strategically use volunteer opportunities and unpaid work options.")))),r.a.createElement("article",{className:"card"},r.a.createElement("div",{className:"flex flex-column flex-row-ns"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:w.a,alt:"publication thumbnail"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title"},r.a.createElement("a",{href:"http://static.smallworldlabs.com/umass/content/SELN-guidance-jan-2019.pdf"},"The SELN Guidance for Conversations: Identifying and designing pathways towards rewarding employment")),r.a.createElement("p",{className:"card-text"},"This publication describes a series of pathways that we feel reflect most people’s current circumstances and understanding. Each pathway is defined and questions for exploration and discovery are provided.")))),r.a.createElement("article",{className:"card"},r.a.createElement("div",{className:"flex flex-column flex-row-ns"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:d.a,className:"db",alt:"publication thumbnail"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title"},r.a.createElement("a",{href:"https://www.explorevr.org/toolkits"},"Explore VR Job Driven Toolkits")),r.a.createElement("p",null,"The Job-Driven Toolkits provide resources on promising and emerging job-driven strategies for vocational rehabilitation (VR) agencies and partners. The toolkits help embed and sustain job-driven VR practices that lead to improved employment outcomes for people with disabilities.")))))),r.a.createElement(He,null,r.a.createElement($e,null,r.a.createElement(Ye,null,"Community")),r.a.createElement(et,null,r.a.createElement("article",{className:"card"},r.a.createElement("div",{className:"flex flex-column flex-row-ns"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:g.a,alt:"publication thumbnail"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title"},r.a.createElement("a",{href:"https://catada.info/assets/files/innovativeAT_issue1_Final%20Accessible.pdf"},"Innovative AT Practices, ISSUE NO. 1 • OCTOBER 2019")),r.a.createElement("p",{className:"card-text"},r.a.createElement("strong",null,"Mobile Unit Brings Assistive Tech to Underserved Areas.")," The mobile unit has been described as a “warehouse on wheels” by iCAN’s program manager, Rick Anderson. Two program coordinators rotate monthly to drive the van to a predetermined area and set up shop for the day. Once there, they provide device loans, demonstrations of high-end AT devices (such as communication tools), and giveaways of limited reused AT devices. ")))),r.a.createElement("article",{className:"card"},r.a.createElement("div",{className:"flex flex-column flex-row-ns"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:B.a,alt:"publication thumbnail"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title"},r.a.createElement("a",{href:"https://www.thinkwork.org/CLE-toolkit"},"Community Life Engagement toolkit")),r.a.createElement("p",{className:"card-text"},"Looking to increase community life engagement of the people you support? Not sure where to begin? This toolkit was developed to help service providers develop and improve high quality supports for community life engagement (CLE). Inside you will find guideposts for success, a self-assessment tool, real-world examples of service providers making CLE happen, and other helpful resources and tools."))))))))),r.a.createElement("p",null,"To view additional ICI publications, please visit ",r.a.createElement("a",{href:"https://scholarworks.umb.edu/ici/"},"Scholarworks"))))},n}(r.a.Component),at=(t.default=tt,"2121313439")},"4wN/":function(e,t,a){e.exports=a.p+"static/SELN_submin_thumbnail-62eb63acad90fcb384b835abc0d34dfb.png"},"6Hyf":function(e,t,a){e.exports=a.p+"static/literacy_youngchild_F-263443e1dd1a27379132f94b8f64c92e.pdf"},"9lUR":function(e,t,a){e.exports=a.p+"static/literacy_youngchild_F-thumb-598e473dc8bd2d40fb3e5e6f9c7bc640.png"},"9ovX":function(e,t,a){e.exports=a.p+"static/communications-booklet_2016-update-1-thumb-c1b672ba3954378bc4e86f6bf100e541.png"},End3:function(e,t,a){e.exports=a.p+"static/innovativeAT-d2310abf9344ad92046bd040de311bca.png"},JHR5:function(e,t,a){"use strict";a("gu/5"),a("eoYm");var n=a("TqRt");t.__esModule=!0,t.default=void 0;var r=n(a("pVnL")),l=n(a("8OQS")),c=n(a("q1tI")),i=n(a("17x9")),s=a("Wbzz"),o=function(e){var t=e.title,a=e.crumbs,n=e.crumbLabel,i=e.crumbSeparator,o=e.disableLinks,d=e.hiddenCrumbs,u=(0,l.default)(e,["title","crumbs","crumbLabel","crumbSeparator","disableLinks","hiddenCrumbs"]);return c.default.createElement(c.default.Fragment,null,t&&c.default.createElement("span",{className:"breadcrumb__title"},t),c.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},c.default.createElement("ol",{className:"breadcrumb__list"},a.map((function(e,t){return d.includes(e.pathname)?null:c.default.createElement(c.default.Fragment,{key:t+"-"+e.pathname},!o.includes(e.pathname)&&c.default.createElement("li",{className:"breadcrumb__list__item"},c.default.createElement(s.Link,(0,r.default)({to:e.pathname,className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":t===a.length-1?"page":null},u),n&&t===a.length-1?n:e.crumbLabel)),o.includes(e.pathname)&&c.default.createElement("li",{className:"breadcrumb__list__item"},c.default.createElement("span",(0,r.default)({className:"breadcrumb__link__disabled"},u),n&&t===a.length-1?n:e.crumbLabel)),t===a.length-1?null:c.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},i))})))))};o.defaultProps={title:"",crumbSeparator:" / ",crumbLabel:null,disableLinks:[],hiddenCrumbs:[]},o.propTypes={title:i.default.string,crumbSeparator:i.default.string,crumbs:i.default.arrayOf(i.default.shape({location:i.default.shape(),pathname:i.default.string.isRequired})).isRequired,crumbLabel:i.default.string,disableLinks:i.default.arrayOf(i.default.string),hiddenCrumbs:i.default.arrayOf(i.default.string)};var d=o;t.default=d},JkNh:function(e,t,a){e.exports=a.p+"static/literacy_teens_F-306396a7cc917de2a1bcb3c0fc44d8d4.pdf"},JtcR:function(e,t,a){e.exports=a.p+"static/communications_booklet_2016_update-f90acd01c1a135102f7c8abe72714886.pdf"},LCnF:function(e,t,a){"use strict";a("klQ5"),a("sC2a");var n=a("TqRt");t.__esModule=!0,t.default=void 0;var r=n(a("pVnL")),l=n(a("8OQS")),c=n(a("q1tI")),i=n(a("17x9")),s=a("Wbzz"),o=a("m81S"),d=n(a("q/3z")),u=function(e){var t=e.title,a=e.location,n=e.crumbLabel,i=e.crumbSeparator,u=(0,l.default)(e,["title","location","crumbLabel","crumbSeparator"]),m=c.default.useContext(o.OptionsContext).usePathPrefix,p=(0,d.default)({location:(0,r.default)((0,r.default)({},a),{},{pathname:m?a.pathname.replace(new RegExp("^"+m),""):a.pathname}),crumbLabel:n,crumbSeparator:i}).crumbs,f=void 0===p?[]:p;return c.default.createElement(c.default.Fragment,null,t&&c.default.createElement("span",{className:"breadcrumb__title"},t),c.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},c.default.createElement("ol",{className:"breadcrumb__list"},f.map((function(e,t){return c.default.createElement("li",{className:"breadcrumb__item",key:t},c.default.createElement(s.Link,(0,r.default)({to:e.pathname||"",className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":t===f.length-1?"page":null},u),e.crumbLabel),t===f.length-1?null:c.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},e.crumbSeparator))})))))};u.defaultProps={title:"",crumbSeparator:" / "},u.propTypes={location:i.default.shape().isRequired,crumbLabel:i.default.string.isRequired,title:i.default.string,crumbSeparator:i.default.string};var m=u;t.default=m},Mjtc:function(e,t,a){e.exports=a.p+"static/Arizona_thumbnail-5885af155b877ff7058a0f0aba441621.png"},O2Nd:function(e,t,a){e.exports=a.p+"static/depression_DS_F2-4a496c1a2349f94b83268750a5655061.pdf"},PDqH:function(e,t,a){e.exports=a.p+"static/ADHD_F_web-1-thumb-1b7930c7df130f03247c228920c24763.png"},QYuT:function(e,t,a){},QlS6:function(e,t,a){e.exports=a.p+"static/literacy_schoolage_F-6ef24a669164d804ad13b623e58d0196.pdf"},Qwuv:function(e,t,a){e.exports=a.p+"static/SELN_guidance_thumbnail-c8d83ff8582830126bcea00a215b1f1d.png"},RCNS:function(e,t,a){e.exports=a.p+"static/literacy_infants_F-bc638402fcb364166a86c8098e718ffc.pdf"},SsCC:function(e,t,a){"use strict";var n=a("TqRt");t.__esModule=!0;var r=n(a("2vHB"));t.Breadcrumb=r.default;var l=n(a("JHR5"));t.AutoGenCrumb=l.default;var c=a("iHlK");t.BreadcrumbContext=c.BreadcrumbContext,t.BreadcrumbConsumer=c.BreadcrumbConsumer,t.BreadcrumbProvider=c.BreadcrumbProvider;var i=n(a("q/3z"));t.useBreadcrumb=i.default},TGJb:function(e,t,a){e.exports=a.p+"static/DS-brochure_2014_web_F-1-thumb-caa9dea2f5a430dcb00452c3657e4fb3.png"},TqXt:function(e,t,a){e.exports=a.p+"static/DS_brochure_2014_web_F-4273108d30da9faa34d129f1b0188a1b.pdf"},aGdo:function(e,t,a){e.exports=a.p+"static/SD_thumbnail-a195c47071f8c40c416ee1ac56d58594.png"},bSK8:function(e,t,a){"use strict";t.__esModule=!0;var n=a("SsCC");t.Breadcrumb=n.Breadcrumb,t.BreadcrumbContext=n.BreadcrumbContext,t.BreadcrumbConsumer=n.BreadcrumbConsumer,t.BreadcrumbProvider=n.BreadcrumbProvider,t.useBreadcrumb=n.useBreadcrumb,t.AutoGenCrumb=n.AutoGenCrumb},bY6l:function(e,t,a){e.exports=a.p+"static/HowTo6_thumbnail-8b8279655c89400841dcc39c04042caf.png"},hy8R:function(e,t,a){e.exports=a.p+"static/depression_DS_F2-1-thumb-4cbe8670cc347edc40893ecdb0034c40.png"},hzxk:function(e,t,a){e.exports=a.p+"static/FF20_thumbnail-c0444437eadce0d39ca77adef0f0ecb7.png"},j8jT:function(e,t,a){e.exports=a.p+"static/cle_toolkit_thumbnail-cc3d7a7f4d6143cf1c7cfa0660ed41da.png"},kkkO:function(e,t,a){e.exports=a.p+"static/ADHD_F_web-35980502380ff9320aef3a62dbafd7d6.pdf"},mzcf:function(e,t,a){e.exports=a.p+"static/HowTo1_thumbnail-9a5f715dd6f54b546a5b03c6035c6d4d.png"},obfa:function(e,t,a){e.exports=a.p+"static/SELN_unpaid_work_thumbnail-3ca2e3bd65ed56cf59cefede766777bb.png"},"q/3z":function(e,t,a){"use strict";var n=a("TqRt");t.__esModule=!0,t.default=void 0;var r=n(a("q1tI")),l=a("iHlK"),c=function(e){var t=e.location,a=e.crumbLabel,n=e.crumbSeparator,c=r.default.useContext(l.BreadcrumbContext),i=c.crumbs,s=c.updateCrumbs;return r.default.useEffect((function(){s({location:t,crumbLabel:a,crumbSeparator:n})}),[t,a,n,s]),{crumbs:i}};t.default=c},tlNl:function(e,t,a){e.exports=a.p+"static/TC_annnual_thumbnail-3b142f83800969b0a2d079675fda63a1.png"},ve04:function(e,t,a){e.exports=a.p+"static/literacy_infants_F-thumb-eab5bcd914355f99ea5165c3a6e6732e.png"},xA6S:function(e,t,a){e.exports=a.p+"static/literacy_schoolage_F-thumb-5394a5e6273ae5e0e92cb014cb19fb08.png"},yria:function(e,t,a){e.exports=a.p+"static/TCTP1_thumbnail-86a06da8a5213a1d980f1b8192844b00.png"},zCbE:function(e,t,a){e.exports=a.p+"static/EVR_toolkit-45aaa5ebff7c98b6eb1fa63081124cdb.png"}}]);
//# sourceMappingURL=component---src-pages-publications-js-767a8fa276b47b58425d.js.map