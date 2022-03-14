const salary = 2600;
// Aqui to colocando o salario bruto pra saber qual é o salario do cara
let inss, baseSalary, finalSalary, IR;

//Esse if vai checar quanto de inss a pessoal deve pagar
if (salary <= 1556.94) {
  inss = salary * 0.08;
} else if (salary >= 1556.95 && salary <= 2594.92) {
  inss = salary * 0.09;
} else if (salary >= 2594.93 && salary <= 5189.82) {
  inss = salary * 0.11;
} else {
  inss = 570.88;
}

baseSalary = salary - inss;
console.log(baseSalary);

if (baseSalary <= 1903.98) {
  IR = 0;
} else if (baseSalary >= 1903.99 && baseSalary <= 2826.65) {
  IR = baseSalary * 0.075 - 142.8;
} else if (baseSalary >= 2826.66 && baseSalary <= 3751.05) {
  IR = baseSalary * 0.15 - 354.8;
} else if (baseSalary >= 3751.06 && baseSalary <= 4664.68) {
  IR = baseSalary * 0.225 - 636.13;
} else {
  IR = baseSalary * 0.275 - 869.36;
}
finalSalary = baseSalary - IR;
console.log(finalSalary);
