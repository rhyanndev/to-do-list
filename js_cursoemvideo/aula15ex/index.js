function tabuada(){
    var numero = document.getElementById('numero')
    var output = document.querySelector('#output')


    if(n1 == 0 || n1 < 0){
        alert('Digite um valor válido')
    }
    else{
        var n1 = Number(numero.value)
        let c = 0;
        while(c <= 10){

            var resultado = `${n1} x ${c} = ${n1 * c} <br>`

            output.innerHTML = resultado;

            c++;

        }


    }

    
    
}