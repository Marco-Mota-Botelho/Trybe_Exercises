const firstLi = document.getElementById("first-li");
const secondLi = document.getElementById("second-li");
const thirdLi = document.getElementById("third-li");
const input = document.getElementById("input");
const myWebpage = document.getElementById("my-spotrybefy");
let newWindow;

// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
// classe tech : transform: translateY(-20px);

const allLi = document.querySelectorAll("li");

firstLi.addEventListener("click", changeClass);
secondLi.addEventListener("click", changeClass);
thirdLi.addEventListener("click", changeClass);
input.addEventListener('keyup', changeText);
myWebpage.addEventListener('dblclick', redirectPage);
myWebpage.addEventListener('mouseover', changeColor);

function changeClass(eventTarget) {
  allLi.forEach.call(allLi, function (el) {
    el.classList.remove("tech");
  });
  eventTarget.target.className = "tech";
}


function changeText(){
document.querySelector('.tech').innerText = input.value;
}

function redirectPage (){
newWindow = window.open('https://marco-mota-botelho.github.io/',);
}

function changeColor(eventTarget){
eventTarget.target.style.color = 'red';
}



// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

// Segue abaixo um exemplo do uso de event.target:

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = "Opção reiniciada";
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener("dblclick", resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.
