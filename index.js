/**
 * @file 忽略部分文件
 */
const loaderUtils = require('loader-utils');
const template = '';

module.exports = function (source) {
    const options = loaderUtils.getOptions(this) || {};
    const root = this.options.context;
    const resourcePath = this.resourcePath.replace(root, '');
    // console.log('options:', options);
    // console.log('root:', root);
    if (options.test) {
        for(let i = 0; i < options.test.length; i++) {
            let path = options.test[i];
            if (typeof path === 'string') {
                if (resourcePath.indexOf(path) >= 0) {
                    console.log('ignore:', resourcePath);
                    return options.template || template;
                }
            }
            else if (path instanceof RegExp) {
                if (path.test(resourcePath)) {
                    console.log('ignore:', resourcePath);
                    return options.template || template;
                }
            }
        }
    }
    else {
        console.log('ignore:', resourcePath);
        return options.template || template;
    }
    return source;
};
