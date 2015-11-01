
var validLogin = (function () {

    var init = function () {
        _setUpListners();
    };

    var _setUpListners = function () {
        // прослушка событий
        var form=$('form');

        console.log('Валидаци формы');
        if (!validation.validForm(form)) return false;
    }

    return {
        init : init
    }
})();

validLogin.init();