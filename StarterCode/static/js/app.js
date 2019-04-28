// From data.js
var tableData = data;

// Input fields and buttons
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#date");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $durationInput = document.querySelector ("#duration");
var $commentsInput = document.querySelector ("#comments");
var $searchBtn = document.querySelector("#search");
var $resetBtn = document.querySelector("#reset");

// Event listener to Search and Reset buttons 
// Call functions after clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);
$resetBtn.addEventListener("click", handleResetButtonClick);

var filteredData = dataSet;

// Render filtered data to tbody
function renderTable() {
 $tbody.innerHTML = "";
 for (var i = 0; i < filteredData.length; i++) {

   // Get get current sighting object and fields
   var sighting = filteredData[i];
   var fields = Object.keys(sighting);

   // Create new row in tbody
   // Set index 
   var $row = $tbody.insertRow(i);
   for (var j = 0; j < fields.length; j++) {

     // Create new cell for every field
     // Set inner text to current value
     var field = fields[j];
     var $cell = $row.insertCell(j);
     $cell.innerText = sighting[field];
   }
}

function handleSearchButtonClick() {

 // Remove leading and trailing whitespace
 var filterDate = $dateInput.value.trim();
 if (filterDate != "") {
   filteredData = dataSet.filter(function (sighting) {
     var sightingDate = sighting.datetime;
     return sightingDate === filterDate;
   });
 };
 var filterCity = $cityInput.value.trim().toLowerCase();
 if (filterCity != "") {
   filteredData = filteredData.filter(function (sighting) {
     var sightingCity = sighting.city;
     return sightingCity === filterCity;
   });
 };
 var filterState = $stateInput.value.trim().toLowerCase();
 if (filterState != "") {
   filteredData = filteredData.filter(function (sighting) {
     var sightingState = sighting.state;
     return sightingState === filterState;
   });
 };
 var filterCountry = $countryInput.value.trim().toLowerCase();
 if (filterCountry != "") {
   filteredData = filteredData.filter(function (sighting) {
     var sightingCountry = sighting.country;
     return sightingCountry === filterCountry;
   });
 };
 var filterShape = $shapeInput.value.trim().toLowerCase();
 if (filterShape != "") {
   filteredData = filteredData.filter(function (sighting) {
     var sightingShape = sighting.shape;
     return sightingShape === filterShape;
   });
 };
 renderTable();
};

// Reset data
// Search form after search
function handleResetButtonClick() {
 filteredData = dataSet;
 $dateInput.value = "";
 $cityInput.value = "";
 $stateInput.value = "";
 $countryInput.value = "";
 $shapeInput.value = "";
 renderTable();
}

// Render table first time when loading page 
renderTable();
}