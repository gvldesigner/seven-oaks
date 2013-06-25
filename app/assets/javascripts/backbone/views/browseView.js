BrowseView = Backbone.View.extend({  

  events: {

    'click .submit-button': 'submit',
    'click .close': 'close',
  },


  initialize: function(){

    this.render()

  },


  render: function(){

    $('.browse-area').append(this.el);

    this.$el.html(browseViewTemplate() );
    $(".fancy").chosen();

  },

  submit: function(){

    console.log('hello')

    $('.main-photo').remove()

    // get values of dropdowns
    var vintage = this.$el.find('.vintage').val()
    var wood = this.$el.find('.wood').val()
    var color = this.$el.find('.color').val()
    var type = this.$el.find('.type').val()
    
    // fetch using the tags
    myFurniture.fetch({
      data: {
        tags: [
          vintage,
          wood,
          color,
          type
        ]
      },
      // reset the collection, btw.
      reset: true,
      success: function(){
        new ListView()
      }
    });
    this.close()
  },

  close: function(){

    $('.browse-area').hide()
    $('.browse-area').html('')
  }


});