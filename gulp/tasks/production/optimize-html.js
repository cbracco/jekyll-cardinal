/**
 * Optimizing
 * Copy and minify HTML files
 */

// Tools
var gulp    = require('gulp');
var htmlmin = require('gulp-htmlmin');
var config  = require('../../config').optimize.html;

// Task (gulp optimize:html)
gulp.task('optimize:html', function() {
  return gulp.src(config.src)
    .pipe(htmlmin(config.options))
    .pipe(gulp.dest(config.dest));
});
