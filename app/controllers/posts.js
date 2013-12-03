/**
 * Module dependencies.
 */

var _ = require('lodash');
var mongoose = require('mongoose');
var Post = mongoose.model('Post');




/**
 * Create a post
 */
exports.create = function(req, res) {
    var post = new Post(req.body);
    // post.user = req.user;

    post.save(function(err) {
        if (err) {
            console.log(err);
            return res.status(401).send(err);
        } else {
            res.jsonp(post);
        }
    });
};

/**
 * Update a post
 */
exports.update = function(req, res) {
    Post.findById(req.params.postId, function(err, post) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            post = _.extend(post, req.body);

            post.save(function(err, post) {
                if (err) {
                    res.status(500);
                } else {
                    res.jsonp(post);
                }
            });
        }
    });
};

/**
 * Delete an post
 */
exports.destroy = function(req, res) {
    var post = req.post;

    post.remove(function(err) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(post);
        }
    });
};

/**
 * Show an post
 */
exports.show = function(req, res) {
    Post.findById(req.params.postId).exec(function(err, post) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(post);
        }
    });
};

/**
 * List of Posts
 */
exports.all = function(req, res) {
    // Post.find().sort('-created').populate('user', 'name username').exec(function(err, posts) {
    Post.find().sort('-created').exec(function(err, posts) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(posts);
        }
    });
};