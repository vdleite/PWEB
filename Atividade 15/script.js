function validar(event) {
    event.preventDefault(); 

    let form = document.formulario1.elements;
    let nome = form["inputName"].value.trim();
    let email = form["inputEmail"].value.trim();
    let comentario = form["inputComentario"].value.trim();
    let pesquisa = document.querySelector('input[name="pesquisa"]:checked');
    let resposta = document.getElementById("resposta");

    if (nome.length < 10) {
        alert("O nome deve conter no mínimo 10 caracteres.");
        return false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Digite um e-mail válido.");
        return false;
    }

    if (comentario.length < 20) {
        alert("O comentário deve conter no mínimo 20 caracteres.");
        return false;
    }

    if (!pesquisa) {
        alert("Selecione uma opção da pesquisa.");
        return false;
    }

    if (pesquisa.value === "nao") {
        resposta.innerText = "Que bom que você voltou a visitar esta página!";
    } else {
        resposta.innerText = "Volte sempre a esta página!";
    }

    return true;
}

function limpar() {
    document.formulario1.reset();
    document.getElementById("resposta").innerText = "";
}
