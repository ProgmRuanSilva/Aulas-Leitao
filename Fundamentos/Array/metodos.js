//metodos mais importantes dos arrays

const pilotos = ['Vettel', 'Alonso', 'Raikkonem', 'Massa']
pilotos.pop() //tira o ultimo item da lista
console.log(pilotos) 
pilotos.push('Verstapen') //adiciona o item desejado 
console.log(pilotos)
pilotos.shift()// tira o primeiro item
console.log(pilotos)

pilotos.unshift('Hamilton')// adiciona no primeira posição
console.log(pilotos)

pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover atravez do splice
pilotos.splice(3, 1) //massa quebrou
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)// ele copia para outro array, apartir do elemento selecionado nesse casso o 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)// vc pode selecionar (o ultimo não entra)
console.log(algunsPilotos2)