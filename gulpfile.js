import gulp from 'gulp';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';

// prettier-ignore
gulp.task('default', () => {
  return gulp
    .src('scripts/**/*.js')
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/'));
});
