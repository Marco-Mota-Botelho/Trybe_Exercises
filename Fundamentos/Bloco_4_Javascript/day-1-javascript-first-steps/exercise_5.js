const a = 80;
const b = 45;
const c = 55;

if (a + b + c === 180) {
  console.log("True");
} else if (a < 0 || b < 0 || c < 0 ){
    console.log("Angulo inválido");
} else console.log("This is not a valid triangle");
