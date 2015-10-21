var myModule = (function () {

	var init = function () {
		_setUpListners();
		};

	var _setUpListners = function () {
		// прослушка собыий
		$('.trigger').on('click', _showModal); // показать модальное окно
		$('#add-project').on('submit', _addProject); // добавление проекта
		};

	var _showModal = function (e) {
		console.log('Модальное окно');
		e.preventDefault();

		var divPopup = $('.popup'),
			form = divPopup.find('.form-popup');

		divPopup.bPopup({
			closeClass : 'popup-close',
			onClose : function () {
				form.find('.message').text('').hide();
			}
			});
		};

	var _addProject = function (e) {
			console.log('Добавление проекта');
			e.preventDefault();

			//объявление переменных	
			var form = $(this),
				url = 'add_project.php',
				defObj = _ajaxProject(form, url);

            if(defObj) {

                //запрос на сервер
                defObj.done(function(answer) {
                    var successBlock = form.find('.success-message'),
                        errorBlock = form.find('.error-message');

                    if (answer.status === "OK") {
                        errorBlock.hide();
                        successBlock.text(answer.text).show();
                        console.log('Все прошло успешно!');
                    }else {
                        successBlock.hide();
                        errorBlock.text(answer.text).show();
                    };
                });
            }
		};

	var _ajaxProject = function (form, url) {

        if (!validation.validForm(form)) return false;

		data = form.serialize();

		var resultAjax = $.ajax({
			url: url,
			type: 'POST',
			dataType: 'json',
			data: data,
		}).fail( function (answer) {
			console.log('Проблемы с PHP');
			form.find('.error-message').text('на сервере произошла ошибка').show();
		});

		return resultAjax;
	};
	return {
		init : init
	}
})();

myModule.init();
