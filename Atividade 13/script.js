const janela = document.getElementById("janela");
const chatbox = document.getElementById("chatbox");

const FECHADA = "fechada.png";
const ABERTA = "aberta.png";
const QUEBRADA = "quebrada.png";

let quebrada = false;

janela.addEventListener("mouseenter", () => {
  if (!quebrada) {
    janela.src = ABERTA;
    chatbox.textContent = "Janela Aberta";
  }
});

janela.addEventListener("mouseleave", () => {
  if (!quebrada) {
    janela.src = FECHADA;
    chatbox.textContent = "Janela Fechada";
  }
});

janela.addEventListener("click", () => {
  janela.src = QUEBRADA;
  chatbox.textContent = "Feliz? Acabou de quebrar tudo...";
  quebrada = true;
});

const btnArrumar = document.getElementById("btnArrumar");

btnArrumar.addEventListener("click", () => {
  quebrada = false;
  janela.src = FECHADA;
  chatbox.textContent = "Janela Fechada";
});

