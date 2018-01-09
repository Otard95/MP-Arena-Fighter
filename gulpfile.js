/*jshint esversion: 6 */
/*jshint node: true */

const gulp = require('gulp');
const sass = require('gulp-sass');
const nodemon = require('gulp-nodemon');
const rename = require('gulp-rename');

gulp.task('sass', () => {

  gulp.src(['./_sass/*.sass', './_sass/**/*.sass'])
    .pipe(sass())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./public/css'));

});

gulp.task('serve', () => {

  nodemon({
    script: './bin/www',
    ext: 'js',
    ignore: [
      './views/',
      './public/',
      './_sass/',
      './.git/',
      './node-modules'
    ],
    env: { 'NODE_ENV': 'development' }
  });

});

gulp.task('default', ['sass', 'serve'], () => {

  gulp.watch(['./_sass/*.sass', './_sass/**/*.sass'], ['sass']);

});
