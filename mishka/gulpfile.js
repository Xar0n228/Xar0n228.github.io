var gulp = require('gulp');
var minifyCSS = require('gulp-csso');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('serve', ['styles'], function() {

    browserSync.init({
        server: "."
    });

    gulp.watch("./styles/**/*.scss", ['styles']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('styles', function(){
  return gulp.src('styles/styles.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(gulp.dest('build/css'))
    .pipe(browserSync.stream());
});

gulp.task('default', [ 'serve' ]);