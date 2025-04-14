function calcularIMC(peso, altura) {
    return peso / (altura * altura);
  }
  
  function classificarIMC(imc) {
    if (imc < 18.5) return "Magreza - Grau 0";
    if (imc < 25) return "Normal - Grau 0";
    if (imc < 30) return "Sobrepeso - Grau I";
    if (imc < 40) return "Obesidade - Grau II";
    else
    return "Obesidade Grave - Grau III";
  }
  
  document.getElementById('imcForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
  
    if (!altura || !peso || altura <= 0 || peso <= 0) {
      document.getElementById('resultado').innerText = "Coloque um valor válido.";
      return;
    }
  
    const imc = calcularIMC(peso, altura);
    const classificacao = classificarIMC(imc);
  
    document.getElementById('resultado').innerText =
      `Seu IMC é ${imc.toFixed(2)} - ${classificacao}`;
  });
  
  document.getElementById('altura').addEventListener('blur', function () {
    let valor = parseFloat(this.value);
    if (valor > 3) {
      valor = valor / 100;
      this.value = valor.toFixed(2);
    }
  });
    