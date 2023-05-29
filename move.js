$('#page-link1 a[href*="#"]').click(function (event) {
	event.preventDefault();
	
	var elmHash = $(this).attr('href');
	var pos = $(elmHash).offset().top;
	
	$('html').animate({scrollTop: pos}, 500);
  });
  