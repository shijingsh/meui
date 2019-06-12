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
var zip = require('gulp-zip');

//模块
var mods = 'jquery,upload'

//目标木
,destDir = function(ver){
    return 'dist'
}

//清理
function clean() {
    // You can use multiple globbing patterns as you would with `gulp.src`,
    // for example if you are using del 2.0 or above, return its promise
    return del([ 'dist' ]);
}

function styles() {
    var ver = null;

    var src = [
        './src/css/**/*.css'
        ,'!./src/css/**/font.css'
    ]
    ,dir = destDir(ver)

    return gulp.src(src).pipe(minify({
        compatibility: 'ie7'
    })).pipe(gulp.dest('./'+ dir +'/css'));
}


function scriptsAll(){
    var ver = null;

    var src = [
        './src/**/{meui,all,'+ mods +'}.js'
    ]
    ,dir = destDir(ver);

    return gulp.src(src).pipe(uglify())
        .pipe(concat('meui.all.js', {newLine: ''}))
        .pipe(gulp.dest('./'+ dir));
}

function scripts() {
    var ver = null;

    //可指定模块压缩，eg：gulp minjs --mod
    var mod = ''
        ,src = [
        './src/**/*'+ mod +'.js'
        ,'!./src/meui/all.js'
    ]
        ,dir = destDir(ver);

    return gulp.src(src).pipe(uglify())
        .pipe(gulp.dest('./'+ dir));
}

var build = gulp.series(clean, gulp.parallel(styles, scripts,scriptsAll));

exports.build = build;
/*
 * Define default task that can be called by just running `gulp` from cli
 */
exports.default = build;







