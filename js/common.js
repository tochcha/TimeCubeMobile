$(document).ready(function() {
   
    
    	// сэндвич меню
	$("#sandwich").click(function () {
		/*$("#sandwich").toggleClass("active");*/
		$(".accordion").slideToggle(200);
	});
	
	// слайдер
	$('.manufacturers-carousel').slick({
		infinite: true,
		dots: false,
		fade: false,
		arrows: true,
		pauseOnFocus: true,
		speed: 500,
		autoplaySpeed: 6000,
		autoplay: true
	});
	
	// кнопка вверх
	$(function () {
		$.fn.scrollToTop = function () {
			$(this).hide().removeAttr("href");
			if ($(window).scrollTop() != "0") {
				$(this).fadeIn("slow")
			}
			var scrollDiv = $(this);
			$(window).scroll(function () {
				if ($(window).scrollTop() == "0") {
					$(scrollDiv).fadeOut("slow")
				} else {
					$(scrollDiv).fadeIn("slow")
				}
			});
			$(this).click(function () {
				$("html, body").animate({
					scrollTop: 0
				}, "slow")
			})
		}
	});
	$(function () {
		$("#toTop").scrollToTop();
	});

	
});