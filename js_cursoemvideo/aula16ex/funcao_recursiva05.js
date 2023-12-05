//função recursiva 

function fatorial(n){
     if (n == 1){
        return 1
    } else {
        return n * fatorial(n-1)
        //dentro da função possui a mesma função para a chamda dela mesma
    }

}

console.log(fatorial(5))

/*https://www.youtube.com/watch?v=3sm_nq7lE20 */

/*

5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4! 

n! = n  x (n-1)
1! = 1

*/

/*https://cfbcursos.com.br/javascript-41-recursividade/#:~:text=O%20retorno%20da%20fun%C3%A7%C3%A3o%20fatorial,1%20e%20assim%20por%20diante. */