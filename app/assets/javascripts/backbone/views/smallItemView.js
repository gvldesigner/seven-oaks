SmallItemView = Backbone.View.extend({  
  
  tagName: 'li',

  events: {
    'click img.list-item-image': 'bigItemView'
  },


  initialize: function(){

    this.render()

  },


  render: function(){

    renderedTemplate = smallItemViewTemplate(this.model)

    this.$el.html(renderedTemplate);

    $('.middle-wrap ul').append( this.$el);

    console.log('small item view render')


  },

  bigItemView: function(){

    console.log('bigItemView consolelog')
    new BigItemView()
    
  }


});