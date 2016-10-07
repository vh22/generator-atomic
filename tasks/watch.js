'use strict';

const gulp = require('gulp');
const paths = require('../sliceart_modules/paths');
const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

module.exports = () => {
    return (cb) => {
        if (isDevelopment) {
            gulp.watch(paths.dev.masterAllTemplatesFiles, gulp.series('assembly-template'));
            gulp.watch(paths.dev.masterAllStylesFiles, gulp.series('assembly-style'));
        } else {
            cb();
        }
    };
};