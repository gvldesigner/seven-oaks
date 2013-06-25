// This is the Main Photo view

FurnitureMainView = Backbone.View.extend({

  // 
  className: 'main-photo',

  
  initialize: function() {

    this.render()

  },

  render: function() {

    /*Rendering JST = javascript template*/
    this.$el.html(JST['backbone/templates/main_viewTemplate']());

    // within this .main-photo empty div
    $('.main-photo').html(this.el);

  }


});