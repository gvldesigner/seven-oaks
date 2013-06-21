FurnitureMainView = Backbone.View.extend({

  className: 'main-photo',

  
  initialize: function() {

    this.render()

  },

  render: function() {

    /*JST = javascript template*/
    this.$el.html(JST['backbone/templates/main_viewTemplate']());

    $('.main-photo').html(this.el);

  }


});