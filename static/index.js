const navLinks = document.querySelectorAll(".nav-bar a");
const header = document.querySelector(".nav-wrapper");

const projects = [
    {
        title : "Oasis" ,
        period:"2022-2023",
        link : "https://github.com/mictony6/oasis-mern",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan odio eu quam venenatis consectetur. Class leo.",
        image: "data:image/png;base64,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"
    },
    {
        title : "Oasis" ,
        period:"2022-2023",

        link : "https://github.com/mictony6/oasis-mern",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan odio eu quam venenatis consectetur. Class leo.",
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAAB4CAYAAADMtn8nAAAAAXNSR0IArs4c6QAABjNJREFUeF7t2k+I1GUYB/DXS2RkQXbs0iECCyQv0h8E+yN1jghtC+ywQZAE/sksEqPMtCA6CO0hoUyJzlEIJUh/8FIIJUSBHYryoIJCRQTFOzDL7OxvZq1nnYc3P3tbZ955nvm8z9ffv13y4bm//i5+CBBoUmCJADe5b5om0BMQYINAoGEBAW5487ROQIDNAIGGBQS44c3TOgEBNgMEGhYQ4IY3T+sEBNgMEGhYQIAb3jytExBgM0CgYQEBbnjztE5AgM0AgYYFBLjhzdM6AQE2AwQaFhDghjdP6wQE2AwQaFhAgBvePK0TEGAzQKBhAQFuePO0TkCAzQCBhgUEuOHN0zoBATYDBBoWEOCGN0/rBATYDBBoWECAG948rRMQYDNAoGEBAW5487ROQIDNAIGGBQS44c3TOgEBNgMEGhYQ4IY3T+sEBNgMEGhYQIAb3jytExBgM0CgYQEBbnjztE5AgM0AgYYFBLjhzdM6AQE2AwQaFhDghjdP6wQE2AwQaFhAgBvePK0TEGAzQKBhAQFuePO0TkCAzQCBhgUEuOHN0zoBATYDBBoWEOCGN0/rBATYDBBoWECAG948rRMQYDNAoGEBAW5487ROQIDNAIGGBQS44c3TOgEBnuAMHN73cjm4e2ev4qp71pVtM++WZdctn9fByeNflMP7Xprz+oWzZ8re6UfLV58c6b1/y8w7Ze1DGxa1+1r30/cPlundr5crrlw6+9nj+v7zj9/LzI7N5aMDM733T+3YVdZvfW5R+/JhowUEeELTUUNw5pefZ8Nx9IND5dsvP5sXln5Qa1v9gPdDcsvtd/VC23/P+q3PlxWr71iUb1DDu/X+NeWBjdNzelqo7/p6/amhHe5zURrzIWMFBHgCA9IVuPpv+7dtKo8880K54aab5xzt6i8nj38+G+CuI3L9D+DXH0/NO9r1a61Yfefsa3X9/i1Ple1vH5pTq9bpv//c6dNl1d33ld8unJ8N8EJ91/VvbX+6PLHnjdnPHXUUnwDzZVlCgJO2/afvv+sc/hPHjpaVa9bOOYXuOlp3hbr/VQY/+9rl1/dOvUcdrWtIfzjxdblt7b1l1FnBINHgZ58/e2beqX7X90oivizKCnDSNg+eetYW6unnwVd2lXVTG8twMLqOtjUo7736Ynly75ud19H9U9+rll1Tll697KKuSy8mwIN9dx1tR51ZJDH/78sKcMIW1xAMniLXFmp46k+9xh0+uv6XAHddSy/0VRcK8HDfAryQ6KV/XYAvvfGcCl3hrUfTIwcPlKlnd/bu/nYFePiG17hT6OFr265r366vPS7AXX139eAUerIDJcAT8u7foa3lhh/T1OC8Nv3YvE5uvHVl78ZT17XmqJtY/Q/pn+rW3wfvfo/7ul0BHtf3qOv4rkdRE2K+7MoI8IS2fPhxzLiyw0e2f/sYaXB9rVNvYt398NSCz427ArxQ3x4jTWiARpQR4An41yPVnsc3lFPfnJhXbd/Hx+Y9y438IUe/1oObNs8GdtxjpMGGhgN8MX37Q44JDNCYEgKc6686gZCAAIf4LCaQKyDAuf6qEwgJCHCIz2ICuQICnOuvOoGQgACH+CwmkCsgwLn+qhMICQhwiM9iArkCApzrrzqBkIAAh/gsJpArIMC5/qoTCAkIcIjPYgK5AgKc6686gZCAAIf4LCaQKyDAuf6qEwgJCHCIz2ICuQICnOuvOoGQgACH+CwmkCsgwLn+qhMICQhwiM9iArkCApzrrzqBkIAAh/gsJpArIMC5/qoTCAkIcIjPYgK5AgKc6686gZCAAIf4LCaQKyDAuf6qEwgJCHCIz2ICuQICnOuvOoGQgACH+CwmkCsgwLn+qhMICQhwiM9iArkCApzrrzqBkIAAh/gsJpArIMC5/qoTCAkIcIjPYgK5AgKc6686gZCAAIf4LCaQKyDAuf6qEwgJCHCIz2ICuQICnOuvOoGQgACH+CwmkCsgwLn+qhMICQhwiM9iArkCApzrrzqBkIAAh/gsJpArIMC5/qoTCAkIcIjPYgK5AgKc6686gZCAAIf4LCaQKyDAuf6qEwgJCHCIz2ICuQICnOuvOoGQgACH+CwmkCsgwLn+qhMICQhwiM9iArkC/wBYd/kuPBZ8ZAAAAABJRU5ErkJggg=="
    },
    {
        title : "Oasis" ,
        period:"2022-2023",

        link : "https://github.com/mictony6/oasis-mern",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan odio eu quam venenatis consectetur. Class leo.",
        image: "data:image/png;base64,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"
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
    if(window.scrollY  > (header.offsetHeight*0.5)) {
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

