var Furnishings = Backbone.Collection.extend({
  model: Furniture,

  url: '/item/search'
});