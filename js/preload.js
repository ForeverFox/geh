$("document").ready(function() {
// Image preloading
  var bowImages = new Array(
    "../bow/bodyofwork-header-0.jpg",
    "../bow/bow-intro-01.jpg",
    "../bow/bow-intro-10.jpg",
    "../bow/bow-intro-11.jpg",
    "../bow/bow-intro-03.jpg",
    "../bow/bow-intro-02.jpg",
    "../bow/bow-intro-04.jpg",
    "../bow/bow-intro-08.jpg",
    "../bow/bow-intro-13.jpg",
    "../bow/bow-intro-12.jpg",
    "../bow/bow-intro-09.jpg", 
    "../bow/bow-01.jpg", 
    "../bow/bow-02.jpg", 
    "../bow/bow-03.jpg", 
    "../bow/bow-04.jpg", 
    "../bow/bow-05.jpg", 
    "../bow/bow-06.jpg", 
    "../bow/bow-07.jpg", 
    "../bow/bow-08.jpg", 
    "../bow/bow-09.jpg", 
    "../bow/bow-10.jpg", 
    "../bow/bow-11.jpg", 
    "../bow/bow-14.jpg", 
    "../bow/bow-16.jpg", 
    "../bow/bow-17.jpg", 
    "../bow/bow-18.jpg", 
    "../bow/bow-19.jpg", 
    "../bow/bow-20.jpg", 
    "../bow/bow-21.jpg", 
    "../bow/bow-22.jpg", 
    "../bow/bow-23.jpg", 
    "../bow/bow-24.jpg", 
    "../bow/bow-25.jpg", 
    "../bow/bow-26.jpg", 
    "../bow/bow-27.jpg", 
    "../bow/bow-28.jpg", 
    "../bow/bow-29.jpg", 
    "../bow/bow-30.jpg", 
    "../bow/bow-31.jpg", 
    "../bow/bow-32.jpg", 
    "../bow/bow-33.jpg", 
    "../bow/bow-34.jpg", 
    "../bow/bow-37.jpg", 
    "../bow/bow-38.jpg", 
    "../bow/bow-39.jpg", 
    "../bow/bow-40.jpg", 
    "../bow/bow-41.jpg", 
    "../bow/bow-42.jpg", 
    "../bow/bow-43.jpg", 
    "../bow/bow-44.jpg", 
    "../bow/bow-46.jpg", 
    "../bow/bow-47.jpg", 
    "../bow/bow-48.jpg", 
    "../bow/bow-49.jpg", 
    "../bow/bow-50.jpg", 
    "../bow/bow-51.jpg", 
    "../bow/bow-52.jpg", 
    "../bow/bow-53.jpg", 
    "../bow/bow-54.jpg", 
    "../bow/bow-55.jpg", 
    "../bow/bow-57.jpg", 
    "../bow/bow-58.jpg"
    );

  function bowPreload(){
    for (i = 0; i < bowPreload.arguments.length; i++) {
	   bowImages[i] = new Image();
	   bowImages[i].src = bowPreload.arguments[i];
    }
  };
  
  bowPreload();

/* Smooth Scrolling Effect leveraged from https://css-tricks.com/snippets/jquery/smooth-scrolling/*/
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  })
});  