// var APIkey = "7366c7ee907740999d48cfcb373e945c"
// var urlStart = "https://api.openweathermap.org/data/2.5/onecall?"

var citySearchEl = document.getElementById("city-search");
var cityFormEl = document.getElementById("city-form");
var searchHistoryEl = document.getElementById("search-history")

var APIkey = "7dd3d9ee3fd3a5e33bd10913e8e1557b";
var cities = []

var loadCities = function() {
    var cityStorage = localStorage.getItem("cities")
    if(!cityStorage) {
        return false;
    }
    
    cityStorage = JSON.parse(cityStorage);
    
    for (var i=0; i < cityStorage.length; i++) {
        displaySearchedCities(cityStorage[i])
        cities.push(cityStorage[i])
    }
}

var saveCities = function() {
    localStorage.setItem("cities", JSON.stringify(cities));
}

var displaySearchedCities = function(city) {
    var cityCardEl = document.createElement("div");
    cityCardEl.setAttribute("class", "card");
    var cityCardNameEl = document.createElement("div");
    cityCardNameEl.setAttribute("class", "card-body searched-city");
    cityCardNameEl.textContent = city;
    
    cityCardEl.appendChild(cityCardNameEl)

    cityCardEl.addEventListener("click", function () {
        getCityData(city)
    });

    searchHistoryEl.appendChild(cityCardEl)

}











