/**
 * Module dependencies.
 */
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var Troop    = require('mongoose-troop');

/**
 * Post Schema
 */
var PostSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  content: {
    type: String,
    default: '',
    trim: true
  }
  // user: {
  //   type: Schema.ObjectId,
  //   ref: 'User'
  // }
});

/**
 * Validations
 */
PostSchema.path('content').validate(function(content) {
  return content.length;
}, 'Content cannot be blank');

/**
 * Statics
 */
PostSchema.statics = {
  // load: function(id, cb) {
  //   this.findOne({
  //     _id: id
  //   }).populate('user', 'name username').exec(cb);
  // }
};

mongoose.model('Post', PostSchema);