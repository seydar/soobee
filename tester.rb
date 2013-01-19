# encoding: utf-8
proxy = 'http://bigbad.evils.in:4567'
url   = 'http://en.wikipedia.org/wiki/Main_Page'

url =~ /(http:\/\/(.+)\..{3})/
host = $1

#txt = open('data.txt').read
txt = <<-END 
<div style="float: left; margin: 0.5em 0.9em 0.4em 0;"><a href="/wiki/File:U2_3D_logo.svg" class="image" title="U2 3D logo"><img alt="U2 3D logo" src="//upload.wikimedia.org/wikipedia/commons/thumb/d/df/U2_3D_logo.svg/100px-U2_3D_logo.svg.png" width="100" height="43" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/d/df/U2_3D_logo.svg/150px-U2_3D_logo.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/d/df/U2_3D_logo.svg/200px-U2_3D_logo.svg.png 2x" /></a></div>
<p><i><b><a href="/wiki/U2_3D" title="U2 3D">U2 3D</a></b></i> is a 2008 <a href="/wiki/3D_film" title="3D film">3D</a> <a href="/wiki/Concert_film" title="Concert film">concert film</a> featuring <a href="/wiki/Rock_music" title="Rock music">rock</a> band <a href="/wiki/U2" title="U2">U2</a> performing during the <a href="/wiki/Vertigo_Tour" title="Vertigo Tour">Vertigo Tour</a> in 2006. The first live-action <a href="/wiki/Digital_3D" title="Digital 3D">digital 3D</a> film, it contains performances of 14&#160;songs, including tracks from <i><a href="/wiki/How_to_Dismantle_an_Atomic_Bomb" title="How to Dismantle an Atomic Bomb">How to Dismantle an Atomic Bomb</a></i>, the album supported by the tour. The concert footage includes political and social statements made during the shows. The project was created to experiment with a new type of 3D film technology pioneered by producer Steve Schklair. After considering shooting <a href="/wiki/American_football" title="American football">American football</a> games in 3D, Schklair's company <a href="/wiki/3ality_Digital" title="3ality Digital" class="mw-redirect">3ality Digital</a> decided to create a concert film with U2. The band were hesitant to participate, but agreed to the project mainly as a technological experiment rather than a profit-making venture. Although set in Buenos Aires, <i>U2 3D</i> was shot at seven concerts across Latin America, and two in Australia. After a preview screening at the <a href="/wiki/2007_Cannes_Film_Festival" title="2007 Cannes Film Festival">2007 Cannes Film Festival</a>, <i>U2 3D</i> premiered at the <a href="/wiki/2008_Sundance_Film_Festival" title="2008 Sundance Film Festival">2008 Sundance Film Festival</a> and was released in late <span class="nowrap">January 2008</span>, exclusively in <a href="/wiki/IMAX_3D" title="IMAX 3D" class="mw-redirect">IMAX 3D</a> and digital 3D theaters. It peaked at number 19 at the United States box office, earned over $26&#160;million internationally (ranking as one of the highest-grossing concert films), and won several awards. (<a href="/wiki/U2_3D" title="U2 3D"><b>Full article...</b></a>)</p>
<p>Recently featured: "<a href="/wiki/Over_There_(Fringe)" title="Over There (Fringe)">Over There</a>"&#160;– <a href="/wiki/Lisbon_Appointment" title="Lisbon Appointment">Lisbon Appointment</a>&#160;– <a href="/wiki/Dudley_Clarke" title="Dudley Clarke">Dudley Clarke</a></p>
<div style="text-align: right;" class="noprint"><b><a href="/wiki/Wikipedia:Today%27s_featured_article/January_2013" title="Wikipedia:Today's featured article/January 2013">Archive</a></b> – <b><a href="https://lists.wikimedia.org/mailman/listinfo/daily-article-l" class="extiw" title="mail:daily-article-l">By email</a></b> – <b><a href="/wiki/Wikipedia:Featured_articles" title="Wikipedia:Featured articles">More featured articles...</a></b></div>
END

txt.gsub! /<a ([^>]*)href=['"](?:http:)?\/\/(.+)['"][^>]*/, '<a \1href="' + proxy + '/http://\2"'
txt.gsub! /<a ([^>]*)href=['"](www\..+)['"][^>]*/, '<a \1href="' + proxy + '/http://\2"'
txt.gsub! /<a ([^>]*)href=['"](?!http:\/\/)([^'"]+)['"][^>]*/, '<a \1href="' + proxy + '/' + host + '\2"'

puts txt


