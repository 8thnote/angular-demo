var path = require('path');
var webpack = require('webpack');

module.exports = {
	context: path.resolve('js'),
	entry: './index.js',
	output: {
		path: path.resolve('build/js/'),
		publicPath: '/public/assets/js/',
		filename: "bundle.js"
	},

	devServer: {
		contentBase: 'public'
	},
	
	plugins: [
		new webpack.DefinePlugin({
			ON_TEST: process.env.NODE_ENV === 'test'
		})	
	],

	module: {
		loaders: [
			{test: /\.js$/, loader: "babel-loader", exclude: /node_modules/},
			{test: /\.html$/, loader: "raw-loader", exclude: /node_modules/}
		]
	},

	resolve: {
		extensions: ['', '.js', '.es6']
	}
};