$(document).mouseup(function(event) {
  var clickedElement = event.target;
  $(clickedElement).toggleClass('togglingBorder');
});

