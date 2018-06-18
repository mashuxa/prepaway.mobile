//function fadeOutEffect(obj, transitionDelay) {
//    transitionDelay = transitionDelay || 0.3;
//    obj.style.transitionDuration = transitionDelay + "s";
//    obj.style.opacity = 0;
//    setTimeout(function () {
//        obj.style.display = "none";
//    }, transitionDelay * 1000);
//}
//
//
//(function () {
//    document.addEventListener("touchstart", function (e) {
//        if (e.target.classList.contains("icon-close")) {
//            setCookie('{/literal}{$sPopupCookieName}{literal}', 1, 90);
//            fadeOutEffect(e.target.closest(".popup"));
//            document.body.classList.remove("blocked");
//        }
//    });
//}());
//
// 
//    if ($('.step-item__wrapper')) {
//        $('.step-item__wrapper').slick({
//            dots: true,
//                        centerPadding: 150,
//                        infinite: false,
//                        arrows: false,
//                        slidesToShow: 1,
//                        slidesToScroll: 1 
//           
// 
//        });
//    } 
//if ($('.slider_training-courses')) {
//    $('.slider_training-courses').slick({
//        dots: false,
//        infinite: false,
//        arrows: false,
//        slidesToShow: 5.5,
//        slidesToScroll: 5.5, 
//        responsive: [
//            {
//                breakpoint: 1000,
//                settings: {
//                    dots: false,
//                    infinite: false,
//                    arrows: false,
//                    slidesToShow: 4.5,
//                    slidesToScroll: 4.5
//                }
//                }, {
//                breakpoint: 768,
//                settings: {
//                    dots: false,
//                    infinite: false,
//                    arrows: false,
//                    slidesToShow: 3.5,
//                    slidesToScroll: 3.5
//                }
//                }, {
//                breakpoint: 540,
//                settings: {
//                    dots: false,
//                    infinite: false,
//                    arrows: false,
//                    slidesToShow: 2.4,
//                    slidesToScroll: 2.4
//                }
//                }
//  ]
//    }); 
//}

//(function () {
//    "use strict";
//    let touchstartX; 
//    let touchendX;
//
//    function closeMobileMenu() {
//        document.getElementById("mobileMenuToggle").checked = false;
//    } 
//    document.body.addEventListener("touchstart", function (e) {
//        if (e.target.classList.contains("mobile-menu") || e.target.classList.contains("mobile-menu__item") || e.target.classList.contains("mobile-menu__header")) {
//            touchstartX = e.changedTouches[0].screenX;
//        }
//    });
//    document.body.addEventListener("touchend", function (e) {
//        if (e.target.classList.contains("mobile-menu") || e.target.classList.contains("mobile-menu__item") || e.target.classList.contains("mobile-menu__header")) {
//            touchendX = e.changedTouches[0].screenX;
//            if (touchstartX > touchendX && Math.abs(touchstartX - touchendX) > 50) {
//                closeMobileMenu();
//            }
//        }
//    });
//}());