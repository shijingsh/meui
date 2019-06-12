meui.use('upload', function(){
    var $ = meui.jquery
        ,upload = meui.upload;
    upload.render({
        elem: '#test1'
        ,url: ''
        ,multiple: true
        ,number: 3
        ,size: 1024
        ,before: function(obj){
            //预读本地文件示例，不支持ie8
            obj.preview(function(index, file, result){
                $('#demo2').append('<img src="'+ result +'" alt="'+ file.name +'" class="layui-upload-img">')
            });
        }
        ,done: function(res){
            //上传完毕
        }
        ,allDone: function(obj){
            console.log(obj)
        }
    });
});