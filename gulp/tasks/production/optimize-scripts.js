/**
 * Optimizing
 * Copy and minify JavaScript files
 */

// Tools
var gulp   = require('gulp');
var uglify = require('gulp-uglify');
var size   = require('gulp-size');
var config = require('../../config').optimize.scripts;

// Task (gulp optimize:scripts)
gulp.task('optimize:scripts', function() {
  return gulp.src(config.src)
    .pipe(uglify(config.options))
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});
