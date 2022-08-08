//Coisas usaveis
//Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extencivel', Object.isExtensible(produto))

produto.nome = 'Borrarcha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal
const pessoa = { nome: 'Juliana', idade: 35}
console.log('Selado', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze = selado constante valores constantes
//são coisas para garantir mais segurança para o codigo
