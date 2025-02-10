$('[data-swiper="wrapper"]').each(function () {
    const $currentSlider = $(this).find('[data-swiper="team-slider"]');
    const $paginationText = $(this).find('[data-swiper="pagination-text"]');
    const $paginationElement = $(this).find('[data-swiper="pagination"]');
    const $paginationBulletTemplate = $paginationElement.find('[data-template="bullet"]');

    new Swiper($currentSlider.get(0), {
        speed: 800,
        rewind: true,
        slideToClickedSlide: true,
        spaceBetween: 5,
        autoplay: {
            delay: 8000,
            disableOnInteraction: false,
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
        pagination: {
            clickable: true,
            el: $paginationElement.get(0),
            renderBullet: (bulletIndex, className)=> {
                $paginationBulletTemplate.addClass(className);
                $paginationBulletTemplate.find('[data-template="bullet-text"]').text($paginationText.eq(bulletIndex).text());
                return $paginationBulletTemplate.prop('outerHTML');
            },
        },
    });
})
