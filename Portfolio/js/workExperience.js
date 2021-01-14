"use strict";

$(document).ready(setup);
// Sets up everything

function setup() {

  $('.videoButton').on("click", videoPopUp);
  $('.exit').on("click", closeWindow);

}

function videoPopUp() {
  console.log("hellooo");
  $('.popUps').css({
    "display": "block"
  });

  $('.videoPopUp').css({
    "display": "flex"
  });
}

function closeWindow() {

  $('.popUps').fadeOut(1000);

  $('.videoPopUp').css({
    "display": "none"
  });

}


function dataError(request, textStatus, error) {
  // Displays the error on console
  console.error(error);
}