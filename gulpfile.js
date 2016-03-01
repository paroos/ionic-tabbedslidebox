/**
 * Created by joao.pinho on 01/03/2016.
 */
var gulp = require('gulp'),
    path = require('path' ),
    cssmin = require('gulp-uglifycss'),
    jsmin = require('gulp-uglify');


var paths = {
    css: {
        src: path.join(__dirname, 'src', '**', '*.css'),
        dest: path.join(__dirname, 'dist')
    },
    js: {
        src: path.join(__dirname, 'src', '**', '*.js'),
        dest: path.join(__dirname, 'dist')
    }
}

gulp.task('min:css', function() {
    return gulp.src(paths.css.src)
        .pipe(cssmin())
        .pipe(gulp.dest(paths.css.dest));
});

gulp.task('min:js', function() {
    return gulp.src(paths.js.src)
        .pipe(jsmin())
        .pipe(gulp.dest(paths.js.dest));
});
gulp.task('min', ['min:css', 'min:js']);


gulp.task('default', ['min']);
