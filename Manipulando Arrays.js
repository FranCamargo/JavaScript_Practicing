let num = [5, 3, 2]; //declaração de vetor.
num[3] = 4; //alocar o número 4 na posição 3.
num.push(7); //aloca o número 7 na última posição.
console.log(num); //mostra o vetor e seus valores.
console.log(num.length); //mostra o tamanho do vetor (quantidade de espaço).
console.log(`O vetor tem ${num.length} posições.`); //usando a forma simplificada para mostrar o tamanho do vetor.
console.log(num[4]); //mostra o valor na posição 4.
num.sort(); //coloca o vetor em ordem crescente
console.log(num); //mostra o vetor após sort transformar em ordem crescente
num.push(1); //adiciona o 1 na ultima posição após estar em ordem
console.log(num); //mostra o vetor depois de adicionar o 1 ao final

num.push(43, 5, 10, 12); //adiciona vários números nas posições finais do array
console.log(num);

num.push(4); // adiciona o 4 na ultima posição do array
console.log(num); //mostra o array
let vetor = num.lastIndexOf(4); //busca a ultima posição em que esse valor aparece
console.log(
  `A última vez que o valor 4 aparece no vetor é na ${vetor}ª posição.`
); //mostra a posição na mensagem.

num.splice(5,2); //seleciona a posição para começar a deletar os valores do array.
console.log(num); //mostra o array

//função .map processa todos os valores do array, de cada posição.
let res = 0; //declarando valor inicial da variável
num.map((pos)=>{console.log(`item ${pos}`)//indica que é pra somar todos os itens.
    res = res + pos; //variável recebe o resultado da soma de cada item com seu valor inicial.
})
console.log(res) //Mostra o valor final da soma de todos os itens.

//funçao .filter filtra itens de acordo com o que você definir e retorna um novo array com eles.
let pares = num.filter(num => num % 2 == 0) //cria um novo array apenas com números pares dentro do vetor inicial.
console.log(pares)//mostra o novo array.

/*.forEach funciona da mesma forma que .filter ou .map porém não altera o array original,
mas permite modificar elementos externos ou realizar ações com cada elemento.*/
let teste = num.forEach(teste => console.log(`item For Each ${teste}`));


/*Bloco de repetição que mostra todos os valores dentro do 
vetor usando o FOR */
for (let pos = 0; pos < num.length; pos++) {
  console.log(num[pos]);
}

for (let pos in num) {
  //versão simplificada do bloco acima.
  console.log(num[pos]);
}

let pos = num.indexOf(9); //Seleciona um dos valores do vetor á variável.

if (pos == -1) {
  // Caso não encontre o valor, o sistema retorna valor -1.
  console.log("Valor não encontrado");
} else {
  console.log(`O valor 3 está na posição ${pos}`);
} //Mostra a posição desse valor no vetor.

console.log(num)
console.log(`O vetor final ficou com ${num.length} posições`)
