$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip('toggleEnabled');

  console.log('hi');
});

$('[data-toggle="tooltip"]').tooltip('toggleEnabled');
console.log('hi');


// swiper init
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 15,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    576: {
      slidesPerView: 1.3
    },
    992: {
      slidesPerView: 2.2
    },
    1200: {
      slidesPerView: 3
    }
  }
});
