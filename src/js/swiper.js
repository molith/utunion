var mySwiper = new Swiper('.swiper-container', {
    // Default parameters
    centeredSlides: true,   
    loop: true,
    slidesPerView: 5,   
    spaceBetween: 40,
    setWrapperSize: true,
    effect: 'coverflow',
         grabCursor: true,
         coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },       
    
    // Responsive breakpoints   
    breakpoints: {  
   
      // when window width is <= 320px     
      320: {       
         slidesPerView: 1,
         spaceBetween: 10     
      },     
      // when window width is <= 480px     
      480: {       
         slidesPerView: 2,       
         spaceBetween: 20     
      },   
  
      // when window width is <= 640px     
      900: {
         slidesPerView: 4,       
         spaceBetween: 30     
      } 
  
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })