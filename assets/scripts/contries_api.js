export let ContriesAPI = {
	COUNTRIES_LIST_ELEMENT: document.querySelector("#countries-list"),
	LOADER: document.querySelector("#loader"),
	SetAllContries: function () {
		// Start
		// fetch("https://restcountries.com/v3.1/all")
		// 	.then((response) => response.json())
		// 	.then((data) => {
		// 		let v = true;
		// 		let count = 0;
		// 		data.forEach((country) => {
		// 			if (v) console.log(country);
		// 			v = false;
		// 			count += 1;
		// 			const LIST_ITEM = `<a href="" class="card shadow">
		// 			<img src="${country.flags.svg}" class="card-img-top" alt="${
		// 				country.flags.alt
		// 			}" />
		// 			<div class="card-body">
		// 				<h5 class="card-title">${country.name.common}</h5>
    //         <p class="card-text m-0">
		// 					<strong>Population: </strong>${country.population.toLocaleString("en-US")}
		// 				</p>
    //         <p class="card-text m-0">
		// 					<strong>Region: </strong>${country.region}
		// 				</p>
		// 				<p class="card-text m-0">
		// 					<strong>Capital: </strong>${country.capital}
		// 				</p>
		// 			</div>
		// 		</a>`;
		// 			this.COUNTRIES_LIST_ELEMENT.innerHTML += LIST_ITEM;
		// 		});
		// 		console.log(count);
		// 	})
		// 	.catch((error) => {
		// 		console.error("Erro:", error);
		// 	});
		// END
 

let isLoading = false;
const COUNTRIES_LIST_ELEMENT = document.querySelector("#countries-list");
const LOADER = document.querySelector("#loader");

// Function to load countries
async function loadCountries() {
  try {
    isLoading = true;
    const response = await fetch(`https://restcountries.com/v3.1/all`);
    const data = await response.json();

    // Create elements for each country and add them to the list
    data.forEach((country) => {
      const LIST_ITEM = `
        <div class="country">
          <h2>${country.name.common}</h2>
          <p>Population: ${country.population}</p>
          <p>Region: ${country.region}</p>
          <p>Capital: ${country.capital}</p>
        </div>
      `;
      COUNTRIES_LIST_ELEMENT.innerHTML += LIST_ITEM;
    });
  } catch (error) {
    console.error("Error loading countries:", error);
  } finally {
    isLoading = false;
  }
}

// Function to check if the user is near the end
function watchScroll() {
  if (isLoading) return;

  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.offsetHeight;

  if (scrollTop + windowHeight >= documentHeight - 200) {
    loadCountries();
  }
}

// Scroll event
window.addEventListener("scroll", watchScroll);

// Load initial countries
loadCountries();





	},
};
