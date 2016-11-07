$(document).ready(function() {
   
    
    	// анимация сэндвича
	$("#sandwich").click(function () {
		/*$("#sandwich").toggleClass("active");*/
		$(".accordion").slideToggle(200);
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
	

	
});