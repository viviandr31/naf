var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');
var browserSync = require('browser-sync').create();


gulp.task('sass', function () {
    gulp.src('src/scss/naf.scss')
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(gulp.dest('./src/css/'))
        .pipe(gulp.dest('./build/'));
});

gulp.task('browser-sync', function () {
   browserSync.init({
       server: {
           baseDir: "./src"
       },
       files: ["src/css/naf.css", "src/index.html"]
   }) ;
});

gulp.task('watch', function() {
   gulp.watch("src/scss/*.scss", ['sass']); 
});

gulp.task('default', ['sass', 'browser-sync', 'watch']);