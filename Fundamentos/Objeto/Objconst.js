//pessoa -> 123 -> {...}
//a const pessoa aponta para um endereço obj
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
//Quando usa-se isso vc está mechendo no obj não na constante
console.log(pessoa)

/* 
pessoa <- 456 -> {...}

pessoa = { nome: 'Ana'}

vc está tentando colocar pessoa em um outro endereço.
*/

Object.freeze(pessoa)
//vc está congelando o obj pessoa

pessoa.nome = 'Maria'
pessoa.end = 'Rua Abc'
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa)
//quando vc faz o uso do freeze ele congela todo o obj "se torna const"