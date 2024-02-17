const localStorageKey = 'to-do-list-gn'



function newTask(){
    let input = document.getElementById('input-new-task');
    input.style.border = '';
    
    //validação
    if(!input.value){

        input.style.border = '1px solid red';
        alert("Digite algo para inserir em sua lista")
    }
    else if(validateIfExistsNewTask()){

        alert('Já existe uma tarefa com essa descrição');

    }
    else{
        //incrementando no localStorage

        //transformando uma string (texto) em um array de verdade
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")

        //colocando valor no array
        values.push({
            name: input.value
        })

        //atualizando no localStorage
        //Pegando o array e transformando em string
        localStorage.setItem(localStorageKey, JSON.stringify(values))

        showValues();
            
    }

    input.value = '';
}


function showValues(){

    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let list = document.getElementById('to-do-list')
    list.innerHTML = '';
    for(let i = 0; i < values.length; i++){

        list.innerHTML += `<li>${values[i]['name']}<button id='btn-ok'onclick='removeItem("${values[i]['name']}")' ></button></li>`
    }
}


function removeItem(data){

    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    let index = values.findIndex(x=> x.name === data);
    //procurando elemento que tenha um name igual a data 

    values.splice(index, 1);


    //atualizando os valores do localStorage

    localStorage.setItem(localStorageKey, JSON.stringify(values))
    showValues();
}


function validateIfExistsNewTask(){

    //valores que tem no localStorage
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    let inputvalue = document.getElementById('input-new-task').value;

    //vai percorrer a lista de elementos para verificar se já tem o elemento 
    let exists = values.find(x=> x.name == inputvalue)
    return !exists ? false : true;

   

}


showValues();