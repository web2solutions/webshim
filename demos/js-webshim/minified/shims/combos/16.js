(function(c){if(!Modernizr.genericDOM){var e=document,h,i,m=/<([\w:]+)/,q={option:1,optgroup:1,legend:1,thead:1,tr:1,td:1,col:1,area:1};c.webshims.fixHTML5=function(c){if("string"!=typeof c||q[(m.exec(c)||["",""])[1].toLowerCase()])return c;if(!i){h=e.body;if(!h)return c;i=e.createElement("div");i.style.display="none"}var r=i.cloneNode(!1);h.appendChild(r);r.innerHTML=c;h.removeChild(r);return r.childNodes}}})(jQuery);
jQuery.webshims.register("dom-extend",function(c,e,h,i,m){var q=e.modules,n=/\s*,\s*/,r={},s={},p={},k={},u={},x=c.fn.val,v=function(a,b,d,f,o){return o?x.call(c(a)):x.call(c(a),d)};c.fn.val=function(a){var b=this[0];arguments.length&&null==a&&(a="");if(!arguments.length)return!b||1!==b.nodeType?x.call(this):c.prop(b,"value",a,"val",!0);if(c.isArray(a))return x.apply(this,arguments);var d=c.isFunction(a);return this.each(function(f){b=this;1===b.nodeType&&(d?(f=a.call(b,f,c.prop(b,"value",m,"val",
!0)),null==f&&(f=""),c.prop(b,"value",f,"val")):c.prop(b,"value",a,"val"))})};var w="_webshimsLib"+Math.round(1E3*Math.random()),t=function(a,b,d){a=a.jquery?a[0]:a;if(!a)return d||{};var f=c.data(a,w);d!==m&&(f||(f=c.data(a,w,{})),b&&(f[b]=d));return b?f&&f[b]:f};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(a){c.fn[a.name]=function(){return this.map(function(){var b=t(this,
"shadowData");return b&&b[a.prop]||this})}});["removeAttr","prop","attr"].forEach(function(a){r[a]=c[a];c[a]=function(b,d,f,o,g){var l="val"==o,e=!l?r[a]:v;if(!b||!s[d]||1!==b.nodeType||!l&&o&&"attr"==a&&c.attrFn[d])return e(b,d,f,o,g);var z=(b.nodeName||"").toLowerCase(),j=p[z],q="attr"==a&&(!1===f||null===f)?"removeAttr":a,n,i,k;j||(j=p["*"]);j&&(j=j[d]);j&&(n=j[q]);if(n){if("value"==d)i=n.isVal,n.isVal=l;if("removeAttr"===q)return n.value.call(b);if(f===m)return n.get?n.get.call(b):n.value;n.set&&
("attr"==a&&!0===f&&(f=d),k=n.set.call(b,f));if("value"==d)n.isVal=i}else k=e(b,d,f,o,g);if((f!==m||"removeAttr"===q)&&u[z]&&u[z][d]){var h;h="removeAttr"==q?!1:"prop"==q?!!f:!0;u[z][d].forEach(function(d){if(!d.only||(d.only="prop"==a)||"attr"==d.only&&"prop"!=a)d.call(b,f,h,l?"val":q,a)})}return k};k[a]=function(b,d,f){p[b]||(p[b]={});p[b][d]||(p[b][d]={});var o=p[b][d][a],g=function(b,c,o){return c&&c[b]?c[b]:o&&o[b]?o[b]:"prop"==a&&"value"==d?function(b){return f.isVal?v(this,d,b,!1,0===arguments.length):
r[a](this,d,b)}:"prop"==a&&"value"==b&&f.value.apply?function(b){var c=r[a](this,d);c&&c.apply&&(c=c.apply(this,arguments));return c}:function(b){return r[a](this,d,b)}};p[b][d][a]=f;if(f.value===m){if(!f.set)f.set=f.writeable?g("set",f,o):e.cfg.useStrict&&"prop"==d?function(){throw d+" is readonly on "+b;}:c.noop;if(!f.get)f.get=g("get",f,o)}["value","get","set"].forEach(function(a){f[a]&&(f["_sup"+a]=g(a,o))})}});var y=!c.browser.msie||8<parseInt(c.browser.version,10),g=function(){var a=e.getPrototypeOf(i.createElement("foobar")),
b=Object.prototype.hasOwnProperty;return function(d,c,o){var g=i.createElement(d),j=e.getPrototypeOf(g);if(y&&j&&a!==j&&(!g[c]||!b.call(g,c))){var q=g[c];o._supvalue=function(){return q&&q.apply?q.apply(this,arguments):q};j[c]=o.value}else o._supvalue=function(){var a=t(this,"propValue");return a&&a[c]&&a[c].apply?a[c].apply(this,arguments):a&&a[c]},l.extendValue(d,c,o.value);o.value._supvalue=o._supvalue}}(),l=function(){var a={};e.addReady(function(b,d){var f={},g=function(a){f[a]||(f[a]=c(b.getElementsByTagName(a)),
d[0]&&c.nodeName(d[0],a)&&(f[a]=f[a].add(d)))};c.each(a,function(a,b){g(a);!b||!b.forEach?e.warn("Error: with "+a+"-property. methods: "+b):b.forEach(function(b){f[a].each(b)})});f=null});var b,d=c([]),f=function(d,f){a[d]?a[d].push(f):a[d]=[f];c.isDOMReady&&(b||c(i.getElementsByTagName(d))).each(f)};return{createTmpCache:function(a){c.isDOMReady&&(b=b||c(i.getElementsByTagName(a)));return b||d},flushTmpCache:function(){b=null},content:function(a,b){f(a,function(){var a=c.attr(this,b);null!=a&&c.attr(this,
b,a)})},createElement:function(a,b){f(a,b)},extendValue:function(a,b,d){f(a,function(){c(this).each(function(){t(this,"propValue",{})[b]=this[b];this[b]=d})})}}}(),j=function(a,b){if(a.defaultValue===m)a.defaultValue="";if(!a.removeAttr)a.removeAttr={value:function(){a[b||"prop"].set.call(this,a.defaultValue);a.removeAttr._supvalue.call(this)}}};c.extend(e,{getID:function(){var a=(new Date).getTime();return function(b){var b=c(b),d=b.attr("id");d||(a++,d="ID-"+a,b.attr("id",d));return d}}(),extendUNDEFProp:function(a,
b){c.each(b,function(b,c){b in a||(a[b]=c)})},createPropDefault:j,data:t,moveToFirstEvent:function(){var a=c._data?"_data":"data";return function(b,d,f){if((b=(c[a](b,"events")||{})[d])&&1<b.length)d=b.pop(),f||(f="bind"),"bind"==f&&b.delegateCount?b.splice(b.delegateCount,0,d):b.unshift(d)}}(),addShadowDom:function(a,b,d){d=d||{};a.jquery&&(a=a[0]);b.jquery&&(b=b[0]);if(!d.shadowFocusElement)d.shadowFocusElement=b;var f=c.data(a,w)||c.data(a,w,{}),g=c.data(b,w)||c.data(b,w,{});f.hasShadow=b;g.nativeElement=
a;g.shadowData=f.shadowData={nativeElement:a,shadowElement:b,shadowFocusElement:d.shadowFocusElement};d.shadowChilds&&d.shadowChilds.each(function(){t(this,"shadowData",g.shadowData)});if(d.data)f.shadowData.data=d.data,g.shadowData.data=d.data;d=null},propTypes:{standard:function(a){j(a);if(!a.prop)a.prop={set:function(b){a.attr.set.call(this,""+b)},get:function(){return a.attr.get.call(this)||a.defaultValue}}},"boolean":function(a){j(a);if(!a.prop)a.prop={set:function(b){b?a.attr.set.call(this,
""):a.removeAttr.value.call(this)},get:function(){return null!=a.attr.get.call(this)}}}},reflectProperties:function(a,b){"string"==typeof b&&(b=b.split(n));b.forEach(function(b){e.defineNodeNamesProperty(a,b,{prop:{set:function(a){c.attr(this,b,a)},get:function(){return c.attr(this,b)||""}}})})},defineNodeNameProperty:function(a,b,d){s[b]=!0;if(d.reflect)e.propTypes[d.propType||"standard"](d);["prop","attr","removeAttr"].forEach(function(f){var o=d[f];o&&(o="prop"===f?c.extend({writeable:!0},o):c.extend({},
o,{writeable:!0}),k[f](a,b,o),"*"!=a&&e.cfg.extendNative&&"prop"==f&&o.value&&c.isFunction(o.value)&&g(a,b,o),d[f]=o)});d.initAttr&&l.content(a,b);return d},defineNodeNameProperties:function(a,b,d,c){for(var g in b)!c&&b[g].initAttr&&l.createTmpCache(a),d&&(b[g][d]?e.log("override: "+a+"["+g+"] for "+d):(b[g][d]={},["value","set","get"].forEach(function(a){a in b[g]&&(b[g][d][a]=b[g][a],delete b[g][a])}))),b[g]=e.defineNodeNameProperty(a,g,b[g]);c||l.flushTmpCache();return b},createElement:function(a,
b,d){var f;c.isFunction(b)&&(b={after:b});l.createTmpCache(a);b.before&&l.createElement(a,b.before);d&&(f=e.defineNodeNameProperties(a,d,!1,!0));b.after&&l.createElement(a,b.after);l.flushTmpCache();return f},onNodeNamesPropertyModify:function(a,b,d,f){"string"==typeof a&&(a=a.split(n));c.isFunction(d)&&(d={set:d});a.forEach(function(a){u[a]||(u[a]={});"string"==typeof b&&(b=b.split(n));d.initAttr&&l.createTmpCache(a);b.forEach(function(b){u[a][b]||(u[a][b]=[],s[b]=!0);if(d.set){if(f)d.set.only=f;
u[a][b].push(d.set)}d.initAttr&&l.content(a,b)});l.flushTmpCache()})},defineNodeNamesBooleanProperty:function(a,b,d){d||(d={});if(c.isFunction(d))d.set=d;e.defineNodeNamesProperty(a,b,{attr:{set:function(a){this.setAttribute(b,a);d.set&&d.set.call(this,!0)},get:function(){return null==this.getAttribute(b)?m:b}},removeAttr:{value:function(){this.removeAttribute(b);d.set&&d.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:d.initAttr||!1})},contentAttr:function(a,b,d){if(a.nodeName){if(d===
m)return d=(a.attributes[b]||{}).value,null==d?m:d;"boolean"==typeof d?d?a.setAttribute(b,b):a.removeAttribute(b):a.setAttribute(b,d)}},activeLang:function(){var a=[],b={},d,f,g=/:\/\/|^\.*\//,l=function(a,b,d){return b&&d&&-1!==c.inArray(b,d.availabeLangs||[])?(a.loading=!0,d=d.langSrc,g.test(d)||(d=e.cfg.basePath+d),e.loader.loadScript(d+b+".js",function(){a.langObj[b]?(a.loading=!1,n(a,!0)):c(function(){a.langObj[b]&&n(a,!0);a.loading=!1})}),!0):!1},j=function(a){b[a]&&b[a].forEach(function(a){a.callback()})},
n=function(a,b){if(a.activeLang!=d&&a.activeLang!==f){var c=q[a.module].options;if(a.langObj[d]||f&&a.langObj[f])a.activeLang=d,a.callback(a.langObj[d]||a.langObj[f],d),j(a.module);else if(!b&&!l(a,d,c)&&!l(a,f,c)&&a.langObj[""]&&""!==a.activeLang)a.activeLang="",a.callback(a.langObj[""],d),j(a.module)}};return function(g){if("string"==typeof g&&g!==d)d=g,f=d.split("-")[0],d==f&&(f=!1),c.each(a,function(a,b){n(b)});else if("object"==typeof g)if(g.register)b[g.register]||(b[g.register]=[]),b[g.register].push(g),
g.callback();else{if(!g.activeLang)g.activeLang="";a.push(g);n(g)}return d}}()});c.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(a,b){e[a]=function(a,c,g,l){"string"==typeof a&&(a=a.split(n));var j={};a.forEach(function(a){j[a]=e[b](a,c,g,l)});return j}});e.isReady("webshimLocalization",!0)});
(function(c,e){var h=c.webshims.browserVersion;if(!(c.browser.mozilla&&5<h)&&(!c.browser.msie||12>h&&7<h)){var i={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},m=function(c,e){c.getAttribute("role")||c.setAttribute("role",e)};c.webshims.addReady(function(q,n){c.each(i,function(e,h){for(var i=c(e,q).add(n.filter(e)),p=0,r=i.length;p<r;p++)m(i[p],h)});if(q===e){var h=e.getElementsByTagName("header")[0],s=e.getElementsByTagName("footer"),p=s.length;
h&&!c(h).closest("section, article")[0]&&m(h,"banner");p&&(h=s[p-1],c(h).closest("section, article")[0]||m(h,"contentinfo"))}})}})(jQuery,document);
(function(c,e,h){var i=e.audio&&e.video,m=!1;if(i)c=document.createElement("video"),e.videoBuffered="buffered"in c,m="loop"in c,h.capturingEvents("play,playing,waiting,paused,ended,durationchange,loadedmetadata,canplay,volumechange".split(",")),e.videoBuffered||(h.addPolyfill("mediaelement-native-fix",{f:"mediaelement",test:e.videoBuffered,d:["dom-support"]}),h.reTest("mediaelement-native-fix"));jQuery.webshims.register("mediaelement-core",function(c,e,h,s,p){var k=e.mediaelement,u=e.cfg.mediaelement,
x=function(a,b){var a=c(a),d={src:a.attr("src")||"",elem:a,srcProp:a.prop("src")};if(!d.src)return d;var f=a.attr("type");if(f)d.type=f,d.container=c.trim(f.split(";")[0]);else if(b||(b=a[0].nodeName.toLowerCase(),"source"==b&&(b=(a.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),f=k.getTypeForSrc(d.src,b))d.type=f,d.container=f,e.warn("you should always provide a proper mime-type using the source element. "+d.src+" detected as: "+f),c.nodeName(a[0],"source")&&a.attr("type",
f);if(f=a.attr("media"))d.media=f;return d},v=swfobject.hasFlashPlayerVersion("9.0.115"),w=function(){e.ready("mediaelement-swf",function(){if(!k.createSWF)e.modules["mediaelement-swf"].test=c.noop,e.reTest(["mediaelement-swf"],i)})};k.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],"audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":"mp4,mpg4,m4r,m4a,m4p,m4b,aac".split(","),"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8",
"m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}};k.mimeTypes.source=c.extend({},k.mimeTypes.audio,k.mimeTypes.video);k.getTypeForSrc=function(a,b){if(-1!=a.indexOf("youtube.com/watch?")||-1!=a.indexOf("youtube.com/v/"))return"video/youtube";
var a=a.split("?")[0].split("."),a=a[a.length-1],d;c.each(k.mimeTypes[b],function(b,c){if(-1!==c.indexOf(a))return d=b,!1});return d};k.srces=function(a,b){a=c(a);if(b)a.removeAttr("src").removeAttr("type").find("source").remove(),c.isArray(b)||(b=[b]),b.forEach(function(b){var c=s.createElement("source");"string"==typeof b&&(b={src:b});c.setAttribute("src",b.src);b.type&&c.setAttribute("type",b.type);b.media&&c.setAttribute("media",b.media);a.append(c)});else{var b=[],d=a[0].nodeName.toLowerCase(),
f=x(a,d);f.src?b.push(f):c("source",a).each(function(){f=x(this,d);f.src&&b.push(f)});return b}};c.fn.loadMediaSrc=function(a,b){return this.each(function(){b!==p&&(c(this).removeAttr("poster"),b&&c.attr(this,"poster",b));k.srces(this,a);c(this).mediaLoad()})};k.swfMimeTypes="video/3gpp,video/x-msvideo,video/quicktime,video/x-m4v,video/mp4,video/m4p,video/x-flv,video/flv,audio/mpeg,audio/aac,audio/mp4,audio/x-m4a,audio/m4a,audio/mp3,audio/x-fla,audio/fla,youtube/flv,jwplayer/jwplayer,video/youtube".split(",");
k.canSwfPlaySrces=function(a,b){var d="";v&&(a=c(a),b=b||k.srces(a),c.each(b,function(a,b){if(b.container&&b.src&&-1!=k.swfMimeTypes.indexOf(b.container))return d=b,!1}));return d};var t={};k.canNativePlaySrces=function(a,b){var d="";if(i){var a=c(a),f=(a[0].nodeName||"").toLowerCase();if(!t[f])return d;b=b||k.srces(a);c.each(b,function(b,c){if(c.type&&t[f].prop._supvalue.call(a[0],c.type))return d=c,!1})}return d};k.setError=function(a,b){b||(b="can't play sources");c(a).pause().data("mediaerror",
b);e.warn("mediaelementError: "+b);setTimeout(function(){c(a).data("mediaerror")&&c(a).trigger("mediaerror")},1)};var y=function(){var a;return function(b,c,f){e.ready("mediaelement-swf",function(){k.createSWF?k.createSWF(b,c,f):a||(a=!0,w(),y(b,c,f))})}}(),g=function(a,b,c,f,e){c||!1!==c&&b&&"flash"==b.isActive?(c=k.canSwfPlaySrces(a,f))?y(a,c,b):e?k.setError(a,!1):g(a,b,!1,f,!0):(c=k.canNativePlaySrces(a,f))?b&&"flash"==b.isActive&&k.setActive(a,"html5",b):e?(k.setError(a,!1),b&&"flash"==b.isActive&&
k.setActive(a,"html5",b)):g(a,b,!0,f,!0)},l=/^(?:embed|object|datalist)$/i,j=function(a,b){var d=e.data(a,"mediaelementBase")||e.data(a,"mediaelementBase",{}),f=k.srces(a),j=a.parentNode;clearTimeout(d.loadTimer);c.data(a,"mediaerror",!1);if(f.length&&j&&!(1!=j.nodeType||l.test(j.nodeName||"")))b=b||e.data(a,"mediaelement"),g(a,b,u.preferFlash||p,f)};c(s).bind("ended",function(a){var b=e.data(a.target,"mediaelement");(!m||b&&"html5"!=b.isActive||c.prop(a.target,"loop"))&&setTimeout(function(){!c.prop(a.target,
"paused")&&c.prop(a.target,"loop")&&c(a.target).prop("currentTime",0).play()},1)});m||e.defineNodeNamesBooleanProperty(["audio","video"],"loop");["audio","video"].forEach(function(a){var b=e.defineNodeNameProperty(a,"load",{prop:{value:function(){var a=e.data(this,"mediaelement");j(this,a);i&&(!a||"html5"==a.isActive)&&b.prop._supvalue&&b.prop._supvalue.apply(this,arguments)}}});t[a]=e.defineNodeNameProperty(a,"canPlayType",{prop:{value:function(b){var f="";i&&t[a].prop._supvalue&&(f=t[a].prop._supvalue.call(this,
b),"no"==f&&(f=""));!f&&v&&(b=c.trim((b||"").split(";")[0]),-1!=k.swfMimeTypes.indexOf(b)&&(f="maybe"));return f}}})});e.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var a=this,b=e.data(a,"mediaelementBase")||e.data(a,"mediaelementBase",{});clearTimeout(b.loadTimer);b.loadTimer=setTimeout(function(){j(a);a=null},9)}});h=function(){e.addReady(function(a,b){c("video, audio",a).add(b.filter("video, audio")).each(function(){c.browser.msie&&8<e.browserVersion&&c.prop(this,
"paused")&&!c.prop(this,"readyState")&&c(this).is('audio[preload="none"][controls]:not([autoplay])')?c(this).prop("preload","metadata").mediaLoad():j(this);if(i){var a,b,g=this,l=function(){var a=c.prop(g,"buffered");if(a){for(var b="",d=0,f=a.length;d<f;d++)b+=a.end(d);return b}},h=function(){var a=l();a!=b&&(b=a,c(g).triggerHandler("progress"))};c(this).bind("play loadstart progress",function(c){"progress"==c.type&&(b=l());clearTimeout(a);a=setTimeout(h,999)}).bind("emptied stalled mediaerror abort suspend",
function(c){"emptied"==c.type&&(b=!1);clearTimeout(a)})}})})};i?(e.isReady("mediaelement-core",!0),h(),v&&e.ready("WINDOWLOAD mediaelement",w)):e.ready("mediaelement-swf",h)})})(jQuery,Modernizr,jQuery.webshims);
(function(c){var e=window.Modernizr,h=c.webshims,i=h.bugs,m=c('<form action="#" style="width: 1px; height: 1px; overflow: hidden;"><select name="b" required /><input type="date" required name="a" /><input type="submit" /></form>'),q=function(){if(m[0].querySelector)try{i.findRequired=!m[0].querySelector("select:required")}catch(c){i.findRequired=!1}};i.findRequired=!1;i.validationMessage=!1;i.valueAsNumberSet=!1;h.capturingEventPrevented=function(e){if(!e._isPolyfilled){var h=e.isDefaultPrevented,
i=e.preventDefault;e.preventDefault=function(){clearTimeout(c.data(e.target,e.type+"DefaultPrevented"));c.data(e.target,e.type+"DefaultPrevented",setTimeout(function(){c.removeData(e.target,e.type+"DefaultPrevented")},30));return i.apply(this,arguments)};e.isDefaultPrevented=function(){return!(!h.apply(this,arguments)&&!c.data(e.target,e.type+"DefaultPrevented"))};e._isPolyfilled=!0}};if(!e.formvalidation||i.bustedValidity)q();else if(h.capturingEvents(["input"]),h.capturingEvents(["invalid"],!0),
e.bugfreeformvalidation=!0,window.opera||c.browser.webkit||window.testGoodWithFix){var n=c("input",m).eq(0),r,s=function(c){h.loader.loadList(["dom-extend"]);h.ready("dom-extend",c)},p=function(i){var k=["form-extend","form-message","form-native-fix"];i&&(i.preventDefault(),i.stopImmediatePropagation());clearTimeout(r);setTimeout(function(){m&&(m.remove(),m=n=null)},9);if(!e.bugfreeformvalidation)h.addPolyfill("form-native-fix",{f:"forms",d:["form-extend"]}),h.modules["form-extend"].test=c.noop;h.isReady("form-number-date-api")&&
k.push("form-number-date-api");h.reTest(k);if(n)try{n.prop({disabled:!0,value:""}).prop("disabled",!1).is(":valid")&&s(function(){h.onNodeNamesPropertyModify(["input","textarea","select"],["disabled","readonly"],{set:function(){this.disabled||c(this).val(c(this).val())}})})}catch(p){}(c.browser.opera||window.testGoodWithFix)&&s(function(){var i=function(c){c.preventDefault()};["form","input","textarea","select"].forEach(function(e){var k=h.defineNodeNameProperty(e,"checkValidity",{prop:{value:function(){h.fromSubmit||
c(this).bind("invalid.checkvalidity",i);h.fromCheckValidity=!0;var g=k.prop._supvalue.apply(this,arguments);h.fromSubmit||c(this).unbind("invalid.checkvalidity",i);h.fromCheckValidity=!1;return g}}})});e.input.list&&!(c("<datalist><select><option></option></select></datalist>").prop("options")||[]).length&&h.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var e=this.options||[];if(!e.length){var i=c("select",this);if(i[0]&&i[0].options&&i[0].options.length)e=i[0].options}return e}}})})};
m.appendTo("head");if(window.opera||window.testGoodWithFix){q();i.validationMessage=!n.prop("validationMessage");if((e.inputtypes||{}).date){try{n.prop("valueAsNumber",0)}catch(k){}i.valueAsNumberSet="1970-01-01"!=n.prop("value")}n.prop("value","")}m.bind("submit",function(c){e.bugfreeformvalidation=!1;p(c)});r=setTimeout(function(){m&&m.triggerHandler("submit")},9);c("input, select",m).bind("invalid",p).filter('[type="submit"]').bind("click",function(c){c.stopImmediatePropagation()}).trigger("click")}})(jQuery);
jQuery.webshims.register("form-core",function(c,e,h,i,m,q){var n={radio:1},r={checkbox:1,radio:1},s=c([]),p=e.bugs,k=function(g){var g=c(g),e,j;e=s;if(n[g[0].type])j=g.prop("form"),e=(e=g[0].name)?j?c(j[e]):c(i.getElementsByName(e)).filter(function(){return!c.prop(this,"form")}):g,e=e.filter('[type="radio"]');return e},u=e.getContentValidationMessage=function(g,l,j){var a=c(g).data("errormessage")||g.getAttribute("x-moz-errormessage")||"";j&&a[j]&&(a=a[j]);"object"==typeof a&&(l=l||c.prop(g,"validity")||
{valid:1},l.valid||c.each(l,function(b,c){if(c&&"valid"!=b&&a[b])return a=a[b],!1}));e.data(g,"contentErrorMessage",a);if("object"==typeof a)a=a.defaultMessage;return a||""},x={number:1,range:1,date:1};c.extend(c.expr.filters,{"valid-element":function(g){return!(!c.prop(g,"willValidate")||!(c.prop(g,"validity")||{valid:1}).valid)},"invalid-element":function(g){return!(!c.prop(g,"willValidate")||(c.prop(g,"validity")||{valid:1}).valid)},"required-element":function(g){return!(!c.prop(g,"willValidate")||
!c.prop(g,"required"))},"optional-element":function(g){return!!(c.prop(g,"willValidate")&&!1===c.prop(g,"required"))},"in-range":function(g){if(!x[c.prop(g,"type")]||!c.prop(g,"willValidate"))return!1;g=c.prop(g,"validity");return!(!g||g.rangeOverflow||g.rangeUnderflow)},"out-of-range":function(g){if(!x[c.prop(g,"type")]||!c.prop(g,"willValidate"))return!1;g=c.prop(g,"validity");return!(!g||!g.rangeOverflow&&!g.rangeUnderflow)}});["valid","invalid","required","optional"].forEach(function(g){c.expr.filters[g]=
c.expr.filters[g+"-element"]});var v=c.event.customEvent||{};(p.bustedValidity||p.findRequired)&&function(){var g=c.find,e=c.find.matchesSelector,j=/(\:valid|\:invalid|\:optional|\:required|\:in-range|\:out-of-range)(?=[\s\[\~\.\+\>\:\#*]|$)/ig,a=function(a){return a+"-element"};c.find=function(){var b=Array.prototype.slice,c=function(c){var d=arguments,d=b.call(d,1,d.length);d.unshift(c.replace(j,a));return g.apply(this,d)},f;for(f in g)g.hasOwnProperty(f)&&(c[f]=g[f]);return c}();if(!Modernizr.prefixed||
Modernizr.prefixed("matchesSelector",i.documentElement))c.find.matchesSelector=function(b,c){c=c.replace(j,a);return e.call(this,b,c)}}();var w=c.prop,t={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1};c.prop=function(g,e,j){var a=w.apply(this,arguments);if(g&&"form"in g&&t[e]&&j!==m&&c(g).hasClass("form-ui-invalid")&&(c.prop(g,"validity")||{valid:1}).valid)c(g).getShadowElement().removeClass("form-ui-invalid"),"checked"==e&&j&&k(g).not(g).removeClass("form-ui-invalid").removeAttr("aria-invalid");
return a};var y=function(g,e){var j;c.each(g,function(a,b){if(b)return j="customError"==a?c.prop(e,"validationMessage"):a,!1});return j};c(i).bind("focusout change refreshvalidityui",function(g){if(g.target&&"submit"!=g.target.type&&c.prop(g.target,"willValidate")){var e=c.data(g.target,"webshimsswitchvalidityclass");e&&clearTimeout(e);c.data(g.target,"webshimsswitchvalidityclass",setTimeout(function(){var e=c(g.target).getNativeElement()[0],a=c.prop(e,"validity"),b=c(e).getShadowElement(),d,f,i,
h;a.valid?b.hasClass("form-ui-valid")||(d="form-ui-valid",f="form-ui-invalid",h="changedvaliditystate",i="changedvalid",r[e.type]&&e.checked&&k(e).not(e).removeClass(f).addClass(d).removeAttr("aria-invalid"),c.removeData(e,"webshimsinvalidcause")):(a=y(a,e),c.data(e,"webshimsinvalidcause")!=a&&(c.data(e,"webshimsinvalidcause",a),h="changedvaliditystate"),b.hasClass("form-ui-invalid")||(d="form-ui-invalid",f="form-ui-valid",r[e.type]&&!e.checked&&k(e).not(e).removeClass(f).addClass(d),i="changedinvalid"));
d&&(b.addClass(d).removeClass(f),setTimeout(function(){c(e).trigger(i)},0));h&&setTimeout(function(){c(e).trigger(h)},0);c.removeData(g.target,"webshimsswitchvalidityclass")},9))}});v.changedvaliditystate=!0;v.changedvalid=!0;v.changedinvalid=!0;v.refreshvalidityui=!0;e.triggerInlineForm=function(e,i){c(e).trigger(i)};e.modules["form-core"].getGroupElements=k;p=function(){e.scrollRoot=c.browser.webkit||"BackCompat"==i.compatMode?c(i.body):c(i.documentElement)};p();e.ready("DOM",p);e.getRelOffset=
function(e,i){var e=c(e),h=c(i).offset(),a;c.swap(c(e)[0],{visibility:"hidden",display:"inline-block",left:0,top:0},function(){a=e.offset()});h.top-=a.top;h.left-=a.left;return h};e.validityAlert=function(){var g=!c.browser.msie||7<parseInt(c.browser.version,10)?"span":"label",l,j=!1,a=!1,b,d={hideDelay:5E3,showFor:function(e,g,i,k){d._create();var e=c(e),m=c(e).getShadowElement(),n=d.getOffsetFromBody(m);d.clear();k?this.hide():(this.getMessage(e,g),this.position(m,n),l.css({fontSize:e.css("fontSize"),
fontFamily:e.css("fontFamily")}),this.show(),this.hideDelay&&(j=setTimeout(b,this.hideDelay)),c(h).bind("resize.validityalert orientationchange.validityalert emchange.validityalert",function(){clearTimeout(a);a=setTimeout(function(){d.position(m)},9)}));i||this.setFocus(m,n)},getOffsetFromBody:function(a){return e.getRelOffset(l,a)},setFocus:function(a,d){var h=c(a).getShadowFocusElement(),j=e.scrollRoot.scrollTop(),k=(d||h.offset()).top-30,m;e.getID&&"label"==g&&l.attr("for",e.getID(h));j>k&&(e.scrollRoot.animate({scrollTop:k-
5},{queue:!1,duration:Math.max(Math.min(600,1.5*(j-k)),80)}),m=!0);try{h[0].focus()}catch(n){}m&&(e.scrollRoot.scrollTop(j),setTimeout(function(){e.scrollRoot.scrollTop(j)},0));setTimeout(function(){c(i).bind("focusout.validityalert",b)},10)},getMessage:function(a,b){c("span.va-box",l).text(b||u(a[0])||a.prop("validationMessage"))},position:function(a,b){b=b?c.extend({},b):d.getOffsetFromBody(a);b.top+=a.outerHeight();l.css(b)},show:function(){"none"===l.css("display")&&l.css({opacity:0}).show();
l.addClass("va-visible").fadeTo(400,1)},hide:function(){l.removeClass("va-visible").fadeOut()},clear:function(){clearTimeout(!1);clearTimeout(j);c(i).unbind(".validityalert");c(h).unbind(".validityalert");l.stop().removeAttr("for")},_create:function(){if(!l)l=d.errorBubble=c("<"+g+' class="validity-alert-wrapper" role="alert"><span  class="validity-alert"><span class="va-arrow"><span class="va-arrow-box"></span></span><span class="va-box"></span></span></'+g+">").css({position:"absolute",display:"none"}),
e.ready("DOM",function(){l.appendTo("body");c.fn.bgIframe&&c.browser.msie&&7>parseInt(c.browser.version,10)&&l.bgIframe()})}};b=c.proxy(d,"hide");return d}();(function(){var e,h=[],j;c(i).bind("invalid",function(a){if(!a.wrongWebkitInvalid){var b=c(a.target),d=b.getShadowElement();d.hasClass("form-ui-invalid")||(d.addClass("form-ui-invalid").removeClass("form-ui-valid"),setTimeout(function(){c(a.target).trigger("changedinvalid").trigger("changedvaliditystate")},0));if(!e)e=c.Event("firstinvalid"),
e.isInvalidUIPrevented=a.isDefaultPrevented,d=c.Event("firstinvalidsystem"),c(i).triggerHandler(d,{element:a.target,form:a.target.form,isInvalidUIPrevented:a.isDefaultPrevented}),b.trigger(e);e&&e.isDefaultPrevented()&&a.preventDefault();h.push(a.target);a.extraData="fix";clearTimeout(j);j=setTimeout(function(){var b={type:"lastinvalid",cancelable:!1,invalidlist:c(h)};e=!1;h=[];c(a.target).trigger(b,b)},9);d=b=null}})})();q.replaceValidationUI&&e.ready("DOM",function(){c(i).bind("firstinvalid",function(e){e.isInvalidUIPrevented()||
(e.preventDefault(),c.webshims.validityAlert.showFor(e.target,c(e.target).prop("customValidationMessage")))})})});
