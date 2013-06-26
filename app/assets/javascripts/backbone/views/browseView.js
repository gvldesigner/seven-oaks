// BrowseView allows you to search furniture items, selecting specifics

// Accessed through furnitureMainView


BrowseView = Backbone.View.extend({  

  // creating click events to be called as functions
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

    // Chosen is a jQuery plug-in that is used on the browse-area options
    $(".fancy").chosen();

  },

  submit: function(){
    // once the submit button is clicked the .main-photo div is removed
    /*$('.main-photo').html('')*/

    $('.middle-wrap').html('');

    console.log('hide the last result')


    $('.spinner').show();


    // get values of dropdowns
    var wood = this.$el.find('.wood').val()
    var color = this.$el.find('.color').val()
    var type = this.$el.find('.type').val()
    
    // fetch using the tags
    myFurniture.fetch({
      data: {
        tags: [
          wood,
          color,
          type
        ]
      },
      // reset the collection, btw.
      reset: true,
      success: function(){
        // instantiated ListView
        new ListView()
      },

      error: function() {
        console.log ('sentence')

            $('.middle-wrap').html('<h5>Your currently selection rendered no items, please try again!</h5>');
        }
    });

    this.close()
  },

  // close button hides browse-area and clears the divs contents
  close: function(){

    $('.browse-area').hide()
    $('.browse-area').html('')
  }


});