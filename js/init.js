$(document).ready(function(){
	$('.button-collapse').sideNav();
    $('.parallax').parallax();

    var options=[
    	{selector: '#test', offset: 400, callback: Materialize.showStaggeredList("#test") }
    ];

    // Materialize.scrollFire(options);
    // $("#contact-me").click(function(){
    // 	$('body').scrollTo('.page-footer',{duration:'slow', offsetTop : '50'});
    // };
});