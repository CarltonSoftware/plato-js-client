var gulp   = require('gulp');
var mocha  = require('gulp-mocha');

// Run test task, testing all of the javascript files within the
// repository
gulp.task('test', function() {
  return gulp
    .src(['gulpfile.js', 'src/*.js', 'test/*.js'])
    .pipe(mocha());
});
