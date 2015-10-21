var validation = (function () {

    //Инициализация модуля
	var init = function () {
		_setUpListners();
	};

    // Прослушка событий
	var _setUpListners = function () {
        $('form').on('keydown', '.has-error', _removeError);
        $('form').on('reset', _clearForm);
	};

    var _removeError = function() {
        $(this).removeClass('has-error');
    };

    var _clearForm = function (form) {
        var form = $(this);
        form.find('input, textarea').trigger('hideTooltip');
        form.find('.has-error').removeClass('has-error');

    };

    //Создание тултипа
    var _createQtip = function (elm, pos) {
        if (pos === 'right') {
            pos = {
                my: 'left center',
                at: 'right center'
            }
        }else {
            pos = {
                my: 'right center',
                at: 'left center',
                adjust: {
                    method: 'shift none'
                }
            }
        };

        elm.qtip ({
            content: {
                text: function() {
                    return $(this).attr('qtip-content')
                }
            },
            show: {
                event: 'show'
            },
            hide: {
                event: 'keydown hideTooltip'
            },
            position: pos,
            style: {
                classes: 'qtip-mystyle qtip-rounded',
                tip: {
                    height: 9,
                    width: 10,
                }
            }
        }).trigger('show');

    };

    var validForm = function (form) {

        var elms = form.find('input, textarea').not('input[type="file"], input[type="hidden"]'),
            valid = true;

        //Проход по элементам формы
        $.each(elms, function(index,value){

            var elm = $(value),
                val = elm.val(),
                pos = elm.attr('qtip-content');

            if(val.length === 0) {
                elm.addClass('has-error');
                _createQtip(elm, pos);
                valid = false;
            }

        });

        return valid;
    };

	return {
		init : init,
        validForm: validForm
	}
})();

validation.init();
