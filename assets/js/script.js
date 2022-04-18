// var APIkey = "7dd3d9ee3fd3a5e33bd10913e8e1557b"
// var urlStart = "https://api.openweathermap.org/data/2.5/onecall?"

var citySearchEl = document.getElementById("city-search");
var cityFormEl = document.getElementById("city-form");
var searchHistoryEl = document.getElementById("search-history")
var dailyWeatherEl = document.getElementById("daily-weather")
var forecastContainerEl = document.getElementById("forecast-weather")

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

var displayDailyData = function(city, data) {

    //Endpoint Information
    var tempCurrent = Math.round(data.current.temp);
    var humidity = Math.round(data.current.humidity);
    var windSpeed = data.current.wind_speed;
    var uvIndex = data.current.uvi;
    var iconCurrent = data.current.weather[0].icon;

    //dynamic HTML section 
    dailyWeatherEl.textContent = ""
    dailyWeatherEl.setAttribute("class", "m-3 border col-10 text-center")
    var cityHeader = document.createElement("div")
    var cityDate = document.createElement("h2");
    var currentdate = moment().format("L");
    var imageIcon = document.createElement("img");
    imageIcon.setAttribute('src', "") 
    imageIcon.setAttribute('src', "https://openweathermap.org/img/wn/" + iconCurrent + "@2x.png")
    cityDate.textContent = city + "   (" + currentdate + ")";

    //Append Section
    cityHeader.appendChild(cityDate)
    cityHeader.appendChild(imageIcon)
    dailyWeatherEl.appendChild(cityHeader)

    //Dynamic Element section
    var divCurrent = document.createElement("div")
    var tempEl = document.createElement("p");
    var humidityEl = document.createElement("p");
    var windSpeedEl = document.createElement("p");
    var uvIndexEl = document.createElement ("p");
    var uvIndexColorEl = document.createElement("span")
    uvIndexColorEl.textContent = uvIndex
    //different color backgrounds depending on UV Index Rating
        if (uvIndex <= 4) {
            uvIndexColorEl.setAttribute("class", "bg-success text-white p-2")
        } else if (uvIndex <= 8) {
            uvIndexColorEl.setAttribute("class","bg-warning text-black p-2")
        } else {
            uvIndexColorEl.setAttribute("class", "bg-danger text-white p-2")
        }
    
    //adding weather data
    tempEl.textContent = "Temperature: " + tempCurrent + "°F";
    humidityEl.textContent = "Humidity: " + humidity + "%";
    windSpeedEl.textContent = "Wind Speed: " + windSpeed + " MPH";
    uvIndexEl.textContent = "UV Index: ";

    uvIndexEl.appendChild(uvIndexColorEl)

    //append elements
    divCurrent.appendChild(tempEl);
    divCurrent.appendChild(humidityEl);
    divCurrent.appendChild(windSpeedEl);
    divCurrent.appendChild(uvIndexEl);
    dailyWeatherEl.appendChild(divCurrent);
    
};












