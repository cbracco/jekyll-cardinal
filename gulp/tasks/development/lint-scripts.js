/**
 * Linting
 * Check JavaScript syntax manually with JSHint
 */

var gulp    = require('gulp');
var jshint  = require('gulp-jshint');
var stylish = require('jshint-stylish');
var config  = require('../../config').jshint;

// Task (gulp lint:scripts)
gulp.task('lint:scripts', function() {
  return gulp.src(config.src)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});
