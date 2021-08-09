var express = require('express');
var path = require('path');
var app = express();

// not entirely sure how to implement HTML + CSS yet

/*import express from 'express'
import path from 'path'
import app from 'express'*//*

console.log(__dirname);

app.use(express.static('../assets'))
app.use('/css', express.static(__dirname + '../assets/css'))
app.use('/img', express.static(__dirname + '../assets/img'))
app.use('/fonts', express.static(__dirname + 'assets/fonts'))


app.get('/', function (req, resp) {
		res.send('Hello World');
	resp.sendFile('index.html', {root: path.join(__dirname, '../')});
});

app.get('/privacy', function (req, resp) {
		res.send('Hello World');
	resp.sendFile('index.html', {root: path.join(__dirname, '../privacy')});
});

app.get('/login', function (req, resp) {
		res.send('Hello World');
	resp.sendFile('index.html', {root: path.join(__dirname, '../login')});
});*/

app.get('/', function (req, res) {
	res.send('Hello World');
});

app.listen(8080, function () {
	console.log('Server started on port 8080...')
});