'use strict';

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const paths = require('../../sliceart_modules/paths');
const webpackStream = require('webpack-stream');
const webpack = webpackStream.webpack;
const glob = require('glob-all');
const path = require('path');
const named = require('vinyl-named');
const gulplog = require('gulplog');
const AssetsPlugin = require('assets-webpack-plugin');

module.exports = (options) => {
    return (callback) => {
        /**
         * data for webpack watch integration
         * */
        let firstBuildReady = false;

        function done(err, stats) {
            firstBuildReady = true;

            if (err) { // hard error, see https://webpack.github.io/docs/node.js-api.html#error-handling
                return;  // emit('error', err) in webpack-stream
            }

            gulplog[stats.hasErrors() ? 'error' : 'info'](stats.toString({
                colors: true
            }));

        }

        /**
         * task options
         * */
        const isDevelopment = options.isProduction || true;
        const isBabel = options.isBabel || true;
        // const bundleExtName = options.extname || '.bundle.js';
        /**
         * inner variables
         * */
        // let bundleFiles = paths.dev.pathToProjectJsFiles.substring(0, paths.dev.pathToProjectJsFiles.length - 3) + bundleExtName;
        // let excludeBundleFiles = '!' + bundleFiles;
        /**
         * task options
         * */
        const srcFiles = options.src || paths.dev.pathToProjectJsFiles;
        /**
         * webpackStream settings
         * */
        let webpackOption = {
            output: {
                publicPath: '/' + paths.dev.pathToPublicJsFolder,
                filename: isDevelopment ? '[name].js' : '[name]-[chunkhash:10].js',
                library: '[name]'
            },
            devtool: isDevelopment ? 'cheap-module-inline-source-map' : null,
            module: {
                loaders: []
            },
            watch: isDevelopment,
            plugins: [
                new webpack.NoErrorsPlugin(),
                new webpack.optimize.CommonsChunkPlugin({
                    name: 'common',
                    minChunks: 2
                })
            ],
            resolve: {
                moduleDirectories: ['node_modules'],
                extensions: ['', '.js']
            },
            resolveLoader: {
                moduleDirectories: ['node_modules'],
                moduleTemplates: ['*-loader', '*'],
                extensions: ['', '.js']
            }
        };
        /**
         * data for webpack files manifest
         * */
        if (!isDevelopment) {
            webpackOption.plugins.push(new AssetsPlugin({
                filename: 'webpack.json',
                path: paths.dev.pathToProjectConfigsFolder + 'manifest/',
                processOutput(assets) {
                    for (let key in assets) {
                        assets[key + '.js'] = assets[key].js.slice(webpackOption.output.publicPath.length);
                        delete assets[key];
                    }
                    return JSON.stringify(assets);
                }
            }));
        }
        if (isBabel) {
            webpackOption.module.loaders.push({
                test: /.js?$/,
                include: path.join(__dirname, '../../', paths.dev.folder),
                loader: 'babel?presets[]=es2015'
            });
        }

        /**
         * js assembly task
         * */
        return gulp.src(srcFiles)
            .pipe($.plumber({
                errorHandler: $.notify.onError(err => ({
                    title: 'Webpack',
                    message: err.message
                }))
            }))
            .pipe(named())
            .pipe(webpackStream(webpackOption, null, done))
            .pipe($.if(!isDevelopment, $.uglify()))
            .pipe(gulp.dest(paths.dev.pathToPublicJsFolder))
            .on('data', function () {
                if (firstBuildReady) {
                    callback();
                }
            });
    };
};