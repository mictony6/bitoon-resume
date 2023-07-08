const navLinks = document.querySelectorAll(".nav-bar a");
const header = document.querySelector(".nav-wrapper");

let prevScrollpos = window.scrollY;
let prevTarget;

window.onscroll = function() {
    let currentScrollPos = window.scrollY;
    if(window.scrollY  > (header.offsetHeight)) {
        header.classList.add("nav-scrolled");
    }else{
        header.classList.remove("nav-scrolled");
    }


    if (prevScrollpos < currentScrollPos) {
        header.style.top = "-100%";
    } else {
        header.style.top = "0px";
    }
    prevScrollpos = currentScrollPos;
}


navLinks.forEach(function(navElement){
    navElement.onclick = function (e) {
        e.preventDefault();
        const target = document.getElementById(navElement.dataset.element);
        target.scrollIntoView({behavior:'smooth'});
        if (prevTarget){
            prevTarget.classList.remove("section-focused");
        }
        target.classList.add("section-focused");

        target.s
        prevTarget = target;

    }
})
