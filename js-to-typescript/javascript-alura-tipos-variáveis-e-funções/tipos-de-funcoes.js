//Existem tipos de funções no JavaScript

//Funções sem retorno e sem parâmetro, exemplo:

function cumprimentar(){
    console.log("Olá pessoal!");
}

cumprimentar();

//Função sem retorno e com parâmetro

function cumprimentarPessoa(nome) {
    console.log(`Olá ${nome}, tudo bem?`);
}

cumprimentarPessoa("Rhyann");


//Função com retorno e sem parâmetro

function cumprimentarNovo(){
    return "Oi gente!"
}

function cumprimentarPessoaNovo(nomePessoa){
    console.log(`${cumprimentarNovo()} Meu nome é ${nomePessoa}`);
}

cumprimentarPessoaNovo("Paula");


//Função com return e mais de um parâmetro 

function operacaoMatematica(numero1, numero2, numero3) {
    return numero1 + numero2 + numero3
   }
   
   operacaoMatematica(15, 30, 45) // 90 





   //Observe o código:

   function comParametro(param) {
    console.log(param)
}
comParametro()

//Qual seria a saída no console?

//No JavaScript, quando uma função é chamada sem um argumento para um parâmetro definido, o valor desse parâmetro é automaticamente considerado como 'undefined'. 