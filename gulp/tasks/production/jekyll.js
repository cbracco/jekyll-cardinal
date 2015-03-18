/**
 * Jekyll
 * Run the production Jekyll build command
 */

// Tools
var gulp        = require('gulp');
var cp          = require('child_process');
var browsersync = require('browser-sync');
var config      = require('../../config').jekyll.production;

// Task (gulp jekyll:production)
gulp.task('jekyll:production', function(done) {
  // Send notification to BrowserSync
  browsersync.notify('Compiling Jekyll (Production)');

  return cp.spawn('bundle', ['exec', 'jekyll', 'build', '-q', '--source=' + config.src, '--destination=' + config.dest, '--config=' + config.config], { stdio: 'inherit' })
  .on('close', done);
});
