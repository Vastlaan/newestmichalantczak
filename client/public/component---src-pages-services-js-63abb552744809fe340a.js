(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"8+s/":function(e,t,n){"use strict";n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var r,a=n("q1tI"),i=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function u(){c=e(l.map((function(e){return e.props}))),f.canUseDOM?t(c):n&&(c=n(c))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,l=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){l.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},o.render=function(){return i.createElement(r,this.props)},a}(a.PureComponent);return o(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),o(f,"canUseDOM",s),f}}},C8Td:function(e,t,n){e.exports={layout:"services-module--layout--1ArOP",util_color_blue:"services-module--util_color_blue--1MZMc",util_color_purple:"services-module--util_color_purple--1QiMt",nav:"services-module--nav--1-jfM",page:"services-module--page--RoZoF",popUp:"services-module--popUp--3PO_G",image:"services-module--image--3ainy",slideLeft:"services-module--slideLeft--1AIpm",typing:"services-module--typing--3qHOp",blinkCaret:"services-module--blink-caret--Os_0N",slideDown:"services-module--slideDown--3_nW7",slideUp:"services-module--slideUp--2DYLl",slideRight:"services-module--slideRight--3pGnX",showUp:"services-module--showUp--3AhuC",showLeft:"services-module--showLeft--1ioli",slideButton:"services-module--slideButton--3G7WA",slideButtonReverse:"services-module--slideButtonReverse--2DX8w",click:"services-module--click--3qos1"}},"HAE/":function(e,t,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperty:n("hswa").f})},Oyvg:function(e,t,n){var r=n("dyZX"),a=n("Xbzi"),i=n("hswa").f,o=n("kJMx").f,s=n("quPj"),c=n("C/va"),l=r.RegExp,u=l,f=l.prototype,d=/a/g,p=/a/g,m=new l(d)!==d;if(n("nh4g")&&(!m||n("eeVq")((function(){return p[n("K0xU")("match")]=!1,l(d)!=d||l(p)==p||"/a/i"!=l(d,"i")})))){l=function(e,t){var n=this instanceof l,r=s(e),i=void 0===t;return!n&&r&&e.constructor===l&&i?e:a(m?new u(r&&!i?e.source:e,t):u((r=e instanceof l)?e.source:e,r&&i?c.call(e):t),n?this:f,l)};for(var b=function(e){e in l||i(l,e,{configurable:!0,get:function(){return u[e]},set:function(t){u[e]=t}})},h=o(u),g=0;h.length>g;)b(h[g++]);f.constructor=l,l.prototype=f,n("KroJ")(r,"RegExp",l)}n("elZq")("RegExp")},bmMU:function(e,t,n){"use strict";n("f3/d"),n("SRfc"),n("a1Th"),n("h7Nl"),n("Oyvg"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F");var r=Array.isArray,a=Object.keys,i=Object.prototype.hasOwnProperty,o="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var s,c,l,u=r(t),f=r(n);if(u&&f){if((c=t.length)!=n.length)return!1;for(s=c;0!=s--;)if(!e(t[s],n[s]))return!1;return!0}if(u!=f)return!1;var d=t instanceof Date,p=n instanceof Date;if(d!=p)return!1;if(d&&p)return t.getTime()==n.getTime();var m=t instanceof RegExp,b=n instanceof RegExp;if(m!=b)return!1;if(m&&b)return t.toString()==n.toString();var h=a(t);if((c=h.length)!==a(n).length)return!1;for(s=c;0!=s--;)if(!i.call(n,h[s]))return!1;if(o&&t instanceof Element&&n instanceof Element)return t===n;for(s=c;0!=s--;)if(!("_owner"===(l=h[s])&&t.$$typeof||e(t[l],n[l])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},j2fB:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Michal Antczak Web Developer","description":"The most reliable and the only affordable Web Developer who creates outstanding, user friendly and well designed websites, mobile Apps and webshops. SEO and online marketing specialist in Amsterdam.","author":"Michal Antczak","keywords":"make website, design websites, create website, make website for my company, website for bussines, zakelijke website laten maken, online webshop starten, webshop beginnen, webdesign, web developer, amsterdam developer, amsterdam, purmerend web developer, purmerend, amsterdam make website","robots":"index, follow","image":"/images/me2.png","canonicalUrl":"https://www.michalantczak.com"}}}}')},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return be}));n("dZ+Y"),n("KKXr"),n("2Spj"),n("eM6i"),n("8+KV"),n("0l/t"),n("LK8F"),n("pIFo"),n("V+eJ"),n("/SS/"),n("hHhE"),n("91GP"),n("HAE/"),n("rE2o"),n("ioFf"),n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx");var r,a,i,o,s=n("17x9"),c=n.n(s),l=n("8+s/"),u=n.n(l),f=n("bmMU"),d=n.n(f),p=n("q1tI"),m=n.n(p),b=n("MgzW"),h=n.n(b),g="bodyAttributes",A="htmlAttributes",y="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},v=(Object.keys(w).map((function(e){return w[e]})),"charset"),E="cssText",T="href",C="http-equiv",S="innerHTML",O="itemprop",x="name",k="property",I="rel",R="src",L="target",M={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",U="defer",j="encodeSpecialCharacters",B="onChangeClientState",K="titleTemplate",N=Object.keys(M).reduce((function(e,t){return e[M[t]]=t,e}),{}),q=[w.NOSCRIPT,w.SCRIPT,w.STYLE],W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},J=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},H=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},F=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},z=function(e){var t=_(e,w.TITLE),n=_(e,K);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=_(e,P);return t||r||void 0},Q=function(e){return _(e,B)||function(){}},X=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return V({},e,t)}),{})},G=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},Z=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+W(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),o=0;o<i.length;o++){var s=i[o],c=s.toLowerCase();-1===t.indexOf(c)||n===I&&"canonical"===e[n].toLowerCase()||c===I&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(s)||s!==S&&s!==E&&s!==O||(n=s)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][l]&&(a[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var s=i[o],c=h()({},r[s],a[s]);r[s]=c}return e}),[]).reverse()},_=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,s=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,f=e.title,d=e.titleAttributes;ce(w.BODY,r),ce(w.HTML,a),se(f,d);var p={baseTag:le(w.BASE,n),linkTags:le(w.LINK,i),metaTags:le(w.META,o),noscriptTags:le(w.NOSCRIPT,s),scriptTags:le(w.SCRIPT,l),styleTags:le(w.STYLE,u)},m={},b={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(b[e]=p[e].oldTags)})),t&&t(),c(e,m,b)},oe=function(e){return Array.isArray(e)?e.join(""):e},se=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),ce(w.TITLE,t)},ce=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],i=[].concat(a),o=Object.keys(t),s=0;s<o.length;s++){var c=o[s],l=t[c]||"";n.getAttribute(c)!==l&&n.setAttribute(c,l),-1===a.indexOf(c)&&a.push(c);var u=i.indexOf(c);-1!==u&&i.splice(u,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);a.length===i.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==o.join(",")&&n.setAttribute("data-react-helmet",o.join(","))}},le=function(e,t){var n=document.head||document.querySelector(w.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===S)n.innerHTML=t.innerHTML;else if(r===E)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[r]?"":t[r];n.setAttribute(r,s)}n.setAttribute("data-react-helmet","true"),a.some((function(e,t){return o=t,n.isEqualNode(e)}))?a.splice(o,1):i.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[M[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=fe(n,r),[m.a.createElement(w.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=ue(n),i=oe(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+F(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+F(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case g:case A:return{toComponent:function(){return fe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=M[e]||e;if(n===S||n===E){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),m.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===S||e===E)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+F(r[t],n)+'"';return e?e+" "+a:a}),""),i=r.innerHTML||r.cssText||"",o=-1===q.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,s=e.noscriptTags,c=e.scriptTags,l=e.styleTags,u=e.title,f=void 0===u?"":u,d=e.titleAttributes;return{base:de(w.BASE,t,r),bodyAttributes:de(g,n,r),htmlAttributes:de(A,a,r),link:de(w.LINK,i,r),meta:de(w.META,o,r),noscript:de(w.NOSCRIPT,s,r),script:de(w.SCRIPT,c,r),style:de(w.STYLE,l,r),title:de(w.TITLE,{title:f,titleAttributes:d},r)}},me=u()((function(e){return{baseTag:G([T,L],e),bodyAttributes:X(g,e),defer:_(e,U),encode:_(e,j),htmlAttributes:X(A,e),linkTags:Z(w.LINK,[I,T],e),metaTags:Z(w.META,[x,v,C,k,O],e),noscriptTags:Z(w.NOSCRIPT,[S],e),onChangeClientState:Q(e),scriptTags:Z(w.SCRIPT,[R,S],e),styleTags:Z(w.STYLE,[E],e),title:z(e),titleAttributes:X(y,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){ie(e,(function(){ae=null}))})):(ie(e),ae=null)}),pe)((function(){return null})),be=(a=me,o=i=function(e){function t(){return D(this,t),H(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return V({},r,((t={})[n.type]=[].concat(r[n.type]||[],[V({},a,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(r.type){case w.TITLE:return V({},a,((t={})[r.type]=o,t.titleAttributes=V({},i),t));case w.BODY:return V({},a,{bodyAttributes:V({},i)});case w.HTML:return V({},a,{htmlAttributes:V({},i)})}return V({},a,((n={})[r.type]=V({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=V({},t);return Object.keys(e).forEach((function(t){var r;n=V({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return m.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[N[n]||n]=e[n],t}),t)}(Y(a,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:o,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Y(e,["children"]),r=V({},n);return t&&(r=this.mapChildrenToProps(t,r)),m.a.createElement(a,r)},J(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(m.a.Component),i.propTypes={base:c.a.object,bodyAttributes:c.a.object,children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),defaultTitle:c.a.string,defer:c.a.bool,encodeSpecialCharacters:c.a.bool,htmlAttributes:c.a.object,link:c.a.arrayOf(c.a.object),meta:c.a.arrayOf(c.a.object),noscript:c.a.arrayOf(c.a.object),onChangeClientState:c.a.func,script:c.a.arrayOf(c.a.object),style:c.a.arrayOf(c.a.object),title:c.a.string,titleAttributes:c.a.object,titleTemplate:c.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);be.renderStatic=be.rewind}).call(this,n("yLpj"))},touW:function(e){e.exports=JSON.parse('{"data":{"laptop":{"image":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAEsElEQVQ4y63UfUxTVxQA8FvomCAFFddC+TAwRjQBp5ApoGGKEydBvhQUqsBkoYpz69zAuOAszGC1Bcd3FXEwaEtsoWUIDyiU0pYPgUKBWik1zlndgiCWiXE6uru+R2u3ufiX9593ct65v55zklcAXnMyMzNBQUEBFmdQqYDD4dqMKJX4ocFBfINAgEPzTUIRGBoaAq89OBwOQAix+B9P3H/rLrEvYTkul/f/EJ1OB2VlFUtxbh4QCBpsGxsbbS0oi8n6SCwWX0RakRwm4/wKNFd5uRJDCwsvWiE2m409i4uKlrDTOa90U1RU9I1er4eWo5DL++L2JixD3/H5fGvhhPqmubtcm/HxcVsEQWwt74pLSuMRpK3mUEpq0KhKNT3z8CEsYZ3/9s5t3TSKmnb6JVrX0SG2ZZw7Z0Wzs0/+q6M8On1LS0urCu1oQqWCtGNHD+r19+7OPX4Mo2JifX68ws5Cwb7+/nbLnpks1tJlVkEhhsXGxfuJRKL6bmlP+YnMjF2/3tfD2dnZF9VVV1rrebzsliZhB4rI5YprjLNnj2OxpKvPAjK+owP2StISumnzZt/m5uZZdKQeSZd2BR6sRH4SidBLBoMB9spl6oyU5EjNxPifaO636Wk4qZuC+VXsRPT+WI/U5j1vT+uIJ7O+/gwtVE+M/8LncRkNDcKNp2jHds89moUPHtw31Fytut7W3s4uO58fOyCTtitarys4NBrtJt45WEL2idxHcLLDdr7K3OHej3f4trU0P/jLuAiNRiM6KuRxOXQx0iJDf+iPhQUo7+p8BmqrHNB6HcGle47o+XyG7KXWubhEYGMHrgc1ywkAlBcysR1GbQslX6u5mtrc2NCKIgO9ipG8nFOU3tHhWyJFNxUYJ+20RPe1E27vlt929hZNknwR/6D9J0BEzgasK7coHMjvACA1OfHl18Cp/oF7Wzu1uDBvgBX1dZ+jOZmH92EtsD027Op1Qem5ls89EJzC7N8lPF6ZmA/cKXCVf7LSsrrA8AwA8nO+Aj0atQ2aqBPxvxjT3rpRJxRQBmzsQzSua2oVHj5ZzWEhe5TvB52bIfkZENpOTsXdCEjnRY+B1UnzzgHJUgvov90EotucInlhYw8T3gkbfNuJOWpHyFWRvctqwRrPmfqgTxfqfPS6g6EcI8EHSlPDBpgT4YtnONH9gJi0YAJlFjBgOxWAeA9PMEJyxUCESPJvX+e3HYLVbgQB5QIQpI32fr9JDKvdoTYtRDZvArsPfyhjqcPhGW7MDUBMNoEUKxh+xBxFQ0AGHViIJ0LuMgA7ydWHlECYBJtKt/bCy+TFybQQyZMlUM5EQV7MgAl88gq4e5kDCN6oxhLPNRvsHJY/1eEBfORxmToKru171lK6tQdWkl9oPwnt/J3gY5Smb5OaOlw0gX0m0OC8ntL9Etxh7jAwUGP+zyPi7R3n75nAp2R2+s9AdACKiraMwRp3qE4NHoJOvrAzLUxVfGcnPF0XrTGB0DkgadS6wwxzENBjBj1x9o43978F7qW4MZISQEkk9WreBzF38klUSULQnjFHr6P1+0OiTyGhR2jFEXFgdUy607rYGAu4bush6+cnkVDBmzh/AwGWV0vUNm6yAAAAAElFTkSuQmCC","aspectRatio":1,"src":"/static/1832287284f252aefc6d4966b99fa937/ee604/seo.png","srcSet":"/static/1832287284f252aefc6d4966b99fa937/69585/seo.png 200w,\\n/static/1832287284f252aefc6d4966b99fa937/497c6/seo.png 400w,\\n/static/1832287284f252aefc6d4966b99fa937/ee604/seo.png 800w,\\n/static/1832287284f252aefc6d4966b99fa937/f3583/seo.png 1200w,\\n/static/1832287284f252aefc6d4966b99fa937/e4d72/seo.png 1280w","sizes":"(max-width: 800px) 100vw, 800px"}}},"webshop":{"image":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAE5UlEQVQ4y01UCVBTVxT9gLh0mRYUqHUBbK22o7baTlVChUDiMkjI10SHTSJBEwOCJBqIRJZIWGIUwiIJmxGhEIECFQaxFYw0boho62jtDMWmCIggIRRw4Off5n8K9c68efe9d+65Z+577yKI1frNJqT5VhvhIk4IYkM6B8Hu0Rt4H5mxRdLscNFjQzDv5hHGyub4PU7EJqiYyF+vJ5GpqSlkziKayuf8kbsZNgAwr6YoZrM2xe/aduaOKn3nr3HXf7mlyqnQ+kCPzqUhlqbpFHrvIPD+MZx5s7EWzDIjBJ/CbEkyk4k/jUHNOZWEbzQkT0DLfjgQtqXrWKG2XFaoruMqMutv3Lm/+1LF5TMlWkmysfnwOdgDCIz/s8gqYiFJasFt5tT1vRqkjUxOBe4/GXXV0JoNKQrWVZlaczWr9OJlVJZYWHBPX9FwvbWtp28Qalqu9ec0KNRtvd20x73Gjt96jT1j45Or/ycbGnK2Zlmy5mj08o8j+aEbRPxUR+a+rKj0TExVVfXwdEFhXUpufoZSV9mn73wAJdU1ndlBgdWaVFnX3V4j3Hz6yBoONJJs4PXQgtFR00oD4IuhII/afvqkgSLgg6sP7XyHeQDVtt8oabp9D+4//R3KWhoCWCJxUIBUXDGRlQBabjjkt/+MBacV4a6sSD5J+HJkeOnE2NiqkP4/372dKr1hKlXDztAQ/cqwsM+I89SmWve4lnpK7hXt5vKUpOON8YKeTRrdZGhClCU2R4Rty1TglY1pcKSoCNzRw8WIeXx88dDwK5dGgPnlmkQx95hA8Z4gxu2/atjOlqV+M7KsPJEPx85mwvcXi+FEvQY/IguBrVltkFGvnWYKo2DVXp4aMZtNDhYA56JK1fIH1emtY83KSoCLduQ7A0AkZfk2kJdga13YlvKoVwx3OgCMLdN6tQ9UaA/gF5pzLeIyDTBiI58gdvYrkL6XL5ysgQ7yorSgZz8qYbxJgemyhIsJQqkwnFQYkxQz8xxMtxdWnhA97M71gjcGbwxr3YaPNn5peVH3DaSdojxw3h0YTqh4xzocCXxQdLguTsjrRt6y1V5UcmZF7LMn5hVMVrRCRgNFBn+am5CKS+WxlrxkCjC4u3oRwYv5yBJ+vD0azhEGMum8tVTqPTeKlxmlUwR0X0rkCg9vspaJCqXtxmgmqRZVJIUVn2eAOl+ESfLK8Nr6YkxfSoFoqZ9+RgJ170eokGMpLEmCMjETLkd8C2dTwkAsOwTudDo6qzS7Ukl+s9DMmJCfLlDhYdkW/HEVFe8o3/5Gp/KEQ9HUrJlrXL3Bxf9skknz5Jblir4O62r/AaedOTm1VX4c1gfvYxAX8/fAgGt+Y9V8Mn8cD+VJ2ZbktICJ/Bw/0Ch9QSX3Bt5R74iZNuK87kMPSdQE/ZwE+Do1yFsb8KPVGggqzABHT88AAqOpqVkwq9SawIahqaW4cmMlS9mca27skI5PGCi25CuPL0gARSL8YC2b1b2K4W909aWNunl4Wtax2Mb1LJaZzonwIzC9/QPLnvf1OVjJ7A+eSvTagKKpG4P3ULjxLLK9bTx8ULAGReXu9F0OyHfyeBvO9To73/RE13UhQbWfMphdO8Uinz9GhhyfDw869Y8MOw+OmlzuPnvqTAR/HcVTrueEniF8rv7SXHfZxI+4/zmb7fUvent3WG6MpYMAAAAASUVORK5CYII=","aspectRatio":1.2121212121212122,"src":"/static/0606100a4c9d62ab21eb973ba93dafee/ee604/webshop.png","srcSet":"/static/0606100a4c9d62ab21eb973ba93dafee/69585/webshop.png 200w,\\n/static/0606100a4c9d62ab21eb973ba93dafee/497c6/webshop.png 400w,\\n/static/0606100a4c9d62ab21eb973ba93dafee/ee604/webshop.png 800w,\\n/static/0606100a4c9d62ab21eb973ba93dafee/f3583/webshop.png 1200w,\\n/static/0606100a4c9d62ab21eb973ba93dafee/5707d/webshop.png 1600w,\\n/static/0606100a4c9d62ab21eb973ba93dafee/a8238/webshop.png 3669w","sizes":"(max-width: 800px) 100vw, 800px"}}},"mobapp":{"image":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAADG0lEQVQ4y2NgwAIUBfjhbAN7X04lFTV9eXl5CyCXUVJSkkVNTY2Zg4MDLA8UZ8AJTE1NGfS1NJhAbCN9vWAdDbVDKsoKD+VlZf8pKSn9jI1PkEVWz8nOxoAXmJiYMLjEZIINtHR0WesaEv/fNyr9f0hm2X8X/7D/yvIy21SVlaq0NTU8eIWlGUHq1NXUcBtoDDTwyf//YIWJC5sWLbp1+v+mvad+TVm37l9wQsY/CQm5/xKyiv8lpKT/S0iIG4DUSUhIMOE00NDIiOE/1MDCheuW9Ow5/3/21q2/u8/f/uddVP6/cErn70krt/3KbOn6a+7qCwpTBueQaNwG6usbwA3sXL5gyd7bd/+3Tp72u2f3of+Z9fX/smdP+bfz6q3/M/cf/usenWwGUhdfUY/bQF1dXbiBU5YuX3Lz9bf/Jf1zftfN3/avoLLpf8f8xf+W7dz7v3fv0b9BFY1gAxOaunAbqKWlDTewZdmyJXvX3v/fNPP974r9G/+H5wT+W7h6/b8Fmw7/75i24m9laR3YwNziBtwGqqtrMMxb9wVsoKt30pKy6in/u6cd+z1x7tn/0SkF/yrqav8tnnX/f/XKI38jw6LABkZnV+I2UFFRiWHBc4gLvRKLlqR1r/qf3rj+d0nH8X9hUZX/Cyd0/evb8Pb/nGl7/iR6hoINTI0pwm2ghqYWw1qol71bUhdHr9j4P3jGjV/Lm1f/y3YO/WeSGfXHMbvtn4dj8H9dOSVLcGbQNcdtIB8fH4OonBpYgayCykoVXZP/akZO/21s/P4b6Vv8FxUQ+8/Dzvafg4v9PScPjw5IHQsrCzMoS6KbBRIAGcTCxsrKCaLFxUSLRYUF74sI8r3g4+f5IyIm8ktKWnK7iKjoJElJqVx2dnYFkBsYGRm5gDQrEMMNhhsGxOxABdwghQqKSqby8orhUlLSSWJi4qUSEpJVYuISrhJyKha62iZG8tIKwiCDmJlZ2KB6mdANZGZgZGRhZGYC2cZq5OuuYBIcaWTsEGRsYGxjqqGlbeEQHaUT07RYubFmtkysRyiouGEU5BNkRPYyADC8Ee3rN0oLAAAAAElFTkSuQmCC","aspectRatio":1.3333333333333333,"src":"/static/b745ea6b1fbae0cbe3ac8c8d6f6caba0/ee604/mobileapps.png","srcSet":"/static/b745ea6b1fbae0cbe3ac8c8d6f6caba0/69585/mobileapps.png 200w,\\n/static/b745ea6b1fbae0cbe3ac8c8d6f6caba0/497c6/mobileapps.png 400w,\\n/static/b745ea6b1fbae0cbe3ac8c8d6f6caba0/ee604/mobileapps.png 800w,\\n/static/b745ea6b1fbae0cbe3ac8c8d6f6caba0/40ffe/mobileapps.png 960w","sizes":"(max-width: 800px) 100vw, 800px"}}},"resdes":{"image":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAArrAAAK6wGCiw1aAAADb0lEQVQoz33TXUybVRgH8Pedo658idvURWBbMnCrkW2WjTLDGJ1bHSszipRRoAZmJ3ZdCi225aMwOi1QYBkwob6FQunWEugHhapdkDE/agIjUYELE42Ju/DOeKNR6fvu/G3ReEV8bp7n6pdznvM/FLVFpaWlPRbvPB5PeVYiQWVFxV9VFy9GFXI5K5fJWI1KxQamvazf62W9U1PsbZeLdU44uba2tt+38qjMzMzt8c5PTLzaY7Wif3SEu2YbQteYA93jDnSMMJi69yki33yNT778Aouff4blpSVYLBZsCaanp2+CCUmJaktLK0r6+1h6oIvsHOwhKR/0EuqdWrK3ppqoRhmiXLxLxoIBMh8OkwatllBGo4EKheaoSCRCra6uUmtra5RAIPgHTE5Wd8XA1zxOds/9EKn5dhnSr+5BMNiHxxtUEE+5UL2+gqGAj3wUDOItpZJQAChmdJSWdb5Hl/Z00vbFBVry6oWETZC/Q91tvo7zeh2bUFlGhA1q5Fx6E9m1CiSVv449NVUQNb0Lq22YxPYJWXk5of6vdvD5KktnJy5VK9gTR46S0pILKMjPR75QiLMFJ1GYJ8K5IjF6rVbidrshlUoJ9d0P32/3+bwDMzMzvvD8/OTq+rrnwfJK6OPg3FWaouqNBiPueDycfzZIbk9OEn9whkz7fPDE5kAg8Cg4O8t9yDCc0+nkiouLufiV+Q73nV+LAh4cnxxHGTME83wYkjIZSuvqfrsxeAvGxkbS3moiHeb30dRigkGvJU3NLdC3mtDWboY1lgSGsUMSi9gmaHOO/3iguRECg3aDJy+LHr7ydvS4TvNI5BqBsERKzsnKiVKnQ9/ArY0XDr/4yyHB83juoIB7cvdTa7t2P70cS8WDjIzMldTU1Egc3DYx4XrYbjJBr9dDp9XiFbEYuafF7P68Y9F9chmbvxBi93d1QHSt5ecBmz007Z+DfcwVNV+35Py77vhH2LY5DQ/bjtrt9oeMfYSzMcwfgzdv/lmoucLWNjfB1tuHE2+UQlivxl5FBVLOiNFzo/+nYcaxMcQ4cHfhfl3ciB2K/u8lLysv7ywsPJWVeyz3QJ5IlHXySM6z2aeKwi+dly5ptNrug1nZ7icSeIFd/ET/Mymp05VVioJ6nWGfpqHx0JjTlRE3xKdfppKSkymapqm/ARhotHi8nIwrAAAAAElFTkSuQmCC","aspectRatio":1.6528925619834711,"src":"/static/071283f7160154e367fb2bf07acc5930/ee604/resdes.png","srcSet":"/static/071283f7160154e367fb2bf07acc5930/69585/resdes.png 200w,\\n/static/071283f7160154e367fb2bf07acc5930/497c6/resdes.png 400w,\\n/static/071283f7160154e367fb2bf07acc5930/ee604/resdes.png 800w,\\n/static/071283f7160154e367fb2bf07acc5930/31987/resdes.png 1000w","sizes":"(max-width: 800px) 100vw, 800px"}}}}}')},vrFN:function(e,t,n){"use strict";var r=n("j2fB"),a=n("q1tI"),i=n.n(a),o=n("qhky");function s(e){var t=e.description,n=e.lang,a=e.meta,s=e.title,c=r.data.site,l=t||c.siteMetadata.description,u=c.siteMetadata.keywords,f=c.siteMetadata.robots,d=c.siteMetadata.image,p=c.siteMetadata.canonicalUrl;return i.a.createElement(o.a,{htmlAttributes:{lang:n},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:l},{name:"keywords",content:u},{name:"robots",content:f},{name:"image",content:d},{name:"canonicalUrl",content:p},{property:"og:title",content:s},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:l}].concat(a)})}s.defaultProps={lang:"en",meta:[],description:""},t.a=s},wCYt:function(e,t,n){"use strict";n.r(t);var r=n("touW"),a=n("q1tI"),i=n.n(a),o=n("9eSz"),s=n.n(o),c=n("Wbzz"),l=n("C8Td"),u=n.n(l),f=n("vrFN"),d=n("qZve");t.default=function(){var e=r.data;return i.a.createElement(d.a,null,i.a.createElement(f.a,{title:"Services"}),i.a.createElement("nav",{className:u.a.nav},i.a.createElement("p",null,i.a.createElement(c.Link,{to:"/"},"Home")," > ",i.a.createElement(c.Link,{to:"/contact"},"Services"))),i.a.createElement("main",{className:u.a.page},i.a.createElement("h1",null,"Your desired product in professional hands"),i.a.createElement("article",null,i.a.createElement("h3",null,"Responsive Websites"),i.a.createElement("section",null,i.a.createElement("p",null,"Creating responsive websites is the must in the age of various resolutions of devices being used by people. I use modern"," ",i.a.createElement("strong",null,"CSS3")," and ",i.a.createElement("strong",null,"Sass")," style syntax to achive that goal. Proper useage of ",i.a.createElement("strong",null,"media-queries"),", display layouts like ",i.a.createElement("strong",null,"grid and flexbox")," facilitated with ",i.a.createElement("strong",null,"imports, mixins and functions")," results with unforgetable user experience."),i.a.createElement("p",null,"More complex architectures require more advanced"," ",i.a.createElement("strong",null,"HTML5")," markup. I resolve every given task into efficient and SEO friendly HTML structure. With good knowladge of powerfull ",i.a.createElement("strong",null,"React")," or build-on-React"," ",i.a.createElement("strong",null,"GatsbyJS")," I bring every desired functionality to life. My intuitive and eye-candy designs deliver users always amazing experience."),i.a.createElement("div",{className:u.a.image},i.a.createElement(s.a,{fluid:e.resdes.image.fluid,alt:"responsive design"})))),i.a.createElement("article",null,i.a.createElement("h3",null,"Webshops"),i.a.createElement("section",null,i.a.createElement("p",null,"I specialize in fully functional, well designed and user friendly webshops. Automated invoices, secure check-outs with"," ",i.a.createElement("strong",null,"Adyen")," API, online support and individual accounts. ALmost everything is possible."),i.a.createElement("p",null,"To provide even better user experience my webshops are programed to store clients views history in database, items from shopping cart in cookies or localStorage. This helps to define clients preferences and improve webshop offert."),i.a.createElement("div",{className:u.a.image},i.a.createElement(s.a,{fluid:e.webshop.image.fluid,alt:"webshop"})))),i.a.createElement("article",null,i.a.createElement("h3",null,"Mobile Apps"),i.a.createElement("section",null,i.a.createElement("p",null,"I write mobile apps in ",i.a.createElement("strong",null,"React Native"),", which means they are compatible with both Apple and Android devices."),i.a.createElement("p",null,"Developing apps is more involving and requires more time. That's why I focus on small projects, but I can join your team if necessary to work on more complex products."),i.a.createElement("div",{className:u.a.image},i.a.createElement(s.a,{fluid:e.mobapp.image.fluid,alt:"mobile apps"})))),i.a.createElement("article",null,i.a.createElement("h3",null,"Online Marketing and SEO"),i.a.createElement("section",null,i.a.createElement("p",null,"The visibillity of the website is a complex result of different factors. Proper HTML structure, fast loading assets, backlinks, website map, geo and meta tags, efficient keywords, name and description - those are the one which every good developer should be aware of while designing the product."),i.a.createElement("p",null,"I always follow best SEO practices and try to advice clients how to build good website reputation, because 'visible' websites require constant care and engagement."),i.a.createElement("div",{className:u.a.image},i.a.createElement(s.a,{fluid:e.laptop.image.fluid,alt:"laptop data"}))))))}},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=component---src-pages-services-js-63abb552744809fe340a.js.map