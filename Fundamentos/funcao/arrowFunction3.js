let comparaComThis = function (param) {
    console.log(this == param)
} //cuidado ao mexer com this dentro de uma função, vc etará mexendo ne um escopo global
 
comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj) //definimos comparacomThis atrelar com obj
comparaComThis(global) // se torna false
comparaComThis(obj) // está preso ao obj

// vejamos com arrow function

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)
comparaComThisArrow(this)

comparaComThisArrow = comparaComThisArrow.bind(obj) // eu teoricamente prendi o thisarrow
comparaComThisArrow(obj)// Arrow function é mais forte do que o bind

comparaComThisArrow(module.exports)