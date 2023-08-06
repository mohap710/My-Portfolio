// navbar animation
const nav = document.querySelector("nav")
const main = document.querySelector("main")
console.log(main);
window.addEventListener("scroll", () => {
	window.scrollY > 25 ?
		nav.classList.add("colored-nav") :
		nav.classList.remove("colored-nav")
})
// mobile menu
const menubtn = document.querySelector(".menu-btn")

menubtn.addEventListener("click", () => {
	nav.classList.toggle("menu-opened")
	if (nav.classList.contains("menu-opened")) {
		menubtn.style.position = "fixed"
		menubtn.style.right = "55%"
		main.style.marginLeft = "60vw"
	}
	else {
		main.style.marginLeft = "0"
		menubtn.style.position = "initial"
		menubtn.style.right = "unset"
	}
})