$(function () {



	function toggle_sidebar() {

		var viewport_width = $(window).width();

		if (viewport_width < 1025) {

			$('.wrapper > .sidebar').removeClass('open').removeClass('close');
			$('.wrapper > .main').removeClass('open').removeClass('close');

			$('.hamburger').unbind('click').click(function () {
				$('.wrapper > .sidebar').toggleClass('open');
				$('.wrapper > .main').toggleClass('open');
			});
		} // end if

		if (viewport_width >= 1025) {

			$('.wrapper > .sidebar').removeClass('open').removeClass('close');
			$('.wrapper > .main').removeClass('open').removeClass('close');

		} // end if

	} // end function


	toggle_sidebar();


	$(window).resize(function () {
		toggle_sidebar();
	});

});
