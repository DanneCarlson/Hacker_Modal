
const btn_open_menu = document.querySelector(".open-menu");
const btn_close_menu = document.querySelector(".close-menu");
const menu_mobile = document.querySelector(".menu-mobile");

btn_open_menu.addEventListener("click", function () {
    
        menu_mobile.setAttribute('class', 'menu-mobile-show');
        btn_close_menu.setAttribute('class','close-menu-show');

});

btn_close_menu.addEventListener("click", function () {
        menu_mobile.setAttribute('class', 'menu-mobile');
        btn_close_menu.setAttribute('class', 'close-menu');
});


    