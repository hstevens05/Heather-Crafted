//Nav Dropdown Button

$('.navbtn').click(function(){
	if ( $('.nav-dropdown').is(':hidden')) {
		$('.nav-dropdown').slideDown("slow");
	} else {
		$('.nav-dropdown').slideUp();
	}
});


//Contact Form Submission

$('#submit-form').click(function(){
	if ( $('.alert-box').is(':hidden')){
		$('.alert-box').fadeIn();
	}

	if ( $('.alert-window').is(':hidden')) {
		$('.alert-window').fadeIn();
	}
})

$('.alert-button').click(function(){
	if ( $('.alert-box').not(':hidden')){
		$('.alert-box').fadeOut();
	}

	if ( $('.alert-window').not(':hidden')) {
		$('.alert-window').fadeOut();
	}
})