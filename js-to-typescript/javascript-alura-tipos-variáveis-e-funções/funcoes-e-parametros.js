// let x = "";
// console.log(x)
// x = "oi";

// Declaração de Função

// 1) declara a funçaõ
// function imprimeTexto(texto) {
//     console.log(texto)
// } 

// // 2) executa a função (1 ou + vezes)

// imprimeTexto("oi");
// imprimeTexto("outro texto");

// três formas de escrever funções 

function soma(){
    return a + b;
}

//console.log(soma(2,2));

//com parâmetros
function multiplica(num1 = 1, num2 = 1){
    return num1 * num2;
}

console.log(multiplica(soma(4,5)));