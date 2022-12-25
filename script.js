// scroll top button ========================================================
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// close-menu ========================================================
function openNav() {
 document.getElementById("mySidepanel").style.width = "320px";
}
function closeNav() {
 document.getElementById("mySidepanel").style.width = "0";
}


// slider ========================================================
$(function() {
  var inWrap = $('.inner-wrapper'),
  $slide = $('.slide');
  function slideNext() {
    inWrap.animate({left: '-200%'}, 200, function() {
      inWrap.css('left', '-100%');
      $('.slide').last().after($('.slide').first());
    });
  }
   //Enabling auto scroll
   sliderInterval = setInterval(slideNext, 4000);
  $('.prev').on('click', function() {
    inWrap.animate({left: '0%'}, 200, function() {
      inWrap.css('left', '-100%');
      $('.slide').first().before($('.slide').last());
    });
  });
  $('.next').on('click', function() {
    clearInterval(sliderInterval);
    slideNext();
  });
});