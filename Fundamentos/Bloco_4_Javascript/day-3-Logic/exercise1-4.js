//Exercise 1 run a code to solve 10!

let factorial = 1;
let i;
let counter = 0;

for (i = 2; i <= 10; i += 1) {
  factorial *= i;
}

console.log(factorial);

//Exercise 2 invert a string

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
