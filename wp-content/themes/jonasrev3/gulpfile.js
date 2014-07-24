var	gulp			= require('gulp'),
	sass			= require('gulp-sass'),
	autoprefixer	= require('gulp-autoprefixer'),
	rename			= require('gulp-rename'),
	cssmin			= require('gulp-cssmin'),
	jshint			= require('gulp-jshint'),
	concat			= require('gulp-concat'),
	uglify			= require('gulp-uglify'),
	addsrc			= require('gulp-add-src'),
	watch			= require('gulp-watch'),
	fileinclude		= require('gulp-file-include'),
	htmlmin			= require('gulp-htmlmin'),
	browserSync		= require('browser-sync'),
	imagemin		= require('gulp-imagemin'),
	pngcrush		= require('imagemin-pngcrush'),
	jpegtran		= require('imagemin-jpegtran');
 
gulp.task('browser-sync', function() {  
	browserSync.init(["*.scss", "./*.js", "./*.html", "./*.php"], {
		proxy: "http://localhost:8888",
	});
});

gulp.task('bs-reload', function () {
	browserSync.reload();
});
 
gulp.task('images', function () {
	return gulp.src('assets/*')
		.pipe(imagemin({
			svgoPlugins: [{removeViewBox: false}],
			use: [pngcrush(), jpegtran()]
		}))
	.pipe(gulp.dest('./assets'));
});
 
gulp.task('sass', function() {
	gulp.src('scss/global.scss')
		.pipe(sass({errLogToConsole: true}))
		.pipe(autoprefixer("last 2 version", "ie 9"))
		.pipe(cssmin())
		.pipe(rename('style.css'))
		.pipe(gulp.dest('./'))
});
 
gulp.task('js', function() {
	gulp.src('./js/jquery.js')
		.pipe(addsrc('./js/main.js'))
		.pipe(jshint())
		// .pipe(jshint.reporter('default'))
		.pipe(concat('script.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./js'));
});
 
gulp.task('build', ['sass', 'js']);
 
gulp.task('watch', ['sass', 'browser-sync', 'js'], function () {  
	gulp.watch("*.scss", ['sass']);
	gulp.watch("./js/main.js", ['js']);
});