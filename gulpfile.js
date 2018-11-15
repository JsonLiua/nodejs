let gulp = require('gulp');
let gulp_less = require('gulp-less');
let sourcemaps = require('gulp-sourcemaps');

gulp.task('less', function() {
    gulp.src('./public/css/*.less')
        .pipe(gulp_less())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public/css'))
});

gulp.task('watch', function() {
    gulp.watch('./public/css/**/*.less', ['less']);
})

gulp.task('default', ['watch']);