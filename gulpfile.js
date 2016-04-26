var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
 
gulp.task('scripts', function () {
  var tsProject = ts.createProject('tsconfig.json');
  var tsResult = tsProject.src()
    .pipe(sourcemaps.init())
    .pipe(ts(tsProject));
  
  return tsResult.js
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(''));
});

gulp.task('watch', ['scripts'], function() {
    gulp.watch('scripts/*.ts', ['scripts']);
});