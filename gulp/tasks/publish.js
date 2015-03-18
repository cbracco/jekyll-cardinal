/**
 * Publishing
 * Create a production-ready build, and watch files for changes
 */

// Tools
var gulp = require('gulp');

// Tasks (gulp publish)
gulp.task('publish', ['browsersync:production']);
