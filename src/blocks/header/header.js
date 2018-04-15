$(document).ready(function () {
    $(".header nav .navbar-nav li").click(function() {
        $(this).find(".header__submenu").toggle(300);
    })
})
