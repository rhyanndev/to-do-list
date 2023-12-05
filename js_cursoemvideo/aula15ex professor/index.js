function tabuada(){
    let num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')

    if(num.value.length == 0){
        alert('Por favor, digite um número!')
    }
    else{
        let n = Number(num.value)
        let c = 1;
        tab.innerHTML = ''; // antes de começar outra tabuada o que estará dentro do select será limpado 
        while(c <= 10){

            //Criando um option na tag 'select' do HTML
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab ${c}` //para saber qual item foi selecionado 
            tab.appendChild(item) //adicionar o elemento filho
            c++
        }
    }    
}