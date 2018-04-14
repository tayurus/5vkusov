$(document).ready(function () {
    $(".product__weight-minus").click(function() {
        let currentVal = parseInt($(".product__weight-value").text());
        if (currentVal !=  1)
            $(".product__weight-value").text(currentVal - 1);
    });



    $(".product__weight-plus").click(function() {
        let currentVal = parseInt($(".product__weight-value").text());
        $(".product__weight-value").text(currentVal + 1);
    })
})
