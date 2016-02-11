var path = require('path');
var webpack = require('webpack');

var config = {
	context: path.resolve('js'),
	entry: './index.js',
	output: {
		path: path.resolve('build/js/'),
		publicPath: '/assets/js/',
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
			{test: /\.js$/, loader: "ng-annotate!babel-loader", exclude: /node_modules/},
			{test: /\.html$/, loader: "raw-loader", exclude: /node_modules/}
		]
	},

	resolve: {
		extensions: ['', '.js', '.es6']
	}
};

if (process.env.NODE_ENV === 'production') {
	config.output.path = path.resolve('public/assets/js/');
	config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = config;