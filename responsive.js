burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navlist = document.querySelector('.nav-list');
navright = document.querySelector('.right-nav');

burger.addEventListener('click', ()=>{
    navlist.classList.toggle('v-class-res');
    navright.classList.toggle('v-class-res');
   
    navbar.classList.toggle('h-nav-res');
})