export const initSlider = () => {
    // слайдер "Отзывы"
    const feedback = document.querySelector('.feedback');
    if (feedback) {
        const feedback = new Swiper('.feedback', {
            loop: true,
            spaceBetween: 30,
            breakpoints: {
                374: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                767: {
                    slidesPerView: 2,
                },
                1023: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            },

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            pagination: {
                el: '.swiper-pagination-feedback',
                type: 'bullets',
                clickable: true
            },
        });
    }


    // слайдер галереи на главной странице
    const categorySlider = document.querySelector('.gallery-swiper');
    let breakpoint = window.matchMedia('(min-width:768px)');

    if (categorySlider) {
        let swiper1;
        const breakpointChecker = function () {
            if (breakpoint.matches === true) {

                if (swiper1 !== undefined) {
                    swiper1.destroy(true, true);
                } return;

            } else if (breakpoint.matches === false) {
                return initCategorySlider();
            }
        };
        const initCategorySlider = function () {
            swiper1 = new Swiper(categorySlider, {
                // autoplay: {
                //     delay: 3000
                // },
                // speed: 3000,
                loop: true,
                // effect: "fade",
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                    },

                    425: {
                        slidesPerView: 1.5,
                        spaceBetween: 30,
                    },

                    767: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true
                },

            });
        }

        breakpoint.addEventListener('change', breakpointChecker);
        breakpointChecker()
    }
}