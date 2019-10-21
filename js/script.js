'use strict';
window.addEventListener('DOMContentLoaded', function () {

    $('body,html').animate({
        scrollTop: 0
    }, 100);







    

    let scrollBottom = document.querySelector('.scrollup');
    // appearing Menu on Scroll
    window.addEventListener('scroll', backgroundMenu, false);

    function backgroundMenu() {
        let heigth = window.pageYOffset,
            bodyWrapper = document.querySelector('#header');

        if (heigth > 0) {
            bodyWrapper.classList.add('scrolling');
            scrollBottom.style.cssText = `visibility: visible`;
        } else {
            bodyWrapper.classList.remove('scrolling');
            scrollBottom.style.cssText = `visibility: hidden`;
        }


    }
    backgroundMenu();


    // toTOP scroll Button
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() != 0) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
        });
        $('#toTop').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
         });
    });




    //main slider

    let slideIndex = 1,
        sliders = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.arrow-left'),
        next = document.querySelector('.arrow-right'),
        dots = document.querySelectorAll('.dot'),
        dotWrap = document.querySelector('.slider-dots');





    function showSlide(n) { //показ слайда, прячет остальные, меняет цвет активной точки, закольцовывает показ по кругу

        if (n > sliders.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = sliders.length;
        }
        sliders.forEach((item) => item.style.display = 'none');

        dots.forEach((item) => item.classList.remove('dot-active'));
        sliders[slideIndex - 1].style.display = 'block';

        dots[slideIndex - 1].classList.add('dot-active');
    }

    function changeSlide(n) {
        showSlide(slideIndex += n); // Переход к следующему
    }

    function currentSlide(n) {
        showSlide(slideIndex = n); //Показ нужного слайда
    }

    prev.addEventListener('click', () => changeSlide(-1));
    next.addEventListener('click', () => changeSlide(1));

    showSlide(slideIndex);




    dotWrap.addEventListener('click', (e) => {
        for (let i = 0; i < sliders.length + 1; i++) {
            if (e.target.classList.contains('dot') && e.target == dots[i - 1]) {
                currentSlide(i); //Переход при нажатии на точки
            }
        }
    });


    // Автоматическое листание слайдов пока они видимы
    function autoslideChange() {
        let timerId = setTimeout(autoslideChange,7000);
        changeSlide(1);
        if ($(window).scrollTop() > $("div.slider-block").height()) {
            clearTimeout(timerId);
            console.log('стоп');
        }
    }

    window.addEventListener('load', () => {
        if ($(window).scrollTop() < $("div.slider-block").height()) {
            autoslideChange();
        } 
    });


    // Возобновление автоматической прокрутки слайдов при подъеме страницы наверх
    window.addEventListener('scroll', () => {
        if ($(window).scrollTop() == 0) {
            setTimeout(autoslideChange, 1000);
        } 
    });







// OWL Carusel main_projects

$(document).ready(function(){
    $("#caruselMainProjects").owlCarousel({
        loop: true,
        dots: true,
        responsive:{
            0:{
                items:1,
                dots: true,
                autoWidth: true
            },
            600:{
                items:2
            },
            768:{
                items:3
            },
            1100:{
                items:4
            }
        }
    });
  });










});