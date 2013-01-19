var channel;
var userName;
var nameForm, nameInput, connectButton, chatForm, chatInput, sendButton, chatBox;
document.write("asdff");

function on_submit_name(event){
    //see if a name has been entered
    if (nameInput.value !== ""){
        //store the name for later
        userName = nameInput.value;
        //disable name entry and enable message entry
        nameInput.disabled = connectButton.disabled = true;
        messageInput.disabled = sendButton.disabled = false;
        messageInput.focus();
        //subscribe to the chat queue, receive past / future messages
        channel.subscribe([{"type": "event_queue", "name": "chat"}], 0);
        //send a message announcing user's arrival
        channel.eventqueue("chat", {"object": {"message": userName + " joined chat."}});
    }else{
        document.write("wtffffff");
    }
    // prevent the page from refreshing
    event.preventDefault();
    return false;
};

function on_send_message(event){
    //check if a message has been entered
    if(messageInput.value !== ""){
        //send the message to all users
        channel.event_queue(
            "chat",
            {"object": {"message": username + ": " + messageInput.value}});
        //reset the input box
        messageInput.value = "";
        messageInput.focus();
    }
    //prevent page from auto-refreshing
    event.preventDefault();
    return false;


};

function connect(){
    var client = {
        connect: function(){
            document.write("asdfffffffffffff");
            //enable name entry
            nameInput.disabled = connectButton.disabled = false;
            nameInput.focus();
        },

        event_queue: function(name, event){
            if ((name == "chat") && (event.object.message)){
                // display the incoming message in the chat box
                if(chatBox.value !== ""){
                    chatBox.value += "\n";
                }
                chatBox.value += event.object.message;
                chatBox.scrollTop = chatBox.scrollHeight;

            }
        }
    };
    return new IMO.Channel(client);
};

window.onload = function(){
    document.write("asdfffffffffff");
    // map HTML elements to variables, set up listeners for form submission
    nameForm = document.getElementById("name_form");
    nameInput = document.getElementById("name_input");
    connectButton = document.getElementById("connect_button");
    nameForm.onsubmit = on_submit_name;

    messageForm = document.getElementById("message_form");
    messageInput = document.getElementById("message_input");
    sendButton = document.getElementById("send_button");
    messageForm.onsubmit = on_send_message;

    chatBox = document.getElementById("chat_box");
    // connect to the api channel
    channel = connect();
};