let a = 3

global.b = 123
this.c = 456
this.d = false
this.e = "teste"

console.log(this.a)
console.log(global.a)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)

//criando uma variavel maluca: sem var e let
abc = 3 //não faça isso em casa!!!
console.log(global.abc)

//module.exports  = { 456, f: false, g: "teste" } 

//entenda o runtime em que vc está trabalhando pode dar muita merda
//fuja do escopo global, se for nessesario sempre faça com um obj