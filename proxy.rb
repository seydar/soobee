# encoding: utf-8
require 'sinatra'
require 'open-uri'

get '/*' do
  proxy = 'http://bigbad.evils.in:4567'
  url   = request.env['REQUEST_URI'][28..-1]
  p url

  txt = open(url).read

  txt.gsub! /(a .* href)=[\'\"]\/\/(.*)[\'\"]/, "a href=\"#{proxy}/http://" + '\2"'
  txt.gsub! /(a .* href)=[\'\"](http.*)[\'\"]/, "a href=\"#{proxy}" + '/\2"'
  txt.gsub! /(a .* href)=[\'"][^http](.*)[\'"]/, "a href=\"#{proxy}/#{url}" + '/\2"'
  txt.gsub! /(href|src)=[\'"][^http+](.*)[\'"]/, '\1="' + url + '/\2"'
  txt
end

