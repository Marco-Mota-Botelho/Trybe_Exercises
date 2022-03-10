let infos = [
  {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "Sim",
  },
  {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O ultimo MacPatinhas",
    recorrente: "Sim",
  },
];

let perts = {
  personagens: [],
  origens: [],
  notas: [],
  recorrentes: [],
};

perts.personagens = infos.map((info) => info.personagem).join(" e ");
perts.origens = infos.map((info) => info.origem).join(" e ");
perts.notas = infos.map((info) => info.nota).join(" e ");
perts.recorrentes = infos.map((info) => info.recorrente).join(" e ");

console.log(
  perts.personagens,
  "\n" + perts.origens,
  "\n" + perts.notas,
  "\n" + perts.recorrentes
);
// for (let info of infos) {
//     console.log(info)
//     perts.push(info.personagem)
// }

// for(let info in infos){
//     for(let key in info.keys){
//         console.log(info[key[0]] + ' e ' + info[key]);
//     }
// }
// console.log("Bem-vinda, " + info.personagem);

// console.table(info);

// for (let key in info) {
//   console.log(key);
// }

// for (let key in info) {
//   console.log(info[key]);
// }

// console.log(
//   info[0].personagem +
//     " e " +
//     info[1].personagem +
//     "\b" +
//     info[0].origem +
//     " e " +
//     info[1].origin +
//     "\b" +
//     info[0].nota + ' e '
// );
