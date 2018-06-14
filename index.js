/*eslint-disable*/
'use strict';

var path = require('path');
var runSequence = require('run-sequence');

module.exports = function (gulp, taskPathBuilder, lazy) {
  lazy = lazy == null ? true : Boolean(lazy);

  var collection = {};

  if (!taskPathBuilder) {
    taskPathBuilder = function (taskName) {
      return path.resolve(process.cwd(), taskName);
    };
  }

  if (typeof taskPathBuilder === 'string') {
    var baseName = taskPathBuilder;

    taskPathBuilder = function (taskName) {
      return path.resolve(baseName, taskName);
    };
  }

  var buildTask = function (taskName) {
    var taskPath = taskPathBuilder(taskName);

    if (collection.hasOwnProperty(taskName)) {
      return taskName;
    }

    collection[taskName] = true;

    if (!lazy) {
      require(taskPath);
    }

    gulp.task(taskName, function (callback) {
      var task = require(taskPath);

      if (typeof task !== 'function') {
        task = task.default;
      }

      return task(callback);
    });

    return taskName;
  };

  buildTask.sequence = function () {
    var args = Array.prototype.slice.call(arguments).filter(Boolean);

    return function (callback) {
      args.push(callback);
      runSequence.apply(null, args);
    }
  };

  return buildTask;
};
