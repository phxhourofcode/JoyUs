Joyus.Views.PostsNewView = Backbone.View.extend({
  el: '#content',

  template: JST['public/templates/posts/new'],

  events: {
    'submit .post-new-form': 'onSubmit'
  },

  initialize: function() {
    console.log('NEW POST VIEW', this.$el);
    this.model = new Joyus.Models.Post();
    this.render();
  },

  onSubmit: function(event) {
    event.preventDefault();

    $contentField = $('.post-new-form-content-field');

    this.model.set({
      content: $contentField.val()
    });

    this.model.save();
  },

  render: function() {
    $('#content').append(this.template());
  }
});