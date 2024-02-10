const alunos = [
    "João",
    "Juliana",
    "Ana",
    "Caio",
    "Lara",
    "Marjorie",
    "Guilherme",
    "Aline",
    "Fabiana",
    "Andre",
    "Carlos",
    "Paulo",
    "Bia",
    "Vivian",
    "Isabela",
    "Vinícius",
    "Renan",
    "Renata",
    "Daisy",
    "Camilo",
]

//.slice()

// const sala1 = alunos.slice(0, 10);

// //quando se informa o parâmetro apenas um índice, já entende-se que é
// //para pegar os índices após o informado até o final
// const sala2 = alunos.slice(10);

// console.log(sala1);
// console.log(sala2);
// //não vai alterar o array original





//Fazendo de forma mais dinâmica
const sala1 = alunos.slice(0, alunos.length / 2);
const sala2 = alunos.slice(alunos.length / 2);

console.log(sala1);
console.log(sala2);











