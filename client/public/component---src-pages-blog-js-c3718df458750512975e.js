(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"8+s/":function(e,t,n){"use strict";n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var r,a=n("q1tI"),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,u=[];function s(){c=e(u.map((function(e){return e.props}))),d.canUseDOM?t(c):n&&(c=n(c))}var d=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,u=[],e};var l=a.prototype;return l.UNSAFE_componentWillMount=function(){u.push(this),s()},l.componentDidUpdate=function(){s()},l.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},l.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return l(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),l(d,"canUseDOM",i),d}}},"HAE/":function(e,t,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperty:n("hswa").f})},Oyvg:function(e,t,n){var r=n("dyZX"),a=n("Xbzi"),o=n("hswa").f,l=n("kJMx").f,i=n("quPj"),c=n("C/va"),u=r.RegExp,s=u,d=u.prototype,m=/a/g,p=/a/g,f=new u(m)!==m;if(n("nh4g")&&(!f||n("eeVq")((function(){return p[n("K0xU")("match")]=!1,u(m)!=m||u(p)==p||"/a/i"!=u(m,"i")})))){u=function(e,t){var n=this instanceof u,r=i(e),o=void 0===t;return!n&&r&&e.constructor===u&&o?e:a(f?new s(r&&!o?e.source:e,t):s((r=e instanceof u)?e.source:e,r&&o?c.call(e):t),n?this:d,u)};for(var h=function(e){e in u||o(u,e,{configurable:!0,get:function(){return s[e]},set:function(t){s[e]=t}})},y=l(s),b=0;y.length>b;)h(y[b++]);d.constructor=u,u.prototype=d,n("KroJ")(r,"RegExp",u)}n("elZq")("RegExp")},YJM2:function(e,t,n){e.exports={layout:"article-module--layout--2WITO",util_color_blue:"article-module--util_color_blue--17ZRP",util_color_purple:"article-module--util_color_purple--36Duk",typing:"article-module--typing--2oUsV",blinkCaret:"article-module--blink-caret--3LBiP",slideDown:"article-module--slideDown--2P36A",slideUp:"article-module--slideUp--EqVsE",slideRight:"article-module--slideRight---f-vN",slideLeft:"article-module--slideLeft--3E1nE",showUp:"article-module--showUp--19kv1",popUp:"article-module--popUp--3_WLG",showLeft:"article-module--showLeft--36f3g",slideButton:"article-module--slideButton--gqK27",slideButtonReverse:"article-module--slideButtonReverse--XFw6b",click:"article-module--click--1bp3C"}},a2Pb:function(e,t,n){e.exports={layout:"blog-module--layout--25JdM",util_color_blue:"blog-module--util_color_blue--29bIS",util_color_purple:"blog-module--util_color_purple--10mpu",nav:"blog-module--nav--2hl6X",page:"blog-module--page--XvHCb",header:"blog-module--header--3UebM",article:"blog-module--article--1_1nG",article__header:"blog-module--article__header--yIY8a",article__header_date:"blog-module--article__header_date--2_LFB",article__title:"blog-module--article__title--2DYPv",article__buttons:"blog-module--article__buttons--3CG1P",article__buttons_read:"blog-module--article__buttons_read--fX70P",article__buttons_like:"blog-module--article__buttons_like--3B03q",click:"blog-module--click--37-8v",article__wrapper:"blog-module--article__wrapper--Ksqrm",article__tags:"blog-module--article__tags--1FUYu",typing:"blog-module--typing--2AOxS",blinkCaret:"blog-module--blink-caret--2GPko",slideDown:"blog-module--slideDown--2oOq6",slideUp:"blog-module--slideUp--10ARU",slideRight:"blog-module--slideRight--T2Q2z",slideLeft:"blog-module--slideLeft--v7fXF",showUp:"blog-module--showUp--_g5VK",popUp:"blog-module--popUp--2Nul7",showLeft:"blog-module--showLeft--1Ea6c",slideButton:"blog-module--slideButton--1fav2",slideButtonReverse:"blog-module--slideButtonReverse--3MURs"}},bmMU:function(e,t,n){"use strict";n("f3/d"),n("SRfc"),n("a1Th"),n("h7Nl"),n("Oyvg"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F");var r=Array.isArray,a=Object.keys,o=Object.prototype.hasOwnProperty,l="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var i,c,u,s=r(t),d=r(n);if(s&&d){if((c=t.length)!=n.length)return!1;for(i=c;0!=i--;)if(!e(t[i],n[i]))return!1;return!0}if(s!=d)return!1;var m=t instanceof Date,p=n instanceof Date;if(m!=p)return!1;if(m&&p)return t.getTime()==n.getTime();var f=t instanceof RegExp,h=n instanceof RegExp;if(f!=h)return!1;if(f&&h)return t.toString()==n.toString();var y=a(t);if((c=y.length)!==a(n).length)return!1;for(i=c;0!=i--;)if(!o.call(n,y[i]))return!1;if(l&&t instanceof Element&&n instanceof Element)return t===n;for(i=c;0!=i--;)if(!("_owner"===(u=y[i])&&t.$$typeof||e(t[u],n[u])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},j2fB:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Michal Antczak Web Developer","description":"The most reliable and the only affordable Web Developer who creates outstanding, user friendly and well designed websites, mobile Apps and webshops. SEO and online marketing specialist in Amsterdam.","author":"Michal Antczak","keywords":"make website, design websites, create website, make website for my company, website for bussines, zakelijke website laten maken, online webshop starten, webshop beginnen, webdesign, web developer, amsterdam developer, amsterdam, purmerend web developer, purmerend, amsterdam make website","robots":"index, follow","image":"/michalantczak.png","canonicalUrl":"https://www.michalantczak.com"}}}}')},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return he}));n("dZ+Y"),n("KKXr"),n("2Spj"),n("eM6i"),n("8+KV"),n("0l/t"),n("LK8F"),n("pIFo"),n("V+eJ"),n("/SS/"),n("hHhE"),n("91GP"),n("HAE/"),n("rE2o"),n("ioFf"),n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx");var r,a,o,l,i=n("17x9"),c=n.n(i),u=n("8+s/"),s=n.n(u),d=n("bmMU"),m=n.n(d),p=n("q1tI"),f=n.n(p),h=n("MgzW"),y=n.n(h),b="bodyAttributes",w="htmlAttributes",g="titleAttributes",E={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},v=(Object.keys(E).map((function(e){return E[e]})),"charset"),S="cssText",T="href",C="http-equiv",O="innerHTML",k="itemprop",_="name",A="property",x="rel",P="src",I="target",N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},H="defaultTitle",L="defer",j="encodeSpecialCharacters",R="onChangeClientState",U="titleTemplate",M=Object.keys(N).reduce((function(e,t){return e[N[t]]=t,e}),{}),F=[E.NOSCRIPT,E.SCRIPT,E.STYLE],V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},q=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Y=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},J=function(e){var t=$(e,E.TITLE),n=$(e,U);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=$(e,H);return t||r||void 0},z=function(e){return $(e,R)||function(){}},X=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return W({},e,t)}),{})},G=function(e,t){return t.filter((function(e){return void 0!==e[E.BASE]})).map((function(e){return e[E.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},Z=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+V(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),l=0;l<o.length;l++){var i=o[l],c=i.toLowerCase();-1===t.indexOf(c)||n===x&&"canonical"===e[n].toLowerCase()||c===x&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(i)||i!==O&&i!==S&&i!==k||(n=i)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][u]&&(a[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),l=0;l<o.length;l++){var i=o[l],c=y()({},r[i],a[i]);r[i]=c}return e}),[]).reverse()},$=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},Q=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){Q(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:e.requestAnimationFrame||Q,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,l=e.metaTags,i=e.noscriptTags,c=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,d=e.title,m=e.titleAttributes;ce(E.BODY,r),ce(E.HTML,a),ie(d,m);var p={baseTag:ue(E.BASE,n),linkTags:ue(E.LINK,o),metaTags:ue(E.META,l),noscriptTags:ue(E.NOSCRIPT,i),scriptTags:ue(E.SCRIPT,u),styleTags:ue(E.STYLE,s)},f={},h={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(f[e]=n),r.length&&(h[e]=p[e].oldTags)})),t&&t(),c(e,f,h)},le=function(e){return Array.isArray(e)?e.join(""):e},ie=function(e,t){void 0!==e&&document.title!==e&&(document.title=le(e)),ce(E.TITLE,t)},ce=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],o=[].concat(a),l=Object.keys(t),i=0;i<l.length;i++){var c=l[i],u=t[c]||"";n.getAttribute(c)!==u&&n.setAttribute(c,u),-1===a.indexOf(c)&&a.push(c);var s=o.indexOf(c);-1!==s&&o.splice(s,1)}for(var d=o.length-1;d>=0;d--)n.removeAttribute(o[d]);a.length===o.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==l.join(",")&&n.setAttribute("data-react-helmet",l.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(E.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],l=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===O)n.innerHTML=t.innerHTML;else if(r===S)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var i=void 0===t[r]?"":t[r];n.setAttribute(r,i)}n.setAttribute("data-react-helmet","true"),a.some((function(e,t){return l=t,n.isEqualNode(e)}))?a.splice(l,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},de=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[N[n]||n]=e[n],t}),t)},me=function(e,t,n){switch(e){case E.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=de(n,r),[f.a.createElement(E.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=se(n),o=le(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+K(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case b:case w:return{toComponent:function(){return de(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=N[e]||e;if(n===O||n===S){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),f.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===O||e===S)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+K(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",l=-1===F.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(l?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,l=e.metaTags,i=e.noscriptTags,c=e.scriptTags,u=e.styleTags,s=e.title,d=void 0===s?"":s,m=e.titleAttributes;return{base:me(E.BASE,t,r),bodyAttributes:me(b,n,r),htmlAttributes:me(w,a,r),link:me(E.LINK,o,r),meta:me(E.META,l,r),noscript:me(E.NOSCRIPT,i,r),script:me(E.SCRIPT,c,r),style:me(E.STYLE,u,r),title:me(E.TITLE,{title:d,titleAttributes:m},r)}},fe=s()((function(e){return{baseTag:G([T,I],e),bodyAttributes:X(b,e),defer:$(e,L),encode:$(e,j),htmlAttributes:X(w,e),linkTags:Z(E.LINK,[x,T],e),metaTags:Z(E.META,[_,v,C,A,k],e),noscriptTags:Z(E.NOSCRIPT,[O],e),onChangeClientState:z(e),scriptTags:Z(E.SCRIPT,[P,O],e),styleTags:Z(E.STYLE,[S],e),title:J(e),titleAttributes:X(g,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),pe)((function(){return null})),he=(a=fe,l=o=function(e){function t(){return D(this,t),Y(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!m()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case E.SCRIPT:case E.NOSCRIPT:return{innerHTML:t};case E.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return W({},r,((t={})[n.type]=[].concat(r[n.type]||[],[W({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,l=e.nestedChildren;switch(r.type){case E.TITLE:return W({},a,((t={})[r.type]=l,t.titleAttributes=W({},o),t));case E.BODY:return W({},a,{bodyAttributes:W({},o)});case E.HTML:return W({},a,{htmlAttributes:W({},o)})}return W({},a,((n={})[r.type]=W({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=W({},t);return Object.keys(e).forEach((function(t){var r;n=W({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return f.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[M[n]||n]=e[n],t}),t)}(B(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case E.LINK:case E.META:case E.NOSCRIPT:case E.SCRIPT:case E.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:l,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:l,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=B(e,["children"]),r=W({},n);return t&&(r=this.mapChildrenToProps(t,r)),f.a.createElement(a,r)},q(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(f.a.Component),o.propTypes={base:c.a.object,bodyAttributes:c.a.object,children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),defaultTitle:c.a.string,defer:c.a.bool,encodeSpecialCharacters:c.a.bool,htmlAttributes:c.a.object,link:c.a.arrayOf(c.a.object),meta:c.a.arrayOf(c.a.object),noscript:c.a.arrayOf(c.a.object),onChangeClientState:c.a.func,script:c.a.arrayOf(c.a.object),style:c.a.arrayOf(c.a.object),title:c.a.string,titleAttributes:c.a.object,titleTemplate:c.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},l);he.renderStatic=he.rewind}).call(this,n("yLpj"))},vrFN:function(e,t,n){"use strict";var r=n("j2fB"),a=n("q1tI"),o=n.n(a),l=n("qhky");function i(e){var t=e.description,n=e.lang,a=e.meta,i=e.title,c=r.data.site,u=t||c.siteMetadata.description,s=c.siteMetadata.keywords,d=c.siteMetadata.robots,m=c.siteMetadata.image,p=c.siteMetadata.canonicalUrl;return o.a.createElement(l.a,{htmlAttributes:{lang:n},title:i,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{name:"keywords",content:s},{name:"robots",content:d},{name:"image",content:m},{name:"canonicalUrl",content:p},{property:"og:title",content:i},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:u}].concat(a)})}i.defaultProps={lang:"en",meta:[],description:""},t.a=i},vx99:function(e,t,n){"use strict";n.r(t);n("VRzm"),n("Btvt");var r=n("o0o1"),a=n.n(r),o=(n("ls82"),n("q1tI")),l=n.n(o),i=n("Wbzz"),c=n("wNa6"),u=n("vrFN"),s=n("qZve"),d=n("ma3e"),m=n("a2Pb"),p=n.n(m),f=(n("YJM2"),function(){return l.a.createElement("main",null,l.a.createElement("section",null,l.a.createElement("h1",null,"In this article I will discuss how to connect via SSH from your client Windows 10 machine to private Virtual Server running Linux OS."),l.a.createElement("article",null,l.a.createElement("p",null,"How properly setup your VS Code on Windows to be able to connect to your Linux Virtual Server? Things are not so straight forward like on MacOS or other Linux clients. This is because some older versions of Windows 10 haven’t got OpenSSH client installed by default. There are many tutorials on the web, which instruct you how to SSH to your Linux Virtual Server using Putty, but not many how to do it via OpenSSH client (which Putty ",l.a.createElement("strong",null,"is not")," compatibile with) and later how to configure it on Visual Studio to be able to use it from VS Code terminal."),l.a.createElement("p",null,"This tutorial is based and tested on Windows 10 client and Ubuntu 18.04 server (however it should work on other Linux distributions as well)."),l.a.createElement("p",null,"I will assume that you have installed VS Code – if not you can do it right away by:"),l.a.createElement("ul",null,l.a.createElement("li",null,"go to"," ",l.a.createElement("a",{href:"https://code.visualstudio.com/"},"https://code.visualstudio.com/")),l.a.createElement("li",null,"choose your operating System (Windows)"),l.a.createElement("li",null,"download and install.")),l.a.createElement("p",null,"The neccessary tool we will need on Windows 10 to ssh to linux via VS Code is ",l.a.createElement("strong",null,"OpenSSH client"),"."))),l.a.createElement("section",null,l.a.createElement("h3",null,"I. Installing, configuring and testing OpenSSH client on Windows"),l.a.createElement("article",null,l.a.createElement("p",null,"1. To check if you got it installed and active we will log in to PowerShell as administrator:"),l.a.createElement("p",null,"press command Window button or click on Search Field left down on the screen and type ‘PowerShell’ . On left side navigate with arrows to Windows PowerShell and from right side choose ‘Run as administrator’ option. After that you will be promped warning, click Yes and the terminal window will appear.")),l.a.createElement("article",null,l.a.createElement("p",null,"2. Check if OpenSSH client is installed, type:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Get-WindowsCapability -Online | ? Name -like 'OpenSSH*'"),l.a.createElement("li",null,"# If installed - this should return something like this:",l.a.createElement("br",null),"Name : OpenSSH.Client~~~~0.0.1.0",l.a.createElement("br",null),"State : Installed",l.a.createElement("br",null),"Name : OpenSSH.Server~~~~0.0.1.0",l.a.createElement("br",null),"State : Installed",l.a.createElement("br",null))),l.a.createElement("p",null,"If State: Installed – you're fine, OpenSSH is installed already and you can skip step 3.",l.a.createElement("br",null),l.a.createElement("strong",null,"Otherwise State: Not Present – you have to install it manually."))),l.a.createElement("article",null,l.a.createElement("p",null,"3. Install OpenSSH by typing:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Add-WindowsCapability -Online -Name OpenSSH.Client~~~~0.0.1.0")),l.a.createElement("p",null," It should return output like:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Path : ",l.a.createElement("br",null),"Online : True ",l.a.createElement("br",null),"RestartNeeded : False",l.a.createElement("br",null)))),l.a.createElement("article",null,l.a.createElement("p",null,"4. Enable OpenSSH service and firewall configuration. In terminal type:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Start-Service sshd "),l.a.createElement("li",null,"# OPTIONAL but recommended: ",l.a.createElement("br",null),"Set-Service -Name sshd -StartupType 'Automatic' ",l.a.createElement("br",null),"# Confirm the Firewall rule is configured. It should be created automatically by setup. ",l.a.createElement("br",null),"Get-NetFirewallRule -Name *ssh* ",l.a.createElement("br",null),'# There should be a firewall rule named "OpenSSH-Server-In-TCP", which should be enabled ',l.a.createElement("br",null),"# If the firewall does not exist, create one ",l.a.createElement("br",null),"New-NetFirewallRule -Name sshd -DisplayName 'OpenSSH Server (sshd)' -Enabled True -Direction Inbound -Protocol TCP -Action Allow -LocalPort 22 ",l.a.createElement("br",null))),l.a.createElement("p",null,"!Be aware Step 5 assumes that you configured your server with password authentication (5.a) or privateKey authentication (5.b). If you’re not sure what is that – please check my other article about"," ",l.a.createElement("a",{href:"/blog#article_2"},"Ubuntu Configuration with SSH"),".")),l.a.createElement("article",null,l.a.createElement("p",null,"5.a) Check configuration by trying to access your server secured with password authentication. In the PowerShell terminal type:"),l.a.createElement("ul",null,l.a.createElement("li",null,"ssh USER@HOST_NAME"),l.a.createElement("li",null,"# Where USER is your username and HOST_NAME your machine IP address or host name, for example: # ssh root@132.234.567.890 or ssh root@example.com or ssh admin@132.xxx.xxx.xxx etc …")),l.a.createElement("p",null,"Then type your password and here you are. You should be logged in. Be aware that this authentication will succed if and only if you enabled password authentication! For security reasons it is always better to ssh to your server with use of PublicKey authentication. Some of Virtual Hosts Providers such as Digital Ocean or AWS Services will allow you to add SSH key on your server at the moment of creating Droplet (Digital Ocean) or lunching EC2 Instance (AWS Services). If you don’t have generated and enabled SSH Key on your server I recommend to do so! Check my",l.a.createElement("a",{href:"/blog#article_2"},"Ubuntu Configuration with SSH")," article for more info.")),l.a.createElement("article",null,l.a.createElement("p",null,"5.b) Check configuration by trying to access your server secured with PrivateKey authentication:"),l.a.createElement("ul",null,l.a.createElement("li",null,"ssh -i PATH/TO/YOUR/PRIVATE_KEY USER@HOST_NAME"),l.a.createElement("li",null,"#where PATH/TO/YOUR/PRIVATE_KEY is path where you store private key, usually something like: C:\\Users\\admin\\.ssh\\id_rsa #where admin should be replaced with your Windows User name",l.a.createElement("br",null),"# USER is your username on Linux server",l.a.createElement("br",null),"#HOST_NAME - your machine IP address or host name",l.a.createElement("br",null),"# So for example whole command should look like: ssh -i C:\\Users\\John\\.ssh\\id_rsa root@example.com or ssh -i C:\\Users\\John\\.ssh\\id_rsa root@117.18.558.221",l.a.createElement("br",null))),l.a.createElement("p",null,"If you log in for first time you will be promped with:"),l.a.createElement("ul",null,l.a.createElement("li",null,"The authenticity of host 'servername (132.xxx.xxx.xxx)' can't be established. ECDSA key fingerprint is SHA256:(","<a large string>","). Are you sure you want to continue connecting (yes/no)?")),l.a.createElement("p",null,"Type: Yes",l.a.createElement("br",null),"If your key is not secured with phrasse it should already connect you to your Linux VS Server.",l.a.createElement("br",null),"If you secured your key with phrasse you will be asked to enter it.",l.a.createElement("br",null),"That way you should be logged in. ",l.a.createElement("br",null),"But wait. Is this article not about ssh via VS Code not PowerShell?"," ",l.a.createElement("br",null),"Yes it is! That’s just half of the job. Now you have to configure VS Code to connect to server just like you would do it through PowerShell.",l.a.createElement("br",null)))),l.a.createElement("section",null,l.a.createElement("h3",null,"II. Installing, configuring and testing Remote-SSH on Visual Studio Code"),l.a.createElement("article",null,l.a.createElement("p",null,"Now when you are able to SSH to your server via PowerShell OpenSSH client, it is possible to configure VS Code to do it simillar way. You will need to install VS Code extension called Remote Development."),l.a.createElement("ul",null,l.a.createElement("li",null,"Open VS Code and press Ctrl+Shift+X to open search field for extensions."," "),l.a.createElement("li",null,"Type Remote Development to look for it – click install.")),l.a.createElement("p",null,"This extension contains actually three extensions, which Remote-SSH is the most important for us. After installing you should see in left bottom corner small green icon ",l.a.createElement("sub",null,">"),l.a.createElement("sup",null,"<"),".")),l.a.createElement("article",null,l.a.createElement("p",null,"First you need to add your server credentials to configuration file of Remote-SSH. You will do that by clicking on green icon and choosing option"),l.a.createElement("ul",null,l.a.createElement("li",null,"Remote-SSH: Open Configuration File…/ #(eventually press F1 and search for Remote-SSH: Open Configuration File..)."," ")),l.a.createElement("p",null,"Choose the top file, the one with a path like"," ",l.a.createElement("strong",null,"C:\\Users\\USER\\.ssh\\config "),". ",l.a.createElement("br",null),"In that file add following lines:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Host [easy to remember alias of your host machine]"),l.a.createElement("li",null,"HostName [name of host or ip address]"),l.a.createElement("li",null,"User [user you want to login as]"),l.a.createElement("li",null,"IdentityFile [path to the ssh key] # skip this if you ssh with password only")),l.a.createElement("p",null,"For Example:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Host myServer"),l.a.createElement("li",null,"HostName 176.111.234.551"),l.a.createElement("li",null,"User root"),l.a.createElement("li",null,"IdentityFile C:\\Users\\peter\\.ssh\\id_rsa # skip this if you ssh with password only"))),l.a.createElement("article",null,l.a.createElement("p",null,"Save changes in config file. Now click green icon (or press F1) and choose option Remote-SSH: Connect To Host… - you should be able to choose added host and connect to your server (if you use key authentication you will be promped to enter it). That’s it! You can enjoy professional editor + terminal to manage content of your Virtual Server."))))});function h(e,t,n,r,a,o,l){try{var i=e[o](l),c=i.value}catch(u){return void n(u)}i.done?t(c):Promise.resolve(c).then(r,a)}t.default=function(){var e=Object(o.useState)(0),t=e[0],n=e[1],r=Object(o.useContext)(c.a),m=r.store,y=r.dispatch,b=function(){var e,t=(e=a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/uploadVote",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t})});case 3:return n=e.sent,e.next=6,n.json();case 6:"Updated"===e.sent&&fetch("/api/getArticles").then((function(e){return e.json()})).then((function(e){y({type:"getArticles",payload:e})})).catch((function(e){return console.log(e)})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function l(e){h(o,r,a,l,i,"next",e)}function i(e){h(o,r,a,l,i,"throw",e)}l(void 0)}))});return function(e){return t.apply(this,arguments)}}();return Object(o.useEffect)((function(){m.articles.forEach((function(e){var t=e.article_id,n=e.votes;return document.querySelector("#likes-"+t).innerHTML=n}))}),[m.articles]),l.a.createElement(s.a,null,l.a.createElement(u.a,{title:"Services"}),l.a.createElement("nav",{className:p.a.nav},l.a.createElement("p",null,l.a.createElement(i.Link,{to:"/"},"Home")," > ",l.a.createElement(i.Link,{to:"/blog"},"Blog"))),l.a.createElement("main",{className:p.a.page},l.a.createElement("ul",{className:p.a.header},l.a.createElement("li",null,"Sort by:",l.a.createElement("span",null,"date"),l.a.createElement("span",null,"votes")),l.a.createElement("li",null,"Popular:",l.a.createElement("span",null,"JavaScript"),l.a.createElement("span",null,"Nginx"))),l.a.createElement("div",{className:p.a.article},l.a.createElement("div",{className:p.a.article__header},l.a.createElement("div",{className:p.a.article__header_date},l.a.createElement(d.d,{style:{marginRight:"1rem"}}),"Date of submiting:",l.a.createElement("span",null,"06-05-2020"))),l.a.createElement("div",{className:p.a.article__title},l.a.createElement("h6",null,"Connect to Linux Virtual Server via Visual Studio Code on Windows 10 using Secure Shell protocol (SSH) without PuTTY.")),l.a.createElement("div",{className:p.a.article__buttons},l.a.createElement("div",{className:p.a.article__buttons_read},1===t?l.a.createElement("button",{onClick:function(){return n(0)}},"Close"):l.a.createElement("button",{onClick:function(){return e="article_1",n(1),document.querySelector("#"+e).scrollIntoView({behavior:"smooth"});var e}},"Read article")),l.a.createElement("div",{className:p.a.article__buttons_like},l.a.createElement(d.h,{onClick:function(){return b("article_1")}}),l.a.createElement("span",{id:"likes-article_1"}))),l.a.createElement("div",{className:p.a.article__wrapper},l.a.createElement("div",{className:p.a.article__wrapper_content,id:"article_1"},1===t?l.a.createElement(f,null):null)),l.a.createElement("div",{className:p.a.article__tags},l.a.createElement("p",null,"Tags:"),l.a.createElement("ul",null,l.a.createElement("li",null,"#VS Code"),l.a.createElement("li",null,"#Windows"),l.a.createElement("li",null,"#Linux"),l.a.createElement("li",null,"#SSH"))))))}},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=component---src-pages-blog-js-c3718df458750512975e.js.map