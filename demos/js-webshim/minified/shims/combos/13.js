jQuery.webshims.register("dom-extend",function(d,g,p,m,n){var y=g.modules,t=/\s*,\s*/,l={},q={},h={},f={},j={},k=d.fn.val,x=function(b,a,c,e,i){return i?k.call(d(b)):k.call(d(b),c)};d.fn.val=function(b){var a=this[0];arguments.length&&null==b&&(b="");if(!arguments.length)return!a||1!==a.nodeType?k.call(this):d.prop(a,"value",b,"val",!0);if(d.isArray(b))return k.apply(this,arguments);var c=d.isFunction(b);return this.each(function(e){a=this;1===a.nodeType&&(c?(e=b.call(a,e,d.prop(a,"value",n,"val",
!0)),null==e&&(e=""),d.prop(a,"value",e,"val")):d.prop(a,"value",b,"val"))})};var o="_webshimsLib"+Math.round(1E3*Math.random()),z=function(b,a,c){b=b.jquery?b[0]:b;if(!b)return c||{};var e=d.data(b,o);c!==n&&(e||(e=d.data(b,o,{})),a&&(e[a]=c));return a?e&&e[a]:e};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(b){d.fn[b.name]=function(){return this.map(function(){var a=z(this,
"shadowData");return a&&a[b.prop]||this})}});["removeAttr","prop","attr"].forEach(function(b){l[b]=d[b];d[b]=function(a,c,e,i,r){var v="val"==i,B=!v?l[b]:x;if(!a||!q[c]||1!==a.nodeType||!v&&i&&"attr"==b&&d.attrFn[c])return B(a,c,e,i,r);var u=(a.nodeName||"").toLowerCase(),w=h[u],g="attr"==b&&(!1===e||null===e)?"removeAttr":b,f,k,o;w||(w=h["*"]);w&&(w=w[c]);w&&(f=w[g]);if(f){if("value"==c)k=f.isVal,f.isVal=v;if("removeAttr"===g)return f.value.call(a);if(e===n)return f.get?f.get.call(a):f.value;f.set&&
("attr"==b&&!0===e&&(e=c),o=f.set.call(a,e));if("value"==c)f.isVal=k}else o=B(a,c,e,i,r);if((e!==n||"removeAttr"===g)&&j[u]&&j[u][c]){var m;m="removeAttr"==g?!1:"prop"==g?!!e:!0;j[u][c].forEach(function(c){if(!c.only||(c.only="prop"==b)||"attr"==c.only&&"prop"!=b)c.call(a,e,m,v?"val":g,b)})}return o};f[b]=function(a,c,e){h[a]||(h[a]={});h[a][c]||(h[a][c]={});var i=h[a][c][b],r=function(a,d,i){return d&&d[a]?d[a]:i&&i[a]?i[a]:"prop"==b&&"value"==c?function(a){return e.isVal?x(this,c,a,!1,0===arguments.length):
l[b](this,c,a)}:"prop"==b&&"value"==a&&e.value.apply?function(a){var e=l[b](this,c);e&&e.apply&&(e=e.apply(this,arguments));return e}:function(a){return l[b](this,c,a)}};h[a][c][b]=e;if(e.value===n){if(!e.set)e.set=e.writeable?r("set",e,i):g.cfg.useStrict&&"prop"==c?function(){throw c+" is readonly on "+a;}:d.noop;if(!e.get)e.get=r("get",e,i)}["value","get","set"].forEach(function(a){e[a]&&(e["_sup"+a]=r(a,i))})}});var C=!d.browser.msie||8<parseInt(d.browser.version,10),D=function(){var b=g.getPrototypeOf(m.createElement("foobar")),
a=Object.prototype.hasOwnProperty;return function(c,e,d){var r=m.createElement(c),v=g.getPrototypeOf(r);if(C&&v&&b!==v&&(!r[e]||!a.call(r,e))){var f=r[e];d._supvalue=function(){return f&&f.apply?f.apply(this,arguments):f};v[e]=d.value}else d._supvalue=function(){var a=z(this,"propValue");return a&&a[e]&&a[e].apply?a[e].apply(this,arguments):a&&a[e]},s.extendValue(c,e,d.value);d.value._supvalue=d._supvalue}}(),s=function(){var b={};g.addReady(function(a,c){var e={},f=function(b){e[b]||(e[b]=d(a.getElementsByTagName(b)),
c[0]&&d.nodeName(c[0],b)&&(e[b]=e[b].add(c)))};d.each(b,function(a,b){f(a);!b||!b.forEach?g.warn("Error: with "+a+"-property. methods: "+b):b.forEach(function(b){e[a].each(b)})});e=null});var a,c=d([]),e=function(e,c){b[e]?b[e].push(c):b[e]=[c];d.isDOMReady&&(a||d(m.getElementsByTagName(e))).each(c)};return{createTmpCache:function(b){d.isDOMReady&&(a=a||d(m.getElementsByTagName(b)));return a||c},flushTmpCache:function(){a=null},content:function(a,b){e(a,function(){var a=d.attr(this,b);null!=a&&d.attr(this,
b,a)})},createElement:function(a,b){e(a,b)},extendValue:function(a,b,c){e(a,function(){d(this).each(function(){z(this,"propValue",{})[b]=this[b];this[b]=c})})}}}(),A=function(b,a){if(b.defaultValue===n)b.defaultValue="";if(!b.removeAttr)b.removeAttr={value:function(){b[a||"prop"].set.call(this,b.defaultValue);b.removeAttr._supvalue.call(this)}};if(!b.attr)b.attr={}};d.extend(g,{getID:function(){var b=(new Date).getTime();return function(a){var a=d(a),c=a.attr("id");c||(b++,c="ID-"+b,a.attr("id",c));
return c}}(),extendUNDEFProp:function(b,a){d.each(a,function(a,e){a in b||(b[a]=e)})},createPropDefault:A,data:z,moveToFirstEvent:function(){var b=d._data?"_data":"data";return function(a,c,e){if((a=(d[b](a,"events")||{})[c])&&1<a.length)c=a.pop(),e||(e="bind"),"bind"==e&&a.delegateCount?a.splice(a.delegateCount,0,c):a.unshift(c)}}(),addShadowDom:function(){var b,a,c,e={init:!1,runs:0,test:function(){var a=e.getHeight(),b=e.getWidth();a!=e.height||b!=e.width?(e.height=a,e.width=b,e.handler({type:"docresize"}),
e.runs++,30>e.runs&&setTimeout(e.test,30)):e.runs=0},handler:function(i){clearTimeout(b);b=setTimeout(function(){if("resize"==i.type){var b=d(p).width(),f=d(p).width();if(f==a&&b==c)return;a=f;c=b;e.height=e.getHeight();e.width=e.getWidth()}d.event.trigger("updateshadowdom")},"resize"==i.type?50:9)},_create:function(){d.each({Height:"getHeight",Width:"getWidth"},function(a,b){var c=m.body,d=m.documentElement;e[b]=function(){return Math.max(c["scroll"+a],d["scroll"+a],c["offset"+a],d["offset"+a],d["client"+
a])}})},start:function(){if(!this.init&&m.body)this.init=!0,this._create(),this.height=e.getHeight(),this.width=e.getWidth(),setInterval(this.test,400),d(this.test),d(p).bind("load",this.test),d(p).bind("resize",this.handler),function(){var a=d.fn.animate,b;d.fn.animate=function(){clearTimeout(b);b=setTimeout(function(){e.test();e.handler({type:"animationstart"})},19);return a.apply(this,arguments)}}()}};d.event.customEvent.updateshadowdom=!0;return function(a,b,c){c=c||{};a.jquery&&(a=a[0]);b.jquery&&
(b=b[0]);var f=d.data(a,o)||d.data(a,o,{}),u=d.data(b,o)||d.data(b,o,{}),h={};if(c.shadowFocusElement){if(c.shadowFocusElement){if(c.shadowFocusElement.jquery)c.shadowFocusElement=c.shadowFocusElement[0];h=d.data(c.shadowFocusElement,o)||d.data(c.shadowFocusElement,o,h)}}else c.shadowFocusElement=b;f.hasShadow=b;h.nativeElement=u.nativeElement=a;h.shadowData=u.shadowData=f.shadowData={nativeElement:a,shadowElement:b,shadowFocusElement:c.shadowFocusElement};c.shadowChilds&&c.shadowChilds.each(function(){z(this,
"shadowData",u.shadowData)});if(c.data)h.shadowData.data=u.shadowData.data=f.shadowData.data=c.data;c=null;g.ready("DOM",function(){e.start()})}}(),propTypes:{standard:function(b){A(b);if(!b.prop)b.prop={set:function(a){b.attr.set.call(this,""+a)},get:function(){return b.attr.get.call(this)||b.defaultValue}}},"boolean":function(b){A(b);if(!b.prop)b.prop={set:function(a){a?b.attr.set.call(this,""):b.removeAttr.value.call(this)},get:function(){return null!=b.attr.get.call(this)}}},src:function(){var b=
m.createElement("a");b.style.display="none";return function(a,c){A(a);if(!a.prop)a.prop={set:function(b){a.attr.set.call(this,b)},get:function(){var a=this.getAttribute(c),i;if(null==a)return"";b.setAttribute("href",a+"");if(!d.support.hrefNormalized){try{d(b).insertAfter(this),i=b.getAttribute("href",4)}catch(f){i=b.getAttribute("href",4)}d(b).detach()}return i||b.href}}}}(),enumarated:function(b){A(b);if(!b.prop)b.prop={set:function(a){b.attr.set.call(this,a)},get:function(){var a=(b.attr.get.call(this)||
"").toLowerCase();if(!a||-1==b.limitedTo.indexOf(a))a=b.defaultValue;return a}}}},reflectProperties:function(b,a){"string"==typeof a&&(a=a.split(t));a.forEach(function(a){g.defineNodeNamesProperty(b,a,{prop:{set:function(b){d.attr(this,a,b)},get:function(){return d.attr(this,a)||""}}})})},defineNodeNameProperty:function(b,a,c){q[a]=!0;if(c.reflect)g.propTypes[c.propType||"standard"](c,a);["prop","attr","removeAttr"].forEach(function(e){var i=c[e];i&&(i="prop"===e?d.extend({writeable:!0},i):d.extend({},
i,{writeable:!0}),f[e](b,a,i),"*"!=b&&g.cfg.extendNative&&"prop"==e&&i.value&&d.isFunction(i.value)&&D(b,a,i),c[e]=i)});c.initAttr&&s.content(b,a);return c},defineNodeNameProperties:function(b,a,c,e){for(var d in a)!e&&a[d].initAttr&&s.createTmpCache(b),c&&!a[d][c]&&(a[d][c]={},["value","set","get"].forEach(function(b){b in a[d]&&(a[d][c][b]=a[d][b],delete a[d][b])})),a[d]=g.defineNodeNameProperty(b,d,a[d]);e||s.flushTmpCache();return a},createElement:function(b,a,c){var e;d.isFunction(a)&&(a={after:a});
s.createTmpCache(b);a.before&&s.createElement(b,a.before);c&&(e=g.defineNodeNameProperties(b,c,!1,!0));a.after&&s.createElement(b,a.after);s.flushTmpCache();return e},onNodeNamesPropertyModify:function(b,a,c,e){"string"==typeof b&&(b=b.split(t));d.isFunction(c)&&(c={set:c});b.forEach(function(b){j[b]||(j[b]={});"string"==typeof a&&(a=a.split(t));c.initAttr&&s.createTmpCache(b);a.forEach(function(a){j[b][a]||(j[b][a]=[],q[a]=!0);if(c.set){if(e)c.set.only=e;j[b][a].push(c.set)}c.initAttr&&s.content(b,
a)});s.flushTmpCache()})},defineNodeNamesBooleanProperty:function(b,a,c){c||(c={});if(d.isFunction(c))c.set=c;g.defineNodeNamesProperty(b,a,{attr:{set:function(b){this.setAttribute(a,b);c.set&&c.set.call(this,!0)},get:function(){return null==this.getAttribute(a)?n:a}},removeAttr:{value:function(){this.removeAttribute(a);c.set&&c.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:c.initAttr||!1})},contentAttr:function(b,a,c){if(b.nodeName){if(c===n)return b=b.attributes[a]||{},c=b.specified?
b.value:null,null==c?n:c;"boolean"==typeof c?c?b.setAttribute(a,a):b.removeAttribute(a):b.setAttribute(a,c)}},activeLang:function(){var b=[],a={},c,e,f=/:\/\/|^\.*\//,h=function(a,b,c){return b&&c&&-1!==d.inArray(b,c.availabeLangs||[])?(a.loading=!0,c=c.langSrc,f.test(c)||(c=g.cfg.basePath+c),g.loader.loadScript(c+b+".js",function(){a.langObj[b]?(a.loading=!1,k(a,!0)):d(function(){a.langObj[b]&&k(a,!0);a.loading=!1})}),!0):!1},j=function(b){a[b]&&a[b].forEach(function(a){a.callback()})},k=function(a,
b){if(a.activeLang!=c&&a.activeLang!==e){var d=y[a.module].options;if(a.langObj[c]||e&&a.langObj[e])a.activeLang=c,a.callback(a.langObj[c]||a.langObj[e],c),j(a.module);else if(!b&&!h(a,c,d)&&!h(a,e,d)&&a.langObj[""]&&""!==a.activeLang)a.activeLang="",a.callback(a.langObj[""],c),j(a.module)}};return function(f){if("string"==typeof f&&f!==c)c=f,e=c.split("-")[0],c==e&&(e=!1),d.each(b,function(a,b){k(b)});else if("object"==typeof f)if(f.register)a[f.register]||(a[f.register]=[]),a[f.register].push(f),
f.callback();else{if(!f.activeLang)f.activeLang="";b.push(f);k(f)}return c}}()});d.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(b,a){g[b]=function(b,d,f,h){"string"==typeof b&&(b=b.split(t));var j={};b.forEach(function(b){j[b]=g[a](b,d,f,h)});return j}});g.isReady("webshimLocalization",!0)});
(function(d,g){var p=d.webshims.browserVersion;if(!(d.browser.mozilla&&5<p)&&(!d.browser.msie||12>p&&7<p)){var m={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},n=function(d,g){d.getAttribute("role")||d.setAttribute("role",g)};d.webshims.addReady(function(p,t){d.each(m,function(f,h){for(var g=d(f,p).add(t.filter(f)),x=0,o=g.length;x<o;x++)n(g[x],h)});if(p===g){var l=g.getElementsByTagName("header")[0],q=g.getElementsByTagName("footer"),h=q.length;
l&&!d(l).closest("section, article")[0]&&n(l,"banner");h&&(l=q[h-1],d(l).closest("section, article")[0]||n(l,"contentinfo"))}})}})(jQuery,document);
jQuery.webshims.register("details",function(d,g,p,m,n,y){var t=function(h){var f=d(h).parent("details");if(f[0]&&f.children(":first").get(0)===h)return f},l=function(h,f){var h=d(h),f=d(f),g=d.data(f[0],"summaryElement");d.data(h[0],"detailsElement",f);if(!g||h[0]!==g[0])g&&(g.hasClass("fallback-summary")?g.remove():g.unbind(".summaryPolyfill").removeData("detailsElement").removeAttr("role").removeAttr("tabindex").removeAttr("aria-expanded").removeClass("summary-button").find("span.details-open-indicator").remove()),d.data(f[0],
"summaryElement",h),f.prop("open",f.prop("open"))};g.createElement("summary",function(){var h=t(this);if(h&&!d.data(this,"detailsElement")){var f,j,k=d.attr(this,"tabIndex")||"0";l(this,h);d(this).bind("focus.summaryPolyfill",function(){d(this).addClass("summary-has-focus")}).bind("blur.summaryPolyfill",function(){d(this).removeClass("summary-has-focus")}).bind("mouseenter.summaryPolyfill",function(){d(this).addClass("summary-has-hover")}).bind("mouseleave.summaryPolyfill",function(){d(this).removeClass("summary-has-hover")}).bind("click.summaryPolyfill",
function(g){var h=t(this);if(h){if(!j&&g.originalEvent)return j=!0,g.stopImmediatePropagation(),g.preventDefault(),d(this).trigger("click"),j=!1;clearTimeout(f);f=setTimeout(function(){g.isDefaultPrevented()||h.prop("open",!h.prop("open"))},0)}}).bind("keydown.summaryPolyfill",function(f){if((13==f.keyCode||32==f.keyCode)&&!f.isDefaultPrevented())j=!0,f.preventDefault(),d(this).trigger("click"),j=!1}).attr({tabindex:k,role:"button"}).prepend('<span class="details-open-indicator" />');g.moveToFirstEvent(this,
"click")}});var q;g.defineNodeNamesBooleanProperty("details","open",function(g){var f=d(d.data(this,"summaryElement"));if(f){var j=g?"removeClass":"addClass",k=d(this);if(!q&&y.animate){k.stop().css({width:"",height:""});var l={width:k.width(),height:k.height()}}f.attr("aria-expanded",""+g);k[j]("closed-details-summary").children().not(f[0])[j]("closed-details-child");!q&&y.animate&&(g={width:k.width(),height:k.height()},k.css(l).animate(g,{complete:function(){d(this).css({width:"",height:""})}}))}});
g.createElement("details",function(){q=!0;var g=d.data(this,"summaryElement");g||(g=d("> summary:first-child",this),g[0]?l(g,this):(d(this).prependPolyfill('<summary class="fallback-summary">'+y.text+"</summary>"),d.data(this,"summaryElement")));d.prop(this,"open",d.prop(this,"open"));q=!1})});
