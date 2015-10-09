$(document).ready(function() {
    console.log('js запустился');
    console.log($);

    $('.trigger').on('click', function(e) {
		e.preventDefault();

		$('.popup').bPopup({
			closeClass : 'popup__close'
		});
	})
})
