const gulp = require("gulp");
const typescript = require("typescript");
const rollup = require("rollup");
const typescriptPlugin = require("rollup-plugin-typescript");
const templateCache = require("gulp-angular-templatecache");

const BUILD_DIR = "dist";

gulp.task("default", ["dist"]);

gulp.task("dist", ["typescript", "templates"]);

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
      templateCache("angular-lte.templates.js", {
        root: "angular-lte",
        module: "angular-lte",
        moduleSystem: "iife"
      })
    )
    .pipe(gulp.dest(BUILD_DIR));
});

gulp.task(
  "docs",
  ["docs-js", "docs-css", "docs-lib", "docs-fonts", "docs-img"],
  () => {}
);

gulp.task("docs-js", [], () => {
  let scripts = [
    "node_modules/angular/angular.min.js",
    "node_modules/@uirouter/core/_bundles/ui-router-core.min.js",
    "node_modules/@uirouter/angularjs/release/ui-router-angularjs.min.js",
    "node_modules/angular-animate/angular-animate.min.js",
    "node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js"
  ];

  return gulp.src(scripts).pipe(gulp.dest("docs/js"));
});

gulp.task("docs-css", [], () => {
  let styles = [
    "node_modules/admin-lte/bootstrap/css/bootstrap.min.css",
    "node_modules/admin-lte/dist/css/AdminLTE.min.css",
    "node_modules/admin-lte/dist/css/skins/_all-skins.min.css",
    "node_modules/font-awesome/css/font-awesome.min.css"
  ];

  return gulp.src(styles).pipe(gulp.dest("docs/css"));
});

gulp.task("docs-lib", ["dist"], () => {
  return gulp.src("dist/*").pipe(gulp.dest("docs/lib"));
});

gulp.task("docs-fonts", [], () => {
  return gulp
    .src("node_modules/font-awesome/fonts/*")
    .pipe(gulp.dest("docs/fonts"));
});

gulp.task("docs-img", [], () => {
  return gulp
    .src("node_modules/admin-lte/dist/img/*")
    .pipe(gulp.dest("docs/img"));
});
