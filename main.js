'use strict';
// Burger dropdown function

function myFunction() {
  const x = document.getElementById("navigation");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
// Burger dropdown function

// Modal window code begins
$(document).ready(function () {
  $('#login-nav').on('click', function (e) {
    e.preventDefault();
    $('.app-window').slideDown(400);
    $('.app-modal').fadeIn(200);
    $('html').css('overflow', 'hidden');
    if ($(window).width() > 1024) {
      $('html').css('margin-right', '17px')
      $('.app-modal').css('left', '0');
      $('.app-modal').css('width', '100%');
    }
  });

  $(document).mouseup(function (e) {
    let container = $(".app-window");
    if (container.has(e.target).length === 0) {
      container.hide("slow");
      $('.app-modal').fadeOut(200);
      $('html').css('overflow', 'auto')
      $('html').css('margin-right', '0px')
    }
  });
})
// Modal window code begins

// Slider code begins
var slideNow = 1;
var slideCount = $('#app-slider-slidewrapper').children().length;
var slideInterval = 3000;
var navBtnId = 0;
var translateWidth = 0;

$(document).ready(function () {
  var switchInterval = setInterval(nextSlide, slideInterval);

  $('#viewport').hover(function () {
    clearInterval(switchInterval);
  }, function () {
    switchInterval = setInterval(nextSlide, slideInterval);
  });

  $('#next-btn').click(function () {
    nextSlide();
  });

  $('#prev-btn').click(function () {
    prevSlide();
  });

  $('.slide-nav-btn').click(function () {
    navBtnId = $(this).index();

    if (navBtnId + 1 != slideNow) {
      translateWidth = -$('#viewport').width() * (navBtnId);
      $('#app-slider-slidewrapper').css({
        'transform': 'translate(' + translateWidth + 'px, 0)',
        '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
        '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
      });
      slideNow = navBtnId + 1;
    }
  });
});


function nextSlide() {
  if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
    $('#app-slider-slidewrapper').css('transform', 'translate(0, 0)');
    slideNow = 1;
  } else {
    translateWidth = -$('#viewport').width() * (slideNow);
    $('#app-slider-slidewrapper').css({
      'transform': 'translate(' + translateWidth + 'px, 0)',
      '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
      '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
    });
    slideNow++;
  }
}

function prevSlide() {
  if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
    translateWidth = -$('#viewport').width() * (slideCount - 1);
    $('#app-slider-slidewrapper').css({
      'transform': 'translate(' + translateWidth + 'px, 0)',
      '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
      '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
    });
    slideNow = slideCount;
  } else {
    translateWidth = -$('#viewport').width() * (slideNow - 2);
    $('#app-slider-slidewrapper').css({
      'transform': 'translate(' + translateWidth + 'px, 0)',
      '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
      '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
    });
    slideNow--;
  }
}
// Slider code ends