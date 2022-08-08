//é uma revisão sobre como fazer objetos
 
// literal

const obj1 = {}
console.log(obj1)

//Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome //significa que está visivel na instancia que vc criou
    this.getPrecocomDesconto = () => { //nesse caso vc não tem mais como mexer no desc e preco, pois estão escondidos na função
        return preco * (1 - desc)
    }
} //Nesse caso preco e desconto estão encapsulados

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('NoteBook', 2988.99, 0.25)

console.log(p1.getPrecocomDesconto(), p2.getPrecocomDesconto())

//Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase/ 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

//Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//Uma Função que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JASON"}')
console.log(fromJSON.info)

