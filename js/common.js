$(document).ready(function() {
document.createElement('header');
document.createElement('nav');
document.createElement('section');
document.createElement('article');
document.createElement('aside');
document.createElement('footer');
document.createElement('figure');
document.createElement('figcaption');
document.createElement('main');
    
    
    	// анимация сэндвича
	$("#sandwich, .menu_item").click(function () {
		$("#sandwich").toggleClass("active");
		$("header nav").slideToggle(300);
	});
	
	// слайдер
	$('.main-slider').slick({
		infinite: true,
		dots: true,
		fade: true,
		arrows: false,
		pauseOnFocus: false,
		speed: 1000,
		autoplay: true,
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				fade: false
			  }
			}
		]
	});
	
	// тень от меню при прокрутке страницы больше чем 22px
	$(window).scroll(function () {
	  if ($(this).scrollTop() > 22) {
		// бла-бла-бла
			$('.main-menu').addClass('shadow');
	  } else {
		$('.main-menu').removeClass('shadow');
	  }
	});
	
	// анимация
	new WOW().init();
	
	
});