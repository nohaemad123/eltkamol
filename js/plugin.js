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
    $(overlay).click(function (e) {
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



// start adding overlay div
$("button").click(function(){
    $(".has-replied").append("<div class='overlay-ticket'></div>");
});




    $(".collapse").on("shown.bs.collapse", function () {
        $(this).parent().find(".fa-plus").removeClass("fa-plus").addClass("fa-chevron-down");


    }).on('hidden.bs.collapse', function () {
        $(this).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-plus");

    });
});



  var branchHead = $('.all_brunches .panel-heading a');
  var hasIn = $('.all_brunches .panel-collapse');
    $(branchHead).click(function () {
      $('.all_brunches .panel-heading a.active').removeClass('active');
      $(this).addClass('active');
    });
