let a = 1
console.log(a)

let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa({ //Promise so pode receber 1 parametro
        x: 3,
        y: 4
    })  //a menos que voce passe como objeto ou array descrito acima
})

p.then(function(valor) { //o retorno dessa funcao e dado depois 
    console.log(valor.x) //caso qundo passado mais de um parametro assece pelo metodo .
})

//limpando mais:
p.then(valor => console.log(valor))// vc pode encadear as funcoes then
//p.then(valor => valor[0])
//p.then(valor => console.log(valor)) resultado sai: valor = indice 0
//vc pode usar o then com funcoes nao anonimas