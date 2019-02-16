$(document).ready(function () {
    svg4everybody({});


    var bannerSlider = function() {
        promoBannerSlider = $('.js-promo-banner');

        promoBannerSlider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '.banner-slider__nav-prev',
            nextArrow: '.banner-slider__nav-next',
            infinite: true,

        });
    };
    var categorySliderMen = function() {
        $('.js-category-slider_men').slick({
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            prevArrow: '.js-category-slider__nav-prev_men',
            nextArrow: '.js-category-slider__nav-next_men',
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        dots: true
                    }
                }
            ]
        });
    };
    var categorySliderWomen = function() {
        $('.js-category-slider_women').slick({
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            prevArrow: '.js-category-slider__nav-prev_women',
            nextArrow: '.js-category-slider__nav-next_women',
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        dots: true
                    }
                }
            ]
        });
    };
    var categorySliderNew = function() {
        $('.js-category-slider_new').slick({
            slidesToShow: 4,
            slidesToScroll: 2,
            infinite: true,
            prevArrow: '.js-category-slider__nav-prev_new',
            nextArrow: '.js-category-slider__nav-next_new',
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        dots: true,
                        slidesToShow: 2,
                    }
                }
            ]

        });
    };
    var categorySliderBest = function() {
        $('.js-category-slider_best').slick({
            slidesToShow: 4,
            slidesToScroll: 2,
            infinite: true,
            prevArrow: '.js-category-slider__nav-prev_best',
            nextArrow: '.js-category-slider__nav-next_best',
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        dots: true,
                        slidesToShow: 2,
                    }
                }
            ]

        });
    };
    var categorySliderPopular = function() {
        $('.js-category-slider_popular').slick({
            slidesToShow: 4,
            slidesToScroll: 2,
            infinite: true,
            prevArrow: '.js-category-slider__nav-prev_popular',
            nextArrow: '.js-category-slider__nav-next_popular',
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        dots: true,
                        slidesToShow: 2,
                    }
                }
            ]

        });
    };

    var showSpecialOffer = function(){
        $(document).on('click','.title-new', function (){
            $('.title-new').addClass('active');
            $('.title-new').siblings().removeClass('active');
            $('.special-offer-new').addClass('active');
            $('.special-offer-new').siblings().removeClass('active');
        });
        $(document).on('click','.title-best', function (){
            $('.title-best').addClass('active');
            $('.title-best').siblings().removeClass('active');
            $('.special-offer-best').addClass('active');
            $('.special-offer-best').siblings().removeClass('active');
        });
        $(document).on('click','.title-popular', function (){
            $('.title-popular').addClass('active');
            $('.title-popular').siblings().removeClass('active');
            $('.special-offer-popular').addClass('active');
            $('.special-offer-popular').siblings().removeClass('active');
        });
    };


      var showDropdownMenu =function() {
        $(document).on('click','.search-form__select', function (){
            $('.dropdown-menu').toggleClass('active');
        });

    };

    // $(document).mouseup(function (e) {
    //
    //     var dropdown = $('.dropdown-menu');
    //
    //     if (dropdown.hasClass('active')) {
    //         if (dropdown.has(e.target).length === 0) {
    //             $('.dropdown-menu').removeClass('active');
    //         }
    //
    //     }
    // });


    showSpecialOffer();
    bannerSlider();
    categorySliderMen();
    categorySliderWomen();
    categorySliderNew();
    categorySliderBest();
    categorySliderPopular();
    showDropdownMenu();
});