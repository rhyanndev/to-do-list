let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = [] //Será usado um array para analisar os dados

function adicionar(){

    function isNumero(n){
        if(Number(n) >= 1 && Number(n) <= 100){
            return true;
        }else{
            return false;
        }

    }

    function inLista(n, l){
        //recebe dois parâmetros (n) número e a lista (l)
        //buscando valores dentro de um vetor
        if(l.indexOf(Number(n)) != -1){
            return true 
        } else{
            return false
        }
    }
        if((isNumero(num.value)) && !inLista(num.value, valores)) {
            //só irá adicionar se for verdade os dois
            //Para fazer a adição do elemento, terá que ser feita duas funções
            

            valores.push(Number(num.value))
            let item = document.createElement('option')
            //criando uma tag option
            item.text = `Valor ${num.value} adicionado.`

            //adicionando na lista
            lista.appendChild(item)

            //Quando for adicionado um novo número, o restuldo do "finalizar será apagado"

            res.innerHTML = ''

        } else{
            window.alert('Valor inválido ou já encontrado na lista.')
        }

        num.value = ' '
        num.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    }
    else{

        let tot = valores.length

        //Posição inicial do array [0] não tem maior e menor, por isso começar com o valor na posição 0
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0;
        let media = 0;

        for(let pos in valores){ //laço de percurso

            soma += valores[pos]

            media = soma/tot

            if(valores[pos] > maior)
                 maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }


        res.innerHTML = '';
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.<p>`
        res.innerHTML += `<p>O maior número é o ${maior}.<p>`
        res.innerHTML += `<p>O menor número é o ${menor}.<p>`
        res.innerHTML += `<p>Somando todos os valores dá ${soma}<p>`
        res.innerHTML += `<p>A média dos números é igual a ${media}<p>`
    }
}