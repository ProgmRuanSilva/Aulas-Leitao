//sass pre compila o css nativo

const { series } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')
const uglufycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

//lerts compile sass to our project
function tranformCss() {
    return gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError))//is not needed
        .pipe(uglufycss({ "uglyCommetns": true}))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('buid/css'))
    }

function copiHTML() {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('buid'))
}
exports.default = series(tranformCss)