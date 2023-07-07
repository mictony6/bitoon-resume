const navLinks = document.querySelectorAll(".nav-bar a");
const header = document.querySelector(".nav-wrapper");
let headerScroll = false;
window.onscroll = function (e) {
    if(window.scrollY  > (header.offsetHeight*2)) {
        header.style.backgroundColor = "var(--primary )";
        navLinks.forEach(function(link) {
            link.style.color = "#FFFFFFCC";
        })
    }else{
        header.style.backgroundColor = "white";
        navLinks.forEach(function(link) {
            link.style.color = "#404040CC";
        })


    }


}



navLinks.forEach(function(navElement){
    navElement.onclick = function (e) {
        e.preventDefault();
        const target = document.getElementById(navElement.dataset.element);
        target.scrollIntoView({behavior:'smooth'});

    }
})