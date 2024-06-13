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