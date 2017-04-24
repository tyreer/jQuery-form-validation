"use strict";

const $companyName = $('#companyName');
const $name = $('#name');
const $email = $('#email');
const $phone = $('#phone');
const $password = $('#password');
const $passwordConfirm = $('#passwordConfirm');
const $button = $('button');
const $inputs = $('input');
const $form = $('form');

// Prevent HTML5 validation bubbles
$inputs.on('invalid', event => event.preventDefault());

// Prevent form from actually submitting
$form.on('submit', event => event.preventDefault());

// Only allow numbers, parentheses, shift, tab, delete and arrow keys in phone input
$phone.keydown((e) => {
  let validArray= [48, 49, 50, 51, 50, 51, 52, 53, 54, 55, 56, 57, 0, 8, 9, 16, 37, 39, 32];
  if ($.inArray(event.which, validArray) !== -1) {
    return event.which;
  } else event.preventDefault();
});

// Use HTML5 valid state on required inputs to show or hide the span after each input
function companyNameValidate() {
  if ($companyName.is(":valid")) {
    $companyName.next().hide();
    return true;
  } else {
    $companyName.next().fadeIn(150);
  }
};

function nameValidate() {
  if ($name.is(":valid")) {
    $name.next().hide();
    return true;
  } else {
    $name.next().fadeIn(150);
  }
};

function emailValidate() {
  if ($email.is(":valid")) {
    $email.next().hide();
    return true;
  } else {
    $email.next().fadeIn(150);
  }
};

function phoneValidate() {
  // Remove all non digit values
  const phoneDigits = $phone.val().replace(/\D/g,'');

  // Not a perfect validation condition, but matches most UK numbers
  if (phoneDigits.length === 10 || phoneDigits.length === 11) {
    $phone.next().hide();
    return true;
  } else {
    $phone.next().fadeIn(150);
  }
};

function passwordValidate() {
  if ($password.is(":valid")) {
    $password.next().hide();
    return true;
  } else {
    $password.next().fadeIn(150);
  }
};

function passwordConfirmValidate() {
  if ($password.val() === $passwordConfirm.val()) {
    $passwordConfirm.next().hide();
    return true;
  } else {
    $passwordConfirm.next().fadeIn(150);
  }
};

// Add validation visibility if needed. Confirm all inputs valid.
function canSubmit() {
  companyNameValidate();
  nameValidate();
  phoneValidate();
  emailValidate();
  passwordValidate();
  passwordConfirmValidate();
  return (companyNameValidate() && nameValidate() && phoneValidate() && emailValidate() && passwordValidate() && passwordConfirmValidate());
}

// Respond to UI by calling validate function on relevant input on keyup
function assistValidate() {
  let functionName = `${this.id}Validate`;
  window[functionName]();
}

// Trigger validation check in UI
$button.on('click', function() {
  if (canSubmit()){
    $('button').replaceWith('<h3>Successfully submitted!</h3>');
  }

  $inputs.keyup(assistValidate);
})
