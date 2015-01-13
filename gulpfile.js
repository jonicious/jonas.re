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

gulp.task("browser-sync", function() {
  browserSync({
    server: {
      baseDir: "./_site"
    }
  });
});

gulp.task("jekyll", function (gulpCallBack){
  var spawn = require("child_process").spawn;
  var jekyll = spawn('jekyll', ["build"], {stdio: "inherit"});

  jekyll.on("exit", function(code) {
    gulpCallBack(code === 0 ? null : "ERROR: Jekyll process exited with code: "+code);
  });
});

gulp.task("html", function() {
  gulp.src("./_site/index.html")
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest("./_site"))
  gulp.src("./_site/*/*.html")
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest("./_site/./"))
  .pipe(browserSync.reload({stream:true, once: true}));
});

gulp.task("critical", function() {
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
})

gulp.task("js", function () {
  gulp.src(["/js/prism.js"])
    .pipe(concat("script.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("./js"))
  .pipe(browserSync.reload({stream:true, once: true}));
});

gulp.task("scss", function() {
  gulp.src(["./css/style.scss"])
    .pipe(sass({
      onError: function(err) {
        return notify().write(err);
      }
    }))
    .pipe(autoprefixer("last 2 version", "ie 9"))
    .pipe(cssmin())
    .pipe(gulp.dest("./_site/css/"))
});

gulp.task("all", ["html", "jekyll", "js", "scss"]);
gulp.task("jekyll-html", ["jekyll", "html"]);

gulp.task("watch-jekyll", ["jekyll-html"], function() {
  gulp.watch("./*/**/*.html", ["jekyll-html"])
});

gulp.task("watch-frontend", ["js", "scss"], function() {
  gulp.watch("./js/prism.js", ["js"])
  gulp.watch("./_sass/**/*.scss", ["scss"])
});
