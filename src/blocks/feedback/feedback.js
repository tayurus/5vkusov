

    //при попытке отправить форму обратной связи - проверим, что все заполнено корректно
    $(".feedback .button").click(function(){
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
    })

    //при получении фокуса инпутом из формы убираем у него класс ошибки ввода
    $(".feedback__input").focus(function(){
        $(this).removeClass("feedback__input_error");
    })
