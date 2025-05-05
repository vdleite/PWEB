const entrada = document.getElementById("entrada");
const radios = document.getElementsByName("transformacao");

function atualizarTexto() {
  const texto = entrada.value;
  let minuscMaiusc = null;

  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      minuscMaiusc = radios[i].value;
      break;
    }
  }

  if (minuscMaiusc === "maiusculas") {
    entrada.value = texto.toUpperCase();
  } else if (minuscMaiusc === "minusculas") {
    entrada.value = texto.toLowerCase();
  }
}

entrada.addEventListener("input", atualizarTexto);
for (let i = 0; i < radios.length; i++) {
  radios[i].addEventListener("change", atualizarTexto);
}
