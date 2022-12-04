const skills = ["tortoisegit.svg", "mongodb.svg", "jquery.svg", "html5.svg", "git.svg", "dot.svg", "vim.svg", "apache.svg", "bash.svg", "python.svg", "kotlin.svg", "android.svg", "ubuntu.svg", "java.svg", "pandas.svg", "matlab.svg", "css3.svg", "kubernetes.svg", "amazonwebservices.svg", "nodejs.svg", "csharp.svg", "c.svg", "tomcat.svg", "javascript.svg", "react.svg", "mysql.svg", "debian.svg", "cplusplus.svg", "visualstudio.svg", "dotnetcore.svg", "gradle.svg", "docker.svg", "spring.svg"];
const center = Math.abs(skills.length/2)
const skillElements = []
let W;
let H;
const maxRad = (360 * (Math.PI/180));

let binaryBlocks = []
let background = document.getElementById("the-body")

$(document).ready(function(){

    let Width = window.innerWidth, Height = document.getElementById("the-body").offsetHeight
    console.log(Width, Height)
    W = $("#skill-center1").innerWidth();
    H = $("#skill-center1").innerHeight();

    $(window).on('scroll', (event)=> {
        checkposition();
    });

    function createCube(){

        let faces = []
       const left =  document.createElement("div")
       left.classList.add("left")
       faces.push(left)

       const right =  document.createElement("div")
       right.classList.add("right")
       faces.push(right)

       const top =  document.createElement("div")
       top.classList.add("top")
       faces.push(top)

       const bottom =  document.createElement("div")
       bottom.classList.add("bottom")
       faces.push(bottom)

       const front =  document.createElement("div")
       front.classList.add("front")
       faces.push(front)

       const back =  document.createElement("div")
       back.classList.add("back")
       faces.push(back)

       let n = 0 
       faces.forEach(face => {
        face.textContent = (n = getRandomNumber(2))===0 ? "o" : n
       })

       const cuber = document.createElement("div")

       cuber.classList.add("cuber")
       cuber.appendChild(left)
       cuber.appendChild(right)
       cuber.appendChild(top)
       cuber.appendChild(bottom)
       cuber.appendChild(front)
       cuber.appendChild(back)

       return cuber;
    }

    function launchObstacles(obstacles, container, w, h){
        
        for(let i=0;i<(w/10)-10;i++){
            let obstacle = document.createElement("div")
            obstacle.classList.add("binary-container")
            obstacle.appendChild(createCube())

            obstacle.setAttribute("id", `block${i}`)
            obstacle.style.zIndex = '1'
            obstacle.style.left = `${i*10}px`
            obstacles.push({id: `block${i}`, top: 0, speed: 1+Math.floor(Math.random()*100)%20})
            container.append(obstacle)
        }
    }

    launchObstacles(binaryBlocks, background, Width, Height)

    let binaryInterval = setInterval(()=>{
        binaryBlocks.forEach((block) => {
            document.getElementById(block.id).style.top = (block.top%Height*0.7)+"px"
            block.top += block.speed
        })
    },100)

    let theta = 0;
    skills.slice(0,center).forEach(skill => {
        let imagewrapper = document.createElement("div");
        imagewrapper.setAttribute("class", "skills")
        skillElements.push({el: imagewrapper, rad: toRadians(theta)});
        $(imagewrapper).append(`<img alt="${skill}" src="gallery/icons/${skill}" />`)
        $("#skill-center1").append(imagewrapper)
        theta+=(360/skills.slice(0, center).length);
    })

    theta = 0;
    skills.slice(center).forEach(skill => {
        let imagewrapper = document.createElement("div");
        imagewrapper.setAttribute("class", "skills")
        skillElements.push({el: imagewrapper, rad: toRadians(theta)});
       $(imagewrapper).append(`<img alt="${skill}" src="gallery/icons/${skill}" />`)
        $("#skill-center2").append(imagewrapper)
        theta+=(360/skills.slice(center).length);
    })

    window.addEventListener("resize", (event) => {
        W = $("#skill-center1").innerWidth();
        H = $("#skill-center1").innerHeight();
    })

    $(".nav-items").addClass("linear-color-text-orangered-white")
    $("h1").addClass("linear-color-text-orangered-white")

    let projects = document.querySelectorAll(".projects-color-wrap");
    
    projects.forEach(element => {
        element.classList.add("linear-color-text-orangered-aqua")
        element.addEventListener("mouseenter", (event) => {
            
        })
    })

    let content = document.querySelectorAll(".content")
    content.forEach(element => {
        let img = document.createElement("img")
        img.setAttribute("src", "https://cdn.pixabay.com/photo/2014/04/02/16/23/chain-307145_960_720.png")
        img.classList.add("view-project-link")
        element.addEventListener('click', event => {
            window.location = "https://github.com/erick-sudo"
        })
        element.appendChild(img)
    })

    rotateElements(skillElements.slice(0,center), W<H ? W*0.3 : H/2, W*0.4, H*0.4)
    rotateElements(skillElements.slice(center), W<H ? W*0.3 : H/2, W*0.4, H*0.4)

    let interval = setInterval(() => {
        rotateElements(skillElements.slice(0,center), W<H ? W*0.5 : H/2, W*0.4, H*0.4, 0)
        rotateElements(skillElements.slice(center), W<H ? W*0.5 : H/2, W*0.4, H*0.4, 1)
    }, 10);

    Array.from(document.querySelectorAll(".projects")).map(element => {
        
    })
});

function getRandomColor(){
    return `rgb(${(Math.random()*1000)%255},${(Math.random()*1000)%255},${(Math.random()*1000)%255})`
}

function toRadians(theta){
    return theta*(Math.PI/180)
}

function rotateElements(elements, radius, x, y, dir) {
    radius = radius*0.9
    let w = Math.abs((y + (radius * Math.sin(toRadians(0)))) - (y + (radius * Math.sin(toRadians(360/center)))))*0.8
    elements.map(element => {
        element.el.style.left = (x + (radius * Math.cos(element.rad)))+"px"
        element.el.style.top = (y + (radius * Math.sin(element.rad)))+"px"
        element.el.style.width = (w)+"px"
        dir===0 ? element.rad+=0.01 : element.rad-=0.01
    })
}

function getRandomNumber(mod) {
    return Math.floor(Math.random()*10)%mod
}

function checkposition(){
    let sections = document.querySelectorAll("section");
    let windowHeight = window.innerHeight;
    for(let section of sections) {
        if((section.getBoundingClientRect().top - windowHeight) < 0) {
            section.classList.remove('fade-out-element');
            section.classList.add('fade-in-element');
        }
        if(section.getBoundingClientRect().bottom < 0){
            section.classList.remove('fade-in-element');
            section.classList.add('fade-out-element');
        }
        if(section.getBoundingClientRect().top > windowHeight){
            section.classList.remove('fade-in-element');
            section.classList.add('fade-out-element');
        }
    }
}