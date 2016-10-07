'use strict';

const gulp = require('gulp');
const path = require('path');
const $ = require('gulp-load-plugins')();
const paths = require('../../sliceart_modules/paths');
// const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

module.exports = (options) => {
    return () => {
        /**
         * task options
         * */
        // let isDevelopment;
        // if (options.isDevelopment === undefined) {
        //     isDevelopment = true;
        // } else {
        //     isDevelopment = Boolean(options.isDevelopment);
        // }
        const templateSrcFolder = options.templateSrcFolder || paths.dev.masterFolder;
        const srcFiles = options.src || templateSrcFolder + paths.dev.template.recursiveFiles;
        const dest = options.dest || paths.dev.publicFolder;
        // const isRelativeRefresh = options.relativeRefresh || true;
        // const isDataJson = options.isDataJson || false;
        const templateOptions = options.templateOptions || {pretty: true};
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
            // .pipe($.changed(dest, {extension: '.html'}))
            // .pipe($.if(global.isWatching, $.cached('template')))
            // .pipe(pugInheritance({basedir: path.join(__dirname, paths.dev.masterFolder)}))
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