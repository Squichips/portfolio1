
const menuBtn = document.querySelector(".menu-btn");

let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

const menuHamburger = document.querySelector(".menu-btn")
const navLinks = document.querySelector(".content-nav")

menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
})









  
