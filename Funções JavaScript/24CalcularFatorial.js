// Função que calcula o fatorial de um número "n"
function fatorial(n) {
    // Inicializa a variável "fat" com o valor 1, que será usada para armazenar o resultado do fatorial
    let fat = 1;

    // A cada iteração, o valor de "c" é multiplicado ao "fat" para acumular o resultado
    for (let c = n; c > 1; c--) {
        fat *= c; // Multiplica o valor atual de "fat" pelo valor de "c" e armazena o resultado em "fat"
    }

    // Retorna o valor final de "fat", que é o fatorial de "n"
    return fat;
}

// Exibe no console o fatorial de 5 (ou seja, 5 * 4 * 3 * 2 * 1 = 120)
console.log(fatorial(5)); 


function fatorial(n) {
    if (n == 1) {
        return 1 }
            else {
                return n * fatorial (n-1)
            }
        }

console.log(fatorial(145
))