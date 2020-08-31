"use strict";

/********************************************************************

********************************************************************/
let slides = ["slide1Holder", "slide2Holder", "slide3"];

$(document).ready(setup);
// Sets up everything

function setup() {
  // setInterval(slideShow, 1000);
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



// function slideShow() {
//
//   $(".slideshow-img").on('click', function() {
//     let slideClass = $(this).attr("class").split(' ')[1];
//     console.log(slideClass);
//     let slide1 = $(".slide1Holder");
//     let slide2 = $(".slide2Holder");
//     let frontSlide = $(".front-img");
//
//     if (slideClass === slides[0]) {
//       console.log(slideClass);
//
//       $(this).appendTo('.slideshowOld').removeClass("slideshow-img slide1Holder").addClass("front-img slide3Holder");
//       // $( this ).animate({
//       //
//       // }, "slow" );
//       slide2.removeClass("slideshow-img slide2Holder").addClass("slideshow-img slide1Holder");
//
//       frontSlide.appendTo('.back-images').removeClass("front-img slide3Holder").addClass("slideshow-img slide2Holder").insertAfter(".slide1Holder");
//     } else if (slideClass === slides[1]) {
//       console.log(slideClass);
//       $(this).appendTo('.slideshowOld').removeClass("slideshow-img slide2Holder").addClass("front-img slide3Holder");
//
//       slide1.removeClass("slideshow-img slide1Holder").addClass("slideshow-img slide2Holder");
//
//       frontSlide.appendTo('.back-images').removeClass("front-img slide3Holder").addClass("slideshow-img slide1Holder").insertBefore(".slide2Holder");
//     }
//   });
// }
