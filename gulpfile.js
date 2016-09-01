/*eslint-disable prefer-template*/
'use strict';

const path = require('path');
const lazyTaskBuilder = require('./index');
const gulp = require('gulp-help')(require('gulp'), {
  description: '',
  hideEmpty: true,
  hideDepsMessage: true
});

const task = lazyTaskBuilder(gulp, path.join(__dirname, '/gulp'));




gulp.task('default', [
  'help'
]);




gulp.task('test', 'test code of the project', [
  task('test-scripts')
]);
