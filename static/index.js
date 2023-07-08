const navLinks = document.querySelectorAll(".nav-bar a");
const header = document.querySelector(".nav-wrapper");
// let headerScroll = false;
// window.onscroll = function () {
//     if(window.scrollY  > (header.offsetHeight)) {
//         header.classList.add("nav-scrolled")
//         navLinks.forEach(function(link) {
//             link.style.color = "#FFFFFFCC";
//         })
//     }else{
//         header.classList.remove("nav-scrolled")
//         navLinks.forEach(function(link) {
//             link.style.color = "#404040CC";
//         })
//
//
//     }
//
// }

let prevScrollpos = window.scrollY;
window.onscroll = function() {
    let currentScrollPos = window.scrollY;
    if(window.scrollY  > (header.offsetHeight)) {
        header.classList.add("nav-scrolled");
        // header.style.backgroundColor = "var(--primary)";
        // navLinks.forEach(function(link) {
        //     link.style.color = "#FFFFFFCC";
        // })


    }else{
        // header.style.backgroundColor = "white";
        // navLinks.forEach(function(link) {
        //     link.style.color = "#404040CC";
        // })
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

    }
})