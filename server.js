var path     = require('path');
var express  = require('express');
var mongoose = require('mongoose');
var passport = require('passport');

require(path.join(__dirname, 'config', 'paths'));

var config = require(path.join(PATHS.config, 'config'));

var auth = {};

/**
 * Bootstrap DB
 */
var db = mongoose.connect(config.db);

/**
 * Bootstrap Models
 */
var modelsPath = PATHS.models;
require(path.join(modelsPath, 'user'));
require(path.join(modelsPath, 'post'));

/**
 * Bootstrap Expres with Config
 */
var app = express();
require(path.join(PATHS.config, 'express'))(app, passport, db);

/**
 * Bootstrap Routes
 */
require(path.join(PATHS.config, 'routes'))(app, passport, auth);

/**
 * Start Application
 */
app.listen(config.port);
console.log('# ' + config.app.name + ' is running on port ' + config.port);

exports = module.exports = app;