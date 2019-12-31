/* ============================================
|  |  |  |  Preloader
============================================ */
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/* ============================================
|  |  |  |  Tilted Scroll
============================================ */

$(".websites-portfolio").tiltedpage_scroll({
    sectionContainer: "> section",
    angle: 30,
    opacity: true,
    scale: true,
    outAnimation: true
});

/* ============================================
|  |  |  |  Magnific popup
============================================ */

$(document).ready(function() {
    $('.port-popup').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

/* ============================================
|  |  |  |  Tilted Scroll
============================================ */

$(".websites-portfolio").tiltedpage_scroll({
    sectionContainer: "> section",
    angle: 50,
    opacity: true,
    scale: true,
    outAnimation: true
});

/* ================================================
|   |   |   |   Responsive Tabs
================================================ */
$(function () {
    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    })
});


$(function () {
    $("#portfolio-tabs").responsiveTabs({
        animation: 'slide'
    })
});





