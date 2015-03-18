/**
 * Deleting
 * Remove folders and files specified in the config
 */

// Tools
var gulp   = require('gulp');
var del    = require('del');
var config = require('../../config').delete;

// Task (gulp delete)
gulp.task('delete', function(callback) {
  del(config.src, callback);
});
