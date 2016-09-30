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

gulp.task('setWatch', function(cb) {
    global.isWatching = true;
    cb();
});

gulp.task('watch', function () {
    gulp.watch(paths.dev.folder + '**/' + paths.dev.templates, gulp.series('template'));
});

lazyRequireTask('js', './tasks/js/js-assembly.js');

lazyRequireTask('template', './tasks/template/template-assembly.js');

gulp.task('dev', gulp.series('setWatch', 'js', 'template'));

gulp.task('default', gulp.series('setWatch', 'template', 'watch'));