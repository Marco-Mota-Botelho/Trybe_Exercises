function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");
  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

const monthDaysList = document.querySelector("#days");

function createDaysOfTheMonth() {
  const dezDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  for (let day of dezDaysList) {
    const dayListItem = document.createElement("li");
    dayListItem.className = "day";
    dayListItem.innerText = day;

    if (day === 24 || day === 25 || day === 31) {
      dayListItem.className += " holiday";
      if (day === 25) {
        dayListItem.className += " friday";
      }
    } else if (day === 4 || day === 11 || day === 18) {
      dayListItem.className += " friday";
    }

    monthDaysList.appendChild(dayListItem);
  }
}

function createHolydayBtn(holidays) {
  let holidayBtn = document.createElement("button");
  holidayBtn.id = "btn-holiday";
  holidayBtn.innerText = holidays;

  document.querySelector(".buttons-container").appendChild(holidayBtn);
}

createDaysOfTheWeek();
createDaysOfTheMonth();
createHolydayBtn("Feriados");
const btn = document.querySelector("#btn-holiday");

btn.addEventListener("click", changeBackgroundColor);
let ischanged = false;
let ischangedFriday = false;

function changeBackgroundColor() {
  const holidaysInMonth = document.querySelectorAll(".holiday");
  if (!ischanged) {
    holidaysInMonth.forEach(
      (holiday) => (holiday.style.backgroundColor = "red")
    );
    ischanged = true;
  } else {
    holidaysInMonth.forEach(
      (holiday) => (holiday.style.backgroundColor = "rgb(238,238,238)")
    );
    ischanged = false;
  }
}

function createFridayBtn(friday) {
  let fridayBtn = document.createElement("button");
  fridayBtn.id = "btn-friday";
  fridayBtn.innerText = friday;

  document.querySelector(".buttons-container").appendChild(fridayBtn);
}

createFridayBtn("Friday");
const fridaysInMonth = document.querySelectorAll(".friday");
let nextFriday = [];
for (let i = 0; i < fridaysInMonth.length; i++) {
  nextFriday[i] = fridaysInMonth[i].innerText;
}

function changeFridayText() {
  if (!ischanged) {
    fridaysInMonth.forEach((friday) => (friday.innerText = "Sextou Galeraaa!"));
    ischanged = true;
  } else {
    for (let i = 0; i < nextFriday.length; i++) {
      fridaysInMonth[i].innerText = nextFriday[i];
    }
    ischanged = false;
  }
}

const fridayBtn = document.querySelector("#btn-friday");
fridayBtn.addEventListener("click", changeFridayText);

const daysList = document.querySelectorAll(".day");
let fontSize;

function zoomIn(eventTarget) {
  fontSize = eventTarget.target.style.fontSize;
  eventTarget.target.style.fontSize = "xx-large";
}

function zoomOut(eventTarget) {
  eventTarget.target.style.fontSize = fontSize;
}

for (i = 0; i < daysList.length; i++) {
  daysList[i].addEventListener("mouseover", zoomIn);
  daysList[i].addEventListener("mouseleave", zoomOut);
}

let myTasks = document.querySelector("#task-input");
const myTaskList = document.querySelector(".my-tasks");
const taskBtn = document.querySelector("#btn-add");
taskBtn.addEventListener(
  "click",
  addNewTasks
);
function addNewTasks() {
  let taskName = document.getElementById('task-input').value
  let newTask = document.createElement("span");
  console.log = taskName;
  newTask.innerText = taskName;
  newTask.className = "task";
  myTaskList.appendChild(newTask);
}
