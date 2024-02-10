var respostaDeTudo = 42
let idade = 29
const pi = 3.14

console.log(respostaDeTudo, idade, pi);
{
    var respostaDeTudo = 3.14
    let idade = 42
    const pi = 29
    console.log(respostaDeTudo, idade, pi)

}
//console.log(respostaDeTudo, idade, pi);

//Pode-se entender que, var e let podem ser reatribuídas, porém,
// o "let" só é reatribuido dentro do seu escopo.

//primeiro resultado, console global depois do bloco de chaves: 
// 3.14 42 29
// 3.14 29 3.14


//segundo resultado, console global antes do bloco de chaves: 
// 42 29 3.14
// 3.14 42 29

