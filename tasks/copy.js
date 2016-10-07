'use strict';

const gulp = require('gulp');
const debug = require('gulp-debug');
const $ = require('gulp-load-plugins')();
const paths = require('../sliceart_modules/paths');

module.exports = (options) => {
    return () => {
        let isRecursive = options.isRecursive || false;
        return gulp.src([options.src, `!${options.excludeSrc}`])
            .pipe($.plumber({
                errorHandler: $.notify.onError(err => ({
                    title: '',
                    message: err.message
                }))
            }))
            .pipe($.if(!isRecursive, $.rename({dirname: ''})))
            .pipe($.newer(options.dest))
            .pipe(gulp.dest(options.dest));
    };
};