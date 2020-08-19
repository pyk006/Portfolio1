//Funct select Elements

const selectElement = (s) => document.querySelector(s);
const navLinks = document.querySelectorAll(".nav-link")

//Open and Close navigation bar
selectElement(".burger-menu-icon").addEventListener("click", ()=>{
    selectElement(".nav-list").classList.toggle("active");

    navLinks.forEach((link, index) => {
        if (link.style.animation){
            link.style.animation = ""
        } else{
            link.style.animation = `navLinkAnimate 0.5s ease forwards ${ index/7 + 0.5}s`
        }
    })
})
