var gulp 		= require('gulp'),
	jade		= require('gulp-jade')

module.exports = function () {
	gulp.src('./server/views/index.jade')
		.pipe(jade({locals: {production: process.env.NODE_ENV || false}}))
		.pipe(gulp.dest('./public/'))
};