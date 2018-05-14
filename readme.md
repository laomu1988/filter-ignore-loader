# webpack打包时忽略部分文件

## 安装
```
npm install filter-ignore-loader --save-dev
```

## 配置项
* test[Array]: 匹配文件规则，匹配后文件内容将被替换为template内容。假如不配置，则所有文件都会被替换
* template: 替换后的文件内容，默认空字符串

## 示例
```
// webpack配置
const webpackConfig = {
    entry: {
        index: './test/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: ''
    },
    module: {
        rules: [{
            test: /\.*.js/,
            use: [
                {
                    loader: path.resolve(__dirname, '../index'),
                    options: {
                        test: ['ignore'],
                        template: 'console.log("ignore-template");'
                    }
                }
            ]
        }]
    }
};
```


## 版本记录
### 1.0.1
- 修复webpack4升级后this.options.context不能使用的问题
### 1.0.0
- 指定模板、忽略部分文件