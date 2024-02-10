// function copyArrayMultiplyBy5(array) {

//     const output = [];
//     for (let i = 0; i < array.length; i++) {
//         output.push(array[i] * 5);
//     }
//     return output;
// }

// const myArray = [1, 2, 3];

// const result = copyArrayMultiplyBy5(myArray);

//console.log(result);

//Agora eu quero escoler a operação que será realizada e o valor.

//por exemplo, eu quero que seja utilizado o 3 e comece a somar nos
//armazenados no índice do array.


//HOF
// function copyArrayAndManipulate(array, fn){
//     const output = [];

//     for (let i = 0; i < array.length; i++){
//         output.push(fn(array[i]));
//     }

//     return output;
// }

// function multiplyBy5(input){
//     return input * 5;
// }
// function multiplyBy3(input){
//     return input * 3;
// }
// function multiplyBy4(input){
//     return input * 4;
// }

// const result1 = copyArrayAndManipulate([1, 2, 3], multiplyBy5);
// const result2 = copyArrayAndManipulate([1, 2, 3], multiplyBy3);
// const result3 = copyArrayAndManipulate([1, 2, 3], multiplyBy4);

// console.log(result1);
// console.log(result2);
// console.log(result3);


function copyArrayAndManipulate(array, fn) {
    const output = [];

    for(let i = 0; i < array.length; i++){
        output.push(fn(array[i]));
    }
    return output;
}

// const multiplyBy5 = (input) => input * 5;
// const multiplyBy3 = (input) => input * 3;
// const multiplyBy4 = (input) => input * 4;

//console.log(copyArrayAndManipulate([1,2,3], multiplyBy4));

//Podemos passar as funções diretamente

const result1 = copyArrayAndManipulate([1,2,3], (input) => input * 5);
const result2 = copyArrayAndManipulate([1,2,3], (input) => input * 3);
const result3 = copyArrayAndManipulate([1,2,3], (input) => input * 4);

console.log(result2);