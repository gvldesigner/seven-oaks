// Large photo and description
// selected from smallItemView


BigItemView = Backbone.View.extend({  

  /*events: {
    'click .thumbs': 'thumbs',
  },*/

  initialize: function(){


    this.render()

  },


  render: function(){

    /*bigItemViewTemplate is inserted into the the empty div .middle-wrap*/
    this.$el.html(bigItemViewTemplate(this.model));

    // removing contents of .middle-wrap
    $('.middle-wrap').html('');

    // preparing this empty div for template view
    $('.middle-wrap').append(this.$el);


  }

  /*thumbs: function(){

    $('.booth').html('')

    $('.booth')append(this.$el);


*/



  
});