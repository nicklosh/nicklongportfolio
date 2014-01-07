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

		// get list of screens
		var screens = $(".screen");
		// for each
		for (var i = screens.length - 1; i >= 0; i--) {
		// check if  winHeight > screenOh
		var screenOh = $(screens[i]).height();
			if ( screenOh < winHeight) {
				// then make screen height == winHeight
				$(screens[i]).height(winHeight);
			};
		};
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
		var panelId = "a[href='#"+ $(panel[i]).attr("id");"']";
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