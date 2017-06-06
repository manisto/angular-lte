let gulp = require('gulp');
let browserify = require('browserify')
let source = require('vinyl-source-stream');
let tsify = require('tsify');
let brfs = require('brfs');
let less = require('gulp-less');
let cleanCss = require('gulp-clean-css');
let rename = require('gulp-rename');

const BUILD_DIR = 'dist';

gulp.task('default', [], () => {
    return browserify({
        basedir: '.',
        debug: true,
        entries: ['index.ts'],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .transform(brfs)
    .bundle()
    .pipe(source('angular-lte.js'))
    .pipe(gulp.dest(BUILD_DIR));
});

gulp.task('less', [], () => {
    return gulp.src('./src/less/*.less')
        .pipe(less({}))
        .pipe(gulp.dest(BUILD_DIR))
        .pipe(cleanCss())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(BUILD_DIR));
});