const navSlide = () => {
    const burger = document.querySelector('.humberger-menu');
    const nav = document.querySelector('.primary-navigation');
    // const navActiv = document.querySelector('.nav-active');

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');
    });
    
}
navSlide();