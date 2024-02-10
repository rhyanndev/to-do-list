function exibir(num){
    console.log(`O resultado da operação é ${num}`);
}

function soma(a, b, callback){
    var op = a + b;
    callback(op);
}

function multiplicacao(a, b, cb){
    var op = a * b;
    cb(op);
}

soma(1, 2, exibir);

multiplicacao(2,2, exibir)