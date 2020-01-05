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

// /* ============================================
// |  |  |  |  Tilted Scroll
// ============================================ */
//
// $(".websites-portfolio").tiltedpage_scroll({
//     sectionContainer: "> section",
//     angle: 50,
//     opacity: true,
//     scale: true,
//     outAnimation: true
// });


/* ================================================
|   |   |   |   Owl Carousel
================================================ */

$(function() {
    $(".team-members").owlCarousel({
        items: 3,
        margin: 25,
        center: true,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left arrow-dark"></i>','<i class="fa fa-angle-right arrow-dark"></i>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            768: {
                items: 2
            },
            1200: {
                items: 4
            }
        }
    });
});


$(function() {
    $(".slider-jc").owlCarousel({
        items: 3,
        margin: 25,
        center: true,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left arrow-dark"></i>','<i class="fa fa-angle-right arrow-dark"></i>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            768: {
                items: 2
            },
            1200: {
                items: 4
            }
        }
    });
});



/* ================================================
|   |   |   |   Page Scroll
================================================ */


$(window).scroll(function() {
    var theta = $(window).scrollTop()/100.0 % (Math.PI*2);
    $('#leftgear').css({ transform: 'rotate(' + theta + 'rad)' });
    $('#rightgear').css({ transform: 'rotate(-' + theta + 'rad)' });
});









