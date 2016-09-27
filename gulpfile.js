'use strict';

const gulp = require('gulp');
const paths = require('./sliceart_modules/paths.js');

function lazyRequireTask(taskName, path, options) {
    options = options || {};
    options.taskName = taskName;
    gulp.task(taskName, function (callback) {
        let task = require(path).call(this, options);

        return task(callback);
    });
}

lazyRequireTask('js', './tasks/js/js-assembly.js');

gulp.task('default', gulp.parallel('js'));