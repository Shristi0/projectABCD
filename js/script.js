const myFunction = () => {

    $(function () {
        $(document).scroll(function () {
            var $nav = $(".navbar");
            $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
        });
    });
    $(document).ready(function () {
        $(".navbar").on("click", function () {
            $(".navbar").toggleClass("active");
        });
    });
    $('.bannerRight__slider').owlCarousel({
        loop: true,
        margin: 32,
        nav: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });
    $('.brand__wrapper').owlCarousel({
        loop: true,
        margin: 32,
        nav: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
    $('.testimonial__wrapper').owlCarousel({
        loop: true,
        margin: 32,
        nav: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    });
    $('.blogs__slider').owlCarousel({
        loop: true,
        margin: 32,
        nav: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    });
}

const animation = () => {
    AOS.init({
        duration: 1500,
    })
}

const functions = [myFunction, animation];

for (let i = 0; i < functions.length; i++) {
    try {
        functions[i]();
    }
    catch (error) { }
}
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    slides.style.transform = `translateX(${-currentSlide * 100}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function previousSlide() {
    showSlide(currentSlide - 1);
}

// Auto-slide every 3 seconds
setInterval(nextSlide, 3000);
