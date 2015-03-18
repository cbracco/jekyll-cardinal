/**
 * Building
 * Run the required tasks for a development build, in sequential order
 */

// Tools
var gulp        = require('gulp');
var runSequence = require('run-sequence');

// Task (gulp build)
gulp.task('build', function(callback) {
  runSequence(
    'delete',
    [
      'styles',
      'scripts',
      'copy:images'
    ],
    'jekyll',
    callback
  );
});
