!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?e(require("jquery")):(window.jQuery||(window.jQuery=meui.jquery),e(window.jQuery))}(function(u){"use strict";var n=0,t=u,r="parseJSON";"JSON"in window&&"parse"in JSON&&(t=JSON,r="parse"),u.ajaxTransport("iframe",function(a){if(a.async){var o,i,t,p=a.initialIframeSrc||"javascript:false;";return{send:function(e,r){(o=u('<form style="display:none;"></form>')).attr("accept-charset",a.formAcceptCharset),t=/\?/.test(a.url)?"&":"?","DELETE"===a.type?(a.url=a.url+t+"_method=DELETE",a.type="POST"):"PUT"===a.type?(a.url=a.url+t+"_method=PUT",a.type="POST"):"PATCH"===a.type&&(a.url=a.url+t+"_method=PATCH",a.type="POST"),i=u('<iframe src="'+p+'" name="iframe-transport-'+(n+=1)+'"></iframe>').bind("load",function(){var n,t=u.isArray(a.paramName)?a.paramName:[a.paramName];i.unbind("load").bind("load",function(){var t;try{if(!(t=i.contents()).length||!t[0].firstChild)throw new Error}catch(e){t=void 0}r(200,"success",{iframe:t}),u('<iframe src="'+p+'"></iframe>').appendTo(o),window.setTimeout(function(){o.remove()},0)}),o.prop("target",i.prop("name")).prop("action",a.url).prop("method",a.type),a.formData&&u.each(a.formData,function(e,t){u('<input type="hidden"/>').prop("name",t.name).val(t.value).appendTo(o)}),a.fileInput&&a.fileInput.length&&"POST"===a.type&&(n=a.fileInput.clone(),a.fileInput.after(function(e){return n[e]}),a.paramName&&a.fileInput.each(function(e){u(this).prop("name",t[e]||a.paramName)}),o.append(a.fileInput).prop("enctype","multipart/form-data").prop("encoding","multipart/form-data"),a.fileInput.removeAttr("form")),o.submit(),n&&n.length&&a.fileInput.each(function(e,t){var r=u(n[e]);u(t).prop("name",r.prop("name")).attr("form",r.attr("form")),r.replaceWith(t)})}),o.append(i).appendTo(document.body)},abort:function(){i&&i.unbind("load").prop("src",p),o&&o.remove()}}}}),u.ajaxSetup({converters:{"iframe text":function(e){return e&&u(e[0].body).text()},"iframe json":function(e){return e&&t[r](u(e[0].body).text())},"iframe html":function(e){return e&&u(e[0].body).html()},"iframe xml":function(e){var t=e&&e[0];return t&&u.isXMLDoc(t)?t:u.parseXML(t.XMLDocument&&t.XMLDocument.xml||u(t.body).html())},"iframe script":function(e){return e&&u.globalEval(u(e[0].body).text())}}}),meui.define(function(e){e("jquery.iframe-transport",u)})});