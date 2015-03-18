/**
 * Optimizing
 * Copy and minify image files
 */

// Tools
var gulp     = require('gulp');
var imagemin = require('gulp-imagemin');
var size     = require('gulp-size');
var config   = require('../../config').optimize.images;

// Task (gulp optimize:images)
gulp.task('optimize:images', function() {
  return gulp.src(config.src)
    .pipe(imagemin(config.options))
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});
