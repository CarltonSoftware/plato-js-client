var gulp   = require('gulp');
var jshint = require('gulp-jshint');

// Test files for common javascript errors
gulp.task('lint', function() {
  return gulp
    .src(['gulpfile.js', 'src/**/*.js', 'test/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
