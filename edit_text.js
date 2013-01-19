var mode = 'none';
function setMode(val) {
  mode = val;
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
  if (window.frames['url'].getSelection) {
    t = window.frames['url'].getSelection();
  } else if (window.frames['url'].document.getSelection) {
    t = window.frames['url'].document.getSelection();
  } else if (window.frames['url'].document.selection) {
    t = window.frames['url'].document.selection.createRange().text;
  }
  return t;
};

function selectorMouseup(event) {
  var st = getSelectedText();
  var span = window.frames['url'].document.createElement("span");
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
    alert('YAAAAAAY');
    markBorders(event);
  } else if (mode == "highlightText") {
    selectorMouseup(event);
  }
});

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

