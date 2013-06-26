class ItemController < ApplicationController
  require 'rubygems'
  require 'etsy'

  def index
  end

  def search
    # search code goeshere
    response = Etsy::Request.get('/listings/active/', 
      :includes => ['Images'],
      :tags => params[:tags]
    )

    result = JSON.parse(response.body)['results']

    if result.inspect != '[]'
      render :json => result
    else
      raise ActionController::RoutingError.new('No Results Found')
    end
  end

end
