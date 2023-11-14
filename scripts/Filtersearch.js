
  const parkTypesArray = [
    "National Park",
    "National Monument",
    "Recreation Area",
    "Scenic Trail",
    "Battlefield",
    "Historic",
    "Memorial",
    "Preserve",
    "Island",
    "River",
    "Seashore",
    "Trail",
    "Parkway"
  ];


const nationalParksArray = [
    // Your national parks data here...
  ];

  function filterByParkType() {
    const selectedParkType = document.getElementById('parkTypes').value;

    const filteredParks = nationalParksArray.filter(park =>
      selectedParkType ? parkTypesArray.includes(selectedParkType) : true
    );

    displayFilteredResults(filteredParks);
  }

  function displayFilteredResults(results) {
    const filteredResultsDiv = document.getElementById('filteredResults');
    filteredResultsDiv.innerHTML = '';

    if (results.length === 0) {
      filteredResultsDiv.innerHTML = 'No parks matching the selected type.';
      return;
    }

    const ul = document.createElement('ul');
    results.forEach(result => {
      const li = document.createElement('li');
      li.textContent = result.LocationName;
      ul.appendChild(li);
    });

    filteredResultsDiv.appendChild(ul);
  }



// ----------------------------
const locationsArray = [
    // Your national parks data here...
  ];

  function filterByLocation() {
    const selectedLocation = document.getElementById('parkLocations').value;

    const filteredParks = locationsArray.filter(park =>
      selectedLocation ? park.State === selectedLocation : true
    );

    displayFilteredLocationResults(filteredParks);
  }

  function displayFilteredLocationResults(results) {
    const filteredResultsDiv = document.getElementById('filteredLocationResults');
    filteredResultsDiv.innerHTML = '';

    if (results.length === 0) {
      filteredResultsDiv.innerHTML = 'No parks found in the selected location.';
      return;
    }

    const ul = document.createElement('ul');
    results.forEach(result => {
      const li = document.createElement('li');
      li.textContent = result.LocationName;
      ul.appendChild(li);
    });

    filteredResultsDiv.appendChild(ul);
  }