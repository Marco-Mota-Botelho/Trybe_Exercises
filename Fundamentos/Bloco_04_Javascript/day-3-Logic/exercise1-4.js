//Exercise 1 run a code to solve 10!

let factorial = 1;
let i;
let counter = 0;

for (i = 2; i <= 10; i += 1) {
  factorial *= i;
}

console.log(factorial);

// //Exercise 2 invert a string

let word = "tryber";
let splitWord = word.split("");
let reverseWord;

for (i = splitWord.length - 1; i >= splitWord.length / 2; i -= 1) {
  let letter = splitWord[i];
  console.log(letter);
  splitWord[i] = splitWord[counter];
  splitWord[counter] = letter;
  counter += 1;
}

reverseWord = splitWord.join("");

console.log(reverseWord);

//Exercise 3 Return the biggest word in an array and the smallest

let arrayOfWords = ["java", "javascript", "python", "html", "css"];
let biggerWord = arrayOfWords[0];
let smallerWord = arrayOfWords[0];

for (let word of arrayOfWords) {
  if (word.length > biggerWord.length) {
    biggerWord = word;
  }
}
for (let word of arrayOfWords) {
  if (word.length < smallerWord.length) {
    smallerWord = word;
  }
}
console.log(biggerWord);
console.log(smallerWord);

// A code to find the biggest prime between 0 and 50

let number = 50;
let hasFound = true;

  for(number; number > 1; number-= 1 ){
    for(i = 2; i < number; i+= 1){
      if (number % i == 0 && i !== number){
        hasFound = false;
        break
      } else hasFound = true;
    }

    if (hasFound) break;
  }
  console.log(number);

