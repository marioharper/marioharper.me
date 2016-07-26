var gulp 				= require('gulp'),
	deploy				= require('gulp-gh-pages'),
  paths     = require('../paths');

/*copy over CNAME file and deploy build folder*/
gulp.task('deploy', function () {
  gulp.src('src/CNAME')
    .pipe(gulp.dest(paths.output));

  return gulp.src(paths.output + "**/*")
    .pipe(deploy());
});