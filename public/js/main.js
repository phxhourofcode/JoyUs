Joyus.Router = Backbone.Router.extend({
  initialize: function() {
    console.log('INIT');
  },

  routes: {
    'posts': 'posts'
  },

  posts: function() {
    var posts = new Joyus.Collections.Posts;

    new Joyus.Views.PostsNewView();
    new Joyus.Views.PostsListView({ collection: posts });
  }
});


$(function() {
  new Joyus.Router();
  Backbone.history.start({ pushState: true });
});