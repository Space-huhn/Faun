'use strict'
$(window).ready(function () {
    $(".header-burger").click(function () {
        $(".header-burger, .header-menu").toggleClass("activ");
    });
});
$(document).ready(function () {
    $('.news-slider-top__video').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        infinite: true,
        autoplay: true,
        dots: true,
        asNavFor: '.news-slider-bottom',
    });
    $('.news-slider-bottom').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.news-slider-top__video',
        dots: false,
        arrows: false,
        centerMode: false,
        focusOnSelect: true,
        useTransform: false,
    });
});

let playBottom = document.querySelector('.play-button');
let sliderBottom = document.querySelector('.news-slider-top__video');
let video = sliderBottom.querySelectorAll('video');
playBottom.addEventListener('click', playSlider);
function playSlider() {
    playBottom.classList.toggle('active')
    video.forEach((element) => {
        if (element.paused) {
            element.play();

        } else {
            element.pause();
        }
    });
}