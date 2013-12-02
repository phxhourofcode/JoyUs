var _    = require('lodash');
var env  = process.env.NODE_ENV || 'development';
var path = require('path');

var allEnvConfig = require(__dirname + '/../config/env/all.js');
var envConfig    = require(__dirname + '/../config/env/' + env + '.js') || {}

module.exports = _.extend(allEnvConfig, envConfig);

