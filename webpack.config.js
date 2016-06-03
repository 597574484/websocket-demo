var webpack = require('webpack');
var path = require('path');

var config = {
	devtool : "cheap-module-eval-source-map",
	entry : [
		"./index.js",
		"webpack-hot-middleware/client"
	],
	output : {
		publicPath : "/static/",
		path : path.join(__dirname, "dist"),
		filename : "bundle.js"
	},
	module : {
		loaders : [{
			test : /\.js$/,
			loaders : ["babel"],
			exclude : /node_modules/,
			include : __dirname
		},{
			test : /\.css$/,
			loaders : ["style","css"]
		}]
	},
	plugins : [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.optimize.OccurenceOrderPlugin()
	]
}

module.exports = config;