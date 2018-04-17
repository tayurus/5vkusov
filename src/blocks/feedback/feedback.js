

    //при попытке отправить форму обратной связи - проверим, что все заполнено корректно
    $(".feedback .button").click(function(e){

        //проверяем, если у кнопки нет класса, что она выключена, то вообще ничего не делаем
        if (!$(this).hasClass("feedback__submit_disabled")){
            //идем по всем инпутам внутри формы
            $(".feedback__input").each(function(index, item) {
                //если пользователь забыл заполнить поле
                if ($(item).val() == ""){
                    //добавляем класс, сигнализирующий об ошибке
                    $(item).addClass("feedback__input_error");
                    //меняем placeholder данного input на "Поле не заполнено"
                    $(item).attr("placeholder", "Поле не заполнено");
                }
            })
        }
        else {
            e.preventDefault();
        }

    })

    //при получении фокуса инпутом из формы убираем у него класс ошибки ввода
    $(".feedback__input").focus(function(){
        $(this).removeClass("feedback__input_error");
    });

    //при изменении состояния чембокса о согласии на обработку персональных данных
    $("#feedback__agree").change(function() {
        if ($(this).is(":checked"))
            $(".feedback__submit").removeClass("feedback__submit_disabled");
        else
            $(".feedback__submit").addClass("feedback__submit_disabled");

    })
