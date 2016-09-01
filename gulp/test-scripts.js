'use strict';

const gulp = require('gulp');
const gulpEslint = require('gulp-eslint');

module.exports = (callback) =>
  gulp
    .src([
      '**/*.js',
      '!**/*scsslint*',
      '!nodex_modules/**/*'
    ])
    .pipe(gulpEslint())
    .pipe(gulpEslint.format())
    .pipe(gulpEslint.failAfterError());
