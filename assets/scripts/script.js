// Imports
import { ContriesAPI } from './contries_api.js'
// Global variables
const BODY = document.querySelector('body');
// Dark mode toggle
const TOGGLE = document.querySelector(".dark-mode-toggle");
const MOON = document.querySelector('.moon')
TOGGLE.addEventListener("click", () => {
	if (BODY.classList.contains("dark-mode")) {
		document.querySelector("body").classList.toggle("dark-mode");
		MOON.setAttribute("name", "moon-outline");
	} else {
		document.querySelector("body").classList.toggle("dark-mode");
		MOON.setAttribute("name", "moon");
	}
});
// Search input
const searchField = document.querySelector(".search-field");
const searchInput = document.querySelector('.search-input');
searchField.addEventListener('input', searchFunc)
function searchFunc() {
  if(searchInput.value.length < 1) {
    searchField.classList.add('empty');
  } else {
    searchField.classList.remove('empty');
  }
}
// API
ContriesAPI.SetAllContries()