/* ============================================
|  |  |  |  Preloader
============================================ */
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(150).fadeOut('slow');
});

/* ============================================
|  |  |  |  Tilted Scroll
============================================ */

// $(".websites-portfolio").tiltedpage_scroll({
//     sectionContainer: "> section",
//     angle: 50,
//     opacity: true,
//     scale: true,
//     outAnimation: true
// });

/* ============================================
|  |  |  |  Magnific popup
============================================ */

$(function () {
    $('.port-popup').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        },
        image: {
            titleSrc: function (item) {
                var markup = '';
                if (item.el[0].hasAttribute("data-title")) {
                    markup += '<a>' + item.el.attr('data-title') + '</a>';
                }
                return markup
            }
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
        autoplay: true,
        smartSpeed: 700,
        autoplayTimeout:5000,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: true,
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
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });
});

$(function() {
    $(".website-info-box").owlCarousel({
        items: 4,
        margin: 25,
        center: true,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: true,
        navText: ['<i class="fa fa-angle-left arrow-dark"></i>','<i class="fa fa-angle-right arrow-dark"></i>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            768: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });
});



$(function() {
    $(".interactive-map-carousel").owlCarousel({
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
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });
});



$(function() {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
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


$(window).scroll(function() {
    var theta = $(window).scrollTop()/200.0 % (Math.PI*2);
    $('#leftgear2').css({ transform: 'rotate(-' + theta + 'rad)' });
    $('#rightgear2').css({ transform: 'rotate(' + theta + 'rad)' });
});


/* ================================
|   |   |   Google Map
================================ */
// $(window).on('load', function () {
//
//     // Map Variables
//     var addressString = 'Websites Warehouse';
//     var myLatlng = {lat: 34.181040, lng: -118.603640};
//
//     //1. Render Map
//     var map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 11,
//         center: myLatlng
//     });
//
//     // 2. Add Marker
//     var marker = new google.maps.Marker({
//         position: myLatlng,
//         map: map,
//         title: "Click To See Address"
//     });
//
//     // 3. Add Info Window
//     var infowindow = new google.maps.InfoWindow({
//         content: addressString
//     });
//
//     // Show info window when user clicks marker
//     marker.addListener('click', function () {
//         infowindow.open(map, marker);
//     });
//
//
//     // 4. Resize Function
//     google.maps.event.addDomListener(window, 'resize', function() {
//
//         var center = map.getCenter();
//         google.maps.event.trigger(map, 'resize');
//         map.setCenter(center);
//     });
//
//
// });


/* ================================
|   |   |   Navigation
================================ */

/* Show & Hide White Navigation */
$(function () {

    // show/hide nav on page load
    showHideNav();

    $(window).scroll(function () {

        // show/hide nav on window's scroll
        showHideNav();

    });

    function showHideNav() {

        if( $(window).scrollTop() > 50 ) {

            // Show white nav
            $("nav").addClass("white-nav-top");

            // Show dark logo
            // $(".navbar-brand img").attr("src", "/img/logo/websites-warehouse-cropped-logo-dark.png");
            $(".navbar-brand img").attr("src", "/img/logo/websites-warehouse-new-dark-2.png");

            // Show back to top
            $("#back-to-top").fadeIn();

        } else {

            // Hide white nav
            $("nav").removeClass("white-nav-top");

            // Show logo
            // $(".navbar-brand img").attr("src", "/img/logo/websites-warehouse-cropped-logo-light.png");
            $(".navbar-brand img").attr("src", "/img/logo/websites-warehouse-new-light-2.png");

            // Show back to top
            $("#back-to-top").fadeOut();
        }
    }

});

// Smooth Scrolling
$(function () {

    $("a.smooth-scroll").click(function(event) {

        event.preventDefault();

        // get selection id like #about, #services, #work, #team and etc.
        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 81
        }, 1250, "easeInOutExpo");

    });

});

/* ================================================
|   |   |   |   Mobile Menu
================================================ */

$(function() {

    // Show mobile nav
    $("#mobile-nav-open-btn").click(function() {
        $("#mobile-nav").css("height", "100%");
    });

    // Hide mobile nav
    $("#mobile-nav-close-btn, #mobile-nav a").click(function() {
        $("#mobile-nav").css("height", "0%");
    });
});


/* ================================================
|   |   |   |   Website Tools
================================================ */

$(window).scroll(function(){
    if ($(window).scrollTop() >= 2736 ) {
        $('.website-tools-sticky').addClass('fixed');
    }
    else {
        $('.website-tools-sticky').removeClass('fixed');
    }
});


/* ================================================
|   |   |   |   Remove Classes JS
================================================ */
