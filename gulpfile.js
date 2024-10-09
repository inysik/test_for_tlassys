const gulp = require('gulp');
const dartSass = require('gulp-dart-sass');

const sass = () => {
  return gulp.src('src/scss/**/*.scss')
  .pipe(dartSass().on('error', dartSass.logError))
  .pipe(gulp.dest('dist/css'));
};

exports.watch = () => gulp.watch('src/scss/**/*.scss', sass); 

