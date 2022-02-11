let width = document.querySelector("#width");
let height = document.querySelector("#height")
let radius = document.querySelector("#radius")
let bg = document.querySelector("#bg")
let btn = document.querySelector(".btn");
let box = document.getElementById("box");

console.log(width);
btn.addEventListener("click" , ()=>{
box.style.width = `${width.value}px`;
box.style.height = `${height.value}px`;
box.style.borderRadius = `${radius.value}px`;
box.style.background =`#${bg.value}`;
})