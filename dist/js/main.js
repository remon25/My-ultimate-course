$(function() {
    "use strict";
    $(".fas").click(function() {


        $(".sidebar, .content-area").toggleClass("no-sidebar");

    });

    $(".slide").click(function() {

        $(this).find('i').toggleClass("fa-angle-right fa-angle-down")
        $(this).next('ul').slideToggle(300)
    })


});