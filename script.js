let navLinks = document.querySelectorAll("a")

navLinks.forEach(e=>e.addEventListener("onmouseover", backgroundClr))
  

function backgroundClr(){
  this.style.backgroundColor = "green"
}