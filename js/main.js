$(document).ready(function () {
    let tabitem = $('.tabs-item')
    
    tabsitem.on('click', function (event) {
        event.preventDefault();
        let activeContent = $(this).attr('href');
        $('.visible').toggleClass('visible');
        $(activeContent).toggleClass('visible');
        $('.tabs-item-active').toggleClass('tabs-item-active');
        $(this).toggleClass('tabs-item-active')
    });
    <button type = "submit" class="btn btn-default">Кнопка - при клике появляется браузерная обводка</button>
});