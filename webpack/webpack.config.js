const webpack = require('webpack')

//frist select mode
module.exports = {
    mode: 'development',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    module: {
        rules: [{
            test: /\.css$/, //ler aquivo css
            use: [
                'style-loader', //injeta css dentro da dom <style>
                'css-loader' //interpretador dos @import, url()...
            ]
        }]
    }
}