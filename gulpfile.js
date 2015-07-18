var gulp = require('gulp'),
    rename = require('gulp-rename'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    uglify = require('gulp-uglify'),
    transform = require('vinyl-transform'),
    buffer = require('vinyl-buffer'),
    header = require('gulp-header');

var pkg = require('./package.json');
var banner = [
    '/**',
    ' * <%= pkg.name %> - <%= pkg.description %>',
    ' * @version v<%= pkg.version %>',
    ' * @author <%= pkg.author %>',
    ' * @link <%= pkg.homepage %>',
    ' * @license <%= pkg.license %>',
    ' */',
    ''
].join('\n');

gulp.task('build:dev', function () {
    return browserify('./main.js', {
        debug: true
    }).
    bundle().
    pipe(source(pkg.name + '.js')).
    pipe(header(banner, {pkg: pkg})).
    pipe(gulp.dest('./dist'));
});

gulp.task('build:live', function () {
    return browserify('./main.js', {
        debug: true
    }).
    bundle().
    pipe(source(pkg.name + '.js')).
    pipe(buffer()).
    pipe(uglify()).
    pipe(rename({
        extname: '.min.js'
    })).
    pipe(header(banner, {pkg: pkg})).
    pipe(gulp.dest('./dist'));
});
