const paths = {};

paths.dev = {
    /** folders */
    folder: 'app/',
    publicFolder: 'public/',
    componentsFolder: 'components/',
    templatesFolder: 'templates/',
    htmlFolder: 'app/',
    jsFolder: 'js/',
    stylesFolder: 'styles/',
    configsFolder: 'configs/',
    fontsFolder: 'fonts/',
    imagesFolder: 'images/',
    spritesFolder: 'sprite-*/',
    /** files */
    templates: '*.pug',
    styles: '*.{scss,sass}',
    js: '*.js',
    html: '*.html',
    css: '*.css',
    images: '*.{gif,jpeg,jpg,png,svg,ico}',
    sprites: 'sprite-*.png',
    fonts: '*.{woff2,woff,eot,ttf,svg}'
};

/** project paths to master folders */
paths.dev.pathToProjectTemplatesFolder = paths.dev.folder + paths.dev.templatesFolder;
paths.dev.pathToProjectHtmlFolder = paths.dev.folder + paths.dev.htmlFolder;
paths.dev.pathToProjectStylesFolder = paths.dev.folder + paths.dev.stylesFolder;
paths.dev.pathToProjectCssFolder = paths.dev.folder + paths.dev.stylesFolder;
paths.dev.pathToProjectJsFolder = paths.dev.folder + paths.dev.jsFolder;
paths.dev.pathToProjectImagesFolder = paths.dev.folder + paths.dev.imagesFolder;
paths.dev.pathToProjectSpritesFolder = paths.dev.folder + paths.dev.spritesFolder;
paths.dev.pathToProjectConfigsFolder = paths.dev.folder + paths.dev.configsFolder;

/** project paths to public folders */
paths.dev.pathToPublicTemplatesFolder = paths.dev.publicFolder + paths.dev.templatesFolder;
paths.dev.pathToPublicHtmlFolder = paths.dev.publicFolder + paths.dev.htmlFolder;
paths.dev.pathToPublicStylesFolder = paths.dev.publicFolder + paths.dev.stylesFolder;
paths.dev.pathToPublicCssFolder = paths.dev.publicFolder + paths.dev.stylesFolder;
paths.dev.pathToPublicJsFolder = paths.dev.publicFolder + paths.dev.jsFolder;
paths.dev.pathToPublicImagesFolder = paths.dev.publicFolder + paths.dev.imagesFolder;
paths.dev.pathToPublicSpritesFolder = paths.dev.publicFolder + paths.dev.spritesFolder;
paths.dev.pathToPublicConfigsFolder = paths.dev.publicFolder + paths.dev.configsFolder;

/** project paths to files */
paths.dev.pathToProjectTemplatesFiles = paths.dev.pathToProjectTemplatesFolder + paths.dev.templates;
paths.dev.pathToProjectHtmlFiles = paths.dev.pathToProjectHtmlFolder + paths.dev.html;
paths.dev.pathToProjectStylesFiles = paths.dev.pathToProjectStylesFolder + paths.dev.styles;
paths.dev.pathToProjectCssFiles = paths.dev.pathToProjectCssFolder + paths.dev.css;
paths.dev.pathToProjectJsFiles = paths.dev.pathToProjectJsFolder + paths.dev.js;
paths.dev.pathToProjectImagesFiles = paths.dev.pathToProjectImagesFolder + paths.dev.imagess;
paths.dev.pathToProjectSpritesFiles = paths.dev.pathToProjectSpritesFolder + paths.dev.sprites;

/** components paths */
paths.dev.pathToComponentsFolder = paths.dev.folder + paths.dev.componentsFolder;
paths.dev.pathToComponentsTemplatesFiles = paths.dev.pathToComponentsFolder + '**/' + paths.dev.templates;
paths.dev.pathToComponentsHtmlFiles = paths.dev.pathToComponentsFolder + '**/' + paths.dev.html;
paths.dev.pathToComponentsStylesFiles = paths.dev.pathToComponentsFolder + '**/' + paths.dev.styles;
paths.dev.pathToComponentsCssFiles = paths.dev.pathToComponentsFolder + '**/' + paths.dev.css;
paths.dev.pathToComponentsJsFiles = paths.dev.pathToComponentsFolder + '**/' + paths.dev.js;
paths.dev.pathToComponentsImagesFiles = paths.dev.pathToComponentsFolder + '**/' + paths.dev.images;
paths.dev.pathToComponentsSpritesFiles = paths.dev.pathToComponentsFolder + '**/' + paths.dev.sprites;

/** paths to all files */
paths.dev.pathToAllTemplates = paths.dev.pathToProjectFolder + '**/' + paths.dev.templates;
paths.dev.pathToAllHtml = paths.dev.pathToProjectFolder + '**/' + paths.dev.html;
paths.dev.pathToAllStyles = paths.dev.pathToProjectFolder + '**/' + paths.dev.styles;
paths.dev.pathToAllCss = paths.dev.pathToProjectFolder + '**/' + paths.dev.css;
paths.dev.pathToAllJs = paths.dev.pathToProjectFolder + '**/' + paths.dev.js;
paths.dev.pathToAllImages = paths.dev.pathToProjectFolder + '**/' + paths.dev.images;
paths.dev.pathToAllSprites = paths.dev.pathToProjectFolder + '**/' + paths.dev.sprites;

module.exports = paths;