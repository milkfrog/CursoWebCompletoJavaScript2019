const gulp = require('gulp')
const util = require('gulp-util')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
//const sequence = require('run-sequence')

const deps = require('./gulpTasks/deps')
const app = require('./gulpTasks/app')
const servidor = require('./gulpTasks/servidor')



exports.default = gulp.series(gulp.parallel(deps.tasks, app.tasks), servidor.tasks) 