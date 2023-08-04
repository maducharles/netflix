let form = document.querySelector(".input-div")
let input = document.querySelector("#email");
let alert = document.querySelector(".alert")
let animate = document.querySelectorAll(".animate")
let animatel = document.querySelectorAll(".animatel")
let container = document.querySelectorAll(".question-list")
let answer = document.querySelectorAll(".answers")
//let btns = document.querySelectorAll(".plus")
console.log(answer)




// btns.forEach((btn) => {
//   btn.addEventListener("click",function(e) {
//     let check = e.currentTarget;
//   let element = e.currentTarget.parentElement.parentElement.parentElement;
//   console.log(check)

//   element.classList.toggle("show-text")
//   btns.forEach((btnn) => {
// if( .parentElement.parentElement.parentElement.classList.remove("show-text")
// }
    
//   })
  
  
  
//   })
// })




container.forEach((item) => {
  
  let btns = item.querySelector("button")
  btns.addEventListener("click", function() {
    item.classList.toggle("show-text")
    
  container.forEach((value) => {
    if (value !== item) {
      value.classList.remove("show-text")
    }
  })
})
  

})


window.addEventListener("scroll", function() {
  
  for (let i = 0; i < animate.length; i++) {
    let windowheight = window.innerHeight;
    let animatetop = animate[i].getBoundingClientRect().top;
    let animatepoint = 150;
    
    if (animatetop < windowheight - animatepoint) {
      animate[i].classList.add("show")
    } else {
      animate[i].classList.remove("show")
    }
  }

})


window.addEventListener("scroll", function() {
for (let i = 0; i < animatel.length; i++) {
    let windowheigh = window.innerHeight;
    let animateto = animatel[i].getBoundingClientRect().top;
    let animatepoin = 150;
    
    if (animateto < windowheigh - animatepoin) {
      animatel[i].classList.add("shon")
    }
  }
  
})




form.addEventListener("submit", function(e) {
  e.preventDefault();
  let value = input.value;
  if (value === "") {
    input.style.borderColor = "red";
    alert.innerHTML = "🔞 Email is required"
    alert.style.color = "red"
    setTimeout(function() {
      input.style.borderColor = "";
      alert.innerHTML = "";
    },1000)
  }
  else if(value) {
    input.style.borderColor = "green";
    alert.innerHTML = "";
  }
  
  
  if (value === "1" || value === "2") {
    input.style.borderColor = 'yellow';
   alert.innerHTML = "⚠️ sorry, something went wrong "
   alert.style.color = "yellow"
   
  }
  
  // setTimeout(function() {
  //     input.style.borderColor = "";
  //     alert.innerHTML = "";
  //   },1000)
    
    
    
    
    
    
    if (value!== "") {
      window.location.assign("step1.html ");
      alert.innerHTML = "input valid "
    }else {
      alert.innerHTML = "input invalid"
    }
  
})

