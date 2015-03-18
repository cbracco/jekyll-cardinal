/**
 * Deploying
 * Upload project to the interwebs via `rsync`
 */

// Tools
var gulp   = require('gulp');
var rsync  = require('gulp-rsync');
var config = require('../../config').rsync;

// Task (gulp deploy:rsync)
gulp.task('deploy:rsync', function() {
  return gulp.src(config.src)
    .pipe(rsync(config.options));
});
