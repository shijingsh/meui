!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./jquery.fileupload-process"],e):"object"==typeof exports?e(require("jquery"),require("./jquery.fileupload-process")):(window.jQuery||(window.jQuery=meui.jquery),e(window.jQuery))}(function(o){"use strict";o.blueimp.fileupload.prototype.options.processQueue.push({action:"validate",always:!0,acceptFileTypes:"@",maxFileSize:"@",minFileSize:"@",maxNumberOfFiles:"@",disabled:"@disableValidation"}),o.widget("blueimp.fileupload",o.blueimp.fileupload,{options:{getNumberOfFiles:o.noop,messages:{maxNumberOfFiles:"Maximum number of files exceeded",acceptFileTypes:"File type not allowed",maxFileSize:"File is too large",minFileSize:"File is too small"}},processActions:{validate:function(e,i){if(i.disabled)return e;var r,l=o.Deferred(),s=this.options,t=e.files[e.index];return(i.minFileSize||i.maxFileSize)&&(r=t.size),"number"===o.type(i.maxNumberOfFiles)&&(s.getNumberOfFiles()||0)+e.files.length>i.maxNumberOfFiles?t.error=s.i18n("maxNumberOfFiles"):!i.acceptFileTypes||i.acceptFileTypes.test(t.type)||i.acceptFileTypes.test(t.name)?r>i.maxFileSize?t.error=s.i18n("maxFileSize"):"number"===o.type(r)&&r<i.minFileSize?t.error=s.i18n("minFileSize"):delete t.error:t.error=s.i18n("acceptFileTypes"),t.error||e.files.error?(e.files.error=!0,l.rejectWith(this,[e])):l.resolveWith(this,[e]),l.promise()}}}),meui.define(function(e){e("jquery.fileupload-validate.js",o)})});