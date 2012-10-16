(function(a){var d=window.Modernizr,h=a.webshims,g=h.bugs,k=a('<form action="#" style="width: 1px; height: 1px; overflow: hidden;"><select name="b" required="" /><input type="date" required="" name="a" /><input type="submit" /></form>'),n=function(){if(k[0].querySelector)try{g.findRequired=!k[0].querySelector("select:required")}catch(a){g.findRequired=!1}};g.findRequired=!1;g.validationMessage=!1;g.valueAsNumberSet=!1;h.capturingEventPrevented=function(c){if(!c._isPolyfilled){var d=c.isDefaultPrevented,
e=c.preventDefault;c.preventDefault=function(){clearTimeout(a.data(c.target,c.type+"DefaultPrevented"));a.data(c.target,c.type+"DefaultPrevented",setTimeout(function(){a.removeData(c.target,c.type+"DefaultPrevented")},30));return e.apply(this,arguments)};c.isDefaultPrevented=function(){return!(!d.apply(this,arguments)&&!a.data(c.target,c.type+"DefaultPrevented"))};c._isPolyfilled=!0}};if(!d.formvalidation||g.bustedValidity)n();else if(h.capturingEvents(["input"]),h.capturingEvents(["invalid"],!0),
d.bugfreeformvalidation=!0,window.opera||a.browser.webkit||window.testGoodWithFix){var e=a("input",k).eq(0),o,j=function(a){h.loader.loadList(["dom-extend"]);h.ready("dom-extend",a)},l=function(c){var i=["form-extend","form-message","form-native-fix"];c&&(c.preventDefault(),c.stopImmediatePropagation());clearTimeout(o);setTimeout(function(){k&&(k.remove(),k=e=null)},9);if(!d.bugfreeformvalidation)h.addPolyfill("form-native-fix",{f:"forms",d:["form-extend"]}),h.modules["form-extend"].test=a.noop;h.isReady("form-number-date-api")&&
i.push("form-number-date-api");h.reTest(i);if(e)try{e.prop({disabled:!0,value:""}).prop("disabled",!1).is(":valid")&&j(function(){h.onNodeNamesPropertyModify(["input","textarea"],["disabled","readonly"],{set:function(c){!c&&this&&a.prop(this,"value",a.prop(this,"value"))}});h.onNodeNamesPropertyModify(["select"],["disabled","readonly"],{set:function(c){if(!c&&this)c=a(this).val(),(a("option:last-child",this)[0]||{}).selected=!0,a(this).val(c)}})})}catch(g){}(a.browser.opera||window.testGoodWithFix)&&
j(function(){var c=function(a){a.preventDefault()};["form","input","textarea","select"].forEach(function(d){var e=h.defineNodeNameProperty(d,"checkValidity",{prop:{value:function(){h.fromSubmit||a(this).bind("invalid.checkvalidity",c);h.fromCheckValidity=!0;var d=e.prop._supvalue.apply(this,arguments);h.fromSubmit||a(this).unbind("invalid.checkvalidity",c);h.fromCheckValidity=!1;return d}}})})})};k.appendTo("head");if(window.opera||window.testGoodWithFix){n();g.validationMessage=!e.prop("validationMessage");
if((d.inputtypes||{}).date){try{e.prop("valueAsNumber",0)}catch(m){}g.valueAsNumberSet="1970-01-01"!=e.prop("value")}e.prop("value","")}k.bind("submit",function(a){d.bugfreeformvalidation=!1;l(a)});o=setTimeout(function(){k&&k.triggerHandler("submit")},9);a("input, select",k).bind("invalid",l).filter('[type="submit"]').bind("click",function(a){a.stopImmediatePropagation()}).trigger("click");a.browser.webkit&&d.bugfreeformvalidation&&!h.bugs.bustedValidity&&function(){var c=/^(?:textarea|input)$/i,
d=!1;document.addEventListener("contextmenu",function(a){c.test(a.target.nodeName||"")&&(d=a.target.form)&&setTimeout(function(){d=!1},1)},!1);a(window).bind("invalid",function(a){if(a.originalEvent&&d&&d==a.target.form)a.wrongWebkitInvalid=!0,a.stopImmediatePropagation()})}()}})(jQuery);
jQuery.webshims.register("form-core",function(a,d,h,g,k,n){var e={radio:1},o={checkbox:1,radio:1},j=a([]),l=d.bugs,m=function(b){var b=a(b),f,d;f=j;if(e[b[0].type])d=b.prop("form"),f=(f=b[0].name)?d?a(d[f]):a(g.getElementsByName(f)).filter(function(){return!a.prop(this,"form")}):b,f=f.filter('[type="radio"]');return f},c=d.getContentValidationMessage=function(b,f,d){var c=a(b).data("errormessage")||b.getAttribute("x-moz-errormessage")||"";d&&c[d]&&(c=c[d]);"object"==typeof c&&(f=f||a.prop(b,"validity")||
{valid:1},f.valid||a.each(f,function(a,b){if(b&&"valid"!=a&&c[a])return c=c[a],!1}));if("object"==typeof c)c=c.defaultMessage;return c||""},i={number:1,range:1,date:1},t=function(b){var f=!1;a(a.prop(b,"elements")).each(function(){if(f=a(this).is(":invalid"))return!1});return f};a.extend(a.expr[":"],{"valid-element":function(b){return a.nodeName(b,"form")?!t(b):!(!a.prop(b,"willValidate")||!r(b))},"invalid-element":function(b){return a.nodeName(b,"form")?t(b):!(!a.prop(b,"willValidate")||r(b))},"required-element":function(b){return!(!a.prop(b,
"willValidate")||!a.prop(b,"required"))},"user-error":function(b){return a.prop(b,"willValidate")&&a(b).hasClass("user-error")},"optional-element":function(b){return!!(a.prop(b,"willValidate")&&!1===a.prop(b,"required"))},"in-range":function(b){if(!i[a.prop(b,"type")]||!a.prop(b,"willValidate"))return!1;b=a.prop(b,"validity");return!(!b||b.rangeOverflow||b.rangeUnderflow)},"out-of-range":function(b){if(!i[a.prop(b,"type")]||!a.prop(b,"willValidate"))return!1;b=a.prop(b,"validity");return!(!b||!b.rangeOverflow&&
!b.rangeUnderflow)}});["valid","invalid","required","optional"].forEach(function(b){a.expr[":"][b]=a.expr.filters[b+"-element"]});a.expr[":"].focus=function(a){try{var f=a.ownerDocument;return a===f.activeElement&&(!f.hasFocus||f.hasFocus())}catch(c){}return!1};var p=a.event.customEvent||{},r=function(b){return(a.prop(b,"validity")||{valid:1}).valid};(l.bustedValidity||l.findRequired||!Modernizr.bugfreeformvalidation)&&function(){var b=a.find,f=a.find.matchesSelector,c=/(\:valid|\:invalid|\:optional|\:required|\:in-range|\:out-of-range)(?=[\s\[\~\.\+\>\:\#*]|$)/ig,
d=function(a){return a+"-element"};a.find=function(){var a=Array.prototype.slice,f=function(f){var e=arguments,e=a.call(e,1,e.length);e.unshift(f.replace(c,d));return b.apply(this,e)},e;for(e in b)b.hasOwnProperty(e)&&(f[e]=b[e]);return f}();if(!Modernizr.prefixed||Modernizr.prefixed("matchesSelector",g.documentElement))a.find.matchesSelector=function(a,b){b=b.replace(c,d);return f.call(this,a,b)}}();var u=a.prop,v={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1};a.prop=function(b,f,c){var d=
u.apply(this,arguments);b&&"form"in b&&v[f]&&c!==k&&a(b).hasClass(s)&&r(b)&&(a(b).getShadowElement().removeClass(q),"checked"==f&&c&&m(b).not(b).removeClass(q).removeAttr("aria-invalid"));return d};var w=function(b,f){var c;a.each(b,function(b,d){if(d)return c="customError"==b?a.prop(f,"validationMessage"):b,!1});return c},x=function(a){var f;try{f=g.activeElement.name===a}catch(c){}return f},s="user-error",q="user-error form-ui-invalid";a(g).bind(n.validityUIEvents||"focusout change refreshvalidityui",
function(b){var f,c;if(b.target&&(f=a(b.target).getNativeElement()[0],"submit"!=f.type&&a.prop(f,"willValidate"))){c=a.data(f,"webshimsswitchvalidityclass");var d=function(){if(!("focusout"==b.type&&"radio"==f.type&&x(f.name))){var c=a.prop(f,"validity"),d=a(f).getShadowElement(),e,j,h,g;a(f).trigger("refreshCustomValidityRules");c.valid?d.hasClass("user-success")||(e="user-success form-ui-valid",j=q,g="changedvaliditystate",h="changedvalid",o[f.type]&&f.checked&&m(f).not(f).removeClass(j).addClass(e).removeAttr("aria-invalid"),
a.removeData(f,"webshimsinvalidcause")):(c=w(c,f),a.data(f,"webshimsinvalidcause")!=c&&(a.data(f,"webshimsinvalidcause",c),g="changedvaliditystate"),d.hasClass(s)||(e=q,j="user-success form-ui-valid",o[f.type]&&!f.checked&&m(f).not(f).removeClass(j).addClass(e),h="changedinvalid"));e&&(d.addClass(e).removeClass(j),setTimeout(function(){a(f).trigger(h)},0));g&&setTimeout(function(){a(f).trigger(g)},0);a.removeData(b.target,"webshimsswitchvalidityclass")}};c&&clearTimeout(c);"refreshvalidityui"==b.type?
d():a.data(f,"webshimsswitchvalidityclass",setTimeout(d,9))}});p.changedvaliditystate=!0;p.refreshCustomValidityRules=!0;p.changedvalid=!0;p.changedinvalid=!0;p.refreshvalidityui=!0;d.triggerInlineForm=function(b,f){a(b).trigger(f)};d.modules["form-core"].getGroupElements=m;l=function(){d.scrollRoot=a.browser.webkit||"BackCompat"==g.compatMode?a(g.body):a(g.documentElement)};l();d.ready("DOM",l);d.getRelOffset=function(b,f){var b=a(b),c=a(f).offset(),d;a.swap(a(b)[0],{visibility:"hidden",display:"inline-block",
left:0,top:0},function(){d=b.offset()});c.top-=d.top;c.left-=d.left;return c};d.validityAlert=function(){var b=!a.browser.msie||7<parseInt(a.browser.version,10)?"span":"label",f,e=!1,j=!1,m,i={hideDelay:5E3,showFor:function(b,f,c,d){i._create();var b=a(b),g=a(b).getShadowElement(),k=i.getOffsetFromBody(g);i.clear();d?this.hide():(this.getMessage(b,f),this.position(g,k),this.show(),this.hideDelay&&(e=setTimeout(m,this.hideDelay)),a(h).bind("resize.validityalert",function(){clearTimeout(j);j=setTimeout(function(){i.position(g)},
9)}));c||this.setFocus(g,k)},getOffsetFromBody:function(a){return d.getRelOffset(f,a)},setFocus:function(c,e){var j=a(c).getShadowFocusElement(),h=d.scrollRoot.scrollTop(),i=(e||j.offset()).top-30,k;d.getID&&"label"==b&&f.attr("for",d.getID(j));h>i&&(d.scrollRoot.animate({scrollTop:i-5},{queue:!1,duration:Math.max(Math.min(600,1.5*(h-i)),80)}),k=!0);try{j[0].focus()}catch(l){}k&&(d.scrollRoot.scrollTop(h),setTimeout(function(){d.scrollRoot.scrollTop(h)},0));setTimeout(function(){a(g).bind("focusout.validityalert",
m)},10)},getMessage:function(b,d){d||(d=c(b[0])||b.prop("validationMessage"));d?a("span.va-box",f).text(d):this.hide()},position:function(b,c){c=c?a.extend({},c):i.getOffsetFromBody(b);c.top+=b.outerHeight();f.css(c)},show:function(){"none"===f.css("display")&&f.css({opacity:0}).show();f.addClass("va-visible").fadeTo(400,1)},hide:function(){f.removeClass("va-visible").fadeOut()},clear:function(){clearTimeout(!1);clearTimeout(e);a(g).unbind(".validityalert");a(h).unbind(".validityalert");f.stop().removeAttr("for")},
_create:function(){if(!f)f=i.errorBubble=a("<"+b+' class="validity-alert-wrapper" role="alert"><span  class="validity-alert"><span class="va-arrow"><span class="va-arrow-box"></span></span><span class="va-box"></span></span></'+b+">").css({position:"absolute",display:"none"}),d.ready("DOM",function(){f.appendTo("body");a.fn.bgIframe&&a.browser.msie&&7>parseInt(a.browser.version,10)&&f.bgIframe()})}};m=a.proxy(i,"hide");return i}();(function(){var b,c=[],d;a(g).bind("invalid",function(e){if(!e.wrongWebkitInvalid){var j=
a(e.target),h=j.getShadowElement();h.hasClass(s)||(h.addClass(q).removeClass("user-success form-ui-valid"),setTimeout(function(){a(e.target).trigger("changedinvalid").trigger("changedvaliditystate")},0));if(!b)b=a.Event("firstinvalid"),b.isInvalidUIPrevented=e.isDefaultPrevented,h=a.Event("firstinvalidsystem"),a(g).triggerHandler(h,{element:e.target,form:e.target.form,isInvalidUIPrevented:e.isDefaultPrevented}),j.trigger(b);b&&b.isDefaultPrevented()&&e.preventDefault();c.push(e.target);e.extraData=
"fix";clearTimeout(d);d=setTimeout(function(){var d={type:"lastinvalid",cancelable:!1,invalidlist:a(c)};b=!1;c=[];a(e.target).trigger(d,d)},9);h=j=null}})})();a.fn.getErrorMessage=function(){var b="",d=this[0];d&&(b=c(d)||a.prop(d,"customValidationMessage")||a.prop(d,"validationMessage"));return b};n.replaceValidationUI&&d.ready("DOM forms",function(){a(g).bind("firstinvalid",function(b){b.isInvalidUIPrevented()||(b.preventDefault(),a.webshims.validityAlert.showFor(b.target,a(b.target).prop("customValidationMessage")))})})});
jQuery.webshims.register("form-message",function(a,d,h,g,k,n){var e=d.validityMessages,h=n.overrideMessages||n.customMessages?["customValidationMessage"]:[];e.en=a.extend(!0,{typeMismatch:{email:"Please enter an email address.",url:"Please enter a URL.",number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},
stepMismatch:"Invalid input.",tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}},e.en||e["en-US"]||{});["select","radio"].forEach(function(a){e.en.valueMissing[a]="Please select an option."});["date","time","datetime-local"].forEach(function(a){e.en.rangeUnderflow[a]="Value must be at or after {%min}."});["date",
"time","datetime-local"].forEach(function(a){e.en.rangeOverflow[a]="Value must be at or before {%max}."});e["en-US"]=e["en-US"]||e.en;e[""]=e[""]||e["en-US"];e.de=a.extend(!0,{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen."},
rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr dieses Eingabefeld ein falsches Format! {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein",
checkbox:"Bitte aktivieren Sie das K\u00e4stchen"}},e.de||{});["select","radio"].forEach(function(a){e.de.valueMissing[a]="Bitte w\u00e4hlen Sie eine Option aus"});["date","time","datetime-local"].forEach(function(a){e.de.rangeUnderflow[a]="{%value} ist zu fr\u00fch. {%min} ist die fr\u00fcheste Zeit, die Sie benutzen k\u00f6nnen."});["date","time","datetime-local"].forEach(function(a){e.de.rangeOverflow[a]="{%value} ist zu sp\u00e4t. {%max} ist die sp\u00e4teste Zeit, die Sie benutzen k\u00f6nnen."});
var o=e[""];d.createValidationMessage=function(e,h){var g=o[h];g&&"string"!==typeof g&&(g=g[a.prop(e,"type")]||g[(e.nodeName||"").toLowerCase()]||g.defaultMessage);g&&"value,min,max,title,maxlength,label".split(",").forEach(function(c){if(-1!==g.indexOf("{%"+c)){var i=("label"==c?a.trim(a('label[for="'+e.id+'"]',e.form).text()).replace(/\*$|:$/,""):a.attr(e,c))||"";"patternMismatch"==h&&"title"==c&&!i&&d.error("no title for patternMismatch provided. Always add a title attribute.");g=g.replace("{%"+
c+"}",i);"value"==c&&(g=g.replace("{%valueLen}",i.length))}});return g||""};(d.bugs.validationMessage||!Modernizr.formvalidation||d.bugs.bustedValidity)&&h.push("validationMessage");d.activeLang({langObj:e,module:"form-core",callback:function(a){o=a}});h.forEach(function(e){d.defineNodeNamesProperty(["fieldset","output","button"],e,{prop:{value:"",writeable:!1}});["input","select","textarea"].forEach(function(g){var h=d.defineNodeNameProperty(g,e,{prop:{get:function(){var c=this,e="";if(!a.prop(c,
"willValidate"))return e;var g=a.prop(c,"validity")||{valid:1};if(g.valid||(e=d.getContentValidationMessage(c,g)))return e;if(g.customError&&c.nodeName&&(e=Modernizr.formvalidation&&!d.bugs.bustedValidity&&h.prop._supget?h.prop._supget.call(c):d.data(c,"customvalidationMessage")))return e;a.each(g,function(a,g){if("valid"!=a&&g&&(e=d.createValidationMessage(c,a)))return!1});return e||""},writeable:!1}})})})});
