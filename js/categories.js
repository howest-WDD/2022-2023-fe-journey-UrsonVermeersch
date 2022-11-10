let cat;

const inViewport = new IntersectionObserver (function(el){
    if(el[0].isIntersecting) {
        cat.classList.add('c-categories__animate');
    }
});

const init = function() {
    cat = document.querySelector('.js-category');
    inViewport.observe(cat);
    console.log("init");
};

document.addEventListener("DOMContentLoaded", init);