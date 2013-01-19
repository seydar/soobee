# encoding: utf-8
require 'sinatra'
require 'open-uri'

get '/proxy/*' do
  headers 'Access-Control-Allow-Origin' => '*'

  proxy = 'http://localhost:4567/proxy/';
  url   = request.env['REQUEST_URI']['/proxy'.size+1..-1]

  url =~ /(http:\/\/(.+)\..{3})/
  host = $1
  txt = open(url).read

  p url

  txt.gsub! /<a ([^>]*)href=['"](?:http:)?\/\/(.+)['"][^>]*/, '<a \1href="' + proxy + '/http://\2"'
  txt.gsub! /<a ([^>]*)href=['"](www\..+)['"][^>]*/, '<a \1href="' + proxy + '/http://\2"'
  txt.gsub! /<a ([^>]*)href=['"](?!http:\/\/)([^'"]+)['"][^>]*/, '<a \1href="' + proxy + '/' + host + '\2"'

  txt
end

get '/' do
  send_file File.join('.', 'index.html')
end

get '/:file' do
  send_file File.join('.', params[:file])
end

