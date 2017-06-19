let gulp = require('gulp');
let browserify = require('browserify')
let source = require('vinyl-source-stream');
let tsify = require('tsify');
let brfs = require('brfs');
let buffer = require('vinyl-buffer');
let sourcemaps = require('gulp-sourcemaps');
let uglify = require('gulp-uglify');

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
    .pipe(source('angular-lte.min.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify({
        compress: {
            drop_debugger: false
        }
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(BUILD_DIR));
});
