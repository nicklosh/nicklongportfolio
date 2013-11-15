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
		$("#aboutme").height(winHeight);
	};

// main nav 
	$("#navList > a").on('click', function(event){
		event.preventDefault();
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

// init active image
$(".image.active").css({opacity:1, marginLeft:'-=200'});

	// list all switchers
	var swtichContainers = $('.imageSwitcher');

	// for each switcher object list all images
	for (var i = swtichContainers.length - 1; i >= 0; i--) {
		swtichContainers[i].images = $(swtichContainers[i]).find(".image");
		swtichContainers[i].displays = $(swtichContainers[i]).find(".switchDisplay i");
		swtichContainers[i].next = $(swtichContainers[i]).find(".next");
		swtichContainers[i].prev = $(swtichContainers[i]).find(".prev");
	};


	$(swtichContainers[0].next).on('click', function(){
		if($(swtichContainers[0].images[0]).hasClass("active")){
				$(swtichContainers[0].images[0]).animate({opacity:0, marginLeft:'-=200'}, 150, function(){
					$(this).removeClass('active');
					$(swtichContainers[0].images[1]).addClass('active').animate({opacity:1, marginLeft:'-=200'},150);		
				});
				$(swtichContainers[0].displays[0]).removeClass('fa-circle').addClass('fa-circle-o');
				$(swtichContainers[0].displays[1]).removeClass('fa-circle-o').addClass('fa-circle');
			}
		else if($(swtichContainers[0].images[1]).hasClass("active")){
			$(swtichContainers[0].images[1]).animate({opacity:0, marginLeft:'-=200'}, 150, function(){
				$(this).removeClass('active');
				$(swtichContainers[0].images[2]).addClass('active').animate({opacity:1, marginLeft:'-=200'},150);		
			});
			$(swtichContainers[0].displays[1]).removeClass('fa-circle').addClass('fa-circle-o');
			$(swtichContainers[0].displays[2]).removeClass('fa-circle-o').addClass('fa-circle');
		}

	});

	$(swtichContainers[0].prev).on('click', function(){
		if($(swtichContainers[0].images[1]).hasClass("active")){
			$(swtichContainers[0].images[1]).animate({opacity:0, marginLeft:'+=200'}, 150, function(){
				$(this).removeClass('active');
				$(swtichContainers[0].images[0]).addClass('active').animate({opacity:1, marginLeft:'+=200'},150);		
			});
			$(swtichContainers[0].displays[0]).removeClass('fa-circle-o').addClass('fa-circle');
			$(swtichContainers[0].displays[1]).removeClass('fa-circle').addClass('fa-circle-o');
		}
		else if($(swtichContainers[0].images[2]).hasClass("active")){
			$(swtichContainers[0].images[2]).animate({opacity:0, marginLeft:'+=200'}, 150, function(){
				$(this).removeClass('active');
				$(swtichContainers[0].images[1]).addClass('active').animate({opacity:1, marginLeft:'+=200'},150);		
			});
			$(swtichContainers[0].displays[1]).removeClass('fa-circle-o').addClass('fa-circle');
			$(swtichContainers[0].displays[2]).removeClass('fa-circle').addClass('fa-circle-o');
		}
	});


});