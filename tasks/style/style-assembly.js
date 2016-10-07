'use strict';

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const paths = require('../../sliceart_modules/paths');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const sassInheritance = require('gulp-sass-inheritance');
// const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

module.exports = (options) => {
    return () => {
        /**
         * task options
         * */
        let isDevelopment;
        if (options.isDevelopment === undefined) {
            isDevelopment = true;
        } else {
            isDevelopment = Boolean(options.isDevelopment);
        }
        const srcFiles = options.src || paths.dev.masterAllStylesFiles;
        const dest = options.dest || paths.dev.publicStylesFolder;
        let processors = options.processors || [
                autoprefixer({browsers: ['last 1 version']}),
                require('postcss-partial-import')(),
                require("css-mqpacker")()
            ];
        if (!isDevelopment) {
            processors.push(cssnano({
                safe: true,
                sourcemap: false
            }));
        }
        /**
         * template assembly task
         * */
        return gulp.src(srcFiles)
            .pipe($.plumber({
                errorHandler: $.notify.onError(err => ({
                    title: 'style',
                    message: err.message
                }))
            }))
            .pipe($.if(global.isWatching, $.cached('style')))
            .pipe(sassInheritance({dir: 'app/'}))
            .pipe($.filter(function (file) {
                return !/\/_/.test(file.path) || !/^_/.test(file.relative);
            }))
            .pipe($.sass())
            .pipe($.postcss(processors))
            .pipe(gulp.dest(dest));
    };
};