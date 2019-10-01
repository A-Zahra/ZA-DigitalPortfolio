var slideIndex;

window.onload = function(){
console.log(window.screen.width);
if(window.screen.width>1399){
  if(localStorage.getItem('previous') ==='logosPage' ||
localStorage.getItem('previous') ==='drawingsPage' ||
localStorage.getItem('previous') ==='animationsPage'){
    if(localStorage.getItem('next') ==='aboutPage'){
      console.log("about");
      slideIndex = 2;

    }
    else if(localStorage.getItem('next') ==='portfolioPage'){
      console.log("about");
      slideIndex = 3;

    }
    else if(localStorage.getItem('next') ==='contactPage'){
      console.log("about");
      slideIndex = 4;

    }
    else{
        slideIndex = 1;
    }
  //  console.log("logos");
  }
  else{
    console.log('previous is not logos');
  slideIndex = 1;
}
localStorage.setItem('previous','');
localStorage.setItem('next','');
  showSlides(slideIndex);
}
else{
   console.log("smaller");
  // slideIndex=1;
  // showSlides(slideIndex);

}
}




// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

  // About me image fade in
  $("#Zahra-pic").hide();
  $("#Zahra-pic").fadeIn(2000);

  // Contact me information section slide down
  $(".C-column").hide();
  $(".C-column").slideDown(2000);
  /*$("#Zahra-text").hide();
  $("#Zahra-pic").fadeOut(3000);*/

}
