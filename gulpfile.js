var gulp = require('gulp'),
    rename = require('gulp-rename'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    uglify = require('gulp-uglify'),
    transform = require('vinyl-transform'),
    exorcist = require('exorcist'),
    buffer = require('vinyl-buffer');

gulp.task('build:dev', function () {
    return browserify('./main.js', {
        debug: true
    }).
    bundle().
    pipe(source('js-essentials.js')).
    pipe(gulp.dest('./'));
});

gulp.task('build:live', function () {
    return browserify('./main.js', {
        debug: true
    }).
    bundle().
    pipe(source('js-essentials.js')).
    pipe(buffer()).
    pipe(uglify()).
    pipe(rename({
        extname: '.min.js'
    })).
    pipe(gulp.dest('./'));
});
