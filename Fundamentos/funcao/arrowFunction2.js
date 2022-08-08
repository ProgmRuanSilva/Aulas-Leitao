function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa
//this dentro de uma funçao arrow é fixo.
//nesse caso ele está dentro do contexto lexico da função Pessoa.
