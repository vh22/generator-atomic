const paths = {};

paths.dev = {
    folder: 'app/',
    componentsFolder: 'components/',
    jade: '**/*.jade',
    sass: 'index.{scss,sass}',
    js: 'js/*',
    html: '**/*.html',
    css: 'css/*',
    images: {
        files: '**/*.{gif,jpeg,jpg,png,svg,ico}',
        spriteFiles: 'sprite-**/*.png'
    },
    fonts: {
        folder: 'fonts/',
        files: '**/*.{woff2,woff,eot,ttf,svg}'
    },
    configs: {
        folder: 'config/',
        files: '**/*'
    }
};

paths.dev.pathToComponentFolder = paths.dev.folder + paths.dev.componentsFolder;
paths.dev.pathToCssFiles = paths.dev.pathToComponentFolder + paths.dev.css;
paths.dev.pathToJsFiles = paths.dev.pathToComponentFolder + paths.dev.js;
paths.dev.pathToJadeFiles = paths.dev.pathToComponentFolder + paths.dev.jade;
paths.dev.pathToHtmlFiles = paths.dev.pathToComponentFolder + paths.dev.html;
paths.dev.pathToSassFiles = paths.dev.pathToComponentFolder + paths.dev.sass;
paths.dev.pathToImageFiles = paths.dev.pathToComponentFolder + paths.dev.images.files;
paths.dev.pathToSpriteFiles = paths.dev.pathToComponentFolder + paths.dev.images.spriteFiles;
paths.dev.pathToAllJs = paths.dev.folder + paths.dev.js;

module.exports = paths;