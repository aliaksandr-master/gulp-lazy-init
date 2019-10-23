[![npm](http://img.shields.io/npm/v/gulp-lazy-init.svg?style=flat-square)](https://www.npmjs.com/package/gulp-lazy-init)
[![npm](http://img.shields.io/npm/l/gulp-lazy-init.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![Dependency Status](https://david-dm.org/aliaksandr-master/gulp-lazy-init.svg?style=flat-square)](https://david-dm.org/aliaksandr-master/gulp-lazy-init)
[![devDependency Status](https://david-dm.org/aliaksandr-master/gulp-lazy-init/dev-status.svg?style=flat-square)](https://david-dm.org/aliaksandr-master/gulp-lazy-init#info=devDependencies)

gulp-lazy-init
================

Small lazy initializer for separated gulp tasks

## install

```
npm install gulp-lazy-init --save-dev
```

## Usage

```js
const path = require('path');
const task = require('gulp-lazy-init')(gulp, path.join(__dirname, '/gulp'));

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
```
