const display = document.getElementById("display");

function append(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0,-1);
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = "Error";
    }
}
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.textContent = "☀️ Light Mode";
    } else {
        themeBtn.textContent = "🌙 Dark Mode";
    }
});
document.addEventListener("keydown", (event) => {

    if("0123456789+-*/.%".includes(event.key)){
        append(event.key);
    }

    if(event.key === "Enter"){
        calculate();
    }

    if(event.key === "Backspace"){
        deleteLast();
    }

    if(event.key === "Escape"){
        clearDisplay();
    }
});