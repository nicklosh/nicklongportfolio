$(document).ready(function(){
// Init	
	fitScreen();
	peanutsInc();

// on window resize	
	$(window).resize(function(){
		fitScreen();
		peanutsInc();
	});

// screen size function
	function fitScreen(){
	// Get window height	
		var winHeight = $(window).height();
		$("#aboutme, #singlepage").height(winHeight);

		// get list of screens
		var screens = $(".screen");
		// for each
		for (var i = screens.length - 1; i >= 1; i--) {
			// reset screen heights 
			$(screens[i]).height("");
			// check if  winHeight > screenOh
			var screenOh = $(screens[i]).height();
			if ( screenOh < winHeight) {
				// then make screen height == winHeight

				if (winHeight < 900){
					$(screens[i]).height(winHeight);
				}				
				else {
					$(screens[i]).height(900);
					// style footer to make up difference
					var difference = winHeight - 900,
					footerH = $('footer').height(); 
					if (difference > footerH){
						$('footer').height(difference);
					}				
				}
			};
		};
	};

// include peanuts
	function peanutsInc() {
		var winWidth = $(window).width();
		if (winWidth >= 900){
			if ($("#peanutsComic iframe").length <= 0){
				$("#peanutsComic").html('<iframe src="/peanuts/" frameborder="0" scrolling="vertical" marginheight="0" marginwidth="0"></iframe>');
			}
		}
		else {
			$("#peanutsComic").html('<div class="imageSwitcher"><div class="image active" style="opacity:1;"><span id="peanutsImg"><span></span></span></div></div>');
		}
	};

// contact modal
	$("a[href='/contact.html']").on('click', function(event){
		event.preventDefault();
		if ($(window).width() <= 500) {
			$('body').load('/contact.html', function(){
				$('#contactForm').css({opacity:1});
				$('#name').focus();
			});
		}
		else{
			$('body').append('<div id="contactPage"></div>');
			$('#contactPage').load('/contact.html', function(){
				$('#contactPage').addClass('animated');
				$('#contactForm').animate({opacity: 1}, 300);
				$('#name').focus();
			});
		};
	});

	$('#cancel').on('click', function(event){
			event.preventDefault();
			$('#contactPage').remove();
	});

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
	    }, 700, 'swing', function () {
	        window.location.hash = target;
	    });
	    // close navList
		$("#navList ul").removeClass("active");
	});

// nav indicator onscreen
	function navOnScreen(panel, navItem, nextItem){
		$(panel).waypoint(function(down){
		    resetNavItem();
			$(navItem).addClass('onScreen');
		}, {offset: '40px'});
		$(nextItem).waypoint(function(up){
		    resetNavItem();
			$(navItem).addClass('onScreen');
		}, {offset: '50%'});
	};

	function resetNavItem(){
		$('nav li a').removeClass('onScreen');
	}

	var panel = $(".screen");
	for(var i = 0, ii = panel.length; i < ii; i++){
		var id = $(panel[i]).attr("id"), panelId = "a[href='#"+ id +"']";
		navOnScreen(panel[i], panelId , panel[i + 1]);
	};


// image switcher

	// set active image to display
	$(".image.active").css({opacity:1});


	// list all switchers
	var swtichContainers = $('.imageSwitcher');

	for (var i = swtichContainers.length - 1; i >= 0; i--) {
		swtichContainers[i].images = $(swtichContainers[i]).find(".image");
		swtichContainers[i].displays = $(swtichContainers[i]).find(".switchDisplay i");
		swtichContainers[i].next = $(swtichContainers[i]).find(".next");
		swtichContainers[i].prev = $(swtichContainers[i]).find(".prev");
		switcher(swtichContainers[i]);		

	};

	function switcher(switcher){


		$(switcher.next).on('click', function(){
			if($(switcher.images[0]).hasClass("active")){
				$(switcher.images[0]).animate({opacity:0}, 50, function(){
					$(this).removeClass('active');
					$(switcher.images[1]).addClass('active').animate({opacity:1},150);		
				});
				$(switcher.displays[0]).removeClass('fa-circle').addClass('fa-circle-o');
				$(switcher.displays[1]).removeClass('fa-circle-o').addClass('fa-circle');
			}

			else if($(switcher.images[1]).hasClass("active")){

				$(switcher.images[1]).animate({opacity:0}, 50, function(){
					$(this).removeClass('active');
					$(switcher.images[2]).addClass('active').animate({opacity:1},150);		
				});
				$(switcher.displays[1]).removeClass('fa-circle').addClass('fa-circle-o');
				$(switcher.displays[2]).removeClass('fa-circle-o').addClass('fa-circle');
			}

			else if($(switcher.images[2]).hasClass("active")){
				$(switcher.images[2]).animate({opacity:0}, 50, function(){
					$(this).removeClass('active');
					$(switcher.images[0]).addClass('active').animate({opacity:1},150);		
				});
				$(switcher.displays[2]).removeClass('fa-circle').addClass('fa-circle-o');
				$(switcher.displays[0]).removeClass('fa-circle-o').addClass('fa-circle');
			}
		});
	
		$(switcher.prev).on('click', function(){
			if($(switcher.images[1]).hasClass("active")){
				$(switcher.images[1]).animate({opacity:0}, 50, function(){
					$(this).removeClass('active');
					$(switcher.images[0]).addClass('active').animate({opacity:1},150);		
				});
				$(switcher.displays[0]).removeClass('fa-circle-o').addClass('fa-circle');
				$(switcher.displays[1]).removeClass('fa-circle').addClass('fa-circle-o');
			}
			else if($(switcher.images[2]).hasClass("active")){
				$(switcher.images[2]).animate({opacity:0}, 50, function(){
					$(this).removeClass('active');
					$(switcher.images[1]).addClass('active').animate({opacity:1},150);		
				});
				$(switcher.displays[1]).removeClass('fa-circle-o').addClass('fa-circle');
				$(switcher.displays[2]).removeClass('fa-circle').addClass('fa-circle-o');
			}
			else if($(switcher.images[0]).hasClass("active")){
				$(switcher.images[0]).animate({opacity:0}, 50, function(){
					$(this).removeClass('active');
					$(switcher.images[2]).addClass('active').animate({opacity:1},150);		
				});
				$(switcher.displays[2]).removeClass('fa-circle-o').addClass('fa-circle');
				$(switcher.displays[0]).removeClass('fa-circle').addClass('fa-circle-o');
			}
		});
	};

});