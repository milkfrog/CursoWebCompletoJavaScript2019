const gulp = require('gulp')
const sass = require('gulp-sass')
sass.compiler = require('node-sass')
const concat = require('gulp-concat')
const uglifycss = require('gulp-uglifycss')


gulp.task('css', () => {
    return gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({ "uglyComments": true }))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'));
})

gulp.task('copiar', (done) => {
    gulp.src('src/index.html')
        .pipe(gulp.dest('./build'))
    done()
})

gulp.task('default', gulp.series('copiar', 'css'))