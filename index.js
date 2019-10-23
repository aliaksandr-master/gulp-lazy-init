/*eslint-disable*/
'use strict';

const path = require('path');

module.exports = function (gulp, taskPathBuilder, lazy) {
  lazy = lazy == null ? true : Boolean(lazy);

  if (!taskPathBuilder) {
    taskPathBuilder = function (taskName) {
      return path.resolve(process.cwd(), taskName);
    };
  }

  if (typeof taskPathBuilder === 'string') {
    const baseName = taskPathBuilder;

    taskPathBuilder = function (taskName) {
      return path.resolve(baseName, taskName);
    };
  }

  const buildTask = function (taskName) {
    const taskPath = taskPathBuilder(taskName);

    if (!lazy) {
      require(taskPath);
    }

    const fn = function (callback) {
      let task = require(taskPath);

      if (typeof task !== 'function') {
        task = task.default;
      }

      return task(callback);
    };

    Object.defineProperty(fn, "name", { value: taskName });

    return fn;
  };

  buildTask.series = function (...tasksFunctions) {
    return gulp.series(...tasksFunctions);
  };

  buildTask.parallel = function (...tasksFunctions) {
    return gulp.parallel(...tasksFunctions);
  };

  return buildTask;
};
