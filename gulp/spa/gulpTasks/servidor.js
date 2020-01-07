const gulp = require('gulp')

function monitorarMudancas(done) {
    done()
}

exports.tasks = gulp.series(monitorarMudancas, (done) => {
    done()
})