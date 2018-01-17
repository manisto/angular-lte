const gulp = require("gulp");
const typescript = require("typescript");
const rollup = require("rollup");
const typescriptPlugin = require("rollup-plugin-typescript");
const templateCache = require("gulp-angular-templatecache");

const BUILD_DIR = "dist";

gulp.task("default", ["typescript", "templates"]);

gulp.task("typescript", [], () => {
  return rollup
    .rollup({
      input: "./index.ts",
      plugins: [typescriptPlugin({ typescript })]
    })
    .then(bundle => {
      return bundle.write({
        sourcemap: true,
        file: "dist/angular-lte.min.js",
        format: "umd",
        name: "angular-lte"
      });
    });
});

gulp.task("templates", [], () => {
  return gulp
    .src("src/**/*.html")
    .pipe(
      templateCache({
        root: "angular-lte",
        module: "angular-lte",
        moduleSystem: "iife"
      })
    )
    .pipe(gulp.dest(BUILD_DIR));
});
