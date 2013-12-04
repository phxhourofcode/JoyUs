Joyus.Models.Post = Backbone.Model.extend({
  url: '/api/posts',

  idAttribute: '_id',

  defaults: {
    content: ''
  }
});