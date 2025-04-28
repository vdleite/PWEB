// funcao construtora retangulo
function Retangulo(x, y) {
    this.base = x;
    this.altura = y;

    this.calcularArea = function() {
        return this.base * this.altura;
    }
}

// calc area retangulo
function calcularArea() {
    const base = parseFloat(document.getElementById('baseRetangulo').value);
    const altura = parseFloat(document.getElementById('alturaRetangulo').value);

    if (isNaN(base) || isNaN(altura)) {
        alert("Números Inválidos!");
        return;
    }

    const retangulo = new Retangulo(base, altura);
    document.getElementById('resultadoArea').innerText = "Área: " + retangulo.calcularArea();
}

// classe conta
class Conta {
    constructor() {
        this._nome = '';
        this._correntista = '';
        this._banco = '';
        this._numeroConta = '';
        this._saldo = '';
    }

    get nome() { return this._nome; }
    get correntista() { return this._correntista; }
    get banco() { return this._banco; }
    get numeroConta() { return this._numeroConta; }
    get saldo() { return this._saldo; }

    set nome(valor) { this._nome = valor; }
    set correntista(valor) { this._correntista = valor; }
    set banco(valor) { this._banco = valor; }
    set numeroConta(valor) { this._numeroConta = valor; }
    set saldo(valor) { this._saldo = valor; }
}

// classe corrente
class Corrente extends Conta {
    constructor() {
        super();
        this._saldoEspecial = '';
    }

    get saldoEspecial() { return this._saldoEspecial; }
    set saldoEspecial(valor) { this._saldoEspecial = valor; }
}

// classe poupanca
class Poupanca extends Conta {
    constructor() {
        super();
        this._juros = 0;
        this._dataVencimento = '';
    }

    get juros() { return this._juros; }
    set juros(valor) { this._juros = valor; }
    get dataVencimento() { return this._dataVencimento; }
    set dataVencimento(valor) { this._dataVencimento = valor; }
}

// criar conta corrente
function criarContaCorrente() {
    let conta = new Corrente();

    conta.nome = document.getElementById('nomeCorrente').value;
    conta.correntista = document.getElementById('correntistaCorrente').value;
    conta.banco = document.getElementById('bancoCorrente').value;
    conta.numeroConta = document.getElementById('numeroContaCorrente').value;
    conta.saldo = document.getElementById('saldoCorrente').value;
    conta.saldoEspecial = document.getElementById('saldoEspecialCorrente').value;

    document.getElementById('resultadoCorrente').innerText = `
    Conta Corrente criada:
    Nome: ${conta.nome}
    Banco: ${conta.banco}
    Número da Conta: ${conta.numeroConta}
    Saldo: R$${conta.saldo}
    Saldo Especial: R$${conta.saldoEspecial}
    `;
}

// criar conta poupanca
function criarContaPoupanca() {
    let conta = new Poupanca();

    conta.nome = document.getElementById('nomePoupanca').value;
    conta.correntista = document.getElementById('correntistaPoupanca').value;
    conta.banco = document.getElementById('bancoPoupanca').value;
    conta.numeroConta = document.getElementById('numeroContaPoupanca').value;
    conta.saldo = document.getElementById('saldoPoupanca').value;
    conta.juros = document.getElementById('jurosPoupanca').value;
    conta.dataVencimento = document.getElementById('vencimentoPoupanca').value;

    document.getElementById('resultadoPoupanca').innerText = `
    Conta Poupança criada:
    Nome: ${conta.nome}
    Banco: ${conta.banco}
    Número da Conta: ${conta.numeroConta}
    Saldo: R$${conta.saldo}
    Juros: R$${conta.juros}%
    Data de Vencimento: ${conta.dataVencimento}
    `;
}
