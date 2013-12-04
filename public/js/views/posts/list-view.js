Joyus.Views.PostsListView = Backbone.View.extend({

  initialize: function() {
    this.collection.fetch({ reset: true });
    this.collection.on('reset', this.render, this);
  },

  render: function() {

    console.log(this.collection);
  }
});