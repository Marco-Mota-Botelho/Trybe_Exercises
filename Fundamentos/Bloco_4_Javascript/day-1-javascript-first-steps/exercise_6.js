const piece = "Rainha";

switch (piece.toLowerCase()) {
  case "bispo":
    console.log("Diagonais");
    break;
  case "rainha":
    console.log("Diagonais e Retas");
    break;
  case "rei":
    console.log("Um passo em qualquer direção");
    break;
  case "torre":
    console.log("Retas");
    break;
  case "cavalo":
    console.log("Movimento em L");
    break;
  case "peão":
    console.log(
      "Se for o primeiro movimento, até 2 passos para frente. Se não somente 1. Captura somente nas diagonais!"
    );
    break;
  default:
    console.log("Peça não encontrada");
    break;
}
