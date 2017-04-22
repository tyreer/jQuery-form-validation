var $name = $("#name");

//Hide hints
$("form span").hide();

function isNameValid() {
  return $name.val().length >= 1;
}

function nameEvent(){
    //Find out if name is valid
    if(isNameValid()) {
      //Hide hint if valid
      $name.next().hide();
    } else {
      //else show hint
      $name.next().show();
    }
}

//When event happens on name input
$name.focus(nameEvent).keyup(nameEvent);

$('button').on('click', function() {
  console.log($name.val());
})
