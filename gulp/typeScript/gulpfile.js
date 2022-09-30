//typeScript e tipada
//ele precisa ser transpilar

const { series } = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')

function transformacaoTs() {
    return tsProject.src() //config on line 7
        .pipe(tsProject())
        .pipe(gulp.dest('buid'))
}

exports.default = series(transformacaoTs)
//agora o typescript esta compilado