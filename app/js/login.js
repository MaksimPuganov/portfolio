
var validLogin = (function () {

    var init = function () {
        _setUpListners();
    };

    var _setUpListners = function () {
        // прослушка событий
        $('form').on('submit', _loginForm); //ввод логина и пароля
        };

    var _loginForm = function (e) {
        console.log('Добавление проекта');
        e.preventDefault();

        //объявление переменных
        var form = $(this),
            url = 'login.php',
            defObj = _ajaxLogin(form, url);

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

    var _ajaxLogin = function (form, url) {

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

validLogin.init();