var gulp = require("gulp");
var browserSync = require("browser-sync");
var reload = browserSync.reload;
var htmlmin = require("gulp-htmlmin");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var cssmin = require("gulp-cssmin");
var notify = require("gulp-notify");
var rename = require("gulp-rename");
var critical = require('critical');
var addsrc = require('gulp-add-src');
var shell = require('gulp-shell');

/*
 * Opens a webserver (usually localhost:3000) and runs the site.
 */

gulp.task("browser-sync", function () {
    browserSync({
        server: {
            baseDir: "./_site"
        }
    });
});

/*
 * Builds the site.
 */

gulp.task("jekyll", function (gulpCallBack) {
    var spawn = require("child_process").spawn;
    var jekyll = spawn('jekyll', ["build"], {stdio: "inherit"});

    jekyll.on("exit", function (code) {
        gulpCallBack(code === 0 ? null : "ERROR: Jekyll process exited with code: " + code);
    });
});

/*
 * Runs the the following tasks in order and whats until they are finished:
 * - Jekyll
 * - Critical
 * - HTML
 */

gulp.task('build', shell.task([
    'gulp jekyll && gulp critical && gulp html'
]));

/*
 * The html task waits for the Jekyll task to finish.
 * Then minifies the html (the index and every other file).
 */

gulp.task("html", function () {
    gulp.src("./_site/index.html")
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest("./_site"))
    gulp.src("./_site/*/*.html")
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest("./_site/./"))
});

/*
 * Generates the critical css (given the index.html)
 * and puts it in the index.html
 * By now, critical css is only generated for the index page.
 * (Not used at the moment.)
 */

gulp.task("critical", function () {
    critical.generate({
        base: '_site/',
        src: 'index.html',
        dest: 'css/critical.css',
        minify: true,
        extract: true,
        width: 320,
        height: 480
    });

    critical.inline({
        base: '_site/',
        src: 'index.html',
        dest: 'index.html',
        minify: true
    });

});

/*
 * Takes js files and concatenates it in script.min.js.
 * This file will get minified and saved
 * to the sites /js directory and the projects /js directory.
 * If one javascript changes, the browser gets reloaded.
 */

gulp.task("js", function () {
    gulp.src("./js/prism.js")
        .pipe(addsrc("./js/fontfaceobserver.js"))
        .pipe(addsrc("./js/main.js"))
        .pipe(concat("script.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("./js/"))
        .pipe(gulp.dest("./_site/js/"))
        .pipe(reload({stream: true}));
});

/*
 * Takes the style.scss where other scss files are imported.
 * Then compiles, autoprefixes and minifies it.
 * Later, we have one file which is saved to the sites /css directory.
 * If one css file changes, the changes gets injected (even without reloading).
 */

gulp.task("scss", function () {
    gulp.src(["./css/style.scss"])
        .pipe(sass({
            onError: function (err) {
                return notify().write(err);
            }
        }))
        .pipe(autoprefixer("last 2 version", "ie 9"))
        .pipe(cssmin())
        .pipe(gulp.dest("./_site/css/"))
        .pipe(reload({stream: true}));
});

/*
 * This task watches for changes to every js and scss file and then run its task.
 * It even looks files related to Jekyll (such as articles)
 * and then runs Jekyll to build the site.
 */

gulp.task("watch", ["js", "scss", "browser-sync"], function () {
    gulp.watch("./js/*.js", ["js"])
    gulp.watch("./_sass/**/*.scss", ["scss"])
    gulp.watch(["index.html", "_includes/*.html", "_layouts/*.html", "*.md", "_posts/*"], ["build"]);
});