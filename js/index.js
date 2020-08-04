burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.nav_list');
search = document.querySelector('.search');


burger.addEventListener('click',()=>{
    navList.classList.toggle('v_class_resp');
    search.classList.toggle('v_class_resp');
    navbar.classList.toggle('h_nav_resp');
})