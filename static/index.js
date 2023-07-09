const navLinks = document.querySelectorAll(".nav-bar a");
const header = document.querySelector(".nav-wrapper");

const projects = [
    {
        title : "Oasis" ,
        period:"2022-2023",
        link : "https://github.com/mictony6/oasis-mern",
        description: "Web forum application for women experiencing violence. Communicate with other victims and seek out and book consultation with therapists. Developed with Express.js and React frameworks.",
        image: "static/images/oasis.png",
    },
    {
        title : "3D Art Portfolio" ,
        period:"2021",
        link : "https://mictony.azurewebsites.net/",
        description: "Website made with Python Django for my 3d art portfolio where you can send requests for a commission or view a gallery of my sample works.",
        image: "static/images/art.png",

    },
    {
        title : "Snake Game" ,
        period:"2021",
        link : "https://github.com/mictony6/SnakeGame",
        description: "A snake-like game made with Java graphics library. Go thru five levels with different gimmicks and unique solutions.",
        image: "static/images/snake.png",
    },


]


//set up project list
const projectGrid = document.querySelector(".project-grid");
projects.forEach(project => {
    const element = document.createElement("div");
    element.classList.add("project-item");
    //makes each project item a clickable link
    element.onclick = function (){
        window.open(project.link, "_blank");
    }
    element.innerHTML = `
        <img src="${project.image}"/>
        <h4>${project.title}</h4>
        <p>${project.description}</p>
        <small>${project.period}</small>
`;

    projectGrid.appendChild(element);
})


let prevScrollPos = window.scrollY;
let prevTarget;
window.onscroll = function() {
// style nav bar when scrolling

    let currentScrollPos = window.scrollY;
    if(window.scrollY  > (header.offsetHeight*0.25)) {
        header.classList.add("nav-scrolled");
    }else{
        header.classList.remove("nav-scrolled");
    }

// makes nav bar go out of page when scrolling down
    if (prevScrollPos < currentScrollPos) {
        header.style.top = "-100%";
    } else {
        header.style.top = "-1px";
    }
    prevScrollPos = currentScrollPos;
}

// accents the section when the corresponding nav item is clicked
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

const socialLinks = document.querySelectorAll("#social-links img");
socialLinks.forEach(function (element){
    element.onclick = function(){
        window.open(element.dataset.link, "_blank");
    }
})

