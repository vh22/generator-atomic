'use strict';

const gulp = require('gulp');
const pugInheritance = require('gulp-pug-inheritance');
const debug = require('gulp-debug');
const $ = require('gulp-load-plugins')();
const paths = require('../../sliceart_modules/paths');

module.exports = (options) => {
    return () => {
        /**
         * task options
         * */
        const isDevelopment = options.isDevelopment || true;
        const srcFiles = options.src || paths.dev.folder + '**/' + paths.dev.templates;
        const dest = options.dest || paths.dev.publicFolder;
        const isRelativeRefresh = options.relativeRefresh || true;
        const templateSrcFolder = options.templateSrcFolder || paths.dev.folder;
        const isDataJson = options.isDataJson || false;
        const templateOptions = options.templateOptions || {
                pretty: true
            };
        /**
         * template assembly task
         * */
        return gulp.src(srcFiles)
            .pipe($.plumber({
                errorHandler: $.notify.onError(err => ({
                    title: 'Pug',
                    message: err.message
                }))
            }))
            .pipe(debug({title: 'before'}))
            // .pipe($.changed(dest, {extension: '.html'}))
            .pipe($.if(global.isWatching, $.cached('template')))
            .pipe(pugInheritance({basedir: 'app'}))
            .pipe(debug({title: 'after'}))
            .pipe($.filter(function (file) {
                return !/\/_/.test(file.path) && !/^_/.test(file.relative);
            }))
            // .pipe($.if(isDataJson, $.data(function (file) {
            //     return require('../../' + paths.dev.configs.pathToFolder + path.basename(file.path, '.jade') + '.json');
            // })))
            .pipe($.pug(templateOptions))
            .pipe(gulp.dest(dest));
    };
};