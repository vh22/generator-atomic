'use strict';

const gulp = require('gulp');
const webpack = require('webpack-stream');
const paths = require('../../sliceart_modules/paths');
const glob = require('glob-all');
const path = require('path');

module.exports = function (options) {
    return function () {
        const isProduction = options.isProduction || false;
        const isBabel = options.isBabel || false;
        const bundleExtName = options.extname || '.bundle.js';
        const bundleFiles = paths.dev.pathToAllJs + bundleExtName;
        const excludeBundleFiles = '!' + bundleFiles;
        function getEntries() {
            glob([options.src || paths.dev.pathToAllJs, excludeBundleFiles], function (err, files) {
                let entries = {};
                if (err) {
                    done(err);
                }
                files.map(function (file) {
                    entries[path.basename(file, '.js')] = file;
                    return entries;
                });
            });
        }

        return gulp.src([options.src || paths.dev.pathToAllJs, excludeBundleFiles])
            .pipe(webpack({
                module: {
                    loaders: [{
                        test: /.js?$/,
                        loader: 'babel-loader',
                        exclude: /node_modules/,
                        query: {
                            presets: ['es2015']
                        }
                    }]
                },
                entry: options.entries || getEntries(),
                output: {
                    filename: paths.dev.folder + 'js/index.bundle.js'
                },
                watch: true
            }))
            .pipe(gulp.dest('./'));
    }
};