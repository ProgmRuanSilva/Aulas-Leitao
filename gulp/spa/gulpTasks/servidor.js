const gulp = require('gulp')
const webServer = require('gulp-webserver')
const watch = require('gulp-watch')

function servidor() {
    return gulp.src('buid')
        .pipe(webServer({
            port: 8080,
            open: true,
            livereload: true,
        }))
}

function monitArquivos(cb) {
    watch('src/**/*.html', () => gulp.series('appHTML')())
    watch('src/**/*.scss', () => gulp.series('appCSS')())
    watch('src/**/*.js', () => gulp.series('appJs')())
    watch('src/assets/imgs/**/*.*', () => gulp.series('appImg')())

    return 
}

module.exports = {
    monitArquivos,
    servidor
}