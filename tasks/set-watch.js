'use strict';

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

module.exports = () => {
    return (cb) => {
        if (isDevelopment) {
            global.isWatching = true;
        }
        cb();
    };
};