meui.use('upload', function(){
    var $ = meui.jquery
        ,upload = meui.upload;
    upload.render({
        elem: '#test1'
        ,url: 'http://ms.365me.me/enterpriseupload/uploadImgNew.do'
        ,multiple: true
        ,number: 3
        ,size: 1024
        ,before: function(obj){
            //
        }
        ,done: function(res){
            //上传完毕
        }
        ,error: function(obj){
            console.log(obj)
        }
    });
});