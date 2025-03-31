function Jogatina(finalPlayer) {
    const escolhaPC = Math.floor(Math.random() * 3) + 1;
    let finalPC = '';
    if (escolhaPC === 1) {
      finalPC = 'pedra';
    } else if (escolhaPC === 2) {
      finalPC = 'papel';
    } else {
      finalPC = 'tesoura';
    }

    document.getElementById('finalPlayer').textContent = `Você escolheu: ${finalPlayer}`;
    document.getElementById('finalPC').textContent = `O computador escolheu: ${finalPC}`;
  
    let resultText = '';
    if (finalPlayer === finalPC) {
      resultText = 'Empate!';
    } else if (
      (finalPlayer === 'pedra' && finalPC === 'tesoura') ||
      (finalPlayer === 'papel' && finalPC === 'pedra') ||
      (finalPlayer === 'tesoura' && finalPC === 'papel')
    ) {
      resultText = 'Você venceu!';
    } else {
      resultText = 'Você perdeu!';
    }
    document.getElementById('result').textContent = resultText;
  }
  