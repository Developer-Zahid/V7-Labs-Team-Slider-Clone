new Swiper('[data-swiper="team-slider"]', {
    // effect: "fade",
    rewind: true,
    // autoplay: {
    //     delay: 8000,
    //     disableOnInteraction: false,
    // },
    // keyboard: {
    //     enabled: true,
    //     onlyInViewport: true,
    // },
    pagination: {
        clickable: true,
        el: '[data-swiper="pagination"]',
        renderBullet: function (index, className) {
            // $(".carousel_pagination_btn").eq(index).addClass(className);
            // return $(".carousel_pagination_btn")[index].outerHTML;

            const template = `<button class="pagination_btn ${className}">
                    <span class="pagination_btn_dot"></span>
                    <span class="pagination_btn_text">User Name ${index}</span>
                </button>`

            return template;
        },
    },
    // on: {
    //     realIndexChange: function (swiper) {
    //     $(".carousel_background_fill").css(
    //         "color",
    //         $(swiper.pagination.bullets[swiper.realIndex]).data(
    //         "shape-color"
    //         )
    //     );
    //     },
    // },
});