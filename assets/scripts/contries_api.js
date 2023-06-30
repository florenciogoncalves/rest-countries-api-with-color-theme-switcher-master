export  let ContriesAPI = {
  COUNTRIES_LIST_ELEMENT: document.querySelector('#countries-list'),
	SetAllContries: function () {
		fetch("https://restcountries.com/v3.1/all")
			.then((response) => response.json())
			.then((data) => {
      let v = true
      let count = 0
				data.forEach((country) => {
          if (v) console.log(country)
          v = false
          count += 1
					const LIST_ITEM = `<a href="" class="card shadow">
					<img src="${country.flags.svg}" class="card-img-top" alt="${country.flags.alt}" />
					<div class="card-body">
						<h5 class="card-title">${country.name.common}</h5>
            <p class="card-text m-0">
							<strong>Population: </strong>${country.population.toLocaleString('en-US')}
						</p>
            <p class="card-text m-0">
							<strong>Region: </strong>${country.region}
						</p>
						<p class="card-text m-0">
							<strong>Capital: </strong>${country.capital}
						</p>
					</div>
				</a>`;
					this.COUNTRIES_LIST_ELEMENT.innerHTML += LIST_ITEM;
				});
        console.log(count)
			})
			.catch((error) => {
				console.error("Erro:", error);
			});
	},
};
