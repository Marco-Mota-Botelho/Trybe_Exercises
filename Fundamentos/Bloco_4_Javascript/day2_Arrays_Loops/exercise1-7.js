let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let i
let sumOfNumbers = 0;
let comparator = numbers[0];

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

for(i= 1; i < numbers.length; i++){
  if (comparator < numbers[i]){
    comparator = numbers[i]
  }
}

console.log(comparator);
