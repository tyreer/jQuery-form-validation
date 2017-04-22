const $name = $("#name");
const $password = $('#password');
const $passwordConfirm = $('#password-confirm');


//Hide hints
$("form span").hide();

function isFreeTextValid() {
  return $name.val().length >= 1;
}

function arePasswordsMatching() {
  return $password.val() === $passwordConfirm.val();
}

function canSubmit() {
  return isFreeTextValid() && arePasswordsMatching();
}

function nameEvent(){
    //Find out if name is valid
    if(isFreeTextValid()) {
      //Hide hint if valid
      $name.next().hide();
    } else {
      //else show hint
      $name.next().show();
    }
}

function passwordEvent(){
    //Find out if password is valid
    if(isFreeTextValid()) {
      //Hide hint if valid
      $password.next().hide();
    } else {
      //else show hint
      $password.next().show();
    }
}

function confirmPasswordEvent() {
  //Find out if password and confirmation match
  if(arePasswordsMatching()) {
    //Hide hint if match
    $confirmPassword.next().hide();
  } else {
    //else show hint
    $confirmPassword.next().show();
  }
}


//When event happens on name input
$name.focus(nameEvent).keyup(nameEvent);

$('button').on('click', function() {
  if (canSubmit()){
    alert("YAS");
  } else {
    alert("NAH BRAH");
  }
})
