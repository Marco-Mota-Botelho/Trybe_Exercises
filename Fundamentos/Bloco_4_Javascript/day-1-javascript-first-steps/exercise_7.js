const grade = 685;
let newGrade;

if (grade >= 90 && grade <= 100) {
  newGrade = "A";
} else if (grade >= 80 && grade <= 90) {
  newGrade = "B";
} else if (grade >= 70 && grade <= 80) {
  newGrade = "C";
} else if (grade >= 60 && grade <= 70) {
  newGrade = "D";
} else if (grade >= 50 && grade <= 60) {
  newGrade = "E";
} else if (grade < 50 && grade > 0) {
  newGrade = "F";
} else{
  newGrade = "Nota invalida";
}

console.log(newGrade);
