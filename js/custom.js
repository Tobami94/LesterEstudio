// ------------------------------------------------
// Table of Contents
// ------------------------------------------------
//
//  1. Loader & Loading Animation
//  2. Swiper Slider
//  3. Skillbars
//  4. Magnific Popup Video
//  5. KBW-Countdown
//  6. Vegas Kenburns
//  7. Mailchimp Notify Form
//  8. Contact Form
//
// ------------------------------------------------
// Table of Contents End
// ------------------------------------------------

$(window).on("load", function() {
   
  "use strict";

  // --------------------------------------------- //
  // Loader & Loading Animation Start
  // --------------------------------------------- //
  $(".loader__logo").addClass('scaleOut');

  setTimeout(function(){
    $(".loader").addClass('loaded');
    $("#main").addClass('active animate-in');
    $('#home-trigger').addClass('active-link');
  }, 300);
 
  setTimeout(function(){
    $("body").addClass('loaded');
  }, 950);
  // --------------------------------------------- //
  // Loader & Loading Animation End
  // --------------------------------------------- //

});

$(function() {

  "use strict";

  // --------------------------------------------- //
  // Swiper Slider Start
  // --------------------------------------------- //
 
  var swiper = new Swiper('.swiper', {
    // Optional parameters
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        translate: ["-20%", 0, -1],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
    parallax: true,
    speed: 1500,
    loop: true,
    autoplay: {
      delay: 8500,
      disableOnInteraction: false,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });
  // --------------------------------------------- //
  // Swiper Slider End
  // --------------------------------------------- //
  // --------------------------------------------- //
  // Vegas Kenburns Start
  // --------------------------------------------- //
  var bgndKenburns = $('#bgndKenburns');
  if(bgndKenburns.length){
    bgndKenburns.vegas({
      timer: false,
      delay: 8000,
      transition: 'fade2',
      transitionDuration: 2000,
      slides: [
        { src: "https://lesterestudio.com/wp-content/themes/lester-estudio/assets/images/img/slider-menu/slider-menu-1.webp" },
        { src: "https://lesterestudio.com/wp-content/themes/lester-estudio/assets/images/img/slider-menu/slider-menu-2.webp" },
        { src: "https://lesterestudio.com/wp-content/themes/lester-estudio/assets/images/img/slider-menu/slider-menu-3.webp" },
        { src: "https://lesterestudio.com/wp-content/themes/lester-estudio/assets/images/img/slider-menu/slider-menu-4.webp" },
        { src: "https://lesterestudio.com/wp-content/themes/lester-estudio/assets/images/img/slider-menu/slider-menu-5.webp" }
      ],
      animation: [ 'kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight' ]
    });
  }
  // --------------------------------------------- //
  // Vegas Kenburns End
  // --------------------------------------------- //
  // --------------------------------------------- //
  // Contact Form Start
  // --------------------------------------------- //
  $("#contact-form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
      $('.contact').find('.form').addClass('is-hidden');
      $('.contact').find('.reply-group').addClass('is-visible');
			setTimeout(function() {
				// Done Functions
        $('.contact').find('.reply-group').removeClass('is-visible');
        $('.contact').find('.form').delay(300).removeClass('is-hidden');
				th.trigger("reset");
			}, 5000);
		});
		return false;
	});
  // --------------------------------------------- //
  // Contact Form End
  // --------------------------------------------- //

});
  // --------------------------------------------- //
  // Collapse
  // --------------------------------------------- //
function toggleText() {
  const collapseElement = document.querySelector('#collapseWidthExample');
  const buttonText = document.querySelector('.btn-title-collapse');
  if (collapseElement.classList.contains('show')) {
    buttonText.innerHTML = 'Ver más <i class="fa-regular fa-square-plus"></i>';
  } else {
    buttonText.innerHTML = 'Cerrar <i class="fa-regular fa-square-minus"></i>';
  }
}
document.getElementById('collapseWidthExample').addEventListener('shown.bs.collapse', function () {
  document.querySelector('.btn-title-collapse').innerHTML = 'Cerrar <i class="fa-regular fa-square-minus"></i>';
});
document.getElementById('collapseWidthExample').addEventListener('hidden.bs.collapse', function () {
  document.querySelector('.btn-title-collapse').innerHTML = 'Ver más <i class="fa-regular fa-square-plus"></i>';
});