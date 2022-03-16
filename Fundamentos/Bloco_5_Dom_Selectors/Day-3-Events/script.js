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

function createDaysOfTheMonth (){
    const monthDaysList = document.querySelector("#days");
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

function createHolydayBtn(holidays){
    let holidayBtn = document.createElement('button')
    holidayBtn.id = 'btn-holiday';
    holidayBtn.innerText= holidays;

    document.querySelector('.buttons-container').appendChild(holidayBtn);

    

}

createDaysOfTheWeek();
createDaysOfTheMonth();
createHolydayBtn("Feriados");


// Escreva seu código abaixo.
