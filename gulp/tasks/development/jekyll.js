/**
 * Jekyll
 * Run the development Jekyll build command
 */

// Tools
var gulp        = require('gulp');
var cp          = require('child_process');
var browsersync = require('browser-sync');
var config      = require('../../config').jekyll.development;

// Task (gulp jekyll)
gulp.task('jekyll', function(done) {
  // Send notification to BrowserSync
  browsersync.notify('Compiling Jekyll');

  return cp.spawn('bundle', ['exec', 'jekyll', 'build', '-q', '--source=' + config.src, '--destination=' + config.dest, '--config=' + config.config], { stdio: 'inherit' })
  .on('close', done);
});

// Task (gulp jekyll-rebuild)
gulp.task('jekyll-rebuild', ['jekyll'], function() {
  browsersync.reload();
});
