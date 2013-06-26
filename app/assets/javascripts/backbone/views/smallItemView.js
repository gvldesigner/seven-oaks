// The SmallItemView is used for accessing the BigItemView
// It's called from the listItemView clicking on a single item

SmallItemView = Backbone.View.extend({  

  // targeting the li tag within the .middle-wrap ul
  tagName: 'li',

  // if a list item image is clicked the view will go to Big item view
  events: {
    'click img.list-item-image': 'bigItemView'
  },


  initialize: function(){

    this.render()

  },


  render: function(){
    // 
    renderedTemplate = smallItemViewTemplate(this.model)

    this.$el.html(renderedTemplate);

    $('.middle-wrap ul').append( this.$el);



  },

  bigItemView: function(){

    // Initiated bigItemView the model is 
    // what was clicked ie the single item
    new BigItemView({model: this.model})
    
  }


});