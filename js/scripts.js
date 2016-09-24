$('.navbtn').click(function(){
	if ( $('.nav-dropdown').is(':hidden')) {
		$('.nav-dropdown').slideDown("slow");
	} else {
		$('.nav-dropdown').slideUp();
	}
});



		// $('body').on('click', function(e) {
  //   		if($(e.target).closest('.nav-dropdown').length == 0) {
  //      			$('.nav-dropdown').slideUp();
		//     }
		// });