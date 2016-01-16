var gulp = require('gulp'),
autoprefixer = require('gulp-autoprefixer'),
minifyCSS = require('gulp-minify-css'),
rename = require('gulp-rename');
var concat = require ('gulp-concat');
var less = require('gulp-less');
var gutil = require('gulp-util');
var plato = require('gulp-plato');
var browserSync = require('browser-sync').create();
gulp.task('server', ['less'], function() {

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("*less/*.less", ['less']);
    gulp.watch("*.*").on('change', browserSync.reload);
    gulp.watch("css/*.css").on('change', browserSync.reload);
});


gulp.task('less', function () {
return gulp.src('less/*.less')
.pipe(less({compress: true}).on('error', gutil.log))
.pipe(autoprefixer('last 10 versions', 'ie 9'))
.pipe(gulp.dest('css'))
.pipe(rename({suffix: ".min"}))
.pipe(minifyCSS({keepBreaks: false})) 
.pipe(gulp.dest('css'));
});


gulp.task('test', function () {
    return gulp.src('app.js')
        .pipe(plato('report', {
            jshint: {
                options: {
                    strict: true
                }
            },
            complexity: {
                trycatch: true
            }
        }));
});
