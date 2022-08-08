/*
Theme Name: FoodPunada - Restaurant One Page  Landing Page Template.
Author: codezionsoftwares
Author URL: https://www.templatemonster.com/vendors/Codezion
Version: 1.0.0
*/

( function($) {
  'use strict';
$(function(e) {
/*-------------------------------------------------------------------------------
	  Smooth scroll to anchor
	-------------------------------------------------------------------------------*/
	var navbar=$('.js-navbar');
	var navbarAffixHeight=80
	$('.js-target-scroll').on('click', function(e) {
		var target = $(this.hash);
		if (target.length) {
			$('html,body').animate({
				scrollTop: (target.offset().top - navbarAffixHeight + 1)
			}, 1000);
			return false;
		}
	});
	$('body').scrollspy({
			offset:  navbarAffixHeight + 1
		});
	$('.navbar-nav a.js-target-scroll ').on('click',function(){
	  if($('#navigation').removeClass('in')) {
	  }
	  });	

/*------------------------------------------------------------------
	Contact-form-Slider
	-------------------------------------------------------------------*/
	
	$("#contactMail").submit(function(e) {
    e.preventDefault(); // avoid to execute the actual submit of the form.
    var form = $(this);
    var url  = form.attr('action');
    $.ajax({
           type: "POST",
           url: url,
           data: form.serialize(), // serializes the form's elements.
           success: function(data)
           {
			   //var data = $.parseJSON(data);
               if(data=='Success')
			   {
				   $("#msgBox").show();
				   $("#msgBox").html('<div class="alert alert-success" role="alert">Thank You.</div>');
			   }
			   else
			   {
		           $("#msgBox").show();
				   $("#msgBox").html('<div class="alert alert-danger" role="alert">'+data+'</div>');
			   }			   
           }
         });
    });
/*------------------------------------------------------------------
	Listing-Gallery-Slider
	-------------------------------------------------------------------*/
	$('#listing_img_slider .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
	dots:false,
	autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{items:1},
		400:{items:2},
		768:{items:3},
        992:{items:4}
    }
	})
/*------------------------------------------------------------------
	Category-Slider
	-------------------------------------------------------------------*/
	$('#intro .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
	autoplay:true,
	animateIn: 'fadeIn',
	animateOut: 'fadeOut', 
    autoplayTimeout:5000,
    responsive:{
    	200:{items:1},
    	576:{items:1},
		900:{items:1},
        1200:{items:1}
    }
	})
// blog slider
	$('.blog-slider').slick({
	    infinite: true,
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    arrows:false,
	    dots:false,
	    autoplay: true,
  		autoplaySpeed: 2000,
  		speed:500,
  		cssEase: 'linear',
  		responsive: [{
	      breakpoint: 992,
	      settings: {
	        arrows: false,
	        slidesToShow: 2
	      }
	    }, {
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        dots: false,
	        slidesToShow: 1
	      }
	    }, {
	      breakpoint: 576,
	      settings: {
	        arrows: false,
	        dots: false,
	        slidesToShow: 1
	      }
	    }]
	});

});
})(jQuery);