//Cadeia de Prototipos (prototype chain)
Object.prototype.attr0 = '0'//não é recomendado
const avo = { attr1: 'A'} //o avo tem como dna o 'prototype'
const pai = { __proto__: avo, attr2: 'B', attr3: '3 '} // o pai tem como dna o avo
const filho = { __proto__: pai, attr3: 'C'} // o filho tem como dna o pai
//chamado o atributo que não á no filho ele busca nessa cadeia de dna desde que seja definido antes 
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)
console.log(avo.attr2) //não se pode buscar o que ainda não esta definido. (Sobreamento).

//vamos a um exemplo mais complexo: 
const carro = { //Definindo uma função carro em que será a função "Pai"
    velAtual: 0, //definimos uma variavel da velocidade
    velMax: 200, //Definimos uma variavel de velocidade Final
    acelerarMais(delta) { //criamos uma função em que o carro acelera a partir do "Delta"
        if (this.velAtual + delta <= this.velMax) { //usamos uma condição if, usando o this. para podemos usar em outras funções.
            this.velAtual += delta //se a velAtual for menor ou igual a velMax ele continua acelerando
        } else {
            this.velAtual = this.velMax //aqui definimos que se for maior atraves do else ele resultará na velMax
        }
    },
    status() { //Criamos uma função para mostrar no painel as atualizações
        return `${this.velAtual}Km/h de ${this.velMax}km/h`
    }
}

const ferrari = { //Vamos criar outra função em que será o "filho"
    modelo: 'f40', //note que estamos fazendo uma const nova 
    velMax: 324, //O JS sobrescreverá pois a velMax é de 200 mas a ferrari vem primeiro (Sombreamento).
}

const volvo = { //Criando um novo modelo (ainda não foi definido o Prototype)
    modelo: 'V40', //mesma coisa  
    status() { //aqui vamos fazer um pouco diferente vamos usar uma função e adicionar novas funcionalidades
        return `${this.modelo}: ${super.status()}`//Aqui vemos a primaira vez o super que é usado para sombrear
    }//da mesma forma que this. é usado pra deixar publico, o super é usado para o prototipo pai
}//rever o this e ifs.

Object.setPrototypeOf(ferrari, carro)//nesse momento carro é o prototype da ferrari (obj antes, depois, prototype)
Object.setPrototypeOf(volvo, carro)//igualmente estabeleço uma relação entre volvo e carro (Imortante)

console.log(ferrari)//Na hora do resultado ele realmente mostra só os itens do obj ferrari
console.log(volvo)//Em Volvo não temos a velMax, mas ele pode puxar se ele procurar(quando chamado ele mostra o obj)

volvo.acelerarMais(100)//Aumentei a Velocidade chamando a função
console.log(volvo.status())// Aqui ele vai chamar tambem o status

ferrari.acelerarMais(300)
console.log(ferrari.status())