const multiStep = document.querySelector("[data-multi]");
const step = [...document.querySelectorAll("[data-step]")]


let indexstep = step.findIndex((step) => {
 return step.classList.contains("active");
})

let currentstep = 0;
let incrementor;

if(indexstep < 0) {
  step[currentstep].classList.add("active")
}


multiStep.addEventListener("click",function(e) {
  e.preventDefault()
if (e.target.matches("[data-next]")) {
  currentstep += 1;
} 
else {
  return;
}

const card = document.querySelector(".card")
let cards = [...card.querySelectorAll(".inputs")]
console.log(cards)
let alert = card.querySelector(".alert");
let alert1 = card.querySelector(".alert1");



let verification = cards.every((card) => {
  return card.reportValidity();
  
})
console.log(verification)

if (verification === true) {
alert.innerHTML = "validated Email";
showCurrentstep();
}else { 
  return;
}

 })
  
  



//if (cardvalidation) {
//     console.log("u are learning ")
//     // currentstep += incrementor;
//     // card.style.borderColor = "green";
//     // alert.innerHTML = "validated Email";
//   } else {
  
// showCurrentstep();



// console.log(incrementor)
// card.style.borderColor = "red";
// alert.innerHTML = "input your Email";
// alert.style.borderColor = "red";
// alert.style.color = "red";


  
//   if(checked) {
//   currentstep += incrementor
//     showCurrentstep()
//   }
// showCurrentstep();
// console.log(e.target.matches("[data-next]"))



function showCurrentstep() {
  step.forEach((item,index) => {
  item.classList.toggle("active");
  console.log(index);
  })
}

 
//if (e.target.matches("[data-next]")) {
//     currentstep += 1;
//   }
//   let check = [...step.querySelectorAll("input")];
//   console.log(check)
// let checked = check.every((items) => {
//   items.reportvalidity();

const listbtns = document.querySelector(".listbtn") 
listbtns.addEventListener("click",function(e) {
  window.location.assign("Tvshow.html");
})