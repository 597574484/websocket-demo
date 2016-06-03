var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var express = require('express');
var config = require('./webpack.config.js');

var app = new express();
var port = 3000;
var complier = webpack(config);

app.use(webpackDevMiddleware(complier,{ noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(complier));

app.get("/", function(req, res){
	res.sendFile(__dirname + '/index.html');
});
app.listen(port, function(err){
	if(err){
		console.log('there is a err'  + err); 
	}else{
	}
})