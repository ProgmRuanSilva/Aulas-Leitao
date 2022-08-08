//javascript só vê numeros Inteiros se eu colocar 1.1 e exibir um boolean ele dá como False

const peso1 = 1.0;
const peso2 = Number("2.1");

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2));
// a função .toFixed() é usada para mostrar o numero de casas decimais que voçe quiser

console.log(media.toString(2));
/* se vc quiser converter um numero em string .toString() é o cara.
*  nessa função toString.(2) converte em numero binario.
*/

console.log(typeof media);
console.log(typeof Number);
//Number com maiusculo é uma Função.