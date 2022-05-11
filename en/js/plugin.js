/*global $ , alert, document, eq*/

$(document).ready(function () {
    'use strict';

    $("html").niceScroll();

    var overlay = $('.overlay');

    $("#menu-close").click(function (e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
        overlay.hide();
    });
    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
        overlay.show();
    });

    var scrolltop = $('.footer .top');
    scrolltop.click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 2000);
    });

    $('.carousel').carousel({
        interval: 4000
    });

    /*function toggleChevron(e) {
        $(e.target)
            .prev('.panel-heading')
            .find("i")
            .toggleClass('rotate-icon');
        $('.panel-body.animated').toggleClass('zoomIn zoomOut');
        $('.panel-heading').css({
            "background-color": '#8b0304',
            "color": '#fff',
            "border": '2px solid transparent',
        });s
    }

    $('#accordion').on('hide.bs.collapse', toggleChevron);
    $('#accordion').on('show.bs.collapse', toggleChevron);*/


    /*   $('.all_brunches a .panel-heading').click(function () {
           $(this).css({
               "background-color": '#8b0304',
               "color": '#fff',
               "border": '2px solid transparent',
           });

       });*/

    //    $('.collapse').on('shown.bs.collapse', function () {
    //        $(this).parent().find(".fa-plus").removeClass("fa-plus").addClass("fa-chevron-down");
    //    }).on('hidden.bs.collapse', function () {
    //        $(this).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-plus");
    //    });



    //////////////////////////////////////////////////////////////////////////////////
    
    $(".collapse").on("shown.bs.collapse", function () {
        $(this).parent().find(".fa-plus").removeClass("fa-plus").addClass("fa-chevron-down");


    }).on('hidden.bs.collapse', function () {
        $(this).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-plus");

    });

    $(".in").prev(".panel-heading").css({
        "background-color": '#8b0304',
        "color": "#fff",
        "border": '2px solid transparent',
    });

    //    $(".in").find(".fa-plus").removeClass("fa-plus").addClass("fa-chevron-down");
    $(".panel-heading").click(function () {
        $(this).css({
            "background-color": '#8b0304',
            "color": "#fff ",

            "border": '2px solid transparent',
        });

        $(this).prev(this).css({
            "background - color": "#fff",
            "color": "#8b0304",
            "border": "2px solid # 8 b0304",
        });
    })
});
