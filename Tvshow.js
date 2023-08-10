const toggle = document.querySelector(".icon")

toggle.addEventListener("click", function(e) {
e.currentTarget.parentElement.classList.toggle("active");
})