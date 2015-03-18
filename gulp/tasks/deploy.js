/**
 * Deploying
 * Upload a published build to the interwebs
 */

// Tools
var gulp = require('gulp');

// Task (gulp deploy)
gulp.task('deploy', ['deploy:rsync']);
