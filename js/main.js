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
	// nav.classList.contains("menu-opened") ?
	// 	main.style.marginLeft = "45vw" :
	// 	main.style.marginLeft = "0"
})