/**
 * BrowserSync
 * Run the build task, and spin up a production server with BrowserSync
 */

// Tools
var gulp        = require('gulp');
var browsersync = require('browser-sync');
var config      = require('../../config').browsersync.production;

// Task (gulp browsersync:production)
gulp.task('browsersync:production', ['build:production'], function() {
  browsersync(config);
});
