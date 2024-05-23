// -------------------------- Exercício 01
/*
let nome = prompt("Digite o seu nome:");
console.log("Olá, " + nome); */

// -------------------------- Exercício 02
/*
let valor1 = prompt('Digite o primeiro valor: ');
let valor2 = prompt('Digite o segundo valor: ');
console.log(parseFloat(valor1) + parseFloat(valor2)); */

// -------------------------- Exercício 03
/*
let valor1 = prompt('Digite o primeiro valor: ');
let valor2 = prompt('Digite o segundo valor: ');

let soma = parseFloat(valor1) + parseFloat(valor2);
let subtracao = parseFloat(valor1) - parseFloat(valor2);
let multiplicacao = parseFloat(valor1) * parseFloat(valor2);
let divisao = parseFloat(valor1) / parseFloat(valor2);
let restoDivisao = parseFloat(valor1) % parseFloat(valor2);

alert("Soma: " + soma);
alert("Subtração: " + subtracao);
alert("Multiplicação: " + multiplicacao);
alert("Divisão: " + divisao);
alert("Resto da Divisão: " + restoDivisao); */

// -------------------------- Exercício 04
/*
let valor1 = prompt('Digite o primeiro valor: ');
let valor2 = prompt('Digite o segundo valor: ');

let soma = parseFloat(valor1) + parseFloat(valor2);
let notaTotal = soma / 2.0;

if (notaTotal >= 7.0) {
    console.log("Aprovado !");
} else if (notaTotal > 4.0) {
    console.log("Recuperação !");
} else {
    console.log("Reprovado !")
} */

// -------------------------- Exercício 05
/*
let itens = new Array(10);
for (let i = 0; i < itens.length; i++) {
    itens[i] = prompt("Insira o " + (i+1) + "º item");
}

var mensagem = itens[0] + ", " + itens[1] + ", " + itens[2] + ", " + itens[3] + ", " + itens[4] + ", " + itens[5] + ", " + itens[6] + ", " + itens[7] + ", " + itens[8] + ", " + itens[9] + "."; 

console.log(mensagem); */

// -------------------------- Exercício 06
/*
let numeroAleatorio = Math.floor(Math.random() * 10 + 1);
let sistema = true;
let valorInserido = 0;
let quant = 0;

while (sistema) {
    
    valorInserido = parseInt(prompt("Insira um valor: "));

    if (valorInserido == numeroAleatorio) {
        alert("Parabéns! Você adivinhou o número em " + quant + " tentativas.");
        sistema = false;
    } else {
        alert("Erro, tente novamente!");
        quant++;
    }

} */

// -------------------------- Exercício 07
/*
console.log("Olá usuário! Digite o número da opção desejada:\n" + 
    "-> 1. Cadastrar um item na lista\n" +
    "-> 2. Mostrar itens cadastrados\n" +
    "-> 3. Sair do programa."
);

let escolha = parseInt(prompt("Insira a opção desejada:"));
let sistema = true;
let itens = [];

while (sistema) {
    switch (escolha) {
        case 1:
            let novoItem = prompt("Insira um item novo: ")
            itens.push(novoItem);
            console.log("Item cadastrado com sucesso.\n\n");
            break;
        case 2:
            if (itens.length == 0) {
                console.log("Não existem itens cadastrados.")
            } else {
                console.log(itens)
            }
            break;
        case 3:
            sistema = false
            break;
        default:
            sistema = false;
    }
    
    if(sistema == false) {
        console.log("Aplicação Encerrada!");
    } else {
        console.log("Olá usuário! Digite o número da opção desejada:\n" + "-> 1. Cadastrar um item na lista\n" +
          "-> 2. Mostrar itens cadastrados\n" +
          "-> 3. Sair do programa."
        );

        escolha = parseInt(prompt("Insira a opção desejada:"));
    }
} */

// -------------------------- Exercício 08
/*
let paciente02 = {
    nome: "Paciente 02",
    idade: 15,
    peso: 130.5,
    altura: 1.80
};

let pacientes = [
    {
        nome: "Paciente 01",
        idade: 15,
        peso: 130.5,
        altura: 1.80
    }
];

pacientes.push(paciente02);

for (let paciente of pacientes) {
    console.log(paciente.nome);
} */

// -------------------------- Exercício 09

let paciente02 = {
    nome: "Paciente 02",
    idade: 20,
    peso: 140.5,
    altura: 1.90
};

let paciente03 = {
    nome: "Paciente 03",
    idade: 35,
    peso: 87.6,
    altura: 1.6
};

let pacientes = [
    {
        nome: "Paciente 01",
        idade: 15,
        peso: 130.5,
        altura: 1.80
    }
];

pacientes.push(paciente02);
pacientes.push(paciente03);

function imc(peso, altura) {
    let imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function imcPacientes(paciente) {
    
    return `Paciente ${paciente.nome} possui o IMC de: ${imc(paciente.peso, paciente.altura)}`;

}

function displayPacientes() {
    const pacienteContainer = document.getElementById("pacientes");

    pacientes.forEach((paciente) => {
        const pacienteDiv = document.createElement("div");
        pacienteDiv.className = "paciente";
        pacienteDiv.innerHTML = imcPacientes(paciente);
        pacienteContainer.appendChild(pacienteDiv)
    })
}

window.onload = displayPacientes