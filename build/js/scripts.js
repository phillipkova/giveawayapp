$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip('toggleEnabled')

  console.log('hi');
});
$('[data-toggle="tooltip"]').tooltip('toggleEnabled')

console.log('hi2');

// swiper init
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 15,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    576: {
      slidesPerView: 1
    },
    992: {
      slidesPerView: 2
    },
    1200: {
      slidesPerView: 3
    }
  }
});
