$(document).ready(function() {

    // запуск функции по событию change в input[type='file']
    $('.form-input-file-origin').on('change', function(){

		var
			$this = $(this),
			value = $this.val(), // сохраняем путь к файлу
			pureVal = value.replace(/c:\\fakepath\\/gmi, ""); //убираем путь к файлу, оставляем только имя и расширение

        $('#file-name')
            .val(pureVal)
            .trigger('hideTooltip')
            .removeClass('has-error');

	});

    //Placeholder
	 $('input, textarea').placeholder();
});
