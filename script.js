var currentDate = moment().format("[Today's Date is:] dddd, MMMM Do YYYY, h:mm:ss a");
console.log(currentDate);
var currentHour = moment().format("hA");
console.log("The current hour is:", currentHour);

var hour = moment({ hour: 24 }).format("hA");

document.getElementById("save").addEventListener("click", function () {
  var input = document.getElementById("events").value;
  localStorage.setItem("input", input);
  console.log(input);
});

function checkTimeBlock(time) {
  if (time == currentHour) {
    $("#events").addClass("present");
  } else if (time > currentHour) {
    $("#events").addClass("future");
  } else if (time < currentHour) {
    $("#events").addClass("past");
  }

  console.log(time);
  console.log(currentHour);
}

checkTimeBlock(hour);
// var pastTimeBlock = moment()
// console.log(pastTimeBlock);

// var futureTimeBlock = moment()
// console.log(futureTimeBlock);

// var currentTimeBlock = moment()
// console.log(currentTimeBlock);
