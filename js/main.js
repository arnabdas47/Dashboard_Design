$(document).ready(function(){


    $(".open_slider").click(function(){
        $(".slider").toggleClass("open");
        $(".cross").toggleClass("fade");
        $(".menu").toggleClass("fade1");
    });
    $(".body").click(function(){
        $(".slider").removeClass("open");
    });
    $(".search_icon").click(function(){
        $(".logo_hide").toggle();
        $('.input').toggleClass("search_open");
        $(this).toggleClass("search_open1");

    });

});