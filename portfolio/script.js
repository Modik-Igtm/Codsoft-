const texts = [
    "Aspiring AI Engineer",
    "Full Stack Developer",
    "DSA Enthusiast",
    "Problem Solver"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

    if(count === texts.length){
        count = 0;
    }

    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if(letter.length === currentText.length){
        count++;
        index = 0;

        setTimeout(type,1500);
    }
    else{
        setTimeout(type,100);
    }

})();
particlesJS("particles-js",{
  particles:{
    number:{value:120},
    size:{value:3},
    move:{speed:2},
    color:{value:"#38BDF8"}
  }
});
const counters =
document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update = ()=>{

const target =
+counter.getAttribute("data-target");

const count =
+counter.innerText;

const increment =
target/100;

if(count < target){

counter.innerText =
Math.ceil(count + increment);

setTimeout(update,20);

}else{

counter.innerText = target+"+";

}

};

update();

});
const observer =
new IntersectionObserver(
entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add(
"show"
);

}

});

});

document
.querySelectorAll(".hidden")
.forEach(el=>
observer.observe(el)
);