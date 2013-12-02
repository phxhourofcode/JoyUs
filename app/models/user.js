/**
 * Module dependencies.
 */
var _        = require('lodash');
var bcrypt   = require('bcrypt');
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var authTypes = ['github', 'twitter', 'facebook', 'google'];


/**
 * User Schema
 */
var UserSchema = new Schema({
  name: String,
  email: String,
  username: {
    type: String,
    unique: true
  },
  provider: String,
  password: String,
  facebook: {},
  twitter: {},
  github: {},
  google: {}
});
