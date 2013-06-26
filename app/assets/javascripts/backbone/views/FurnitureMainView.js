// This is the Main Photo view

FurnitureMainView = Backbone.View.extend({

  events: {

    'click .submit-button': 'submit',
  },

  render: function() {

    /*Rendering JST = javascript template*/
    this.$el.html(JST['backbone/templates/main_viewTemplate']());

    // within this .main-photo empty div
    $('.main-photo').html(this.el);

    $('.browse-area-two').show();

    // Chosen is a jQuery plug-in that is used on the browse-area options
    $(".fancy").chosen();


  },

  submit: function(){


    // once the submit button is clicked the .main-photo div is removed
    $('.main-photo').remove()

    console.log('this is where the spinner should show')

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

            $('.middle-wrap').html('<h5>Your currently selection rendered no items, please try again!</h5>');
        }
    });
  }

  


});