# encoding: utf-8
require 'sinatra'
require 'open-uri'

get '/*' do
  proxy = 'http://bigbad.evils.in:4567'
  url   = request.env['REQUEST_URI'][28..-1]

  url =~ /(http:\/\/(.+)\..{3})/
  host = $1
  txt = open(url).read

  p url

  txt.gsub! /<a ([^>]*)href=['"](?:http:)?\/\/(.+)['"][^>]*/, '<a \1href="' + proxy + '/http://\2"'
  txt.gsub! /<a ([^>]*)href=['"](www\..+)['"][^>]*/, '<a \1href="' + proxy + '/http://\2"'
  txt.gsub! /<a ([^>]*)href=['"](?!http:\/\/)([^'"]+)['"][^>]*/, '<a \1href="' + proxy + '/' + host + '\2"'

  txt
end

