const body = document.querySelector('body');
// Dark mode toggle
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
// Search for a country
const searchField = document.querySelector(".search-field");
const searchInput = document.querySelector('.search-input');
searchField.addEventListener('input', SearchFunc)
function SearchFunc() {
  if(searchInput.value.length < 1) {
    searchField.classList.add('empty');
  } else {
    searchField.classList.remove('empty');
  }
}