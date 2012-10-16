jQuery.webshims.register("dom-extend",function(a,g,h,k,n){var u=g.modules,j=/\s*,\s*/,q={},m={},p={},v={},f={},i=a.fn.val,E=function(e,d,b,c,r){return r?i.call(a(e)):i.call(a(e),b)};a.fn.val=function(e){var d=this[0];arguments.length&&null==e&&(e="");if(!arguments.length)return!d||1!==d.nodeType?i.call(this):a.prop(d,"value",e,"val",!0);if(a.isArray(e))return i.apply(this,arguments);var b=a.isFunction(e);return this.each(function(c){d=this;1===d.nodeType&&(b?(c=e.call(d,c,a.prop(d,"value",n,"val",
!0)),null==c&&(c=""),a.prop(d,"value",c,"val")):a.prop(d,"value",e,"val"))})};var w="_webshimsLib"+Math.round(1E3*Math.random()),A=function(e,d,b){e=e.jquery?e[0]:e;if(!e)return b||{};var c=a.data(e,w);b!==n&&(c||(c=a.data(e,w,{})),d&&(c[d]=b));return d?c&&c[d]:c};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(e){a.fn[e.name]=function(){return this.map(function(){var a=A(this,
"shadowData");return a&&a[e.prop]||this})}});["removeAttr","prop","attr"].forEach(function(e){q[e]=a[e];a[e]=function(d,b,c,r,t){var l="val"==r,y=!l?q[e]:E;if(!d||!m[b]||1!==d.nodeType||!l&&r&&"attr"==e&&a.attrFn[b])return y(d,b,c,r,t);var x=(d.nodeName||"").toLowerCase(),B=p[x],C="attr"==e&&(!1===c||null===c)?"removeAttr":e,g,i,h;B||(B=p["*"]);B&&(B=B[b]);B&&(g=B[C]);if(g){if("value"==b)i=g.isVal,g.isVal=l;if("removeAttr"===C)return g.value.call(d);if(c===n)return g.get?g.get.call(d):g.value;g.set&&
("attr"==e&&!0===c&&(c=b),h=g.set.call(d,c));if("value"==b)g.isVal=i}else h=y(d,b,c,r,t);if((c!==n||"removeAttr"===C)&&f[x]&&f[x][b]){var j;j="removeAttr"==C?!1:"prop"==C?!!c:!0;f[x][b].forEach(function(b){if(!b.only||(b.only="prop"==e)||"attr"==b.only&&"prop"!=e)b.call(d,c,j,l?"val":C,e)})}return h};v[e]=function(d,b,c){p[d]||(p[d]={});p[d][b]||(p[d][b]={});var r=p[d][b][e],t=function(a,d,x){return d&&d[a]?d[a]:x&&x[a]?x[a]:"prop"==e&&"value"==b?function(a){return c.isVal?E(this,b,a,!1,0===arguments.length):
q[e](this,b,a)}:"prop"==e&&"value"==a&&c.value.apply?function(a){var c=q[e](this,b);c&&c.apply&&(c=c.apply(this,arguments));return c}:function(a){return q[e](this,b,a)}};p[d][b][e]=c;if(c.value===n){if(!c.set)c.set=c.writeable?t("set",c,r):g.cfg.useStrict&&"prop"==b?function(){throw b+" is readonly on "+d;}:a.noop;if(!c.get)c.get=t("get",c,r)}["value","get","set"].forEach(function(b){c[b]&&(c["_sup"+b]=t(b,r))})}});var o=!a.browser.msie||8<parseInt(a.browser.version,10),D=function(){var a=g.getPrototypeOf(k.createElement("foobar")),
d=Object.prototype.hasOwnProperty;return function(b,c,r){var t=k.createElement(b),l=g.getPrototypeOf(t);if(o&&l&&a!==l&&(!t[c]||!d.call(t,c))){var y=t[c];r._supvalue=function(){return y&&y.apply?y.apply(this,arguments):y};l[c]=r.value}else r._supvalue=function(){var b=A(this,"propValue");return b&&b[c]&&b[c].apply?b[c].apply(this,arguments):b&&b[c]},s.extendValue(b,c,r.value);r.value._supvalue=r._supvalue}}(),s=function(){var e={};g.addReady(function(b,c){var l={},d=function(d){l[d]||(l[d]=a(b.getElementsByTagName(d)),
c[0]&&a.nodeName(c[0],d)&&(l[d]=l[d].add(c)))};a.each(e,function(b,a){d(b);!a||!a.forEach?g.warn("Error: with "+b+"-property. methods: "+a):a.forEach(function(a){l[b].each(a)})});l=null});var d,b=a([]),c=function(b,c){e[b]?e[b].push(c):e[b]=[c];a.isDOMReady&&(d||a(k.getElementsByTagName(b))).each(c)};return{createTmpCache:function(c){a.isDOMReady&&(d=d||a(k.getElementsByTagName(c)));return d||b},flushTmpCache:function(){d=null},content:function(b,d){c(b,function(){var b=a.attr(this,d);null!=b&&a.attr(this,
d,b)})},createElement:function(b,a){c(b,a)},extendValue:function(b,d,l){c(b,function(){a(this).each(function(){A(this,"propValue",{})[d]=this[d];this[d]=l})})}}}(),z=function(a,d){if(a.defaultValue===n)a.defaultValue="";if(!a.removeAttr)a.removeAttr={value:function(){a[d||"prop"].set.call(this,a.defaultValue);a.removeAttr._supvalue.call(this)}};if(!a.attr)a.attr={}};a.extend(g,{getID:function(){var e=(new Date).getTime();return function(d){var d=a(d),b=d.attr("id");b||(e++,b="ID-"+e,d.attr("id",b));
return b}}(),extendUNDEFProp:function(e,d){a.each(d,function(b,a){b in e||(e[b]=a)})},createPropDefault:z,data:A,moveToFirstEvent:function(){var e=a._data?"_data":"data";return function(d,b,c){if((d=(a[e](d,"events")||{})[b])&&1<d.length)b=d.pop(),c||(c="bind"),"bind"==c&&d.delegateCount?d.splice(d.delegateCount,0,b):d.unshift(b)}}(),addShadowDom:function(){var e,d,b,c={init:!1,runs:0,test:function(){var b=c.getHeight(),a=c.getWidth();b!=c.height||a!=c.width?(c.height=b,c.width=a,c.handler({type:"docresize"}),
c.runs++,30>c.runs&&setTimeout(c.test,30)):c.runs=0},handler:function(r){clearTimeout(e);e=setTimeout(function(){if("resize"==r.type){var e=a(h).width(),l=a(h).width();if(l==d&&e==b)return;d=l;b=e;c.height=c.getHeight();c.width=c.getWidth()}a.event.trigger("updateshadowdom")},"resize"==r.type?50:9)},_create:function(){a.each({Height:"getHeight",Width:"getWidth"},function(b,a){var d=k.body,e=k.documentElement;c[a]=function(){return Math.max(d["scroll"+b],e["scroll"+b],d["offset"+b],e["offset"+b],e["client"+
b])}})},start:function(){if(!this.init&&k.body)this.init=!0,this._create(),this.height=c.getHeight(),this.width=c.getWidth(),setInterval(this.test,400),a(this.test),a(h).bind("load",this.test),a(h).bind("resize",this.handler),function(){var b=a.fn.animate,d;a.fn.animate=function(){clearTimeout(d);d=setTimeout(function(){c.test();c.handler({type:"animationstart"})},19);return b.apply(this,arguments)}}()}};a.event.customEvent.updateshadowdom=!0;return function(b,d,l){l=l||{};b.jquery&&(b=b[0]);d.jquery&&
(d=d[0]);var e=a.data(b,w)||a.data(b,w,{}),x=a.data(d,w)||a.data(d,w,{}),f={};if(l.shadowFocusElement){if(l.shadowFocusElement){if(l.shadowFocusElement.jquery)l.shadowFocusElement=l.shadowFocusElement[0];f=a.data(l.shadowFocusElement,w)||a.data(l.shadowFocusElement,w,f)}}else l.shadowFocusElement=d;e.hasShadow=d;f.nativeElement=x.nativeElement=b;f.shadowData=x.shadowData=e.shadowData={nativeElement:b,shadowElement:d,shadowFocusElement:l.shadowFocusElement};l.shadowChilds&&l.shadowChilds.each(function(){A(this,
"shadowData",x.shadowData)});if(l.data)f.shadowData.data=x.shadowData.data=e.shadowData.data=l.data;l=null;g.ready("DOM",function(){c.start()})}}(),propTypes:{standard:function(a){z(a);if(!a.prop)a.prop={set:function(d){a.attr.set.call(this,""+d)},get:function(){return a.attr.get.call(this)||a.defaultValue}}},"boolean":function(a){z(a);if(!a.prop)a.prop={set:function(d){d?a.attr.set.call(this,""):a.removeAttr.value.call(this)},get:function(){return null!=a.attr.get.call(this)}}},src:function(){var e=
k.createElement("a");e.style.display="none";return function(d,b){z(d);if(!d.prop)d.prop={set:function(b){d.attr.set.call(this,b)},get:function(){var c=this.getAttribute(b),d;if(null==c)return"";e.setAttribute("href",c+"");if(!a.support.hrefNormalized){try{a(e).insertAfter(this),d=e.getAttribute("href",4)}catch(f){d=e.getAttribute("href",4)}a(e).detach()}return d||e.href}}}}(),enumarated:function(a){z(a);if(!a.prop)a.prop={set:function(d){a.attr.set.call(this,d)},get:function(){var d=(a.attr.get.call(this)||
"").toLowerCase();if(!d||-1==a.limitedTo.indexOf(d))d=a.defaultValue;return d}}}},reflectProperties:function(e,d){"string"==typeof d&&(d=d.split(j));d.forEach(function(b){g.defineNodeNamesProperty(e,b,{prop:{set:function(c){a.attr(this,b,c)},get:function(){return a.attr(this,b)||""}}})})},defineNodeNameProperty:function(e,d,b){m[d]=!0;if(b.reflect)g.propTypes[b.propType||"standard"](b,d);["prop","attr","removeAttr"].forEach(function(c){var f=b[c];f&&(f="prop"===c?a.extend({writeable:!0},f):a.extend({},
f,{writeable:!0}),v[c](e,d,f),"*"!=e&&g.cfg.extendNative&&"prop"==c&&f.value&&a.isFunction(f.value)&&D(e,d,f),b[c]=f)});b.initAttr&&s.content(e,d);return b},defineNodeNameProperties:function(a,d,b,c){for(var f in d)!c&&d[f].initAttr&&s.createTmpCache(a),b&&!d[f][b]&&(d[f][b]={},["value","set","get"].forEach(function(a){a in d[f]&&(d[f][b][a]=d[f][a],delete d[f][a])})),d[f]=g.defineNodeNameProperty(a,f,d[f]);c||s.flushTmpCache();return d},createElement:function(f,d,b){var c;a.isFunction(d)&&(d={after:d});
s.createTmpCache(f);d.before&&s.createElement(f,d.before);b&&(c=g.defineNodeNameProperties(f,b,!1,!0));d.after&&s.createElement(f,d.after);s.flushTmpCache();return c},onNodeNamesPropertyModify:function(e,d,b,c){"string"==typeof e&&(e=e.split(j));a.isFunction(b)&&(b={set:b});e.forEach(function(a){f[a]||(f[a]={});"string"==typeof d&&(d=d.split(j));b.initAttr&&s.createTmpCache(a);d.forEach(function(d){f[a][d]||(f[a][d]=[],m[d]=!0);if(b.set){if(c)b.set.only=c;f[a][d].push(b.set)}b.initAttr&&s.content(a,
d)});s.flushTmpCache()})},defineNodeNamesBooleanProperty:function(f,d,b){b||(b={});if(a.isFunction(b))b.set=b;g.defineNodeNamesProperty(f,d,{attr:{set:function(a){this.setAttribute(d,a);b.set&&b.set.call(this,!0)},get:function(){return null==this.getAttribute(d)?n:d}},removeAttr:{value:function(){this.removeAttribute(d);b.set&&b.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:b.initAttr||!1})},contentAttr:function(a,d,b){if(a.nodeName){if(b===n)return a=a.attributes[d]||{},b=a.specified?
a.value:null,null==b?n:b;"boolean"==typeof b?b?a.setAttribute(d,d):a.removeAttribute(d):a.setAttribute(d,b)}},activeLang:function(){var f=[],d={},b,c,i=/:\/\/|^\.*\//,t=function(b,c,d){return c&&d&&-1!==a.inArray(c,d.availabeLangs||[])?(b.loading=!0,d=d.langSrc,i.test(d)||(d=g.cfg.basePath+d),g.loader.loadScript(d+c+".js",function(){b.langObj[c]?(b.loading=!1,y(b,!0)):a(function(){b.langObj[c]&&y(b,!0);b.loading=!1})}),!0):!1},l=function(a){d[a]&&d[a].forEach(function(a){a.callback()})},y=function(a,
d){if(a.activeLang!=b&&a.activeLang!==c){var f=u[a.module].options;if(a.langObj[b]||c&&a.langObj[c])a.activeLang=b,a.callback(a.langObj[b]||a.langObj[c],b),l(a.module);else if(!d&&!t(a,b,f)&&!t(a,c,f)&&a.langObj[""]&&""!==a.activeLang)a.activeLang="",a.callback(a.langObj[""],b),l(a.module)}};return function(l){if("string"==typeof l&&l!==b)b=l,c=b.split("-")[0],b==c&&(c=!1),a.each(f,function(a,b){y(b)});else if("object"==typeof l)if(l.register)d[l.register]||(d[l.register]=[]),d[l.register].push(l),
l.callback();else{if(!l.activeLang)l.activeLang="";f.push(l);y(l)}return b}}()});a.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(a,d){g[a]=function(a,c,f,e){"string"==typeof a&&(a=a.split(j));var l={};a.forEach(function(a){l[a]=g[d](a,c,f,e)});return l}});g.isReady("webshimLocalization",!0)});
(function(a,g){var h=a.webshims.browserVersion;if(!(a.browser.mozilla&&5<h)&&(!a.browser.msie||12>h&&7<h)){var k={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},n=function(a,g){a.getAttribute("role")||a.setAttribute("role",g)};a.webshims.addReady(function(h,j){a.each(k,function(g,f){for(var i=a(g,h).add(j.filter(g)),m=0,k=i.length;m<k;m++)n(i[m],f)});if(h===g){var q=g.getElementsByTagName("header")[0],m=g.getElementsByTagName("footer"),p=m.length;
q&&!a(q).closest("section, article")[0]&&n(q,"banner");p&&(q=m[p-1],a(q).closest("section, article")[0]||n(q,"contentinfo"))}})}})(jQuery,document);
(function(a,g,h){var k=g.audio&&g.video,n=!1,u=h.cfg.mediaelement,j=h.bugs,q=function(){h.ready("mediaelement-swf",function(){if(!h.mediaelement.createSWF)h.modules["mediaelement-swf"].test=a.noop,h.reTest(["mediaelement-swf"],k)})},m;if(k){var p=document.createElement("video");g.videoBuffered="buffered"in p;n="loop"in p;h.capturingEvents("play,playing,waiting,paused,ended,durationchange,loadedmetadata,canplay,volumechange".split(","));g.videoBuffered||(h.addPolyfill("mediaelement-native-fix",{f:"mediaelement",
test:g.videoBuffered,d:["dom-support"]}),h.reTest("mediaelement-native-fix"))}if(k&&!u.preferFlash){var v=function(f){var g=f.target.parentNode;!u.preferFlash&&(a(f.target).is("audio, video")||g&&a("source:last",g)[0]==f.target)&&h.ready("DOM mediaelement",function(){m&&q();h.ready("WINDOWLOAD mediaelement-swf",function(){setTimeout(function(){m&&!u.preferFlash&&h.mediaelement.createSWF&&!a(f.target).closest("audio, video").is(".nonnative-api-active")?(u.preferFlash=!0,document.removeEventListener("error",
v,!0),a("audio, video").mediaLoad(),h.info("switching mediaelements option to 'preferFlash', due to an error with native player: "+f.target.src)):m||document.removeEventListener("error",v,!0)},20)})})};document.addEventListener("error",v,!0);a("audio, video").each(function(){this.error&&v({target:this})})}j.track=!1;g.track&&function(){if(!j.track)j.track="number"!=typeof a("<track />")[0].readyState;if(!j.track)try{new TextTrackCue(2,3,"")}catch(f){j.track=!0}var g=h.cfg.track,m=function(f){a(f.target).filter("track").each(k)},
k=function(){if(j.track||!g.override&&3==a.prop(this,"readyState"))g.override=!0,h.reTest("track"),document.removeEventListener("error",m,!0),this&&a.nodeName(this,"track")?h.error("track support was overwritten. Please check your vtt including your vtt mime-type"):h.info("track support was overwritten. due to bad browser support")},n=function(){document.addEventListener("error",m,!0);j.track?k():a("track").each(k)};g.override||(h.isReady("track")?n():a(n))}();h.register("mediaelement-core",function(a,
i,h,v,p){m=swfobject.hasFlashPlayerVersion("9.0.115");var o=i.mediaelement,D=function(b,c){var b=a(b),d={src:b.attr("src")||"",elem:b,srcProp:b.prop("src")};if(!d.src)return d;var e=b.attr("type");if(e)d.type=e,d.container=a.trim(e.split(";")[0]);else if(c||(c=b[0].nodeName.toLowerCase(),"source"==c&&(c=(b.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),e=o.getTypeForSrc(d.src,c))d.type=e,d.container=e;if(e=b.attr("media"))d.media=e;return d},s=!m&&"postMessage"in h&&k,z=
function(){var b;return function(){!b&&s&&(b=!0,i.loader.loadScript("https://www.youtube.com/player_api"),a(function(){i.polyfill("mediaelement-yt")}))}}(),e=function(){m?q():z()};i.addPolyfill("mediaelement-yt",{test:!s,d:["dom-support"]});o.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],'audio/ogg;codecs="opus"':"opus","audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":"mp4,mpg4,m4r,m4a,m4p,m4b,aac".split(","),"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv",
"f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}};o.mimeTypes.source=a.extend({},o.mimeTypes.audio,o.mimeTypes.video);o.getTypeForSrc=function(b,c){if(-1!=b.indexOf("youtube.com/watch?")||
-1!=b.indexOf("youtube.com/v/"))return"video/youtube";var b=b.split("?")[0].split("."),b=b[b.length-1],d;a.each(o.mimeTypes[c],function(a,c){if(-1!==c.indexOf(b))return d=a,!1});return d};o.srces=function(b,c){b=a(b);if(c)b.removeAttr("src").removeAttr("type").find("source").remove(),a.isArray(c)||(c=[c]),c.forEach(function(a){var c=v.createElement("source");"string"==typeof a&&(a={src:a});c.setAttribute("src",a.src);a.type&&c.setAttribute("type",a.type);a.media&&c.setAttribute("media",a.media);b.append(c)});
else{var c=[],d=b[0].nodeName.toLowerCase(),e=D(b,d);e.src?c.push(e):a("source",b).each(function(){e=D(this,d);e.src&&c.push(e)});return c}};a.fn.loadMediaSrc=function(b,c){return this.each(function(){c!==p&&(a(this).removeAttr("poster"),c&&a.attr(this,"poster",c));o.srces(this,b);a(this).mediaLoad()})};o.swfMimeTypes="video/3gpp,video/x-msvideo,video/quicktime,video/x-m4v,video/mp4,video/m4p,video/x-flv,video/flv,audio/mpeg,audio/aac,audio/mp4,audio/x-m4a,audio/m4a,audio/mp3,audio/x-fla,audio/fla,youtube/flv,jwplayer/jwplayer,video/youtube".split(",");
o.canThirdPlaySrces=function(b,c){var d="";if(m||s)b=a(b),c=c||o.srces(b),a.each(c,function(a,b){if(b.container&&b.src&&(m&&-1!=o.swfMimeTypes.indexOf(b.container)||s&&"video/youtube"==b.container))return d=b,!1});return d};var d={};o.canNativePlaySrces=function(b,c){var e="";if(k){var b=a(b),g=(b[0].nodeName||"").toLowerCase();if(!d[g])return e;c=c||o.srces(b);a.each(c,function(a,c){if(c.type&&d[g].prop._supvalue.call(b[0],c.type))return e=c,!1})}return e};o.setError=function(b,c){c||(c="can't play sources");
a(b).pause().data("mediaerror",c);i.warn("mediaelementError: "+c);setTimeout(function(){a(b).data("mediaerror")&&a(b).trigger("mediaerror")},1)};var b=function(){var a;return function(c,d,f){i.ready(m?"mediaelement-swf":"mediaelement-yt",function(){o.createSWF?o.createSWF(c,d,f):a||(a=!0,e(),b(c,d,f))});!a&&s&&!o.createSWF&&z()}}(),c=function(a,d,e,f,g){e||!1!==e&&d&&"third"==d.isActive?(e=o.canThirdPlaySrces(a,f))?b(a,e,d):g?o.setError(a,!1):c(a,d,!1,f,!0):(e=o.canNativePlaySrces(a,f))?d&&"third"==
d.isActive&&o.setActive(a,"html5",d):g?(o.setError(a,!1),d&&"third"==d.isActive&&o.setActive(a,"html5",d)):c(a,d,!0,f,!0)},r=/^(?:embed|object|datalist)$/i,t=function(b,d){var e=i.data(b,"mediaelementBase")||i.data(b,"mediaelementBase",{}),g=o.srces(b),h=b.parentNode;clearTimeout(e.loadTimer);a.data(b,"mediaerror",!1);if(g.length&&h&&!(1!=h.nodeType||r.test(h.nodeName||"")))d=d||i.data(b,"mediaelement"),c(b,d,u.preferFlash||p,g)};a(v).bind("ended",function(b){var c=i.data(b.target,"mediaelement");
(!n||c&&"html5"!=c.isActive||a.prop(b.target,"loop"))&&setTimeout(function(){!a.prop(b.target,"paused")&&a.prop(b.target,"loop")&&a(b.target).prop("currentTime",0).play()},1)});n||i.defineNodeNamesBooleanProperty(["audio","video"],"loop");["audio","video"].forEach(function(b){var c=i.defineNodeNameProperty(b,"load",{prop:{value:function(){var a=i.data(this,"mediaelement");t(this,a);k&&(!a||"html5"==a.isActive)&&c.prop._supvalue&&c.prop._supvalue.apply(this,arguments)}}});d[b]=i.defineNodeNameProperty(b,
"canPlayType",{prop:{value:function(c){var e="";k&&d[b].prop._supvalue&&(e=d[b].prop._supvalue.call(this,c),"no"==e&&(e=""));!e&&m&&(c=a.trim((c||"").split(";")[0]),-1!=o.swfMimeTypes.indexOf(c)&&(e="maybe"));return e}}})});i.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var a=this,b=i.data(a,"mediaelementBase")||i.data(a,"mediaelementBase",{});clearTimeout(b.loadTimer);b.loadTimer=setTimeout(function(){t(a);a=null},9)}});h=function(){i.addReady(function(b,c){a("video, audio",
b).add(c.filter("video, audio")).each(function(){a.browser.msie&&8<i.browserVersion&&a.prop(this,"paused")&&!a.prop(this,"readyState")&&a(this).is('audio[preload="none"][controls]:not([autoplay])')?a(this).prop("preload","metadata").mediaLoad():t(this);if(k){var b,c,d=this,e=function(){var b=a.prop(d,"buffered");if(b){for(var c="",e=0,g=b.length;e<g;e++)c+=b.end(e);return c}},g=function(){var b=e();b!=c&&(c=b,a(d).triggerHandler("progress"))};a(this).bind("play loadstart progress",function(a){"progress"==
a.type&&(c=e());clearTimeout(b);b=setTimeout(g,999)}).bind("emptied stalled mediaerror abort suspend",function(a){"emptied"==a.type&&(c=!1);clearTimeout(b)})}})})};g.track&&!j.track&&i.defineProperty(TextTrack.prototype,"shimActiveCues",{get:function(){return this._shimActiveCues||this.activeCues}});k?(i.isReady("mediaelement-core",!0),h(),i.ready("WINDOWLOAD mediaelement",e)):i.ready("mediaelement-swf",h);a(function(){i.loader.loadList(["track-ui"])})})})(jQuery,Modernizr,jQuery.webshims);
(function(a){var g=window.Modernizr,h=a.webshims,k=h.bugs,n=a('<form action="#" style="width: 1px; height: 1px; overflow: hidden;"><select name="b" required="" /><input type="date" required="" name="a" /><input type="submit" /></form>'),u=function(){if(n[0].querySelector)try{k.findRequired=!n[0].querySelector("select:required")}catch(a){k.findRequired=!1}};k.findRequired=!1;k.validationMessage=!1;k.valueAsNumberSet=!1;h.capturingEventPrevented=function(f){if(!f._isPolyfilled){var g=f.isDefaultPrevented,
h=f.preventDefault;f.preventDefault=function(){clearTimeout(a.data(f.target,f.type+"DefaultPrevented"));a.data(f.target,f.type+"DefaultPrevented",setTimeout(function(){a.removeData(f.target,f.type+"DefaultPrevented")},30));return h.apply(this,arguments)};f.isDefaultPrevented=function(){return!(!g.apply(this,arguments)&&!a.data(f.target,f.type+"DefaultPrevented"))};f._isPolyfilled=!0}};if(!g.formvalidation||k.bustedValidity)u();else if(h.capturingEvents(["input"]),h.capturingEvents(["invalid"],!0),
g.bugfreeformvalidation=!0,window.opera||a.browser.webkit||window.testGoodWithFix){var j=a("input",n).eq(0),q,m=function(a){h.loader.loadList(["dom-extend"]);h.ready("dom-extend",a)},p=function(f){var i=["form-extend","form-message","form-native-fix"];f&&(f.preventDefault(),f.stopImmediatePropagation());clearTimeout(q);setTimeout(function(){n&&(n.remove(),n=j=null)},9);if(!g.bugfreeformvalidation)h.addPolyfill("form-native-fix",{f:"forms",d:["form-extend"]}),h.modules["form-extend"].test=a.noop;h.isReady("form-number-date-api")&&
i.push("form-number-date-api");h.reTest(i);if(j)try{j.prop({disabled:!0,value:""}).prop("disabled",!1).is(":valid")&&m(function(){h.onNodeNamesPropertyModify(["input","textarea"],["disabled","readonly"],{set:function(f){!f&&this&&a.prop(this,"value",a.prop(this,"value"))}});h.onNodeNamesPropertyModify(["select"],["disabled","readonly"],{set:function(f){if(!f&&this)f=a(this).val(),(a("option:last-child",this)[0]||{}).selected=!0,a(this).val(f)}})})}catch(k){}(a.browser.opera||window.testGoodWithFix)&&
m(function(){var f=function(a){a.preventDefault()};["form","input","textarea","select"].forEach(function(g){var i=h.defineNodeNameProperty(g,"checkValidity",{prop:{value:function(){h.fromSubmit||a(this).bind("invalid.checkvalidity",f);h.fromCheckValidity=!0;var g=i.prop._supvalue.apply(this,arguments);h.fromSubmit||a(this).unbind("invalid.checkvalidity",f);h.fromCheckValidity=!1;return g}}})})})};n.appendTo("head");if(window.opera||window.testGoodWithFix){u();k.validationMessage=!j.prop("validationMessage");
if((g.inputtypes||{}).date){try{j.prop("valueAsNumber",0)}catch(v){}k.valueAsNumberSet="1970-01-01"!=j.prop("value")}j.prop("value","")}n.bind("submit",function(a){g.bugfreeformvalidation=!1;p(a)});q=setTimeout(function(){n&&n.triggerHandler("submit")},9);a("input, select",n).bind("invalid",p).filter('[type="submit"]').bind("click",function(a){a.stopImmediatePropagation()}).trigger("click");a.browser.webkit&&g.bugfreeformvalidation&&!h.bugs.bustedValidity&&function(){var f=/^(?:textarea|input)$/i,
g=!1;document.addEventListener("contextmenu",function(a){f.test(a.target.nodeName||"")&&(g=a.target.form)&&setTimeout(function(){g=!1},1)},!1);a(window).bind("invalid",function(a){if(a.originalEvent&&g&&g==a.target.form)a.wrongWebkitInvalid=!0,a.stopImmediatePropagation()})}()}})(jQuery);
jQuery.webshims.register("form-core",function(a,g,h,k,n,u){var j={radio:1},q={checkbox:1,radio:1},m=a([]),p=g.bugs,v=function(b){var b=a(b),c,d;c=m;if(j[b[0].type])d=b.prop("form"),c=(c=b[0].name)?d?a(d[c]):a(k.getElementsByName(c)).filter(function(){return!a.prop(this,"form")}):b,c=c.filter('[type="radio"]');return c},f=g.getContentValidationMessage=function(b,c,d){var e=a(b).data("errormessage")||b.getAttribute("x-moz-errormessage")||"";d&&e[d]&&(e=e[d]);"object"==typeof e&&(c=c||a.prop(b,"validity")||
{valid:1},c.valid||a.each(c,function(a,b){if(b&&"valid"!=a&&e[a])return e=e[a],!1}));if("object"==typeof e)e=e.defaultMessage;return e||""},i={number:1,range:1,date:1},E=function(b){var c=!1;a(a.prop(b,"elements")).each(function(){if(c=a(this).is(":invalid"))return!1});return c};a.extend(a.expr[":"],{"valid-element":function(b){return a.nodeName(b,"form")?!E(b):!(!a.prop(b,"willValidate")||!A(b))},"invalid-element":function(b){return a.nodeName(b,"form")?E(b):!(!a.prop(b,"willValidate")||A(b))},"required-element":function(b){return!(!a.prop(b,
"willValidate")||!a.prop(b,"required"))},"user-error":function(b){return a.prop(b,"willValidate")&&a(b).hasClass("user-error")},"optional-element":function(b){return!!(a.prop(b,"willValidate")&&!1===a.prop(b,"required"))},"in-range":function(b){if(!i[a.prop(b,"type")]||!a.prop(b,"willValidate"))return!1;b=a.prop(b,"validity");return!(!b||b.rangeOverflow||b.rangeUnderflow)},"out-of-range":function(b){if(!i[a.prop(b,"type")]||!a.prop(b,"willValidate"))return!1;b=a.prop(b,"validity");return!(!b||!b.rangeOverflow&&
!b.rangeUnderflow)}});["valid","invalid","required","optional"].forEach(function(b){a.expr[":"][b]=a.expr.filters[b+"-element"]});a.expr[":"].focus=function(a){try{var c=a.ownerDocument;return a===c.activeElement&&(!c.hasFocus||c.hasFocus())}catch(d){}return!1};var w=a.event.customEvent||{},A=function(b){return(a.prop(b,"validity")||{valid:1}).valid};(p.bustedValidity||p.findRequired||!Modernizr.bugfreeformvalidation)&&function(){var b=a.find,c=a.find.matchesSelector,d=/(\:valid|\:invalid|\:optional|\:required|\:in-range|\:out-of-range)(?=[\s\[\~\.\+\>\:\#*]|$)/ig,
e=function(a){return a+"-element"};a.find=function(){var a=Array.prototype.slice,c=function(c){var f=arguments,f=a.call(f,1,f.length);f.unshift(c.replace(d,e));return b.apply(this,f)},f;for(f in b)b.hasOwnProperty(f)&&(c[f]=b[f]);return c}();if(!Modernizr.prefixed||Modernizr.prefixed("matchesSelector",k.documentElement))a.find.matchesSelector=function(a,b){b=b.replace(d,e);return c.call(this,a,b)}}();var o=a.prop,D={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1};a.prop=function(b,c,f){var g=
o.apply(this,arguments);b&&"form"in b&&D[c]&&f!==n&&a(b).hasClass(e)&&A(b)&&(a(b).getShadowElement().removeClass(d),"checked"==c&&f&&v(b).not(b).removeClass(d).removeAttr("aria-invalid"));return g};var s=function(b,c){var d;a.each(b,function(b,e){if(e)return d="customError"==b?a.prop(c,"validationMessage"):b,!1});return d},z=function(a){var c;try{c=k.activeElement.name===a}catch(d){}return c},e="user-error",d="user-error form-ui-invalid";a(k).bind(u.validityUIEvents||"focusout change refreshvalidityui",
function(b){var c,f;if(b.target&&(c=a(b.target).getNativeElement()[0],"submit"!=c.type&&a.prop(c,"willValidate"))){f=a.data(c,"webshimsswitchvalidityclass");var g=function(){if(!("focusout"==b.type&&"radio"==c.type&&z(c.name))){var f=a.prop(c,"validity"),g=a(c).getShadowElement(),h,i,m,k;a(c).trigger("refreshCustomValidityRules");f.valid?g.hasClass("user-success")||(h="user-success form-ui-valid",i=d,k="changedvaliditystate",m="changedvalid",q[c.type]&&c.checked&&v(c).not(c).removeClass(i).addClass(h).removeAttr("aria-invalid"),
a.removeData(c,"webshimsinvalidcause")):(f=s(f,c),a.data(c,"webshimsinvalidcause")!=f&&(a.data(c,"webshimsinvalidcause",f),k="changedvaliditystate"),g.hasClass(e)||(h=d,i="user-success form-ui-valid",q[c.type]&&!c.checked&&v(c).not(c).removeClass(i).addClass(h),m="changedinvalid"));h&&(g.addClass(h).removeClass(i),setTimeout(function(){a(c).trigger(m)},0));k&&setTimeout(function(){a(c).trigger(k)},0);a.removeData(b.target,"webshimsswitchvalidityclass")}};f&&clearTimeout(f);"refreshvalidityui"==b.type?
g():a.data(c,"webshimsswitchvalidityclass",setTimeout(g,9))}});w.changedvaliditystate=!0;w.refreshCustomValidityRules=!0;w.changedvalid=!0;w.changedinvalid=!0;w.refreshvalidityui=!0;g.triggerInlineForm=function(b,c){a(b).trigger(c)};g.modules["form-core"].getGroupElements=v;p=function(){g.scrollRoot=a.browser.webkit||"BackCompat"==k.compatMode?a(k.body):a(k.documentElement)};p();g.ready("DOM",p);g.getRelOffset=function(b,c){var b=a(b),d=a(c).offset(),e;a.swap(a(b)[0],{visibility:"hidden",display:"inline-block",
left:0,top:0},function(){e=b.offset()});d.top-=e.top;d.left-=e.left;return d};g.validityAlert=function(){var b=!a.browser.msie||7<parseInt(a.browser.version,10)?"span":"label",c,d=!1,e=!1,l,i={hideDelay:5E3,showFor:function(b,c,f,g){i._create();var b=a(b),m=a(b).getShadowElement(),k=i.getOffsetFromBody(m);i.clear();g?this.hide():(this.getMessage(b,c),this.position(m,k),this.show(),this.hideDelay&&(d=setTimeout(l,this.hideDelay)),a(h).bind("resize.validityalert",function(){clearTimeout(e);e=setTimeout(function(){i.position(m)},
9)}));f||this.setFocus(m,k)},getOffsetFromBody:function(a){return g.getRelOffset(c,a)},setFocus:function(d,e){var f=a(d).getShadowFocusElement(),h=g.scrollRoot.scrollTop(),i=(e||f.offset()).top-30,m;g.getID&&"label"==b&&c.attr("for",g.getID(f));h>i&&(g.scrollRoot.animate({scrollTop:i-5},{queue:!1,duration:Math.max(Math.min(600,1.5*(h-i)),80)}),m=!0);try{f[0].focus()}catch(j){}m&&(g.scrollRoot.scrollTop(h),setTimeout(function(){g.scrollRoot.scrollTop(h)},0));setTimeout(function(){a(k).bind("focusout.validityalert",
l)},10)},getMessage:function(b,d){d||(d=f(b[0])||b.prop("validationMessage"));d?a("span.va-box",c).text(d):this.hide()},position:function(b,d){d=d?a.extend({},d):i.getOffsetFromBody(b);d.top+=b.outerHeight();c.css(d)},show:function(){"none"===c.css("display")&&c.css({opacity:0}).show();c.addClass("va-visible").fadeTo(400,1)},hide:function(){c.removeClass("va-visible").fadeOut()},clear:function(){clearTimeout(!1);clearTimeout(d);a(k).unbind(".validityalert");a(h).unbind(".validityalert");c.stop().removeAttr("for")},
_create:function(){if(!c)c=i.errorBubble=a("<"+b+' class="validity-alert-wrapper" role="alert"><span  class="validity-alert"><span class="va-arrow"><span class="va-arrow-box"></span></span><span class="va-box"></span></span></'+b+">").css({position:"absolute",display:"none"}),g.ready("DOM",function(){c.appendTo("body");a.fn.bgIframe&&a.browser.msie&&7>parseInt(a.browser.version,10)&&c.bgIframe()})}};l=a.proxy(i,"hide");return i}();(function(){var b,c=[],f;a(k).bind("invalid",function(g){if(!g.wrongWebkitInvalid){var h=
a(g.target),i=h.getShadowElement();i.hasClass(e)||(i.addClass(d).removeClass("user-success form-ui-valid"),setTimeout(function(){a(g.target).trigger("changedinvalid").trigger("changedvaliditystate")},0));if(!b)b=a.Event("firstinvalid"),b.isInvalidUIPrevented=g.isDefaultPrevented,i=a.Event("firstinvalidsystem"),a(k).triggerHandler(i,{element:g.target,form:g.target.form,isInvalidUIPrevented:g.isDefaultPrevented}),h.trigger(b);b&&b.isDefaultPrevented()&&g.preventDefault();c.push(g.target);g.extraData=
"fix";clearTimeout(f);f=setTimeout(function(){var d={type:"lastinvalid",cancelable:!1,invalidlist:a(c)};b=!1;c=[];a(g.target).trigger(d,d)},9);i=h=null}})})();a.fn.getErrorMessage=function(){var b="",c=this[0];c&&(b=f(c)||a.prop(c,"customValidationMessage")||a.prop(c,"validationMessage"));return b};u.replaceValidationUI&&g.ready("DOM forms",function(){a(k).bind("firstinvalid",function(b){b.isInvalidUIPrevented()||(b.preventDefault(),a.webshims.validityAlert.showFor(b.target,a(b.target).prop("customValidationMessage")))})})});
jQuery.webshims.register("form-message",function(a,g,h,k,n,u){var j=g.validityMessages,h=u.overrideMessages||u.customMessages?["customValidationMessage"]:[];j.en=a.extend(!0,{typeMismatch:{email:"Please enter an email address.",url:"Please enter a URL.",number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},
stepMismatch:"Invalid input.",tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}},j.en||j["en-US"]||{});["select","radio"].forEach(function(a){j.en.valueMissing[a]="Please select an option."});["date","time","datetime-local"].forEach(function(a){j.en.rangeUnderflow[a]="Value must be at or after {%min}."});["date",
"time","datetime-local"].forEach(function(a){j.en.rangeOverflow[a]="Value must be at or before {%max}."});j["en-US"]=j["en-US"]||j.en;j[""]=j[""]||j["en-US"];j.de=a.extend(!0,{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen."},
rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr dieses Eingabefeld ein falsches Format! {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein",
checkbox:"Bitte aktivieren Sie das K\u00e4stchen"}},j.de||{});["select","radio"].forEach(function(a){j.de.valueMissing[a]="Bitte w\u00e4hlen Sie eine Option aus"});["date","time","datetime-local"].forEach(function(a){j.de.rangeUnderflow[a]="{%value} ist zu fr\u00fch. {%min} ist die fr\u00fcheste Zeit, die Sie benutzen k\u00f6nnen."});["date","time","datetime-local"].forEach(function(a){j.de.rangeOverflow[a]="{%value} ist zu sp\u00e4t. {%max} ist die sp\u00e4teste Zeit, die Sie benutzen k\u00f6nnen."});
var q=j[""];g.createValidationMessage=function(h,k){var j=q[k];j&&"string"!==typeof j&&(j=j[a.prop(h,"type")]||j[(h.nodeName||"").toLowerCase()]||j.defaultMessage);j&&"value,min,max,title,maxlength,label".split(",").forEach(function(f){if(-1!==j.indexOf("{%"+f)){var i=("label"==f?a.trim(a('label[for="'+h.id+'"]',h.form).text()).replace(/\*$|:$/,""):a.attr(h,f))||"";"patternMismatch"==k&&"title"==f&&!i&&g.error("no title for patternMismatch provided. Always add a title attribute.");j=j.replace("{%"+
f+"}",i);"value"==f&&(j=j.replace("{%valueLen}",i.length))}});return j||""};(g.bugs.validationMessage||!Modernizr.formvalidation||g.bugs.bustedValidity)&&h.push("validationMessage");g.activeLang({langObj:j,module:"form-core",callback:function(a){q=a}});h.forEach(function(h){g.defineNodeNamesProperty(["fieldset","output","button"],h,{prop:{value:"",writeable:!1}});["input","select","textarea"].forEach(function(j){var k=g.defineNodeNameProperty(j,h,{prop:{get:function(){var f=this,h="";if(!a.prop(f,
"willValidate"))return h;var j=a.prop(f,"validity")||{valid:1};if(j.valid||(h=g.getContentValidationMessage(f,j)))return h;if(j.customError&&f.nodeName&&(h=Modernizr.formvalidation&&!g.bugs.bustedValidity&&k.prop._supget?k.prop._supget.call(f):g.data(f,"customvalidationMessage")))return h;a.each(j,function(a,j){if("valid"!=a&&j&&(h=g.createValidationMessage(f,a)))return!1});return h||""},writeable:!1}})})})});
