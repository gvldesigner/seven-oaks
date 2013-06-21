ListView = Backbone.View.extend({  

  tagName: 'ul',


  initialize: function(){

    $('.middle-wrap').append(this.el);

    this.$el.html( listViewTemplate() );

    this.render()

  },


  render: function(){

    myFurniture.each(function(furniture){
    new SmallItemView({
      model: furniture
    });
  })

  
  }

});