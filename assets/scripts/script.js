// Dark mode toggle
const body = document.querySelector('body');
const toggle = document.querySelector(".dark-mode-toggle");
const moon = document.querySelector('.moon')
toggle.addEventListener("click", () => {
	if (body.classList.contains("dark-mode")) {
		document.querySelector("body").classList.toggle("dark-mode");
		moon.setAttribute("name", "moon-outline");
	} else {
		document.querySelector("body").classList.toggle("dark-mode");
		moon.setAttribute("name", "moon");
	}
});
