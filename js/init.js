$(document).ready(function(){

	(function($) {
    $.fn.goTo = function() {
        $('html, body').animate({
            scrollTop: $(this).offset().top + 'px'
        }, 'fast');
        return this; // for chaining...
    }
	})(jQuery);

	$(".contact-me").on("click", function(e){
		$('.page-footer').goTo();
	});

	$(".about-me").on("click", function(e){
		$('.pic').goTo();
	});

	$('.button-collapse').sideNav({
	      menuWidth: 250, // Default is 240
	      edge: 'right', // Choose the horizontal origin
	      closeOnClick: true // Closes side-nav on <a> clicks
	    }
  	);
    $('.parallax').parallax();

    var options=[
    	{selector: '#test', offset: 400, callback: Materialize.showStaggeredList("#test") }
    ];

    // Materialize.scrollFire(options);
});