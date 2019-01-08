$("document").ready(function() {	
	var bow = $("#bowImage");
// Creates an array of images to cycle through 
	var bowBackgrounds = new Array(
		"bow-intro-02.jpg",		
		"bow-intro-10.jpg",
		"bow-intro-02.jpg",
		"bow-intro-04.jpg",
		"bow-intro-08.jpg",
		"bow-intro-13.jpg",
		"bow-intro-01.jpg",	
		"bow-intro-03.jpg",	
		"bow-intro-12.jpg",
		"bow-intro-09.jpg"												
		);
// Cycles through array
		var i = 0;
		bow.css("backgroundImage",
			"url(bow/" + bowBackgrounds[i] + ")");
		setInterval (function() {
			i++;
			if (i == bowBackgrounds.length) {
			i = 0;
		}
// Adds timed fade in and out effects to background image transitions
		bow.fadeOut(4000, function() {
			$(this).css("background-image", "url(bow/" + bowBackgrounds[i] + ")");
			$(this).fadeIn(4000);
		});
	}, 10000, "swing");

// Magnific Popup Gallery
/*	$('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	}); */

	 $("#prompt").click(function() {
	 	$("#main-paragraph").animate({left: "500"}, 1000, "swing");
	 });

	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			/*titleSrc: function(item) {
				return item.el.attr('title') + '<small>Alex Ogden and Gili Estlin Hirsch</small>';
			}*/
		}
	});
});

