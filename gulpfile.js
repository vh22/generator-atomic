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

/**
 * Common tasks
 * */

lazyRequireTask('clean-public', './tasks/clean.js', {
    src: paths.dev.publicFolder
});

lazyRequireTask('copy-images', './tasks/copy.js', {
    src: paths.dev.masterAllImagesFiles,
    excludeSrc: paths.dev.masterAllSpritesSrcFiles,
    dest: paths.dev.publicImagesFolder
});

lazyRequireTask('copy-fonts', './tasks/copy.js', {
    src: paths.dev.masterAllFontsFiles,
    dest: paths.dev.publicFontsFolder
});

/**
 * Tasks for development
 * */

lazyRequireTask('set-watch', './tasks/set-watch.js');

lazyRequireTask('watch', './tasks/watch.js');

lazyRequireTask('assembly-dev-js', './tasks/js/js-assembly.js');

lazyRequireTask('assembly-dev-template', './tasks/template/template-assembly.js');

lazyRequireTask('assembly-dev-style', './tasks/style/style-assembly.js');

gulp.task('assembly-dev', gulp.series('set-watch', gulp.parallel('assembly-dev-js', 'assembly-dev-template', 'assembly-dev-style')));

/**
 * Tasks for production
 * */

lazyRequireTask('assembly-prod-js', './tasks/js/js-assembly.js', {
    isDevelopment: false
});

lazyRequireTask('assembly-prod-template', './tasks/template/template-assembly.js', {
    isDevelopment: false
});

lazyRequireTask('assembly-prod-style', './tasks/style/style-assembly.js', {
    isDevelopment: false
});

gulp.task('prod', gulp.series('clean-public', gulp.parallel('copy-images', 'copy-fonts', 'assembly-prod-js', 'assembly-prod-template', 'assembly-prod-style')));

/**
 * Task by default
 * */

gulp.task('default', gulp.series('clean-public', 'set-watch', 'assembly-dev', 'watch'));