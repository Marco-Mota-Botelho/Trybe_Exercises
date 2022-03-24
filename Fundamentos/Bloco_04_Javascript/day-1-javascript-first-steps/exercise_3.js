const a = 245;
const b = 233;
const c = 257;

if (a > b && a > c) {
  console.log(a);
} else if (b > a && b > c) {
  console.log(b);
} else if (c > a && c > b) {
  console.log(c);
} else console.log("They are the same");
