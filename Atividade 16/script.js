function abrirCurso() {
    const select = document.getElementById("curso");
    const curso = select.value;

    if (!curso) return;

    const cursos = {
        ads: "https://fatecsorocaba.cps.sp.gov.br/cursos-fatec/analise-e-desenvolvimento-de-sistemas/",
        eletronica: "https://fatecsorocaba.cps.sp.gov.br/cursos-fatec/eletronica-automotiva/",
        fabricacao: "https://fatecsorocaba.cps.sp.gov.br/cursos-fatec/fabricacao-mecanica/",
        qualidade: "https://fatecsorocaba.cps.sp.gov.br/cursos-fatec/gestao-da-qualidade/",
        logistica: "https://fatecsorocaba.cps.sp.gov.br/cursos-fatec/logistica/",
        manufatura: "https://fatecsorocaba.cps.sp.gov.br/cursos-fatec/manufatura-avancada/",
        aeronaves: "https://fatecsorocaba.cps.sp.gov.br/cursos-fatec/manutencao-de-aeronaves/",
        polimeros: "https://fatecsorocaba.cps.sp.gov.br/cursos-fatec/polimeros/",
        metalurgia: "https://fatecsorocaba.cps.sp.gov.br/cursos-fatec/processos-metalurgicos/",
        projetos: "https://fatecsorocaba.cps.sp.gov.br/cursos-fatec/projetos-mecanicos/",
        biomedicos: "https://fatecsorocaba.cps.sp.gov.br/cursos-fatec/sistemas-biomedicos/"
    };

    const confirmar = confirm("Abrir curso?");
    
    if (confirmar) {
        window.open(cursos[curso], "_blank", "width=1280 height=600");
    }
}
