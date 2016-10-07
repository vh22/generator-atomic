'use strict';

const gulp = require('gulp');
const fs = require('fs');
const $ = require('gulp-load-plugins')();

module.exports = (options) => {
    return (cb) => {
        return fs.access(options.src, (err) => {
            if (!err) {
                gulp.src(options.src, {read: false})
                    .pipe($.plumber({
                        errorHandler: $.notify.onError(err => ({
                            title: '',
                            message: err.message
                        }))
                    }))
                    .pipe($.clean());
                cb();
            } else {
                cb();
            }
        });
    };
};