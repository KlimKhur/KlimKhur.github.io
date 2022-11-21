new Swiper(".image_slider",{
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable:true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 2,
    spaceBetween: 10,
    breakpoints: {
        480: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        920: {
            slidesPerView: 4,
            spaceBetween: 15
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    }
})
