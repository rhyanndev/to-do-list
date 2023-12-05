/* let valores = [8, 1, 7, 4, 2, 9]
valores.sort();

for(let pos = 0 ;  pos < valores.length; pos++ ){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
} 

for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} */

/* function parimpar(n){

    
    if(n%2==0){
        return `meu número ${n} é par`
    }
    else{
        return `meu número ${n} é ímpar`
    }
}

let result = parimpar(12);
console.log(result); */

/*se o n1 ou o n2 não for passado o valor será igual a zero*/
function soma(n1 = 0, n2 = 0) {
  return n1 + n2;
}

console.log(soma(2));
