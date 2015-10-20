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

		$('.popup').bPopup({
			closeClass : 'popup-close'
			});
		};

	var _addProject = function (e) {
			console.log('Добавдение проекта');
			e.preventDefault();

			//объявление переменных	
			var form = $(this),
				url = 'add_project.php',
				data = form.serialize();

			console.log(data);

			//запрос на сервер 
			$.ajax({
				url: url,
				type: 'POST',
				dataType: 'json',
				data: data,
			})
			.done(function(answer) {
				console.log("success");
				if (answer.message === "OK") {
					console.log('Все прошло успешно!');
				};
			})
			.fail(function() {
				console.log("error");
			})
			.always(function() {
				console.log("complete");
			});
			

		};

	return {
		init : init
	}
})();

myModule.init();