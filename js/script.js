const header = document.querySelector('.section-header');
const mainNavigation = document.getElementById('main-navigation');


document.querySelector('.faq-accordion').addEventListener('click',(e)=>{
    if(e.target.closest('.faq-accordion__item')){
        e.target.closest('.faq-accordion__item').classList.toggle('faq-accordion__item--active') 
    }
});




document.querySelector('.btn-burger').addEventListener('click',()=>{
    

    header.classList.toggle('section-header--active-nav');

    if(header.classList.contains('section-header--active-nav')){
        hideScroll();
    } else {
        showScroll();
    }


});


//ScrollFunctions
const hideScroll = () =>{
    const scrollWidth = `${getScrollbarWidth()}px`;

    document.body.style.paddingRight = scrollWidth;
    document.body.style.overflow = 'hidden';

    mainNavigation.style.paddingRight = scrollWidth;
};

const showScroll = () =>{
    document.body.style.paddingRight = '';
    document.body.style.overflow = 'visible';   

    mainNavigation.style.paddingRight = '';
}

const resetNav = () =>{
    header.classList.remove('section-header--active-nav');
    showScroll();
}

window.addEventListener('resize', resetNav);

const getScrollbarWidth = () =>{
    const outer = document.createElement('div');

    outer.style.position = 'absolute';
    outer.style.top = '-9999px';
    outer.style.width = '50px';
    outer.style.height = '50px';
    outer.style.overflow = 'scroll';
    outer.style.visibility = 'hidden';

    document.body.appendChild(outer);
    const scrollbarWidth = outer.offsetWidth - outer.clientWidth;
    document.body.removeChild(outer);

    return scrollbarWidth;
}


    new Swiper('.section-hero-image', {
    
    loop: true,
  
    
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
  
    
  });

    new Swiper('.slider-blog-container', {
    
    loop: true,
  
    
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
  
   
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
});

    new Swiper('.slider-quotes-container', {
  
    loop: true,
    pagination: {
      el: '.section-quotes .dots',
      clickable:true,
    },
  
  });