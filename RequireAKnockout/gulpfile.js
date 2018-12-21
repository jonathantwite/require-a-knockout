var del = require('del');
var gulp = require('gulp');
var debug = require('gulp-debug');
var eslint = require('gulp-eslint');
var htmlreplace = require('gulp-html-replace');
var requirejsOptimize = require('gulp-requirejs-optimize');
var sourcemaps = require('gulp-sourcemaps');

const outputFolder = 'dist';

gulp.task('clean:dist', function () {
    return del([outputFolder + '/**/*']);
});

gulp.task('eslint', function () {
    return gulp.src(['scripts/app/**/*.js'])
        .pipe(debug())
        .pipe(eslint({
            'envs': ['amd'],
            'globals': ['requirejs']
        }))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('js', function () {
    return gulp.src('scripts/app/app.js')
        //.pipe(sourcemaps.init())
        .pipe(requirejsOptimize({
            mainConfigFile: 'scripts/app/app.js', // Main config location - defines module locations
            name: './../vendor/almond',           // Name of first module to optimise
            include: 'app',                       // Then include app.js
            //optimize: 'none',                   // For debug
            wrap: true                            // Wraps in IIFE (not sure if needed)
        }))
        //.pipe(sourcemaps.write())
        .pipe(gulp.dest(outputFolder + '/scripts'));
});

gulp.task('styles', function () {
    return gulp.src('styles/**/*')
        .pipe(gulp.dest(outputFolder + '/styles'));
})

gulp.task('html', function () {
    return gulp.src('index.html')
        .pipe(htmlreplace({ 'js': 'scripts/app.js' }))
        .pipe(gulp.dest(outputFolder));
});

gulp.task('build',
    gulp.series(
        'eslint',
        'clean:dist',
        gulp.parallel('html', 'js', 'styles')
    )
);