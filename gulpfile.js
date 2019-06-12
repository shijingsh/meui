/**
 meui构建
*/

var pkg = require('./package.json');
//var inds = pkg.independents;

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minify = require('gulp-clean-css');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var header = require('gulp-header');
var del = require('del');
var minimist = require('minimist');
var zip = require('gulp-zip');

//获取参数
var argv = require('minimist')(process.argv.slice(2), {
  default: {
    ver: 'all' 
  }
})

//注释
/*
,note = [
  '/!** <%= pkg.realname %>-v<%= pkg.version %> <%= pkg.license %> License By <%= pkg.homepage %> *!/\n <%= js %>'
  ,{pkg: pkg, js: ';'}
]
*/

//模块
,mods = 'jquery,upload'

//发行版本目录
,releaseDir = './release/zip/meui-v' + pkg.version
,release = releaseDir + '/meui'

//目标木
,destDir = function(ver){
  return ver ? release : function(){
    return argv.rc ? 'rc' : 'dist'
  }();
}

//任务
,task = {
  //压缩js模块
  minjs: function(ver) {
    ver = ver === 'open';
     
    //可指定模块压缩，eg：gulp minjs --mod
    var mod = argv.mod ? function(){
      return '(' + argv.mod.replace(/,/g, '|') + ')';
    }() : ''
    ,src = [
      './src/**/*'+ mod +'.js'
      ,'!./src/meui/all.js'
    ]
    ,dir = destDir(ver);

    return gulp.src(src).pipe(uglify())
     //.pipe(header.apply(null, note))
    .pipe(gulp.dest('./'+ dir));
  }
  
  //打包PC合并版JS，即包含meui.js和所有模块的合并
  ,alljs: function(ver){
    ver = ver === 'open';
    
    var src = [
      './src/**/{meui,all,'+ mods +'}.js'
    ]
    ,dir = destDir(ver);
    
    return gulp.src(src).pipe(uglify())
      .pipe(concat('meui.all.js', {newLine: ''}))
      //.pipe(header.apply(null, note))
    .pipe(gulp.dest('./'+ dir));
  }

  //压缩css文件
  ,mincss: function(ver){
    ver = ver === 'open';
    
    var src = [
      './src/css/**/*.css'
      ,'!./src/css/**/font.css'
    ]
    ,dir = destDir(ver)
    ,noteNew = JSON.parse(JSON.stringify(note));

    noteNew[1].js = '';
    
    return gulp.src(src).pipe(minify({
      compatibility: 'ie7'
    }))//.pipe(header.apply(null, noteNew))
    .pipe(gulp.dest('./'+ dir +'/css'));
  }

  //复制iconfont文件
  ,font: function(ver){
    ver = ver === 'open';

    var dir = destDir(ver);

    return gulp.src('./src/font/*')
    .pipe(rename({}))
    .pipe(gulp.dest('./'+ dir +'/font'));
  }

  //复制组件可能所需的非css和js资源
  ,mv: function(ver){
    ver = ver === 'open';
    
    var src = ['./src/**/*.{png,jpg,gif,html,mp3,json}']
    ,dir = destDir(ver);

    gulp.src(src).pipe(rename({}))
    .pipe(gulp.dest('./'+ dir));
  }
  
  //复制发行的引导文件
  ,release: function(){
    gulp.src('./release/doc/**/*')
    .pipe(gulp.dest(releaseDir));
  }
};

//清理
gulp.task('clear', function(cb) {
  return del(['./'+ (argv.rc ? 'rc' : 'dist') +'/*'], cb);
});
gulp.task('clearRelease', function(cb) {
  return del([releaseDir], cb);
});

gulp.task('minjs', task.minjs);
gulp.task('alljs', task.alljs);
gulp.task('mincss', task.mincss);
gulp.task('font', task.font);
gulp.task('mv', task.mv);
gulp.task('release', task.release);

//发行版 gulp
gulp.task('default', ['clearRelease'], function(){
  for(var key in task){
    task[key]('open');
  }
});

//完整任务 gulp all
gulp.task('all', ['clear'], function(){ //过滤 layim：gulp all --open、rc 版：gulp all --rc
  for(var key in task){
    task[key]();
  }
});










