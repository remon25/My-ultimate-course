var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');
var sourcemaps = require('gulp-sourcemaps');
var minify = require('gulp-minify');
var connect = require('gulp-connect');


gulp.task('html', function() {
    return gulp.src('stage/html/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('dist'))
        .pipe(livereload())
});

// css track 


gulp.task('css', function() {

    return gulp.src(['stage/css/**/*.css', 'stage/css/**/*.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(concat('main.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css'))
        .pipe(livereload())

});

// js track 

gulp.task('js', function() {

    return gulp.src(['stage/js/*.js'])
        .pipe(concat('main.js'))
        .pipe(minify())
        .pipe(gulp.dest('dist/js'))
        .pipe(livereload())


});


gulp.task('watch', function() {

    require('./server.js');
    livereload.listen();
    gulp.watch('stage/html/*.pug', gulp.series('html'));
    gulp.watch(['stage/css/**/*.css', 'stage/css/**/*.scss'], gulp.series('css'));
    gulp.watch('stage/js/*.js', gulp.series('js'));



});