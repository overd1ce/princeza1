// show to top button
const btn = document.getElementById("to-top");
window.onscroll = function() {showToTop()};
function showToTop() {
    if(document.body.scrollTop > 150 || document.documentElement.scrollTop > 150){
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

const button = document.getElementById("nav-menu");
const menu = document.getElementById("nav-menu-link");
const menuClose = document.getElementById("close-menu");
const navList = document.getElementById("nav-menu-link-every");

const showMenu = () => {
    menu.style.display = "block";
    menuClose.style.display = "flex";
    button.style.display = "none";
    navList.style.flexDirection = "column";
}
const closeMenu = () => {
    menu.style.display = "none";
    menuClose.style.display = "none";
    button.style.display = "block";
    
}

button.addEventListener('click', showMenu);
menuClose.addEventListener('click', closeMenu);