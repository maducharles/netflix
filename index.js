const form = document.querySelector(".input-div");
const input = document.getElementById("email");

console.log(form)
let fig = "";

// form.addEventListener("submit", function(e) {
//     e.preventDefault();
//     let value = input.value;
// console.log(value)

//     if (value === "") {
//         input.style.borderColor = "red";
//     }
// })

form.addEventListener("submit", function(e) {
e.preventDefault();
 fig = input.value;
console.log(fig);
})