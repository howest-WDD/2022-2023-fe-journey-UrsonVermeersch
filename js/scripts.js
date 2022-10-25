const navScroll = function() {
    const nav = document.querySelector('.js-nav');
    const navHeight = nav.clientHeight;

    window.addEventListener('scroll', function() {
        let scrollPosition = window.scrollY;
        
        if(scrollPosition > navHeight) {
            nav.classList.add("c-nav--active");
        } else {                    
            nav.classList.remove("c-nav--active");
        }
    });
};

const toggleDarkmode = function () {
    const body = document.body;
    body.classList.toggle("o-darkmode");
}

const listenToggle = function () {
    const toggle = document.querySelector(".js-toggle");
    toggle.addEventListener('change', toggleDarkmode);
}

const validateForm = function () {
    
}

const init = function() {
    navScroll();
    listenToggle();
    validateForm();
};

document.addEventListener("DOMContentLoaded", init);