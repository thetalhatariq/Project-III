

const navbar = document.querySelector('.navbar')

window.onscroll = function () {
    FuncScroll()
}
function FuncScroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.classList.add('active')
    } else {
        navbar.classList.remove('active')
    }
}


const scrollOptions = {
    distance: '50px',
    origin: 'top',
    duration: 1000
}

ScrollReveal().reveal('.title , h1', scrollOptions);
ScrollReveal().reveal('.subtitle', { ...scrollOptions, origin: 'bottom', delay: 1000 });

ScrollReveal().reveal('.scroll-t', { ...scrollOptions, origin: 'top', delay: 500 });
ScrollReveal().reveal('.scroll-t-2', { ...scrollOptions, origin: 'top', delay: 1000 });

ScrollReveal().reveal('.scroll-b', { ...scrollOptions, origin: 'bottom', delay: 500 });
ScrollReveal().reveal('.scroll-b-2', { ...scrollOptions, origin: 'bottom', delay: 1000 });

ScrollReveal().reveal('.scroll-l', { ...scrollOptions, origin: 'left', delay: 500 });
ScrollReveal().reveal('.scroll-l-2', { ...scrollOptions, origin: 'left', delay: 1000 });

ScrollReveal().reveal('.scroll-r', { ...scrollOptions, origin: 'right', delay: 500 });
ScrollReveal().reveal('.scroll-r-2', { ...scrollOptions, origin: 'right', delay: 1000 });