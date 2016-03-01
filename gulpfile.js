/**
 * Created by joao.pinho on 01/03/2016.
 */
var gulp = require( 'gulp' ),
    path = require( 'path' ),
    rimraf = require( 'rimraf' ),
    rename = require( 'gulp-rename' ),
    cssmin = require( 'gulp-uglifycss' ),
    jsmin = require( 'gulp-uglify' );


var paths = {
    dist:path.join( __dirname, 'dist'),
    src: path.join( __dirname, 'src'),
};

paths.css = {
    src: path.join( paths.src, '**', '*.css' ),
    dest: path.join( paths.dist )
};
paths.js = {
    src: path.join( paths.src, '**', '*.js' ),
    dest: path.join( paths.dist )
};



gulp.task( 'min:css', function (  ) {
    return gulp.src( paths.css.src )
        .pipe( cssmin() )
        .pipe( rename( {
            suffix: '.min'
        } ) )
        .pipe( gulp.dest( paths.css.dest ) )
} );

gulp.task( 'min:js', function (  ) {
    return gulp.src( paths.js.src )
        .pipe( jsmin() )
        .pipe( rename( {
            suffix: '.min'
        } ) )
        .pipe( gulp.dest( paths.js.dest ) );
} );

gulp.task( 'min', [  'min:css', 'min:js' ], function( done ) {
    done();
} );


gulp.task( 'clean', function ( done ) {
    rimraf( paths.dist, done );
} );


gulp.task( 'build', [ 'min' ] );
gulp.task( 'default', [ 'build' ] );
