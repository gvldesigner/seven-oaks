SevenOaks::Application.routes.draw do
  root :to => 'item#index'

  get 'item/search'

end
