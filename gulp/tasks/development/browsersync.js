/**
 * BrowserSync
 * Run the build task, and spin up a development server with BrowserSync
 */

// Tools
var gulp        = require('gulp');
var browsersync = require('browser-sync');
var config      = require('../../config').browsersync.development;

// Task (gulp browsersync)
gulp.task('browsersync', ['build'], function() {
  browsersync(config);
});
