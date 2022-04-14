// var APIkey = "7366c7ee907740999d48cfcb373e945c"
// var urlStart = "https://api.openweathermap.org/data/2.5/"

var formEl = document.querySelector("#city-search");
var tasksToDoEl = document.querySelector("#search-history");

var taskFormHandler = function(event) {
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

var createTaskEl = function(taskDataObj) {
    // create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "list-group";
    taskInfoEl.innerHTML = taskDataObj.name;
    listItemEl.appendChild(taskInfoEl);
  
    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "list-group";
    taskInfoEl.innerHTML = taskDataObj.name;
    listItemEl.appendChild(taskInfoEl);
  
    console.dir(listItemEl);
  
    // add list item to list
    tasksToDoEl.appendChild(listItemEl);
  };
  
  formEl.addEventListener("submit", taskFormHandler);
