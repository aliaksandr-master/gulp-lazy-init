/*eslint-disable prefer-template*/
'use strict';

const path = require('path');
const lazyTaskBuilder = require('./index');
const gulp = require('gulp');

const task = lazyTaskBuilder(gulp, path.join(__dirname, '/gulp'));

exports.test = task.series(
  task('test-scripts'),
  task.series(
    task('test-scripts'),
    task('test-scripts'),
  ),
  task.parallel(
    task.series(
      task('test-scripts'),
      task('test-scripts'),
    ),
    task('test-scripts'),
    task('test-scripts'),
  ),
  task('test-scripts'),
);
