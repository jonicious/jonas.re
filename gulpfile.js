var gulp = require("gulp");
var browserSync = require("browser-sync");
var reload = browserSync.reload;
var htmlmin = require("gulp-htmlmin");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var cssmin = require("gulp-cssmin");
var notify = require("gulp-notify");
var shell = require('gulp-shell');

/*
 * Opens a webserver (usually localhost:3000) and runs the site.
 */

gulp.task("browser-sync", function () {
    browserSync({
        server: {
            baseDir: "./dist"
        }
    });
});

/*
 * Deploys the site on my server.
 */

gulp.task('deploy', shell.task([
    'rsync --numeric-ids -avze ssh _site/* _site/.htaccess savebox@lupus.uberspace.de:/var/www/virtual/savebox/jonas.re/'
]));

/*
 * Minifies the html (the index and every other file).
 */

gulp.task("html", function () {
    gulp.src("./index.html")
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest("./dist/"));
});

/*
 * Takes the style.scss where other scss files are imported.
 * Then compiles, autoprefixes and minifies it.
 * Later, we have one file which is saved to the sites /css directory.
 * If one css file changes, the changes gets injected (even without reloading).
 */

gulp.task("scss", function () {
    gulp.src(["./scss/style.scss"])
        .pipe(sass({
            onError: function (err) {
                return notify().write(err);
            }
        }))
        .pipe(autoprefixer("last 2 version", "ie 9"))
        .pipe(cssmin())
        .pipe(gulp.dest("./dist/"))
        .pipe(reload({stream: true}));
});

gulp.task("copy", function () {
    gulp.src(["./assets/**", "./.htaccess"])
        .pipe(gulp.dest("./dist/"));
});

/*
 * This task watches for changes to every js and scss file and then run its task.
 * It even looks files related to Jekyll (such as articles)
 * and then runs Jekyll to build the site.
 */

gulp.task("watch", ["scss", "browser-sync", "copy"], function () {
    gulp.watch("./index.html", ["html"]);
    gulp.watch("./scss/**/*.scss", ["scss"]);
    gulp.watch(["./assets/**", "./.htaccess"], ["copy"]);
});

gulp.task("default", ["watch"]);