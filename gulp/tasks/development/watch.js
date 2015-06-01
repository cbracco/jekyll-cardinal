/**
 * Watching
 * Start BrowserSync, and then watch files for changes
 */

// Tools
var gulp   = require('gulp');
var config = require('../../config').watch;

// Task (gulp watch)
gulp.task('watch', ['browsersync'], function() {
  gulp.watch(config.jekyll,  ['jekyll-rebuild']);
  gulp.watch(config.styles,  ['styles']);
  gulp.watch(config.scripts, ['scripts', 'lint:scripts']);
  gulp.watch(config.images,  ['jekyll-rebuild', 'copy:images']);
});
