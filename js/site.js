$(document).ready(function(){
// Init	
	fitScreen();

// on window resize	
	$(window).resize(function(){
		fitScreen();
	});

// screen size function
	function fitScreen(){
	// Get window height	
		var winHeight = $(window).height();
	// if screen height < window height
		// var screenHeights = $('.screen');
		// for(i = 0, ii = screenHeights.length; i<ii; i++){
		// 	if($(screenHeights[i]).height()<winHeight){
		// 		$(screenHeights[i]).height(winHeight);
		// 	}
		// }

	// just about me .sceen for small screen 
		$("#aboutme").height(winHeight);
	};

// main nav 
	$("#navList > a").on('click', function(event){
		event.preventDefault();
		// alert("this");
		$("#navList ul").toggleClass("active");
	});

// nav scrolling
	$('a[href^="#"]').on('click',function(event) {
	    event.preventDefault();
	    var target = this.hash,
	    $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 1500, 'swing', function () {
	        window.location.hash = target;
	    });
	    // close navList
		$("#navList ul").removeClass("active");
	});

// image switcher
	
	// controls
	$(".controls a").on('click', function(event){
		event.preventDefault();
	})
});