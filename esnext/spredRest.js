// rest: juntar spread: espalhar
// rest para parametro de funcao
// spread para obj

// usamos o ... para o spread
const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = {ativo: true, ...funcionario}
console.log(clone)

// usando spread em array
const grupo1 = ["Maria", "Pedro", 'Samanta']
const grupoFinal = ['Rafaela', ...grupo1, 'Guilherme']
console.log(grupoFinal)