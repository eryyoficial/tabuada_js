//========================================== DECLARAÇÃO DOS SELECTORES ==========================================
const formulario = document.querySelector("#multiplication-form");
const numberOne = document.querySelector("#number");
const numberTwo = document.querySelector("#multiplicator");
const titleNumber = document.querySelector("#multiplication-title span");
const tabela = document.querySelector("#multiplication-operations");

//========================================== FUNÇÃO PARA CRIAR A TABUADA ==========================================
function createTable(one, two) {
  tabela.innerHTML = "";
  titleNumber.innerHTML = one;
  for (let index = 1; index <= two; index++) {
    const resusltado = one * index;

    //Criando um template HTML a partir do JS
    const template = `
        <div class="row">
          <div class="operation">${one} x ${index} = </div>
          <div class="resu">${resusltado}</div>
        </div>`;

    //Convertendo o template
    const parsa = new DOMParser();
    const htmlConv = parsa.parseFromString(template, "text/html");
    const row = htmlConv.querySelector(".row");

    //Adicionando cada Linha de operação na Tabuada
    const finalLine = tabela.appendChild(row);
  }

  console.log("Tabuada feita com Sucesso!");
}

//========================================== EVENTO PARA SUBMETER A TABUADA ==========================================
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const newNumberOne = +numberOne.value;
  const newNumberTwo = +numberTwo.value;

  if (!newNumberOne || !newNumberTwo) {
    return alert("Preencha todos os campos");
  }
  createTable(newNumberOne, newNumberTwo);
});
