// const lukeLogin = () => {
//     let array = []
//     for (i = 0; i < 90000; i++){
//         array.push(i)
//     }
//     return "Luke logado com sucesso!"
// }

// const leiaLogin = () => {
//     let array = []
//     for (i = 0; i < 90000; i++){
//         array.push(i)
//     }
//     return "Leia logada com sucesso!"
// }

// lukeLogin()
// leiaLogin() 

// console.log(lukeLogin());
// console.log(leiaLogin());


// const usuarioLogin = (pessoa) => {
//     let array = []
//     for( i = 0; i < 90000; i++){
//       array.push(i)
//     }
//     return `${pessoa} logou com sucesso no sistema!`
//   }
  
//   console.log(usuarioLogin("Luke"))

/*Por meio do conceito de higher order function, podemos compor 
funções para separar tarefas diferentes. Para exemplificar, 
podemos criar uma função de acesso que vai cuidar da visualização do 
resultado e outra que vai ficar responsável pela lógica:*/

const acesso = (nome) => {
    return `${nome} logou com sucesso no sistema!`
  }
  
  const usuarioLogin = (nome) => {
    let array = []
    for( i = 0; i < 90000; i++){
      array.push(i)
    }
    return acesso(nome)
  }
  
  usuarioLogin("Luke")

  /* Como as duas funções estão no mesmo escopo global, 
  a função usuarioLogin() consegue acessar a função acesso(). 
  Assim, funções com responsabilidades diferentes são geradas 
  dentro de outras funções e o valor de retorno da função 
  usuarioLogin() é outra função, acesso(). */ 

  // Função genérica:

//   const autentica = (cargo) => {
//     let array = []
//     for( i = 0; i < cargo; i++){
//       array.push(i)
//     }
//     return true;
//   }

  //Refatorando a função de login 

//   const login = (pessoa, autentica) => {
//     if(pessoa.cargo === `funcionario`) {
//        autentica(90000)
//     } else if(pessoa.cargo === `diretoria`) {
//        autentica(900000)
//     }
//    return acesso(pessoa.nome)
//   }



//Código completo:

const acesso = (nome) => {
    return `${nome} logou com sucesso no sistema!`
  }
  
  const autentica = (cargo) => {
    let array = []
    for( i = 0; i < cargo; i++){
      array.push(i)
    }
    return true;
  }
  
  const login = (pessoa, autentica) => {
    if(pessoa.cargo === `funcionario`) {
       autentica(90000)
    } else if(pessoa.cargo === `diretoria`) {
       autentica(900000)
    }
   return acesso(pessoa.nome)
  }