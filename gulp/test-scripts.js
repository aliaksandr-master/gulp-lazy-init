'use strict';

const gulp = require('gulp');
const gulpEslint = require('gulp-eslint');

let counter = 0;
module.exports = (callback) => {
  let c = counter++;
  console.log('RUN TEST SCRIPTS ' + c + ' STARTS');
  setTimeout(function () {
    console.log('RUN TEST SCRIPTS ' + c + ' DONE');
    callback();
  }, 1000);
};
