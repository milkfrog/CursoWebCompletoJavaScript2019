const gulp = require('gulp')
const webserver = require('gulp-webserver')
const app = require('./app')

function monitorarMudancas() {
    gulp.watch('src/**/*.html', app.html)
    gulp.watch('src/**/*.scss', app.css)
    gulp.watch('src/**/*.js', app.js)
    gulp.watch('src/assets/imgs/**/*.*', app.imgs)
}

exports.tasks = gulp.parallel(monitorarMudancas, () => {
    return gulp.src('build').pipe(webserver({
        livereload: true,
        port: 4000,
        open: true
    }))
})