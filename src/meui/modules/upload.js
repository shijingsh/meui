/**
 @Title: meui.upload 文件上传
 */

meui.define(['jquery',
    'jquery.ui.widget',
    'jquery.fileupload',
    'jquery.iframe-transport',
    'jquery.fileupload-process',
    'jquery.fileupload-validate.js'
    ] , function(exports){
  "use strict";

  var  MOD_NAME = 'upload'

   ,upload = {
      config: {} //全局配置项

      //设置全局项
      ,set: function(options){
          var that = this;
          that.config = $.extend({}, that.config, options);
          return that;
      }

      //事件监听
      ,on: function(events, callback){
          return layui.onevent.call(this, MOD_NAME, events, callback);
      }
  }

   //构造器
   ,Class = function(options){
          var that = this;
          that.config = $.extend({}, that.config, upload.config, options);
          that.render();
      };

    //默认配置
    Class.prototype.config = {
        accept: 'images' //允许上传的文件类型：images/file/video/audio
        ,exts: '' //允许上传的文件后缀名
        ,auto: true //是否选完文件后自动上传
        ,bindAction: '' //手动上传触发的元素
        ,url: '' //上传地址
        ,field: 'file' //文件字段名
        ,acceptMime: '' //筛选出的文件类型，默认为所有文件
        ,method: 'post' //请求上传的 http 类型
        ,data: {} //请求上传的额外参数
        ,drag: true //是否允许拖拽上传
        ,size: 0 //文件限制大小，默认不限制
        ,number: 0 //允许同时上传的文件数，默认不限制
        ,multiple: false //是否允许多文件上传，不支持ie8-9
    };

    //初始渲染
    Class.prototype.render = function(options){
        var that = this
            ,options = that.config;

        options.elem = $(options.elem);
        options.bindAction = $(options.bindAction);

        that.file();
        that.events();
    };


    exports(MOD_NAME, upload);
});

