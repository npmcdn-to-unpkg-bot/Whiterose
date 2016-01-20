var gulp = require('gulp'),
autoprefixer = require('gulp-autoprefixer'),
minifyCSS = require('gulp-minify-css'),
imagemin = require('gulp-imagemin'),
pngquant = require('imagemin-pngquant'),
rename = require('gulp-rename');
var concat = require ('gulp-concat');
var less = require('gulp-less');
var rigger = require('gulp-rigger');
var uglify = require('gulp-uglify');
var rimraf = require('rimraf');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var config = {
    server: {
        baseDir: "./build"
    },
    tunnel: false,
    host: 'localhost',
    port: 9000,
    logPrefix: "Frontend_Devil"
};

gulp.task('webserver', function () {
    browserSync(config);
});
gulp.task('styles', function () {
    return gulp.src('src/css/main.less')
        .pipe(less())
        .pipe(autoprefixer('last 10 versions', 'ie 9'))
        .pipe(gulp.dest('build/css/'))
        .pipe(rename({suffix: ".min"}))
        .pipe(minifyCSS({keepBreaks: false})) 
        .pipe(gulp.dest('build/css/'))
        .pipe(reload({stream: true}));
});

gulp.task('html', function () {
    gulp.src('src/*.html')
        .pipe(rigger())
        .pipe(gulp.dest('build/'))
        .pipe(reload({stream: true}));
});

gulp.task('js', function () {
    gulp.src('src/js/main.js')
        .pipe(rigger())
        .pipe(gulp.dest('build/js/'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('build/js/'))
        .pipe(reload({stream: true}));
});
gulp.task('imagesmin', function () {
    gulp.src('src/img/**/*.*')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest('build/img/'))
        .pipe(reload({stream: true}));
});
gulp.task('images', function () {
        gulp.src('src/img/**/*.*')
        .pipe(gulp.dest('build/img/'))

        .pipe(reload({stream: true}));

});


gulp.task('clean', function (cb) {
    rimraf('./build', cb);
});

gulp.task('fonts', function() {
    gulp.src('src/fonts/**/*.*')
        .pipe(gulp.dest('build/fonts'))
});

gulp.task('build', [
    'html',
    'styles',
    'fonts',
    'images',
    'js'
]);


gulp.task('watch', function(){
    gulp.watch('src/**/*.html', ['html']);
    gulp.watch('src/css/main.less', ['styles']);
    gulp.watch('src/fonts/**/*.*', ['fonts']);
    gulp.watch('src/**/*.js', ['js']);
    gulp.watch('src/img/**/*.*', ['images']);
});

gulp.task('default', ['build', 'webserver', 'watch']);
