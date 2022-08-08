//formas diferentes de percorer um array

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
aprovados.forEach(function(nome, indice) { //vc sempre acessa 2 parametros, mas pode suprimir como no caso a seguir
    console.log(`${indice + 1}) ${nome}` )//tem um 3o parametro que é o própio array
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)
