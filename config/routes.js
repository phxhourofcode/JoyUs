var path = require('path');

module.exports = function(app, passport, auth) {
  //  Post Routes
  var posts = require(path.join(PATHS.controllers, 'posts'));

  app.get('/api/posts', posts.all);
  app.post('/api/posts', posts.create);
  // app.post('/api/posts', auth.requiresLogin, posts.create);
  app.get('/api/posts/:postId', posts.show);
  app.put('/api/posts/:postId', posts.update);
  app.del('/api/posts/:postId', posts.destroy);
  // app.put('/api/posts/:postId', auth.requiresLogin, auth.post.hasAuthorization, posts.update);
  // app.del('/api/posts/:postId', auth.requiresLogin, auth.post.hasAuthorization, posts.destroy);

  //Home route
  var index = require(path.join(PATHS.controllers, 'index'));
  app.get('*', index.render);
};