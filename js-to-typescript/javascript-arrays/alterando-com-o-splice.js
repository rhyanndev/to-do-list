const alunos = [
    "João",
    "Ana",
    "Caio",
    "Lara",
    "Marjorie",
    "Leo"
]

console.log(alunos);

console.log("Ana e Caio mudaram de escola, então:");

alunos.splice(1,2);

console.log(alunos);

console.log("E o Rodrigo entrou nesta sala");

alunos.push("Rodrigo");

console.log(alunos);

// Ao invés de utilizar o método push, eu posso colocar novos
//valores dentro do parâmetro do .splice

console.log("Removendo Lara e Marjorie colocando Ebenezer");
alunos.splice(1, 2, "Ebenezer");

console.log(alunos)