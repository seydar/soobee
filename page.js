function on_new_url(event) {
  if (urlInput.value !== "") {
    urlBox.src = urlInput.value;
  }

  event.preventDefault();
};

function updateCurrentUrl(url) {
  document.getElementById("url_box").src = url;
}

addLoadEvent(function() {
  // Map the HTML elements to variables, and set up listeners for form
  // submission.
  urlForm = document.getElementById("url_form");
  urlInput = document.getElementById("url_input");
  urlSend = document.getElementById("url_send");
  urlBox = document.getElementById("url_box");
  urlForm.onsubmit = on_new_url;

  urlInput.disabled = false;
  urlSend.disabled = false;
});

