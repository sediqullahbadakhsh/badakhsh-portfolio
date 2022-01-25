const navSlide = () => {
    const burger = document.querySelector('.humberger-menu');
    const nav = document.querySelector('.primary-navigation');
    

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');

        burger.classList.toggle('toggle');
      
    });
    
}
navSlide();