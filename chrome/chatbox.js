var $newdiv1 = $('<div id="object1" style="position:fixed; left:10px; top:40px; background-color:#EEEEEE; width:10%; height:40%">');
$('body').append($newdiv1);



/*

object1.innerHTML = "<table> \
<tr>HELLO<td>HEY \
</table>";

*/


    object1.innerHTML = ' 																\
    <table border="1" cellpadding="0" cellspacing="1">									\
      <tr>																				\
        <td class="column" id="chat">													\
          <form id="name_form">															\
             Namekey: "value", 															\
             <input type=text id="name_input" disabled>									\
             <input type="submit" id="connect_button" value="Connect" disabled>			\
          </form>																		\
          																				\
          <div id="chat_box">															\
          </div>																		\
          																				\
          <form id="message_form">														\
            <input type=text id="message_input" disabled>								\
            <input type="submit" id="send_button" value="Send" disabled>				\
          </form>																		\
        </td>																			\
        																				\
        																				\
      </tr>																				\
    </table><script src="chat.js></script>';

    

 