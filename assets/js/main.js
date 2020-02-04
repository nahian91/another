    // WOW JS 
    new WOW().init();

    // Counter JS
	$('.counter').counterUp({
		delay: 10,
        time: 1000
    });
    
    // Magnific Images
	$('.click-link').magnificPopup(
		{
			type:'image',
			gallery:{
				enabled:true
			}
		}
    );
    
    // Magnific Video
	$('.video-link').magnificPopup(
		{
			type : 'iframe'
		}
	);
    
    // Responsive Menu
	$('#menu').slicknav();

	// One Page Js
	$('#menu').onePageNav();

	// Slider Js
	$(".slider").owlCarousel({
		items:1,
		//loop:true,
		//autoplay:true,
		nav:true,
		navText:['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>']
	});

	// Blog Slider Js
	$(".owl-carousel").owlCarousel({
		items:3,
		margin:30,
		loop:true,
		autoplay:true,
		center:true,
		nav:true,
		navText:['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>']
	});

	// Testimonial Slider Js
	$(".testimonial").owlCarousel({
		items:3,
		margin:30,
		loop:true,
		mouseDrag:false,
		autoplay:true,
		center:true,
		nav:true,
		navText:['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>']
	});

	// init Isotope
var $grid = $('.grid').isotope({
	// options
  });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
	var filterValue = $(this).attr('data-filter');
	$grid.isotope({ filter: filterValue });
  });

  jQuery("#bgndVideo").YTPlayer();


	jQuery(window).load(function () {

		/* Sticky Header
		============================*/
		$(window).on('scroll', function () {
			if ($(this).scrollTop() > 20) {
				$('.header-fixed').addClass("sticky");
			} else {
				$('.header-fixed').removeClass("sticky");
			}
		});

		/* Preloader Active
		============================*/
		$(".preloader").fadeOut()
	});
