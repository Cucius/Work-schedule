var currentHour = moment();

//Live Date and Time
function updateTime() {
  var currentDate = moment().format("[Today's Date is:] dddd, MMMM Do YYYY, h:mm:ss a");
  document.getElementById("currentDay").innerText = currentDate;
}

setInterval(updateTime, 1000);

//Saves input from textbox
var saveButtons = document.getElementsByClassName("saveBtn");

for (var i = 0; i < saveButtons.length; i++) {
  saveButtons[i].addEventListener("click", function (event) {
    var input = event.target.previousElementSibling.value;
    localStorage.setItem(event.target.id, input);
  });
}

//TODO:Create a function to call and load the localstorage into the textareas
function loadFromStorage() {
  for (var i = 0; i < saveButtons.length; i++) {
    var toStore = localStorage.getItem("save" + i);
    document.getElementById("save" + i).previousElementSibling.value = toStore;
  }
}

//function to check the timeblock and change acording to the time
function checkTimeBlock() {
  for (var i = 0; i < saveButtons.length; i++) {
    var timeCheck = document.getElementById("save" + i).previousElementSibling.previousElementSibling.innerText;
    var time = moment(timeCheck, "hh:mm A");

    // convert times to moment format and comapre current hour of moment format
    if (time.isSame(currentHour, "hour")) {
      // green
      document.getElementById("save" + i).previousElementSibling.setAttribute("class", "present description col-10");
    } else if (time.isAfter(currentHour, "hour")) {
      // gold
      document.getElementById("save" + i).previousElementSibling.setAttribute("class", "future description col-10");
    } else if (time.isBefore(currentHour, "hour")) {
      // grey
      document.getElementById("save" + i).previousElementSibling.setAttribute("class", "past description col-10");
    }
  }
}

checkTimeBlock();
loadFromStorage();
