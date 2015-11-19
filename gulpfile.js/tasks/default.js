var gulp   = require('gulp');
var jshint = require('gulp-jshint');
var mocha  = require('gulp-mocha');

// Our default task.  Watches for any file changes and runs
// any tests.
gulp.task('default', ['lint', 'test', 'browserify'], function() {
  gulp.watch(
    ['src/*.js', 'test/*.js'],
    ['lint', 'test', 'browserify']
  );
});
