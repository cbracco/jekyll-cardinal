/**
 * Copying
 * Image files (ignore unchanged) get copied to the build’s assets folder
 */

// Tools
var gulp        = require('gulp');
var changed     = require('gulp-changed');
var browsersync = require('browser-sync');
var config      = require('../../config').copy.images;

// Task (gulp copy:images)
gulp.task('copy:images', function() {
  return gulp.src(config.src)
    .pipe(changed(config.dest)) // Ignore unchanged files
    .pipe(gulp.dest(config.dest));
});
