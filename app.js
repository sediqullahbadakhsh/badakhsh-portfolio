const navSlide = () => {
    const burger = document.querySelector('.humberger-menu');
    const nav = document.querySelector('.primary-navigation');
    const logo = document.querySelector('.logo a');
    

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');
        nav.style.position = 'fixed'
        logo.style.display = 'none'

        burger.classList.toggle('toggle');
      
    });
    
}
navSlide();