const $companyName = $('#companyName');
const $name = $('#name');
const $email = $('#email');
const $phone = $('#phone');
const $password = $('#password');
const $passwordConfirm = $('#passwordConfirm');
const $button = $('button');
const $inputs = $('input');

//Hide hints
$("form span").hide();

// Only allow numbers and other desired values in $phone input
$phone.keydown((e) => {
  let validArray= [48, 49, 50, 51, 50, 51, 52, 53, 54, 55, 56, 57, 0, 8, 9, 16, 37, 39, 32];
  if ($.inArray(e.which, validArray) !== -1) {
    return e.which;
  } else e.preventDefault();
});

// if ($companyName.val().length >= 1) {
function companyNameValidate() {
  if ($companyName.is(":valid")) {
    $companyName.next().hide();
    return true;
  } else {
    $companyName.next().show();
  }
}

// if ($name.val().length >= 1) {
function nameValidate() {
  if ($name.is(":valid")) {
    $name.next().hide();
    return true;
  } else {
    $name.next().show();
  }
}

function emailValidate() {
  if ($email.is(":valid")) {
    $email.next().hide();
    return true;
  } else {
    $email.next().show();
  }
}

function phoneValidate() {
  // Remove all non digit values
  const phoneDigits = $phone.val().replace(/\D/g,'');

  // Not a perfect validation condition, but matches most UK numbers
  if (phoneDigits.length === 10 || phoneDigits.length === 11) {
    $phone.next().hide();
    return true;
  } else {
    $phone.next().show();
  }
}

function passwordValidate() {
  if ($password.is(":valid")) {
    $password.next().hide();
    return true;
  } else {
    $password.next().show();
  }
}

function passwordConfirmValidate() {
  if ($password.val() === $passwordConfirm.val()) {
    $passwordConfirm.next().hide();
    return true;
  } else {
    $passwordConfirm.next().show();
  }
}

function canSubmit() {
  companyNameValidate();
  nameValidate();
  phoneValidate();
  emailValidate();
  passwordValidate();
  passwordConfirmValidate();
  return (companyNameValidate() && nameValidate() && phoneValidate() && emailValidate() && passwordValidate() && passwordConfirmValidate());
}

// function nameEvent(){
//     //Find out if name is valid
//     if(isNameValidate()) {
//       //Hide hint if valid
//       $name.next().hide();
//     } else {
//       //else show hint
//       $name.next().show();
//     }
// }
//
// function passwordEvent(){
//     //Find out if password is valid
//     if(isFreeTextValidate()) {
//       //Hide hint if valid
//       $password.next().hide();
//     } else {
//       //else show hint
//       $password.next().show();
//     }
// }

// function confirmPasswordEvent() {
//   //Find out if password and confirmation match
//   if(arePasswordsMatching()) {
//     //Hide hint if match
//     $confirmPassword.next().hide();
//   } else {
//     //else show hint
//     $confirmPassword.next().show();
//   }
// }


// When event happens on any input
// $("input").keyup(stupid);
//
// function stupid() {
//   let functionName = `${this.id}Validate`;
//   console.log(functionName);
//   window[functionName]();
// }

$button.on('click', function() {
  if (canSubmit()){
    $button.replaceWith('<h3>Successfully submitted. Thank you!</h3>');
  }

  $inputs.keyup(assistValidate);

  function assistValidate() {
    let functionName = `${this.id}Validate`;
    window[functionName]();
  }
  // else {
  //   alert("NAH BRAH");
  // }
})
