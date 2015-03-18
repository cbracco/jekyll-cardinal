/**
 * Styles
 * Compile LESS into CSS, and add vendor prefixes
 */

// Tools
var gulp         = require('gulp');
var browsersync  = require('browser-sync');
var less         = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var handleErrors = require('../../utils/handleErrors');
var config       = require('../../config').styles;

// Task (gulp styles)
gulp.task('styles', function() {
  // Send notification to BrowserSync
  browsersync.notify('Compiling styles');

  return gulp.src(config.src)
    .pipe(less())
    .on('error', handleErrors)
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(gulp.dest(config.dest));
});
