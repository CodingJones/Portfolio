

$(document).on('ready', function() {

	$('a[href^="#"]').on('click', function(event) {
		var target = $($(this).attr('href'));
		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top-95
			}, 750);
		}
	});


 	var winHeight = $(window).height() + 120,
      docHeight = $(document).height(),
      progressBar = $('progress'),
      max, value;

	$(window).scroll(function(){
    var top = ($(window).scrollTop() > 0) ? $(window).scrollTop() : 1;
    $('.fade').stop(true, true).fadeTo(0, 1 / top);
    $('.fade').css('top', top * 0.5);
	});
  /* Set the max scrollable area */


	$(document).on('scroll', function(){
     value = $(window).scrollTop();
     progressBar.attr('value', value);
	 max = $(document).height() - $(window).height();
	 progressBar.attr('max', max);
	 console.log(max);
	});

	   $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

	$('.remodal-close').click(function () {

	});

	$(document).ready(function(){
    $(".nav-item").click(function () {
      $("a.active").removeClass('active');
      $(this).addClass('active');
      var active_section = $(this).attr('href'); //get active section id
      $('html, body').animate({
      //and scroll to the section
      scrollTop: $(active_section).offset().top
      }, 1000);
    });


   $(document).scroll(function () {
   //get document scroll position
     var position = $(document).scrollTop();
     //get header height
     var header = $('nav').outerHeight();

     //check active section
     $('.section').each(function(i) {
         if($(this).position().top <= (position + header))
          {
               $("a.active").removeClass('active');
               $("a").eq(i).addClass('active');
          }
      });
   });

 });




});
