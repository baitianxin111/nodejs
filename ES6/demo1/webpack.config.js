/**
 * Created by Administrator on 2017/7/3.
 */
const webpack = require('webpack');
const  path = require('path');

module.exports = {
    context :_dirname,
    entry:'./src/index.js',
    watch:true,
    output:{
        path:path.resolve(_dirname,'./js'),
        filename :'bundle.js',
        publicPath :'/dist',
    },
    module:{
        loaders:[
            {test:/\.js$/,loader:'babel-loader'}
        ]
    }
}