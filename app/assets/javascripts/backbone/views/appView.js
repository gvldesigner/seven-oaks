// AppView is the main level view


AppView = Backbone.View.extend({

  

  
  initialize: function(){

    browsingFunction = this.browsing;

    // The magnify button is available to click and take you to the browsing area
    $('.magnify').click(browsingFunction);

    


    myFurniture = new Furnishings();
    myFurniture.add([
      {name: 'chair'}/*,
      {name: 'dresser'}*/
    ])

    mainFurnitureView = new FurnitureMainView()

    /*Referencing to underscore templates within this app*/

    appViewTemplate = JST['backbone/templates/appView_Template']

    mainViewTemplate = JST['backbone/templates/main_viewTemplate']

    listViewTemplate = JST['backbone/templates/list_viewTemplate']

    bigItemViewTemplate = JST['backbone/templates/big_itemViewTemplate']

    browseViewTemplate = JST['backbone/templates/browse_viewTemplate']

    smallItemViewTemplate = JST['backbone/templates/small_itemViewTemplate']


    this.render()

    // hiding the browse area until clicked upon
    $('.browse-area').hide()

  },


  render: function(){
    // on rendering the page the main photo div is shown, the view will always remember (this.el)
    $('.main-photo-content').html(this.el);
    $('.main-photo').show();

    mainFurnitureView.render();

  },


  browsing: function(){

    // when magnify is clicked the browse area will show,
    // BrowseView is instantiated with 'new'

    $('.browse-area').show()

    new BrowseView()

  }


});

