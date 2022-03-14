let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let secondNumbers = new Array;

console.table(numbers);

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}
console.table(numbers);

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] > numbers[secondIndex]) {
      let position = numbers[secondIndex];
      numbers[secondIndex] = numbers[index];
      numbers[index] = position;
    }
  }
}

for (let index = 0; index < numbers.length; index+= 1){
    let newNumber;
    if((numbers.length-1) <= index){
        newNumber = numbers[index] * 2;
        secondNumbers.push(newNumber);
    } else
    {newNumber = numbers[index] * numbers[index+1];
    secondNumbers.push(newNumber)}
}

console.log(numbers);
console.log(secondNumbers);
