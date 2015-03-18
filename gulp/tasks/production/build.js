/**
 * Building
 * Run the required tasks for a production build, in sequential order
 */

// Tools
var gulp        = require('gulp');
var runSequence = require('run-sequence');

// Task (gulp build:production)
gulp.task('build:production', function(callback) {
  runSequence(
    'delete',
    'jekyll:production',
    [
      'styles',
      'scripts'
    ],
    'optimize:styles',
    'optimize:scripts',
    'optimize:images',
    'optimize:html',
    'revision',
    'revision:collect',
    [
      'gzip'
    ],
    callback
  );
});
