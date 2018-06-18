(function () {
    "use strict";
    if ($('.slider')) {
        $('.slider').slick({
            dots: true,
            infinite: false,
            arrows: false,
            slidesToShow: 5.5,
            slidesToScroll: 5.5,
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        dots: true,
                        infinite: false,
                        arrows: false,
                        slidesToShow: 4.5,
                        slidesToScroll: 4.5
                    }
                }, {
                    breakpoint: 700,
                    settings: {
                        dots: true,
                        infinite: false,
                        arrows: false,
                        slidesToShow: 3.5,
                        slidesToScroll: 3.5
                    }
                }, {
                    breakpoint: 415,
                    settings: {
                        dots: true,
                        infinite: false,
                        arrows: false,
                        slidesToShow: 2.7,
                        slidesToScroll: 2.7
                    }
                }
  ]
        });
    }
    if ($('.slider_vendor-page')) {
        $('.slider_vendor-page').slick({
            dots: false,
            infinite: false,
            arrows: false,
            slidesToShow: 5.5,
            slidesToScroll: 5.5,
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        dots: false,
                        infinite: false,
                        arrows: false,
                        slidesToShow: 4.5,
                        slidesToScroll: 4.5
                    }
                }, {
                    breakpoint: 700,
                    settings: {
                        dots: false,
                        infinite: false,
                        arrows: false,
                        slidesToShow: 3.5,
                        slidesToScroll: 3.5
                    }
                }, {
                    breakpoint: 415,
                    settings: {
                        dots: false,
                        infinite: false,
                        arrows: false,
                        slidesToShow: 2.7,
                        slidesToScroll: 2.7
                    }
                }
  ]
        });
    }
    if ($('.slider_curriculum')) {
        $('.slider_curriculum').slick({
            dots: false,
            infinite: false,
            arrows: false,
            slidesToShow: 5.5,
            slidesToScroll: 5.5,
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        dots: false,
                        infinite: false,
                        arrows: false,
                        slidesToShow: 4.5,
                        slidesToScroll: 4.5
                    }
                }, {
                    breakpoint: 700,
                    settings: {
                        dots: false,
                        infinite: false,
                        arrows: false,
                        slidesToShow: 3.5,
                        slidesToScroll: 3.5
                    }
                }, {
                    breakpoint: 415,
                    settings: {
                        dots: false,
                        infinite: false,
                        arrows: false,
                        slidesToShow: 2.4,
                        slidesToScroll: 2.4
                    }
                }
  ]
        });
    }
    if ($('.slider_training-courses')) {
        $('.slider_training-courses').slick({
            dots: false,
            infinite: false,
            arrows: false,
            slidesToShow: 5.5,
            slidesToScroll: 5.5,
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        dots: false,
                        infinite: false,
                        arrows: false,
                        slidesToShow: 4.5,
                        slidesToScroll: 4.5
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        dots: false,
                        infinite: false,
                        arrows: false,
                        slidesToShow: 3.5,
                        slidesToScroll: 3.5
                    }
                }, {
                    breakpoint: 415,
                    settings: {
                        dots: false,
                        infinite: false,
                        arrows: false,
                        slidesToShow: 2.4,
                        slidesToScroll: 2.4
                    }
                }
  ]
        });
    }
    if ($('.slider_purchase-individually')) {
        $('.slider_purchase-individually').slick({
            dots: true,
            infinite: true,
            arrows: true,
            slidesToShow: 4,
            slidesToScroll: 4, 
            centerMode: true,
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        dots: true,
                        infinite: true,
                        arrows: true,
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        centerMode: true
                    }
                }, {
                    breakpoint: 700,
                    settings: {
                        dots: true,
                        infinite: true,
                        arrows: true,
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        centerMode: true
                    }
                }, {
                    breakpoint: 415,
                    settings: {
                        dots: true,
                        centerPadding: 0,
                        infinite: true,
                        arrows: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true
                    }
                }
  ]
        });
    }
    if ($('.popup_premium-bundle__item-wrapper')) {
        $('.popup_premium-bundle__item-wrapper').slick({
            dots: false, 
            infinite: false,
            arrows: false,
            slidesToShow: 4,
            slidesToScroll: 4,
            centerMode: true,
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        dots: false,
                        infinite: false,
                        arrows: false,
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        centerMode: true
                    }
                }, {
                    breakpoint: 700,
                    settings: {
                        dots: false,
                        infinite: false,
                        arrows: false,
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        centerMode: true
                    }
                }, {
                    breakpoint: 415,
                    settings: {
                        dots: false,
                        centerPadding: 150,
                        infinite: false,
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
  ]
        });
    } 
    if ($('.step-item__wrapper')) {
        $('.step-item__wrapper').slick({
            dots: true,
                        centerPadding: 150,
                        infinite: false,
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1 
           
 
        });
    }

}());
$('.form_add-comment__star-rating').click(function () {
    $(this).find(".form_add-comment__star-rate_active").each(function () {
        $(this).removeClass("form_add-comment__star-rate_active");
    });
    $(this).find("input:checked").parent().addClass("form_add-comment__star-rate_active").prevAll().each(function () {
        $(this).addClass("form_add-comment__star-rate_active");
    });
});
$('.form_add-comment__star-rating label').hover(function () {
    $(this).parent().find(".form_add-comment__star-rate_active").each(function () {
        $(this).removeClass("form_add-comment__star-rate_active");
    });
    $(this).addClass("form_add-comment__star-rate_active");
    $(this).prevAll().each(function () {
        $(this).addClass("form_add-comment__star-rate_active");
    });
}, function () {
    $(this).parent().find(".form_add-comment__star-rate_active").each(function () {
        $(this).removeClass("form_add-comment__star-rate_active");
    });
    $(this).parent().find("input:checked").parent().addClass("form_add-comment__star-rate_active").prevAll().each(function () {
        $(this).addClass("form_add-comment__star-rate_active");
    });
});
