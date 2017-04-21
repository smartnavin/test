var gulp 		= require('gulp'),
	gutil 		= require("gulp-util"),
	path 		= require("path"),
	uglify 		= require("gulp-uglify"),
	rename 		= require("gulp-rename"),
	webpackStream 	= require('webpack-stream');
	webpack 		= require('webpack');

module.exports = function (callback) {
	webpackConfig = {
		entry: {
			app: path.resolve(__dirname+"/../assets/jsx/index.jsx"),
		},
		output: {
			filename: '[name].js',
			 publicPath: "/js/"
		},
		debug: true,
		cache: true,
		watch: true,
		module: {
			loaders: [
				{
					test: /\.jsx?$/,
					exclude: /(node_modules|bower_components)/,
					loader: 'babel',
					query: {
						presets: ["es2015", 'stage-0', 'react']
					}
				},
				{
					test: /\.css$/,
					loader: "style-loader!css-loader"
				},
				{
					test: /\.json$/,
					loader: "json-loader"
				},
			]
		},
		plugins: [
			new webpack.DefinePlugin({
        		"process.env": {
					BROWSER: JSON.stringify(true)
				}
    		})
		]
	}
	return gulp.src('./assets/jsx/index.jsx')
			.pipe(webpackStream(webpackConfig))
			.pipe(gulp.dest('./public/js'))
};
