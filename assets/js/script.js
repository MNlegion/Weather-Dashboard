// var APIkey = "7366c7ee907740999d48cfcb373e945c"
// var urlStart = "https://api.openweathermap.org/data/2.5/"

var formEl = document.querySelector("#city-search");
var tasksToDoEl = document.querySelector("#search-history");

var taskFormHandler = function (event) {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='search-input'").value;

    // check if inputs are empty (validate)
    if (taskNameInput === "") {
        alert("You need to enter a location!");
        return false;
    }

    // reset form fields for next task to be entered
    formEl.reset();

    document.querySelector("input[name='search-input']").value = "";

    var taskDataObj = {
        name: taskNameInput,

    };

    createTaskEl(taskDataObj);
};

var createTaskEl = function (taskDataObj) {
    // create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "list-group";

    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "list-group";
    taskInfoEl.textContent = taskDataObj.name;
    listItemEl.appendChild(taskInfoEl);

    console.dir(listItemEl);

    // add list item to list
    tasksToDoEl.appendChild(listItemEl);
};

var saveSearch = function () {
    localStorage.setItem("", JSON.stringify());
}

formEl.addEventListener("submit", taskFormHandler);

var getWeather = function () {
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude=minutely,hourly&appid=7366c7ee907740999d48cfcb373e945c");
}

var APIKey = "dc591a53f8e7a96b2703399147c86ba9"
let dailyWeather;


function weatherDisplay() {
    const displayWeather = document.getElementById("display");
    for (i = 0; i < 5; i++) {
        const dw = dailyWeather[i];
        //icon?//
        const el = document.createElement("div");
        var date = new Date(dw.dt * 1000);
        var temp = dw.temp.day + "deg F";
        var wind = "Wind:" + dw.wind_speed + "MPH";
        var humidity = "Humidity:" + dw.humidity + "%";
        el.innerText = date + "\n" + temp + "\n" + wind + "\n" + humidity;

        displayWeather.appendChild(el);
    };
}






