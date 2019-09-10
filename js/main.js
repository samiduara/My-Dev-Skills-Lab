$('#addSkill').on('click', function(evt) {
  $('ul').append($('<li><button class="removeSkill">X</button>' + $('#newSkill').val() + '</li>'
  ))
});

$('ul').on('click', 'button', function() {
  $(this).closest('li').fadeOut(250, function(){
    $(this).remove();
  });
});