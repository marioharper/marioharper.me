var gulp 				= require('gulp'),
	deploy				= require('gulp-gh-pages');

/*copy over CNAME file and deploy build folder*/
gulp.task('deploy', function () {
  gulp.src('src/CNAME')
    .pipe(gulp.dest("build"));

  return gulp.src("build/**/*")
    .pipe(deploy());
});