//Uma escola precisa imprimir uma lista de todos
// os funcionários e o código da turma

// class ModuloDeImpressao {
//     constructor() {
//         this._codigo = 10;
//     }

//     imprime(nomes) {
//             console.log(this._codigo);
//             nomes.forEach(function(nome){
//             console.log(`${this._codigo}: ${nome}`);
//         });
//     }
// }
//  const professores = ['Elias', 'Yuri', 'Gabriel', 'Guilherme', 'Yan'];
//  const impressao = new ModuloDeImpressao();

//  impressao.imprime(professores);

//vai retornar um erro com o this._codigo como undefined
//sem acesso ao construtor

 //Escopo Léxico

//  nomes.forEach((nome) => {
//         console.log(`${this._codigo}: ${nome}`);
//  })

// class ModuloDeImpressao {
//     constructor() {
//         this._codigo = 10;
//     }

//     imprime(nomes) {
//             nomes.forEach(nome => {
//             console.log(`${this._codigo}: ${nome}`);
//         });
//     }
// }
//  const professores = ['Elias', 'Yuri', 'Gabriel', 'Guilherme', 'Yan'];
//  const impressao = new ModuloDeImpressao();

//impressao.imprime(professores);

 //Uso do Método Bind
//que vai fixar um valor para o this, assim ele 
//não irá variar de acordo com o contexto em que está inserido.


//  class ModuloDeImpressao {
//     constructor() {
//         this._codigo = 10;
//     }
//     imprime(nomes) {
//         nomes.forEach(function(nome) {
//         console.log(`${this._codigo}: ${nome}`);
//      }.bind(this));
//    }
// }

// const professores = ['Elias', 'Yuri', 'Gabriel', 'Guilherme', 'Yan'];
// const impressao = new ModuloDeImpressao();
// impressao.imprime(professores);

//Outra propriedades interessantes:

// Retorno -> Não precisa declarar explicitamente o retorno
//Quando há apenas um bloco de código, a última expressão realizada
// vai ser o retorno da arrow funciton

//ex:

// const soma = (numero1, numero2) => numero1 + numero2;

// console.log(soma(3,7));

//Nome -> As arrows functions ganham 
//nome da variável atribuida quando da criação

// const arrow = () => {};
// console.log(arrow.name);


// Construtor - Não é possível criar construtores com Arrow Funciton

const Construtor = () => {};
new Construtor(); // Constructor is not a constructor
