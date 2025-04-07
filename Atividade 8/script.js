let responses = []; // Array para armazenar as respostas
const surveyForm = document.getElementById('surveyForm');
const responsesTableBody = document.getElementById('tabela').getElementsByTagName('tbody')[0];

// Atualiza a mensagem de respostas pendentes
function updatePendentes() {
    respostasFaltando = 45;
    if (qtdRespostas > 0){
        respostasFaltando = respostasFaltando - qtdRespostas
    }
    
    document.getElementById('pendentes').textContent = `Ainda faltam preencher: ${respostasFaltando} respostas`;
}

// Função que converte a nota numérica para texto
function getNotaText(nota) {
  switch (nota) {
    case 4: return "Ótimo";
    case 3: return "Bom";
    case 2: return "Regular";
    case 1: return "Péssimo";
    default: return "";
  }
}

// Função para atualizar os resultados da pesquisa em tempo real
function updateResults() {
  let totIdade = 0;
  let maisNovo = Infinity;
  let maisVelho = -Infinity;
  let qtdPessimos = 0;
  let qtdBomOtimo = 0;
  let qtdMulher = 0;
  let qtdHomem = 0;
  let qtdOutros = 0;
  let qtdRespostas = 0;

  // Calcula os resultados baseados nas respostas
  for (const response of responses) {
    totIdade += response.idade;
    maisNovo = Math.min(maisNovo, response.idade);
    maisVelho = Math.max(maisVelho, response.idade);

    if (response.nota === 1) {
      qtdPessimos++;
      qtdRespostas++;
    }
    if (response.nota === 3 || response.nota === 4) {
      qtdBomOtimo++;
      qtdRespostas++;
    }

    if (response.genero === 'Feminino') {
      qtdMulher++;
      qtdRespostas++;
    } else if (response.genero === 'Masculino') {
      qtdHomem++;
      qtdRespostas++;
    } else {
      qtdOutros++;
      qtdRespostas++;
    }
  }

  // Calcula a média de idades e a porcentagem de "Ótimo" e "Bom"
  const mediaIdade = totIdade / responses.length;
  const porcentagemGood = (qtdBomOtimo / responses.length) * 100;

  // Exibe os resultados na tela
  document.getElementById('mediaIdade').textContent = mediaIdade.toFixed(2);
  document.getElementById('maiorIdade').textContent = maisVelho;
  document.getElementById('menorIdade').textContent = maisNovo;
  document.getElementById('Pessimos').textContent = qtdPessimos;
  document.getElementById('Porcentagem').textContent = porcentagemGood.toFixed(2) + '%';
  document.getElementById('qtdMulher').textContent = qtdMulher;
  document.getElementById('qtdHomem').textContent = qtdHomem;
  document.getElementById('qtdOutros').textContent = qtdOutros;

  // Exibe a div com os resultados
  document.getElementById('results').style.display = 'block';
}

// Adiciona um ouvinte de evento para o formulário
surveyForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Previne o envio padrão do formulário

  // Coleta os valores inseridos pelo usuário
  const idade = parseInt(document.getElementById('idade').value);
  const genero = document.getElementById('genero').value;
  const nota = parseInt(document.getElementById('nota').value);

  // Adiciona a resposta ao array
  responses.push({ idade, genero, nota });

  // Cria uma nova linha na tabela com a resposta
  const row = responsesTableBody.insertRow();
  const cellIdade = row.insertCell(0);
  const cellGenero = row.insertCell(1);
  const cellNota = row.insertCell(2);

  cellIdade.textContent = idade;
  cellGenero.textContent = genero;
  cellNota.textContent = getNotaText(nota);

  // Limpa o formulário após a resposta ser enviada
  surveyForm.reset();

  // Atualiza os resultados e a contagem de respostas pendentes
  updateResults();
  updatePendentes();
});

// Inicializa a mensagem de respostas pendentes ao carregar a página
updatePendentes();
