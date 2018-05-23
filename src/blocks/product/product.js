    //инициализация jquery-ui select
    $("select").selectmenu();


    $("select").on("selectmenuopen", function() {
        let maxWidth = $(".product__weight").outerWidth();
        $(".ui-menu").removeAttr("style");
        $(".ui-menu").css({"max-width" : maxWidth + "px"});
    })

    //обработка нажатия знака "минус" в поле указания массы торта
    $(".product__weight-minus").click(function() {
        let currentVal = parseInt($(".product__weight-value").text());

        //проверка, что масса не равна минимально допустимой
        if (currentVal != 1)
            $(".product__weight-value").text(currentVal - 1);
    });


    //обработка нажатия знака "плюс" в поле указания массы торта
    $(".product__weight-plus").click(function() {
        let currentVal = parseInt($(".product__weight-value").text());
        $(".product__weight-value").text(currentVal + 1);
    });


    //обработка нажатия знака "минус" при указании кол-ва товара
    $(".product__count_minus").click(function(){
        let currentVal = parseInt($(".product__count-value").text());

        //проверка, что кол-во не равно минимально допустимому
        if (currentVal != 1)
            $(".product__count-value").text(currentVal - 1);
    });

    //обработка нажатия знака "плюс" при указании кол-ва товара
    $(".product__count_plus").click(function(){
        let currentVal = parseInt($(".product__count-value").text());
        $(".product__count-value").text(currentVal + 1);
    })

    //функция добавления дней к дате
    function addDays(date, days) {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }

    //настройка календаря, чтобы нельзя было выбрать дату раньше, чем через 5 дней от текущей даты
    let currentDate = new Date();
    let minDate = addDays(currentDate, 5);
    //преобразование даты к формату, который можно задавать атрибуту min у тега input type = date
    let resDate = minDate.toISOString().slice(0, minDate.toISOString().indexOf("T"));
    $(".product__date").attr("min", resDate);



    $(".button_basket").click(function(){

        $("#product-img")
            .clone()
            .css({'position' : 'absolute', 'z-index' : '11100', top: $("#product-img").offset().top, left:$("#product-img").offset().left})
            .appendTo("body")
            .animate({opacity: 0.05,
                left: $(".basket-icon").offset()['left'],
                top: $(".basket-icon").offset()['top'],
                width: 20}, 1000, function() {
                $(this).remove();
            });
    })
