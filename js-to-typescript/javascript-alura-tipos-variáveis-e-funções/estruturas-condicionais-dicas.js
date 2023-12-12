//Um pouco do uso do IF

const num = 10;

if (num !== null) {
 console.log(`o número é ${num}`);
} 

// Neste novo exemplo, o código dentro do 
// bloco if será executado normalmente, pois o resultado 
// da expressão num !== null (ou seja, “o valor da variável num é diferente de null”) retorna true.

// A expressão acima também poderia ser escrita da seguinte forma: 

if (num) {
    console.log(`o número é ${num}`);
   }


//Uma vez que null é um valor que podemos atribuir a uma variável, 
// a seguinte estrutura também seria possível:

const num2 = null;

if (num2 === null) {
 console.log('número não fornecido');
}

//O código acima também pode ser escrito da seguinte forma, pois null é considerado um valor “falsy”:


if (!num2) {
    console.log('número não fornecido');
   }