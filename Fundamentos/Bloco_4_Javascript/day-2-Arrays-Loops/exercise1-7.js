let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let i;
let howManyOdds = 0;
let sumOfNumbers = 0;
let comparator = numbers[0];
let comparatorSmaller = numbers[0];
let newNumbers = new Array();

// console.log(numbers);

for (i = 0; i < numbers.length; i++) {
  // console.log(numbers[i]);
  sumOfNumbers += numbers[i];
}

let avarageOfNumbers = sumOfNumbers / numbers.length;
console.log(sumOfNumbers);

if (avarageOfNumbers > 20) {
  console.log("Valor maior que 20");
} else console.log("Valor menor ou igual a 20");

for (i = 1; i < numbers.length; i++) {
  if (comparator < numbers[i]) {
    comparator = numbers[i];
  }
}

for (i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 != 0) {
    howManyOdds++;
  }
}
if (howManyOdds > 0) {
  console.log(howManyOdds);
} else console.log("nenhum valor Ímpar encontrado");

console.log(comparator);

for (i = 1; i < numbers.length; i++) {
  if (comparatorSmaller > numbers[i]) {
    comparatorSmaller = numbers[i];
  }
}

console.log(comparatorSmaller);

for (i = 0; i < 25; i++) {
  newNumbers[i] = i + 1;
}

console.log(newNumbers);

for (let newNumber of newNumbers) {
  console.log(newNumber / 2);
}
