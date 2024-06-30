
let countEl = document.getElementById("count");

let count = 0;

function increment(){
    count++;
    countEl.innerText = count;
}

let saveEl = document.getElementById("save-el");

function save(){
    console.log(count)
    // saveEl.innerText += count + " - "
    saveEl.textContent += count + " - ";
    count = -1; 
    increment()
}