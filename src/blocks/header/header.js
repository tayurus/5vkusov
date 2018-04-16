
$(".header nav .navbar-nav li").click(function() {
    if ($(window).width() < 750)
        $(this).find(".header__submenu").toggle(300);

})

$(".header .search-icon, .close-icon").click(function(){
    $(".header__search").toggle();
});
