!function(r){"use strict";function o(){this.v="1.0.0"}function m(e){r.console&&console.error&&console.error("Meui hint: "+e)}var e,d=document,y={modules:{},status:{},timeout:10,event:{}},h=(e=d.currentScript?d.currentScript.src:function(){for(var e,t=d.scripts,n=t.length-1,o=n;0<o;o--)if("interactive"===t[o].readyState){e=t[o].src;break}return e||t[n].src}()).substring(0,e.lastIndexOf("/")+1),v="undefined"!=typeof opera&&"[object Opera]"===opera.toString(),g={jquery:"modules/jquery",upload:"modules/upload","meui.all":"../meui.all"};o.prototype.cache=y,o.prototype.define=function(e,o){function t(){function n(e,t){meui[e]=t,y.status[e]=!0}return"function"==typeof o&&o(function(e,t){n(e,t),y.callback[e]=function(){o(n)}}),this}var n=this;return"function"==typeof e&&(o=e,e=[]),!meui["meui.all"]&&meui["meui.mobile"]?t.call(n):(n.use(e,t),n)},o.prototype.use=function(n,e,t){var o=this,r=y.dir=y.dir?y.dir:h,i=d.getElementsByTagName("head")[0];n="string"==typeof n?[n]:n,window.jQuery&&jQuery.fn.on&&(o.each(n,function(e,t){"jquery"===t&&n.splice(e,1)}),meui.jquery=meui.$=jQuery);var u,a=n[0],c=0;function s(e,t){var n="PLaySTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/;"load"!==e.type&&!n.test((e.currentTarget||e.srcElement).readyState)||(y.modules[a]=t,i.removeChild(p),function e(){if(++c>1e3*y.timeout/4)return m(a+" is not a valid module");y.status[a]?l():setTimeout(e,4)}())}function l(){t.push(meui[a]),1<n.length?o.use(n.slice(1),e,t):"function"==typeof e&&e.apply(meui,t)}if(t=t||[],y.host=y.host||(r.match(/\/\/([\s\S]+?)\//)||["//"+location.host+"/"])[0],0===n.length||meui["meui.all"]&&g[a]||!meui["meui.all"]&&meui["meui.mobile"]&&g[a])return l(),o;if(y.modules[a])!function e(){if(++c>1e3*y.timeout/4)return m(a+" is not a valid module");"string"==typeof y.modules[a]&&y.status[a]?l():setTimeout(e,4)}();else{var p=d.createElement("script"),f=(g[a]?r+"lay/":/^\{\/\}/.test(o.modules[a])?"":y.base||"")+(o.modules[a]||a)+".js";f=f.replace(/^\{\/\}/,""),p.async=!0,p.charset="utf-8",p.src=f+((u=!0===y.version?y.v||(new Date).getTime():y.version||"")?"?v="+u:""),i.appendChild(p),!p.attachEvent||p.attachEvent.toString&&p.attachEvent.toString().indexOf("[native code")<0||v?p.addEventListener("load",function(e){s(e,f)},!1):p.attachEvent("onreadystatechange",function(e){s(e,f)}),y.modules[a]=f}return o},o.prototype.getStyle=function(e,t){var n=e.currentStyle?e.currentStyle:r.getComputedStyle(e,null);return n[n.getPropertyValue?"getPropertyValue":"getAttribute"](t)},o.prototype.link=function(t,n,e){var o=this,r=d.createElement("link"),i=d.getElementsByTagName("head")[0];"string"==typeof n&&(e=n);var u=(e||t).replace(/\.|\//g,""),a=r.id="meuicss-"+u,c=0;return r.rel="stylesheet",r.href=t+(y.debug?"?v="+(new Date).getTime():""),r.media="all",d.getElementById(a)||i.appendChild(r),"function"!=typeof n||function e(){if(++c>1e3*y.timeout/100)return m(t+" timeout");1989===parseInt(o.getStyle(d.getElementById(a),"width"))?n():setTimeout(e,100)}(),o},y.callback={},o.prototype.factory=function(e){if(meui[e])return"function"==typeof y.callback[e]?y.callback[e]:null},o.prototype.addcss=function(e,t,n){return meui.link(y.dir+"css/"+e,t,n)},o.prototype.img=function(e,t,n){var o=new Image;if(o.src=e,o.complete)return t(o);o.onload=function(){o.onload=null,"function"==typeof t&&t(o)},o.onerror=function(e){o.onerror=null,"function"==typeof n&&n(e)}},o.prototype.config=function(e){for(var t in e=e||{})y[t]=e[t];return this},o.prototype.modules=function(){var e={};for(var t in g)e[t]=g[t];return e}(),o.prototype.extend=function(e){for(var t in e=e||{})this[t]||this.modules[t]?m("模块名 "+t+" 已被占用"):this.modules[t]=e[t];return this},o.prototype.router=function(e){var n={path:[],search:{},hash:((e=e||location.hash).match(/[^#](#.*$)/)||[])[1]||""};return/^#\//.test(e)&&(e=e.replace(/^#\//,""),n.href="/"+e,e=e.replace(/([^#])(#.*$)/,"$1").split("/")||[],this.each(e,function(e,t){/^\w+=/.test(t)?(t=t.split("="),n.search[t[0]]=t[1]):n.path.push(t)})),n},o.prototype.data=function(e,t,n){if(e=e||"meui",n=n||localStorage,r.JSON&&r.JSON.parse){if(null===t)return delete n[e];t="object"==typeof t?t:{key:t};try{var o=JSON.parse(n[e])}catch(e){o={}}return"value"in t&&(o[t.key]=t.value),t.remove&&delete o[t.key],n[e]=JSON.stringify(o),t.key?o[t.key]:o}},o.prototype.sessionData=function(e,t){return this.data(e,t,sessionStorage)},o.prototype.device=function(e){function t(e){var t=new RegExp(e+"/([^\\s\\_\\-]+)");return(e=(n.match(t)||[])[1])||!1}var n=navigator.userAgent.toLowerCase(),o={os:/windows/.test(n)?"windows":/linux/.test(n)?"linux":/iphone|ipod|ipad|ios/.test(n)?"ios":/mac/.test(n)?"mac":void 0,ie:!!(r.ActiveXObject||"ActiveXObject"in r)&&((n.match(/msie\s(\d+)/)||[])[1]||"11"),weixin:t("micromessenger")};return e&&!o[e]&&(o[e]=t(e)),o.android=/android/.test(n),o.ios="ios"===o.os,o},o.prototype.hint=function(){return{error:m}},o.prototype.each=function(e,t){var n;if("function"!=typeof t)return this;if((e=e||[]).constructor===Object){for(n in e)if(t.call(e[n],n,e[n]))break}else for(n=0;n<e.length&&!t.call(e[n],n,e[n]);n++);return this},o.prototype.sort=function(e,i,t){var n=JSON.parse(JSON.stringify(e||[]));return i&&(n.sort(function(e,t){var n=/^-?\d+$/,o=e[i],r=t[i];return n.test(o)&&(o=parseFloat(o)),n.test(r)&&(r=parseFloat(r)),o&&!r?1:!o&&r?-1:r<o?1:o<r?-1:0}),t&&n.reverse()),n},o.prototype.stope=function(t){t=t||r.event;try{t.stopPropagation()}catch(e){t.cancelBubble=!0}},o.prototype.onevent=function(e,t,n){return"string"!=typeof e||"function"!=typeof n?this:o.event(e,t,null,n)},o.prototype.event=o.event=function(e,t,n,o){function r(e,t){!1===(t&&t.call(i,n))&&null===u&&(u=!1)}var i=this,u=null,a=t.match(/\((.*)\)$/)||[],c=(e+"."+t).replace(a[0],""),s=a[1]||"";return o?(y.event[c]=y.event[c]||{},y.event[c][s]=[o],this):(meui.each(y.event[c],function(e,t){"{*}"!==s?(""===e&&meui.each(t,r),s&&e===s&&meui.each(t,r)):meui.each(t,r)}),u)},r.meui=new o}(window);