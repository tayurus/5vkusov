$(document).ready(function() {

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
})
