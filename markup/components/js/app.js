(function ($) {
    "use strict";

    var app = {

        initialize: function () {
            this.parallax();
            this.scrollSpy();
            this.stickyMenu();
            this.mainSlider();
            this.testimonialSlider();
            this.teamSlider();
            this.partnerLogoSlider();
            this.isotopeSorting();
            this.magnificPopup();
            this.counterUp();
            this.scrollTop();
            this.preloader();

            // this.modules();
            // this.setUpListeners();
            // this.sayHallo();
        },

        // modules: function () {
        //
        // },

        // setUpListeners: function () {
        //     $('form').click($.proxy(this.submitForm, this));
        // },

        // submitForm: function () {
        //   // some actions here
        //   // this === app ( $.proxy help with it)
        // },

        sayHallo: function () {
            console.log('Say hallo');
        },
        stickyMenu: function () {
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > 100) {
                    $('header').addClass('sticky');
                } else {
                    $('header').removeClass('sticky');
                }
            });
            $(document).on('click', '.navbar-collapse.in', function (e) {
                if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                    $(this).collapse('hide');
                }
            });
        },
        scrollSpy: function () {
            $("a").on('click', function (event) {
                if (this.hash !== "") {
                    event.preventDefault();
                    var hash = this.hash;
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top
                    }, 1000, function () {
                        window.location.hash = hash;
                    });
                }
            });
        },
        parallax: function () {
            $('.banner-area').parallax('50%', '.3');
        },
        isotopeSorting: function () {
            $(window).on('load', function () {
                var $portfolio = $('.portfolio-project').isotope({});
                $('.portfolio-menu').on('click', 'li', function () {
                    var filterValue = $(this).attr('data-filter');
                    $portfolio.isotope({
                        filter: filterValue
                    });
                });
            });
            $('.portfolio-menu li').on('click', function () {
                $(this).siblings('li').removeClass('active');
                $(this).addClass('active');
                event.preventDefault();
            });
            // For Tooltip
            $('[data-toggle="tooltip"]').tooltip()
        },
        magnificPopup: function () {
            $('.play-btn').magnificPopup({
                type: 'iframe'
            });
            var magnifPopup = function () {
                $('.image-popup').magnificPopup({
                    type: 'image',
                    removalDelay: 300,
                    mainClass: 'mfp-with-zoom',
                    gallery: {
                        enabled: true
                    },
                    zoom: {
                        enabled: true,
                        duration: 300,
                        easing: 'ease-in-out',
                        opener: function (openerElement) {
                            return openerElement.is('img') ? openerElement : openerElement.find('img');
                        }
                    }
                });
            };
            // Call the functions
            magnifPopup();
        },
        teamSlider: function () {
            var team = $('.team-slider');
            team.owlCarousel({
                loop: true,
                margin: 30,
                dots: true,
                autoplay: true,
                smartSpeed: 1000,
                autoplayTimeout: 4000,
                responsive: {
                    0: {
                        items: 1
                    },

                    480: {
                        items: 1
                    },

                    768: {
                        items: 3
                    },

                    992: {
                        items: 4
                    },

                    1100: {
                        items: 4
                    }
                }
            });
        },
        mainSlider: function () {
            var wHight = $(window).height(),
                acHeight = (wHight);
            var mainSlider = $('.main-slider');
            if (mainSlider.length) {
                mainSlider.camera({
                    height: acHeight + 'px',
                    loader: true,
                    hover: false,
                    navigationHover: false,
                    navigation: true,
                    autoPlay: true,
                    time: 4000,
                    playPause: false,
                    pagination: false
                });
            }
        },
        testimonialSlider: function () {
            var testmonials = $('.client-say');
            testmonials.owlCarousel({
                items: 1,
                margin: 15,
                loop: true,
                autoplay: true,
                stagePadding: 0,
                dots: true,
                smartSpeed: 700
            });
        },
        partnerLogoSlider: function () {
            var partner = $('.partner-slider');
            partner.owlCarousel({
                items: 6,
                margin: 30,
                loop: true,
                autoplay: true,
                stagePadding: 0,
                dots: true,
                smartSpeed: 800,
                responsive: {
                    0: {
                        items: 2
                    },

                    480: {
                        items: 2
                    },

                    768: {
                        items: 4
                    },

                    992: {
                        items: 6
                    },

                    1100: {
                        items: 6
                    }
                }
            });
        },
        counterUp: function () {
            $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
        },
        scrollTop: function () {
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > 600) {
                    $('.scroll-top').removeClass('not-visible');
                } else {
                    $('.scroll-top').addClass('not-visible');
                }
            });
            $('.scroll-top').on('click', function (event) {
                $('html,body').animate({
                    scrollTop: 0
                }, 1000);
            });
        },
        preloader: function () {
            $('.preloader').fadeOut('slow');
        }

    };

    app.initialize();

}(jQuery));
