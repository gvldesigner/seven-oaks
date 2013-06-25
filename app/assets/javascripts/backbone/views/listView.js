// Gives you a listing of items specified through the
// BrowseView


ListView = Backbone.View.extend({  

  // tag name within the middle-wrap
  tagName: 'ul',


  initialize: function(){

    // preparing empty div .middle-wrap to accept the listViewTemplate
    $('.middle-wrap').append(this.el);

    // inserted the listViewTemplate into empty div
    this.$el.html( listViewTemplate() );

    this.render()

  },


  render: function(){

    // loop through each furniture piece
    // and place chosen one into smallItemView
    myFurniture.each(function(furniture){
    new SmallItemView({
      model: furniture
    });
  })

  
  }

});