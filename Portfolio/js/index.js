"use strict";

/********************************************************************

********************************************************************/
let slides = ["slide1Holder", "slide2Holder", "slide3"];

$(document).ready(setup);
// Sets up everything

function setup() {
  // Carousel embedded code 
  $("#carousel").Cloud9Carousel({
    buttonLeft: $("#buttons > .left"),
    buttonRight: $("#buttons > .right"),
    autoPlay: 1,
    bringToFront: true
  });

  // On scroll: Fade in school project briefs
  $(window).scroll(function() {
    $('.text').each(function(i) {
      var bottom_of_element = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if (bottom_of_window > bottom_of_element) {
        $(this).animate({
          'opacity': '1'
        }, 1000);
      }
    });
  });
}

