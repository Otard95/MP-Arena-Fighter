/*jshint esversion: 6 */
/*jshint node: true */

const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');

gulp.task('sass', () => {

  gulp.src(['./_sass/*.sass', './_sass/**/*.sass'])
    .pipe(sass())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./public/css'));

});

gulp.task('default', ['sass'], () => {

  gulp.watch(['./_sass/*.sass', './_sass/**/*.sass'], ['sass']);

});
