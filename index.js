const mobile_nav = document.querySelector('.navbar__mobile');
const nav_header = document.querySelector('.navbar__desktop');
const toggleNavbar =()=>{
    nav_header.classList.toggle("active");
}
mobile_nav.addEventListener("click", ()=> toggleNavbar());