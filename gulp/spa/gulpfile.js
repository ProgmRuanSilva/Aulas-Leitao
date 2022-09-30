const gulp = require('gulp')
const {series, parallel} = require('gulp')

const {appHTML, appCSS, appJs, appIMG} = require('./gulpTasks/app')
const {depsCSS, depsFonts} = require('./gulpTasks/deps')
const {servidor, monitArquivos} = require('./gulpTasks/servidor')

module.exports.default = series(
    parallel(
        series(appHTML, appCSS, appJs, appIMG),
        series(depsCSS, depsFonts)
    ),
    servidor,
    monitArquivos
)