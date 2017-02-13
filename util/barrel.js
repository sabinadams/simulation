var exports = module.exports = {};

//Library Imports
exports.express = require('express');
exports.rand = require('random-number');

//Classes
exports.Bot = require('./bot');

//Global Variables
exports.options = { min: 0, max: 500, integer: true};
exports.app = exports.express(); 
exports.serv = require('http').Server(exports.app);
exports.initialXY = [
	{ 'x': 245, 'y': 220 },
	{ 'x': 200, 'y': 240 },
	{ 'x': 285, 'y': 240 },
	{ 'x': 200, 'y': 270 },
	{ 'x': 285, 'y': 270 },
	{ 'x': 245, 'y': 295 }
];