$(document).mouseup(function(event) {
  var clickedElement = event.target;
  $(clickedElement).toggle(
    function() { $(clickedElement).css({"border": "2px solid red"}); },
    function() { $(clickedElement).css({"border": ""}); }
  );
});

