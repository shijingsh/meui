meui.use('upload', function(){
    var $ = meui.jquery
        ,upload = meui.upload;
    upload.render({
        elem: '#test1'
        ,url: 'http://ms.365me.com/enterpriseupload/uploadImgNew.do'
        ,multiple: true
        ,number: 3
        ,size: 1024
        ,done: function(e, data){
            console.log("demo done")
        }
        ,fail: function(e, data){
            console.log(data)
        }
    });
});