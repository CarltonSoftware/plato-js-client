var gulp   = require('gulp');

// Our default task.  Watches for any file changes and runs
// any tests.
gulp.task('default', ['test', 'browserify'], function() {
  gulp.watch(
    ['src/*.js', 'test/*.js'],
    ['lint', 'test', 'browserify']
  );
});
