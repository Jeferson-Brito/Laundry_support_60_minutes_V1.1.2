(function(){
    var $body = document.querySelector('body');
    $body.classList.remove('no-js')
    $body.classList.add('js')
    
        
    var menu = new Menu({
        container: '.header__nav',
        toggleBtn: '.header__btnMenu',
        widthEnabled: 1024 
    })
    
    var carouselImgs = new Carousel({
        container: '.laptop-slider .slideshow',
        itens: 'figure',
        btnPrev: '.prev',
        btnNext: '.next'
    })
    
    var carouselQuotes = new Carousel({
        container: '.quote-slideshow',
        itens: 'figure',
        btnPrev: '.prev',
        btnNext: '.next'
    })
})()

document.addEventListener("DOMContentLoaded", function() {
    var popupTrigger = document.querySelector(".popup-trigger");
    var popupContainer = document.querySelector(".popup-container");
    var isOpen = false;
  
    popupTrigger.addEventListener("click", function() {
      if (isOpen) {
        popupContainer.style.display = "none";
        isOpen = false;
      } else {
        popupContainer.style.display = "block";
        isOpen = true;
      }
    });
  
    document.addEventListener("click", function(event) {
      if (!popupContainer.contains(event.target) && !popupTrigger.contains(event.target)) {
        popupContainer.style.display = "none";
        isOpen = false;
      }
    });
  });
  
