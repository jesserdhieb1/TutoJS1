//document.getElementById("count-el").innerText = 6


function increment(){
let count=document.getElementById("count-el").innerText;
count=parseInt(count, 10);
count+=1;
document.getElementById("count-el").innerText = count;
console.log(document.getElementById("count-el").innerText )
}
