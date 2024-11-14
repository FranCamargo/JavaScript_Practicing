function soma (n1,n2) {  
    return n1 + n2
}

console.log(soma(24,55)) //Define os valores dos parâmetros e mostra o resultado da função.

console.log(soma(24)) /* Neste, o parâmetro que falta (N2 )ficará undefined, 
retornando NaN (not a number) - pra não acontecer dá pra inicializar os 
parâmetros com valor 0.*/

function mult (n1=0,n2=0) {  
    return n1 * n2
}
console.log(sub(24))
