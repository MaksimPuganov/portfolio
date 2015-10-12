$(document).ready(function() {
    console.log('js запустился');
    console.log($);

    $('.trigger').on('click', function(e) {
		e.preventDefault();

		$('.popup').bPopup({
			closeClass : 'popup-close'
		});
	});

    $('.form-popup-input-file-origin').on('change', function(){

		var
			$this = $(this),
			value = $this.val(),
			pureVal = value.replace(/c:\\fakepath\\/gmi, "");

		$('.form-popup-input-fake').text(pureVal);

	});
})
