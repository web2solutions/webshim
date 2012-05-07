(!Modernizr.formvalidation||jQuery.webshims.bugs.bustedValidity)&&jQuery.webshims.register("form-extend",function(a,c,y,m){c.inputTypes=c.inputTypes||{};var t=c.cfg.forms,p,q=c.inputTypes,z={radio:1,checkbox:1};c.addInputType=function(b,a){q[b]=a};var u={customError:!1,typeMismatch:!1,rangeUnderflow:!1,rangeOverflow:!1,stepMismatch:!1,tooLong:!1,patternMismatch:!1,valueMissing:!1,valid:!0},v={valueMissing:function(b,f,d){if(!b.prop("required"))return!1;var n=!1;if(!("type"in d))d.type=(b[0].getAttribute("type")||
b[0].type||"").toLowerCase();if("select"==d.nodeName){if(f=!f)if(!(f=0>b[0].selectedIndex))b=b[0],f="select-one"==b.type&&2>b.size?!!a("> option:first-child",b).prop("selected"):!1;b=f}else b=z[d.type]?"checkbox"==d.type?!b.is(":checked"):!c.modules["form-core"].getGroupElements(b).filter(":checked")[0]:!f;return b},tooLong:function(){return!1},typeMismatch:function(b,a,d){if(""===a||"select"==d.nodeName)return!1;var c=!1;if(!("type"in d))d.type=(b[0].getAttribute("type")||b[0].type||"").toLowerCase();
q[d.type]&&q[d.type].mismatch&&(c=q[d.type].mismatch(a,b));return c},patternMismatch:function(b,a,d){if(""===a||"select"==d.nodeName)return!1;b=b.attr("pattern");if(!b)return!1;try{b=RegExp("^(?:"+b+")$")}catch(n){c.error('invalid pattern value: "'+b+'" | '+n),b=!1}return!b?!1:!b.test(a)}};c.addValidityRule=function(b,a){v[b]=a};a.event.special.invalid={add:function(){a.event.special.invalid.setup.call(this.form||this)},setup:function(){var b=this.form||this;if(!a.data(b,"invalidEventShim")&&(a(b).data("invalidEventShim",
!0).bind("submit",a.event.special.invalid.handler),c.moveToFirstEvent(b,"submit"),c.bugs.bustedValidity&&a.nodeName(b,"form"))){var f=b.getAttribute("novalidate");b.setAttribute("novalidate","novalidate");c.data(b,"bustedNoValidate",null==f?null:f)}},teardown:a.noop,handler:function(b){if(!("submit"!=b.type||b.testedValidity||!b.originalEvent||!a.nodeName(b.target,"form")||a.prop(b.target,"noValidate"))){p=!0;b.testedValidity=!0;if(!a(b.target).checkValidity())return b.stopImmediatePropagation(),
p=!1;p=!1}}};a(m).bind("invalid",a.noop);a.event.special.submit=a.event.special.submit||{setup:function(){return!1}};var A=a.event.special.submit.setup;a.extend(a.event.special.submit,{setup:function(){a.nodeName(this,"form")?a(this).bind("invalid",a.noop):a("form",this).bind("invalid",a.noop);return A.apply(this,arguments)}});c.addInputType("email",{mismatch:function(){var b=t.emailReg||/^[a-zA-Z0-9.!#$%&'*+-\/=?\^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;return function(a){return!b.test(a)}}()});
c.addInputType("url",{mismatch:function(){var b=t.urlReg||/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
return function(a){return!b.test(a)}}()});c.defineNodeNameProperty("input","type",{prop:{get:function(){var a=(this.getAttribute("type")||"").toLowerCase();return c.inputTypes[a]?a:this.type}}});c.defineNodeNamesProperties(["button","fieldset","output"],{checkValidity:{value:function(){return!0}},willValidate:{value:!1},setCustomValidity:{value:a.noop},validity:{writeable:!1,get:function(){return a.extend({},u)}}},"prop");var o=function(b){var f,d=a.prop(b,"validity");if(d)a.data(b,"cachedValidity",
d);else return!0;if(!d.valid){f=a.Event("invalid");var n=a(b).trigger(f);if(p&&!o.unhandledInvalids&&!f.isDefaultPrevented())c.validityAlert.showFor(n),o.unhandledInvalids=!0}a.removeData(b,"cachedValidity");return d.valid};c.defineNodeNameProperty("form","checkValidity",{prop:{value:function(){var b=!0,f=a("input,textarea,select",this).filter(function(){var a=c.data(this,"shadowData");return!a||!a.nativeElement||a.nativeElement===this});o.unhandledInvalids=!1;for(var d=0,n=f.length;d<n;d++)o(f[d])||
(b=!1);return b}}});c.defineNodeNamesProperties(["input","textarea","select"],{checkValidity:{value:function(){o.unhandledInvalids=!1;return o(a(this).getNativeElement()[0])}},setCustomValidity:{value:function(b){a.removeData(this,"cachedValidity");c.data(this,"customvalidationMessage",""+b)}},willValidate:{set:a.noop,get:function(){var b={button:1,reset:1,hidden:1,image:1};return function(){var f=a(this).getNativeElement()[0];return!(f.disabled||f.readOnly||b[f.type])}}()},validity:{set:a.noop,get:function(){var b=
a(this).getNativeElement(),f=b[0],d=a.data(f,"cachedValidity");if(d)return d;d=a.extend({},u);if(!a.prop(f,"willValidate")||"submit"==f.type)return d;var n=b.val(),h={nodeName:f.nodeName.toLowerCase()};d.customError=!!c.data(f,"customvalidationMessage");if(d.customError)d.valid=!1;a.each(v,function(a,f){if(f(b,n,h))d[a]=!0,d.valid=!1});a(this).getShadowFocusElement().attr("aria-invalid",d.valid?"false":"true");f=b=null;return d}}},"prop");c.defineNodeNamesBooleanProperty(["input","textarea","select"],
"required",{set:function(b){a(this).getShadowFocusElement().attr("aria-required",!!b+"")},initAttr:!a.browser.msie||7<c.browserVersion});c.reflectProperties(["input"],["pattern"]);if(!("maxLength"in m.createElement("textarea"))){var l=function(){var b,f=0,d=a([]),c=1E9,h=function(){var a=d.prop("value"),b=a.length;b>f&&b>c&&(b=Math.max(f,c),d.prop("value",a.substr(0,b)));f=b},r=function(){clearTimeout(b);d.unbind(".maxlengthconstraint")};return function(g,i){r();if(-1<i)c=i,f=a.prop(g,"value").length,
d=a(g),d.bind("keydown.maxlengthconstraint keypress.maxlengthconstraint paste.maxlengthconstraint cut.maxlengthconstraint",function(){setTimeout(h,0)}),d.bind("keyup.maxlengthconstraint",h),d.bind("blur.maxlengthconstraint",r),b=setInterval(h,200)}}();l.update=function(b,f){b===m.activeElement&&(null==f&&(f=a.prop(b,"maxlength")),l(e.target,f))};a(m).bind("focusin",function(b){var f;"TEXTAREA"==b.target.nodeName&&-1<(f=a.prop(b.target,"maxlength"))&&l(b.target,f)});c.defineNodeNameProperty("textarea",
"maxlength",{attr:{set:function(a){this.setAttribute("maxlength",""+a);l.update(this)},get:function(){var a=this.getAttribute("maxlength");return null==a?void 0:a}},prop:{set:function(a){if("number"==typeof a||a&&a==1*a){if(0>a)throw"INDEX_SIZE_ERR";a=parseInt(a,10);this.setAttribute("maxlength",a);l.update(this,a)}else this.setAttribute("maxlength","0"),l.update(this,0)},get:function(){var a=this.getAttribute("maxlength");return("number"==typeof a||a&&a==1*a)&&0<=a?parseInt(a,10):-1}}});c.defineNodeNameProperty("textarea",
"maxLength",{prop:{set:function(b){a.prop(this,"maxlength",b)},get:function(){return a.prop(this,"maxlength")}}})}var B={submit:1,button:1,image:1},g={};[{name:"enctype",limitedTo:{"application/x-www-form-urlencoded":1,"multipart/form-data":1,"text/plain":1},defaultProp:"application/x-www-form-urlencoded",proptype:"enum"},{name:"method",limitedTo:{get:1,post:1},defaultProp:"get",proptype:"enum"},{name:"action",proptype:"url"},{name:"target"},{name:"novalidate",propName:"noValidate",proptype:"boolean"}].forEach(function(b){var f=
"form"+(b.propName||b.name).replace(/^[a-z]/,function(a){return a.toUpperCase()}),d="form"+b.name,c=b.name,h="click.webshimssubmittermutate"+c,r=function(){if("form"in this&&B[this.type]){var i=a.prop(this,"form");if(i){var k=a.attr(this,d);if(null!=k&&(!b.limitedTo||k.toLowerCase()===a.prop(this,f))){var x=a.attr(i,c);a.attr(i,c,k);setTimeout(function(){if(null!=x)a.attr(i,c,x);else try{a(i).removeAttr(c)}catch(b){i.removeAttribute(c)}},9)}}}};switch(b.proptype){case "url":var w=m.createElement("form");
g[f]={prop:{set:function(b){a.attr(this,d,b)},get:function(){var b=a.attr(this,d);if(null==b)return"";w.setAttribute("action",b);return w.action}}};break;case "boolean":g[f]={prop:{set:function(b){b?a.attr(this,"formnovalidate","formnovalidate"):a(this).removeAttr("formnovalidate")},get:function(){return null!=a.attr(this,"formnovalidate")}}};break;case "enum":g[f]={prop:{set:function(b){a.attr(this,d,b)},get:function(){var i=a.attr(this,d);return!i||(i=i.toLowerCase())&&!b.limitedTo[i]?b.defaultProp:
i}}};break;default:g[f]={prop:{set:function(b){a.attr(this,d,b)},get:function(){var b=a.attr(this,d);return null!=b?b:""}}}}g[d]||(g[d]={});g[d].attr={set:function(b){g[d].attr._supset.call(this,b);a(this).unbind(h).bind(h,r)},get:function(){return g[d].attr._supget.call(this)}};g[d].initAttr=!0;g[d].removeAttr={value:function(){a(this).unbind(h);g[d].removeAttr._supvalue.call(this)}}});c.defineNodeNamesProperties(["input","button"],g);!a.support.getSetAttribute&&null==a("<form novalidate></form>").attr("novalidate")?
c.defineNodeNameProperty("form","novalidate",{attr:{set:function(a){this.setAttribute("novalidate",""+a)},get:function(){var a=this.getAttribute("novalidate");return null==a?void 0:a}}}):c.bugs.bustedValidity&&c.defineNodeNameProperty("form","novalidate",{attr:{set:function(a){c.data(this,"bustedNoValidate",""+a)},get:function(){var a=c.data(this,"bustedNoValidate");return null==a?void 0:a}},removeAttr:{value:function(){c.data(this,"bustedNoValidate",null)}}});c.defineNodeNameProperty("form","noValidate",
{prop:{set:function(b){b?a.attr(this,"novalidate","novalidate"):a(this).removeAttr("novalidate")},get:function(){return null!=a.attr(this,"novalidate")}}});a.browser.webkit&&Modernizr.inputtypes.date&&function(){var b={updateInput:1,input:1},c={date:1,time:1,"datetime-local":1},d={focusout:1,blur:1},g={updateInput:1,change:1},h=function(a){var c,i=!0,k=a.prop("value"),f=k,j=function(d){if(a){var c=a.prop("value");c!==k&&(k=c,(!d||!b[d.type])&&a.trigger("input"));d&&g[d.type]&&(f=c);!i&&c!==f&&a.trigger("change")}},
h,s=function(b){clearInterval(c);setTimeout(function(){b&&d[b.type]&&(i=!1);a&&(a.unbind("focusout blur",s).unbind("input change updateInput",j),j());a=null},1)};clearInterval(c);c=setInterval(j,160);clearTimeout(h);h=setTimeout(j,9);a.unbind("focusout blur",s).unbind("input change updateInput",j);a.bind("focusout blur",s).bind("input updateInput change",j)};if(a.event.customEvent)a.event.customEvent.updateInput=!0;a(m).bind("focusin",function(b){b.target&&c[b.target.type]&&!b.target.readOnly&&!b.target.disabled&&
h(a(b.target))})}();c.addReady(function(b,c){var d;a("form",b).add(c.filter("form")).bind("invalid",a.noop);try{if(b==m&&!("form"in(m.activeElement||{})))(d=a("input[autofocus], select[autofocus], textarea[autofocus]",b).eq(0).getShadowFocusElement()[0])&&d.offsetHeight&&d.offsetWidth&&d.focus()}catch(g){}});(function(){Modernizr.textareaPlaceholder=!!("placeholder"in a("<textarea />")[0]);if(!Modernizr.input.placeholder||!Modernizr.textareaPlaceholder){var b="over"==c.cfg.forms.placeholderType,f=
["textarea"];Modernizr.input.placeholder||f.push("input");var d=function(a){if(a.setSelectionRange)return a.setSelectionRange(0,0),!0;if(a)return a=a.createTextRange(),a.collapse(!0),a.moveEnd("character",0),a.moveStart("character",0),a.select(),!0},g=function(c,k,f,j){!1===f&&(f=a.prop(c,"value"));if(!b&&"password"!=c.type){if(!f&&j&&d(c)){var g;a(c).unbind(".placeholderremove").bind("keydown.placeholderremove keypress.placeholderremove paste.placeholderremove input.placeholderremove",function(b){if(!b||
!(17==b.keyCode||16==b.keyCode))c.value=a.prop(c,"value"),k.box.removeClass("placeholder-visible"),clearTimeout(g),a(c).unbind(".placeholderremove")}).bind("mousedown.placeholderremove drag.placeholderremove select.placeholderremove",function(){d(c);clearTimeout(g);g=setTimeout(function(){d(c)},9)}).bind("blur.placeholderremove",function(){clearTimeout(g);a(c).unbind(".placeholderremove")});return}c.value=f}else if(!f&&j){a(c).unbind(".placeholderremove").bind("keydown.placeholderremove keypress.placeholderremove paste.placeholderremove input.placeholderremove",
function(b){if(!b||!(17==b.keyCode||16==b.keyCode))k.box.removeClass("placeholder-visible"),a(c).unbind(".placeholderremove")}).bind("blur.placeholderremove",function(){a(c).unbind(".placeholderremove")});return}k.box.removeClass("placeholder-visible")},h=function(c,d,f,j,h){if(!j&&(j=a.data(c,"placeHolder"),!j))return;a(c).unbind(".placeholderremove");if("focus"==h||!h&&c===m.activeElement)("password"==c.type||b||a(c).hasClass("placeholder-visible"))&&g(c,j,"",!0);else if(!1===d&&(d=a.prop(c,"value")),
d)g(c,j,d);else if(!1===f&&(f=a.attr(c,"placeholder")||""),f&&!d){d=j;!1===f&&(f=a.prop(c,"placeholder"));if(!b&&"password"!=c.type)c.value=f;d.box.addClass("placeholder-visible")}else g(c,j,d)},o=function(b){var b=a(b),c=b.prop("id"),d=!(!b.prop("title")&&!b.attr("aria-labelledby"));!d&&c&&(d=!!a('label[for="'+c+'"]',b[0].form)[0]);d||(c||(c=a.webshims.getID(b)),d=!!a("label #"+c)[0]);return a(d?'<span class="placeholder-text"></span>':'<label for="'+c+'" class="placeholder-text"></label>')},l=function(){var d=
{text:1,search:1,url:1,email:1,password:1,tel:1};return{create:function(c){var d=a.data(c,"placeHolder");if(d)return d;d=a.data(c,"placeHolder",{});a(c).bind("focus.placeholder blur.placeholder",function(a){h(this,!1,!1,d,a.type);d.box["focus"==a.type?"addClass":"removeClass"]("placeholder-focused")});c.form&&a(c.form).bind("reset.placeholder",function(a){setTimeout(function(){h(c,!1,!1,d,a.type)},0)});if("password"==c.type||b){d.text=o(c);d.box=a(c).wrap('<span class="placeholder-box placeholder-box-'+
(c.nodeName||"").toLowerCase()+'" />').parent();d.text.insertAfter(c).bind("mousedown.placeholder",function(){h(this,!1,!1,d,"focus");try{setTimeout(function(){c.focus()},0)}catch(a){}return!1});a.each(["Left","Top"],function(b,f){var g=(parseInt(a.curCSS(c,"padding"+f),10)||0)+Math.max(parseInt(a.curCSS(c,"margin"+f),10)||0,0)+(parseInt(a.curCSS(c,"border"+f+"Width"),10)||0);d.text.css("padding"+f,g)});a.curCSS(c,"lineHeight");var f={width:a(c).width(),height:a(c).height()},i=a.curCSS(c,"float");
a.each(["lineHeight","fontSize","fontFamily","fontWeight"],function(b,f){var g=a.curCSS(c,f);d.text.css(f)!=g&&d.text.css(f,g)});f.width&&f.height&&d.text.css(f);"none"!==i&&d.box.addClass("placeholder-box-"+i)}else f=function(b){a(c).hasClass("placeholder-visible")&&(g(c,d,""),b&&"submit"==b.type&&setTimeout(function(){b.isDefaultPrevented()&&h(c,!1,!1,d)},9))},a(y).bind("beforeunload",f),d.box=a(c),c.form&&a(c.form).submit(f);return d},update:function(b,f){if(!d[a.prop(b,"type")]&&!a.nodeName(b,
"textarea"))c.warn("placeholder not allowed on type: "+a.prop(b,"type"));else{var g=l.create(b);g.text&&g.text.text(f);h(b,!1,f,g)}}}}();a.webshims.publicMethods={pHolder:l};f.forEach(function(a){c.defineNodeNameProperty(a,"placeholder",{attr:{set:function(a){c.contentAttr(this,"placeholder",a);l.update(this,a)},get:function(){return c.contentAttr(this,"placeholder")}},reflect:!0,initAttr:!0})});f.forEach(function(b){var d={},f;["attr","prop"].forEach(function(b){d[b]={set:function(d){var g=c.contentAttr(this,
"placeholder");a.removeData(this,"cachedValidity");var i=f[b]._supset.call(this,d);g&&"value"in this&&h(this,d,g);return i},get:function(){return a(this).hasClass("placeholder-visible")?"":f[b]._supget.call(this)}}});f=c.defineNodeNameProperty(b,"value",d)})}})()});
