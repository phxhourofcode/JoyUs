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
  title: {
    type: String,
    default: '',
    trim: true
  },
  content: {
    type: String,
    default: '',
    trim: true
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

/**
 * Validations
 */
PostSchema.path('title').validate(function(title) {
  return title.length;
}, 'Title cannot be blank');

/**
 * Statics
 */
PostSchema.statics = {
  load: function(id, cb) {
    this.findOne({
      _id: id
    }).populate('user', 'name username').exec(cb);
  }
};

mongoose.model('Post', PostSchema);