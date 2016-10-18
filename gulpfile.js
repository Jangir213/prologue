var gulp = require('gulp');
var server = require('gulp-server-livereload');
var sass = require('gulp-sass');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var csso = require('gulp-csso');
var prefixer = require('gulp-autoprefixer');


//server
gulp.task('server', function() {
	gulp.src('app')
	.pipe(server({
		livereload: true,
		open: true,
		port: 8080
	}));
});


//styles
gulp.task('style', function () {
	return gulp.src('app/sass/**/*.sass')
	.pipe(sass().on('error', sass.logError))
	.pipe(prefixer({
            browsers: ['last 15 versions']
        }))
	.pipe(gulp.dest('app/css'));
});

//build
gulp.task('build', function () {
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', csso()))
        .pipe(gulp.dest('build'));
});


gulp.task('watch', function () {
	gulp.watch('app/sass/**/*.sass', ['style']);
});

gulp.task('default', ['server', 'watch']);
