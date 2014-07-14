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
	browserSync.init(["./*.css", "./*.js", "./*.html"], {
    	server: {
        	baseDir: "./"
		}
	});
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
	gulp.src('style.scss')
		.pipe(sass())
		.pipe(autoprefixer("last 2 version", "ie 9"))
		.pipe(cssmin())
		.pipe(rename('style.css'))
		.pipe(gulp.dest('.'))
});
 
gulp.task('js', function() {
	gulp.src('./js/main.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(concat('script.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./js'));
});
 
gulp.task('build', ['sass', 'js']);
 
gulp.task('watch', ['sass', 'browser-sync', 'js'], function () {  
	gulp.watch("style.scss", ['sass']);
	gulp.watch("./js/main.js", ['js']);
});