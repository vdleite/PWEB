//maior de 3 nums
function encontrarMaior(a, b, c) {
    return Math.max(a, b, c);
}

function mostrarMaior() {
    const n1 = Number(document.getElementById('num1').value);
    const n2 = Number(document.getElementById('num2').value);
    const n3 = Number(document.getElementById('num3').value);
    const maior = encontrarMaior(n1, n2, n3);
    document.getElementById('resultadoMaior').innerText = `Maior número: ${maior}`;
}

// ordenar 3 nums
function ordenarTresNumeros(a, b, c) {
    return [a, b, c].sort((x, y) => x - y);
}

function ordenarNumeros() {
    const n1 = Number(document.getElementById('ord1').value);
    const n2 = Number(document.getElementById('ord2').value);
    const n3 = Number(document.getElementById('ord3').value);
    const ordenados = ordenarTresNumeros(n1, n2, n3);
    document.getElementById('resultadoOrdenar').innerText = `Ordem crescente: ${ordenados.join(', ')}`;
}

// verificar palindromo
function ehPalindromo(texto) {
    const textoFormatado = texto.toUpperCase().replace(/[^A-Z]/g, '');
    const reverso = textoFormatado.split('').reverse().join('');
    return textoFormatado === reverso;
}

function verificarPalindromo() {
    const texto = document.getElementById('texto').value;
    const resultado = ehPalindromo(texto);
    document.getElementById('resultadoPalindromo').innerText = resultado ? "É um palíndromo!" : "Não é um palíndromo.";
}

// verificar tipo triangulo
function verificarTriangulo() {
    const a = Number(document.getElementById("lado1").value);
    const b = Number(document.getElementById("lado2").value);
    const c = Number(document.getElementById("lado3").value);

    const resultado = document.getElementById("resultadoTriangulo");
    const forma = document.getElementById("forma");

    // animacao bolinha
    forma.className = 'bolinha';

    if (a + b > c && a + c > b && b + c > a) {
        let tipo = "";
        if (a === b && b === c) {
            tipo = "Equilátero";
            forma.classList.add('triangulo', 'equilatero');
        } else if (a === b || a === c || b === c) {
            tipo = "Isósceles";
            forma.classList.add('triangulo', 'isosceles');
        } else {
            tipo = "Escaleno";
            forma.classList.add('triangulo', 'escaleno');
        }
        resultado.textContent = `Forma um triângulo ${tipo}.`;

    } else {
        resultado.textContent = "Não forma um triângulo.";
        forma.classList.add('x');
    }
}

