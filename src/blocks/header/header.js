
$(".header nav .navbar-nav li").click(function() {
    $(this).find(".header__submenu").toggle(300);
})

$(".header .search-icon, .close-icon").click(function(){
    $(".header__search").toggle();
});
