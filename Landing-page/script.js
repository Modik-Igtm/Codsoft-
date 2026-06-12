

const observer = new IntersectionObserver(
(entries) => {
    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });
},
{
    threshold:0.15
});

document.querySelectorAll("section").forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});




window.addEventListener("scroll", () => {

    const navbar =
    document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.background =
        "rgba(15,23,42,0.95)";

        navbar.style.boxShadow =
        "0 5px 20px rgba(0,0,0,0.3)";

    }
    else{

        navbar.style.background =
        "rgba(15,23,42,0.7)";

        navbar.style.boxShadow = "none";
    }
});




const counters =
document.querySelectorAll(".stats h1");

counters.forEach(counter => {

    let start = 0;

    const target =
    parseInt(counter.innerText);

    const updateCounter = () => {

        if(start < target){

            start += Math.ceil(target/80);

            counter.innerText = start + "+";

            setTimeout(updateCounter,25);

        }
        else{

            counter.innerText =
            target + "+";
        }
    };

    updateCounter();

});



window.addEventListener("mousemove",
(e)=>{

    const image =
    document.querySelector(".hero-image img");

    let x =
    (window.innerWidth/2 - e.pageX)/40;

    let y =
    (window.innerHeight/2 - e.pageY)/40;

    image.style.transform =
    `translate(${x}px,${y}px)`;
});




const form =
document.querySelector("form");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    const button =
    form.querySelector("button");

    button.innerText =
    "Message Sent ✓";

    button.style.background =
    "#10b981";

    setTimeout(()=>{

        button.innerText =
        "Send Message";

        button.style.background =
        "#38bdf8";

    },3000);

    form.reset();

});


const text =
"AI Automation • Cloud Solutions • Web Development";

let i = 0;

function typing(){

    if(i < text.length){

        document.getElementById("typing")
        .innerHTML += text.charAt(i);

        i++;

        setTimeout(typing,70);
    }
}

if(document.getElementById("typing")){
    typing();
}