console.log(typeof Object);
console.log(typeof new Object);

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {} 
console.log(typeof Produto)
console.log(typeof new Produto)
/*a forma de criar objetos em javascript é a partir de funcão
/quando se cria um objeto de forma literal vc ja está instanciando aquele objeto
/objetos podem ser criados: 
/1- a partir de uma instancia do propio javascript
/2- a partir de uma instsancia criadas por vc 
/3- a partir de uma função ou classificação.
*/