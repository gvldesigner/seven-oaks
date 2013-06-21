BigItemView = Backbone.View.extend({  


  initialize: function(){

    console.log('big item view initialize')

    this.render()

  },


  render: function(){

    this.$el.html(bigItemViewTemplate());

    $('.middle-wrap').html('');

    $('.middle-wrap').append(this.$el);


  }

  
});