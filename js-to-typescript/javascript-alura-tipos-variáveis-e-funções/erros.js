// SyntaxError
//const numero;

//RangeError

// function verificarIdade(idade) {
//     if (idade < 0 || idade > 120) {
//         throw new RangeError("A idade deve estar entre 0 e 120 anos.");
//     }

//     console.log("Idade válida: " + idade);
// }

// try {
//     verificarIdade(-5);
// } catch (error) {
//     console.error(error.message); // Saída: A idade deve estar entre 0 e 120 anos.
// }

//ReferenceError

//Exemplo 1:

// try {
//     // Tentando acessar uma variável que não foi declarada
//     console.log(variavelNaoDeclarada);
// } catch (error) {
//     console.error(error.message); // Saída: variavelNaoDeclarada is not defined
// }

//Exemplo 2:
//console.log(num);

//SyntaxError

// Na maior parte dos casos ocorre quando há erros no programa e o JavaScript não consegue 
// executá-lo. Os erros podem ser métodos ou propriedades escritos ou utilizados de forma incorreta, 
// por exemplo, operadores ou sinais gráficos com elementos a menos, como esquecer de fechar chaves 
// ou colchetes.

// try {
//     // Tentando usar uma palavra-chave incorreta (porque o identificador (nome da variável) 
        // não pode começar com um número)
//     let 42 = "Hello, World!";
// } catch (error) {
//     console.error(error.message); // Saída: Unexpected number
// }


//TypeError

//Indica que o código esperava receber um dado de um determinado tipo, tal qual 
//uma string de texto, mas recebeu outro, como um número, booleano ou null.

//try {
//     // Tentando chamar um método em uma variável que não é uma função
//     let numero = 42;
//     numero.toUpperCase(); // Isso resultará em um TypeError
// } catch (error) {
//     console.error(error.message); // Saída: numero.toUpperCase is not a function
// }

let numero = 42;
console.log(numero.toUpperCase());

