AppView = Backbone.View.extend({

  

  
  initialize: function(){

    browsingFunction = this.browsing;

    $('.magnify').click(browsingFunction);

    


    myFurniture = new Furnishings();
    myFurniture.add([
      {name: 'chair'}/*,
      {name: 'dresser'}*/
    ])

    myFurnitureView = new FurnitureMainView()



    appViewTemplate = JST['backbone/templates/appView_Template']

    mainViewTemplate = JST['backbone/templates/main_viewTemplate']

    listViewTemplate = JST['backbone/templates/list_viewTemplate']

    bigItemViewTemplate = JST['backbone/templates/big_itemViewTemplate']

    browseViewTemplate = JST['backbone/templates/browse_viewTemplate']

    smallItemViewTemplate = JST['backbone/templates/small_itemViewTemplate']


    this.render()

    console.log ('testing');

    $('.browse-area').hide()

  },


  render: function(){

    $('.main-photo').html(this.el);

    myFurnitureView.render();

  },


  browsing: function(){

    console.log('how are you');

    $('.browse-area').show()

    new BrowseView()

  }


});

