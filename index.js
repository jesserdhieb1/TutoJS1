//document.getElementById("count-el").textContent = 6

let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
function increment(){
    let count = parseInt(countEl.textContent, 10);
    count+=1;
    countEl.textContent = count;
}

function save(){
    saveEl.textContent+= countEl.textContent+" - ";
    countEl.textContent=0;
}