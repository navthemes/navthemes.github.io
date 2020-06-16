jQuery(function($){
	"use strict";

	//Responsive menu
		if ($(window).width() > 414){
				if($('.fa-bars').length){
				$('.fa-bars').on('click', function(){
					$('.header_top .inner_header nav > ul').show();
					$(this).hide();
					$('.fa-times').show();
				});
				$('.fa-times').on('click',function(){
					$('.header_top .inner_header nav > ul').hide();
					$(this).hide();
					$('.fa-bars').show();
				});
			}
		}
		else{
			if($('.fa-bars').length){
				$('.fa-bars').on('click', function(){
					$('.mobile_navigation > ul').show();
					$(this).hide();
					$('.fa-times').show();
				});
				$('.fa-times').on('click',function(){
					$('.mobile_navigation > ul').hide();
					$(this).hide();
					$('.fa-bars').show();
				});
			}
			
		}

//header slider

if ($('.home_slider').length) {
	$('.home_slider').slick({
	vertical:true,
	arrows:false,
	dots:true
});
}
// twitter slider
if ($('.content_slider_twitter').length) {
	$('.content_slider_twitter').slick({
	vertical:true,
	appendArrows:$('.twitter_box .arrows'),
	  	prevArrow: "<div class=\"top\"><i class=\"fas fa-arrow-up\"></i></div>",
	  	nextArrow: "<div class=\"bot\"><i class=\"fas fa-arrow-down\"></i></div>",
});
}
	//Carusel Slider for Shop Items

	if ($('.shop_carusel').length) {	
		$('.shop_carusel').slick({
	  	infinite: true,
	  	slidesToShow: 3,
	  	slidesToScroll: 1,
	  	appendArrows:$('.shop_slider_navigation'),
	  	prevArrow: "<div class=\"left\"><i class=\"fas fa-arrow-left\"></i></div>",
	  	nextArrow: "<div class=\"right\"><i class=\"fas fa-arrow-right\"></i></div>",
		responsive: [
	    {
	      breakpoint: 414,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	      }
	    }
	    ]
	});
}

//testimonial slider


	if ($('.testimonial_carousel').length) {	
		$('.testimonial_carousel').slick({
	  	infinite: true,
	  	slidesToShow: 3,
	  	slidesToScroll: 1,
	  	appendArrows:$('.testimonial_slider_box'),
	  	prevArrow: "<div class=\"left_arrow\"><div class=\"left\"><div class=\"left\"><i class=\"fas fa-arrow-left\"></i></div></div>",
	  	nextArrow: "<div class=\"right_arrow\"><div class=\"right\"><div class=\"left\"><i class=\"fas fa-arrow-right\"></i></div></div>",
		responsive: [
	    {
	      breakpoint: 414,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	      }
	    }
	    ]
	});
	$('.testimonial_carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  		var tabs_container = $('.testimonial_tab_container');
  
  		tabs_container.find($('.tab-item')).hide();
  		tabs_container.find($('.tab-' + nextSlide)).show();
	});
}


if ($('.open_video').length) {	
	$('.open_video').magnificPopup({
		disableOn:700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});
	}

if ($('.test_gallery').length) {	
	$('.test_gallery').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
		
	});
	}
});