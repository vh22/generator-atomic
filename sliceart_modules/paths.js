const paths = {};

paths.dev = {
    masterFolder: 'app/',
    publicFolder: 'public/',
    component: {
        folder: '_components/',
        files: '*',
        recursiveFiles: '**/*'
    },
    template: {
        folder: 'templates/',
        files: '*.pug',
        recursiveFiles: '**/*.pug'
    },
    js: {
        folder: 'js/',
        files: '*.js',
        recursiveFiles: '**/*.js'
    },
    style: {
        folder: 'styles/',
        files: '*.{scss,sass}',
        recursiveFiles: '**/*.{scss,sass}'
    },
    config: {
        folder: 'configs/',
        files: '*',
        recursiveFiles: '**/*'
    },
    font: {
        folder: 'fonts/',
        files: '*.{woff2,woff,eot,ttf,svg}',
        recursiveFiles: '**/*.{woff2,woff,eot,ttf,svg}'
    },
    image: {
        folder: 'images/',
        files: '*.{gif,jpeg,jpg,png,svg,ico}',
        recursiveFiles: '**/*.{gif,jpeg,jpg,png,svg,ico}'
    },
    sprite: {
        folder: 'sprite-*/',
        srcFiles: 'ico-*.png',
        files: 'sprite-*.png',
        recursiveFiles: '**/sprite-*.png',
        recursiveSrcFiles: '**/ico-*.png'
    },
    allFiles: '*',
    recursiveAllFiles: '**/*'
};

/**
 * project's paths to master folders
 * */
paths.dev.masterTemplatesFolder = paths.dev.masterFolder + paths.dev.template.folder;
paths.dev.masterStylesFolder = paths.dev.masterFolder + paths.dev.style.folder;
paths.dev.masterJsFolder = paths.dev.masterFolder + paths.dev.js.folder;
paths.dev.masterImagesFolder = paths.dev.masterFolder + paths.dev.image.folder;
paths.dev.masterSpritesFolder = paths.dev.masterFolder + paths.dev.sprite.folder;
paths.dev.masterConfigsFolder = paths.dev.masterFolder + paths.dev.config.folder;

/**
 * project's paths to master files
 * */
paths.dev.masterTemplatesFiles = paths.dev.masterTemplatesFolder + paths.dev.template.files;
paths.dev.masterStylesFiles = paths.dev.masterStylesFolder + paths.dev.style.files;
paths.dev.masterJsFiles = paths.dev.masterJsFolder + paths.dev.js.files;
paths.dev.masterImagesFiles = paths.dev.masterImagesFolder + paths.dev.image.files;
paths.dev.masterSpritesFiles = paths.dev.masterImagesFolder + paths.dev.sprite.files;
paths.dev.masterSpritesSrcFiles = paths.dev.masterSpritesFolder + paths.dev.sprite.files;
paths.dev.masterConfigsFiles = paths.dev.masterConfigsFolder + paths.dev.config.files;

/**
 * component's paths to master folder
 * */
paths.dev.masterComponentFolder = paths.dev.masterFolder + paths.dev.component.folder;

/**
 * component's paths to master files
 * */
paths.dev.masterComponentTemplatesFiles = paths.dev.masterComponentFolder + paths.dev.template.recursiveFiles;
paths.dev.masterComponentStylesFiles = paths.dev.masterComponentFolder + paths.dev.style.recursiveFiles;
paths.dev.masterComponentJsFiles = paths.dev.masterComponentFolder + paths.dev.js.recursiveFiles;
paths.dev.masterComponentImagesFiles = paths.dev.masterComponentFolder + paths.dev.image.recursiveFiles;
paths.dev.masterComponentSpritesFiles = paths.dev.masterComponentFolder + paths.dev.sprite.recursiveFiles;
paths.dev.masterComponentSpritesSrcFiles = paths.dev.masterComponentFolder + paths.dev.sprite.recursiveSrcFiles;
paths.dev.masterComponentConfigsFiles = paths.dev.masterComponentFolder + paths.dev.config.recursiveFiles;

/**
 * paths to all master files
 * */
paths.dev.masterAllTemplatesFiles = paths.dev.masterFolder + paths.dev.template.recursiveFiles;
paths.dev.masterAllStylesFiles = paths.dev.masterFolder + paths.dev.style.recursiveFiles;
paths.dev.masterAllJsFiles = paths.dev.masterFolder + paths.dev.js.recursiveFiles;
paths.dev.masterAllImagesFiles = paths.dev.masterFolder + paths.dev.image.recursiveFiles;
paths.dev.masterAllFontsFiles = paths.dev.masterFolder + paths.dev.font.recursiveFiles;
paths.dev.masterAllSpritesFiles = paths.dev.masterFolder + paths.dev.sprite.recursiveFiles;
paths.dev.masterAllSpritesSrcFiles = paths.dev.masterFolder + paths.dev.sprite.recursiveSrcFiles;
paths.dev.masterAllConfigsFiles = paths.dev.masterFolder + paths.dev.config.recursiveFiles;

/**
 * project's paths to public folders
 * */
paths.dev.publicTemplatesFolder = paths.dev.publicFolder + paths.dev.template.folder;
paths.dev.publicStylesFolder = paths.dev.publicFolder + paths.dev.style.folder;
paths.dev.publicJsFolder = paths.dev.publicFolder + paths.dev.js.folder;
paths.dev.publicImagesFolder = paths.dev.publicFolder + paths.dev.image.folder;
paths.dev.publicFontsFolder = paths.dev.publicFolder + paths.dev.font.folder;
paths.dev.publicSpritesFolder = paths.dev.publicFolder + paths.dev.sprite.folder;
paths.dev.publicConfigsFolder = paths.dev.publicFolder + paths.dev.config.folder;

/**
 * project's paths to public files
 * */
paths.dev.publicTemplatesFiles = paths.dev.publicTemplatesFolder + paths.dev.recursiveAllFiles;
paths.dev.publicStylesFiles = paths.dev.publicStylesFolder + paths.dev.recursiveAllFiles;
paths.dev.publicJsFiles = paths.dev.publicJsFolder + paths.dev.recursiveAllFiles;
paths.dev.publicImagesFiles = paths.dev.publicImagesFolder + paths.dev.recursiveAllFiles;
paths.dev.publicSpritesFiles = paths.dev.publicSpritesFolder + paths.dev.recursiveAllFiles;
paths.dev.publicConfigsFiles = paths.dev.publicConfigsFolder + paths.dev.recursiveAllFiles;

module.exports = paths;