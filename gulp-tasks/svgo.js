var gulp 		= require('gulp'),
	svgmin 		= require('gulp-svgmin');

module.exports = function () {

	var svgPath = './public/img/**/*.svg';
	svgPath = '';

	var svgOptions = {
		plugins: [
			{cleanupIDs: false}
		]
	}

	return gulp.src(svgPath)
		.pipe(svgmin(svgOptions))
		.pipe(gulp.dest('./public/img'))
};
