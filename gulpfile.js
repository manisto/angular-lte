let gulp = require('gulp');
let browserify = require('browserify')
let source = require('vinyl-source-stream');
let tsify = require('tsify');

const BUILD_DIR = 'dist';

gulp.task('', [], () => {
    return browserify({
        basedir: '.',
        debug: true,
        entries: ['index.ts'],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .bundle()
    .pipe(source('angular-lte.js'))
    .pipe(gulp.dest(BUILD_DIR));
});