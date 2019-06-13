/**
 @Title: meui.upload 文件上传
 */

meui.define(['jquery',
    'jquery.ui.widget',
    'jquery.fileupload',
    'jquery.iframe-transport',
    'jquery.fileupload-process',
    'jquery.fileupload-validate.js'
], function (exports) {
    "use strict";
    var $ = meui.$
    var MOD_NAME = 'upload'
        , eventsInit = false
        , upload = {
            config: {} //全局配置项

            //设置全局项
            , set: function (options) {
                var that = this;
                that.config = $.extend({}, that.config, options);
                return that;
            }

            //事件监听
            , on: function (events, callback) {
                return meui.onevent.call(this, MOD_NAME, events, callback);
            }
        }
        //操作当前实例
        , thisUpload = function () {
            var that = this;
            return {
                config: that.config
            }
        }
        //构造器
        , Class = function (options) {
            var that = this;
            that.config = $.extend({}, that.config, upload.config, options);
            that.render();
        };

    //默认配置
    Class.prototype.config = {
        type: "POST",
        autoUpload: true,
        maxFileSize: 5 * 1024 * 1024 ,
        limitMultiFileUploadSize : 5 * 1024 * 1024,
        acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
        formData: {pk_user: "microVideoLogo", uploadType: 0, folder: 2},
        forceIframeTransport: true,
        multipart: false,
        messages: {
            maxNumberOfFiles:"一次只能最多上传3张图片",
            maxFileSize: '文件大小不能超过 5MB',
            acceptFileTypes: '只可以上传gif/jpg/png 格式图片'
        },
        done: function (e, data) {
            //console.log("done")
        },
        success: function ( data) {
            //console.log("upload success")
        },
        fail: function (e, data) {
            //console.log("fail")
        },
        processfail: function (e, data) {
            var currentFile = data.files[data.index];
            if (data.files.error && currentFile.error) {
                //console.log("processfail")
            }
        }
    };

    //初始渲染
    Class.prototype.render = function (options) {
        var that = this
            , options = that.config;

        if(!options.formData.messageId){
            options.formData.messageId = options.elem.substring(1);
        }

        $(options.elem).fileupload(options);

        that.events();
    };
    //事件处理
    Class.prototype.events = function(){
        var that = this
            ,options = that.config;

        if(!eventsInit){
            /** 上传附件成功后操作 **/
            $(window).on("message onmessage", function(e) {
                var msg = e.originalEvent.data;
                if (msg) {
                    var jsonObject = JSON.parse(msg);
                    if(options.success && jsonObject && jsonObject.messageId){
                        options.success(jsonObject)
                    }
                }
            });
            //一个页面只执行一次监听
            eventsInit = true
        }

    };
    //核心入口
    upload.render = function (options) {
        var inst = new Class(options);
        return thisUpload.call(inst);
    };

    exports(MOD_NAME, upload);
});

