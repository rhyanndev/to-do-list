let input = null;
let input2;

console.log(input); // null
console.log(input2); // undefined

/*
É aqui que entra o tipo undefined. Este tipo também representa “ausência de valor”,
porém de uma outra forma: usualmente, enquanto null é um valor atribuído a uma variável
que existe e foi iniciada, undefined se refere ao valor de uma variável
que não foi inicializada (ou seja, não foi atribuído nenhum valor a ela).
*/ 

/*
É importante notar que, embora os dois tipos sejam utilizados para sinalizar ausência de valor, 
os operadores de comparação do JavaScript podem ou não diferenciá-los:
*/

console.log(null == undefined); // true (valores "iguais", ausência de valor)
console.log(null === undefined); // false (tipos diferentes)