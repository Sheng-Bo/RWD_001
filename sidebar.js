$(function () {

	function toggle_sidebar() {

		var viewport_width = $(window).width();

		if (viewport_width < 1025) {
			$('.hamburger').unbind('click').click(function () {
				$('.sidebar').toggleClass('open');
				$('.main').toggleClass('open');
				$('.main > .header').toggleClass('open');
			});
		} // end if

		if (viewport_width >= 1025) {
			$('.sidebar').removeClass('open');
			$('.main').removeClass('open');
			$('.main > .header').removeClass('open');
		} // end if
	} // end function

	toggle_sidebar();

	$(window)
		.resize(function () {
			toggle_sidebar();
		});

});
