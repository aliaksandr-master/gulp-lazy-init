[![npm](http://img.shields.io/npm/v/gulp-lazy-init.svg?style=flat-square)](https://www.npmjs.com/package/gulp-lazy-init)
[![npm](http://img.shields.io/npm/l/gulp-lazy-init.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![Dependency Status](https://david-dm.org/aliaksandr-master/gulp-lazy-init.svg?style=flat-square)](https://david-dm.org/aliaksandr-master/gulp-lazy-init)
[![devDependency Status](https://david-dm.org/aliaksandr-master/gulp-lazy-init/dev-status.svg?style=flat-square)](https://david-dm.org/aliaksandr-master/gulp-lazy-init#info=devDependencies)

gulp-lazy-init
================

Small lazy initializer for separated gulp tasks

## install

```
npm install gulp-lazy-init -save-dev
```

## Usage

```js
const path = require('path');
const lazyTaskBuilder = require('gulp-lazy-init');
const task = lazyTaskBuilder(gulp, path.join(__dirname, '/gulp'));

gulp.task('test', 'test code of the project', [
  task('test-scripts')
]);

```