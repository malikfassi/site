/**
 *  Welcome to your gulpfile!
 *  The gulp tasks are split into several files in the gulp directory
 *  because putting it all here was too long
 */

'use strict';

var gulp = require('gulp');
var wrench = require('wrench');
var sass = require('gulp-sass');

/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */
wrench.readdirSyncRecursive('./gulp').filter(function(file) {
  return (/\.(js|coffee)$/).test(file);
}).map(function(file) {
  require('./gulp/' + file);
});

/**
 *  This will compile .scss and sass file into css file
**/	
gulp.task('sass', function () {
  return gulp.src('./src/app/sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./app/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./app/sass/**/*.scss', ['sass']);
});


// Fonts
gulp.task('fonts', function() {
    return gulp.src([
                    'bower_components/font-awesome/fonts/fontawesome-webfont.*'])
            .pipe(gulp.dest('src/app/fonts/'));
});

/**
 *  Default task clean temporaries directories and launch the
 *  main optimization build task
 */
gulp.task('default', ['clean'], function () {
  gulp.start('build');
});
gulp.task('build', ['html', 'images', 'data', 'fonts']);
