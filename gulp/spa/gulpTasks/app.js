const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')

function appHTML() {
    return gulp.src('src/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('buid'))
}

function appCSS() {
    return gulp.src('spa/src/assets/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({"uglifyComments": true}))
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('buid/assets/css'))
}

function appJs() {
    return gulp.src('src/assets/js/**/*.js')
        .pipe(babel({presets: ['ENV']}))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('buid/assets/js'))
}

function appImg() {
    return gulp.src('src/assets/imgs/**/*.*')
        .pipe(gulp.dest('buid/assets/imgs'))
}

gulp.task('appHTML', appHTML)
gulp.task('appCSS', appCSS)
gulp.task('appImg', appImg)
gulp.task('appJs', appJs)

module.exports = {
    appHTML,
    appCSS,
    appJs,
    appImg
}