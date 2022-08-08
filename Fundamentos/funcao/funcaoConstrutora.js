function Carro(velocidadeMaxima = 200, delta = 5) {
    //atributo privado
    let velocidadeAtual = 0
    // metodo publico
    this.acelerar = function () {  //this é responsavel por colocar essa função pra fora ou seja um metodo publico
        if (velocidadeAtual + delta <= velocidadeMaxima) { //se a velocidade for menor ou igual a VM ele define que  
            velocidadeAtual += delta //a velocidade é a maxima
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

        //metodo publico
        this.getVelocidadeAtual = function () {
            return velocidadeAtual // Pegando um valor Privado
        }
} //Se vc quiser criar um atributo privado crie um let, se vc quiser pegar um atributo privado chame atravez de uma função

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro (350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
//tem aparencia de OO
// é mais juntada á um objeto
//vc pode passar os parenteses ou não dentro de carro
//a função funciona como uma classe e apartir dessa classe vc pode instanciar objetos

//se vc quiser criar uma função privada é colocar const ou let
//se vc quiser colocar uma função publica é só criar com this.