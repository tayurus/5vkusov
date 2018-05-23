
//при клике на пункт меню хедера, у которого есть вложенное подменю (для мобильных устройств)
$(".header nav .navbar-nav li").click(function() {
    //если ширина экрана как у мобильника и меньше
    if ($(window).width() < 750)
        //показать вложенное меню (так как у мобильных устройств отсутсвует понятие hover)
        $(this).find(".header__submenu").toggle(300);

});

//при наведении на пункт меню хедера, у которого есть вложенное подменю (для больших экранов)
$(".header nav .navbar-nav li").mouseover(function() {
        //если вложенное меню есть, оно выпадает (это описано в css), а тег main затемняется
        if ($(this).has(".header__submenu").length > 0){
            $(".gray-wrapper").show();
        }
});
// и наоборот, когда мышка покидает пункт меню хедера, у которого есть вложенное подменю (для больших экранов)
$(".header nav .navbar-nav li").mouseout(function() {
        //если вложенное меню есть, оно пропадает (это описано в css), а тег main теряет затемнение
        if ($(this).has(".header__submenu").length > 0){
            $(".gray-wrapper").hide();
        }
});

//при клике на иконку поиска
$(".header .search-icon, .close-icon").click(function(){
    $(".header__search").toggle();
});

let replaceContactsAndIcons = false;

$(window).resize(function(){
    if ($(window).width() <= 767 && !replaceContactsAndIcons)
    {
        let contactsHtml = ($("#contacts").html());
        let iconsHtml = ($("#icons").html());

         $("#contacts").html(iconsHtml);
         $("#icons").html(contactsHtml);

         replaceContactsAndIcons = true;
    }

    if  ($(window).width() > 767 && replaceContactsAndIcons){
        let contactsHtml = ($("#contacts").html());
        let iconsHtml = ($("#icons").html());

         $("#contacts").html(iconsHtml);
         $("#icons").html(contactsHtml);

         replaceContactsAndIcons = false;
    }

})

$(window).resize();
