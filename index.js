//document.getElementById("count-el").innerText = 6

let count=document.getElementById("count-el").innerText;
function increment(){
count=parseInt(count, 10);
count+=1;
document.getElementById("count-el").innerText = count;
console.log(document.getElementById("count-el").innerText )
}
