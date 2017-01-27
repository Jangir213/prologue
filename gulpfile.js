var gulp = require('gulp');
var server = require('gulp-server-livereload');
var sass = require('gulp-sass');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var csso = require('gulp-csso');
var wait = require('gulp-wait');
var prefixer = require('gulp-autoprefixer');
var rimraf = require('rimraf');
var imagemin = require('gulp-imagemin');

//server
gulp.task('server', function() {
	gulp.src('src')
	.pipe(server({
		livereload: true,
		open: true,
		port: 8080
	}));
});


//styles
gulp.task('style', function () {
	return gulp.src('src/sass/**/*.sass')
	.pipe(wait(1500))
	.pipe(sass().on('error', sass.logError))
	.pipe(prefixer())
	.pipe(gulp.dest('src/css'));
});

//build
gulp.task('clean', function (c) {
	rimraf('./build', c);
});

gulp.task('html-build', function () {
	gulp
		.src('src/*.html')
		.pipe(useref())
		.pipe(gulpif('*.css', csso()))
		.pipe(gulpif('*.js', uglify()))
		.pipe(gulp.dest('./build'));
});

gulp.task('img-build', function () {
	gulp
		.src('src/images/*.*')
		.pipe(imagemin())
		.pipe(gulp.dest('./build/images'));
});

gulp.task('fonts-build', function () {
	gulp
		.src('src/fonts/*.*')
		.pipe(gulp.dest('./build/fonts'));
});

gulp.task('favicon-build', function () {
	gulp
		.src('src/favicon.ico')
		.pipe(gulp.dest('./build'));
});


gulp.task('build', [	
	'html-build',
	'img-build',
	'fonts-build',
	'favicon-build'
]);



gulp.task('watch', function () {
	gulp.watch('src/sass/**/*.sass', ['style']);
});

gulp.task('default', ['server', 'watch']);
