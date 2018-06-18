(function () {
    "use strict";
    let touchstartX;
    let touchendX;

    function closeMobileMenu() {
        document.getElementById("mobileMenuToggle").checked = false;
    } 
    document.body.addEventListener("touchstart", function (e) {
        if (e.target.classList.contains("mobile-menu") || e.target.classList.contains("mobile-menu__item") || e.target.classList.contains("mobile-menu__header")) {
            touchstartX = e.changedTouches[0].screenX;
        }
    });
    document.body.addEventListener("touchend", function (e) {
        if (e.target.classList.contains("mobile-menu") || e.target.classList.contains("mobile-menu__item") || e.target.classList.contains("mobile-menu__header")) {
            touchendX = e.changedTouches[0].screenX;
            if (touchstartX > touchendX && Math.abs(touchstartX - touchendX) > 50) {
                closeMobileMenu();
            }
        }
    });
}());


    //    document.body.addEventListener("mouseup", function (e) {
    //        if (!e.target.classList.contains("mobile-menu__toggle") && !e.target.classList.contains("mobile-menu__toggle") && !e.target.parentElement.classList.contains("mobile-menu") && !e.target.parentElement.classList.contains("mobile-menu__toggle") && !e.target.parentElement.classList.contains("mobile-menu__item")) {
    //            closeMobileMenu();
    //        }
    //    });