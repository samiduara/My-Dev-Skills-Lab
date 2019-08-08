$('#addSkill').on('click', function(evt) {
    $('ul').append($('<li><button class="removeSkill">X</button>' + $('#newSkill').val() + '</li>'
    ))
   });

   $('#addHome').on('click', function(evt) {
    console.log(evt);
  });