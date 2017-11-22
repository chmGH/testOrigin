var gulp = require('gulp');
var jshint = require('gulp-jshint');

var jsFiles = ['*.js', 'src/**/*.js'];

gulp.task('style', function(){
	return gulp.src(jsFiles)
		.pipe(jshint());
});

gulp.task('inject', function(){
	var inject = require('gulp-inject');
	
	var injectSrc = gulp.src(['./public/css/*.css', './public/js/*.js']);
	
	var injectOptions = {
			ignorePath: '/public'
	};
	
	return gulp.src('./src/views/*.html')
		.pipe(inject(injectSrc, injectOptions))
		.pipe(gulp.dest('./src/views'));
});