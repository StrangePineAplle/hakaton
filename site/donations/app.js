const cities = [];

    const donationTypeSelect = document.getElementById('donation-type');
    const donationPlaceSelect = document.getElementById('donation-place');
    const citySelect = document.getElementById('city-select');

    donationPlaceSelect.addEventListener('change', () => {
      if (donationPlaceSelect.value === 'выездная акция') {
        citySelect.style.display = 'none';
      } else {
        citySelect.style.display = 'block';
      }
    });

    const citiesSelect = document.getElementById('cit');

    fetch('https://hackaton.donorsearch.org/api/cities/')
      .then(response => response.json())
      .then(data => {
        data.results.forEach((city) => {
          cities.push(city.title);
        });

        cities.forEach((city) => {
          const option = document.createElement('option');
          option.value = city;
          option.textContent = city;
          citiesSelect.appendChild(option);
        });
      });