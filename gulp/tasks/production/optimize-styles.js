/**
 * Optimizing
 * Copy and minify CSS files
 */

// Tools
var gulp      = require('gulp');
var minifycss = require('gulp-minify-css');
var size      = require('gulp-size');
var config    = require('../../config').optimize.styles;

// Task (gulp optimize:styles)
gulp.task('optimize:styles', function() {
  return gulp.src(config.src)
    .pipe(minifycss(config.options))
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});
