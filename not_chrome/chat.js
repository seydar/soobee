// Kiitos imo:lle tasta ohjelmoista

var channel;
var userName;
var nameForm, nameInput, connectButton, chatForm, chatInput, sendButton, chatBox;
var big = true;


function addLoadEvent(func) {
        var oldonload = window.onload;
        if (typeof window.onload != 'function') {
          window.onload = func;
        } else {
          window.onload = function() {
            if (oldonload) {
              oldonload();
            }
            func();
          }
        }
      };

function on_submit_name(event) {
  // Check if any name has been entered.
  if (nameInput.value !== "") {
    // Store the user's name for later.
    userName = nameInput.value;
    // Disable name entry, and enable message entry.
    nameInput.disabled = connectButton.disabled = true;
    messageInput.disabled = sendButton.disabled = false;
    messageInput.focus();
    // Subscribe to the chat event queue, to receive all past and future
    // messages.
    channel.subscribe([{"type": "event_queue", "name": "chat"}], 0);
    // Send a message announcing the user's arrival to all users.
    channel.event_queue(
     "chat",
     {"object": {"message": userName + " joined the chat."}});
  }
  // Prevent the page from auto-refreshing.
  event.preventDefault();
  return false;
};

function on_send_message(event) {
  // Check if any message has been entered.
  if (messageInput.value !== "") {
    // Send the message to all users.
    var s = messageInput.value;
    if(s.substring(0,4)=="http"){
      s = "<a href='#' onClick='updateCurrentUrl(\"" + s +"\")'>" + s + " </a>";
    }
    channel.event_queue(
      "chat",
      {"object": {"message": userName + ": " + s}});

    // Reset the message input box.
    messageInput.value = "";
    messageInput.focus();
  }
  // Prevent the page from auto-refreshing.
  event.preventDefault();
  return false;
};

function connect() {
  var client = {
    connect: function() {
      // Enable name entry.
      nameInput.disabled = connectButton.disabled = false;
      nameInput.focus();
    },

    event_queue: function(name, event) {
      if ((name == "chat") && (event.object.message)) {
        // Display the incoming message in the chat box.
        if (chatBox.innerHTML !== "") {
          chatBox.innerHTML += "<br/>";
        }
        chatBox.innerHTML += event.object.message;
        chatBox.scrollTop = chatBox.scrollHeight;
      }
    }
  };

  //  document.write("BLAHHHHHHHHHH");
  return new IMO.Channel(client);
};

window.onload = function() {

  make_chat_box();
  // Map the HTML elements to variables, and set up listeners for form
  // submission.
  nameForm = document.getElementById("name_form");
  nameInput = document.getElementById("name_input");
  connectButton = document.getElementById("connect_button");
  nameForm.onsubmit = on_submit_name;

  nameInput.disabled = connectButton.disabled = false;

  messageForm = document.getElementById("message_form");
  messageInput = document.getElementById("message_input");
  sendButton = document.getElementById("send_button");
  messageForm.onsubmit = on_send_message;

  chatBox = document.getElementById("chat_box");

  // Connect to the API channel.
  channel = connect();
};


function make_chat_box(){  
  $('#closer').click(function() { 
    
    //document.getElementById('url_box').width = "100%";
    $('#chatbox').animate({'width': 'toggle'});
  if(!big){
    $('#url_box').animate({'width': '75%'});
  }else{
    $('#url_box').animate({'width': '100%'}, {'easing':'swing'});
  }
  big = !big;
    //document.getElementById('chatbox').width = "0px";
    //$('#url_box').width("30px");
  });
};

