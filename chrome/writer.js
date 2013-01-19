include("jquery-1.9.0.min.js");

alert('hello');

$(document).mouseup(function(event) {
  var clickedElement = event.target;
  alert(clickedElement);
});

