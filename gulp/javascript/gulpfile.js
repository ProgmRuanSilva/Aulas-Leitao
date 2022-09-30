const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function padrao(cb) {
    //vamos transformar 
    gulp.src('src/**/*.js')
    .pipe(babel({ //babel transpila o codigo
        comments: false, //tira os comentarios
        presets: ["env"] //latest version
    }))
    .pipe(uglify())
    .on('error', err => console.log(err))
    .pipe(concat('codigo.min.js'))//min por convencao quando minificado
    .pipe(gulp.dest('buid'))

    return cb()
}

function fim(cb) {
    console.log('fim')
    return cb()
}

exports.default = series(padrao, fim)