var contactForm = (function () {

	var init = function () {
		_setUpListners();
	};

    // прослушка событий
	var _setUpListners = function() {

        $('#contact').on('submit', _submitForm);

	};

    var _submitForm = function(e) {
        console.log('Отправка формы');
        e.preventDefault();

        var form = $(this),
            url = 'contact.php',
            defObj = _ajaxForm(form, url);

        //обработка ответа

    };

    var _ajaxForm = function(form,url) {
        console.log('Ajax запрос с проверкой');
        if (!validation.validForm(form)) return false;

        //если false ниже не произойдет

    };

	return {
		init : init
	}
})();

contactForm.init();
