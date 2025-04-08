const respostas = [];

const form = document.getElementById("forms");

function getNotaText(nota) {
  switch (nota) {
    case 4: return "Ótimo";
    case 3: return "Bom";
    case 2: return "Regular";
    case 1: return "Péssimo";
    default: return "";
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (respostas.length >= 45) {
    alert("Limite de 45 respostas atingido!");
    return;
  }

  const idade = parseInt(document.getElementById("idade").value);
  const genero = document.querySelector('input[name="genero"]:checked').value;
  const nota = parseInt(document.querySelector('input[name="nota"]:checked').value);

  respostas.push({ idade, genero, nota });

  atualizarResultados();

  form.reset();
  document.getElementById("idade").focus();
});

function atualizarResultados() {
  let totIdade = 0;
  let maisNovo = Infinity;
  let maisVelho = -Infinity;
  let qtdPessimos = 0;
  let qtdBomOtimo = 0;
  let qtdMulher = 0;
  let qtdHomem = 0;
  let qtdOutros = 0;

  for (const resposta of respostas) {
    totIdade += resposta.idade;
    maisNovo = Math.min(maisNovo, resposta.idade);
    maisVelho = Math.max(maisVelho, resposta.idade);

    if (resposta.nota === 1) qtdPessimos++;
    if (resposta.nota === 3 || resposta.nota === 4) qtdBomOtimo++;

    if (resposta.genero === 'Feminino') qtdMulher++;
    else if (resposta.genero === 'Masculino') qtdHomem++;
    else qtdOutros++;
  }

  const mediaIdade = totIdade / respostas.length;
  const porcentagemGood = (qtdBomOtimo / respostas.length) * 100;

  document.getElementById('mediaIdade').textContent = mediaIdade.toFixed(2);
  document.getElementById('maiorIdade').textContent = maisVelho;
  document.getElementById('menorIdade').textContent = maisNovo;
  document.getElementById('Pessimos').textContent = qtdPessimos;
  document.getElementById('Porcentagem').textContent = porcentagemGood.toFixed(2) + '%';
  document.getElementById('qtdMulher').textContent = qtdMulher;
  document.getElementById('qtdHomem').textContent = qtdHomem;
  document.getElementById('qtdOutros').textContent = qtdOutros;
  document.getElementById('qtdRespostas').textContent = respostas.length;
}
const resetarBtn = document.getElementById("resetar");

resetarBtn.addEventListener("click", function () {
  if (confirm("Tem certeza que deseja resetar todas as respostas?")) {
    respostas.length = 0;
    atualizarResultados();
    alert("Contagem reiniciada.");
    document.getElementById("idade").focus();
  }
});
