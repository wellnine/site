/**
 * Created by Cronix-23-ZTan on 29.08.2015.
 */
/**
 * Export Article module
 * @param config {Object} - some config for Article module
 * @returns {Article}
 */
module.exports = function (config) {
    return new Article(config);

};

/**
 * Article Class
 * @param config {Object} -> some config stuff like DB instance or absolute root path or some else
 * @constructor
 */
function Article(config) {
    this.config = config;

    this.ImageKernel = require(config.rootPath + '/utility/image/imageKernel');

}

/**
 *  Method return request middleware and root for koa-route
 * @returns {{get: {url: string, middleware: generator}, post: {url: string, middleware: generator}}}
 */
Article.prototype.routerChunk = function () {
    var Module = this;

    return [
         {
             method : 'get',
            url : '/terminal/articleCreate',
            middleware : Module.articleCreate()
        },
         {
             method : 'post',
            url : '/terminal/articleSave',
            middleware : Module.articleSave()
        }
    ]
};


/**
 * Create article method
 * @returns generator middleware for Koa
 */
Article.prototype.articleCreate =  function () {
    var Module = this;

    return function* (next) {
        console.log(this.request.body);


    }
};

/**
 * Article Save method
 * @returns generator middleware for Koa
 */
Article.prototype.articleSave = function () {
    var Module = this;

    return function* (next) {
        console.log("Article/index -> articleSave")
        console.log(this.request.body);
    }
};

/**
 * Article Get method
 * @returns generator middleware for Koa
 */
Article.prototype.articleGet = function () {
    var Module = this;

    return function* (next) {

    }
};
