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




    





// OWL Carusel main_projects

$(document).ready(function(){
    $("#caruselSecondProjects").owlCarousel({
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
    //Привязываем свои кнопки к owl-carusel
	$(".project-arrow-right").click(function(){
        $("#caruselSecondProjects").trigger("next.owl.carousel");
	});
	$(".project-arrow-left").click(function(){
        $("#caruselSecondProjects").trigger("prev.owl.carousel");
	});
  });






// Модуль показывающий табы. В CSS необходимы классы 'show' и 'hide', меняющие параметр: display. В аргументы помещаются название классов пунктов меню, родительского блока меню и самих табов.
let tabContentFromMenu = function(infoHeaderTab, infoHeader, infoTabContent){

    let info = document.querySelector('.' + infoHeader),
        tab = document.querySelectorAll('.'+ infoHeaderTab),
        article = document.querySelector('.main_project_wrap_article'),
        tabContent = document.querySelectorAll('.' + infoTabContent);

    //фуекция скрывающая контент, начиная с блока (а)
        function hideTabContent(a){
          
          for (let i = a; i < tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
          }
        };
    
        hideTabContent (1);
    //функция показывающая контент блока (b)
        function showTabContent(b){
          if (tabContent[b].classList.contains('hide')){
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
          };
        };
    
        //Обработчик по клику скрывает все блоки и показывает тот на картинку которого которого кликнули
        

        info.addEventListener('click', function (e) {
                    let target = e.target;
                    article.classList.add('hide');//скрыть абзац
                    tab = document.querySelectorAll('.' + infoHeaderTab);
                    if (target.tagName == 'IMG' || target.tagName == 'SPAN') {

                        for (let i = 0; i < tab.length; i++) {
                            let images = [],
                                spans = [];
                            images[i] = tab[i].querySelector('img');
                            spans[i] = tab[i].querySelector('span');
                            if (images[i] == target || spans[i] == target) {
                                hideTabContent(0);
                                if (i >= 0 && i < 6) {
                                    showTabContent(i + 6);

                                } else if (i >= 6 && i < 18) {

                                    showTabContent(i - 6);
                                } else {

                                    showTabContent(i - 18);
                                }

                                break;
                            };
                        }




                    };


  

})










    };
  

  
  
  //Вызывает модуль с указанием селекторов
   tabContentFromMenu('info-header-tab', 'info-header', 'info-tab-content');







   //   OffCanvas-Menu



$('#menu_btn').click(function () {
    $('#offcanvas-menu').slideToggle("600");
  });
  
  // ЗАкрытие бокового мобильног меню при нажатии на крестик
  $('#offcanvasClose').click(function () {
    $('#offcanvas-menu').slideToggle("600");
  });
  
  
  
  
  // ЗАкрытие бокового мобильног меню при нажатии на ссылку
  let offcanvasMenuList = document.querySelector('.nav-menu'),
  offcanvasMenu = document.querySelector('#offcanvas-menu');
  offcanvasMenuList.addEventListener('click', (e) => {
    let target = e.target;
    if (target && target.classList.contains('menu-itema')) {
      offcanvasMenu.style.display = 'none';
       
    }
  });




//   PopupMenu


let overlay = document.querySelector('.overlay'),
close = document.querySelector('.mfp-close');



// Открыть Модальное при нажатии на любую кнопку
let info = document.querySelector('.body-wrapper');

info.addEventListener('click', (e) => {
  let target = e.target;
  if (target && target.classList.contains('form-btn')) {
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden'; //запрет проктутки при открытом модальном окне
  }
});


// Закрыть модальное окно, разблокировать прокрутку
close.addEventListener('click', () => {
overlay.style.display = 'none';
document.body.style.overflow = '';
});

















});