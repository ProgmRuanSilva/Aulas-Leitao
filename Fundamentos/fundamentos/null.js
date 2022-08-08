//o conceito de null e indefined:
/*Atribuição por referencia:
 *se vc colocar um valor em uma constante e criar outra constante com o valor da primeira elas iram armazenar uma na outra o mesmo endereço 
 *logo se vc mudar o valor de A sera mudado o  valor de B
 *Pois as duas mostram o mesmo enderço
*/

let valor //nçao inicializada
console.log(valor);

valor = null //Ausência de valor
console.log(valor);
//console.log(valor.toString);
//cuidado em chamar variaveis com o valor null!!

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = undefined //Evitar atribuir undefined
console.log(!!produto.preco);// undefined é conhecido como false
console.log(produto);
// delete produto.preco se v c quiser tirar um valor

produto.preco = null //Sem preco
console.log(!!produto.preco);
console.log(produto);

//quando vc quiser zerar uma referencia acrecente o valor null