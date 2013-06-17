class ItemController < ApplicationController
  require 'rubygems'
  require 'etsy'

  def index
  end

  def search
    # search code goeshere
    response = Etsy::Request.get('/listings/active', {
      :tags => params[:tags]
    })
    render :json => response
  end

end
