(function(){ 
    
    function calcularIMC(peso, altura){

        return peso / (altura * altura);

    }
    
    function classificaIMC(imc){

        if(imc <= 18.5){
            return 'Magreza';
        }
        else if(imc <= 24.9){
            return 'Normal';
        }
        else if(imc <= 29.9){
            return 'Sobrepeso';
        }
        else if(imc <= 39.9){
            return 'Obesidade';
        }
        else(imc <= 40.0)
            return 'Obesidade grave';
        
    }

    var peso = 105;
    var altura = 1.75;

    var imc = calcularIMC(peso, altura)
    var classificaIMC = classificaIMC(imc)

    console.log('classificação IMC: ', classificaIMC);

})();

   