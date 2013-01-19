var mode = 'none';
function setMode(val) {
<<<<<<< HEAD
  this.mode = val;
};

function updateCurrentUrl(text) {
  url_frame = document.getElementById("url_box");
  url_frame.src = "/proxy/" + text;
=======
  mode = val;
>>>>>>> f65255cde26f2b716f14a399e0aaf3a28667641c
};

// mark a region with red
function markBorders(event) {
  var clickedElement = event.target;
  $(clickedElement).toggleClass('markedBorder');
};

// borrowed from http://mark.koli.ch/2009/09/05/get-selected-text-javascript.html
// i looked at the source
function getSelectedText() {
  var t = '';
<<<<<<< HEAD
  if (window.getSelection) {
    t = window.getSelection();
  } else if (document.getSelection) {
    t = document.getSelection();
  } else if (document.selection) {
    t = document.selection.createRange().text;
=======
  if (window.frames['url'].getSelection) {
    t = window.frames['url'].getSelection();
  } else if (window.frames['url'].document.getSelection) {
    t = window.frames['url'].document.getSelection();
  } else if (window.frames['url'].document.selection) {
    t = window.frames['url'].document.selection.createRange().text;
>>>>>>> f65255cde26f2b716f14a399e0aaf3a28667641c
  }
  return t;
};

function selectorMouseup(event) {
  var st = getSelectedText();
<<<<<<< HEAD
  var span = document.createElement("span");
=======
  var span = window.frames['url'].document.createElement("span");
>>>>>>> f65255cde26f2b716f14a399e0aaf3a28667641c
  span.style.background = '#FAF7AF'; // i wish it could be in the CSS but alas

  if (st != '') {
    //var clickedElement = event.target;
    //$(clickedElement).toggleClass('highlightedText');
    if (st.rangeCount) {
      var range = st.getRangeAt(0).cloneRange();
      range.surroundContents(span);
      st.removeAllRanges();
      st.addRange(range);
    }
  }
};

$(document).mouseup(function(event) {
  if (mode == "markBorders") {
<<<<<<< HEAD
=======
    alert('YAAAAAAY');
>>>>>>> f65255cde26f2b716f14a399e0aaf3a28667641c
    markBorders(event);
  } else if (mode == "highlightText") {
    selectorMouseup(event);
  }
});

<<<<<<< HEAD

$("overlay#mb").click(function(event) {
  setMode('markBorders');
  alert("hello");
});

$('input#ht').click(function(event) {
  setMode('highlightText');
});

$('input#nn').click(function(event) {
  setMode('none');
});
=======
function mouseUp(){

  chat_box = document.getElementById("chat_box");
  url_frame = document.getElementById("url_box");

  channel.event_queue(
     "htmlchat",
     {"object": {"message": $(url_frame).contents().html()}});
    alert($(url_frame).contents().html());
};

$(document).ready(function() {
  $("#mb").click(function(event) {
    setMode('markBorders');
  });
  
  $('#ht').click(function(event) {
    alert('ahoy');
    setMode('highlightText');
  });
  
  $('#nn').click(function(event) {
    setMode('none');
  });

  window.frames['url'].onmouseup = mouseUp;
});

>>>>>>> f65255cde26f2b716f14a399e0aaf3a28667641c
