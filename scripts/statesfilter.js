
const locationsArray = [
    "Alabama",
    "Alaska",
    "American Samoa",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "DC",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virgin Islands",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"

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