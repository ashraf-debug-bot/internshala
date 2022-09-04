function navSlide() {
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('.nav-link');
 

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

   
     //burger animation 
     burger.classList.toggle('toggle');

  });



}

navSlide();  

