const webpack = require('webpack')
const MiniCSS = require('mini-css-extract-plugin')

//frist select mode
module.exports = {
    mode: 'development',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    plugins: [
        new MiniCSS({
            filename: "estilo.css"
        })
    ],
    module: {
        rules: [{
            test: /\.css$/, //ler aquivo css
            use: [
                MiniCSS.loader,
                //'style-loader', //injeta css dentro da dom <style>
                'css-loader' //interpretador dos @import, url()...
            ]
        }]
    }
}