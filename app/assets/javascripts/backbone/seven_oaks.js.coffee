#= require_self
#= require_tree ./templates
#= require_tree ./models
#= require_tree ./views
#= require_tree ./routers

window.SevenOaks =
  Models: {}
  Collections: {}
  Routers: {}
  Views: {}

$(document).ready ->
  furniture = new AppView()