var $mode = 'highlightText';

// mark a region with red
function markBorders(event) {
  var clickedElement = event.target;
  $(clickedElement).toggleClass('markedBorder');
};

// borrowed from http://mark.koli.ch/2009/09/05/get-selected-text-javascript.html
// i looked at the source
function getSelectedText() {
  var t = '';
  if (window.getSelection) {
    t = window.getSelection();
  } else if (document.getSelection) {
    t = document.getSelection();
  } else if (document.selection) {
    t = document.selection.createRange().text;
  }
  return t;
};

function selectorMouseup(event) {
  var st = getSelectedText();
  var span = document.createElement("span");
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

var old = $(document.mouseup);
$(document).mouseup(function(event) {
  if (old) {
    old(event);
  }

  if ($mode == "markBorders") {
    markBorders(event);
  } else if ($mode == "highlightText") {
    selectorMouseup(event);
  }
});


var overlay = jQuery('<div id="overlay"></div>');
overlay.appendTo(document.body);
$(overlay).append('<input type="submit" value="Mark Borders" onClick="$mode = \"markBorders\">');
$(overlay).append('<input type="submit" value="Highlight Text" onClick="$mode = \"highlightText\">');
$(overlay).append('<input type="submit" value="Back to Browsing" onClick="$mode = \"none\">');

