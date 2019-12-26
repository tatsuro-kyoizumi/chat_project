$(document).ready(function(){
  var message = $('#chatbox');

  function init(){
    messages.scrollTop(messages[0].scrollHeight);
  }

  window.setTimeout(init, 50);
});